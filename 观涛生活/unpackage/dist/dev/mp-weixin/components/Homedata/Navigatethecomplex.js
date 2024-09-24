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
  __name: "Navigatethecomplex",
  emits: "headset",
  setup(__props, { emit: __emit }) {
    const data = common_vendor.ref([
      "个体",
      "便利用户生活",
      "骑手关怀与发展",
      "涌现新职业",
      "产业",
      "助力市场繁荣",
      "支持小商户发展",
      "中华老字号服务报",
      "社会",
      "推动绿色消费",
      "支持乡村振兴",
      "参与应急救灾"
    ]);
    const emit = __emit;
    const headset = () => {
      emit("headset");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(headset),
        b: common_vendor.p({
          name: "arrow-left",
          color: "#000e1d",
          size: "18"
        }),
        c: common_vendor.f(data.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        d: _ctx.NANset
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dbeea9ce"]]);
wx.createComponent(Component);
