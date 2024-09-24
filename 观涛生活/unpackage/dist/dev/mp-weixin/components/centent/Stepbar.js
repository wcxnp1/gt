"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      myleft: "0",
      mytop: "555"
    };
  },
  mounted() {
    this.updateActiveNav();
    window.addEventListener("scroll", this.updateActiveNav);
    this.observeElement();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateActiveNav);
  },
  methods: {
    updateActiveNav() {
      const navItems = document.querySelectorAll("nav > a");
      const sections = document.querySelectorAll(".content");
      let activeSection = null;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 50;
        if (window.pageYOffset >= sectionTop && (window.pageYOffset < section.offsetTop + section.offsetHeight || index === sections.length - 1)) {
          activeSection = navItems[index];
        }
      });
      if (activeSection) {
        navItems.forEach((item) => {
          item.style.borderColor = "transparent";
          item.style.color = "#191919";
        });
        activeSection.style.borderColor = "#6f00ff";
        activeSection.style.color = "#6f00ff";
      }
    },
    observeElement() {
      const elements = [
        this.$refs.myto,
        // this.$refs.mycontent,
        this.$refs.myfaot
      ];
      this.$refs.myto;
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.mytop = "250";
            if (this.isScrollingUp) {
              this.mytop = "555";
              this.isScrollingUp = false;
            }
            if (entry.target === elements[elements.length - 1]) {
              this.mytop = "150";
            }
          }
        });
      }, {
        root: null,
        // 视口  
        rootMargin: "0px",
        // 边距  
        threshold: [0, 0.1, 0.5, 1]
        // 多个阈值  
      });
      elements.forEach((element) => {
        if (element) {
          this.observer.observe(element);
        }
      });
      window.addEventListener("scroll", this.handleScroll);
    },
    handleScroll() {
      const currentScrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < this.lastScrollPosition) {
        this.isScrollingUp = true;
      } else {
        this.isScrollingUp = false;
      }
      this.lastScrollPosition = currentScrollPosition;
    },
    // 你可以在这里添加其他方法来清理事件监听器和IntersectionObserver，  
    // 例如在组件销毁时调用。  
    beforeDestroy() {
      if (this.observer) {
        this.observer.disconnect();
      }
      window.removeEventListener("scroll", this.handleScroll);
    }
    // 注意：如果你确实需要在用户离开元素并向上滑动时重置mytop，  
    // 你可能需要添加一个滚动事件监听器来检测滚动方向，  
    // 并结合IntersectionObserver的回调来准确设置mytop的值。
  }
};
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _component_body = common_vendor.resolveComponent("body");
  (_easycom_up_icon2 + _component_body)();
}
const _easycom_up_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_up_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    b: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    c: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    d: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    e: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    f: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    g: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    h: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    i: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    j: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    k: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    l: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    m: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    n: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    o: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    p: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    q: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    r: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    s: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    t: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    v: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    w: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    x: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    y: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    z: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    A: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    B: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    C: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    D: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    E: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    F: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    G: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    H: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    I: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    J: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    K: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    L: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    M: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    N: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    O: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    }),
    P: common_vendor.p({
      name: "arrow-rightward",
      color: "#626870",
      size: "18"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b1185990"]]);
wx.createComponent(Component);
