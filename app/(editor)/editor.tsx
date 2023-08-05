"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TipTapEditorExtensions } from "./extensions";
import { cx } from "class-variance-authority";
import {
  ArrowUpRight,
  AtSign,
  ChevronDown,
  Code,
  LucideIcon,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";

export default function Editor() {
  const editor = useEditor({
    extensions: TipTapEditorExtensions,
    content: "<h1>Untitled</h1>",
  });

  return (
    <div
      onClick={() => {
        editor?.chain().focus().run();
      }}
      className="relative flex min-h-screen w-full cursor-text flex-col items-center p-32"
    >
      <div className="absolute left-8 top-8 rounded-lg bg-gray-100 px-2 py-1 text-sm text-gray-400">
        Saved {/* {saveStatus} */}
      </div>
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100, maxWidth: "auto" }}
        >
          <div className="flex items-center bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden">
            <BubbleGroup>
              <BubbleItem>Ask AI</BubbleItem>
            </BubbleGroup>
            <BubbleGroup>
              <BubbleItem>Turn into</BubbleItem>
            </BubbleGroup>
            <BubbleGroup>
              <BubbleItem icon={ArrowUpRight} iconBefore>
                <span className="border-b border-gray-200">Link</span>
              </BubbleItem>
            </BubbleGroup>
            <BubbleGroup>
              <BubbleItem icon={MessageCircle} iconBefore>
                Comment
              </BubbleItem>
            </BubbleGroup>
            <BubbleGroup>
              <BubbleItem
                className={editor.isActive("bold") ? "text-blue-500" : ""}
                onClick={() => editor.chain().focus().toggleBold().run()}
              >
                B
              </BubbleItem>
              <BubbleItem
                className={editor.isActive("italic") ? "text-blue-500" : ""}
                onClick={() => editor.chain().focus().toggleItalic().run()}
              >
                I
              </BubbleItem>
              <BubbleItem
                className={editor.isActive("underline") ? "text-blue-500" : ""}
                onClick={() => editor.commands.toggleUnderline()}
              >
                U
              </BubbleItem>
              <BubbleItem
                className={editor.isActive("strike") ? "text-blue-500" : ""}
                onClick={() => editor.chain().focus().toggleStrike().run()}
              >
                S
              </BubbleItem>
              <BubbleItem
                className={editor.isActive("code") ? "text-blue-500" : ""}
                onClick={() => editor.chain().focus().toggleCode().run()}
              >
                <Code strokeWidth={1} size={18} />
              </BubbleItem>
            </BubbleGroup>
            <BubbleGroup>
              <BubbleItem icon={ChevronDown}>A</BubbleItem>
            </BubbleGroup>
            <BubbleGroup>
              <BubbleItem>
                <AtSign strokeWidth={1} size={18} />
              </BubbleItem>
            </BubbleGroup>
            <BubbleGroup>
              <BubbleItem>
                <MoreHorizontal strokeWidth={1} size={18} />
              </BubbleItem>
            </BubbleGroup>
          </div>
        </BubbleMenu>
      )}
      <div className="relative w-full max-w-screen-lg">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

const BubbleGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-r border-gray-200 flex items-center">{children}</div>
  );
};

const BubbleItem = ({
  children,
  className,
  onClick,
  icon: Icon,
  iconBefore = false,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconBefore?: boolean;
}) => {
  return (
    <button
      className={cx(
        "flex items-center whitespace-nowrap text-sm py-1 px-2 hover:bg-gray-100",
        className
      )}
      onClick={onClick}
    >
      {Icon && iconBefore && (
        <Icon className="mr-1" strokeWidth={1} size={16} />
      )}
      {children}
      {Icon && !iconBefore && (
        <Icon className="ml-1" strokeWidth={1} size={16} />
      )}
    </button>
  );
};
