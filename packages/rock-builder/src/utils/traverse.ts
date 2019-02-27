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



export const clearParentNode = (root: any) => {
  let node = root.conditions;

  function walk(walker: any) {
    if (walker.list) {
      for (let i = 0; i < walker.list.length; i++) {
        delete walker.list[i].parent;
        walk(walker.list[i]);
      }
    }
  }

  if (node.list) {
    delete node.parent;
  }

  walk(node);

  return root;
};




export const validateNodes = (root: any, validator: Function) => {
  let node = root.conditions;

  function walk(walker: any) {
    if (walker.list) {
      for (let i = 0; i < walker.list.length; i++) {
        validator(walker.list[i]);
        walk(walker.list[i]);
      }
    }
    if (walker.type === 'FILTER_NODE') {
      validator(walker.action);
      walk(walker.action);
    }
  }

  walk(node);

  return root;
};
