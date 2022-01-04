import { EventBus } from "./EventBus";

export enum StoreEvents {
  UPDATE = "updated",
}

class Store extends EventBus {
  private state: { [key: string]: string } = {};

  public getState() {
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
