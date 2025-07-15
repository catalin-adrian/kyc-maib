import {
  Translations
} from "./chunk-ZE4N2U2P.js";
import {
  __async,
  h,
  registerInstance
} from "./chunk-QECYM3LJ.js";

// node_modules/@ekyc_qoobiss/qbs-ect-cmp/dist/esm/random-actions.entry.js
var randomActionsCss = "";
var RandomActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      this.translations = yield Translations.getValues();
    });
  }
  buttonClick() {
  }
  render() {
    return h("div", {
      key: "f66787e6a2f21d63e9abeee99a96332d808b7e9d",
      class: "container"
    }, h("div", {
      key: "d09e3f894981489591272c6feeb00920fc95c1ba",
      class: "row"
    }, h("div", {
      key: "56112b4f45eaeb2f54f672ebf1cd89bb2b780d9a",
      class: "text-center"
    }, h("h1", {
      key: "c0e1795d7f60ecfa68470be32114c30181cd5957"
    }, this.topTitle)), h("div", {
      key: "ec4b7758e5340dfc6f43cdd54d6441f8a1c4ecd6",
      class: "pos-relative show-bottom"
    }, h("div", {
      key: "271f662e8ec25e2bf6eee9e1493e31e495bb2f20",
      class: "btn-buletin"
    }, h("button", {
      key: "cb341b872b60e92838fb01aebdf895f2532f7eef",
      class: "main-button",
      onClick: () => this.buttonClick()
    }, this.buttonText), h("p", {
      key: "4d1dd56d5c32570621a4d9291973dc3c94c27525",
      class: "main-text font-size-18 text-right mb-0"
    }, this.translations.GlobalValues.FooterText)))));
  }
};
RandomActions.style = randomActionsCss;
export {
  RandomActions as random_actions
};
