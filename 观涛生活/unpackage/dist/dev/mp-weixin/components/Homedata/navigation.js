"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../../node-modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = {
  __name: "navigation",
  emits: "showsubassembly",
  setup(__props, { emit: __emit }) {
    const dataset = common_vendor.ref([
      {
        id: "1",
        name: "首页"
      },
      {
        id: "2",
        name: "和美团合作"
      },
      {
        id: "3",
        name: "我们的科技"
      },
      {
        id: "4",
        name: "企业社会责任"
      },
      {
        id: "5",
        name: "美团公益"
      },
      {
        id: "6",
        name: "投资者关系"
      },
      {
        id: "7",
        name: "加入我们"
      }
    ]);
    const emit = __emit;
    const isAct = common_vendor.ref(false);
    const NAN = common_vendor.ref(false);
    const headliserrouter = (i) => {
      if (i == 4) {
        isAct.value = true;
        emit("showsubassembly", isAct.value);
      } else if (i == 5) {
        isAct.value = true;
        emit("ifshowset", NAN.value);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(dataset.value, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.name),
            b: item.id == 5 || item.id == 4
          }, item.id == 5 || item.id == 4 ? {
            c: "7b66a638-0-" + i0,
            d: common_vendor.p({
              name: "arrow-right",
              color: "#010c1c",
              size: "15"
            })
          } : {}, {
            e: common_vendor.o(($event) => headliserrouter(item.id), index),
            f: index
          });
        }),
        b: common_vendor.p({
          name: "arrow-rightward",
          color: "#00101e",
          size: "18"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7b66a638"]]);
wx.createComponent(Component);
