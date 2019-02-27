export default class Group {
  constructor(type: string, parent: any) {
    this.parent = parent
    if (type === "FILTER_AND") {
      this.type = "FILTER_AND";
    } else if (type === "FILTER_OR") {
      this.type = "FILTER_OR";
    } else {
      throw TypeError("Unexpected type for Group constructor");
    }
  }

  parent = null;
  type = "FILTER_OR";
  list: any[] = [];
}
