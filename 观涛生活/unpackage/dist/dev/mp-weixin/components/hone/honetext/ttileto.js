"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../../../node-modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = {
  __name: "ttileto",
  setup(__props) {
    const showtext = common_vendor.ref(false);
    const headsetshow = () => {
      showtext.value = !showtext.value;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !showtext.value
      }, !showtext.value ? {
        b: common_vendor.p({
          name: "arrow-down",
          color: "#111925"
        }),
        c: common_vendor.o(headsetshow)
      } : {}, {
        d: showtext.value
      }, showtext.value ? {} : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-372fe864"]]);
wx.createComponent(Component);
