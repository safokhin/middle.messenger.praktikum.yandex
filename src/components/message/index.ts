import { Block } from "../../modules/Block";
import { messageTmpl } from "./message.tmpl";

export default class Message extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(messageTmpl, this.props);
  }
}
