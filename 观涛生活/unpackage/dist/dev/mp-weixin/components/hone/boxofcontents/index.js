"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (Seethemall + Bigboxofcontents)();
}
const Seethemall = () => "../Seethemall.js";
const Bigboxofcontents = () => "./Bigboxofcontents.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
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
        a: flexshow.value ? "100%" : "67%",
        b: flexshow.value ? "100%" : "30%",
        c: flexshow.value ? "column" : "row",
        d: flexshow.value ? "100%" : "30%",
        e: flexshow.value ? "100%" : "30%",
        f: flexshow.value ? "100%" : "30%",
        g: flexshow.value ? "column" : "row",
        h: flexshow.value ? "100%" : "30%",
        i: flexshow.value ? "100%" : "30%",
        j: flexshow.value ? "100%" : "30%",
        k: flexshow.value ? "column" : "row",
        l: `${mytop.value}rem ${left.value}rem`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8f876bc2"]]);
wx.createComponent(Component);
