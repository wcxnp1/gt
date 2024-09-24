"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = {
  __name: "nationbtn",
  emits: "headiconset",
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const headiconset = () => {
      emit("headiconset", false);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(headiconset),
        b: common_vendor.p({
          name: "arrow-left",
          color: "#000e1d",
          size: "18"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5a5dcbd7"]]);
wx.createComponent(Component);
