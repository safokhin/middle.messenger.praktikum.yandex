export interface IEventBus {
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
  emit: (event: string, ...args: unknown[]) => void;
}

export class EventBus {
  listener: { [key: string]: { (props?: unknown): void }[] };

  constructor() {
    this.listener = {};
  }

  on(event: string, callback: () => void): void {
    if (!this.listener[event]) {
      this.listener[event] = [];
    }

    this.listener[event].push(callback);
  }

  off(event: string, callback: () => void): void {
    if (!this.listener[event]) {
      throw new Error("События не существует");
    } else {
      this.listener[event].filter((func) => func !== callback);
    }
  }

  emit(event: string, ...args: unknown[]): void {
    if (!this.listener[event]) {
      throw new Error("События не существует");
    } else {
      this.listener[event].forEach((listener) => {
        listener(...args);
      });
    }
  }
}
