import { Skeleton } from "@/components/ui/skeleton";

export default function ResumeLoadingPage() {
  return (
    <div className="grid grid-cols-3  max-md:grid-cols-1 p-2 gap-2 h-screen w-full">
      <Skeleton className="w-full h-full" />
      <Skeleton className="w-full h-full" />
      <Skeleton className="w-full h-full max-md:hidden" />
    </div>
  );
}
