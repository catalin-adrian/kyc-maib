import {
  ApiCall,
  Translations,
  state
} from "./chunk-FK52GRZZ.js";
import {
  __async,
  createEvent,
  h,
  registerInstance
} from "./chunk-FGEO3OPM.js";

// node_modules/@ekyc_qoobiss/qbs-ect-cmp/dist/esm/agreement-check.entry.js
var agreementCheckCss = "";
var AgreementCheck = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.apiErrorEvent = createEvent(this, "apiError");
    this.agreementAcceptance = createEvent(this, "agreementAcceptance");
    this.scrollClass = "scroll";
    this.atBottom = false;
    this.scrollingToTop = false;
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
      key: "368ff3ae41a68acdd29c05d02543ca04691e980b",
      class: "scroll-to-top-btn",
      onClick: this.scrollToTop
    }, "\u2191"), h("div", {
      key: "fa95004a2c7ef5bd19ef58bc0471767adb7b2a5a",
      class: "pos-relative show-bottom"
    }, h("div", {
      key: "fa72f50f23aff317983916b4b6b737ca3dce69df",
      class: "btn-buletin"
    }, h("div", {
      key: "d96055b58bff5b20b070edd9980863a2b587e90f",
      class: "d-flex two-buttons"
    }, h("button", {
      key: "4349febf683a237022186c42b779789fc23e8b39",
      class: "normal-button red-button",
      disabled: !this.buttonEnabled,
      onClick: () => this.buttonClick(false)
    }, this.translations.AgreementCheckValues.ButtonNo), h("button", {
      key: "25fcea59e985f52c8f92cb0e9b39fec642f3e6fc",
      class: "normal-button",
      disabled: !this.buttonEnabled,
      onClick: () => this.buttonClick(true)
    }, this.translations.AgreementCheckValues.ButtonYes)), h("p", {
      key: "5aade181543938ca401dd492f442dae40c2a353c",
      class: "main-text font-size-18 text-right mb-0"
    }, this.translations.GlobalValues.FooterText)))));
    return this.htmlContent ? content : h("div", null);
  }
};
AgreementCheck.style = agreementCheckCss;
export {
  AgreementCheck as agreement_check
};
