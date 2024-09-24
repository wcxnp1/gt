"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "joinusul",
  setup(__props) {
    const viewportWidth = common_vendor.ref(0);
    const fontsize = common_vendor.ref(0);
    const fontname = common_vendor.ref(0);
    const mytop = common_vendor.ref(0.7);
    const myleft = common_vendor.ref(0);
    const handleResize = () => {
      const FontSize = "16";
      viewportWidth.value = window.innerWidth;
      if (viewportWidth.value > 1e3) {
        document.documentElement.style.fontSize = FontSize + "px";
        fontsize.value = 1;
        fontname.value = 0.8;
      } else {
        document.documentElement.style.fontSize = FontSize / 1 + "px";
        if (viewportWidth.value < 1e3) {
          fontsize.value = 1;
          fontname.value = 0.7;
          mytop.value = 0.8;
        }
        if (viewportWidth.value < 900) {
          fontsize.value = 0.9;
          fontname.value = 0.6;
          mytop.value = 0.7;
        }
        if (viewportWidth.value < 800) {
          fontsize.value = 0.8;
          fontname.value = 0.6;
          mytop.value = 0.4;
        }
        if (viewportWidth.value < 7320) {
          fontsize.value = 0.8;
          fontname.value = 0.5;
          mytop.value = 0.4;
        }
        if (viewportWidth.value < 700) {
          fontsize.value = 0.7;
          fontname.value = 0.5;
          mytop.value = 0.3;
        }
        if (viewportWidth.value < 650) {
          fontsize.value = 0.7;
          fontname.value = 0.4;
          mytop.value = 0.3;
        }
        if (viewportWidth.value < 600) {
          fontsize.value = 0.6;
          fontname.value = 0.4;
          mytop.value = 0.3;
        }
        if (viewportWidth.value < 500) {
          fontsize.value = 0.5;
          fontname.value = 0.3;
          mytop.value = 0.2;
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
        a: `${fontsize.value}rem`,
        b: `${mytop.value}rem ${myleft.value}rem`,
        c: `${fontname.value}rem `,
        d: `${mytop.value}rem ${myleft.value}rem`,
        e: `${fontsize.value}rem`,
        f: `${mytop.value}rem ${myleft.value}rem`,
        g: `${fontname.value}rem `,
        h: `${mytop.value}rem ${myleft.value}rem`,
        i: `${fontsize.value}rem`,
        j: `${mytop.value}rem ${myleft.value}rem`,
        k: `${fontname.value}rem `,
        l: `${mytop.value}rem ${myleft.value}rem`,
        m: `${fontsize.value}rem`,
        n: `${mytop.value}rem ${myleft.value}rem`,
        o: `${fontname.value}rem `,
        p: `${mytop.value}rem ${myleft.value}rem`,
        q: `${fontsize.value}rem`,
        r: `${mytop.value}rem ${myleft.value}rem`,
        s: `${fontname.value}rem `,
        t: `${mytop.value}rem ${myleft.value}rem`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0cf09470"]]);
wx.createComponent(Component);
