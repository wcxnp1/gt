"use strict";
const common_vendor = require("../../common/vendor.js");
const Navigationbar = () => "../../components/Navigationbar.js";
const heahimage = () => "../../components/headimg/headimage.js";
const Stepbarindex = () => "../../components/centent/index.js";
const foots = () => "../../components/foots.js";
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {},
  components: {
    Navigationbar,
    heahimage,
    Stepbarindex,
    foots
  }
};
if (!Array) {
  const _component_Navigationbar = common_vendor.resolveComponent("Navigationbar");
  const _component_heahimage = common_vendor.resolveComponent("heahimage");
  const _component_Stepbarindex = common_vendor.resolveComponent("Stepbarindex");
  const _component_foots = common_vendor.resolveComponent("foots");
  (_component_Navigationbar + _component_heahimage + _component_Stepbarindex + _component_foots)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
