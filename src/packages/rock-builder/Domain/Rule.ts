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
    detail: { action: { id: undefined }, target: { id: undefined } }
  };


  clear() {
    this.action.detail = { action: { id: undefined }, target: { id: undefined } }
  }
}
