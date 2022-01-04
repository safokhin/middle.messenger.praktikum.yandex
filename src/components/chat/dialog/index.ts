import { Block } from "../../../modules/Block";
import { dialogTmpl } from "./dialog.tmpl";
import { connect } from "../../../service/connectStore";
import Button from "../../button";
import iconClip from "../../../../static/icons/clip.svg";
import iconMore from "../../../../static/icons/more.svg";
import Input from "../../input";
import Message from "../../message";
import Avatar from "../../avatar";
import iconSend from "../../../../static/icons/send.svg";
import Action from "../../action";
import iconPhoto from "../../../../static/icons/photo.svg";
import iconFile from "../../../../static/icons/file.svg";
import iconLocation from "../../../../static/icons/location.svg";
import iconPlus from "../../../../static/icons/plus.svg";
import iconRemove from "../../../../static/icons/remove.svg";
import { popupAdd, popupRemove } from "../index";
import { store } from "../../../modules/Store";

class Dialog extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  componentDidMount(oldProps?: unknown): unknown {
    this.setProps({
      buttonClip,
      buttonMore,
      inputMessage,
      buttonSend,
      actionClip,
      actionMore,
    });
  }

  componentDidUpdate(oldProps: unknown, newProps: unknown) {
    if (
      oldProps.currentChatId !== newProps.currentChatId ||
      (oldProps.chats !== newProps.chats && newProps.currentChatId)
    ) {
      const { currentChatId, chats, user } = newProps;

      const currentChat = chats.find((chat) => chat.id === currentChatId);
      const messages = currentChat.messages.map((message) =>
        createMessages(message, user, currentChat.users)
      );

      this.setProps({
        isEmpty: !currentChatId,
        title: currentChat.title,
        messages,
      });
    }
  }

  render() {
    return this.compile(dialogTmpl, this.props);
  }
}

const actionClip = new Action({
  classes: "action--right action--top invisible",
  actions: [
    new Button({
      classes: "icon",
      icon: iconPhoto,
      iconText: "Фото или видео",
      type: "button",
      containerClass: "action__button",
    }),
    new Button({
      classes: "icon",
      icon: iconFile,
      iconText: "Файл",
      type: "button",
      containerClass: "action__button",
    }),
    new Button({
      classes: "icon",
      icon: iconLocation,
      iconText: "Локация",
      type: "button",
      containerClass: "action__button",
    }),
  ],
});

const actionMore = new Action({
  classes: "action--left action--bottom invisible",
  actions: [
    new Button({
      classes: "icon",
      icon: iconPlus,
      iconText: "Добавить пользователя",
      type: "button",
      containerClass: "action__button",
      click: () => {
        popupAdd.setProps({ classes: "" });
        actionMore.setProps({
          classes: "action--left action--bottom invisible",
        });
      },
    }),
    new Button({
      classes: "icon",
      icon: iconRemove,
      iconText: "Удалить пользователя",
      type: "button",
      containerClass: "action__button",
      click: () => {
        popupRemove.setProps({ classes: "" });
        actionMore.setProps({
          classes: "action--left action--bottom invisible",
        });
      },
    }),
  ],
});

const buttonClip = new Button({
  classes: "icon",
  icon: iconClip,
  type: "button",
  click: () => {
    const classes = actionClip.props.classes;
    const invisible = classes.indexOf("invisible") !== -1 ? "" : "invisible";

    actionClip.setProps({
      classes: `action--right action--top ${invisible}`,
    });
  },
});

const buttonMore = new Button({
  type: "button",
  classes: "icon",
  icon: iconMore,
  click: () => {
    const classes = actionMore.props.classes;
    const invisible = classes.indexOf("invisible") !== -1 ? "" : "invisible";

    actionMore.setProps({
      classes: `action--left action--bottom ${invisible}`,
    });
  },
});

const inputMessage = new Input({
  placeholder: "Введите текст сообщения...",
  name: "message",
  id: "message",
  keyup: (event: { target: HTMLInputElement }) => {
    const value = event.target.value;
    inputMessage.props.value = value;

    if (value)
      buttonSend.setProps({
        classes: "icon button_icon-message",
      });
    else
      buttonSend.setProps({
        classes: "icon button_icon-message button--invisible",
      });
  },
});

// Сообщения, текущий пользователь, все пользователи чата
const createMessages = (message, user, users) => {
  const messageUser = users.find((user) => user.id === message.user_id);
  const avatar = {
    nameSymbol: "I",
    isEmptyPhoto: !messageUser || (messageUser && messageUser.avatar === null),
    classes: "small",
  };

  if (messageUser && messageUser.avatar)
    avatar.srcImage = `https://ya-praktikum.tech/api/v2/resources${messageUser.avatar}`;

  return new Message({
    text: message.content,
    isMe: message.user_id === user.id,
    avatar: new Avatar({ ...avatar }),
    containerClass: "message__row",
  });
};

const buttonSend = new Button({
  classes: "button icon button_icon-message button--invisible",
  icon: iconSend,
  type: "button",
  click: (event) => {
    event.preventDefault();
    const state = store.getState();
    const content = inputMessage.props.value;
    const socket = state.sockets[state.currentChatId];

    socket.send(
      JSON.stringify({
        type: "message",
        content,
      })
    );
    inputMessage.setProps({ value: "" });
  },
});

const withUser = connect((state) => ({
  user: state.user,
  chats: state.chats,
  currentChatId: state.currentChatId,
}));
export default withUser(Dialog);
