import { Block } from "../../modules/Block";
import { inputTmpl } from "./input.tmpl";

export default class Input extends Block {
  constructor(props: any) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(inputTmpl, this.props);
  }
}
