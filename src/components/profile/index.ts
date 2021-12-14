import { Block } from "../../modules/Block";
import { profileTmpl } from "./profile.template";

export default class Profile extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(profileTmpl, this.props);
  }
}
