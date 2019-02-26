export default class Rule {
  constructor(type: string, parent: any) {
    this.parent = parent;
    if (type === "TOPIC_ACTION") {
      this.action.type = "TOPIC_ACTION";
    } else if (type === "USER_ACTION") {
      this.action.type = "USER_ACTION";
    } else {
      throw TypeError("Unexpected type for Rule constructor");
    }
  }

  type = "FILTER_NODE";
  parent = null;
  action = {
    type: "TOPIC_ACTION",
    detail: {
      action: { id: undefined, type: 'ID_NODE' },
      target: { id: undefined, type: 'ID_NODE' }
    }
  };
  range = {
    type: "RANGE",
    from: { value: undefined, type: 'DATE' },
    to: { value: undefined, type: 'DATE' }
  };

  clear() {
    this.action.detail = {
      action: { id: undefined, type: 'ID_NODE' },
      target: { id: undefined, type: 'ID_NODE' }
    };
  }
}
