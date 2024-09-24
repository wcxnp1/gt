"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "indexto",
  setup(__props) {
    const showtitle = common_vendor.ref(false);
    common_vendor.ref(false);
    common_vendor.ref(false);
    const mytop = common_vendor.ref(0);
    const myleft = common_vendor.ref(2);
    const Navigetle = common_vendor.ref(10);
    const Navigetcent = common_vendor.ref(65);
    const Navigetrigth = common_vendor.ref(15);
    const fontsize = common_vendor.ref(1);
    const login = common_vendor.ref(1);
    const buth = common_vendor.ref(0.8);
    common_vendor.onMounted(() => {
      window.addEventListener("resize", handleResize);
    });
    common_vendor.ref();
    const viewportWidth = common_vendor.ref(0);
    const handleResize = () => {
      const FontSize = "16";
      viewportWidth.value = window.innerWidth;
      if (viewportWidth.value > 1e3) {
        myleft.value = 2;
        Navigetle.value = 10;
        Navigetcent.value = 65;
        Navigetrigth.value = 15;
        fontsize.value = 1;
        login.value = 1.5;
        buth.value = 0.7;
        document.documentElement.style.fontSize = FontSize + "px";
      } else {
        document.documentElement.style.fontSize = FontSize / 1 + "px";
        if (viewportWidth.value < 1e3) {
          myleft.value = 0;
          Navigetle.value = 7;
          Navigetcent.value = 65;
          Navigetrigth.value = 18;
          fontsize.value = 1;
          login.value = 1.2;
          buth.value = 0.5;
        }
        if (viewportWidth.value < 800) {
          myleft.value = 1;
          Navigetle.value = 7;
          Navigetcent.value = 65;
          Navigetrigth.value = 18;
          fontsize.value = 1;
          login.value = 1.2;
          buth.value = 0.7;
        }
        if (viewportWidth.value < 700) {
          myleft.value = 0;
          Navigetle.value = 7;
          Navigetcent.value = 65;
          Navigetrigth.value = 18;
          fontsize.value = 0.8;
          login.value = 1;
          buth.value = 0.5;
        }
        if (viewportWidth.value < 600) {
          myleft.value = 0;
          Navigetle.value = 7;
          Navigetcent.value = 68;
          Navigetrigth.value = 25;
          fontsize.value = 0.6;
          login.value = 0.8;
          buth.value = 0.5;
        }
        if (viewportWidth.value < 450) {
          myleft.value = 0;
          Navigetle.value = 7;
          Navigetcent.value = 68;
          Navigetrigth.value = 25;
          fontsize.value = 0.5;
          login.value = 0.6;
          buth.value = 0.3;
        }
      }
      if (viewportWidth.value > 1275) {
        showtitle.value = false;
      } else {
        showtitle.value = true;
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
        a: `${Navigetle.value}%`,
        b: `${login.value}rem`,
        c: `${fontsize.value}rem`,
        d: `${fontsize.value}rem`,
        e: `${fontsize.value}rem`,
        f: `${fontsize.value}rem`,
        g: `${fontsize.value}rem`,
        h: `${fontsize.value}rem`,
        i: `${fontsize.value}rem`,
        j: `${Navigetcent.value}%`,
        k: `${buth.value}rem`,
        l: `${buth.value}rem`,
        m: `${Navigetrigth.value}%`,
        n: `${mytop.value}rem  ${myleft.value}rem`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9929eb46"]]);
wx.createComponent(Component);
