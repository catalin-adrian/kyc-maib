import {
  __async,
  __asyncGenerator,
  __await,
  __spreadProps,
  __spreadValues,
  forceUpdate,
  getRenderingRef
} from "./chunk-DJQYC6BK.js";

// node_modules/@ekyc_qoobiss/qbs-ect-cmp/dist/esm/TranslationUtils-9263518f.js
var appendToMap = (map, propName, value) => {
  const items = map.get(propName);
  if (!items) {
    map.set(propName, [value]);
  } else if (!items.includes(value)) {
    items.push(value);
  }
};
var debounce = (fn, ms) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = 0;
      fn(...args);
    }, ms);
  };
};
var isConnected = (maybeElement) => !("isConnected" in maybeElement) || maybeElement.isConnected;
var cleanupElements = debounce((map) => {
  for (let key of map.keys()) {
    map.set(key, map.get(key).filter(isConnected));
  }
}, 2e3);
var stencilSubscription = () => {
  if (typeof getRenderingRef !== "function") {
    return {};
  }
  const elmsToUpdate = /* @__PURE__ */ new Map();
  return {
    dispose: () => elmsToUpdate.clear(),
    get: (propName) => {
      const elm = getRenderingRef();
      if (elm) {
        appendToMap(elmsToUpdate, propName, elm);
      }
    },
    set: (propName) => {
      const elements = elmsToUpdate.get(propName);
      if (elements) {
        elmsToUpdate.set(propName, elements.filter(forceUpdate));
      }
      cleanupElements(elmsToUpdate);
    },
    reset: () => {
      elmsToUpdate.forEach((elms) => elms.forEach(forceUpdate));
      cleanupElements(elmsToUpdate);
    }
  };
};
var unwrap$1 = (val) => typeof val === "function" ? val() : val;
var createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
  const unwrappedState = unwrap$1(defaultState);
  let states = new Map(Object.entries(unwrappedState !== null && unwrappedState !== void 0 ? unwrappedState : {}));
  const handlers = {
    dispose: [],
    get: [],
    set: [],
    reset: []
  };
  const reset = () => {
    var _a;
    states = new Map(Object.entries((_a = unwrap$1(defaultState)) !== null && _a !== void 0 ? _a : {}));
    handlers.reset.forEach((cb) => cb());
  };
  const dispose = () => {
    handlers.dispose.forEach((cb) => cb());
    reset();
  };
  const get = (propName) => {
    handlers.get.forEach((cb) => cb(propName));
    return states.get(propName);
  };
  const set = (propName, value) => {
    const oldValue = states.get(propName);
    if (shouldUpdate(value, oldValue, propName)) {
      states.set(propName, value);
      handlers.set.forEach((cb) => cb(propName, value, oldValue));
    }
  };
  const state2 = typeof Proxy === "undefined" ? {} : new Proxy(unwrappedState, {
    get(_, propName) {
      return get(propName);
    },
    ownKeys(_) {
      return Array.from(states.keys());
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    },
    has(_, propName) {
      return states.has(propName);
    },
    set(_, propName, value) {
      set(propName, value);
      return true;
    }
  });
  const on = (eventName, callback) => {
    handlers[eventName].push(callback);
    return () => {
      removeFromArray(handlers[eventName], callback);
    };
  };
  const onChange2 = (propName, cb) => {
    const unSet = on("set", (key, newValue) => {
      if (key === propName) {
        cb(newValue);
      }
    });
    const unReset = on("reset", () => cb(unwrap$1(defaultState)[propName]));
    return () => {
      unSet();
      unReset();
    };
  };
  const use = (...subscriptions) => {
    const unsubs = subscriptions.reduce((unsubs2, subscription) => {
      if (subscription.set) {
        unsubs2.push(on("set", subscription.set));
      }
      if (subscription.get) {
        unsubs2.push(on("get", subscription.get));
      }
      if (subscription.reset) {
        unsubs2.push(on("reset", subscription.reset));
      }
      if (subscription.dispose) {
        unsubs2.push(on("dispose", subscription.dispose));
      }
      return unsubs2;
    }, []);
    return () => unsubs.forEach((unsub) => unsub());
  };
  const forceUpdate2 = (key) => {
    const oldValue = states.get(key);
    handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
  };
  return {
    state: state2,
    get,
    set,
    on,
    onChange: onChange2,
    use,
    dispose,
    reset,
    forceUpdate: forceUpdate2
  };
};
var removeFromArray = (array, item) => {
  const index = array.indexOf(item);
  if (index >= 0) {
    array[index] = array[array.length - 1];
    array.length--;
  }
};
var createStore = (defaultState, shouldUpdate) => {
  const map = createObservableMap(defaultState, shouldUpdate);
  map.use(stencilSubscription());
  return map;
};
var FlowStatus;
(function(FlowStatus2) {
  FlowStatus2[FlowStatus2["CITIZENSHIP"] = 0] = "CITIZENSHIP";
  FlowStatus2[FlowStatus2["LANDING"] = 1] = "LANDING";
  FlowStatus2[FlowStatus2["MOBILE"] = 2] = "MOBILE";
  FlowStatus2[FlowStatus2["AGREEMENT"] = 3] = "AGREEMENT";
  FlowStatus2[FlowStatus2["PHONE"] = 4] = "PHONE";
  FlowStatus2[FlowStatus2["CODE"] = 5] = "CODE";
  FlowStatus2[FlowStatus2["CODEERROR"] = 6] = "CODEERROR";
  FlowStatus2[FlowStatus2["IDTYPE"] = 7] = "IDTYPE";
  FlowStatus2[FlowStatus2["IDFRONTHOWTO"] = 8] = "IDFRONTHOWTO";
  FlowStatus2[FlowStatus2["IDFRONT"] = 9] = "IDFRONT";
  FlowStatus2[FlowStatus2["IDBACKHOWTO"] = 10] = "IDBACKHOWTO";
  FlowStatus2[FlowStatus2["IDBACK"] = 11] = "IDBACK";
  FlowStatus2[FlowStatus2["IDTILTHOWTO"] = 12] = "IDTILTHOWTO";
  FlowStatus2[FlowStatus2["IDTILT"] = 13] = "IDTILT";
  FlowStatus2[FlowStatus2["LIVENESSHOWTO"] = 14] = "LIVENESSHOWTO";
  FlowStatus2[FlowStatus2["LIVENESS"] = 15] = "LIVENESS";
  FlowStatus2[FlowStatus2["LIVENESSGESTUREHOWTO"] = 16] = "LIVENESSGESTUREHOWTO";
  FlowStatus2[FlowStatus2["LIVENESSGESTURE"] = 17] = "LIVENESSGESTURE";
  FlowStatus2[FlowStatus2["COMPLETE"] = 18] = "COMPLETE";
  FlowStatus2[FlowStatus2["ERROREND"] = 19] = "ERROREND";
  FlowStatus2[FlowStatus2["CAMERAERROR"] = 20] = "CAMERAERROR";
  FlowStatus2[FlowStatus2["ABORTED"] = 21] = "ABORTED";
  FlowStatus2[FlowStatus2["NONE"] = 22] = "NONE";
  FlowStatus2[FlowStatus2["RANDOM"] = 23] = "RANDOM";
})(FlowStatus || (FlowStatus = {}));
var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]);
}
var transactionDoneMap = /* @__PURE__ */ new WeakMap();
var transformCache = /* @__PURE__ */ new WeakMap();
var reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx)) return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done") return transactionDoneMap.get(target);
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(this.request);
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function") return wrapFunction(value);
  if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest) return promisifyRequest(value);
  if (transformCache.has(value)) return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);
