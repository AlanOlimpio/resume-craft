"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { InfosSidebar } from "../infos-sidebar";
import { StructureSidebar } from ".";
import Logo from "@/components/ui/logo";

export function MenuMobile() {
  const [openInfo, setOpenInfo] = useState<boolean>(false);

  const toggleOpenIfon = () => {
    setOpenInfo((prev) => !prev);
  };

  const [openStructure, setOpenStructure] = useState<boolean>(false);

  const toggleOpenStructure = () => {
    setOpenStructure((prev) => !prev);
  };

  return (
    <div className="p-4 md:hidden grid">
      <Logo className="mb-4 !w-[180px]" />
      <div className="grid gap-4 grid-cols-2">
        <Sheet open={openInfo} onOpenChange={setOpenInfo}>
          <SheetTrigger asChild>
            <Button
              onClick={toggleOpenIfon}
              variant="outline"
              className="md:hidden"
            >
              <span>Informações</span>
              <span className="sr-only">Informações</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[100%]">
            <SheetTitle>Informações</SheetTitle>
            <InfosSidebar />
          </SheetContent>
        </Sheet>
        <Sheet open={openStructure} onOpenChange={setOpenStructure}>
          <SheetTrigger asChild>
            <Button
              onClick={toggleOpenStructure}
              variant="outline"
              className="md:hidden"
            >
              <span>Estrutura</span>
              <span className="sr-only">Estrutura</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[100%]">
            <SheetTitle>Estrutura</SheetTitle>
            <StructureSidebar />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
