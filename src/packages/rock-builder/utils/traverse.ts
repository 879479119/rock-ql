const traverse = (ast: any, options: any) => {
  return ast;
};

export default traverse;
//
// export const cutNode = (root: any, node: any) => {
//   let visitor = root
//   while(visitor) {
//
//     visitor = visitor.
//   }
// }

export const assignParentNode = (root: any) => {
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
