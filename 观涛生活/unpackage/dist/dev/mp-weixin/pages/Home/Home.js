"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (Navigationbar + topic + indexset + foots)();
}
const Navigationbar = () => "../../components/Navigationbar.js";
const topic = () => "../../components/hone/topic.js";
const indexset = () => "../../components/hone/boxofcontents/index.js";
const foots = () => "../../components/foots.js";
const _sfc_main = {
  __name: "Home",
  setup(__props) {
    const showtitle = common_vendor.ref(false);
    common_vendor.ref(false);
    common_vendor.ref(false);
    common_vendor.ref();
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
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7ffebbf4"]]);
wx.createPage(MiniProgramPage);
