"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { cn } from "@/lib/utils";
import { MenuBar } from "./menu-bar";
import { useEffect } from "react";

type EditorProps = {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
  ref?: null;
};

export function Editor({ value, onChange, className, ref }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-4",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-4",
          },
        },
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "focus:outline-none h-full -p4",
      },
    },
    onCreate({ editor }) {
      onChange?.(editor?.getHTML());
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
    autofocus: false,
  });

  useEffect(() => {
    const editorHTML = editor?.getHTML();

    if (editorHTML !== value) {
      setTimeout(() => {
        editor?.commands.setContent(value);
      }, 0);
    }
  }, [value]);

  return (
    <div
      className={cn(
        "bg-background border border-muted rounded-2xl w-full flex flex-col",
        className
      )}
    >
      <MenuBar editor={editor} />
      <div className="h-full [&>div]:h-full p-2 flex flex-col overflow-x-auto max-h-[200px]">
        <EditorContent editor={editor} ref={ref} />
      </div>
    </div>
  );
}
