"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (hometitle + hometitleto)();
}
const hometitle = () => "./honetext/title.js";
const hometitleto = () => "./honetext/ttileto.js";
const _sfc_main = {
  __name: "topic",
  setup(__props) {
    const showtitle = common_vendor.ref(false);
    common_vendor.onMounted(() => {
      window.addEventListener("resize", handleResize);
    });
    common_vendor.ref();
    const viewportWidth = common_vendor.ref(0);
    const handleResize = () => {
      viewportWidth.value = window.innerWidth;
      console.log(viewportWidth.value);
      if (viewportWidth.value > 1092) {
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
        a: !showtitle.value,
        b: showtitle.value
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-019271d3"]]);
wx.createComponent(Component);
