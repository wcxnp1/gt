"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../node-modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_up_icon + uppopup)();
}
const uppopup = () => "./uppopup.js";
const _sfc_main = {
  __name: "Navigationbar",
  setup(__props) {
    const showtitle = common_vendor.ref(true);
    const showDropdown = common_vendor.ref(false);
    const showicon = common_vendor.ref(false);
    const headicon = () => {
      showicon.value = !showicon.value;
    };
    common_vendor.onMounted(() => {
      window.addEventListener("resize", handleResize);
    });
    const uppopupset = common_vendor.ref();
    function hedaupicon() {
      uppopupset.value.open();
    }
    const viewportWidth = common_vendor.ref(0);
    const handleResize = () => {
      const FontSize = "16";
      viewportWidth.value = window.innerWidth;
      console.log(viewportWidth.value);
      if (viewportWidth.value > 1e3) {
        document.documentElement.style.fontSize = FontSize + "px";
      } else {
        document.documentElement.style.fontSize = FontSize / 2 + "px";
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
        a: common_vendor.p({
          name: showDropdown.value ? "arrow-up-fill" : "arrow-down-fill",
          color: "#000000",
          size: "8"
        }),
        b: common_vendor.p({
          name: showDropdown.value ? "arrow-up-fill" : "arrow-down-fill",
          color: "#000000",
          size: "8"
        }),
        c: common_vendor.p({
          name: showDropdown.value ? "arrow-up-fill" : "arrow-down-fill",
          color: "#000000",
          size: "8"
        }),
        d: common_vendor.p({
          name: "play-right-fill",
          color: "#ffffff",
          size: "18"
        }),
        e: common_vendor.p({
          name: "play-right-fill",
          color: "#ffffff",
          size: "18"
        }),
        f: common_vendor.p({
          name: "play-right-fill",
          color: "#ffffff",
          size: "18"
        }),
        g: common_vendor.p({
          name: "play-right-fill",
          color: "#ffffff",
          size: "18"
        }),
        h: common_vendor.p({
          name: "play-right-fill",
          color: "#ffffff",
          size: "18"
        }),
        i: common_vendor.p({
          name: showDropdown.value ? "arrow-up-fill" : "arrow-down-fill",
          color: "#000000",
          size: "8"
        }),
        j: !showicon.value,
        k: common_vendor.p({
          name: "checkbox-mark",
          color: "#000000",
          size: "15"
        }),
        l: common_vendor.o(headicon),
        m: showicon.value,
        n: common_vendor.p({
          name: "checkbox-mark",
          color: "#000000",
          size: "15"
        }),
        o: common_vendor.o(headicon),
        p: common_vendor.p({
          name: "arrow-rightward",
          color: "#000000",
          size: "15"
        }),
        q: !showtitle.value,
        r: common_vendor.o(hedaupicon),
        s: common_vendor.p({
          name: "list",
          size: "28"
        }),
        t: showtitle.value,
        v: common_vendor.sr(uppopupset, "52165be8-13", {
          "k": "uppopupset"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-52165be8"]]);
wx.createComponent(Component);
