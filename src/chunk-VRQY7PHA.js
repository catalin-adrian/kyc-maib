import {
  ApiCall,
  Translations,
  state
} from "./chunk-WOXJR7LG.js";
import {
  __async,
  createEvent,
  h,
  registerInstance
} from "./chunk-DJQYC6BK.js";

// node_modules/@ekyc_qoobiss/qbs-ect-cmp/dist/esm/agreement-check.entry.js
var agreementCheckCss = "";
var AgreementCheckStyle0 = agreementCheckCss;
var AgreementCheck = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.apiErrorEvent = createEvent(this, "apiError", 7);
    this.agreementAcceptance = createEvent(this, "agreementAcceptance", 7);
    this.handleScroll = (e) => {
      if (this.scrollingToTop) {
        return;
      }
      const target = e.target;
      const threshold = 5;
      const isAtBottom = target.scrollHeight - target.scrollTop - target.clientHeight < threshold;
      this.atBottom = isAtBottom && state.scrollMode;
    };
    this.scrollToTop = () => {
      this.scrollingToTop = true;
      this.atBottom = false;
      if (this.scrollContainer) {
        this.scrollContainer.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      setTimeout(() => {
        this.scrollingToTop = false;
      }, 200);
    };
    this.agreementType = void 0;
    this.htmlContent = void 0;
    this.buttonEnabled = void 0;
    this.scrollClass = "scroll";
    this.atBottom = false;
    this.scrollingToTop = false;
    this.buttonEnabled = true;
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      this.translations = yield Translations.getValues();
    });
  }
  componentDidLoad() {
    return __async(this, null, function* () {
      try {
        this.htmlContent = yield ApiCall.instance.GetAgreement(this.agreementType);
      } catch (e) {
        this.apiErrorEvent.emit(e);
      }
    });
  }
  buttonClick(result) {
    return __async(this, null, function* () {
      this.buttonEnabled = false;
      this.agreementAcceptance.emit({
        agreementType: this.agreementType,
        result
      });
    });
  }
  render() {
    let content = h("div", {
      key: "21e3213d978a908f61bbce50ac270692381054f4",
      class: "container"
    }, h("div", {
      key: "e6cd937f512a4ca3ed9bc651234c5c5905adba55",
      class: "row"
    }, h("div", {
      key: "f6b709e0852eacb07e49ab2334191bdf8d955491",
      ref: (el) => this.scrollContainer = el,
      class: this.atBottom ? "scroll-disabled" : this.scrollClass,
      onScroll: this.handleScroll,
      innerHTML: this.htmlContent
    }), this.atBottom && h("div", {
      class: "scroll-to-top-btn",
      onClick: this.scrollToTop
    }, "\u2191"), h("div", {
      key: "da91b6678a7efaf5e02a0fa359422718cb2d195c",
      class: "pos-relative show-bottom"
    }, h("div", {
      key: "446d6ce76c56c28759896f153ab2941ede251aed",
      class: "btn-buletin"
    }, h("div", {
      key: "a85b4c65655ade762ea2af0bb683a34ecc54af76",
      class: "d-flex two-buttons"
    }, h("button", {
      key: "49ed33d7e8959ddba9552dffa1405395fef7927a",
      class: "normal-button red-button",
      disabled: !this.buttonEnabled,
      onClick: () => this.buttonClick(false)
    }, this.translations.AgreementCheckValues.ButtonNo), h("button", {
      key: "c83210d0a6e3b26528e5260fdb373bee485fc305",
      class: "normal-button",
      disabled: !this.buttonEnabled,
      onClick: () => this.buttonClick(true)
    }, this.translations.AgreementCheckValues.ButtonYes)), h("p", {
      key: "8ffed70f35aed5f7234fdef8cfd197eca8464fbc",
      class: "main-text font-size-18 text-right mb-0"
    }, this.translations.GlobalValues.FooterText)))));
    return this.htmlContent ? content : h("div", null);
  }
};
AgreementCheck.style = AgreementCheckStyle0;
export {
  AgreementCheck as agreement_check
};
