import { Block } from "../../modules/Block";
import { chatTmpl } from "./chat.tmpl";
import { store } from "../../modules/Store";
import { sidebarData } from "../../pages/chat";
import { firstCharacters } from "../../util/firstCharacters";

export default class ChatPage extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  render() {
    const { user } = store.getState();
    const { profileAvatar, profileButton } = sidebarData.props;

    if (user) {
      const isEmptyPhoto = user.avatar === null;
      profileAvatar.setProps({
        nameSymbol: firstCharacters(`${user.second_name} ${user.first_name}`),
        isEmptyPhoto,
        srcImage: `https://ya-praktikum.tech/api/v2/resources${user.avatar}`,
      });
      profileButton.setProps({
        name: `${user.second_name} ${user.first_name}`,
      });
    }
    return this.compile(chatTmpl, this.props);
  }
}
