"use client";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ResumeTemplate } from "./templates";
import { TransformControls } from "./controls";
import { NavigationHeader } from "./header";

export function ResumeContent() {
  return (
    <section className="w-full h-full p-6 overflow-hidden flex items-center justify-center relative bg-muted dark:bg-background">
      <TransformWrapper
        initialScale={0.5}
        minScale={0.4}
        centerOnInit
        centerZoomedOut
        limitToBounds={false}
      >
        <>
          <NavigationHeader />
          <TransformControls />
          <TransformComponent>
            <ResumeTemplate />
          </TransformComponent>
        </>
      </TransformWrapper>
    </section>
  );
}
