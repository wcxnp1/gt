"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_up_swiper2 = common_vendor.resolveComponent("up-swiper");
  _easycom_up_swiper2();
}
const _easycom_up_swiper = () => "../../../node-modules/uview-plus/components/u-swiper/u-swiper.js";
if (!Math) {
  _easycom_up_swiper();
}
const _sfc_main = {
  __name: "wiper",
  setup(__props) {
    const list1 = common_vendor.reactive([
      "https://cdn.uviewui.com/uview/swiper/swiper1.png",
      "https://cdn.uviewui.com/uview/swiper/swiper2.png",
      "https://cdn.uviewui.com/uview/swiper/swiper3.png"
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: list1,
          indicator: true,
          indicatorMode: "line",
          circular: true,
          height: "500"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7b409e4b"]]);
wx.createComponent(Component);
