import { GridApi, RowNode } from '@ag-grid-community/core';

export const getNodesByDiscNumber = (args: { api: GridApi; discNumber: number }) => {
  const { api, discNumber } = args;

  const nodes: RowNode<any>[] = [];
  api.forEachNode((node) => {
    if (node.data.discNumber === discNumber) nodes.push(node);
  });

  return nodes;
};

export const setNodeSelection = (args: {
  deselectAll?: boolean;
  isSelected: boolean;
  nodes: RowNode<any>[];
}) => {
  const { nodes, isSelected } = args;

  nodes.forEach((node) => {
    node.setSelected(isSelected);
  });
};

export const toggleNodeSelection = (args: { nodes: RowNode<any>[] }) => {
  const { nodes } = args;

  nodes.forEach((node) => {
    if (node.isSelected()) {
      node.setSelected(false);
    } else {
      node.setSelected(true);
    }
  });
};
