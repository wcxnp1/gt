"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
if (!Array) {
  const _easycom_up_collapse_item2 = common_vendor.resolveComponent("up-collapse-item");
  const _easycom_up_collapse2 = common_vendor.resolveComponent("up-collapse");
  (_easycom_up_collapse_item2 + _easycom_up_collapse2)();
}
const _easycom_up_collapse_item = () => "../node-modules/uview-plus/components/u-collapse-item/u-collapse-item.js";
const _easycom_up_collapse = () => "../node-modules/uview-plus/components/u-collapse/u-collapse.js";
if (!Math) {
  (_easycom_up_collapse_item + _easycom_up_collapse)();
}
const _sfc_main = {
  __name: "foots",
  setup(__props) {
    const open = (e) => {
    };
    const close = (e) => {
    };
    const change = (e) => {
    };
    const mytop = common_vendor.ref(2);
    const left = common_vendor.ref(10);
    common_vendor.onMounted(() => {
      window.addEventListener("resize", handleResize);
    });
    const flexshow = common_vendor.ref(false);
    const viewportWidth = common_vendor.ref(0);
    const handleResize = () => {
      viewportWidth.value = window.innerWidth;
      if (viewportWidth.value < 956) {
        flexshow.value = true;
        left.value = 3;
      } else if (viewportWidth.value == 1738) {
        left.value = 6;
      } else if (viewportWidth.value == 1530) {
        left.value = 3;
      } else {
        flexshow.value = false;
      }
    };
    common_vendor.onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });
    common_vendor.onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "文档指南",
          name: "Docs guide"
        }),
        b: common_vendor.p({
          title: "组件全面",
          name: "Variety components"
        }),
        c: common_vendor.p({
          title: "众多利器",
          name: "Numerous tools"
        }),
        d: common_vendor.o(change),
        e: common_vendor.o(close),
        f: common_vendor.o(open),
        g: common_assets._imports_0,
        h: `${mytop.value}rem ${left.value}rem`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a09d9cdc"]]);
wx.createComponent(Component);
