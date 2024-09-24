"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Math) {
  Joinustitl();
}
const Joinustitl = () => "../Joinustext/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const botton = common_vendor.ref(0);
    const preventFullscreen = () => {
      console.log(1212);
    };
    const viewportWidth = common_vendor.ref(0);
    const handleResize = () => {
      const FontSize = "16";
      viewportWidth.value = window.innerWidth;
      if (viewportWidth.value > 1e3) {
        document.documentElement.style.fontSize = FontSize + "px";
        botton.value = 280;
      } else {
        document.documentElement.style.fontSize = FontSize / 1 + "px";
        if (viewportWidth.value < 1e3) {
          botton.value = 185;
        }
        if (viewportWidth.value < 900) {
          botton.value = 175;
        }
        if (viewportWidth.value < 800) {
          botton.value = 145;
        }
        if (viewportWidth.value < 700) {
          botton.value = 120;
        }
        if (viewportWidth.value < 600) {
          botton.value = 105;
        }
        if (viewportWidth.value < 500) {
          botton.value = 80;
        }
        if (viewportWidth.value < 400) {
          botton.value = 70;
        }
        if (viewportWidth.value < 300) {
          botton.value = 60;
        }
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
        a: common_assets._imports_0$1,
        b: common_assets._imports_1,
        c: common_vendor.o(preventFullscreen),
        d: `${botton.value}px`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9ba79e72"]]);
wx.createComponent(Component);
