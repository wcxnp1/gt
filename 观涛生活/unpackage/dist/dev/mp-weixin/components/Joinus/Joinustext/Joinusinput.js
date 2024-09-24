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
  __name: "Joinusinput",
  props: {
    size: {
      type: Number,
      default: 1
    },
    top: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: `${__props.size}rem  0`,
        b: common_vendor.p({
          name: "search",
          color: "#000001",
          size: "28"
        }),
        c: `${__props.top}rem`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5d0ec029"]]);
wx.createComponent(Component);
