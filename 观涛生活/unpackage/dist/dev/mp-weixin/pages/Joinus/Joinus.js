"use strict";
const common_vendor = require("../../common/vendor.js");
const Headnavigation = () => "../../components/Joinus/Headnavigation/index.js";
const Headnavigationto = () => "../../components/Joinus/Headnavigation/indexto.js";
const videoset = () => "../../components/Joinus/Video/index.js";
const centerbox = () => "../../components/Joinus/joinuscenten/index.js";
const swiperset = () => "../../components/Joinus/swiper/index.js";
const work = () => "../../components/Joinus/work/index.js";
const service = () => "../../components/Joinus/giveserviceto/index.js";
const foot = () => "../../components/foots.js";
const _sfc_main = {
  data() {
    return {
      // 用于控制头部导航的显示与隐藏  
      isScrolled: false,
      //往上划显示
      issindexto: false,
      // 上次滚动位置  
      lastScrollTop: 0
    };
  },
  methods: {
    handleScroll(event) {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > this.lastScrollTop) {
        this.isScrolled = true;
      } else {
        this.isScrolled = true;
        this.issindexto = true;
        console.log(2);
        if (st < 89) {
          this.isScrolled = false;
          this.issindexto = false;
        }
      }
      this.lastScrollTop = st;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {
    Headnavigation,
    videoset,
    Headnavigationto,
    centerbox,
    swiperset,
    work,
    service,
    foot
  }
};
if (!Array) {
  const _component_Headnavigation = common_vendor.resolveComponent("Headnavigation");
  const _component_transition = common_vendor.resolveComponent("transition");
  const _component_Headnavigationto = common_vendor.resolveComponent("Headnavigationto");
  const _component_videoset = common_vendor.resolveComponent("videoset");
  const _component_centerbox = common_vendor.resolveComponent("centerbox");
  const _component_swiperset = common_vendor.resolveComponent("swiperset");
  const _component_work = common_vendor.resolveComponent("work");
  const _component_service = common_vendor.resolveComponent("service");
  const _component_foot = common_vendor.resolveComponent("foot");
  (_component_Headnavigation + _component_transition + _component_Headnavigationto + _component_videoset + _component_centerbox + _component_swiperset + _component_work + _component_service + _component_foot)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: !$data.isScrolled,
    b: common_vendor.p({
      name: "fade"
    }),
    c: $data.issindexto,
    d: common_vendor.p({
      name: "fade"
    }),
    e: common_vendor.o((...args) => $options.handleScroll && $options.handleScroll(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a9aaff1d"]]);
wx.createPage(MiniProgramPage);
