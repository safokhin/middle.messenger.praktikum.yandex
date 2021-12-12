import { Block } from "../../modules/Block";
import { buttonTmpl } from "./button.tmpl";

export default class Button extends Block {
  constructor(props: any) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(buttonTmpl, this.props);
  }
}
