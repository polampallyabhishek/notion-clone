import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Underline from "@tiptap/extension-underline";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Text from "@tiptap/extension-text";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Bold from "@tiptap/extension-bold";
import BlockQuote from "@tiptap/extension-blockquote";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Link from "@tiptap/extension-link";
import DropCursor from "@tiptap/extension-dropcursor";
import GapCursor from "@tiptap/extension-gapcursor";
import History from "@tiptap/extension-history";
import HardBreak from "@tiptap/extension-hard-break";
import Heading from "@tiptap/extension-heading";
import SlashCommand from "./slash-command";
import { TrailingNode } from "./trailingNode";
import { DBlock } from "./d-block";
import { Placeholder } from "./placeholder";
import { Document } from "./doc";
import { Paragraph } from "./paragraph";

export const TipTapEditorExtensions = [
  Document,
  DBlock,
  Paragraph,
  Text,
  Heading.configure({
    levels: [1, 2, 3],
  }),
  BulletList.configure({
    HTMLAttributes: {
      class: "list-disc list-outside leading-3",
    },
  }),
  OrderedList.configure({
    HTMLAttributes: {
      class: "list-decimal list-outside leading-3",
    },
  }),
  ListItem.configure({
    HTMLAttributes: {
      class: "leading-normal",
    },
  }),
  BlockQuote.configure({
    HTMLAttributes: {
      class: "border-l-4 border-gray-300 pl-4",
    },
  }),
  Code.configure({
    HTMLAttributes: {
      class:
        "rounded-md bg-gray-200 px-1.5 py-1 font-mono font-medium text-black",
    },
  }),
  CodeBlock.configure({
    HTMLAttributes: {
      class: "rounded-md bg-gray-200 p-5 font-mono font-medium text-gray-800",
    },
  }),
  Bold,
  Italic,
  Strike,
  GapCursor,
  History,
  HardBreak,
  DropCursor.configure({
    width: 2,
    class: "notitap-dropcursor",
    color: "skyblue",
  }),
  Underline.configure({
    HTMLAttributes: {
      class: "underline",
    },
  }),
  Link.configure({
    autolink: true,
    linkOnPaste: true,
    protocols: ["mailto"],
    openOnClick: false,
  }),
  Placeholder.configure({
    placeholder: "Type `/` for commands",
    includeChildren: true,
  }),
  Table.configure({
    resizable: true,
    HTMLAttributes: {
      class: "border border-slate-300",
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
  TaskList.configure({
    HTMLAttributes: {
      class: "transform translate-x-[-20px]",
    },
  }),
  TaskItem.configure({
    nested: true,
    HTMLAttributes: {
      class: "flex items-center gap-2",
    },
  }),
  SlashCommand,
  // TrailingNode,
];
