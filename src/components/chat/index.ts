import { Block } from "../../modules/Block";
import { chatTmpl } from "./chat.tmpl";

export default class ChatPage extends Block {
  constructor(props: any) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(chatTmpl, this.props);
  }
}
