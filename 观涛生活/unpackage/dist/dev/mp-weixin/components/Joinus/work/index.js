"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (titleset + indexboxset)();
}
const titleset = () => "../joinusttile/index.js";
const indexboxset = () => "./indexbox.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const viewportWidth = common_vendor.ref(0);
    common_vendor.ref(0);
    common_vendor.ref(0);
    const flexshow = common_vendor.ref(false);
    const handleResize = () => {
      const FontSize = "16";
      viewportWidth.value = window.innerWidth;
      if (viewportWidth.value > 1e3) {
        flexshow.value = false;
        document.documentElement.style.fontSize = FontSize + "px";
      } else {
        flexshow.value = true;
        document.documentElement.style.fontSize = FontSize / 1 + "px";
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
        a: flexshow.value ? "100%" : "24%",
        b: flexshow.value ? "100%" : "24%",
        c: flexshow.value ? "100%" : "24%",
        d: flexshow.value ? "100%" : "24%",
        e: flexshow.value ? "column" : "row"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-071b6350"]]);
wx.createComponent(Component);
