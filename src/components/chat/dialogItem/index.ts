import { Block } from "../../../modules/Block";
import { dialogItem } from "./dialogItem.tmpl";

export default class DialogItem extends Block {
  constructor(props: any) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(dialogItem, this.props);
  }
}
