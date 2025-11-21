import {
  Injectable,
  Subject,
  filter,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-LS7G26BK.js";

// src/app/features/administration/services/broadcast-event-messages.service.ts
var BroadcastEventMessageService = class _BroadcastEventMessageService {
  messageSubject = new Subject();
  /**
   * Broadcast a message to all subscribers
   * @param type The message type identifier
   * @param data The data payload
   */
  broadcast(type, data) {
    this.messageSubject.next({ type, data });
  }
  /**
   * Listen for messages of a specific type
   * @param type The message type to listen for
   * @returns An observable that emits when messages of the specified type are broadcast
   */
  on(type) {
    return this.messageSubject.pipe(filter((message) => message.type === type), map((message) => message.data));
  }
  static \u0275fac = function BroadcastEventMessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BroadcastEventMessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BroadcastEventMessageService, factory: _BroadcastEventMessageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BroadcastEventMessageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  BroadcastEventMessageService
};
//# sourceMappingURL=chunk-2AHRRRK2.js.map
