import { Block } from "../../../modules/Block";
import { sidebarTmpl } from "./sidebar.tmpl";

export default class Sidebar extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(sidebarTmpl, this.props);
  }
}
