import { Block } from "../../modules/Block";
import { textFieldsTmpl } from "./textField.tmpl";

export default class TextField extends Block {
  constructor(props: any) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(textFieldsTmpl, this.props);
  }
}
