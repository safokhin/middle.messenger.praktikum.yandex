import { Block } from "../../modules/Block";
import { registrationTmpl } from "./registration.tmpl";

export default class Registration extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(registrationTmpl, this.props);
  }
}
