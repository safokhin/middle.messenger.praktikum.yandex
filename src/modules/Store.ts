import { EventBus } from "./EventBus";
import { ChatI, UserI } from "../types/apiAndControllers";

export enum StoreEvents {
  UPDATE = "updated",
}

export type StateI = {
  chats?: ChatI[];
  user?: UserI;
  currentChatId?: number;
};

class Store extends EventBus {
  private state: StateI = {};

  public getState(): StateI {
    return this.state;
  }

  public set(path: string, value: unknown): void {
    const itemObj = path.split(".").reduceRight((acc, cur, index, arr) => {
      if (index === arr.length - 1) acc = { [cur]: value };
      else acc = { [cur]: acc };
      return acc;
    }, {});

    this.state = { ...this.state, ...itemObj };
    this.emit(StoreEvents.UPDATE);
  }
}

export const store = new Store();
