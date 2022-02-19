import { Block } from "../../modules/Block";
import { profileTmpl } from "./profile.template";
import { firstCharacters } from "../../util/firstCharacters";
import { connect } from "../../service/connectStore";

class Profile extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  componentDidUpdate(_: unknown, newProps: unknown) {
    // @ts-ignore
    const { user, avatarUser, infoPersons } = newProps;

    if (!!user && !!infoPersons) {
      const [login, firstName, secondName, displayName, phone, email] =
        infoPersons;

      const isEmptyPhoto = user.avatar === null;
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

const withUser = connect((state) => ({ user: state.user }));
// @ts-ignore
export default withUser(Profile);
