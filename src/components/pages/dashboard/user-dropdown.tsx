import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LogOut, SquareUser } from "lucide-react";

import { signOut } from "next-auth/react";
import { DefaultSession } from "next-auth";

type UserDropdownProps = {
  user?: DefaultSession["user"];
};

export function UserDropdown({ user }: UserDropdownProps) {
  if (!user) return null;

  const initials = user.name
    ?.split(" ")
    ?.slice(0, 2)
    .map((name) => name[0])
    .join("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full gap-2 justify-start px-2">
          <Avatar className="w-7 h-7 block">
            <AvatarImage src={user.image ?? ""} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <p className="w-[162px] max-w[100%] whitespace-nowrap overflow-hidden text-ellipsis text-left">
            {user.name}
          </p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        <Link passHref href="/dashboard/account">
          <DropdownMenuItem className="gap-2">
            <SquareUser size={16} />
            Configurações
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: "/auth/login" })}
          className="gap-2 text-red-500"
        >
          <LogOut size={16} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
