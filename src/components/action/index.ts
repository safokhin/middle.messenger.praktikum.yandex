import { Block } from "../../modules/Block";
import { actionTmpl } from "./action.tmpl";

export default class Action extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(actionTmpl, this.props);
  }
}
