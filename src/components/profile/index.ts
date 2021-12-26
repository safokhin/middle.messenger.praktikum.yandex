import { Block } from "../../modules/Block";
import { profileTmpl } from "./profile.template";
import { store, StoreEvents } from "../../modules/Store";
import { firstCharacters } from "../../util/firstCharacters";
import { authController } from "../../controllers/authController";

export default class Profile extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;

    authController.getUser();
    store.on(StoreEvents.UPDATE, () => this.setProps(store.getState()));
  }

  componentDidUpdate(_: unknown, newProps: unknown) {
    const { user, avatarUser, infoPersons } = newProps;
    const [login, firstName, secondName, displayName, phone, email] =
      infoPersons;
    const isEmptyPhoto = user.avatar === null;

    if (user) {
      this.setProps({ fullname: `${user.second_name} ${user.first_name}` });
      avatarUser.setProps({
        nameSymbol: firstCharacters(`${user.second_name} ${user.first_name}`),
        isEmptyPhoto,
        srcImage: `https://ya-praktikum.tech/api/v2/resources${user.avatar}`,
      });
      login.setProps({ value: user.login, disabled: true });
      firstName.setProps({ value: user.first_name, disabled: true });
      secondName.setProps({ value: user.second_name, disabled: true });
      displayName.setProps({ value: user.display_name, disabled: true });
      phone.setProps({ value: user.phone, disabled: true });
      email.setProps({ value: user.email, disabled: true });
    }
  }

  render() {
    return this.compile(profileTmpl, this.props);
  }
}
