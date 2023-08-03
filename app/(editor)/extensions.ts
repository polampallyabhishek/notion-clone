import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import SlashCommand from "./slash-command";

export const TipTapEditorExtensions = [
  StarterKit.configure({
    bulletList: {
      HTMLAttributes: {
        class: "list-disc list-outside leading-3",
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal list-outside leading-3",
      },
    },
    listItem: {
      HTMLAttributes: {
        class: "leading-normal",
      },
    },
    blockquote: {
      HTMLAttributes: {
        class: "border-l-4 border-gray-300 pl-4",
      },
    },
    codeBlock: {
      HTMLAttributes: {
        class: "rounded-md bg-gray-200 p-5 font-mono font-medium text-gray-800",
      },
    },
    code: {
      HTMLAttributes: {
        class:
          "rounded-md bg-gray-200 px-1.5 py-1 font-mono font-medium text-black",
      },
    },
    horizontalRule: false,
    dropcursor: {
      color: "#DBEAFE",
      width: 4,
    },
  }),
  Placeholder.configure({
    // Not sure what the type of node is, so I'm using any
    placeholder: ({ node }: any) => {
      if (node.type.name === "heading") {
        return `Heading ${node.attrs.level}`;
      }

      return "Press '/' for commands, or enter some text...";
    },
    includeChildren: true,
  }),
  Table.configure({
    resizable: true,
    HTMLAttributes: {
      class: "border border-slate-300 border-collapse",
    },
  }),
  TableRow.configure({
    HTMLAttributes: {
      class: "",
    },
  }),
  TableCell.configure({
    HTMLAttributes: {
      class: "min-w-[100px] border border-slate-300 py-2 px-4",
    },
  }),
  TableHeader.configure({
    HTMLAttributes: {
      class: "min-w-[100px] border border-slate-300 py-2 px-4",
    },
  }),
  SlashCommand,
];
