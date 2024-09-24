"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (indexinput + indexulset)();
}
const indexinput = () => "./Joinusinput.js";
const indexulset = () => "./joinusul.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const viewportWidth = common_vendor.ref(0);
    const title = common_vendor.ref(0);
    const namesize = common_vendor.ref(0);
    const size = common_vendor.ref(0.7);
    const top = common_vendor.ref(0);
    const handleResize = () => {
      const FontSize = "16";
      viewportWidth.value = window.innerWidth;
      if (viewportWidth.value > 1e3) {
        document.documentElement.style.fontSize = FontSize + "px";
        title.value = 3;
        namesize.value = 1.5;
        size.value = 1;
        top.value = 2.5;
      } else {
        document.documentElement.style.fontSize = FontSize / 1 + "px";
        if (viewportWidth.value < 1e3) {
          title.value = 2;
          namesize.value = 1.2;
          size.value = 0.8;
        }
        if (viewportWidth.value < 900) {
          title.value = 1.8;
          namesize.value = 1;
          size.value = 0.8;
        }
        if (viewportWidth.value < 800) {
          title.value = 1.5;
          namesize.value = 1;
          size.value = 0.8;
        }
        if (viewportWidth.value < 700) {
          title.value = 1.2;
          namesize.value = 0.8;
          size.value = 0.6;
          top.value = 0.7;
        }
        if (viewportWidth.value < 600) {
          title.value = 1;
          namesize.value = 0.7;
          size.value = 0.4;
          top.value = 0.5;
        }
        if (viewportWidth.value < 500) {
          title.value = 0.8;
          namesize.value = 0.5;
          size.value = 0.2;
          top.value = 0.4;
        }
        if (viewportWidth.value < 500) {
          title.value = 0.8;
          namesize.value = 0.5;
          size.value = 0.1;
          top.value = 0.4;
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
        a: `${title.value}rem`,
        b: `${namesize.value}rem`,
        c: common_vendor.p({
          size: size.value,
          top: top.value
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-197740e4"]]);
wx.createComponent(Component);
