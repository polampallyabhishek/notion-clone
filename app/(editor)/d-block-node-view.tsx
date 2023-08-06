/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useMemo } from "react";
import { NodeViewWrapper, NodeViewProps, NodeViewContent } from "@tiptap/react";
import { GripVertical, Plus } from "lucide-react";

export const DBlockNodeView: React.FC<NodeViewProps> = ({
  node,
  getPos,
  editor,
}) => {
  const isTable = useMemo(() => {
    const { content } = node.content as any;

    return content[0].type.name === "table";
  }, [node.content]);

  const createNodeAfter = () => {
    const pos = getPos() + node.nodeSize;

    editor.commands.insertContentAt(pos, {
      type: "dBlock",
      content: [
        {
          type: "paragraph",
        },
      ],
    });
  };

  return (
    <NodeViewWrapper as="div" className="flex gap-2 group w-full relative">
      <section
        className="flex pt-[1px] gap-1 items-center"
        aria-label="left-menu"
        contentEditable="false"
      >
        <button
          type="button"
          className="d-block-button cursor-pointer group-hover:opacity-100"
          onClick={createNodeAfter}
        >
          <Plus color="#777" size={16} />
        </button>
        <div
          className="d-block-button cursor-grab group-hover:opacity-100"
          contentEditable={false}
          draggable
          data-drag-handle
        >
          <GripVertical color="#777" size={16} />
        </div>
      </section>

      <NodeViewContent
        className={`node-view-content w-full ${isTable ? "ml-6" : ""}`}
      />
    </NodeViewWrapper>
  );
};
