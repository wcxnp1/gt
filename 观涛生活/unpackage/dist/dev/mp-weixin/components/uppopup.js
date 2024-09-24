"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _component_transition = common_vendor.resolveComponent("transition");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_component_transition + _easycom_up_popup2)();
}
const _easycom_up_popup = () => "../node-modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (navigation + Navigatethecomplex + nationbtn + _easycom_up_popup)();
}
const navigation = () => "./Homedata/navigation.js";
const Navigatethecomplex = () => "./Homedata/Navigatethecomplex.js";
const nationbtn = () => "./Homedata/nationbtn.js";
const _sfc_main = {
  __name: "uppopup",
  setup(__props, { expose: __expose }) {
    const show = common_vendor.ref(false);
    function open() {
      show.value = true;
    }
    function close() {
      show.value = false;
    }
    const IsNaN = common_vendor.ref(false);
    const NAN = common_vendor.ref(false);
    const headset = () => {
      IsNaN.value = false;
    };
    const handleDataUpdate = (data) => {
      IsNaN.value = true;
      NAN.value = data;
    };
    common_vendor.ref(false);
    const ifshowset = (data) => {
      IsNaN.value = true;
      NAN.value = data;
    };
    const headiconset = (data) => {
      IsNaN.value = false;
    };
    __expose({
      open
    });
    return (_ctx, _cache) => {
      return {
        a: !IsNaN.value,
        b: common_vendor.o(handleDataUpdate),
        c: common_vendor.o(ifshowset),
        d: NAN.value && IsNaN.value,
        e: common_vendor.o(headset),
        f: !NAN.value && IsNaN.value,
        g: common_vendor.o(headiconset),
        h: IsNaN.value ? "complex" : "navigation",
        i: common_vendor.p({
          name: "fade",
          mode: "out-in"
        }),
        j: common_vendor.o(close),
        k: common_vendor.o(open),
        l: common_vendor.p({
          show: show.value,
          mode: "left"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d62d1841"]]);
wx.createComponent(Component);
