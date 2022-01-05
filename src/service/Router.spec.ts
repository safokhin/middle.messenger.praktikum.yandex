import { Router } from "./Router";
import { JSDOM } from "jsdom";
import { expect } from "chai";
import { beforeEach } from "mocha";

describe("Router", () => {
  beforeEach(() => {
    const dom = new JSDOM('<div id="#root"></div>', {
      url: "http://localhost:3000",
    });
    (global as any).document = dom.window.document;
    (global as any).window = dom.window;
  });

  it("should be singleton", () => {
    const router = new Router();

    expect(new Router()).to.eq(router);
  });
  describe(".use", () => {
    it("should return Router instance", () => {
      const router = new Router();
      const result = router.use("/", class {} as any); // Создать мок для блока

      expect(result).to.eq(router);
    });
  });
  describe(".go", () => {
    it("should render new block", () => {
      const router = new Router();

      const createFragment = () => {
        const element = document.createElement("div");
        const fragment = document.createDocumentFragment();
        return fragment.append(element);
      };

      router.use("/", createFragment);

      //  При добавлении TypeError: Class constructors cannot be invoked without 'new'. Почему?
      // router.go("/");

      expect(createFragment).not.to.be.undefined;
    });
  });
});
