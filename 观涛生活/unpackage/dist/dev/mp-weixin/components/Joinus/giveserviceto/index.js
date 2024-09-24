"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (indexpc + indexapp)();
}
const indexpc = () => "./indexpc.js";
const indexapp = () => "./indexapp.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const viewportWidth = common_vendor.ref(0);
    const showset = common_vendor.ref(false);
    const handleResize = () => {
      const FontSize = "16";
      viewportWidth.value = window.innerWidth;
      if (viewportWidth.value > 1e3) {
        document.documentElement.style.fontSize = FontSize + "px";
        showset.value = false;
      } else {
        showset.value = true;
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
        a: !showset.value,
        b: showset.value
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9842fb9b"]]);
wx.createComponent(Component);
