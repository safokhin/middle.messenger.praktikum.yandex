import { Block } from "../../modules/Block";
import { popupTmpl } from "./popup.tmpl";

export default class Popup extends Block {
  constructor(props: any) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(popupTmpl, this.props);
  }
}
