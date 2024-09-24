"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (cententtitle + cententbox)();
}
const cententtitle = () => "../joinusttile/index.js";
const cententbox = () => "./cententbox.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const viewportWidth = common_vendor.ref(0);
    const withset = common_vendor.ref(25);
    const handleResize = () => {
      const FontSize = "16";
      viewportWidth.value = window.innerWidth;
      if (viewportWidth.value > 1e3) {
        document.documentElement.style.fontSize = FontSize + "px";
        withset.value = 19;
      } else {
        withset.value = 30;
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
        a: `${withset.value}%`,
        b: `${withset.value}%`,
        c: `${withset.value}%`,
        d: `${withset.value}%`,
        e: `${withset.value}%`,
        f: `${withset.value}%`,
        g: `${withset.value}%`,
        h: `${withset.value}%`,
        i: `${withset.value}%`,
        j: `${withset.value}%`,
        k: `${withset.value}%`,
        l: `${withset.value}%`,
        m: `${withset.value}%`,
        n: `${withset.value}%`,
        o: `${withset.value}%`,
        p: `${withset.value}%`,
        q: `${withset.value}%`,
        r: `${withset.value}%`,
        s: `${withset.value}%`,
        t: `${withset.value}%`,
        v: `${withset.value}%`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-89109e77"]]);
wx.createComponent(Component);
