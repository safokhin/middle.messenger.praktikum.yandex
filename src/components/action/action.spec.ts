import Action from "./index";
import { expect } from "chai";
import { beforeEach } from "mocha";
import { JSDOM } from "jsdom";

describe("Action component", () => {
  beforeEach(() => {
    const dom = new JSDOM('<div id="#root"></div>', {
      url: "http://localhost:3000",
    });
    (global as any).document = dom.window.document;
  });
  it("render method does not return undefined", () => {
    const action = new Action({});
    expect(action.render()).not.to.be.undefined;
  });
});
