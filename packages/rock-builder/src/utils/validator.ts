

export const validateNodes = (root: any) => {
  let node = root.conditions;

  function walk(walker: any) {
    if (walker.list) {
      for (let i = 0; i < walker.list.length; i++) {
        walker.list[i].parent = walker;
        walk(walker.list[i]);
      }
    }
  }

  if (node.list) {
    node.parent = root;
  }

  walk(node);

  return root;
};
