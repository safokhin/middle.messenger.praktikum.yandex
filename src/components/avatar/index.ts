import { Block } from "../../modules/Block";
import { avatarTmpl } from "./avatar.tmpl";

export default class Avatar extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(avatarTmpl, this.props);
  }
}