function openDB(name, version, {
  blocked,
  upgrade,
  blocking,
  terminated
} = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db) => {
    if (terminated) db.addEventListener("close", () => terminated());
    if (blocking) {
      db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
var writeMethods = ["put", "add", "delete", "clear"];
var cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop)) return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = function(storeName, ...args) {
    return __async(this, null, function* () {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex) target2 = target2.index(args.shift());
      return (yield Promise.all([target2[targetFuncName](...args), isWrite && tx.done]))[0];
    });
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => __spreadProps(__spreadValues({}, oldTraps), {
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
var advanceMethodProps = ["continue", "continuePrimaryKey", "advance"];
var methodMap = {};
var advanceResults = /* @__PURE__ */ new WeakMap();
var ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
var cursorIteratorTraps = {
  get(target, prop) {
    if (!advanceMethodProps.includes(prop)) return target[prop];
    let cachedFunc = methodMap[prop];
    if (!cachedFunc) {
      cachedFunc = methodMap[prop] = function(...args) {
        advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
      };
    }
    return cachedFunc;
  }
};
function iterate(...args) {
  return __asyncGenerator(this, null, function* () {
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
      cursor = yield new __await(cursor.openCursor(...args));
    }
    if (!cursor) return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while (cursor) {
      yield proxiedCursor;
      cursor = yield new __await(advanceResults.get(proxiedCursor) || cursor.continue());
      advanceResults.delete(proxiedCursor);
    }
  });
}
function isIteratorProp(target, prop) {
  return prop === Symbol.asyncIterator && instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
}
replaceTraps((oldTraps) => __spreadProps(__spreadValues({}, oldTraps), {
  get(target, prop, receiver) {
    if (isIteratorProp(target, prop)) return iterate;
    return oldTraps.get(target, prop, receiver);
  },
  has(target, prop) {
    return isIteratorProp(target, prop) || oldTraps.has(target, prop);
  }
}));
var EctDbProvider = class _EctDbProvider {
  constructor() {
    this.database = "ectdb";
    this.tableName = "ectdata";
  }
  static getInstance() {
    return __async(this, null, function* () {
      if (!_EctDbProvider.instance) {
        _EctDbProvider.instance = new _EctDbProvider();
        yield _EctDbProvider.instance.init();
      }
      return _EctDbProvider.instance;
    });
  }
  init() {
    return __async(this, null, function* () {
      this.db = yield openDB(this.database, 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains("ectdata")) {
            db.createObjectStore("ectdata", {
              keyPath: "orderId"
            });
          }
        }
      });
    });
  }
  setEctData(ectData) {
    return __async(this, null, function* () {
      const tx = this.db.transaction(this.tableName, "readwrite");
      const store = tx.objectStore(this.tableName);
      const result = yield store.put(ectData);
      if (store.debug) console.log("EctData set: " + JSON.stringify(ectData));
      return result;
    });
  }
  removeEctData(ectDataId) {
    return __async(this, null, function* () {
      const tx = this.db.transaction(this.tableName, "readwrite");
      const store = tx.objectStore(this.tableName);
      const result = yield store.delete(ectDataId);
      if (store.debug) console.log("EctData deleted: " + ectDataId);
      return result;
    });
  }
  getEctData(orderId) {
    return __async(this, null, function* () {
      const tx = this.db.transaction(this.tableName, "readonly");
      const store = tx.objectStore(this.tableName);
      const result = yield store.get(orderId);
      if (store.debug) console.log("EctData get: " + JSON.stringify(result));
      return result;
    });
  }
  getOrCreateEctData(orderId) {
    return __async(this, null, function* () {
      const tx = this.db.transaction(this.tableName, "readwrite");
      const store = tx.objectStore(this.tableName);
      var ectData = yield store.get(orderId);
      if (store.debug) console.log("EctData found: " + JSON.stringify(ectData));
      if (!ectData) {
        ectData = {
          orderId,
          redirectId: "",
          timestamp: /* @__PURE__ */ new Date(),
          initialized: false,
          finished: false,
          phoneNumber: "",
          refreshStarted: false,
          flowStatus: FlowStatus.NONE,
          modelsPath: "",
          citizenship: ""
        };
        yield store.put(ectData);
        if (store.debug) console.log("EctData set: " + JSON.stringify(ectData));
      }
      return ectData;
    });
  }
  getAllEctData() {
    return __async(this, null, function* () {
      const tx = this.db.transaction(this.tableName, "readonly");
      const store = tx.objectStore(this.tableName);
      const result = yield store.getAll();
      return result;
    });
  }
  getLastEctData(finished) {
    return __async(this, null, function* () {
      const tx = this.db.transaction(this.tableName, "readonly");
      const store = tx.objectStore(this.tableName);
      const result = yield store.getAll();
      const ectData = result.filter((e) => e.finished == finished).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
      if ((ectData === null || ectData === void 0 ? void 0 : ectData.length) > 0) {
        if (store.debug) console.log("EctData last found: " + JSON.stringify(ectData[0]));
        return ectData[0];
      }
      return null;
    });
  }
};
var {
  state,
  onChange
} = createStore({
  flowStatus: FlowStatus.NONE,
  initialized: false,
  environment: "PROD",
  debug: false,
  requestId: "",
  redirectId: "",
  token: "",
  cameraIds: [],
  cameraId: "",
  phoneNumber: "",
  apiBaseUrl: "https://apiro.id-kyc.com",
  device: null,
  langIso: "ro",
  logSteps: false,
  modelsPath: "",
  citizenship: "",
  idDocument: "",
  showCitizenshipSelector: false,
  scrollMode: false
});
onChange("environment", (value) => {
  state.debug = value == "QA";
});
onChange("flowStatus", (value) => __async(void 0, null, function* () {
  state.flowStatus = value;
  if (state.flowStatus == FlowStatus.CITIZENSHIP) {
    return;
  }
  var ectDb = yield EctDbProvider.getInstance();
  var ectData = yield ectDb.getEctData(state.requestId);
  ectData.flowStatus = state.flowStatus;
  yield ectDb.setEctData(ectData);
}));
var FlowSteps;
(function(FlowSteps2) {
  FlowSteps2[FlowSteps2["ComponentLoaded"] = "component-loaded"] = "ComponentLoaded";
  FlowSteps2[FlowSteps2["MobileRedirect"] = "mobile-redirect"] = "MobileRedirect";
  FlowSteps2[FlowSteps2["Landing"] = "landing"] = "Landing";
  FlowSteps2[FlowSteps2["Agreements"] = "agreements"] = "Agreements";
  FlowSteps2[FlowSteps2["OtpSend"] = "otp-send"] = "OtpSend";
  FlowSteps2[FlowSteps2["OtpCheck"] = "otp-check"] = "OtpCheck";
  FlowSteps2[FlowSteps2["CiFront"] = "ci-front"] = "CiFront";
  FlowSteps2[FlowSteps2["CiFrontHowTo"] = "ci-front-how-to"] = "CiFrontHowTo";
  FlowSteps2[FlowSteps2["CiFrontCapture"] = "ci-front-capture"] = "CiFrontCapture";
  FlowSteps2[FlowSteps2["CiBack"] = "ci-back"] = "CiBack";
  FlowSteps2[FlowSteps2["CiBackHowTo"] = "ci-back-how-to"] = "CiBackHowTo";
  FlowSteps2[FlowSteps2["CiBackCapture"] = "ci-back-capture"] = "CiBackCapture";
  FlowSteps2[FlowSteps2["CiTilt"] = "ci-tilt"] = "CiTilt";
  FlowSteps2[FlowSteps2["CiTiltHowTo"] = "ci-tilt-how-to"] = "CiTiltHowTo";
  FlowSteps2[FlowSteps2["CiError"] = "ci-error"] = "CiError";
  FlowSteps2[FlowSteps2["SelfieHowTo"] = "selfie-how-to"] = "SelfieHowTo";
  FlowSteps2[FlowSteps2["SelfieTilt"] = "selfie-tilt"] = "SelfieTilt";
  FlowSteps2[FlowSteps2["SelfieCapture"] = "selfie-capture"] = "SelfieCapture";
  FlowSteps2[FlowSteps2["Selfie"] = "selfie"] = "Selfie";
  FlowSteps2[FlowSteps2["SelfieError"] = "selfie-error"] = "SelfieError";
  FlowSteps2[FlowSteps2["End"] = "end"] = "End";
  FlowSteps2[FlowSteps2["CameraError"] = "camera-error"] = "CameraError";
  FlowSteps2[FlowSteps2["Default"] = "default"] = "Default";
})(FlowSteps || (FlowSteps = {}));
var FlowMoments;
(function(FlowMoments2) {
  FlowMoments2[FlowMoments2["Initialized"] = "initialized"] = "Initialized";
  FlowMoments2[FlowMoments2["Finalized"] = "finalized"] = "Finalized";
  FlowMoments2[FlowMoments2["None"] = "none"] = "None";
})(FlowMoments || (FlowMoments = {}));
var OrderStatuses;
(function(OrderStatuses2) {
  OrderStatuses2[OrderStatuses2["Capturing"] = 0] = "Capturing";
  OrderStatuses2[OrderStatuses2["FinishedCapturing"] = 1] = "FinishedCapturing";
  OrderStatuses2[OrderStatuses2["Waiting"] = 2] = "Waiting";
  OrderStatuses2[OrderStatuses2["NotFound"] = 3] = "NotFound";
  OrderStatuses2[OrderStatuses2["Aborted"] = 4] = "Aborted";
})(OrderStatuses || (OrderStatuses = {}));
var ApiUrls = class {
  constructor() {
    this.uriEnv = "/";
    this.uriEnv = ["QA", "DEMO"].includes(state.environment) ? "/dev_" : "/";
    this.OtpSend = this.uriEnv + "validation/otp/send";
    this.OtpCheck = this.uriEnv + "validation/otp/check";
    this.IdentityInsert = this.uriEnv + "validation/identity/insert";
    this.UploadCapture = this.uriEnv + "validation/upload/capture";
    this.GetAgreement = this.uriEnv + "validation/agreement/content";
    this.GenerateAgreement = this.uriEnv + "validation/agreement/generate";
    this.SendLink = this.uriEnv + "validation/otp/sendlink";
    this.GetStatus = this.uriEnv + "validation/identity/status";
    this.AddLog = this.uriEnv + "validation/logs/add";
    this.AddStep = this.uriEnv + "validation/logs/step";
    this.AbortRequest = this.uriEnv + "validation/identity/abort";
    this.Translations = this.uriEnv + "validation/translations/get";
    this.StartFlow = this.uriEnv + "validation/flowstate/startflow";
    this.NextFlowState = this.uriEnv + "validation/flowstate/nextstate";
    this.CurrentFlowState = this.uriEnv + "validation/flowstate/currentstate";
    this.NextStateForCaptureError = this.uriEnv + "validation/flowstate/nextstateforcaptureerror";
    this.CitizenshipList = this.uriEnv + "validation/flows/citizenships";
    this.IdList = this.uriEnv + "validation/flows/ids";
    this.SetCitizenship = this.uriEnv + "validation/identity/setcitizenship";
    this.SetId = this.uriEnv + "validation/identity/setidentitydocument";
  }
};
var ApiCall = class _ApiCall {
  static getInstance() {
    if (!_ApiCall.instance) {
      _ApiCall.instance = new _ApiCall();
    }
    return _ApiCall.instance;
  }
  constructor() {
    this.serviceErrors = ["Service Unavailable", "Unauthorized"];
    this.urls = new ApiUrls();
  }
  // private async http2<T>(method: string, url: string, data: string): Promise<T> {
  //   return new Promise((resolve, reject) => {
  //     var xhr = new XMLHttpRequest();
  //     xhr.open(method, url);
  //     xhr.onload = function () {
  //       if (xhr.status >= 200 && xhr.status < 300) {
  //         resolve(xhr.response);
  //       } else {
  //         reject({
  //           status: xhr.status,
  //           statusText: xhr.statusText,
  //         });
  //       }
  //     };
  //     xhr.onerror = function () {
  //       reject({
  //         status: xhr.status,
  //         statusText: xhr.statusText,
  //       });
  //     };
  //     xhr.send(data);
  //   });
  // }
  http(request) {
    return __async(this, null, function* () {
      const response = yield fetch(request);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      try {
        return yield response.json();
      } catch (ex) {
        throw new Error("No json found in response " + ex);
      }
    });
  }
  post(url, data, withRetry = true) {
    return __async(this, null, function* () {
      var request = new Request(state.apiBaseUrl + url, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
          "Authorization": "IDKYC-TOKEN " + state.token
        }
      });
      try {
        return yield this.http(request);
      } catch (ex) {
        if (!withRetry || this.serviceErrors.includes(ex.message)) {
          throw ex;
        }
        this.AddLog("Error in post ", ex);
        try {
          var request2 = new Request(state.apiBaseUrl + url, {
            method: "POST",
            body: data,
            headers: {
              "Content-Type": "application/json",
              "Authorization": "IDKYC-TOKEN " + state.token
            }
          });
          return yield this.http(request2);
        } catch (ex2) {
          this.AddLog("Error in post ", ex2);
          var request3 = new Request(state.apiBaseUrl + url, {
            method: "POST",
            body: data,
            headers: {
              "Content-Type": "application/json",
              "Authorization": "IDKYC-TOKEN " + state.token
            }
          });
          return yield this.http(request3);
        }
      }
    });
  }
  get(url, withRetry = true) {
    return __async(this, null, function* () {
      var request = new Request(state.apiBaseUrl + url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "IDKYC-TOKEN " + state.token
        }
      });
      try {
        return yield this.http(request);
      } catch (ex) {
        if (!withRetry || this.serviceErrors.includes(ex.message)) {
          throw ex;
        }
        this.AddLog("Error in get ", ex);
        try {
          var request2 = new Request(state.apiBaseUrl + url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "IDKYC-TOKEN " + state.token
            }
          });
          return yield this.http(request2);
        } catch (ex2) {
          this.AddLog("Error in get ", ex2);
          var request3 = new Request(state.apiBaseUrl + url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "IDKYC-TOKEN " + state.token
            }
          });
          return yield this.http(request3);
        }
      }
    });
  }
  SendOTPCode(requestId, phoneNumber) {
    return __async(this, null, function* () {
      let data = {
        requestId,
        phone: phoneNumber
      };
      let jsonResp = yield this.post(this.urls.OtpSend, JSON.stringify(data));
      return jsonResp;
    });
  }
  CheckOTPCode(requestId, otpCode) {
    return __async(this, null, function* () {
      let data = {
        requestId,
        otp: otpCode
      };
      let jsonResp = yield this.post(this.urls.OtpCheck, JSON.stringify(data));
      return jsonResp;
    });
  }
  AddIdentificationRequest(deviceInfo, version) {
    return __async(this, null, function* () {
      if (state.debug) console.log("Calling identity request with store:" + JSON.stringify(state));
      let data = {
        requestId: state.requestId,
        clientDeviceInfo: JSON.stringify(deviceInfo),
        redirectId: state.redirectId,
        phoneNumber: state.phoneNumber,
        version,
        demoMode: state.environment == "DEMO"
      };
      let jsonResp = yield this.post(this.urls.IdentityInsert, JSON.stringify(data));
      if (state.requestId == "") {
        state.requestId = jsonResp.requestId;
      }
      state.phoneNumber = jsonResp.phoneNumber;
      state.flowStatus = FlowStatus[jsonResp.state];
      state.logSteps = jsonResp.logSteps;
      state.debug = jsonResp.debug;
      state.modelsPath = jsonResp.modelsPath;
      state.citizenship = jsonResp.citizenship;
      state.initialized = true;
      return true;
    });
  }
  UploadFileForRequestB64(requestId, type, b64Data) {
    return __async(this, null, function* () {
      let data = {
        requestId,
        type,
        data: b64Data
      };
      let respJson = yield this.post(this.urls.UploadCapture, JSON.stringify(data));
      if (state.debug) console.log(`apicall | uploadfileforrequestb64 | ${respJson}`);
      return respJson;
    });
  }
  GetAgreement(agreementType) {
    return __async(this, null, function* () {
      let resp = yield this.get(this.urls.GetAgreement + "?type=" + agreementType + "&requestId=" + state.requestId);
      return resp.htmlText;
    });
  }
  GenerateAgreement(agreementType) {
    return __async(this, null, function* () {
      let data = {
        requestId: state.requestId,
        documentType: agreementType
      };
      let resp = yield this.post(this.urls.GenerateAgreement, JSON.stringify(data));
      return resp.generation;
    });
  }
  GetStatus(requestId) {
    return __async(this, null, function* () {
      let resp = yield this.get(this.urls.GetStatus + "?orderId=" + requestId);
      return OrderStatuses[resp.status];
    });
  }
  SendLink(link, phoneNumber) {
    return __async(this, null, function* () {
      let data = {
        requestId: state.requestId,
        link,
        phoneNumber
      };
      let resp = yield this.post(this.urls.SendLink, JSON.stringify(data));
      return resp.sent;
    });
  }
  GetCitizenshipList() {
    return __async(this, null, function* () {
      let resp = yield this.get(this.urls.CitizenshipList);
      return resp;
    });
  }
  GetIdList() {
    return __async(this, null, function* () {
      let resp = yield this.get(this.urls.IdList + "?citizenship=" + state.citizenship);
      return resp;
    });
  }
  SetCitizenship() {
    return __async(this, null, function* () {
      var setCitReq = {
        requestId: state.requestId,
        citizenship: state.citizenship
      };
      var result = yield this.post(this.urls.SetCitizenship, JSON.stringify(setCitReq));
      state.flowStatus = FlowStatus[result.state];
      return true;
    });
  }
  SetIdentityDocument() {
    return __async(this, null, function* () {
      var setIdReq = {
        requestId: state.requestId,
        identityDocument: state.idDocument
      };
      var result = yield this.post(this.urls.SetId, JSON.stringify(setIdReq));
      state.flowStatus = FlowStatus[result.state];
      return true;
    });
  }
  AddLog(error, context) {
    return __async(this, null, function* () {
      try {
        let data = {
          requestId: state.requestId,
          action: FlowStatus[state.flowStatus],
          message: JSON.stringify({
            error,
            context
          })
        };
        let result = yield this.post(this.urls.AddLog, JSON.stringify(data), false);
        return result.saved;
      } catch (_a) {
      }
    });
  }
  AddStep(step, moment) {
    return __async(this, null, function* () {
      if (state.logSteps == false) return;
      let data = {
        requestId: state.requestId,
        redirectId: state.redirectId,
        step: FlowSteps[step],
        moment: FlowMoments[moment],
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      let result = yield this.post(this.urls.AddStep, JSON.stringify(data));
      return result.saved;
    });
  }
  AbortRequest() {
    return __async(this, null, function* () {
      let result = yield this.post(this.urls.AbortRequest, JSON.stringify({
        requestId: state.requestId
      }));
      return result;
    });
  }
  GetTranslations(langIso) {
    return __async(this, null, function* () {
      let result = yield this.get(this.urls.Translations + "?langIso=" + langIso);
      return result;
    });
  }
  LandingValidationStartFlow(cameraIsAccessible) {
    return __async(this, null, function* () {
      let result = yield this.post(this.urls.StartFlow, JSON.stringify({
        requestId: state.requestId,
        cameraIsAccessible
      }));
      return FlowStatus[result.state];
    });
  }
  GetNextFlowState() {
    return __async(this, null, function* () {
      let result = yield this.get(this.urls.NextFlowState + "?requestId=" + state.requestId);
      return FlowStatus[result.state];
    });
  }
  GetFlowState() {
    return __async(this, null, function* () {
      let result = yield this.get(this.urls.CurrentFlowState + "?requestId=" + state.requestId, false);
      return FlowStatus[result.state];
    });
  }
  GetNextStateForCaptureError() {
    return __async(this, null, function* () {
      let result = yield this.get(this.urls.NextStateForCaptureError + "?requestId=" + state.requestId);
      return FlowStatus[result.state];
    });
  }
};
var TranslationsController = class {
  getValues() {
    return __async(this, null, function* () {
      if (this.values) {
        return this.values;
      } else {
        this.values = yield this.fetchTranslations();
        return this.values;
      }
    });
  }
  getLocale(element = document.body) {
    if (state.langIso && state.langIso != "") {
      return state.langIso;
    } else {
      const closestElement = element.closest("[lang]");
      return closestElement ? closestElement.lang : "ro";
    }
  }
  fetchTranslations() {
    return __async(this, null, function* () {
      const locale = this.getLocale();
      try {
        const result = ApiCall.instance.GetTranslations(locale);
        if (result) {
          return result;
        }
      } catch (exception) {
        console.error(`Error loading locale: ${locale}`, exception);
        return null;
      }
    });
  }
};
var Translations = new TranslationsController();

export {
  FlowStatus,
  EctDbProvider,
  state,
  FlowSteps,
  FlowMoments,
  OrderStatuses,
  ApiCall,
  Translations
};
