import { Block } from "../../../modules/Block";
import { sidebarTmpl } from "./sidebar.tmpl";
import { connect } from "../../../service/connectStore";
import { firstCharacters } from "../../../util/firstCharacters";
import Avatar from "../../avatar";
import Button from "../../button";
import { changePage } from "../../../pages";
import iconPlus from "../../../assets/icons/plus.svg";
import { chatController } from "../../../controllers/chatController";
import DialogItem from "../dialogItem";
import { convertData } from "../../../util/convertData";
import { popupCreateChat } from "../index";
import { ChatI, UserI } from "../../../types/apiAndControllers";

class Sidebar extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  componentDidMount(_?: unknown): void {
    this.setProps({ createChatButton: createChatButton() });
  }

  async componentDidUpdate(
    oldProps: unknown,
    newProps: {
      user: UserI;
      profileAvatar: string;
      profileButton: string;
      chats: ChatI[];
      dialogItems: DialogItem[];
      currentChatId: number;
    }
  ) {
    const {
      user,
      profileAvatar,
      profileButton,
      chats,
      dialogItems,
      currentChatId,
    } = newProps;

    // @ts-ignore
    if (oldProps.user !== newProps.user && !chats) chatController.getAll();

    if (!!user && !profileAvatar && !profileButton && chats && !dialogItems) {
      const dialogItems = await Promise.all(
        chats.map((chat: ChatI) => {
          return createDialogItem(chat, currentChatId).then((data) => data);
        })
      );

      this.setProps({
        profileAvatar: createProfileAvatar(user),
        profileButton: createProfileButton(user),
        createChatButton: createChatButton(),
        dialogItems,
      });
    }
  }

  render() {
    return this.compile(sidebarTmpl, this.props);
  }
}

const createProfileAvatar = (user: UserI) => {
  return new Avatar({
    classes: "small",
    nameSymbol: firstCharacters(`${user.second_name} ${user.first_name}`),
    isEmptyPhoto: user.avatar === null,
    srcImage: `https://ya-praktikum.tech/api/v2/resources${user.avatar}`,
  });
};

const createProfileButton = (user: UserI) => {
  return new Button({
    classes: "link",
    type: "button",
    name: `${user.second_name} ${user.first_name}`,
    click: () => changePage("/settings"),
  });
};

const createChatButton = () => {
  return new Button({
    classes: "button icon button--add-chat",
    icon: iconPlus,
    type: "button",
    click: () => {
      popupCreateChat.setProps({ classes: "" });
    },
  });
};

const createDialogItem = async (chat: ChatI, currentChatId: number) => {
  const lastMessage = chat.last_message;
  // const newMessages = await chatController.getNewMessage(chat.id);

  return new DialogItem({
    classes: `${chat.id === currentChatId ? "active" : ""}`,
    dialogItemAvatar: new Avatar({
      nameSymbol: firstCharacters(chat.title),
      classes: "small",
      isEmptyPhoto: chat.avatar === null,
      srcImage: chat.avatar,
    }),
    author: chat.title,
    time: lastMessage === null ? "" : convertData(lastMessage.time),
    message: lastMessage === null ? "" : lastMessage.content,
    checked: true, // newMessages === 0
    // countUnchecked: newMessages,
    click: () => {
      chatController.changeCurrentChat(chat.id);
    },
  });
};

const withUser = connect((state) => ({
  user: state.user,
  chats: state.chats,
  currentChatId: state.currentChatId,
}));
// @ts-ignore
export default withUser(Sidebar);
