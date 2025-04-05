"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { InfosSidebar } from "../infos-sidebar";
import { ResumeContent } from "../resume-content";
import { StructureSidebar } from "../structure-sidebar";

export function PanelGroup({ title }: { title: string }) {
  return (
    <ResizablePanelGroup direction={"horizontal"} className="w-full h-full">
      <ResizablePanel
        minSize={20}
        maxSize={40}
        defaultSize={30}
        className="max-md:hidden"
      >
        <InfosSidebar />
      </ResizablePanel>
      <ResizableHandle withHandle className="max-md:hidden" />
      <ResizablePanel defaultSize={45}>
        <ResumeContent title={title} />
      </ResizablePanel>
      <ResizableHandle withHandle className="max-md:hidden" />
      <ResizablePanel
        minSize={20}
        maxSize={35}
        defaultSize={25}
        className="max-md:hidden"
      >
        <StructureSidebar />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
