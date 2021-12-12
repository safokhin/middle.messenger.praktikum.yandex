import { Block } from "../../modules/Block";
import { authorizationTmpl } from "./authorization.tmpl";

export default class AuthorizationPage extends Block {
  constructor(props: any) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(authorizationTmpl, {
      ...this.props,
    });
  }
}
