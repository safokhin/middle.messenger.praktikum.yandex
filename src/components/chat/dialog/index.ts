import { Block } from "../../../modules/Block";
import { dialogTmpl } from "./dialog.tmpl";

export default class Dialog extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(dialogTmpl, this.props);
  }
}
