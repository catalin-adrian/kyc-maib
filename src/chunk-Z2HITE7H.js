import {
  Translations
} from "./chunk-WOXJR7LG.js";
import {
  __async,
  h,
  registerInstance
} from "./chunk-DJQYC6BK.js";

// node_modules/@ekyc_qoobiss/qbs-ect-cmp/dist/esm/random-actions.entry.js
var randomActionsCss = "";
var RandomActionsStyle0 = randomActionsCss;
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
      key: "723fc1815f4cfa3a96faeae1a576c9b26a2d8b84",
      class: "container"
    }, h("div", {
      key: "13af327a5d24629bdf7b8a2df2935218ae5a970d",
      class: "row"
    }, h("div", {
      key: "6733944fd4862f7242d5516832d24711fdbc488c",
      class: "text-center"
    }, h("h1", {
      key: "02020f9764f160d7683f41158986aae6933a3786"
    }, this.topTitle)), h("div", {
      key: "d77d681a884e107b76548c03ca936db31df5353e",
      class: "pos-relative show-bottom"
    }, h("div", {
      key: "5af844eac6621a1d349d84391b92f6a9ba7437e8",
      class: "btn-buletin"
    }, h("button", {
      key: "7c02b132b5f5655353511c5118e7a6a00639788c",
      class: "main-button",
      onClick: () => this.buttonClick()
    }, this.buttonText), h("p", {
      key: "ff856237e3071a00c9a882457a009f23fd06d7c9",
      class: "main-text font-size-18 text-right mb-0"
    }, this.translations.GlobalValues.FooterText)))));
  }
};
RandomActions.style = RandomActionsStyle0;
export {
  RandomActions as random_actions
};
