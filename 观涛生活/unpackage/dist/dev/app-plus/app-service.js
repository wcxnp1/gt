if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  function formatAppLog(type2, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type2, filename, ...args);
    } else {
      console[type2].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const icons = {
    "uicon-level": "",
    "uicon-column-line": "",
    "uicon-checkbox-mark": "",
    "uicon-folder": "",
    "uicon-movie": "",
    "uicon-star-fill": "",
    "uicon-star": "",
    "uicon-phone-fill": "",
    "uicon-phone": "",
    "uicon-apple-fill": "",
    "uicon-chrome-circle-fill": "",
    "uicon-backspace": "",
    "uicon-attach": "",
    "uicon-cut": "",
    "uicon-empty-car": "",
    "uicon-empty-coupon": "",
    "uicon-empty-address": "",
    "uicon-empty-favor": "",
    "uicon-empty-permission": "",
    "uicon-empty-news": "",
    "uicon-empty-search": "",
    "uicon-github-circle-fill": "",
    "uicon-rmb": "",
    "uicon-person-delete-fill": "",
    "uicon-reload": "",
    "uicon-order": "",
    "uicon-server-man": "",
    "uicon-search": "",
    "uicon-fingerprint": "",
    "uicon-more-dot-fill": "",
    "uicon-scan": "",
    "uicon-share-square": "",
    "uicon-map": "",
    "uicon-map-fill": "",
    "uicon-tags": "",
    "uicon-tags-fill": "",
    "uicon-bookmark-fill": "",
    "uicon-bookmark": "",
    "uicon-eye": "",
    "uicon-eye-fill": "",
    "uicon-mic": "",
    "uicon-mic-off": "",
    "uicon-calendar": "",
    "uicon-calendar-fill": "",
    "uicon-trash": "",
    "uicon-trash-fill": "",
    "uicon-play-left": "",
    "uicon-play-right": "",
    "uicon-minus": "",
    "uicon-plus": "",
    "uicon-info": "",
    "uicon-info-circle": "",
    "uicon-info-circle-fill": "",
    "uicon-question": "",
    "uicon-error": "",
    "uicon-close": "",
    "uicon-checkmark": "",
    "uicon-android-circle-fill": "",
    "uicon-android-fill": "",
    "uicon-ie": "",
    "uicon-IE-circle-fill": "",
    "uicon-google": "",
    "uicon-google-circle-fill": "",
    "uicon-setting-fill": "",
    "uicon-setting": "",
    "uicon-minus-square-fill": "",
    "uicon-plus-square-fill": "",
    "uicon-heart": "",
    "uicon-heart-fill": "",
    "uicon-camera": "",
    "uicon-camera-fill": "",
    "uicon-more-circle": "",
    "uicon-more-circle-fill": "",
    "uicon-chat": "",
    "uicon-chat-fill": "",
    "uicon-bag-fill": "",
    "uicon-bag": "",
    "uicon-error-circle-fill": "",
    "uicon-error-circle": "",
    "uicon-close-circle": "",
    "uicon-close-circle-fill": "",
    "uicon-checkmark-circle": "",
    "uicon-checkmark-circle-fill": "",
    "uicon-question-circle-fill": "",
    "uicon-question-circle": "",
    "uicon-share": "",
    "uicon-share-fill": "",
    "uicon-shopping-cart": "",
    "uicon-shopping-cart-fill": "",
    "uicon-bell": "",
    "uicon-bell-fill": "",
    "uicon-list": "",
    "uicon-list-dot": "",
    "uicon-zhihu": "",
    "uicon-zhihu-circle-fill": "",
    "uicon-zhifubao": "",
    "uicon-zhifubao-circle-fill": "",
    "uicon-weixin-circle-fill": "",
    "uicon-weixin-fill": "",
    "uicon-twitter-circle-fill": "",
    "uicon-twitter": "",
    "uicon-taobao-circle-fill": "",
    "uicon-taobao": "",
    "uicon-weibo-circle-fill": "",
    "uicon-weibo": "",
    "uicon-qq-fill": "",
    "uicon-qq-circle-fill": "",
    "uicon-moments-circel-fill": "",
    "uicon-moments": "",
    "uicon-qzone": "",
    "uicon-qzone-circle-fill": "",
    "uicon-baidu-circle-fill": "",
    "uicon-baidu": "",
    "uicon-facebook-circle-fill": "",
    "uicon-facebook": "",
    "uicon-car": "",
    "uicon-car-fill": "",
    "uicon-warning-fill": "",
    "uicon-warning": "",
    "uicon-clock-fill": "",
    "uicon-clock": "",
    "uicon-edit-pen": "",
    "uicon-edit-pen-fill": "",
    "uicon-email": "",
    "uicon-email-fill": "",
    "uicon-minus-circle": "",
    "uicon-minus-circle-fill": "",
    "uicon-plus-circle": "",
    "uicon-plus-circle-fill": "",
    "uicon-file-text": "",
    "uicon-file-text-fill": "",
    "uicon-pushpin": "",
    "uicon-pushpin-fill": "",
    "uicon-grid": "",
    "uicon-grid-fill": "",
    "uicon-play-circle": "",
    "uicon-play-circle-fill": "",
    "uicon-pause-circle-fill": "",
    "uicon-pause": "",
    "uicon-pause-circle": "",
    "uicon-eye-off": "",
    "uicon-eye-off-outline": "",
    "uicon-gift-fill": "",
    "uicon-gift": "",
    "uicon-rmb-circle-fill": "",
    "uicon-rmb-circle": "",
    "uicon-kefu-ermai": "",
    "uicon-server-fill": "",
    "uicon-coupon-fill": "",
    "uicon-coupon": "",
    "uicon-integral": "",
    "uicon-integral-fill": "",
    "uicon-home-fill": "",
    "uicon-home": "",
    "uicon-hourglass-half-fill": "",
    "uicon-hourglass": "",
    "uicon-account": "",
    "uicon-plus-people-fill": "",
    "uicon-minus-people-fill": "",
    "uicon-account-fill": "",
    "uicon-thumb-down-fill": "",
    "uicon-thumb-down": "",
    "uicon-thumb-up": "",
    "uicon-thumb-up-fill": "",
    "uicon-lock-fill": "",
    "uicon-lock-open": "",
    "uicon-lock-opened-fill": "",
    "uicon-lock": "",
    "uicon-red-packet-fill": "",
    "uicon-photo-fill": "",
    "uicon-photo": "",
    "uicon-volume-off-fill": "",
    "uicon-volume-off": "",
    "uicon-volume-fill": "",
    "uicon-volume": "",
    "uicon-red-packet": "",
    "uicon-download": "",
    "uicon-arrow-up-fill": "",
    "uicon-arrow-down-fill": "",
    "uicon-play-left-fill": "",
    "uicon-play-right-fill": "",
    "uicon-rewind-left-fill": "",
    "uicon-rewind-right-fill": "",
    "uicon-arrow-downward": "",
    "uicon-arrow-leftward": "",
    "uicon-arrow-rightward": "",
    "uicon-arrow-upward": "",
    "uicon-arrow-down": "",
    "uicon-arrow-right": "",
    "uicon-arrow-left": "",
    "uicon-arrow-up": "",
    "uicon-skip-back-left": "",
    "uicon-skip-forward-right": "",
    "uicon-rewind-right": "",
    "uicon-rewind-left": "",
    "uicon-arrow-right-double": "",
    "uicon-arrow-left-double": "",
    "uicon-wifi-off": "",
    "uicon-wifi": "",
    "uicon-empty-data": "",
    "uicon-empty-history": "",
    "uicon-empty-list": "",
    "uicon-empty-page": "",
    "uicon-empty-order": "",
    "uicon-man": "",
    "uicon-woman": "",
    "uicon-man-add": "",
    "uicon-man-add-fill": "",
    "uicon-man-delete": "",
    "uicon-man-delete-fill": "",
    "uicon-zh": "",
    "uicon-en": ""
  };
  const defineMixin = (options) => {
    return options;
  };
  const version = "3";
  {
    formatAppLog("log", "at node_modules/uview-plus/libs/config/config.js:5", `
 %c uview-plus V${version} %c https://ijry.github.io/uview-plus/ 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
  }
  const config = {
    v: version,
    version,
    // 主题名称
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc",
      "up-primary": "#2979ff",
      "up-warning": "#ff9900",
      "up-success": "#19be6b",
      "up-error": "#fa3534",
      "up-info": "#909399",
      "up-main-color": "#303133",
      "up-content-color": "#606266",
      "up-tips-color": "#909399",
      "up-light-color": "#c0c4cc"
    },
    // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
    unit: "px"
  };
  const ActionSheet = {
    // action-sheet组件
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0,
      wrapMaxHeight: "600px"
    }
  };
  const Album = {
    // album 组件
    album: {
      urls: [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true,
      autoWrap: false,
      unit: "px"
    }
  };
  const Alert = {
    // alert警告组件
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  const Avatar = {
    // avatar 组件
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  const AvatarGroup = {
    // avatarGroup 组件
    avatarGroup: {
      urls: [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  const Backtop = {
    // backtop组件
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: {
        color: "#909399",
        fontSize: "19px"
      }
    }
  };
  const Badge = {
    // 徽标数组件
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: [],
      inverted: false,
      absolute: false
    }
  };
  const Button = {
    // button组件
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  const Calendar = {
    // calendar 组件
    calendar: {
      title: "日期选择",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "开始",
      endText: "结束",
      customList: [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      // Infinity
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "确定",
      confirmDisabledText: "确定",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      // Infinity
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  const CarKeyboard = {
    // 车牌号键盘
    carKeyboard: {
      random: false
    }
  };
  const Cell = {
    // cell组件的props
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  const CellGroup = {
    // cell-group组件的props
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  const Checkbox = {
    // checkbox组件
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  const CheckboxGroup = {
    // checkbox-group组件
    checkboxGroup: {
      name: "",
      value: [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  const CircleProgress = {
    // circleProgress 组件
    circleProgress: {
      percentage: 30
    }
  };
  const Code = {
    // code 组件
    code: {
      seconds: 60,
      startText: "获取验证码",
      changeText: "X秒重新获取",
      endText: "重新获取",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  const CodeInput = {
    // codeInput 组件
    codeInput: {
      adjustPosition: true,
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  const Col = {
    // col 组件
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  const Collapse = {
    // collapse 组件
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  const CollapseItem = {
    // collapseItem 组件
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300,
      showRight: true
    }
  };
  const ColumnNotice = {
    // columnNotice 组件
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  const CountDown = {
    // u-count-down 计时器组件
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  const CountTo = {
    // countTo 组件
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  const DatetimePicker = {
    // datetimePicker 组件
    datetimePicker: {
      show: false,
      popupMode: "bottom",
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      defaultIndex: []
    }
  };
  const Divider = {
    // divider组件
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  const Empty = {
    // empty组件
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  const Form = {
    // form 组件
    form: {
      model: {},
      rules: {},
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: {}
    }
  };
  const GormItem = {
    // formItem 组件
    formItem: {
      label: "",
      prop: "",
      rules: [],
      borderBottom: "",
      labelPosition: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  const Gap = {
    // gap组件
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  const Grid = {
    // grid组件
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  const GridItem = {
    // grid-item组件
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  const {
    color: color$3
  } = config;
  const Icon = {
    // icon组件
    icon: {
      name: "",
      color: color$3["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$3["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  const Image = {
    // image组件
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  const IndexAnchor = {
    // indexAnchor 组件
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  const IndexList = {
    // indexList 组件
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: [],
      sticky: true,
      customNavHeight: 0,
      safeBottomFix: false
    }
  };
  const Input = {
    // index 组件
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: 140,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  const Keyboard = {
    // 键盘组件
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "取消",
      confirmText: "确定",
      autoChange: false
    }
  };
  const Line = {
    // line组件
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  const LineProgress = {
    // lineProgress 组件
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  const {
    color: color$2
  } = config;
  const Link = {
    // link超链接组件props参数
    link: {
      color: color$2["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "链接已复制，请在浏览器打开",
      lineColor: "",
      text: ""
    }
  };
  const List = {
    // list 组件
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  const ListItem = {
    // listItem 组件
    listItem: {
      anchor: ""
    }
  };
  const {
    color: color$1
  } = config;
  const LoadingIcon = {
    // loading-icon加载中图标组件
    loadingIcon: {
      show: true,
      color: color$1["u-tips-color"],
      textColor: color$1["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  const LoadingPage = {
    // loading-page组件
    loadingPage: {
      loadingText: "正在加载",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      iconSize: 28,
      loadingColor: "#C8C8C8",
      zIndex: 10
    }
  };
  const Loadmore = {
    // loadmore 组件
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      iconSize: 17,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "加载更多",
      loadingText: "正在加载...",
      nomoreText: "没有更多了",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false,
      lineColor: "#E6E8EB",
      dashed: false
    }
  };
  const Modal = {
    // modal 组件
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "确认",
      cancelText: "取消",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: "",
      contentTextAlign: "left"
    }
  };
  const color = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  const Navbar = {
    // navbar 组件
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  const NoNetwork = {
    // noNetwork
    noNetwork: {
      tips: "哎呀，网络信号丢失",
      zIndex: "",
      image: "data:image/png;base64,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"
    }
  };
  const NoticeBar = {
    // noticeBar
    noticeBar: {
      text: [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  const Notify = {
    // notify组件
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  const NumberBox = {
    // 步进器组件
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  const NumberKeyboard = {
    // 数字键盘
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  const Overlay = {
    // overlay组件
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  const Parse = {
    // parse
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  const Picker = {
    // picker
    picker: {
      show: false,
      popupMode: "bottom",
      showToolbar: true,
      title: "",
      columns: [],
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确定",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: [],
      immediateChange: true
    }
  };
  const Popup = {
    // popup组件
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: {},
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  const Radio = {
    // radio组件
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  const RadioGroup = {
    // radio-group组件
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  const Rate = {
    // rate组件
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  const ReadMore = {
    // readMore
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "展开阅读全文",
      openText: "收起",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  const Row = {
    // row
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  const RowNotice = {
    // rowNotice
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  const ScrollList = {
    // scrollList
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  const Search = {
    // search
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "请输入关键字",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: {},
      actionText: "搜索",
      inputAlign: "left",
      inputStyle: {},
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  const Section = {
    // u-section组件
    section: {
      title: "",
      subTitle: "更多",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  const Skeleton = {
    // skeleton
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  const Slider = {
    // slider组件
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: {},
      useNative: false,
      height: "2px"
    }
  };
  const StatusBar = {
    // statusBar
    statusBar: {
      bgColor: "transparent"
    }
  };
  const Steps = {
    // steps组件
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  const StepsItem = {
    // steps-item组件
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  const Sticky = {
    // sticky组件
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  const Subsection = {
    // subsection组件
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  const SwipeAction = {
    // swipe-action组件
    swipeAction: {
      autoClose: true
    }
  };
  const SwipeActionItem = {
    // swipeActionItem 组件
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  const Swiper = {
    // swiper 组件
    swiper: {
      list: [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  const SwipterIndicator = {
    // swiperIndicator 组件
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  const Switch = {
    // switch
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  const Tabbar = {
    // tabbar
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  const TabbarItem = {
    //
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  const Tabs = {
    //
    tabs: {
      duration: 300,
      list: [],
      lineColor: "#3c9cff",
      activeStyle: {
        color: "#303133"
      },
      inactiveStyle: {
        color: "#606266"
      },
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: {
        height: "44px"
      },
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  const Tag = {
    // tag 组件
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: "",
      iconColor: ""
    }
  };
  const Text = {
    // text 组件
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: {
        fontSize: "15px"
      },
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  const Textarea = {
    // textarea 组件
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "done",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  const Toast = {
    // toast组件
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: {},
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  const Toolbar = {
    // toolbar 组件
    toolbar: {
      show: true,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  const Tooltip = {
    // tooltip 组件
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: [],
      overlay: true,
      showToast: true
    }
  };
  const Transition = {
    // transition动画组件的props
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  const Upload = {
    // upload组件
    upload: {
      accept: "image",
      extension: [],
      capture: ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  const props$m = {
    ...ActionSheet,
    ...Album,
    ...Alert,
    ...Avatar,
    ...AvatarGroup,
    ...Backtop,
    ...Badge,
    ...Button,
    ...Calendar,
    ...CarKeyboard,
    ...Cell,
    ...CellGroup,
    ...Checkbox,
    ...CheckboxGroup,
    ...CircleProgress,
    ...Code,
    ...CodeInput,
    ...Col,
    ...Collapse,
    ...CollapseItem,
    ...ColumnNotice,
    ...CountDown,
    ...CountTo,
    ...DatetimePicker,
    ...Divider,
    ...Empty,
    ...Form,
    ...GormItem,
    ...Gap,
    ...Grid,
    ...GridItem,
    ...Icon,
    ...Image,
    ...IndexAnchor,
    ...IndexList,
    ...Input,
    ...Keyboard,
    ...Line,
    ...LineProgress,
    ...Link,
    ...List,
    ...ListItem,
    ...LoadingIcon,
    ...LoadingPage,
    ...Loadmore,
    ...Modal,
    ...Navbar,
    ...NoNetwork,
    ...NoticeBar,
    ...Notify,
    ...NumberBox,
    ...NumberKeyboard,
    ...Overlay,
    ...Parse,
    ...Picker,
    ...Popup,
    ...Radio,
    ...RadioGroup,
    ...Rate,
    ...ReadMore,
    ...Row,
    ...RowNotice,
    ...ScrollList,
    ...Search,
    ...Section,
    ...Skeleton,
    ...Slider,
    ...StatusBar,
    ...Steps,
    ...StepsItem,
    ...Sticky,
    ...Subsection,
    ...SwipeAction,
    ...SwipeActionItem,
    ...Swiper,
    ...SwipterIndicator,
    ...Switch,
    ...Tabbar,
    ...TabbarItem,
    ...Tabs,
    ...Tag,
    ...Text,
    ...Textarea,
    ...Toast,
    ...Toolbar,
    ...Tooltip,
    ...Transition,
    ...Upload
  };
  const props$l = defineMixin({
    props: {
      // 图标类名
      name: {
        type: String,
        default: () => props$m.icon.name
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: () => props$m.icon.color
      },
      // 字体大小，单位px
      size: {
        type: [String, Number],
        default: () => props$m.icon.size
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: () => props$m.icon.bold
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [String, Number],
        default: () => props$m.icon.index
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: () => props$m.icon.hoverClass
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: () => props$m.icon.customPrefix
      },
      // 图标右边或者下面的文字
      label: {
        type: [String, Number],
        default: () => props$m.icon.label
      },
      // label的位置，只能右边或者下边
      labelPos: {
        type: String,
        default: () => props$m.icon.labelPos
      },
      // label的大小
      labelSize: {
        type: [String, Number],
        default: () => props$m.icon.labelSize
      },
      // label的颜色
      labelColor: {
        type: String,
        default: () => props$m.icon.labelColor
      },
      // label与图标的距离
      space: {
        type: [String, Number],
        default: () => props$m.icon.space
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: () => props$m.icon.imgMode
      },
      // 用于显示图片小图标时，图片的宽度
      width: {
        type: [String, Number],
        default: () => props$m.icon.width
      },
      // 用于显示图片小图标时，图片的高度
      height: {
        type: [String, Number],
        default: () => props$m.icon.height
      },
      // 用于解决某些情况下，让图标垂直居中的用途
      top: {
        type: [String, Number],
        default: () => props$m.icon.top
      },
      // 是否阻止事件传播
      stop: {
        type: Boolean,
        default: () => props$m.icon.stop
      }
    }
  });
  const mpMixin = defineMixin({});
  function email(value2) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value2);
  }
  function mobile(value2) {
    return /^1[23456789]\d{9}$/.test(value2);
  }
  function url(value2) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value2);
  }
  function date(value2) {
    if (!value2)
      return false;
    if (number(value2))
      value2 = +value2;
    return !/Invalid|NaN/.test(new Date(value2).toString());
  }
  function dateISO(value2) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value2);
  }
  function number(value2) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value2);
  }
  function string$1(value2) {
    return typeof value2 === "string";
  }
  function digits(value2) {
    return /^\d+$/.test(value2);
  }
  function idCard(value2) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value2
    );
  }
  function carNo(value2) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value2.length === 7) {
      return creg.test(value2);
    }
    if (value2.length === 8) {
      return xreg.test(value2);
    }
    return false;
  }
  function amount(value2) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value2);
  }
  function chinese(value2) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value2);
  }
  function letter(value2) {
    return /^[a-zA-Z]*$/.test(value2);
  }
  function enOrNum(value2) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value2);
  }
  function contains(value2, param) {
    return value2.indexOf(param) >= 0;
  }
  function range$2(value2, param) {
    return value2 >= param[0] && value2 <= param[1];
  }
  function rangeLength(value2, param) {
    return value2.length >= param[0] && value2.length <= param[1];
  }
  function landline(value2) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value2);
  }
  function empty(value2) {
    switch (typeof value2) {
      case "undefined":
        return true;
      case "string":
        if (value2.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value2)
          return true;
        break;
      case "number":
        if (value2 === 0 || isNaN(value2))
          return true;
        break;
      case "object":
        if (value2 === null || value2.length === 0)
          return true;
        for (const i in value2) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value2) {
    if (typeof value2 === "string") {
      try {
        const obj = JSON.parse(value2);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value2) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value2);
    }
    return Object.prototype.toString.call(value2) === "[object Array]";
  }
  function object(value2) {
    return Object.prototype.toString.call(value2) === "[object Object]";
  }
  function code(value2, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value2);
  }
  function func(value2) {
    return typeof value2 === "function";
  }
  function promise(value2) {
    return object(value2) && func(value2.then) && func(value2.catch);
  }
  function image(value2) {
    const newValue = value2.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value2) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value2);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  const test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$2,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string: string$1
  };
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at node_modules/uview-plus/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range$1(min = 0, max = 0, value2 = 0) {
    return Math.max(min, Math.min(max, Number(value2)));
  }
  function getPx(value2, unit = false) {
    if (number(value2)) {
      return unit ? `${value2}px` : Number(value2);
    }
    if (/(rpx|upx)$/.test(value2)) {
      return unit ? `${uni.upx2px(parseInt(value2))}px` : Number(uni.upx2px(parseInt(value2)));
    }
    return unit ? `${parseInt(value2)}px` : parseInt(value2);
  }
  function sleep(value2 = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value2);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    if (typeof customStyle === "object") {
      customStyle.forEach((val, i) => {
        const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
        string2 += `${key}:${val};`;
      });
    }
    return trim(string2);
  }
  function addUnit(value2 = "auto", unit = "") {
    if (!unit) {
      unit = config.unit || "px";
    }
    if (unit == "rpx" && number(String(value2))) {
      value2 = value2 * 2;
    }
    value2 = String(value2);
    return number(value2) ? `${value2}${unit}` : value2;
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o = array(obj) ? [] : {};
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
      }
    }
    return o;
  }
  function deepMerge$2(targetOrigin = {}, source = {}) {
    let target = deepClone(targetOrigin);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (source[prop] == null) {
          target[prop] = source[prop];
        } else if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = deepMerge$2(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function shallowMerge(target, source = {}) {
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (source[prop] == null) {
          target[prop] = source[prop];
        } else if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = shallowMerge(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function error(err) {
    {
      formatAppLog("error", "at node_modules/uview-plus/libs/function/index.js:278", `uView提示：${err}`);
    }
  }
  function randomArray(array3 = []) {
    return array3.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date3;
    if (!dateTime) {
      date3 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime.toString().trim())) {
      date3 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date3 = new Date(Number(dateTime));
    } else {
      date3 = new Date(
        typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime
      );
    }
    const timeSource = {
      "y": date3.getFullYear().toString(),
      // 年
      "m": (date3.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date3.getDate().toString().padStart(2, "0"),
      // 日
      "h": date3.getHours().toString().padStart(2, "0"),
      // 时
      "M": date3.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date3.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format2 = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}分钟前`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}小时前`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}天前`;
        break;
      default:
        if (format2 === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}个月前`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}年前`;
          }
        } else {
          tips = timeFormat(timestamp, format2);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value2 = data[key];
      if (["", void 0, null].indexOf(value2) >= 0) {
        continue;
      }
      if (value2.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value2.length; i++) {
              _result.push(`${key}[${i}]=${value2[i]}`);
            }
            break;
          case "brackets":
            value2.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value2.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value2.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value2.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value2}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type2 = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type2) == -1)
      type2 = "success";
    let iconName = "";
    switch (type2) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number3, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number3 = `${number3}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number3) ? 0 : +number3;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value2, unit = true) {
    const valueNum = parseInt(value2);
    if (unit) {
      if (/s$/.test(value2))
        return value2;
      return value2 > 30 ? `${value2}ms` : `${value2}s`;
    }
    if (/ms$/.test(value2))
      return valueNum;
    if (/s$/.test(value2))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value2) {
    return `00${value2}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem = $parent.call(instance, "u-form-item");
    const form = $parent.call(instance, "u-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (typeof obj !== "object" || null == obj) {
      return "";
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value2) {
    if (typeof obj !== "object" || null == obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value2);
    } else {
      obj[key] = value2;
    }
  }
  function page() {
    const pages2 = getCurrentPages();
    return `/${pages2[pages2.length - 1].route || ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  const index = {
    range: range$1,
    getPx,
    sleep,
    os,
    sys,
    random,
    guid,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge: deepMerge$2,
    shallowMerge,
    error,
    randomArray,
    timeFormat,
    timeFrom,
    trim,
    queryParams,
    toast,
    type2icon,
    priceFormat,
    getDuration,
    padZero,
    formValidate,
    getProperty,
    setProperty,
    page,
    pages
    // setConfig
  };
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false
        // 是否需要拦截
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig2 = {};
      if (typeof options === "string") {
        mergeConfig2.url = this.mixinParam(options, params);
        mergeConfig2.type = "navigateTo";
      } else {
        mergeConfig2 = deepMerge$2(this.config, options);
        mergeConfig2.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig2.url === page())
        return;
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig2.params = params;
      mergeConfig2 = deepMerge$2(this.config, mergeConfig2);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig2, resolve);
        });
        isNext && this.openPage(mergeConfig2);
      } else {
        this.openPage(mergeConfig2);
      }
    }
    // 执行路由跳转
    openPage(config2) {
      const {
        url: url2,
        type: type2,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  const mixin = defineMixin({
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
      // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
      // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
      $u() {
        return deepMerge$2(uni.$u, {
          props: void 0,
          http: void 0,
          mixin: void 0
        });
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          route({ type: this.linkType, url: url2 });
        }
      },
      navTo(url2 = "", linkType = "navigateTo") {
        route({ type: this.linkType, url: url2 });
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = $parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeUnmount() {
      if (this.parent && test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  });
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$10 = {
    name: "u-icon",
    data() {
      return {};
    },
    emits: ["click"],
    mixins: [mpMixin, mixin, props$l],
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.customPrefix == "uicon") {
          classes.push("u-iconfont");
        } else {
          classes.push(this.customPrefix);
        }
        if (this.color && config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: addUnit(this.size),
          lineHeight: addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: addUnit(this.top)
        };
        if (this.color && !config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? addUnit(this.width) : addUnit(this.size);
        style.height = this.height ? addUnit(this.height) : addUnit(this.size);
        return style;
      },
      // 通过图标名，查找对应的图标
      icon() {
        if (this.customPrefix !== "uicon")
          return "";
        return icons["uicon-" + this.name] || this.name;
      }
    },
    methods: {
      addStyle,
      addUnit,
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-icon", ["u-icon--" + _ctx.labelPos]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "u-icon__img",
          src: _ctx.name,
          mode: _ctx.imgMode,
          style: vue.normalizeStyle([$options.imgStyle, $options.addStyle(_ctx.customStyle)])
        }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: vue.normalizeClass(["u-icon__icon", $options.uClasses]),
          style: vue.normalizeStyle([$options.iconStyle, $options.addStyle(_ctx.customStyle)]),
          "hover-class": _ctx.hoverClass
        }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
        vue.createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
        _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 2,
            class: "u-icon__label",
            style: vue.normalizeStyle({
              color: _ctx.labelColor,
              fontSize: $options.addUnit(_ctx.labelSize),
              marginLeft: _ctx.labelPos == "right" ? $options.addUnit(_ctx.space) : 0,
              marginTop: _ctx.labelPos == "bottom" ? $options.addUnit(_ctx.space) : 0,
              marginRight: _ctx.labelPos == "left" ? $options.addUnit(_ctx.space) : 0,
              marginBottom: _ctx.labelPos == "top" ? $options.addUnit(_ctx.space) : 0
            })
          },
          vue.toDisplayString(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$x], ["__scopeId", "data-v-1c933a9a"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-icon/u-icon.vue"]]);
  const props$k = defineMixin({
    props: {
      // 是否显示组件
      show: {
        type: Boolean,
        default: () => props$m.loadingIcon.show
      },
      // 颜色
      color: {
        type: String,
        default: () => props$m.loadingIcon.color
      },
      // 提示文字颜色
      textColor: {
        type: String,
        default: () => props$m.loadingIcon.textColor
      },
      // 文字和图标是否垂直排列
      vertical: {
        type: Boolean,
        default: () => props$m.loadingIcon.vertical
      },
      // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
      mode: {
        type: String,
        default: () => props$m.loadingIcon.mode
      },
      // 图标大小，单位默认px
      size: {
        type: [String, Number],
        default: () => props$m.loadingIcon.size
      },
      // 文字大小
      textSize: {
        type: [String, Number],
        default: () => props$m.loadingIcon.textSize
      },
      // 文字内容
      text: {
        type: [String, Number],
        default: () => props$m.loadingIcon.text
      },
      // 动画模式
      timingFunction: {
        type: String,
        default: () => props$m.loadingIcon.timingFunction
      },
      // 动画执行周期时间
      duration: {
        type: [String, Number],
        default: () => props$m.loadingIcon.duration
      },
      // mode=circle时的暗边颜色
      inactiveColor: {
        type: String,
        default: () => props$m.loadingIcon.inactiveColor
      }
    }
  });
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
      if (i === 0)
        hex = rgbToHex(startColor);
      if (i === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha) {
    color2 = rgbToHex(color2);
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = String(color2).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      return `rgba(${sColorChange.join(",")},${alpha})`;
    }
    return sColor;
  }
  const colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  const _sfc_main$$ = {
    name: "u-loading-icon",
    mixins: [mpMixin, mixin, props$k],
    data() {
      return {
        // Array.form可以通过一个伪数组对象创建指定长度的数组
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        array12: Array.from({
          length: 12
        }),
        // 这里需要设置默认值为360，否则在安卓nvue上，会延迟一个duration周期后才执行
        // 在iOS nvue上，则会一开始默认执行两个周期的动画
        aniAngel: 360,
        // 动画旋转角度
        webviewHide: false,
        // 监听webview的状态，如果隐藏了页面，则停止动画，以免性能消耗
        loading: false
        // 是否运行中，针对nvue使用
      };
    },
    computed: {
      // 当为circle类型时，给其另外三边设置一个更轻一些的颜色
      // 之所以需要这么做的原因是，比如父组件传了color为红色，那么需要另外的三个边为浅红色
      // 而不能是固定的某一个其他颜色(因为这个固定的颜色可能浅蓝，导致效果没有那么细腻良好)
      otherBorderColor() {
        const lightColor = colorGradient(this.color, "#ffffff", 100)[80];
        if (this.mode === "circle") {
          return this.inactiveColor ? this.inactiveColor : lightColor;
        } else {
          return "transparent";
        }
      }
    },
    watch: {
      show(n) {
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      addUnit,
      addStyle,
      init() {
        setTimeout(() => {
          this.show && this.addEventListenerToWebview();
        }, 20);
      },
      // 监听webview的显示与隐藏
      addEventListenerToWebview() {
        const pages2 = getCurrentPages();
        const page2 = pages2[pages2.length - 1];
        const currentWebview = page2.$getAppWebview();
        currentWebview.addEventListener("hide", () => {
          this.webviewHide = true;
        });
        currentWebview.addEventListener("show", () => {
          this.webviewHide = false;
        });
      }
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-loading-icon", [_ctx.vertical && "u-loading-icon--vertical"]]),
        style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle)])
      },
      [
        !$data.webviewHide ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["u-loading-icon__spinner", [`u-loading-icon__spinner--${_ctx.mode}`]]),
            ref: "ani",
            style: vue.normalizeStyle({
              color: _ctx.color,
              width: $options.addUnit(_ctx.size),
              height: $options.addUnit(_ctx.size),
              borderTopColor: _ctx.color,
              borderBottomColor: $options.otherBorderColor,
              borderLeftColor: $options.otherBorderColor,
              borderRightColor: $options.otherBorderColor,
              "animation-duration": `${_ctx.duration}ms`,
              "animation-timing-function": _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
            })
          },
          [
            _ctx.mode === "spinner" ? (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              vue.renderList($data.array12, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index2,
                  class: "u-loading-icon__dot"
                });
              }),
              128
              /* KEYED_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        _ctx.text ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 1,
            class: "u-loading-icon__text",
            style: vue.normalizeStyle({
              fontSize: $options.addUnit(_ctx.textSize),
              color: _ctx.textColor
            })
          },
          vue.toDisplayString(_ctx.text),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$9 = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["render", _sfc_render$w], ["__scopeId", "data-v-00752c6d"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-loading-icon/u-loading-icon.vue"]]);
  const props$j = defineMixin({
    props: {
      // 是否细边框
      hairline: {
        type: Boolean,
        default: () => props$m.button.hairline
      },
      // 按钮的预置样式，info，primary，error，warning，success
      type: {
        type: String,
        default: () => props$m.button.type
      },
      // 按钮尺寸，large，normal，small，mini
      size: {
        type: String,
        default: () => props$m.button.size
      },
      // 按钮形状，circle（两边为半圆），square（带圆角）
      shape: {
        type: String,
        default: () => props$m.button.shape
      },
      // 按钮是否镂空
      plain: {
        type: Boolean,
        default: () => props$m.button.plain
      },
      // 是否禁止状态
      disabled: {
        type: Boolean,
        default: () => props$m.button.disabled
      },
      // 是否加载中
      loading: {
        type: Boolean,
        default: () => props$m.button.loading
      },
      // 加载中提示文字
      loadingText: {
        type: [String, Number],
        default: () => props$m.button.loadingText
      },
      // 加载状态图标类型
      loadingMode: {
        type: String,
        default: () => props$m.button.loadingMode
      },
      // 加载图标大小
      loadingSize: {
        type: [String, Number],
        default: () => props$m.button.loadingSize
      },
      // 开放能力，具体请看uniapp稳定关于button组件部分说明
      // https://uniapp.dcloud.io/component/button
      openType: {
        type: String,
        default: () => props$m.button.openType
      },
      // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
      // 取值为submit（提交表单），reset（重置表单）
      formType: {
        type: String,
        default: () => props$m.button.formType
      },
      // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
      // 只微信小程序、QQ小程序有效
      appParameter: {
        type: String,
        default: () => props$m.button.appParameter
      },
      // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
      hoverStopPropagation: {
        type: Boolean,
        default: () => props$m.button.hoverStopPropagation
      },
      // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
      lang: {
        type: String,
        default: () => props$m.button.lang
      },
      // 会话来源，open-type="contact"时有效。只微信小程序有效
      sessionFrom: {
        type: String,
        default: () => props$m.button.sessionFrom
      },
      // 会话内消息卡片标题，open-type="contact"时有效
      // 默认当前标题，只微信小程序有效
      sendMessageTitle: {
        type: String,
        default: () => props$m.button.sendMessageTitle
      },
      // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
      // 默认当前分享路径，只微信小程序有效
      sendMessagePath: {
        type: String,
        default: () => props$m.button.sendMessagePath
      },
      // 会话内消息卡片图片，open-type="contact"时有效
      // 默认当前页面截图，只微信小程序有效
      sendMessageImg: {
        type: String,
        default: () => props$m.button.sendMessageImg
      },
      // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
      // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
      showMessageCard: {
        type: Boolean,
        default: () => props$m.button.showMessageCard
      },
      // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
      dataName: {
        type: String,
        default: () => props$m.button.dataName
      },
      // 节流，一定时间内只能触发一次
      throttleTime: {
        type: [String, Number],
        default: () => props$m.button.throttleTime
      },
      // 按住后多久出现点击态，单位毫秒
      hoverStartTime: {
        type: [String, Number],
        default: () => props$m.button.hoverStartTime
      },
      // 手指松开后点击态保留时间，单位毫秒
      hoverStayTime: {
        type: [String, Number],
        default: () => props$m.button.hoverStayTime
      },
      // 按钮文字，之所以通过props传入，是因为slot传入的话
      // nvue中无法控制文字的样式
      text: {
        type: [String, Number],
        default: () => props$m.button.text
      },
      // 按钮图标
      icon: {
        type: String,
        default: () => props$m.button.icon
      },
      // 按钮图标
      iconColor: {
        type: String,
        default: () => props$m.button.icon
      },
      // 按钮颜色，支持传入linear-gradient渐变色
      color: {
        type: String,
        default: () => props$m.button.color
      }
    }
  });
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  const _sfc_main$_ = {
    name: "u-button",
    mixins: [mpMixin, mixin, props$j],
    data() {
      return {};
    },
    computed: {
      // 生成bem风格的类名
      bemClass() {
        if (!this.color) {
          return this.bem(
            "button",
            ["type", "shape", "size"],
            ["disabled", "plain", "hairline"]
          );
        } else {
          return this.bem(
            "button",
            ["shape", "size"],
            ["disabled", "plain", "hairline"]
          );
        }
      },
      loadingColor() {
        if (this.plain) {
          return this.color ? this.color : color[`u-${this.type}`];
        }
        if (this.type === "info") {
          return "#c9c9c9";
        }
        return "rgb(200, 200, 200)";
      },
      iconColorCom() {
        if (this.iconColor)
          return this.iconColor;
        if (this.plain) {
          return this.color ? this.color : this.type;
        } else {
          return this.type === "info" ? "#000000" : "#ffffff";
        }
      },
      baseColor() {
        let style = {};
        if (this.color) {
          style.color = this.plain ? this.color : "white";
          if (!this.plain) {
            style["background-color"] = this.color;
          }
          if (this.color.indexOf("gradient") !== -1) {
            style.borderTopWidth = 0;
            style.borderRightWidth = 0;
            style.borderBottomWidth = 0;
            style.borderLeftWidth = 0;
            if (!this.plain) {
              style.backgroundImage = this.color;
            }
          } else {
            style.borderColor = this.color;
            style.borderWidth = "1px";
            style.borderStyle = "solid";
          }
        }
        return style;
      },
      // nvue版本按钮的字体不会继承父组件的颜色，需要对每一个text组件进行单独的设置
      nvueTextStyle() {
        let style = {};
        if (this.type === "info") {
          style.color = "#323233";
        }
        if (this.color) {
          style.color = this.plain ? this.color : "white";
        }
        style.fontSize = this.textSize + "px";
        return style;
      },
      // 字体大小
      textSize() {
        let fontSize = 14, { size } = this;
        if (size === "large")
          fontSize = 16;
        if (size === "normal")
          fontSize = 14;
        if (size === "small")
          fontSize = 12;
        if (size === "mini")
          fontSize = 10;
        return fontSize;
      }
    },
    emits: [
      "click",
      "getphonenumber",
      "getuserinfo",
      "error",
      "opensetting",
      "launchapp",
      "agreeprivacyauthorization"
    ],
    methods: {
      addStyle,
      clickHandler() {
        if (!this.disabled && !this.loading) {
          throttle(() => {
            this.$emit("click");
          }, this.throttleTime);
        }
      },
      // 下面为对接uniapp官方按钮开放能力事件回调的对接
      getphonenumber(res) {
        this.$emit("getphonenumber", res);
      },
      getuserinfo(res) {
        this.$emit("getuserinfo", res);
      },
      error(res) {
        this.$emit("error", res);
      },
      opensetting(res) {
        this.$emit("opensetting", res);
      },
      launchapp(res) {
        this.$emit("launchapp", res);
      },
      agreeprivacyauthorization(res) {
        this.$emit("agreeprivacyauthorization", res);
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$9);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("button", {
      "hover-start-time": Number(_ctx.hoverStartTime),
      "hover-stay-time": Number(_ctx.hoverStayTime),
      "form-type": _ctx.formType,
      "open-type": _ctx.openType,
      "app-parameter": _ctx.appParameter,
      "hover-stop-propagation": _ctx.hoverStopPropagation,
      "send-message-title": _ctx.sendMessageTitle,
      "send-message-path": _ctx.sendMessagePath,
      lang: _ctx.lang,
      "data-name": _ctx.dataName,
      "session-from": _ctx.sessionFrom,
      "send-message-img": _ctx.sendMessageImg,
      "show-message-card": _ctx.showMessageCard,
      onGetphonenumber: _cache[0] || (_cache[0] = (...args) => $options.getphonenumber && $options.getphonenumber(...args)),
      onGetuserinfo: _cache[1] || (_cache[1] = (...args) => $options.getuserinfo && $options.getuserinfo(...args)),
      onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args)),
      onOpensetting: _cache[3] || (_cache[3] = (...args) => $options.opensetting && $options.opensetting(...args)),
      onLaunchapp: _cache[4] || (_cache[4] = (...args) => $options.launchapp && $options.launchapp(...args)),
      onAgreeprivacyauthorization: _cache[5] || (_cache[5] = (...args) => $options.agreeprivacyauthorization && $options.agreeprivacyauthorization(...args)),
      "hover-class": !_ctx.disabled && !_ctx.loading ? "u-button--active" : "",
      class: vue.normalizeClass(["u-button u-reset-button", $options.bemClass]),
      style: vue.normalizeStyle([$options.baseColor, $options.addStyle(_ctx.customStyle)]),
      onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      _ctx.loading ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        [
          vue.createVNode(_component_u_loading_icon, {
            mode: _ctx.loadingMode,
            size: _ctx.loadingSize * 1.15,
            color: $options.loadingColor
          }, null, 8, ["mode", "size", "color"]),
          vue.createElementVNode(
            "text",
            {
              class: "u-button__loading-text",
              style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
            },
            vue.toDisplayString(_ctx.loadingText || _ctx.text),
            5
            /* TEXT, STYLE */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 1 },
        [
          _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 0,
            name: _ctx.icon,
            color: $options.iconColorCom,
            size: $options.textSize * 1.35,
            customStyle: { marginRight: "2px" }
          }, null, 8, ["name", "color", "size"])) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode(
              "text",
              {
                class: "u-button__text",
                style: vue.normalizeStyle([{ fontSize: $options.textSize + "px" }])
              },
              vue.toDisplayString(_ctx.text),
              5
              /* TEXT, STYLE */
            )
          ], true)
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ], 46, ["hover-start-time", "hover-stay-time", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "send-message-path", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "hover-class"]);
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$v], ["__scopeId", "data-v-461e713c"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-button/u-button.vue"]]);
  const props$i = defineMixin({
    props: {
      // 是否展示组件
      show: {
        type: Boolean,
        default: () => props$m.transition.show
      },
      // 使用的动画模式
      mode: {
        type: String,
        default: () => props$m.transition.mode
      },
      // 动画的执行时间，单位ms
      duration: {
        type: [String, Number],
        default: () => props$m.transition.duration
      },
      // 使用的动画过渡函数
      timingFunction: {
        type: String,
        default: () => props$m.transition.timingFunction
      }
    }
  });
  const getClassNames = (name) => ({
    enter: `u-${name}-enter u-${name}-enter-active`,
    "enter-to": `u-${name}-enter-to u-${name}-enter-active`,
    leave: `u-${name}-leave u-${name}-leave-active`,
    "leave-to": `u-${name}-leave-to u-${name}-leave-active`
  });
  const transitionMixin = {
    methods: {
      // 组件被点击发出事件
      clickHandler() {
        this.$emit("click");
      },
      // vue版本的组件进场处理
      async vueEnter() {
        const classNames = getClassNames(this.mode);
        this.status = "enter";
        this.$emit("beforeEnter");
        this.inited = true;
        this.display = true;
        this.classes = classNames.enter;
        await vue.nextTick();
        {
          await sleep(20);
          this.$emit("enter");
          this.transitionEnded = false;
          this.$emit("afterEnter");
          this.classes = classNames["enter-to"];
        }
      },
      // 动画离场处理
      async vueLeave() {
        if (!this.display)
          return;
        const classNames = getClassNames(this.mode);
        this.status = "leave";
        this.$emit("beforeLeave");
        this.classes = classNames.leave;
        await vue.nextTick();
        {
          this.transitionEnded = false;
          this.$emit("leave");
          setTimeout(this.onTransitionEnd, this.duration);
          this.classes = classNames["leave-to"];
        }
      },
      // 完成过渡后触发
      onTransitionEnd() {
        if (this.transitionEnded)
          return;
        this.transitionEnded = true;
        this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
        if (!this.show && this.display) {
          this.display = false;
          this.inited = false;
        }
      }
    }
  };
  const _sfc_main$Z = {
    name: "u-transition",
    data() {
      return {
        inited: false,
        // 是否显示/隐藏组件
        viewStyle: {},
        // 组件内部的样式
        status: "",
        // 记录组件动画的状态
        transitionEnded: false,
        // 组件是否结束的标记
        display: false,
        // 组件是否展示
        classes: ""
        // 应用的类名
      };
    },
    emits: ["click", "beforeEnter", "enter", "afterEnter", "beforeLeave", "leave", "afterLeave"],
    computed: {
      mergeStyle() {
        const { viewStyle, customStyle } = this;
        return {
          transitionDuration: `${this.duration}ms`,
          // display: `${this.display ? '' : 'none'}`,
          transitionTimingFunction: this.timingFunction,
          // 避免自定义样式影响到动画属性，所以写在viewStyle前面
          ...addStyle(customStyle),
          ...viewStyle
        };
      }
    },
    // 将mixin挂在到组件中，实际上为一个vue格式对象。
    mixins: [mpMixin, mixin, transitionMixin, props$i],
    watch: {
      show: {
        handler(newVal) {
          newVal ? this.vueEnter() : this.vueLeave();
        },
        // 表示同时监听初始化时的props的show的意思
        immediate: true
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.inited ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-transition", $data.classes]),
        ref: "u-transition",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
        style: vue.normalizeStyle([$options.mergeStyle]),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.noop && _ctx.noop(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$u], ["__scopeId", "data-v-0573594d"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-transition/u-transition.vue"]]);
  const props$h = defineMixin({
    props: {
      // 是否显示遮罩
      show: {
        type: Boolean,
        default: () => props$m.overlay.show
      },
      // 层级z-index
      zIndex: {
        type: [String, Number],
        default: () => props$m.overlay.zIndex
      },
      // 遮罩的过渡时间，单位为ms
      duration: {
        type: [String, Number],
        default: () => props$m.overlay.duration
      },
      // 不透明度值，当做rgba的第四个参数
      opacity: {
        type: [String, Number],
        default: () => props$m.overlay.opacity
      }
    }
  });
  const _sfc_main$Y = {
    name: "u-overlay",
    mixins: [mpMixin, mixin, props$h],
    computed: {
      overlayStyle() {
        const style = {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: this.zIndex,
          bottom: 0,
          "background-color": `rgba(0, 0, 0, ${this.opacity})`
        };
        return deepMerge$2(style, addStyle(this.customStyle));
      }
    },
    emits: ["click"],
    methods: {
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_4);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      show: _ctx.show,
      "custom-class": "u-overlay",
      duration: _ctx.duration,
      "custom-style": $options.overlayStyle,
      onClick: $options.clickHandler
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "duration", "custom-style", "onClick"]);
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$t], ["__scopeId", "data-v-35f7c3e5"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-overlay/u-overlay.vue"]]);
  const props$g = defineMixin({
    props: {
      bgColor: {
        type: String,
        default: () => props$m.statusBar.bgColor
      }
    }
  });
  const _sfc_main$X = {
    name: "u-status-bar",
    mixins: [mpMixin, mixin, props$g],
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        style.height = addUnit(sys().statusBarHeight, "px");
        style.backgroundColor = this.bgColor;
        return deepMerge$2(style, addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle([$options.style]),
        class: "u-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_1$8 = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$s], ["__scopeId", "data-v-c0b45a48"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-status-bar/u-status-bar.vue"]]);
  const props$f = defineMixin({
    props: {}
  });
  const _sfc_main$W = {
    name: "u-safe-bottom",
    mixins: [mpMixin, mixin, props$f],
    data() {
      return {
        safeAreaBottomHeight: 0,
        isNvue: false
      };
    },
    computed: {
      style() {
        const style = {};
        return deepMerge$2(style, addStyle(this.customStyle));
      }
    },
    mounted() {
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-safe-bottom", [!$data.isNvue && "u-safe-area-inset-bottom"]]),
        style: vue.normalizeStyle([$options.style])
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$r], ["__scopeId", "data-v-3ec581de"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-safe-bottom/u-safe-bottom.vue"]]);
  const props$e = defineMixin({
    props: {
      // 是否展示弹窗
      show: {
        type: Boolean,
        default: () => props$m.popup.show
      },
      // 是否显示遮罩
      overlay: {
        type: Boolean,
        default: () => props$m.popup.overlay
      },
      // 弹出的方向，可选值为 top bottom right left center
      mode: {
        type: String,
        default: () => props$m.popup.mode
      },
      // 动画时长，单位ms
      duration: {
        type: [String, Number],
        default: () => props$m.popup.duration
      },
      // 是否显示关闭图标
      closeable: {
        type: Boolean,
        default: () => props$m.popup.closeable
      },
      // 自定义遮罩的样式
      overlayStyle: {
        type: [Object, String],
        default: () => props$m.popup.overlayStyle
      },
      // 点击遮罩是否关闭弹窗
      closeOnClickOverlay: {
        type: Boolean,
        default: () => props$m.popup.closeOnClickOverlay
      },
      // 层级
      zIndex: {
        type: [String, Number],
        default: () => props$m.popup.zIndex
      },
      // 是否为iPhoneX留出底部安全距离
      safeAreaInsetBottom: {
        type: Boolean,
        default: () => props$m.popup.safeAreaInsetBottom
      },
      // 是否留出顶部安全距离（状态栏高度）
      safeAreaInsetTop: {
        type: Boolean,
        default: () => props$m.popup.safeAreaInsetTop
      },
      // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
      closeIconPos: {
        type: String,
        default: () => props$m.popup.closeIconPos
      },
      // 是否显示圆角
      round: {
        type: [Boolean, String, Number],
        default: () => props$m.popup.round
      },
      // mode=center，也即中部弹出时，是否使用缩放模式
      zoom: {
        type: Boolean,
        default: () => props$m.popup.zoom
      },
      // 弹窗背景色，设置为transparent可去除白色背景
      bgColor: {
        type: String,
        default: () => props$m.popup.bgColor
      },
      // 遮罩的透明度，0-1之间
      overlayOpacity: {
        type: [Number, String],
        default: () => props$m.popup.overlayOpacity
      }
    }
  });
  const _sfc_main$V = {
    name: "u-popup",
    mixins: [mpMixin, mixin, props$e],
    data() {
      return {
        overlayDuration: this.duration + 50
      };
    },
    watch: {
      show(newValue, oldValue) {
      }
    },
    computed: {
      transitionStyle() {
        const style = {
          zIndex: this.zIndex,
          position: "fixed",
          display: "flex"
        };
        style[this.mode] = 0;
        if (this.mode === "left") {
          return deepMerge$2(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "right") {
          return deepMerge$2(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "top") {
          return deepMerge$2(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "bottom") {
          return deepMerge$2(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "center") {
          return deepMerge$2(style, {
            alignItems: "center",
            "justify-content": "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          });
        }
      },
      contentStyle() {
        const style = {};
        sys();
        if (this.mode !== "center") {
          style.flex = 1;
        }
        if (this.bgColor) {
          style.backgroundColor = this.bgColor;
        }
        if (this.round) {
          const value2 = addUnit(this.round);
          if (this.mode === "top") {
            style.borderBottomLeftRadius = value2;
            style.borderBottomRightRadius = value2;
          } else if (this.mode === "bottom") {
            style.borderTopLeftRadius = value2;
            style.borderTopRightRadius = value2;
          } else if (this.mode === "center") {
            style.borderRadius = value2;
          }
        }
        return deepMerge$2(style, addStyle(this.customStyle));
      },
      position() {
        if (this.mode === "center") {
          return this.zoom ? "fade-zoom" : "fade";
        }
        if (this.mode === "left") {
          return "slide-left";
        }
        if (this.mode === "right") {
          return "slide-right";
        }
        if (this.mode === "bottom") {
          return "slide-up";
        }
        if (this.mode === "top") {
          return "slide-down";
        }
      }
    },
    emits: ["open", "close", "click", "update:show"],
    methods: {
      // 点击遮罩
      overlayClick() {
        if (this.closeOnClickOverlay) {
          this.$emit("update:show", false);
          this.$emit("close");
        }
      },
      close(e) {
        this.$emit("update:show", false);
        this.$emit("close");
      },
      afterEnter() {
        this.$emit("open");
      },
      clickHandler() {
        if (this.mode === "center") {
          this.overlayClick();
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_overlay = resolveEasycom(vue.resolveDynamicComponent("u-overlay"), __easycom_0$6);
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_1$8);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    const _component_u_safe_bottom = resolveEasycom(vue.resolveDynamicComponent("u-safe-bottom"), __easycom_3);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-popup", [_ctx.customClass]])
      },
      [
        _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_u_overlay, {
          key: 0,
          show: _ctx.show,
          onClick: $options.overlayClick,
          zIndex: _ctx.zIndex,
          duration: $data.overlayDuration,
          customStyle: _ctx.overlayStyle,
          opacity: _ctx.overlayOpacity
        }, null, 8, ["show", "onClick", "zIndex", "duration", "customStyle", "opacity"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_u_transition, {
          show: _ctx.show,
          customStyle: $options.transitionStyle,
          mode: $options.position,
          duration: _ctx.duration,
          onAfterEnter: $options.afterEnter,
          onClick: $options.clickHandler
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode(
              "view",
              {
                class: "u-popup__content",
                style: vue.normalizeStyle([$options.contentStyle]),
                onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop"]))
              },
              [
                _ctx.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
                _ctx.closeable ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 1,
                    onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.close && $options.close(...args), ["stop"])),
                    class: vue.normalizeClass(["u-popup__content__close", ["u-popup__content__close--" + _ctx.closeIconPos]]),
                    "hover-class": "u-popup__content__close--hover",
                    "hover-stay-time": "150"
                  },
                  [
                    vue.createVNode(_component_u_icon, {
                      name: "close",
                      color: "#909399",
                      size: "18",
                      bold: ""
                    })
                  ],
                  2
                  /* CLASS */
                )) : vue.createCommentVNode("v-if", true),
                _ctx.safeAreaInsetBottom ? (vue.openBlock(), vue.createBlock(_component_u_safe_bottom, { key: 2 })) : vue.createCommentVNode("v-if", true)
              ],
              4
              /* STYLE */
            )
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["show", "customStyle", "mode", "duration", "onAfterEnter", "onClick"])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$q], ["__scopeId", "data-v-74921bef"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-popup/u-popup.vue"]]);
  const _sfc_main$U = {
    __name: "navigation",
    emits: ["showsu", "ifshowsetwe"],
    setup(__props, { emit: __emit }) {
      const dataset = vue.ref([
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
      const headliserrouter = (i) => {
        if (i == 4) {
          emit("showsu", true);
        } else if (i == 5) {
          emit("ifshowsetwe", true);
        } else if (i == 2) {
          uni.redirectTo({
            url: "/pages/index/index"
          });
        } else if (i == 1) {
          uni.redirectTo({
            url: "/pages/Home/Home"
          });
        } else if (i == 7) {
          uni.redirectTo({
            url: "/pages/Joinus/Joinus"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "navigation",
          style: { "margin-top": "1rem" }
        }, [
          vue.createElementVNode("view", {
            class: "ul",
            style: { "margin-top": "1rem" }
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(dataset.value, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "li",
                  onClick: ($event) => headliserrouter(item.id),
                  key: index2
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "navigationtitle" },
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  ),
                  item.id == 5 || item.id == 4 ? (vue.openBlock(), vue.createBlock(_component_up_icon, {
                    key: 0,
                    name: "arrow-right",
                    color: "#010c1c",
                    size: "15"
                  })) : vue.createCommentVNode("v-if", true)
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "navigation-t" }, [
            vue.createElementVNode("text", { class: "" }, "下载和关注")
          ]),
          vue.createElementVNode("view", { class: "iconselection" }, [
            vue.createElementVNode("view", { class: "iconimg" }, [
              vue.createElementVNode("image", {
                class: "img",
                src: "https://img.meituan.net/portalweb/5e9a62e96f7a1791143d8f09fcca06dd4519.png@100w",
                alt: ""
              }),
              vue.createElementVNode("image", {
                class: "img",
                src: "https://img.meituan.net/portalweb/5e9a62e96f7a1791143d8f09fcca06dd4519.png@100w",
                alt: ""
              }),
              vue.createElementVNode("image", {
                class: "img",
                src: "https://img.meituan.net/portalweb/5e9a62e96f7a1791143d8f09fcca06dd4519.png@100w",
                alt: ""
              })
            ]),
            vue.createElementVNode("view", { class: "iconimg" }, [
              vue.createElementVNode("image", {
                class: "img",
                src: "https://img.meituan.net/portalweb/5e9a62e96f7a1791143d8f09fcca06dd4519.png@100w",
                alt: ""
              }),
              vue.createElementVNode("image", {
                class: "img",
                src: "https://img.meituan.net/portalweb/5e9a62e96f7a1791143d8f09fcca06dd4519.png@100w",
                alt: ""
              }),
              vue.createElementVNode("image", {
                class: "img",
                src: "https://img.meituan.net/portalweb/5e9a62e96f7a1791143d8f09fcca06dd4519.png@100w",
                alt: ""
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "navigation-chia" }, [
            vue.createElementVNode("text", null, "简体中文 / "),
            vue.createElementVNode("text", null, "繁体中文")
          ]),
          vue.createElementVNode("view", { class: "TranslatedintoEnglish" }, [
            vue.createElementVNode("text", null, "English Version"),
            vue.createVNode(_component_up_icon, {
              name: "arrow-rightward",
              color: "#00101e",
              size: "18"
            })
          ])
        ]);
      };
    }
  };
  const navigation = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-7b66a638"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Homedata/navigation.vue"]]);
  const _sfc_main$T = {
    __name: "Navigatethecomplex",
    emits: ["headset"],
    setup(__props, { emit: __emit }) {
      const data = vue.ref([
        "个体",
        "便利用户生活",
        "骑手关怀与发展",
        "涌现新职业",
        "产业",
        "助力市场繁荣",
        "支持小商户发展",
        "中华老字号服务报",
        "社会",
        "推动绿色消费",
        "支持乡村振兴",
        "参与应急救灾"
      ]);
      const emit = __emit;
      const headset = () => {
        emit("headset", false);
      };
      return (_ctx, _cache) => {
        const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_0$7);
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "Navigatethecomplex",
            style: { "margin-top": "1rem" }
          },
          [
            vue.createElementVNode("view", { class: "Navigatethecomplextitle" }, [
              vue.createVNode(_component_up_icon, {
                name: "arrow-left",
                color: "#000e1d",
                size: "18",
                onClick: headset
              }),
              vue.createElementVNode("text", { style: { "font-size": "1rem", "margin-left": "0.5rem" } }, "企业社会责任")
            ]),
            vue.createElementVNode("view", { class: "Navigatethecomplexlist" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(data.value, (item, index2) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      class: "li",
                      key: index2
                    },
                    vue.toDisplayString(item),
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", { class: "Navigatethecomplextitletop" }, [
              vue.createElementVNode("text", { style: { "font-size": "1rem", "margin-left": "0.5rem" } }, "下载中心")
            ])
          ],
          512
          /* NEED_PATCH */
        )), [
          [vue.vShow, _ctx.NANset]
        ]);
      };
    }
  };
  const Navigatethecomplex = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-dbeea9ce"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Homedata/Navigatethecomplex.vue"]]);
  const _sfc_main$S = {
    __name: "nationbtn",
    emits: ["headiconset"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      const headiconset = () => {
        emit("headiconset", false);
      };
      return (_ctx, _cache) => {
        const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock("view", { class: "" }, [
          vue.createElementVNode("view", {
            class: "Navigatethecomplex",
            style: { "margin-top": "1rem" }
          }, [
            vue.createElementVNode("view", { class: "Navigatethecomplextitle" }, [
              vue.createVNode(_component_up_icon, {
                name: "arrow-left",
                color: "#000e1d",
                size: "18",
                onClick: headiconset
              }),
              vue.createElementVNode("text", { style: { "font-size": "1rem", "margin-left": "0.5rem" } }, "美团公益")
            ]),
            vue.createElementVNode("view", { class: "Navigatethecomplextitletop" }, [
              vue.createElementVNode("view", {
                class: "txt",
                style: { "font-size": "1rem", "margin": "0.5rem 0" }
              }, "美团乡村儿童操场"),
              vue.createTextVNode(),
              vue.createElementVNode("br"),
              vue.createElementVNode("view", {
                class: "txt",
                style: { "font-size": "1rem", "margin": "0.5rem 0" }
              }, "美团公益基金会")
            ])
          ])
        ]);
      };
    }
  };
  const nationbtn = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-5a5dcbd7"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Homedata/nationbtn.vue"]]);
  const _sfc_main$R = {
    __name: "uppopup",
    setup(__props, { expose: __expose }) {
      const show = vue.ref(false);
      const Heightset = vue.ref();
      const systemInfo = uni.getSystemInfoSync();
      Heightset.value = systemInfo.windowHeight;
      function open() {
        show.value = true;
      }
      function close() {
        show.value = false;
      }
      const showset = vue.ref(false);
      const isset = vue.ref(false);
      const ifset = vue.ref(false);
      const handleData = (data) => {
        showset.value = data;
        isset.value = true;
      };
      const headiconset = (data) => {
        ifset.value = data;
        isset.value = false;
      };
      const ifshowsetwe = (data) => {
        ifset.value = data;
        isset.value = true;
      };
      const headset = (data) => {
        showset.value = data;
        isset.value = false;
      };
      __expose({
        open
      });
      return (_ctx, _cache) => {
        const _component_up_popup = resolveEasycom(vue.resolveDynamicComponent("up-popup"), __easycom_0$5);
        return vue.openBlock(), vue.createElementBlock("view", { class: "uppuop" }, [
          vue.createVNode(_component_up_popup, {
            show: show.value,
            mode: "left",
            onClose: close,
            onOpen: open
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "uppuop-left" }, [
                vue.createElementVNode("view", { class: "uppuop-logo" }, [
                  vue.createElementVNode("view", {
                    class: "",
                    style: { "margin": "2rem", "font-weight": "800", "font-size": "2rem" }
                  }, "观涛"),
                  vue.createElementVNode("scroll-view", {
                    "scroll-y": "true",
                    style: { "height": "600px" }
                  }, [
                    vue.withDirectives(vue.createVNode(
                      navigation,
                      {
                        onShowsu: handleData,
                        onIfshowsetwe: ifshowsetwe
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, !isset.value]
                    ]),
                    vue.withDirectives(vue.createVNode(
                      Navigatethecomplex,
                      { onHeadset: headset },
                      null,
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, showset.value]
                    ]),
                    vue.withDirectives(vue.createVNode(
                      nationbtn,
                      { onHeadiconset: headiconset },
                      null,
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, ifset.value]
                    ]),
                    vue.createTextVNode(" --> ")
                  ])
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["show"])
        ]);
      };
    }
  };
  const uppopup = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-d62d1841"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/uppopup.vue"]]);
  const _sfc_main$Q = {
    __name: "Navigationbar",
    setup(__props) {
      const showtitle = vue.ref(true);
      const showDropdown = vue.ref(false);
      const showicon = vue.ref(false);
      const headicon = () => {
        showicon.value = !showicon.value;
      };
      vue.onMounted(() => {
        window.addEventListener("resize", handleResize);
      });
      const uppopupset = vue.ref();
      function hedaupicon() {
        uppopupset.value.open();
      }
      const viewportWidth = vue.ref(0);
      const handleResize = () => {
        const FontSize = "16";
        viewportWidth.value = window.innerWidth;
        formatAppLog("log", "at components/Navigationbar.vue:286", viewportWidth.value);
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
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_0$7);
        const _component_up_button = resolveEasycom(vue.resolveDynamicComponent("up-button"), __easycom_3$1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "Naviget" }, [
              vue.withDirectives(vue.createElementVNode(
                "view",
                { class: "Navigetop" },
                [
                  vue.createElementVNode("view", { class: "Naviget-le" }, [
                    vue.createElementVNode("text", {
                      class: "fs",
                      style: { "margin-left": "3rem" }
                    }, "观涛")
                  ]),
                  vue.createElementVNode("view", { class: "Naviget-cent" }, [
                    vue.createElementVNode("view", {
                      class: "ul",
                      style: { "display": "flex", "justify-content": "space-between", "height": "100%" }
                    }, [
                      vue.createElementVNode("text", { class: "li" }, [
                        vue.createElementVNode("navigator", {
                          url: "/pages/Home/Home",
                          "hover-class": "navigator-hover"
                        }, " 首页 "),
                        vue.createElementVNode("text", { class: "borbth" })
                      ]),
                      vue.createElementVNode("text", { class: "li" }, [
                        vue.createElementVNode("navigator", {
                          url: "/pages/index/index",
                          "hover-class": "navigator-hover"
                        }, " 和美团合作 "),
                        vue.createElementVNode("text", { class: "borbth" })
                      ]),
                      vue.createElementVNode("text", { class: "li" }, [
                        vue.createTextVNode("我们的科技 "),
                        vue.createElementVNode("text", { class: "borbth" })
                      ]),
                      vue.createElementVNode("text", { class: "emitset li" }, [
                        vue.createTextVNode("企业的社会责任 "),
                        vue.createElementVNode("text", { class: "borbth" }),
                        vue.createElementVNode("view", { class: "lijiantou" }, [
                          vue.createVNode(_component_up_icon, {
                            name: showDropdown.value ? "arrow-up-fill" : "arrow-down-fill",
                            color: "#000000",
                            size: "8"
                          }, null, 8, ["name"])
                        ]),
                        vue.createElementVNode("view", { class: "bgb" }, [
                          vue.createElementVNode("view", {
                            class: "bgbchiled",
                            style: { "display": "flex", "justify-content": "space-around" }
                          }, [
                            vue.createElementVNode("view", { style: { "display": "flex", "flex-direction": "column" } }, [
                              vue.createElementVNode("text", { style: { "display": "inline-block", "padding": "20px 0" } }, "个体"),
                              vue.createElementVNode("text", { style: { "display": "inline-block", "margin": "20px 0" } }, "便利用户生活"),
                              vue.createElementVNode("text", { style: { "display": "inline-block", "margin": "20px 0" } }, "骑手关怀与发展"),
                              vue.createElementVNode("text", { style: { "display": "inline-block", "margin": "20px 0" } }, "涌现新职业")
                            ]),
                            vue.createElementVNode("view", { style: { "display": "flex", "flex-direction": "column" } }, [
                              vue.createElementVNode("text", { style: { "display": "inline-block", "padding": "20px 0" } }, "产业"),
                              vue.createElementVNode("text", { style: { "display": "inline-block", "margin": "20px 0" } }, "助力市场繁荣"),
                              vue.createElementVNode("text", { style: { "display": "inline-block", "margin": "20px 0" } }, "支持小商户发展"),
                              vue.createElementVNode("text", { style: { "display": "inline-block", "margin": "20px 0" } }, "中华劳资号服务包")
                            ]),
                            vue.createElementVNode("view", { style: { "display": "flex", "flex-direction": "column" } }, [
                              vue.createElementVNode("text", { style: { "display": "inline-block", "padding": "20px 0" } }, "社会"),
                              vue.createElementVNode("text", { style: { "display": "inline-block", "margin": "20px 0" } }, "推动绿色消费"),
                              vue.createElementVNode("text", { style: { "display": "inline-block", "margin": "20px 0" } }, "支持乡村振兴"),
                              vue.createElementVNode("text", { style: { "display": "inline-block", "margin": "20px 0" } }, "参与应急救灾")
                            ])
                          ]),
                          vue.createElementVNode("view", { class: "bgbtext" }, " 下载中心 ")
                        ])
                      ]),
                      vue.createElementVNode("text", { class: "emitset li" }, [
                        vue.createTextVNode("美团公益 "),
                        vue.createElementVNode("text", { class: "borbth" }),
                        vue.createElementVNode("view", { class: "lijiantou" }, [
                          vue.createVNode(_component_up_icon, {
                            name: showDropdown.value ? "arrow-up-fill" : "arrow-down-fill",
                            color: "#000000",
                            size: "8"
                          }, null, 8, ["name"])
                        ]),
                        vue.createElementVNode("view", { class: "headlist" }, [
                          vue.createElementVNode("view", null, "美团乡村儿童操场"),
                          vue.createElementVNode("view", null, "美团公益基金会")
                        ])
                      ]),
                      vue.createElementVNode("text", { class: "li" }, [
                        vue.createTextVNode("投资者关系 "),
                        vue.createElementVNode("text", { class: "borbth" })
                      ]),
                      vue.createElementVNode("text", { class: "li" }, [
                        vue.createElementVNode("navigator", {
                          url: "/pages/Joinus/Joinus",
                          "hover-class": "navigator-hover"
                        }, " 加入我们 "),
                        vue.createElementVNode("text", { class: "borbth" })
                      ]),
                      vue.createElementVNode("text", { class: "li" }, [
                        vue.createElementVNode("navigator", {
                          url: "/pages/Stay/Stay",
                          "hover-class": "navigator-hover"
                        }, [
                          vue.createVNode(_component_up_button, {
                            type: "warning",
                            text: "商家版"
                          })
                        ])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "Naviget-rigth" }, [
                    vue.createElementVNode("view", {
                      class: "ul",
                      style: { "display": "flex", "margin-left": "5rem", "justify-content": "space-around" }
                    }, [
                      vue.createElementVNode("text", { class: "li" }, [
                        vue.createTextVNode("下载和关注 "),
                        vue.createElementVNode("view", { class: "lijiantou" }, [
                          vue.createVNode(_component_up_icon, {
                            name: showDropdown.value ? "arrow-up-fill" : "arrow-down-fill",
                            color: "#000000",
                            size: "8"
                          }, null, 8, ["name"])
                        ]),
                        vue.createElementVNode("view", { class: "Navlist" }, [
                          vue.createElementVNode("view", { class: "navbox" }, [
                            vue.createElementVNode("image", {
                              src: "https://img.meituan.net/portalweb/4aa94bdd72dc7620ef862436beb98c7f11428.png@54w",
                              alt: "",
                              class: "Navlistimg"
                            }),
                            vue.createElementVNode("text", null, "美团APP"),
                            vue.createElementVNode("view", { class: "navimage" }, [
                              vue.createElementVNode("view", { class: "navset" }, [
                                vue.createElementVNode("image", {
                                  style: { "width": "90%", "height": "90%" },
                                  src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/app/11.png",
                                  alt: ""
                                })
                              ]),
                              vue.createElementVNode("view", { class: "navh" }, [
                                vue.createVNode(_component_up_icon, {
                                  name: "play-right-fill",
                                  color: "#ffffff",
                                  size: "18"
                                })
                              ])
                            ])
                          ]),
                          vue.createElementVNode("view", { class: "navbox" }, [
                            vue.createElementVNode("image", {
                              src: "https://img.meituan.net/portalweb/b6fa37911d205a0101c511775ad218f113123.png@54w",
                              alt: "",
                              class: "Navlistimg"
                            }),
                            vue.createElementVNode("text", null, "美团APP"),
                            vue.createElementVNode("view", { class: "navimage" }, [
                              vue.createElementVNode("view", { class: "navset" }, [
                                vue.createElementVNode("image", {
                                  style: { "width": "90%", "height": "90%" },
                                  src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/app/11.png",
                                  alt: ""
                                })
                              ]),
                              vue.createElementVNode("view", { class: "navh" }, [
                                vue.createVNode(_component_up_icon, {
                                  name: "play-right-fill",
                                  color: "#ffffff",
                                  size: "18"
                                })
                              ])
                            ])
                          ]),
                          vue.createElementVNode("view", { class: "navbox" }, [
                            vue.createElementVNode("image", {
                              src: "https://img.meituan.net/portalweb/a6a88a988f5e7eeb39cc8fbd68d291258771.png@54w",
                              alt: "",
                              class: "Navlistimg"
                            }),
                            vue.createElementVNode("text", null, "美团APP"),
                            vue.createElementVNode("view", { class: "navimage" }, [
                              vue.createElementVNode("view", { class: "navset" }, [
                                vue.createElementVNode("image", {
                                  style: { "width": "90%", "height": "90%" },
                                  src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/app/11.png",
                                  alt: ""
                                })
                              ]),
                              vue.createElementVNode("view", { class: "navh" }, [
                                vue.createVNode(_component_up_icon, {
                                  name: "play-right-fill",
                                  color: "#ffffff",
                                  size: "18"
                                })
                              ])
                            ])
                          ]),
                          vue.createElementVNode("view", { class: "navbox" }, [
                            vue.createElementVNode("image", {
                              src: "https://img.meituan.net/portalweb/bffc4d2e608570d3ebcbc0ed0f79abc43284.png@54w",
                              alt: "",
                              class: "Navlistimg"
                            }),
                            vue.createElementVNode("text", null, "美团APP"),
                            vue.createElementVNode("view", { class: "navimage" }, [
                              vue.createElementVNode("view", { class: "navset" }, [
                                vue.createElementVNode("image", {
                                  style: { "width": "90%", "height": "90%" },
                                  src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/app/11.png",
                                  alt: ""
                                })
                              ]),
                              vue.createElementVNode("view", { class: "navh" }, [
                                vue.createVNode(_component_up_icon, {
                                  name: "play-right-fill",
                                  color: "#ffffff",
                                  size: "18"
                                })
                              ])
                            ])
                          ]),
                          vue.createElementVNode("view", { class: "navbox" }, [
                            vue.createElementVNode("image", {
                              src: "https://img.meituan.net/portalweb/64703ff894acc09cb2532cfcda37563a15073.png@54w",
                              alt: "",
                              class: "Navlistimg"
                            }),
                            vue.createElementVNode("text", null, "美团APP"),
                            vue.createElementVNode("view", { class: "navimage" }, [
                              vue.createElementVNode("view", { class: "navset" }, [
                                vue.createElementVNode("image", {
                                  style: { "width": "90%", "height": "90%" },
                                  src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ha_lm_lswvlw/ljhwZthlaukjlkulzlp/portal/app/11.png",
                                  alt: ""
                                })
                              ]),
                              vue.createElementVNode("view", { class: "navh" }, [
                                vue.createVNode(_component_up_icon, {
                                  name: "play-right-fill",
                                  color: "#ffffff",
                                  size: "18"
                                })
                              ])
                            ])
                          ])
                        ])
                      ]),
                      vue.createElementVNode("text", { class: "li" }, [
                        vue.createTextVNode("简体中文 "),
                        vue.createElementVNode("view", { class: "lijiantou" }, [
                          vue.createVNode(_component_up_icon, {
                            name: showDropdown.value ? "arrow-up-fill" : "arrow-down-fill",
                            color: "#000000",
                            size: "8"
                          }, null, 8, ["name"])
                        ]),
                        vue.createElementVNode("view", { class: "chiba" }, [
                          vue.createElementVNode("view", {
                            class: "chibabox chisno",
                            onClick: headicon
                          }, [
                            vue.createElementVNode("text", null, "简体中文"),
                            vue.withDirectives(vue.createVNode(
                              _component_up_icon,
                              {
                                name: "checkbox-mark",
                                color: "#000000",
                                size: "15"
                              },
                              null,
                              512
                              /* NEED_PATCH */
                            ), [
                              [vue.vShow, !showicon.value]
                            ])
                          ]),
                          vue.createElementVNode("view", {
                            class: "chisno chibabox",
                            style: { "height": "40px", "line-height": "40px" },
                            onClick: headicon
                          }, [
                            vue.createElementVNode("text", null, "繁体中文"),
                            vue.withDirectives(vue.createVNode(
                              _component_up_icon,
                              {
                                name: "checkbox-mark",
                                color: "#000000",
                                size: "15"
                              },
                              null,
                              512
                              /* NEED_PATCH */
                            ), [
                              [vue.vShow, showicon.value]
                            ])
                          ]),
                          vue.createElementVNode("view", { class: "chibabox chisno" }, [
                            vue.createElementVNode("text", { style: { "margin-top": "10px" } }, "English Version"),
                            vue.createVNode(_component_up_icon, {
                              style: { "margin-top": "10px" },
                              name: "arrow-rightward",
                              color: "#000000",
                              size: "15"
                            })
                          ])
                        ])
                      ])
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [vue.vShow, !showtitle.value]
              ]),
              vue.withDirectives(vue.createElementVNode(
                "view",
                { class: "Two" },
                [
                  vue.createElementVNode("view", null, [
                    vue.createVNode(_component_up_icon, {
                      name: "list",
                      size: "28",
                      onClick: hedaupicon
                    })
                  ]),
                  vue.createElementVNode("text", { class: "fs" }, " 观涛 "),
                  vue.createElementVNode("text")
                ],
                512
                /* NEED_PATCH */
              ), [
                [vue.vShow, showtitle.value]
              ])
            ]),
            vue.createVNode(
              uppopup,
              {
                ref_key: "uppopupset",
                ref: uppopupset
              },
              null,
              512
              /* NEED_PATCH */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const Navigationbar = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-52165be8"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Navigationbar.vue"]]);
  const _imports_0$3 = "/static/erweim.png";
  const _sfc_main$P = {};
  function _sfc_render$p(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
      vue.createElementVNode("view", { class: "home-title" }, [
        vue.createElementVNode("view", { class: "hometitle-logo" }, " 观涛是一家科技零售公司 "),
        vue.createElementVNode("view", { class: "hometitle-text" }, [
          vue.createTextVNode(" 美团以 “零售 + 科技” 的斩落 "),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 行“ 帮大家吃的更好，生活更好” 的公司使命。 ")
        ]),
        vue.createElementVNode("view", { class: "hometitle-txt" }, [
          vue.createTextVNode(" 服务零售和商品零售在需求侧和供给侧的数字化升级，和广大合作伙伴一起努力为消费者提供品质服务。2018年9月20日，美团在港交所挂牌上市。"),
          vue.createElementVNode("br"),
          vue.createTextVNode(" 美团始终以客户为中心，不断加大在新技术上的研发投入。美团会和大家一起努力，更好承担社会责任，更多创造社会价值。 ")
        ]),
        vue.createElementVNode("view", { class: "home-xia" }, [
          vue.createElementVNode("view", {
            class: "homeQRcode",
            style: { "display": "flex" }
          }, [
            (vue.openBlock(), vue.createElementBlock("svg", {
              t: "1726210669884",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "4338",
              width: "50",
              height: "50"
            }, [
              vue.createElementVNode("path", {
                d: "M597.333333 597.333333h85.333334v-85.333333h85.333333v128h-85.333333v42.666667h-85.333334v-42.666667h-85.333333v-128h85.333333v85.333333z m-384-85.333333h256v256H213.333333v-256z m85.333334 85.333333v85.333334h85.333333v-85.333334H298.666667zM213.333333 213.333333h256v256H213.333333V213.333333z m85.333334 85.333334v85.333333h85.333333V298.666667H298.666667z m213.333333-85.333334h256v256h-256V213.333333z m85.333333 85.333334v85.333333h85.333334V298.666667h-85.333334z m85.333334 384h85.333333v85.333333h-85.333333v-85.333333z m-170.666667 0h85.333333v85.333333h-85.333333v-85.333333z",
                fill: "#444444",
                "p-id": "4339"
              })
            ])),
            vue.createElementVNode("text", { style: { "line-height": "2.7rem" } }, "下载观涛App"),
            vue.createElementVNode("view", { class: "QRcode" }, [
              vue.createElementVNode("image", {
                src: _imports_0$3,
                mode: "",
                style: { "width": "100%", "height": "100%" }
              })
            ])
          ])
        ])
      ])
    ]);
  }
  const hometitle = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$p], ["__scopeId", "data-v-439d8d28"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/hone/honetext/title.vue"]]);
  const _sfc_main$O = {
    __name: "ttileto",
    setup(__props) {
      const showtext = vue.ref(false);
      const headsetshow = () => {
        showtext.value = !showtext.value;
      };
      return (_ctx, _cache) => {
        const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
          vue.createElementVNode("view", { class: "home-title" }, [
            vue.createElementVNode("view", { class: "hometitle-logo" }, " 观涛是一家科技零售公司 "),
            vue.createElementVNode("view", { class: "hometitle-text" }, [
              vue.createTextVNode(" 美团以“零售 + 科技”的战略 "),
              vue.createElementVNode("br"),
              vue.createTextVNode(" 践行“帮大家吃得更好，生活更好”的公司使命 ")
            ]),
            !showtext.value ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "Showupandmore",
              onClick: headsetshow
            }, [
              vue.createElementVNode("text", null, "了解更多"),
              vue.createVNode(_component_up_icon, {
                name: "arrow-down",
                color: "#111925"
              })
            ])) : vue.createCommentVNode("v-if", true),
            showtext.value ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "titleto-txt"
            }, [
              vue.createElementVNode("view", { class: "titlename" }, " 自2010年3月成立以来 "),
              vue.createElementVNode("view", { class: "titlename" }, " 美团持续推动服务零售和商品零售在需求侧和供给侧的数字 "),
              vue.createElementVNode("view", { class: "titlename" }, " 化升级，和广大合作伙伴一起努力为消费者提供品质服务。 "),
              vue.createElementVNode("view", { class: "titlename" }, " 2018年9月20日，美团在港交所挂牌上市。 "),
              vue.createElementVNode("view", {
                class: "titlename",
                style: { "margin-top": "1rem" }
              }, " 美团始终以客户为中心， "),
              vue.createElementVNode("view", { class: "titlename" }, " 不断加大在新技术上的研发投入。 "),
              vue.createElementVNode("view", { class: "titlename" }, " 美团会和大家一起努力，更好承担社会责任， "),
              vue.createElementVNode("view", { class: "titlename" }, " 更多创造社会价值。 ")
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ]);
      };
    }
  };
  const hometitleto = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-372fe864"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/hone/honetext/ttileto.vue"]]);
  const _sfc_main$N = {
    __name: "topic",
    setup(__props) {
      const showtitle = vue.ref(false);
      vue.onMounted(() => {
        window.addEventListener("resize", handleResize);
      });
      vue.ref();
      const viewportWidth = vue.ref(0);
      const handleResize = () => {
        viewportWidth.value = window.innerWidth;
        formatAppLog("log", "at components/hone/topic.vue:47", viewportWidth.value);
        if (viewportWidth.value > 1092) {
          showtitle.value = false;
        } else {
          showtitle.value = true;
        }
      };
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "topic" }, [
          vue.withDirectives(vue.createVNode(
            hometitle,
            null,
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, showtitle.value]
          ]),
          vue.withDirectives(vue.createVNode(
            hometitleto,
            null,
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, !showtitle.value]
          ])
        ]);
      };
    }
  };
  const topic = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-019271d3"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/hone/topic.vue"]]);
  const _sfc_main$M = {};
  function _sfc_render$o(_ctx, _cache) {
    const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("view", { class: "Seethemall" }, [
      vue.createElementVNode("view", { class: "Seethemall-box" }, [
        vue.createElementVNode("text", { class: "fs" }, "查看全部"),
        vue.createVNode(_component_up_icon, {
          name: "arrow-right",
          color: "#00101e"
        })
      ])
    ]);
  }
  const Seethemall = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$o], ["__scopeId", "data-v-0cacabb6"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/hone/Seethemall.vue"]]);
  const _sfc_main$L = {
    __name: "Bigboxofcontents",
    setup(__props) {
      vue.ref(true);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "Bigboxofcontents" }, [
          vue.createElementVNode("view", { class: "Bigboxofcontents-da" }, [
            vue.createElementVNode("view", { class: "Bigboxofcontents-image" }, [
              vue.createElementVNode("image", {
                src: "https://img.meituan.net/smartvenus/46704c7da8685160b75b5dfd3721c0f2493524.jpg@620w_60Q%7Cpr=1",
                alt: "",
                class: "Bigboxofcontents-img"
              })
            ]),
            vue.createElementVNode("view", { class: "Bigboxofcontents-box" }, [
              vue.createElementVNode("view", { class: "Bigboxofcontents-title" }, " 固生堂与美团医疗达成战略合作 助力中医机构数字化升级 "),
              vue.createElementVNode("view", { class: "Bigboxofcontents-text" }, " 9月11日，固生堂与美团医疗达成战略合作，为用户提供便捷。优质的中医服务 "),
              vue.createElementVNode("view", { class: "Bigboxofcontents-name" }, " 2024-09-12 ")
            ])
          ]),
          vue.createElementVNode("view", { class: "upover" })
        ]);
      };
    }
  };
  const Bigboxofcontents = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-86282967"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/hone/boxofcontents/Bigboxofcontents.vue"]]);
  const _sfc_main$K = {
    __name: "index",
    setup(__props) {
      const mytop = vue.ref(2);
      const left = vue.ref(1);
      vue.onMounted(() => {
        window.addEventListener("resize", handleResize);
      });
      const flexshow = vue.ref(true);
      const viewportWidth = vue.ref(0);
      const handleResize = () => {
        viewportWidth.value = window.innerWidth;
        if (viewportWidth.value < 956) {
          flexshow.value = true;
          left.value = 3;
        } else if (viewportWidth.value == 1738) {
          left.value = 6;
        } else if (viewportWidth.value == 1530) {
          left.value = 3;
        } else {
          flexshow.value = false;
        }
      };
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "index",
            style: vue.normalizeStyle({ padding: `${mytop.value}rem ${left.value}rem` })
          },
          [
            vue.createElementVNode("view", { class: "index-all" }, [
              vue.createElementVNode("text", { style: { "font-size": "2rem" } }, "最新动态"),
              vue.createVNode(Seethemall)
            ]),
            vue.createElementVNode(
              "view",
              {
                class: "indexcentent",
                style: vue.normalizeStyle({ flexDirection: flexshow.value ? "column" : "row" })
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    class: "indexcentent-left",
                    style: vue.normalizeStyle({ width: flexshow.value ? "100%" : "60%" })
                  },
                  [
                    vue.createVNode(Bigboxofcontents)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "indexcentent-fight",
                    style: vue.normalizeStyle({ width: flexshow.value ? "100%" : "40%" })
                  },
                  [
                    vue.createVNode(Bigboxofcontents)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              {
                class: "indexcentent",
                style: vue.normalizeStyle({ flexDirection: flexshow.value ? "column" : "row" })
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    class: "indexcentent-le",
                    style: vue.normalizeStyle({ width: flexshow.value ? "100%" : "30%" })
                  },
                  [
                    vue.createVNode(Bigboxofcontents)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "indexcentent-le",
                    style: vue.normalizeStyle({ width: flexshow.value ? "100%" : "30%" })
                  },
                  [
                    vue.createVNode(Bigboxofcontents)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "indexcentent-le",
                    style: vue.normalizeStyle({ width: flexshow.value ? "100%" : "30%" })
                  },
                  [
                    vue.createVNode(Bigboxofcontents)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              {
                class: "indexcentent",
                style: vue.normalizeStyle({ flexDirection: flexshow.value ? "column" : "row" })
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    class: "indexcentent-le",
                    style: vue.normalizeStyle({ width: flexshow.value ? "100%" : "30%" })
                  },
                  [
                    vue.createVNode(Bigboxofcontents)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "indexcentent-le",
                    style: vue.normalizeStyle({ width: flexshow.value ? "100%" : "30%" })
                  },
                  [
                    vue.createVNode(Bigboxofcontents)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "indexcentent-le",
                    style: vue.normalizeStyle({ width: flexshow.value ? "100%" : "30%" })
                  },
                  [
                    vue.createVNode(Bigboxofcontents)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            ),
            vue.createElementVNode("view", { class: "Seethemall" }, [
              vue.createVNode(Seethemall)
            ])
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const indexset$1 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-8f876bc2"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/hone/boxofcontents/index.vue"]]);
  const props$d = defineMixin({
    props: {
      color: {
        type: String,
        default: () => props$m.line.color
      },
      // 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等
      length: {
        type: [String, Number],
        default: () => props$m.line.length
      },
      // 线条方向，col-竖向，row-横向
      direction: {
        type: String,
        default: () => props$m.line.direction
      },
      // 是否显示细边框
      hairline: {
        type: Boolean,
        default: () => props$m.line.hairline
      },
      // 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px"
      margin: {
        type: [String, Number],
        default: () => props$m.line.margin
      },
      // 是否虚线，true-虚线，false-实线
      dashed: {
        type: Boolean,
        default: () => props$m.line.dashed
      }
    }
  });
  const _sfc_main$J = {
    name: "u-line",
    mixins: [mpMixin, mixin, props$d],
    computed: {
      lineStyle() {
        const style = {};
        style.margin = this.margin;
        if (this.direction === "row") {
          style.borderBottomWidth = "1px";
          style.borderBottomStyle = this.dashed ? "dashed" : "solid";
          style.width = addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleY(0.5)";
        } else {
          style.borderLeftWidth = "1px";
          style.borderLeftStyle = this.dashed ? "dashed" : "solid";
          style.height = addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleX(0.5)";
        }
        style.borderColor = this.color;
        return deepMerge$2(style, addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-line",
        style: vue.normalizeStyle([$options.lineStyle])
      },
      null,
      4
      /* STYLE */
    );
  }
  const __easycom_1$7 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$n], ["__scopeId", "data-v-bbd9963c"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-line/u-line.vue"]]);
  const props$c = defineMixin({
    props: {
      // 标题
      title: {
        type: [String, Number],
        default: () => props$m.cell.title
      },
      // 标题下方的描述信息
      label: {
        type: [String, Number],
        default: () => props$m.cell.label
      },
      // 右侧的内容
      value: {
        type: [String, Number],
        default: () => props$m.cell.value
      },
      // 左侧图标名称，或者图片链接(本地文件建议使用绝对地址)
      icon: {
        type: String,
        default: () => props$m.cell.icon
      },
      // 是否禁用cell
      disabled: {
        type: Boolean,
        default: () => props$m.cell.disabled
      },
      // 是否显示下边框
      border: {
        type: Boolean,
        default: () => props$m.cell.border
      },
      // 内容是否垂直居中(主要是针对右侧的value部分)
      center: {
        type: Boolean,
        default: () => props$m.cell.center
      },
      // 点击后跳转的URL地址
      url: {
        type: String,
        default: () => props$m.cell.url
      },
      // 链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作
      linkType: {
        type: String,
        default: () => props$m.cell.linkType
      },
      // 是否开启点击反馈(表现为点击时加上灰色背景)
      clickable: {
        type: Boolean,
        default: () => props$m.cell.clickable
      },
      // 是否展示右侧箭头并开启点击反馈
      isLink: {
        type: Boolean,
        default: () => props$m.cell.isLink
      },
      // 是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)
      required: {
        type: Boolean,
        default: () => props$m.cell.required
      },
      // 右侧的图标箭头
      rightIcon: {
        type: String,
        default: () => props$m.cell.rightIcon
      },
      // 右侧箭头的方向，可选值为：left，up，down
      arrowDirection: {
        type: String,
        default: () => props$m.cell.arrowDirection
      },
      // 左侧图标样式
      iconStyle: {
        type: [Object, String],
        default: () => {
          return props$m.cell.iconStyle;
        }
      },
      // 右侧箭头图标的样式
      rightIconStyle: {
        type: [Object, String],
        default: () => {
          return props$m.cell.rightIconStyle;
        }
      },
      // 标题的样式
      titleStyle: {
        type: [Object, String],
        default: () => {
          return props$m.cell.titleStyle;
        }
      },
      // 单位元的大小，可选值为large
      size: {
        type: String,
        default: () => props$m.cell.size
      },
      // 点击cell是否阻止事件传播
      stop: {
        type: Boolean,
        default: () => props$m.cell.stop
      },
      // 标识符，cell被点击时返回
      name: {
        type: [Number, String],
        default: () => props$m.cell.name
      }
    }
  });
  const _sfc_main$I = {
    name: "u-cell",
    data() {
      return {};
    },
    mixins: [mpMixin, mixin, props$c],
    computed: {
      titleTextStyle() {
        return addStyle(this.titleStyle);
      }
    },
    emits: ["click"],
    methods: {
      addStyle,
      testEmpty: test.empty,
      // 点击cell
      clickHandler(e) {
        if (this.disabled)
          return;
        this.$emit("click", {
          name: this.name
        });
        this.openPage();
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$7);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-cell", [_ctx.customClass]]),
      style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle)]),
      "hover-class": !_ctx.disabled && (_ctx.clickable || _ctx.isLink) ? "u-cell--clickable" : "",
      "hover-stay-time": 250,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["u-cell__body", [_ctx.center && "u-cell--center", _ctx.size === "large" && "u-cell__body--large"]])
        },
        [
          vue.createElementVNode("view", { class: "u-cell__body__content" }, [
            _ctx.$slots.icon || _ctx.icon ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "u-cell__left-icon-wrap"
            }, [
              _ctx.$slots.icon ? vue.renderSlot(_ctx.$slots, "icon", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 1,
                name: _ctx.icon,
                "custom-style": _ctx.iconStyle,
                size: _ctx.size === "large" ? 22 : 18
              }, null, 8, ["name", "custom-style", "size"]))
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "u-cell__title" }, [
              vue.createCommentVNode(" 将slot与默认内容用if/else分开主要是因为微信小程序不支持slot嵌套传递，这样才能解决collapse组件的slot不失效问题，label暂时未用到。 "),
              _ctx.$slots.title || !_ctx.title ? vue.renderSlot(_ctx.$slots, "title", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 1,
                  class: vue.normalizeClass(["u-cell__title-text", [_ctx.required && "u-cell--required", _ctx.disabled && "u-cell--disabled", _ctx.size === "large" && "u-cell__title-text--large"]]),
                  style: vue.normalizeStyle([$options.titleTextStyle])
                },
                vue.toDisplayString(_ctx.title),
                7
                /* TEXT, CLASS, STYLE */
              )),
              vue.renderSlot(_ctx.$slots, "label", {}, () => [
                _ctx.label ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: vue.normalizeClass(["u-cell__label", [_ctx.disabled && "u-cell--disabled", _ctx.size === "large" && "u-cell__label--large"]])
                  },
                  vue.toDisplayString(_ctx.label),
                  3
                  /* TEXT, CLASS */
                )) : vue.createCommentVNode("v-if", true)
              ], true)
            ])
          ]),
          vue.renderSlot(_ctx.$slots, "value", {}, () => [
            !$options.testEmpty(_ctx.value) ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: vue.normalizeClass(["u-cell__value", [_ctx.disabled && "u-cell--disabled", _ctx.size === "large" && "u-cell__value--large"]])
              },
              vue.toDisplayString(_ctx.value),
              3
              /* TEXT, CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ], true),
          _ctx.$slots["right-icon"] || _ctx.isLink ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: vue.normalizeClass(["u-cell__right-icon-wrap", [`u-cell__right-icon-wrap--${_ctx.arrowDirection}`]])
            },
            [
              _ctx.rightIcon && !_ctx.$slots["right-icon"] ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                name: _ctx.rightIcon,
                "custom-style": _ctx.rightIconStyle,
                color: _ctx.disabled ? "#c8c9cc" : "info",
                size: _ctx.size === "large" ? 18 : 16
              }, null, 8, ["name", "custom-style", "color", "size"])) : vue.renderSlot(_ctx.$slots, "right-icon", { key: 1 }, void 0, true)
            ],
            2
            /* CLASS */
          )) : vue.createCommentVNode("v-if", true),
          _ctx.$slots["righticon"] ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 1,
              class: vue.normalizeClass(["u-cell__right-icon-wrap", [`u-cell__right-icon-wrap--${_ctx.arrowDirection}`]])
            },
            [
              vue.renderSlot(_ctx.$slots, "righticon", {}, void 0, true)
            ],
            2
            /* CLASS */
          )) : vue.createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      ),
      _ctx.border ? (vue.openBlock(), vue.createBlock(_component_u_line, { key: 0 })) : vue.createCommentVNode("v-if", true)
    ], 14, ["hover-class"]);
  }
  const __easycom_1$6 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$m], ["__scopeId", "data-v-b4243719"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-cell/u-cell.vue"]]);
  const props$b = defineMixin({
    props: {
      // 标题
      title: {
        type: String,
        default: () => props$m.collapseItem.title
      },
      // 标题右侧内容
      value: {
        type: String,
        default: () => props$m.collapseItem.value
      },
      // 标题下方的描述信息
      label: {
        type: String,
        default: () => props$m.collapseItem.label
      },
      // 是否禁用折叠面板
      disabled: {
        type: Boolean,
        default: () => props$m.collapseItem.disabled
      },
      // 是否展示右侧箭头并开启点击反馈
      isLink: {
        type: Boolean,
        default: () => props$m.collapseItem.isLink
      },
      // 是否开启点击反馈
      clickable: {
        type: Boolean,
        default: () => props$m.collapseItem.clickable
      },
      // 是否显示内边框
      border: {
        type: Boolean,
        default: () => props$m.collapseItem.border
      },
      // 标题的对齐方式
      align: {
        type: String,
        default: () => props$m.collapseItem.align
      },
      // 唯一标识符
      name: {
        type: [String, Number],
        default: () => props$m.collapseItem.name
      },
      // 标题左侧图片，可为绝对路径的图片或内置图标
      icon: {
        type: String,
        default: () => props$m.collapseItem.icon
      },
      // 面板展开收起的过渡时间，单位ms
      duration: {
        type: Number,
        default: () => props$m.collapseItem.duration
      },
      // 显示右侧图标
      showRight: {
        type: Boolean,
        default: () => props$m.collapseItem.showRight
      }
    }
  });
  const _sfc_main$H = {
    name: "u-collapse-item",
    mixins: [mpMixin, mixin, props$b],
    data() {
      return {
        elId: guid(),
        // uni.createAnimation的导出数据
        animationData: {},
        // 是否展开状态
        expanded: false,
        // 根据expanded确定是否显示border，为了控制展开时，cell的下划线更好的显示效果，进行一定时间的延时
        showBorder: false,
        // 是否动画中，如果是则不允许继续触发点击
        animating: false,
        // 父组件u-collapse的参数
        parentData: {
          accordion: false,
          border: false
        }
      };
    },
    watch: {
      expanded(n) {
        clearTimeout(this.timer);
        this.timer = null;
        this.timer = setTimeout(() => {
          this.showBorder = n;
        }, n ? 10 : 290);
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      // 异步获取内容，或者动态修改了内容时，需要重新初始化
      async init() {
        this.updateParentData();
        if (!this.parent) {
          return error("u-collapse-item必须要搭配u-collapse组件使用");
        }
        const {
          value: value2,
          accordion,
          children = []
        } = this.parent;
        if (accordion) {
          if (test.array(value2)) {
            return error("手风琴模式下，u-collapse组件的value参数不能为数组");
          }
          this.expanded = this.name == value2;
        } else {
          if (!test.array(value2) && value2 !== null) {
            return error("非手风琴模式下，u-collapse组件的value参数必须为数组");
          }
          this.expanded = (value2 || []).some((item) => item == this.name);
        }
        await vue.nextTick();
        this.setContentAnimate();
      },
      updateParentData() {
        this.getParentData("u-collapse");
      },
      async setContentAnimate() {
        const rect = await this.queryRect();
        const height = this.expanded ? rect.height : 0;
        this.animating = true;
        const animation = uni.createAnimation({
          timingFunction: "ease-in-out"
        });
        animation.height(height).step({
          duration: this.duration
        }).step();
        this.animationData = animation.export();
        sleep(this.duration).then(() => {
          this.animating = false;
        });
      },
      // 点击collapsehead头部
      clickHandler() {
        if (this.disabled && this.animating)
          return;
        this.parent && this.parent.onChange(this);
      },
      // 查询内容高度
      queryRect() {
        return new Promise((resolve) => {
          this.$uGetRect(`#${this.elId}`).then((size) => {
            resolve(size);
          });
        });
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    const _component_u_cell = resolveEasycom(vue.resolveDynamicComponent("u-cell"), __easycom_1$6);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$7);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-collapse-item" }, [
      vue.createVNode(_component_u_cell, {
        title: _ctx.$slots.title ? "" : _ctx.title,
        value: _ctx.value,
        label: _ctx.label,
        icon: _ctx.icon,
        isLink: _ctx.isLink,
        clickable: _ctx.clickable,
        border: $data.parentData.border && $data.showBorder,
        onClick: $options.clickHandler,
        arrowDirection: $data.expanded ? "up" : "down",
        disabled: _ctx.disabled
      }, {
        title: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "title", {}, () => [
            !_ctx.$slots.title && _ctx.title ? (vue.openBlock(), vue.createElementBlock(
              "text",
              { key: 0 },
              vue.toDisplayString(_ctx.title),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true)
          ], true)
        ]),
        icon: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "icon", {}, () => [
            !_ctx.$slots.icon && _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
              key: 0,
              size: 22,
              name: _ctx.icon
            }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true)
          ], true)
        ]),
        value: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "value", {}, () => [
            !_ctx.$slots.value && _ctx.value ? (vue.openBlock(), vue.createElementBlock(
              "text",
              { key: 0 },
              vue.toDisplayString(_ctx.value),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true)
          ], true)
        ]),
        "right-icon": vue.withCtx(() => [
          _ctx.showRight ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            [
              !_ctx.$slots["right-icon"] ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                size: 16,
                name: "arrow-right"
              })) : vue.createCommentVNode("v-if", true),
              vue.renderSlot(_ctx.$slots, "right-icon", {}, void 0, true)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : vue.createCommentVNode("v-if", true)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["title", "value", "label", "icon", "isLink", "clickable", "border", "onClick", "arrowDirection", "disabled"]),
      vue.createElementVNode("view", {
        class: "u-collapse-item__content",
        animation: $data.animationData,
        ref: "animation"
      }, [
        vue.createElementVNode("view", {
          class: "u-collapse-item__content__text content-class",
          id: $data.elId,
          ref: $data.elId
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 8, ["id"])
      ], 8, ["animation"]),
      $data.parentData.border ? (vue.openBlock(), vue.createBlock(_component_u_line, { key: 0 })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$l], ["__scopeId", "data-v-1eebec58"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-collapse-item/u-collapse-item.vue"]]);
  const props$a = defineMixin({
    props: {
      // 当前展开面板的name，非手风琴模式：[<string | number>]，手风琴模式：string | number
      value: {
        type: [String, Number, Array, null],
        default: () => props$m.collapse.value
      },
      // 是否手风琴模式
      accordion: {
        type: Boolean,
        default: () => props$m.collapse.accordion
      },
      // 是否显示外边框
      border: {
        type: Boolean,
        default: () => props$m.collapse.border
      }
    }
  });
  const _sfc_main$G = {
    name: "u-collapse",
    mixins: [mpMixin, mixin, props$a],
    watch: {
      needInit() {
        this.init();
      },
      // 当父组件需要子组件需要共享的参数发生了变化，手动通知子组件
      parentData() {
        if (this.children.length) {
          this.children.map((child) => {
            typeof child.updateParentData === "function" && child.updateParentData();
          });
        }
      }
    },
    created() {
      this.children = [];
    },
    computed: {
      needInit() {
        return [this.accordion, this.value];
      }
    },
    emits: ["open", "close", "change"],
    methods: {
      // 重新初始化一次内部的所有子元素
      init() {
        this.children.map((child) => {
          child.init();
        });
      },
      /**
       * collapse-item被点击时触发，由collapse统一处理各子组件的状态
       * @param {Object} target 被操作的面板的实例
       */
      onChange(target) {
        let changeArr = [];
        this.children.map((child, index2) => {
          if (this.accordion) {
            child.expanded = child === target ? !target.expanded : false;
            child.setContentAnimate();
          } else {
            if (child === target) {
              child.expanded = !child.expanded;
              child.setContentAnimate();
            }
          }
          changeArr.push({
            // 如果没有定义name属性，则默认返回组件的index索引
            name: child.name || index2,
            status: child.expanded ? "open" : "close"
          });
        });
        this.$emit("change", changeArr);
        this.$emit(target.expanded ? "open" : "close", target.name);
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$7);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-collapse" }, [
      _ctx.border ? (vue.openBlock(), vue.createBlock(_component_u_line, { key: 0 })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$k], ["__scopeId", "data-v-a1935688"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-collapse/u-collapse.vue"]]);
  const _imports_0$2 = "/static/logo.png";
  const _sfc_main$F = {
    __name: "foots",
    setup(__props) {
      const open = (e) => {
      };
      const close = (e) => {
      };
      const change = (e) => {
      };
      const mytop = vue.ref(2);
      const left = vue.ref(1);
      vue.onMounted(() => {
        window.addEventListener("resize", handleResize);
      });
      const flexshow = vue.ref(false);
      const viewportWidth = vue.ref(0);
      const handleResize = () => {
        viewportWidth.value = window.innerWidth;
        if (viewportWidth.value < 956) {
          flexshow.value = true;
          left.value = 3;
        } else if (viewportWidth.value == 1738) {
          left.value = 6;
        } else if (viewportWidth.value == 1530) {
          left.value = 3;
        } else {
          flexshow.value = false;
        }
      };
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        const _component_up_collapse_item = resolveEasycom(vue.resolveDynamicComponent("up-collapse-item"), __easycom_0$4);
        const _component_up_collapse = resolveEasycom(vue.resolveDynamicComponent("up-collapse"), __easycom_1$5);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "foots",
            style: vue.normalizeStyle({ padding: `${mytop.value}rem ${left.value}rem` })
          },
          [
            vue.createElementVNode("footer", null, [
              vue.createElementVNode("view", { class: "foots-t" }, [
                vue.createElementVNode("view", { class: "foots-t-box" }, [
                  vue.createElementVNode("text", null, "下载和关注"),
                  vue.createElementVNode("view", { class: "foots-image" }, [
                    vue.createElementVNode("image", {
                      src: "https://img.meituan.net/portalweb/af265d32ee35749908a5ff91074d4a0e6521.png@100w",
                      mode: ""
                    }),
                    vue.createElementVNode("image", {
                      src: "https://img.meituan.net/portalweb/af265d32ee35749908a5ff91074d4a0e6521.png@100w",
                      mode: ""
                    }),
                    vue.createElementVNode("image", {
                      src: "https://img.meituan.net/portalweb/af265d32ee35749908a5ff91074d4a0e6521.png@100w",
                      mode: ""
                    }),
                    vue.createElementVNode("image", {
                      src: "https://img.meituan.net/portalweb/af265d32ee35749908a5ff91074d4a0e6521.png@100w",
                      mode: ""
                    }),
                    vue.createElementVNode("image", {
                      src: "https://img.meituan.net/portalweb/af265d32ee35749908a5ff91074d4a0e6521.png@100w",
                      mode: ""
                    }),
                    vue.createElementVNode("image", {
                      src: "https://img.meituan.net/portalweb/af265d32ee35749908a5ff91074d4a0e6521.png@100w",
                      mode: ""
                    })
                  ])
                ]),
                vue.createVNode(_component_up_collapse, {
                  onChange: change,
                  onClose: close,
                  onOpen: open
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_up_collapse_item, {
                      title: "文档指南",
                      name: "Docs guide"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("text", { class: "u-collapse-content" }, "涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_collapse_item, {
                      title: "组件全面",
                      name: "Variety components"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("text", { class: "u-collapse-content" }, "众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_collapse_item, {
                      title: "众多利器",
                      name: "Numerous tools"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createElementVNode("text", { class: "u-collapse-content" }, "众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              vue.createElementVNode("view", { class: "footsbox-l" }, [
                vue.createElementVNode("text", { class: "footsbox-l-title" }, "观涛")
              ]),
              vue.createElementVNode("view", { class: "footxt" }, [
                vue.createElementVNode("view", {
                  class: "",
                  style: { "text-align": "center", "font-size": "0.8rem", "color": "#a8abb0", "margin-top": "1rem" }
                }, " 举报电话：4006018900，举报邮箱：tousujubao@meituan.com， 以上渠道均可投诉举报：互联网违法和不良信息，涉及未成年人保护、互联网算法推荐、谣言类信息、生活服务类专项举报等相关问题。 "),
                vue.createElementVNode("view", {
                  class: "logo-box",
                  style: { "display": "flex", "align-items": "center", "justify-content": "center", "font-size": "0.7rem", "color": "#a8abb0", "margin-top": "1rem" }
                }, [
                  vue.createElementVNode("text", {
                    class: "",
                    style: { "margin-right": "0.5rem" }
                  }, " ©2024 美团版权所有 "),
                  vue.createElementVNode("view", {
                    class: "",
                    style: { "margin-right": "0.5rem", "border-bottom": "1px solid #a8abb0" }
                  }, " 京ICP备10211739号 "),
                  vue.createElementVNode("image", {
                    src: _imports_0$2,
                    mode: "",
                    style: { "width": "1rem", "height": "1rem", "margin-right": "0.5rem" }
                  }),
                  vue.createElementVNode("view", {
                    class: "",
                    style: { "margin-right": "0.5rem", "border-bottom": "1px solid #a8abb0" }
                  }, " 京公网安备11000002002052号 "),
                  vue.createElementVNode("view", {
                    class: "",
                    style: { "margin-right": "0.5rem", "border-bottom": "1px solid #a8abb0" }
                  }, " 隐私政策 "),
                  vue.createElementVNode("view", {
                    class: "",
                    style: { "margin-right": "0.5rem", "border-bottom": "1px solid #a8abb0" }
                  }, " 规则中心 ")
                ])
              ])
            ])
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const foot = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-a09d9cdc"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/foots.vue"]]);
  const _sfc_main$E = {
    __name: "Home",
    setup(__props) {
      const showtitle = vue.ref(false);
      vue.ref(false);
      vue.ref(false);
      vue.ref();
      const viewportWidth = vue.ref(0);
      const handleResize = () => {
        const FontSize = "16";
        viewportWidth.value = window.innerWidth;
        formatAppLog("log", "at pages/Home/Home.vue:75", viewportWidth.value);
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
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
          vue.createCommentVNode(" <backtop></backtop> "),
          vue.createVNode(Navigationbar),
          vue.createVNode(topic),
          vue.createVNode(indexset$1),
          vue.createVNode(foot)
        ]);
      };
    }
  };
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-7ffebbf4"], ["__file", "C:/Users/Administrator/Desktop/vue3/pages/Home/Home.vue"]]);
  const _sfc_main$D = {};
  function _sfc_render$j(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "text" }, [
      vue.createElementVNode("text", { class: "texttitle" }, "和 观 涛 合 作, 一 起 更 好")
    ]);
  }
  const headtext = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$j], ["__scopeId", "data-v-82133b62"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/headimg/headtext.vue"]]);
  const _sfc_main$C = {
    __name: "headimage",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "image" }, [
          vue.createVNode(headtext)
        ]);
      };
    }
  };
  const heahimage = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-f9ffc2a5"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/headimg/headimage.vue"]]);
  const _sfc_main$B = {
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
        sections.forEach((section, index2) => {
          const sectionTop = section.offsetTop - 50;
          if (window.pageYOffset >= sectionTop && (window.pageYOffset < section.offsetTop + section.offsetHeight || index2 === sections.length - 1)) {
            activeSection = navItems[index2];
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
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("body", { style: { "timeline-scope": "--t1,--t2,--t3,--t4,--t5" } }, [
      vue.createElementVNode("div", {
        class: "content",
        style: { "--s": "--t1" }
      }, [
        vue.createElementVNode("h2", { id: "t1" }, "门店入驻"),
        vue.createElementVNode("section", null, [
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", {
        class: "content",
        style: { "--s": "--t1" }
      }, [
        vue.createElementVNode("h2", { id: "t1" }, "成为供应商"),
        vue.createElementVNode("section", null, [
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", {
        class: "content",
        style: { "--s": "--t1" }
      }, [
        vue.createElementVNode("h2", { id: "t1" }, "区县代理"),
        vue.createElementVNode("section", null, [
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", {
        class: "content",
        style: { "--s": "--t1" }
      }, [
        vue.createElementVNode("h2", { id: "t1" }, "物流配送合作"),
        vue.createElementVNode("section", null, [
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", {
        class: "content",
        style: { "--s": "--t1" }
      }, [
        vue.createElementVNode("h2", { id: "t1" }, "商家服务"),
        vue.createElementVNode("section", null, [
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ]),
          vue.createElementVNode("text", { class: "Sttext" }, [
            vue.createElementVNode("view", {
              class: "",
              style: { "font-size": "40rpx" }
            }, " 外卖商家入驻 "),
            vue.createElementVNode("text", {
              class: "title",
              style: { "font-size": "25rpx", "color": "#626870" }
            }, "团购，让更多人看到。更多人到点消费"),
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "align-items": "center" }
              }, [
                vue.createElementVNode("text", { style: { "font-size": "1rem", "color": "#626870" } }, "查看详情"),
                vue.createVNode(_component_up_icon, {
                  name: "arrow-rightward",
                  color: "#626870",
                  size: "18"
                })
              ])
            ])
          ])
        ])
      ])
    ]);
  }
  const Stepbar = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$i], ["__scopeId", "data-v-b1185990"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/centent/Stepbar.vue"]]);
  const _sfc_main$A = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createElementVNode("view", { class: "index-box" }, [
            vue.createVNode(Stepbar)
          ])
        ]);
      };
    }
  };
  const Stepbarindex = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-fb36c1d9"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/centent/index.vue"]]);
  const _sfc_main$z = {
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
      foots: foot
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Navigationbar = vue.resolveComponent("Navigationbar");
    const _component_heahimage = vue.resolveComponent("heahimage");
    const _component_Stepbarindex = vue.resolveComponent("Stepbarindex");
    const _component_foots = vue.resolveComponent("foots");
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-page" }, [
      vue.createVNode(_component_Navigationbar),
      vue.createVNode(_component_heahimage),
      vue.createVNode(_component_Stepbarindex),
      vue.createVNode(_component_foots)
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$h], ["__file", "C:/Users/Administrator/Desktop/vue3/pages/index/index.vue"]]);
  const _sfc_main$y = {
    __name: "index",
    setup(__props) {
      const showtitle = vue.ref(false);
      vue.ref(false);
      vue.ref(false);
      const mytop = vue.ref(0);
      const myleft = vue.ref(2);
      const Navigetle = vue.ref(10);
      const Navigetcent = vue.ref(65);
      const Navigetrigth = vue.ref(15);
      const fontsize = vue.ref(1);
      const login = vue.ref(1);
      const buth = vue.ref(0.8);
      vue.onMounted(() => {
        window.addEventListener("resize", handleResize);
      });
      vue.ref();
      const viewportWidth = vue.ref(0);
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
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "Naviget",
            style: vue.normalizeStyle({ "padding": `${mytop.value}rem  ${myleft.value}rem` })
          },
          [
            vue.createElementVNode("view", { class: "Navigetop" }, [
              vue.createElementVNode(
                "view",
                {
                  class: "Naviget-le",
                  style: vue.normalizeStyle({ "width": `${Navigetle.value}%`, "font-size": `${login.value}rem` })
                },
                " 观涛 ",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "Naviget-cent",
                  style: vue.normalizeStyle({ "width": `${Navigetcent.value}%` })
                },
                [
                  vue.createElementVNode("view", {
                    class: "ul",
                    style: { "display": "flex", "justify-content": "space-between", "height": "100%" }
                  }, [
                    vue.createElementVNode(
                      "text",
                      {
                        class: "li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createElementVNode("navigator", {
                          url: "/pages/Home/Home",
                          "hover-class": "navigator-hover"
                        }, " 首页 "),
                        vue.createElementVNode("text", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createElementVNode("navigator", {
                          url: "/pages/index/index",
                          "hover-class": "navigator-hover"
                        }, " 北斗计划 "),
                        vue.createElementVNode("text", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createTextVNode(" 社会招聘 "),
                        vue.createElementVNode("text", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "emitset li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createTextVNode("校园招聘 "),
                        vue.createElementVNode("text", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "emitset li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createTextVNode("工作兼职 "),
                        vue.createElementVNode("text", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createTextVNode("了解美团 "),
                        vue.createElementVNode("text", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createElementVNode("navigator", {
                          url: "/pages/Joinus/Joinus",
                          "hover-class": "navigator-hover"
                        }, " 常见问题 "),
                        vue.createElementVNode("text", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    )
                  ])
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "Naviget-rigth",
                  style: vue.normalizeStyle({ "width": `${Navigetrigth.value}%` })
                },
                [
                  vue.createElementVNode("view", {
                    class: "",
                    style: { "display": "flex", "align-items": "center", "width": "100%" }
                  }, [
                    vue.createElementVNode(
                      "button",
                      {
                        class: "Naviget-rigth-bth",
                        style: vue.normalizeStyle({ "font-size": `${buth.value}rem` })
                      },
                      "English",
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "button",
                      {
                        class: "Naviget-rigth-bth",
                        style: vue.normalizeStyle({ "font-size": `${buth.value}rem` })
                      },
                      "登录",
                      4
                      /* STYLE */
                    )
                  ])
                ],
                4
                /* STYLE */
              )
            ])
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const Headnavigation = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-1900e986"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/Headnavigation/index.vue"]]);
  const _sfc_main$x = {
    __name: "indexto",
    setup(__props) {
      const showtitle = vue.ref(false);
      vue.ref(false);
      vue.ref(false);
      const mytop = vue.ref(0);
      const myleft = vue.ref(2);
      const Navigetle = vue.ref(10);
      const Navigetcent = vue.ref(65);
      const Navigetrigth = vue.ref(15);
      const fontsize = vue.ref(1);
      const login = vue.ref(1);
      const buth = vue.ref(0.8);
      vue.onMounted(() => {
        window.addEventListener("resize", handleResize);
      });
      vue.ref();
      const viewportWidth = vue.ref(0);
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
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "Naviget",
            style: vue.normalizeStyle({ "padding": `${mytop.value}rem  ${myleft.value}rem` })
          },
          [
            vue.createElementVNode("view", { class: "Navigetop" }, [
              vue.createElementVNode(
                "view",
                {
                  class: "Naviget-le",
                  style: vue.normalizeStyle({ "width": `${Navigetle.value}%`, "font-size": `${login.value}rem` })
                },
                " 观涛 ",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "Naviget-cent",
                  style: vue.normalizeStyle({ "width": `${Navigetcent.value}%` })
                },
                [
                  vue.createElementVNode("view", {
                    class: "ul",
                    style: { "display": "flex", "justify-content": "space-between", "height": "100%" }
                  }, [
                    vue.createElementVNode(
                      "text",
                      {
                        class: "li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createElementVNode("navigator", {
                          url: "/pages/Home/Home",
                          "hover-class": "navigator-hover"
                        }, " 首页 "),
                        vue.createElementVNode("span", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createElementVNode("navigator", {
                          url: "/pages/index/index",
                          "hover-class": "navigator-hover"
                        }, " 北斗计划 "),
                        vue.createElementVNode("span", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createTextVNode(" 社会招聘 "),
                        vue.createElementVNode("span", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "emitset li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createTextVNode("校园招聘 "),
                        vue.createElementVNode("span", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "emitset li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createTextVNode("工作兼职 "),
                        vue.createElementVNode("span", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createTextVNode("了解美团 "),
                        vue.createElementVNode("span", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "li",
                        style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem` })
                      },
                      [
                        vue.createElementVNode("navigator", {
                          url: "/pages/Joinus/Joinus",
                          "hover-class": "navigator-hover"
                        }, " 常见问题 "),
                        vue.createElementVNode("span", { class: "borbth" })
                      ],
                      4
                      /* STYLE */
                    )
                  ])
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "Naviget-rigth",
                  style: vue.normalizeStyle({ "width": `${Navigetrigth.value}%` })
                },
                [
                  vue.createElementVNode("view", {
                    class: "",
                    style: { "display": "flex", "align-items": "center", "width": "100%" }
                  }, [
                    vue.createElementVNode(
                      "button",
                      {
                        class: "Naviget-rigth-bth",
                        style: vue.normalizeStyle({ "font-size": `${buth.value}rem` })
                      },
                      "English",
                      4
                      /* STYLE */
                    ),
                    vue.createElementVNode(
                      "button",
                      {
                        class: "Naviget-rigth-bth",
                        style: vue.normalizeStyle({ "font-size": `${buth.value}rem` })
                      },
                      "登录",
                      4
                      /* STYLE */
                    )
                  ])
                ],
                4
                /* STYLE */
              )
            ])
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const Headnavigationto = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-9929eb46"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/Headnavigation/indexto.vue"]]);
  const _imports_0$1 = "/static/oceans.mp4";
  const _imports_1 = "/static/xiao.jpg";
  const _sfc_main$w = {
    __name: "Joinusinput",
    props: {
      size: {
        type: Number,
        default: 1
      },
      top: {
        type: Number,
        default: 1
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_up_icon = resolveEasycom(vue.resolveDynamicComponent("up-icon"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "Joinusinput",
            style: vue.normalizeStyle({ "margin": `${__props.top}rem` })
          },
          [
            vue.createElementVNode("view", { class: "Joinusinput-box" }, [
              vue.createElementVNode(
                "input",
                {
                  type: "text",
                  class: "my-input",
                  placeholder: "请输入内容...",
                  style: vue.normalizeStyle({ "padding": `${__props.size}rem  0` })
                },
                null,
                4
                /* STYLE */
              ),
              vue.createElementVNode("view", { class: "Joinusicon" }, [
                vue.createVNode(_component_up_icon, {
                  name: "search",
                  color: "#000001",
                  size: "28"
                })
              ])
            ])
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const indexinput = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-5d0ec029"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/Joinustext/Joinusinput.vue"]]);
  const _sfc_main$v = {
    __name: "joinusul",
    setup(__props) {
      const viewportWidth = vue.ref(0);
      const fontsize = vue.ref(0);
      const fontname = vue.ref(0);
      const mytop = vue.ref(0.7);
      const myleft = vue.ref(0);
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
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "joinusul" }, [
          vue.createElementVNode("view", { class: "setul" }, [
            vue.createElementVNode("view", { class: "ul" }, [
              vue.createElementVNode(
                "li",
                {
                  class: "li",
                  style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem`, "padding": `${mytop.value}rem ${myleft.value}rem` })
                },
                "北斗计划",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "li",
                {
                  class: "li",
                  style: vue.normalizeStyle({ "font-size": `${fontname.value}rem `, "padding": `${mytop.value}rem ${myleft.value}rem` })
                },
                " 面相全球顶尖校园科技人才的招聘项目，诚邀个技术领先的优秀童鞋加入",
                4
                /* STYLE */
              )
            ]),
            vue.createElementVNode("view", { class: "ul" }, [
              vue.createElementVNode(
                "li",
                {
                  class: "li",
                  style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem`, "padding": `${mytop.value}rem ${myleft.value}rem` })
                },
                "北斗计划",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "li",
                {
                  class: "li",
                  style: vue.normalizeStyle({ "font-size": `${fontname.value}rem `, "padding": `${mytop.value}rem ${myleft.value}rem` })
                },
                " 面相全球顶尖校园科技人才的招聘项目，诚邀个技术领先的优秀童鞋加入",
                4
                /* STYLE */
              )
            ]),
            vue.createElementVNode("view", { class: "ul" }, [
              vue.createElementVNode(
                "li",
                {
                  class: "li",
                  style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem`, "padding": `${mytop.value}rem ${myleft.value}rem` })
                },
                "北斗计划",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "li",
                {
                  class: "li",
                  style: vue.normalizeStyle({ "font-size": `${fontname.value}rem `, "padding": `${mytop.value}rem ${myleft.value}rem` })
                },
                " 面相全球顶尖校园科技人才的招聘项目，诚邀个技术领先的优秀童鞋加入",
                4
                /* STYLE */
              )
            ]),
            vue.createElementVNode("view", { class: "ul" }, [
              vue.createElementVNode(
                "li",
                {
                  class: "li",
                  style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem`, "padding": `${mytop.value}rem ${myleft.value}rem` })
                },
                "北斗计划",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "li",
                {
                  class: "li",
                  style: vue.normalizeStyle({ "font-size": `${fontname.value}rem `, "padding": `${mytop.value}rem ${myleft.value}rem` })
                },
                " 面相全球顶尖校园科技人才的招聘项目，诚邀个技术领先的优秀童鞋加入",
                4
                /* STYLE */
              )
            ]),
            vue.createElementVNode("view", { class: "ul" }, [
              vue.createElementVNode(
                "li",
                {
                  class: "li",
                  style: vue.normalizeStyle({ "font-size": `${fontsize.value}rem`, "padding": `${mytop.value}rem ${myleft.value}rem` })
                },
                "北斗计划",
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "li",
                {
                  class: "li",
                  style: vue.normalizeStyle({ "font-size": `${fontname.value}rem `, "padding": `${mytop.value}rem ${myleft.value}rem` })
                },
                " 面相全球顶尖校园科技人才的招聘项目，诚邀个技术领先的优秀童鞋加入",
                4
                /* STYLE */
              )
            ])
          ])
        ]);
      };
    }
  };
  const indexulset = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-0cf09470"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/Joinustext/joinusul.vue"]]);
  const _sfc_main$u = {
    __name: "index",
    setup(__props) {
      const viewportWidth = vue.ref(0);
      const title = vue.ref(0);
      const namesize = vue.ref(0);
      const size = vue.ref(0.7);
      const top = vue.ref(0);
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
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "JOinustext" }, [
          vue.createElementVNode(
            "text",
            {
              class: "Joinus-text",
              style: vue.normalizeStyle({ "font-size": `${title.value}rem` })
            },
            "一起成长， 一起更好",
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "Joinus-name",
              style: vue.normalizeStyle({ "font-size": `${namesize.value}rem` })
            },
            " Grow Together, Better Together ",
            4
            /* STYLE */
          ),
          vue.createVNode(indexinput, {
            size: size.value,
            top: top.value
          }, null, 8, ["size", "top"]),
          vue.createVNode(indexulset)
        ]);
      };
    }
  };
  const Joinustitl = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-197740e4"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/Joinustext/index.vue"]]);
  const _sfc_main$t = {
    __name: "index",
    setup(__props) {
      const botton = vue.ref(0);
      const preventFullscreen = () => {
        formatAppLog("log", "at components/Joinus/Video/index.vue:25", 1212);
      };
      const viewportWidth = vue.ref(0);
      const handleResize = () => {
        const FontSize = "16";
        viewportWidth.value = window.innerWidth;
        if (viewportWidth.value > 1e3) {
          document.documentElement.style.fontSize = FontSize + "px";
          botton.value = 280;
        } else {
          document.documentElement.style.fontSize = FontSize / 1 + "px";
          if (viewportWidth.value < 1e3) {
            botton.value = 185;
          }
          if (viewportWidth.value < 900) {
            botton.value = 175;
          }
          if (viewportWidth.value < 800) {
            botton.value = 145;
          }
          if (viewportWidth.value < 700) {
            botton.value = 120;
          }
          if (viewportWidth.value < 600) {
            botton.value = 105;
          }
          if (viewportWidth.value < 500) {
            botton.value = 80;
          }
          if (viewportWidth.value < 400) {
            botton.value = 70;
          }
          if (viewportWidth.value < 300) {
            botton.value = 60;
          }
        }
      };
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "da" }, [
          vue.createElementVNode("view", { class: "video-container" }, [
            vue.createElementVNode("video", {
              src: _imports_0$1,
              poster: _imports_1,
              class: "video-player",
              autoplay: "",
              muted: "",
              controls: false,
              onClick: vue.withModifiers(preventFullscreen, ["stop"]),
              loop: ""
            })
          ]),
          vue.createElementVNode(
            "view",
            {
              class: "Joinustititle",
              style: vue.normalizeStyle({ "bottom": `${botton.value}px` })
            },
            [
              vue.createVNode(Joinustitl)
            ],
            4
            /* STYLE */
          )
        ]);
      };
    }
  };
  const videoset = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-9ba79e72"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/Video/index.vue"]]);
  const _sfc_main$s = {};
  function _sfc_render$g(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
      vue.createElementVNode("view", { class: "indextitle" }, " 产品和服务 ")
    ]);
  }
  const titleset = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$g], ["__scopeId", "data-v-8c406c29"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/joinusttile/index.vue"]]);
  const _sfc_main$r = {};
  function _sfc_render$f(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
      vue.createElementVNode("view", { class: "centenbox" }, [
        vue.createElementVNode("text", null, "观涛生活"),
        vue.createElementVNode("view", { class: "centenbox-top" }, [
          vue.createElementVNode("text", {
            class: "",
            style: { "font-size": "0.9rem" }
          }, "观涛生活"),
          vue.createElementVNode("view", {
            class: "",
            style: { "font-size": "0.8rem", "margin-top": "0.5rem" }
          }, " 大壮得得得吧怒弗恩付费不犯法螺蛳粉么商品房金额是漂发剂哦发布额u封闭翻倍翻倍发吧月份儿 ")
        ])
      ])
    ]);
  }
  const cententbox = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$f], ["__scopeId", "data-v-2e337914"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/joinuscenten/cententbox.vue"]]);
  const _sfc_main$q = {
    __name: "index",
    setup(__props) {
      const viewportWidth = vue.ref(0);
      const withset = vue.ref(25);
      const handleResize = () => {
        const FontSize = "16";
        viewportWidth.value = window.innerWidth;
        if (viewportWidth.value > 1e3) {
          document.documentElement.style.fontSize = FontSize + "px";
          withset.value = 19;
        } else {
          withset.value = 30;
          document.documentElement.style.fontSize = FontSize / 1 + "px";
        }
      };
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createElementVNode("view", { class: "index-box" }, [
            vue.createVNode(titleset),
            vue.createElementVNode("view", { class: "index-centen" }, [
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createVNode(cententbox)
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "index-centen-box",
                  style: vue.normalizeStyle({ "width": `${withset.value}%` })
                },
                [
                  vue.createCommentVNode(" <cententbox></cententbox> ")
                ],
                4
                /* STYLE */
              )
            ])
          ])
        ]);
      };
    }
  };
  const centerbox = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-89109e77"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/joinuscenten/index.vue"]]);
  const props$9 = defineMixin({
    props: {
      // 轮播的长度
      length: {
        type: [String, Number],
        default: () => props$m.swiperIndicator.length
      },
      // 当前处于活动状态的轮播的索引
      current: {
        type: [String, Number],
        default: () => props$m.swiperIndicator.current
      },
      // 指示器非激活颜色
      indicatorActiveColor: {
        type: String,
        default: () => props$m.swiperIndicator.indicatorActiveColor
      },
      // 指示器的激活颜色
      indicatorInactiveColor: {
        type: String,
        default: () => props$m.swiperIndicator.indicatorInactiveColor
      },
      // 指示器模式，line-线型，dot-点型
      indicatorMode: {
        type: String,
        default: () => props$m.swiperIndicator.indicatorMode
      }
    }
  });
  const _sfc_main$p = {
    name: "u-swiper-indicator",
    mixins: [mpMixin, mixin, props$9],
    data() {
      return {
        lineWidth: 22
      };
    },
    computed: {
      // 指示器为线型的样式
      lineStyle() {
        let style = {};
        style.width = addUnit(this.lineWidth);
        style.transform = `translateX(${addUnit(this.current * this.lineWidth)})`;
        style.backgroundColor = this.indicatorActiveColor;
        return style;
      },
      // 指示器为点型的样式
      dotStyle() {
        return (index2) => {
          let style = {};
          style.backgroundColor = index2 === this.current ? this.indicatorActiveColor : this.indicatorInactiveColor;
          return style;
        };
      }
    },
    methods: {
      addUnit
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-swiper-indicator" }, [
      _ctx.indicatorMode === "line" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["u-swiper-indicator__wrapper", [`u-swiper-indicator__wrapper--${_ctx.indicatorMode}`]]),
          style: vue.normalizeStyle({
            width: $options.addUnit($data.lineWidth * _ctx.length),
            backgroundColor: _ctx.indicatorInactiveColor
          })
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "u-swiper-indicator__wrapper--line__bar",
              style: vue.normalizeStyle([$options.lineStyle])
            },
            null,
            4
            /* STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      _ctx.indicatorMode === "dot" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "u-swiper-indicator__wrapper"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(_ctx.length, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock(
              "view",
              {
                class: vue.normalizeClass(["u-swiper-indicator__wrapper__dot", [index2 === _ctx.current && "u-swiper-indicator__wrapper__dot--active"]]),
                key: index2,
                style: vue.normalizeStyle([$options.dotStyle(index2)])
              },
              null,
              6
              /* CLASS, STYLE */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$e], ["__scopeId", "data-v-23112adb"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-swiper-indicator/u-swiper-indicator.vue"]]);
  const props$8 = defineMixin({
    props: {
      // 列表数组，元素可为字符串，如为对象可通过keyName指定目标属性名
      list: {
        type: Array,
        default: () => props$m.swiper.list
      },
      // 是否显示面板指示器
      indicator: {
        type: Boolean,
        default: () => props$m.swiper.indicator
      },
      // 指示器非激活颜色
      indicatorActiveColor: {
        type: String,
        default: () => props$m.swiper.indicatorActiveColor
      },
      // 指示器的激活颜色
      indicatorInactiveColor: {
        type: String,
        default: () => props$m.swiper.indicatorInactiveColor
      },
      // 指示器样式，可通过bottom，left，right进行定位
      indicatorStyle: {
        type: [String, Object],
        default: () => props$m.swiper.indicatorStyle
      },
      // 指示器模式，line-线型，dot-点型
      indicatorMode: {
        type: String,
        default: () => props$m.swiper.indicatorMode
      },
      // 是否自动切换
      autoplay: {
        type: Boolean,
        default: () => props$m.swiper.autoplay
      },
      // 当前所在滑块的 index
      current: {
        type: [String, Number],
        default: () => props$m.swiper.current
      },
      // 当前所在滑块的 item-id ，不能与 current 被同时指定
      currentItemId: {
        type: String,
        default: () => props$m.swiper.currentItemId
      },
      // 滑块自动切换时间间隔
      interval: {
        type: [String, Number],
        default: () => props$m.swiper.interval
      },
      // 滑块切换过程所需时间
      duration: {
        type: [String, Number],
        default: () => props$m.swiper.duration
      },
      // 播放到末尾后是否重新回到开头
      circular: {
        type: Boolean,
        default: () => props$m.swiper.circular
      },
      // 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持
      previousMargin: {
        type: [String, Number],
        default: () => props$m.swiper.previousMargin
      },
      // 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持
      nextMargin: {
        type: [String, Number],
        default: () => props$m.swiper.nextMargin
      },
      // 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持
      acceleration: {
        type: Boolean,
        default: () => props$m.swiper.acceleration
      },
      // 同时显示的滑块数量，nvue、支付宝小程序不支持
      displayMultipleItems: {
        type: Number,
        default: () => props$m.swiper.displayMultipleItems
      },
      // 指定swiper切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic
      // 只对微信小程序有效
      easingFunction: {
        type: String,
        default: () => props$m.swiper.easingFunction
      },
      // list数组中指定对象的目标属性名
      keyName: {
        type: String,
        default: () => props$m.swiper.keyName
      },
      // 图片的裁剪模式
      imgMode: {
        type: String,
        default: () => props$m.swiper.imgMode
      },
      // 组件高度
      height: {
        type: [String, Number],
        default: () => props$m.swiper.height
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: () => props$m.swiper.bgColor
      },
      // 组件圆角，数值或带单位的字符串
      radius: {
        type: [String, Number],
        default: () => props$m.swiper.radius
      },
      // 是否加载中
      loading: {
        type: Boolean,
        default: () => props$m.swiper.loading
      },
      // 是否显示标题，要求数组对象中有title属性
      showTitle: {
        type: Boolean,
        default: () => props$m.swiper.showTitle
      }
    }
  });
  const _sfc_main$o = {
    name: "u-swiper",
    mixins: [mpMixin, mixin, props$8],
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val, preVal) {
        if (val === preVal)
          return;
        this.currentIndex = val;
      }
    },
    emits: ["click", "change"],
    computed: {
      itemStyle() {
        return (index2) => {
          const style = {};
          if (this.nextMargin && this.previousMargin) {
            style.borderRadius = addUnit(this.radius);
            if (index2 !== this.currentIndex)
              style.transform = "scale(0.92)";
          }
          return style;
        };
      }
    },
    methods: {
      addStyle,
      addUnit,
      testObject: test.object,
      testImage: test.image,
      getItemType(item) {
        if (typeof item === "string")
          return test.video(this.getSource(item)) ? "video" : "image";
        if (typeof item === "object" && this.keyName) {
          if (!item.type)
            return test.video(this.getSource(item)) ? "video" : "image";
          if (item.type === "image")
            return "image";
          if (item.type === "video")
            return "video";
          return "image";
        }
      },
      // 获取目标路径，可能数组中为字符串，对象的形式，额外可指定对象的目标属性名keyName
      getSource(item) {
        if (typeof item === "string")
          return item;
        if (typeof item === "object" && this.keyName)
          return item[this.keyName];
        else
          error("请按格式传递列表参数");
        return "";
      },
      // 轮播切换事件
      change(e) {
        const {
          current
        } = e.detail;
        this.pauseVideo(this.currentIndex);
        this.currentIndex = current;
        this.$emit("change", e.detail);
      },
      // 切换轮播时，暂停视频播放
      pauseVideo(index2) {
        const lastItem = this.getSource(this.list[index2]);
        if (test.video(lastItem)) {
          const video2 = uni.createVideoContext(`video-${index2}`, this);
          video2.pause();
        }
      },
      // 当一个轮播item为视频时，获取它的视频海报
      getPoster(item) {
        return typeof item === "object" && item.poster ? item.poster : "";
      },
      // 点击某个item
      clickHandler(index2) {
        this.$emit("click", index2);
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_up_loading_icon = resolveEasycom(vue.resolveDynamicComponent("up-loading-icon"), __easycom_1$9);
    const _component_up_swiper_indicator = resolveEasycom(vue.resolveDynamicComponent("up-swiper-indicator"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-swiper",
        style: vue.normalizeStyle({
          backgroundColor: _ctx.bgColor,
          height: $options.addUnit(_ctx.height),
          borderRadius: $options.addUnit(_ctx.radius)
        })
      },
      [
        _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-swiper__loading"
        }, [
          vue.createVNode(_component_up_loading_icon, { mode: "circle" })
        ])) : (vue.openBlock(), vue.createElementBlock("swiper", {
          key: 1,
          class: "u-swiper__wrapper",
          style: vue.normalizeStyle({
            flex: "1",
            height: $options.addUnit(_ctx.height)
          }),
          onChange: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),
          circular: _ctx.circular,
          interval: _ctx.interval,
          duration: _ctx.duration,
          autoplay: _ctx.autoplay,
          current: _ctx.current,
          currentItemId: _ctx.currentItemId,
          previousMargin: $options.addUnit(_ctx.previousMargin),
          nextMargin: $options.addUnit(_ctx.nextMargin),
          acceleration: _ctx.acceleration,
          displayMultipleItems: _ctx.displayMultipleItems,
          easingFunction: _ctx.easingFunction
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(_ctx.list, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", {
                class: "u-swiper__wrapper__item",
                key: index2
              }, [
                vue.renderSlot(_ctx.$slots, "default", {
                  item,
                  index: index2
                }, () => [
                  vue.createElementVNode(
                    "view",
                    {
                      class: "u-swiper__wrapper__item__wrapper",
                      style: vue.normalizeStyle([$options.itemStyle(index2)])
                    },
                    [
                      vue.createCommentVNode(" 在nvue中，image图片的宽度默认为屏幕宽度，需要通过flex:1撑开，另外必须设置高度才能显示图片 "),
                      $options.getItemType(item) === "image" ? (vue.openBlock(), vue.createElementBlock("image", {
                        key: 0,
                        class: "u-swiper__wrapper__item__wrapper__image",
                        src: $options.getSource(item),
                        mode: _ctx.imgMode,
                        onClick: ($event) => $options.clickHandler(index2),
                        style: vue.normalizeStyle({
                          height: $options.addUnit(_ctx.height),
                          borderRadius: $options.addUnit(_ctx.radius)
                        })
                      }, null, 12, ["src", "mode", "onClick"])) : vue.createCommentVNode("v-if", true),
                      $options.getItemType(item) === "video" ? (vue.openBlock(), vue.createElementBlock("video", {
                        key: 1,
                        class: "u-swiper__wrapper__item__wrapper__video",
                        id: `video-${index2}`,
                        "enable-progress-gesture": false,
                        src: $options.getSource(item),
                        poster: $options.getPoster(item),
                        title: _ctx.showTitle && $options.testObject(item) && item.title ? item.title : "",
                        style: vue.normalizeStyle({
                          height: $options.addUnit(_ctx.height)
                        }),
                        controls: "",
                        onClick: ($event) => $options.clickHandler(index2)
                      }, null, 12, ["id", "src", "poster", "title", "onClick"])) : vue.createCommentVNode("v-if", true),
                      _ctx.showTitle && $options.testObject(item) && item.title && $options.testImage($options.getSource(item)) ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 2,
                        class: "u-swiper__wrapper__item__wrapper__title"
                      }, [
                        vue.createElementVNode(
                          "text",
                          { class: "u-line-1" },
                          vue.toDisplayString(item.title),
                          1
                          /* TEXT */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ],
                    4
                    /* STYLE */
                  )
                ], true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 44, ["circular", "interval", "duration", "autoplay", "current", "currentItemId", "previousMargin", "nextMargin", "acceleration", "displayMultipleItems", "easingFunction"])),
        vue.createElementVNode(
          "view",
          {
            class: "u-swiper__indicator",
            style: vue.normalizeStyle([$options.addStyle(_ctx.indicatorStyle)])
          },
          [
            vue.renderSlot(_ctx.$slots, "indicator", {}, () => [
              !_ctx.loading && _ctx.indicator && !_ctx.showTitle ? (vue.openBlock(), vue.createBlock(_component_up_swiper_indicator, {
                key: 0,
                indicatorActiveColor: _ctx.indicatorActiveColor,
                indicatorInactiveColor: _ctx.indicatorInactiveColor,
                length: _ctx.list.length,
                current: $data.currentIndex,
                indicatorMode: _ctx.indicatorMode
              }, null, 8, ["indicatorActiveColor", "indicatorInactiveColor", "length", "current", "indicatorMode"])) : vue.createCommentVNode("v-if", true)
            ], true)
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$d], ["__scopeId", "data-v-eda42115"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-swiper/u-swiper.vue"]]);
  const _sfc_main$n = {
    __name: "wiper",
    setup(__props) {
      const list1 = vue.reactive([
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper3.png"
      ]);
      return (_ctx, _cache) => {
        const _component_up_swiper = resolveEasycom(vue.resolveDynamicComponent("up-swiper"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createVNode(_component_up_swiper, {
            list: list1,
            indicator: "",
            indicatorMode: "line",
            circular: "",
            height: "500"
          }, null, 8, ["list"])
        ]);
      };
    }
  };
  const swiperindex = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-7b409e4b"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/swiper/wiper.vue"]]);
  const _sfc_main$m = {
    __name: "index",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createElementVNode("view", { class: "index-box" }, [
            vue.createVNode(titleset),
            vue.createVNode(swiperindex)
          ])
        ]);
      };
    }
  };
  const swiperset = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-70891abf"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/swiper/index.vue"]]);
  const _sfc_main$l = {};
  function _sfc_render$c(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
      vue.createElementVNode("view", { class: "index-box" }, [
        vue.createElementVNode("text", null, "文化生活")
      ])
    ]);
  }
  const indexboxset = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$c], ["__scopeId", "data-v-dd77d275"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/work/indexbox.vue"]]);
  const _sfc_main$k = {
    __name: "index",
    setup(__props) {
      const viewportWidth = vue.ref(0);
      vue.ref(0);
      vue.ref(0);
      const flexshow = vue.ref(false);
      const handleResize = () => {
        const FontSize = "16";
        viewportWidth.value = window.innerWidth;
        if (viewportWidth.value > 1e3) {
          flexshow.value = false;
          document.documentElement.style.fontSize = FontSize + "px";
        } else {
          flexshow.value = true;
          document.documentElement.style.fontSize = FontSize / 1 + "px";
        }
      };
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createElementVNode("view", { class: "index-box" }, [
            vue.createVNode(titleset),
            vue.createElementVNode(
              "view",
              {
                class: "indexbox-q",
                style: vue.normalizeStyle({ flexDirection: flexshow.value ? "column" : "row" })
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    class: "index-q-t",
                    style: vue.normalizeStyle({ width: flexshow.value ? "100%" : "24%" })
                  },
                  [
                    vue.createVNode(indexboxset)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "index-q-t",
                    style: vue.normalizeStyle({ width: flexshow.value ? "100%" : "24%" })
                  },
                  [
                    vue.createVNode(indexboxset)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "index-q-t",
                    style: vue.normalizeStyle({ width: flexshow.value ? "100%" : "24%" })
                  },
                  [
                    vue.createVNode(indexboxset)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "index-q-t",
                    style: vue.normalizeStyle({ width: flexshow.value ? "100%" : "24%" })
                  },
                  [
                    vue.createVNode(indexboxset)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ])
        ]);
      };
    }
  };
  const work = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-071b6350"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/work/index.vue"]]);
  const _sfc_main$j = {};
  function _sfc_render$b(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
      vue.createElementVNode("view", { class: "index-box" }, [
        vue.createElementVNode("view", { class: "index-box-left" }, [
          vue.createElementVNode("view", { class: "indexbox-title" }, [
            vue.createElementVNode("text", { class: "fs" }, "常见问题"),
            vue.createElementVNode("view", {
              class: "",
              style: { "color": "black", "display": "flex", "align-items": "center" }
            }, [
              vue.createElementVNode("text", null, "查看更多"),
              vue.createElementVNode("text", null, ">")
            ])
          ]),
          vue.createElementVNode("view", { class: "indexbox-title" }, [
            vue.createElementVNode("text", null, "加入观涛月入过万")
          ]),
          vue.createElementVNode("view", { class: "indexbox-title" }, [
            vue.createElementVNode("text", null, "加入观涛月入过万")
          ]),
          vue.createElementVNode("view", { class: "indexbox-title" }, [
            vue.createElementVNode("text", null, "加入观涛月入过万")
          ]),
          vue.createElementVNode("view", { class: "indexbox-title" }, [
            vue.createElementVNode("text", null, "加入观涛月入过万")
          ])
        ]),
        vue.createElementVNode("view", { class: "index-box-left" }, [
          vue.createElementVNode("view", { class: "indexbox-title" }, [
            vue.createElementVNode("text", { class: "fs" }, "常见问题"),
            vue.createElementVNode("view", {
              class: "",
              style: { "color": "black", "display": "flex", "align-items": "center" }
            }, [
              vue.createElementVNode("text", null, "查看更多"),
              vue.createElementVNode("text", null, ">")
            ])
          ]),
          vue.createElementVNode("view", { class: "indexbox-title" }, [
            vue.createElementVNode("text", null, "加入观涛月入过万"),
            vue.createElementVNode("text", null, "2024/9/29")
          ]),
          vue.createElementVNode("view", { class: "indexbox-title" }, [
            vue.createElementVNode("text", null, "加入观涛月入过万"),
            vue.createElementVNode("text", null, "2024/9/29")
          ]),
          vue.createElementVNode("view", { class: "indexbox-title" }, [
            vue.createElementVNode("text", null, "加入观涛月入过万"),
            vue.createElementVNode("text", null, "2024/9/29")
          ]),
          vue.createElementVNode("view", { class: "indexbox-title" }, [
            vue.createElementVNode("text", null, "加入观涛月入过万"),
            vue.createElementVNode("text", null, "2024/9/29")
          ])
        ])
      ])
    ]);
  }
  const indexpc = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$b], ["__scopeId", "data-v-c4a9a7af"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/giveserviceto/indexpc.vue"]]);
  const _sfc_main$i = {};
  function _sfc_render$a(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
      vue.createElementVNode("view", { class: "index-box" }, [
        vue.createElementVNode("view", { class: "indexbox-title" }, [
          vue.createElementVNode("text", null, "常见问题")
        ]),
        vue.createElementVNode("view", { class: "index-box-q" }, [
          vue.createElementVNode("view", { class: "index-name" }, [
            vue.createElementVNode("text", null, "加入观涛月入过万")
          ]),
          vue.createElementVNode("view", { class: "index-name" }, [
            vue.createElementVNode("text", null, "加入观涛月入过万")
          ]),
          vue.createElementVNode("view", { class: "index-name" }, [
            vue.createElementVNode("text", null, "加入观涛月入过万")
          ]),
          vue.createElementVNode("view", { class: "index-name" }, [
            vue.createElementVNode("text", null, "加入观涛月入过万")
          ])
        ])
      ])
    ]);
  }
  const indexapp = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$a], ["__scopeId", "data-v-13a1e6fd"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/giveserviceto/indexapp.vue"]]);
  const _sfc_main$h = {
    __name: "index",
    setup(__props) {
      const viewportWidth = vue.ref(0);
      const showset = vue.ref(false);
      const handleResize = () => {
        const FontSize = "16";
        viewportWidth.value = window.innerWidth;
        if (viewportWidth.value > 1e3) {
          document.documentElement.style.fontSize = FontSize + "px";
          showset.value = false;
        } else {
          showset.value = true;
          document.documentElement.style.fontSize = FontSize / 1 + "px";
        }
      };
      vue.onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
      });
      vue.onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.withDirectives(vue.createVNode(
            indexpc,
            null,
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, !showset.value]
          ]),
          vue.withDirectives(vue.createVNode(
            indexapp,
            null,
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, showset.value]
          ])
        ]);
      };
    }
  };
  const service = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-9842fb9b"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Joinus/giveserviceto/index.vue"]]);
  const _sfc_main$g = {
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
          formatAppLog("log", "at pages/Joinus/Joinus.vue:60", 2);
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
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Headnavigation = vue.resolveComponent("Headnavigation");
    const _component_Headnavigationto = vue.resolveComponent("Headnavigationto");
    const _component_videoset = vue.resolveComponent("videoset");
    const _component_centerbox = vue.resolveComponent("centerbox");
    const _component_swiperset = vue.resolveComponent("swiperset");
    const _component_work = vue.resolveComponent("work");
    const _component_service = vue.resolveComponent("service");
    const _component_foot = vue.resolveComponent("foot");
    return vue.openBlock(), vue.createElementBlock("view", { class: "Joinus" }, [
      vue.createVNode(vue.Transition, {
        name: "fade",
        persisted: ""
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createVNode(
            _component_Headnavigation,
            null,
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, !$data.isScrolled]
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(vue.Transition, {
        name: "fade",
        persisted: ""
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createVNode(
            _component_Headnavigationto,
            null,
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, $data.issindexto]
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode(
        "main",
        {
          onScroll: _cache[0] || (_cache[0] = (...args) => $options.handleScroll && $options.handleScroll(...args))
        },
        [
          vue.createVNode(_component_videoset),
          vue.createVNode(_component_centerbox),
          vue.createVNode(_component_swiperset),
          vue.createVNode(_component_work),
          vue.createVNode(_component_service),
          vue.createVNode(_component_foot)
        ],
        32
        /* NEED_HYDRATION */
      )
    ]);
  }
  const PagesJoinusJoinus = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$9], ["__scopeId", "data-v-a9aaff1d"], ["__file", "C:/Users/Administrator/Desktop/vue3/pages/Joinus/Joinus.vue"]]);
  const props$7 = defineMixin({
    props: {
      // input的label提示语
      label: {
        type: String,
        default: () => props$m.formItem.label
      },
      // 绑定的值
      prop: {
        type: String,
        default: () => props$m.formItem.prop
      },
      // 绑定的规则
      rules: {
        type: Array,
        default: () => props$m.formItem.rules
      },
      // 是否显示表单域的下划线边框
      borderBottom: {
        type: [String, Boolean],
        default: () => props$m.formItem.borderBottom
      },
      // label的位置，left-左边，top-上边
      labelPosition: {
        type: String,
        default: () => props$m.formItem.labelPosition
      },
      // label的宽度，单位px
      labelWidth: {
        type: [String, Number],
        default: () => props$m.formItem.labelWidth
      },
      // 右侧图标
      rightIcon: {
        type: String,
        default: () => props$m.formItem.rightIcon
      },
      // 左侧图标
      leftIcon: {
        type: String,
        default: () => props$m.formItem.leftIcon
      },
      // 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
      required: {
        type: Boolean,
        default: () => props$m.formItem.required
      },
      leftIconStyle: {
        type: [String, Object],
        default: () => props$m.formItem.leftIconStyle
      }
    }
  });
  const _sfc_main$f = {
    name: "u-form-item",
    mixins: [mpMixin, mixin, props$7],
    data() {
      return {
        // 错误提示语
        message: "",
        parentData: {
          // 提示文本的位置
          labelPosition: "left",
          // 提示文本对齐方式
          labelAlign: "left",
          // 提示文本的样式
          labelStyle: {},
          // 提示文本的宽度
          labelWidth: 45,
          // 错误提示方式
          errorType: "message"
        },
        color,
        itemRules: []
      };
    },
    // 组件创建完成时，将当前实例保存到u-form中
    computed: {
      propsLine() {
        return props$m.line;
      }
    },
    mounted() {
      this.init();
    },
    emits: ["click"],
    watch: {
      // 监听规则的变化
      rules: {
        immediate: true,
        handler(n) {
          this.setRules(n);
        }
      }
    },
    methods: {
      addStyle,
      addUnit,
      init() {
        this.updateParentData();
        if (!this.parent) {
          error("u-form-item需要结合u-form组件使用");
        }
      },
      // 手动设置校验的规则，如果规则中有函数的话，微信小程序中会过滤掉，所以只能手动调用设置规则
      setRules(rules2) {
        if (rules2.length === 0) {
          this.itemRules = [];
          return;
        }
        this.itemRules = rules2;
      },
      // 获取父组件的参数
      updateParentData() {
        this.getParentData("u-form");
      },
      // 移除u-form-item的校验结果
      clearValidate() {
        this.message = null;
      },
      // 清空当前的组件的校验结果，并重置为初始值
      resetField() {
        const value2 = getProperty(this.parent.originalModel, this.prop);
        setProperty(this.parent.model, this.prop, value2);
        this.message = null;
      },
      // 点击组件
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_1$7);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-form-item", { "u-form-item--error": !!$data.message && $data.parentData.errorType === "message" }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: "u-form-item__body",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
            style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle), {
              flexDirection: (_ctx.labelPosition || $data.parentData.labelPosition) === "left" ? "row" : "column"
            }])
          },
          [
            vue.createCommentVNode(' 微信小程序中，将一个参数设置空字符串，结果会变成字符串"true" '),
            vue.renderSlot(_ctx.$slots, "label", {}, () => [
              vue.createCommentVNode(" {{required}} "),
              _ctx.required || _ctx.leftIcon || _ctx.label ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "u-form-item__body__left",
                  style: vue.normalizeStyle({
                    width: $options.addUnit(_ctx.labelWidth || $data.parentData.labelWidth),
                    marginBottom: $data.parentData.labelPosition === "left" ? 0 : "5px"
                  })
                },
                [
                  vue.createCommentVNode(" 为了块对齐 "),
                  vue.createElementVNode("view", { class: "u-form-item__body__left__content" }, [
                    vue.createCommentVNode(" nvue不支持伪元素before "),
                    _ctx.required ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "u-form-item__body__left__content__required"
                    }, "*")) : vue.createCommentVNode("v-if", true),
                    _ctx.leftIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "u-form-item__body__left__content__icon"
                    }, [
                      vue.createVNode(_component_u_icon, {
                        name: _ctx.leftIcon,
                        "custom-style": _ctx.leftIconStyle
                      }, null, 8, ["name", "custom-style"])
                    ])) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "u-form-item__body__left__content__label",
                        style: vue.normalizeStyle([$data.parentData.labelStyle, {
                          justifyContent: $data.parentData.labelAlign === "left" ? "flex-start" : $data.parentData.labelAlign === "center" ? "center" : "flex-end"
                        }])
                      },
                      vue.toDisplayString(_ctx.label),
                      5
                      /* TEXT, STYLE */
                    )
                  ])
                ],
                4
                /* STYLE */
              )) : vue.createCommentVNode("v-if", true)
            ], true),
            vue.createElementVNode("view", { class: "u-form-item__body__right" }, [
              vue.createElementVNode("view", { class: "u-form-item__body__right__content" }, [
                vue.createElementVNode("view", { class: "u-form-item__body__right__content__slot" }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                _ctx.$slots.right ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "item__body__right__content__icon"
                }, [
                  vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
                ])) : vue.createCommentVNode("v-if", true)
              ])
            ])
          ],
          4
          /* STYLE */
        ),
        vue.renderSlot(_ctx.$slots, "error", {}, () => [
          !!$data.message && $data.parentData.errorType === "message" ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              class: "u-form-item__body__right__message",
              style: vue.normalizeStyle({
                marginLeft: $options.addUnit($data.parentData.labelPosition === "top" ? 0 : _ctx.labelWidth || $data.parentData.labelWidth)
              })
            },
            vue.toDisplayString($data.message),
            5
            /* TEXT, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ], true),
        _ctx.borderBottom ? (vue.openBlock(), vue.createBlock(_component_u_line, {
          key: 0,
          color: $data.message && $data.parentData.errorType === "border-bottom" ? $data.color.error : $options.propsLine.color,
          customStyle: `margin-top: ${$data.message && $data.parentData.errorType === "message" ? "5px" : 0}`
        }, null, 8, ["color", "customStyle"])) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$8], ["__scopeId", "data-v-b4fd400b"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-form-item/u-form-item.vue"]]);
  const props$6 = defineMixin({
    props: {
      // 绑定的值
      modelValue: {
        type: [String, Number],
        default: () => props$m.input.value
      },
      // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
      // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
      // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
      // text-文本输入键盘
      type: {
        type: String,
        default: () => props$m.input.type
      },
      // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
      // 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
      fixed: {
        type: Boolean,
        default: () => props$m.input.fixed
      },
      // 是否禁用输入框
      disabled: {
        type: Boolean,
        default: () => props$m.input.disabled
      },
      // 禁用状态时的背景色
      disabledColor: {
        type: String,
        default: () => props$m.input.disabledColor
      },
      // 是否显示清除控件
      clearable: {
        type: Boolean,
        default: () => props$m.input.clearable
      },
      // 是否密码类型
      password: {
        type: Boolean,
        default: () => props$m.input.password
      },
      // 最大输入长度，设置为 -1 的时候不限制最大长度
      maxlength: {
        type: [String, Number],
        default: () => props$m.input.maxlength
      },
      // 	输入框为空时的占位符
      placeholder: {
        type: String,
        default: () => props$m.input.placeholder
      },
      // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
      placeholderClass: {
        type: String,
        default: () => props$m.input.placeholderClass
      },
      // 指定placeholder的样式
      placeholderStyle: {
        type: [String, Object],
        default: () => props$m.input.placeholderStyle
      },
      // 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
      showWordLimit: {
        type: Boolean,
        default: () => props$m.input.showWordLimit
      },
      // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
      // https://uniapp.dcloud.io/component/input
      // https://uniapp.dcloud.io/component/textarea
      confirmType: {
        type: String,
        default: () => props$m.input.confirmType
      },
      // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
      confirmHold: {
        type: Boolean,
        default: () => props$m.input.confirmHold
      },
      // focus时，点击页面的时候不收起键盘，微信小程序有效
      holdKeyboard: {
        type: Boolean,
        default: () => props$m.input.holdKeyboard
      },
      // 自动获取焦点
      // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
      focus: {
        type: Boolean,
        default: () => props$m.input.focus
      },
      // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
      autoBlur: {
        type: Boolean,
        default: () => props$m.input.autoBlur
      },
      // 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
      disableDefaultPadding: {
        type: Boolean,
        default: () => props$m.input.disableDefaultPadding
      },
      // 指定focus时光标的位置
      cursor: {
        type: [String, Number],
        default: () => props$m.input.cursor
      },
      // 输入框聚焦时底部与键盘的距离
      cursorSpacing: {
        type: [String, Number],
        default: () => props$m.input.cursorSpacing
      },
      // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
      selectionStart: {
        type: [String, Number],
        default: () => props$m.input.selectionStart
      },
      // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
      selectionEnd: {
        type: [String, Number],
        default: () => props$m.input.selectionEnd
      },
      // 键盘弹起时，是否自动上推页面
      adjustPosition: {
        type: Boolean,
        default: () => props$m.input.adjustPosition
      },
      // 输入框内容对齐方式，可选值为：left|center|right
      inputAlign: {
        type: String,
        default: () => props$m.input.inputAlign
      },
      // 输入框字体的大小
      fontSize: {
        type: [String, Number],
        default: () => props$m.input.fontSize
      },
      // 输入框字体颜色
      color: {
        type: String,
        default: () => props$m.input.color
      },
      // 输入框前置图标
      prefixIcon: {
        type: String,
        default: () => props$m.input.prefixIcon
      },
      // 前置图标样式，对象或字符串
      prefixIconStyle: {
        type: [String, Object],
        default: () => props$m.input.prefixIconStyle
      },
      // 输入框后置图标
      suffixIcon: {
        type: String,
        default: () => props$m.input.suffixIcon
      },
      // 后置图标样式，对象或字符串
      suffixIconStyle: {
        type: [String, Object],
        default: () => props$m.input.suffixIconStyle
      },
      // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
      border: {
        type: String,
        default: () => props$m.input.border
      },
      // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
      readonly: {
        type: Boolean,
        default: () => props$m.input.readonly
      },
      // 输入框形状，circle-圆形，square-方形
      shape: {
        type: String,
        default: () => props$m.input.shape
      },
      // 用于处理或者过滤输入框内容的方法
      formatter: {
        type: [Function, null],
        default: () => props$m.input.formatter
      },
      // 是否忽略组件内对文本合成系统事件的处理
      ignoreCompositionEvent: {
        type: Boolean,
        default: true
      }
    }
  });
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  const _sfc_main$e = {
    name: "u-input",
    mixins: [mpMixin, mixin, props$6],
    data() {
      return {
        // 清除操作
        clearInput: false,
        // 输入框的值
        innerValue: "",
        // 是否处于获得焦点状态
        focused: false,
        // value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
        firstChange: true,
        // value绑定值的变化是由内部还是外部引起的
        changeFromInner: false,
        // 过滤处理方法
        innerFormatter: (value2) => value2
      };
    },
    created() {
      if (this.formatter) {
        this.innerFormatter = this.formatter;
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal, oldVal) {
          if (this.changeFromInner || this.innerValue === newVal) {
            this.changeFromInner = false;
            return;
          }
          this.innerValue = newVal;
          if (this.firstChange === false && this.changeFromInner === false) {
            this.valueChange(this.innerValue, true);
          } else {
            if (!this.firstChange)
              formValidate(this, "change");
          }
          this.firstChange = false;
          this.changeFromInner = false;
        }
      }
    },
    computed: {
      // 是否显示清除控件
      isShowClear() {
        const { clearable, readonly, focused, innerValue } = this;
        return !!clearable && !readonly && !!focused && innerValue !== "";
      },
      // 组件的类名
      inputClass() {
        let classes = [], { border, disabled, shape } = this;
        border === "surround" && (classes = classes.concat(["u-border", "u-input--radius"]));
        classes.push(`u-input--${shape}`);
        border === "bottom" && (classes = classes.concat([
          "u-border-bottom",
          "u-input--no-radius"
        ]));
        return classes.join(" ");
      },
      // 组件的样式
      wrapperStyle() {
        const style = {};
        if (this.disabled) {
          style.backgroundColor = this.disabledColor;
        }
        if (this.border === "none") {
          style.padding = "0";
        } else {
          style.paddingTop = "6px";
          style.paddingBottom = "6px";
          style.paddingLeft = "9px";
          style.paddingRight = "9px";
        }
        return deepMerge$2(style, addStyle(this.customStyle));
      },
      // 输入框的样式
      inputStyle() {
        const style = {
          color: this.color,
          fontSize: addUnit(this.fontSize),
          textAlign: this.inputAlign
        };
        return style;
      }
    },
    emits: ["update:modelValue", "focus", "blur", "change", "confirm", "clear", "keyboardheightchange"],
    methods: {
      // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
      setFormatter(e) {
        this.innerFormatter = e;
      },
      // 当键盘输入时，触发input事件
      onInput(e) {
        let { value: value2 = "" } = e.detail || {};
        this.innerValue = value2;
        this.$nextTick(() => {
          let formatValue = this.innerFormatter(value2);
          this.innerValue = formatValue;
          this.valueChange(formatValue);
        });
      },
      // 输入框失去焦点时触发
      onBlur(event) {
        this.$emit("blur", event.detail.value);
        sleep(150).then(() => {
          this.focused = false;
        });
        formValidate(this, "blur");
      },
      // 输入框聚焦时触发
      onFocus(event) {
        this.focused = true;
        this.$emit("focus");
      },
      doFocus() {
        this.$refs["input-native"].focus();
      },
      doBlur() {
        this.$refs["input-native"].blur();
      },
      // 点击完成按钮时触发
      onConfirm(event) {
        this.$emit("confirm", this.innerValue);
      },
      // 键盘高度发生变化的时候触发此事件
      // 兼容性：微信小程序2.7.0+、App 3.1.0+
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      // 内容发生变化，进行处理
      valueChange(value2, isOut = false) {
        if (this.clearInput) {
          this.innerValue = "";
          this.clearInput = false;
        }
        this.$nextTick(() => {
          if (!isOut || this.clearInput) {
            this.changeFromInner = true;
            this.$emit("change", value2);
            this.$emit("update:modelValue", value2);
          }
          formValidate(this, "change");
        });
      },
      // 点击清除控件
      onClear() {
        this.clearInput = true;
        this.innerValue = "";
        this.$nextTick(() => {
          this.valueChange("");
          this.$emit("clear");
        });
      },
      /**
       * 在安卓nvue上，事件无法冒泡
       * 在某些时间，我们希望监听u-from-item的点击事件，此时会导致点击u-form-item内的u-input后
       * 无法触发u-form-item的点击事件，这里通过手动调用u-form-item的方法进行触发
       */
      clickHandler() {
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-input", $options.inputClass]),
        style: vue.normalizeStyle([$options.wrapperStyle])
      },
      [
        vue.createElementVNode("view", { class: "u-input__content" }, [
          _ctx.prefixIcon || _ctx.$slots.prefix ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "u-input__content__prefix-icon"
          }, [
            vue.renderSlot(_ctx.$slots, "prefix", {}, () => [
              vue.createVNode(_component_u_icon, {
                name: _ctx.prefixIcon,
                size: "18",
                customStyle: _ctx.prefixIconStyle
              }, null, 8, ["name", "customStyle"])
            ], true)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", {
            class: "u-input__content__field-wrapper",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.clickHandler && $options.clickHandler(...args))
          }, [
            vue.createCommentVNode(" 根据uni-app的input组件文档，H5和APP中只要声明了password参数(无论true还是false)，type均失效，此时\n					为了防止type=number时，又存在password属性，type无效，此时需要设置password为undefined\n				 "),
            vue.createElementVNode("input", {
              ref: "input-native",
              class: "u-input__content__field-wrapper__field",
              style: vue.normalizeStyle([$options.inputStyle]),
              type: _ctx.type,
              focus: _ctx.focus,
              cursor: _ctx.cursor,
              value: $data.innerValue,
              "auto-blur": _ctx.autoBlur,
              disabled: _ctx.disabled || _ctx.readonly,
              maxlength: _ctx.maxlength,
              placeholder: _ctx.placeholder,
              "placeholder-style": _ctx.placeholderStyle,
              "placeholder-class": _ctx.placeholderClass,
              "confirm-type": _ctx.confirmType,
              "confirm-hold": _ctx.confirmHold,
              "hold-keyboard": _ctx.holdKeyboard,
              "cursor-spacing": _ctx.cursorSpacing,
              "adjust-position": _ctx.adjustPosition,
              "selection-end": _ctx.selectionEnd,
              "selection-start": _ctx.selectionStart,
              password: _ctx.password || _ctx.type === "password" || false,
              ignoreCompositionEvent: _ctx.ignoreCompositionEvent,
              onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
              onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
              onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[4] || (_cache[4] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "focus", "cursor", "value", "auto-blur", "disabled", "maxlength", "placeholder", "placeholder-style", "placeholder-class", "confirm-type", "confirm-hold", "hold-keyboard", "cursor-spacing", "adjust-position", "selection-end", "selection-start", "password", "ignoreCompositionEvent"])
          ]),
          $options.isShowClear ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "u-input__content__clear",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.onClear && $options.onClear(...args))
          }, [
            vue.createVNode(_component_u_icon, {
              name: "close",
              size: "11",
              color: "#ffffff",
              customStyle: "line-height: 12px"
            })
          ])) : vue.createCommentVNode("v-if", true),
          _ctx.suffixIcon || _ctx.$slots.suffix ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "u-input__content__subfix-icon"
          }, [
            vue.renderSlot(_ctx.$slots, "suffix", {}, () => [
              vue.createVNode(_component_u_icon, {
                name: _ctx.suffixIcon,
                size: "18",
                customStyle: _ctx.suffixIconStyle
              }, null, 8, ["name", "customStyle"])
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$7], ["__scopeId", "data-v-5904192e"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-input/u-input.vue"]]);
  const props$5 = defineMixin({
    props: {
      // 当前form的需要验证字段的集合
      model: {
        type: Object,
        default: () => props$m.form.model
      },
      // 验证规则
      rules: {
        type: [Object, Function, Array],
        default: () => props$m.form.rules
      },
      // 有错误时的提示方式，message-提示信息，toast-进行toast提示
      // border-bottom-下边框呈现红色，none-无提示
      errorType: {
        type: String,
        default: () => props$m.form.errorType
      },
      // 是否显示表单域的下划线边框
      borderBottom: {
        type: Boolean,
        default: () => props$m.form.borderBottom
      },
      // label的位置，left-左边，top-上边
      labelPosition: {
        type: String,
        default: () => props$m.form.labelPosition
      },
      // label的宽度，单位px
      labelWidth: {
        type: [String, Number],
        default: () => props$m.form.labelWidth
      },
      // lable字体的对齐方式
      labelAlign: {
        type: String,
        default: () => props$m.form.labelAlign
      },
      // lable的样式，对象形式
      labelStyle: {
        type: Object,
        default: () => props$m.form.labelStyle
      }
    }
  });
  var define_process_env_default = {};
  const formatRegExp = /%[sdj%]/g;
  let warning = function warning2() {
  };
  if (typeof process !== "undefined" && define_process_env_default && true && typeof window !== "undefined" && typeof document !== "undefined") {
    warning = function warning3(type2, errors) {
      if (typeof console !== "undefined" && console.warn) {
        if (errors.every((e) => typeof e === "string")) {
          formatAppLog("warn", "at node_modules/uview-plus/libs/util/async-validator.js:28", type2, errors);
        }
      }
    };
  }
  function convertFieldsError(errors) {
    if (!errors || !errors.length)
      return null;
    const fields = {};
    errors.forEach((error2) => {
      const { field } = error2;
      fields[field] = fields[field] || [];
      fields[field].push(error2);
    });
    return fields;
  }
  function format() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    let i = 1;
    const f = args[0];
    const len = args.length;
    if (typeof f === "function") {
      return f.apply(null, args.slice(1));
    }
    if (typeof f === "string") {
      let str = String(f).replace(formatRegExp, (x) => {
        if (x === "%%") {
          return "%";
        }
        if (i >= len) {
          return x;
        }
        switch (x) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
            break;
          default:
            return x;
        }
      });
      for (let arg = args[i]; i < len; arg = args[++i]) {
        str += ` ${arg}`;
      }
      return str;
    }
    return f;
  }
  function isNativeStringType(type2) {
    return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "pattern";
  }
  function isEmptyValue(value2, type2) {
    if (value2 === void 0 || value2 === null) {
      return true;
    }
    if (type2 === "array" && Array.isArray(value2) && !value2.length) {
      return true;
    }
    if (isNativeStringType(type2) && typeof value2 === "string" && !value2) {
      return true;
    }
    return false;
  }
  function asyncParallelArray(arr, func2, callback) {
    const results = [];
    let total = 0;
    const arrLength = arr.length;
    function count(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === arrLength) {
        callback(results);
      }
    }
    arr.forEach((a) => {
      func2(a, count);
    });
  }
  function asyncSerialArray(arr, func2, callback) {
    let index2 = 0;
    const arrLength = arr.length;
    function next(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }
      const original = index2;
      index2 += 1;
      if (original < arrLength) {
        func2(arr[original], next);
      } else {
        callback([]);
      }
    }
    next([]);
  }
  function flattenObjArr(objArr) {
    const ret = [];
    Object.keys(objArr).forEach((k) => {
      ret.push.apply(ret, objArr[k]);
    });
    return ret;
  }
  function asyncMap(objArr, option, func2, callback) {
    if (option.first) {
      const _pending = new Promise((resolve, reject) => {
        const next = function next2(errors) {
          callback(errors);
          return errors.length ? reject({
            errors,
            fields: convertFieldsError(errors)
          }) : resolve();
        };
        const flattenArr = flattenObjArr(objArr);
        asyncSerialArray(flattenArr, func2, next);
      });
      _pending.catch((e) => e);
      return _pending;
    }
    let firstFields = option.firstFields || [];
    if (firstFields === true) {
      firstFields = Object.keys(objArr);
    }
    const objArrKeys = Object.keys(objArr);
    const objArrLength = objArrKeys.length;
    let total = 0;
    const results = [];
    const pending = new Promise((resolve, reject) => {
      const next = function next2(errors) {
        results.push.apply(results, errors);
        total++;
        if (total === objArrLength) {
          callback(results);
          return results.length ? reject({
            errors: results,
            fields: convertFieldsError(results)
          }) : resolve();
        }
      };
      if (!objArrKeys.length) {
        callback(results);
        resolve();
      }
      objArrKeys.forEach((key) => {
        const arr = objArr[key];
        if (firstFields.indexOf(key) !== -1) {
          asyncSerialArray(arr, func2, next);
        } else {
          asyncParallelArray(arr, func2, next);
        }
      });
    });
    pending.catch((e) => e);
    return pending;
  }
  function complementError(rule) {
    return function(oe) {
      if (oe && oe.message) {
        oe.field = oe.field || rule.fullField;
        return oe;
      }
      return {
        message: typeof oe === "function" ? oe() : oe,
        field: oe.field || rule.fullField
      };
    };
  }
  function deepMerge$1(target, source) {
    if (source) {
      for (const s in source) {
        if (source.hasOwnProperty(s)) {
          const value2 = source[s];
          if (typeof value2 === "object" && typeof target[s] === "object") {
            target[s] = { ...target[s], ...value2 };
          } else {
            target[s] = value2;
          }
        }
      }
    }
    return target;
  }
  function required(rule, value2, source, errors, options, type2) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value2, type2 || rule.type))) {
      errors.push(format(options.messages.required, rule.fullField));
    }
  }
  function whitespace(rule, value2, source, errors, options) {
    if (/^\s+$/.test(value2) || value2 === "") {
      errors.push(format(options.messages.whitespace, rule.fullField));
    }
  }
  const pattern = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var types = {
    integer: function integer(value2) {
      return /^(-)?\d+$/.test(value2);
    },
    float: function float(value2) {
      return /^(-)?\d+(\.\d+)?$/.test(value2);
    },
    array: function array3(value2) {
      return Array.isArray(value2);
    },
    regexp: function regexp(value2) {
      if (value2 instanceof RegExp) {
        return true;
      }
      try {
        return !!new RegExp(value2);
      } catch (e) {
        return false;
      }
    },
    date: function date3(value2) {
      return typeof value2.getTime === "function" && typeof value2.getMonth === "function" && typeof value2.getYear === "function";
    },
    number: function number3(value2) {
      if (isNaN(value2)) {
        return false;
      }
      return typeof +value2 === "number";
    },
    object: function object3(value2) {
      return typeof value2 === "object" && !types.array(value2);
    },
    method: function method(value2) {
      return typeof value2 === "function";
    },
    email: function email2(value2) {
      return typeof value2 === "string" && !!value2.match(pattern.email) && value2.length < 255;
    },
    url: function url2(value2) {
      return typeof value2 === "string" && !!value2.match(pattern.url);
    },
    hex: function hex(value2) {
      return typeof value2 === "string" && !!value2.match(pattern.hex);
    }
  };
  function type(rule, value2, source, errors, options) {
    if (rule.required && value2 === void 0) {
      required(rule, value2, source, errors, options);
      return;
    }
    const custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
    const ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
      if (!types[ruleType](value2)) {
        errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
      }
    } else if (ruleType && typeof value2 !== rule.type) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  }
  function range(rule, value2, source, errors, options) {
    const len = typeof rule.len === "number";
    const min = typeof rule.min === "number";
    const max = typeof rule.max === "number";
    const spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    let val = value2;
    let key = null;
    const num = typeof value2 === "number";
    const str = typeof value2 === "string";
    const arr = Array.isArray(value2);
    if (num) {
      key = "number";
    } else if (str) {
      key = "string";
    } else if (arr) {
      key = "array";
    }
    if (!key) {
      return false;
    }
    if (arr) {
      val = value2.length;
    }
    if (str) {
      val = value2.replace(spRegexp, "_").length;
    }
    if (len) {
      if (val !== rule.len) {
        errors.push(format(options.messages[key].len, rule.fullField, rule.len));
      }
    } else if (min && !max && val < rule.min) {
      errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    } else if (max && !min && val > rule.max) {
      errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    } else if (min && max && (val < rule.min || val > rule.max)) {
      errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
    }
  }
  const ENUM = "enum";
  function enumerable(rule, value2, source, errors, options) {
    rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
    if (rule[ENUM].indexOf(value2) === -1) {
      errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
    }
  }
  function pattern$1(rule, value2, source, errors, options) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        rule.pattern.lastIndex = 0;
        if (!rule.pattern.test(value2)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value2, rule.pattern));
        }
      } else if (typeof rule.pattern === "string") {
        const _pattern = new RegExp(rule.pattern);
        if (!_pattern.test(value2)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value2, rule.pattern));
        }
      }
    }
  }
  const rules = {
    required,
    whitespace,
    type,
    range,
    enum: enumerable,
    pattern: pattern$1
  };
  function string(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options, "string");
      if (!isEmptyValue(value2, "string")) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
        rules.pattern(rule, value2, source, errors, options);
        if (rule.whitespace === true) {
          rules.whitespace(rule, value2, source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function method2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function number2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (value2 === "") {
        value2 = void 0;
      }
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function _boolean(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function regexp2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (!isEmptyValue(value2)) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function integer2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function floatFn(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function array2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2, "array") && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options, "array");
      if (!isEmptyValue(value2, "array")) {
        rules.type(rule, value2, source, errors, options);
        rules.range(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function object2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  const ENUM$1 = "enum";
  function enumerable$1(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (value2 !== void 0) {
        rules[ENUM$1](rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function pattern$2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (!isEmptyValue(value2, "string")) {
        rules.pattern(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function date2(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
      if (!isEmptyValue(value2)) {
        let dateObject;
        if (typeof value2 === "number") {
          dateObject = new Date(value2);
        } else {
          dateObject = value2;
        }
        rules.type(rule, dateObject, source, errors, options);
        if (dateObject) {
          rules.range(rule, dateObject.getTime(), source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function required$1(rule, value2, callback, source, options) {
    const errors = [];
    const type2 = Array.isArray(value2) ? "array" : typeof value2;
    rules.required(rule, value2, source, errors, options, type2);
    callback(errors);
  }
  function type$1(rule, value2, callback, source, options) {
    const ruleType = rule.type;
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2, ruleType) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options, ruleType);
      if (!isEmptyValue(value2, ruleType)) {
        rules.type(rule, value2, source, errors, options);
      }
    }
    callback(errors);
  }
  function any(rule, value2, callback, source, options) {
    const errors = [];
    const validate2 = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate2) {
      if (isEmptyValue(value2) && !rule.required) {
        return callback();
      }
      rules.required(rule, value2, source, errors, options);
    }
    callback(errors);
  }
  const validators = {
    string,
    method: method2,
    number: number2,
    boolean: _boolean,
    regexp: regexp2,
    integer: integer2,
    float: floatFn,
    array: array2,
    object: object2,
    enum: enumerable$1,
    pattern: pattern$2,
    date: date2,
    url: type$1,
    hex: type$1,
    email: type$1,
    required: required$1,
    any
  };
  function newMessages() {
    return {
      default: "Validation error on field %s",
      required: "%s is required",
      enum: "%s must be one of %s",
      whitespace: "%s cannot be empty",
      date: {
        format: "%s date %s is invalid for format %s",
        parse: "%s date could not be parsed, %s is invalid ",
        invalid: "%s date %s is invalid"
      },
      types: {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        date: "%s is not a %s",
        boolean: "%s is not a %s",
        integer: "%s is not an %s",
        float: "%s is not a %s",
        regexp: "%s is not a valid %s",
        email: "%s is not a valid %s",
        url: "%s is not a valid %s",
        hex: "%s is not a valid %s"
      },
      string: {
        len: "%s must be exactly %s characters",
        min: "%s must be at least %s characters",
        max: "%s cannot be longer than %s characters",
        range: "%s must be between %s and %s characters"
      },
      number: {
        len: "%s must equal %s",
        min: "%s cannot be less than %s",
        max: "%s cannot be greater than %s",
        range: "%s must be between %s and %s"
      },
      array: {
        len: "%s must be exactly %s in length",
        min: "%s cannot be less than %s in length",
        max: "%s cannot be greater than %s in length",
        range: "%s must be between %s and %s in length"
      },
      pattern: {
        mismatch: "%s value %s does not match pattern %s"
      },
      clone: function clone2() {
        const cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  const messages = newMessages();
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  Schema.prototype = {
    messages: function messages2(_messages) {
      if (_messages) {
        this._messages = deepMerge$1(newMessages(), _messages);
      }
      return this._messages;
    },
    define: function define(rules2) {
      if (!rules2) {
        throw new Error("Cannot configure a schema with no rules");
      }
      if (typeof rules2 !== "object" || Array.isArray(rules2)) {
        throw new Error("Rules must be an object");
      }
      this.rules = {};
      let z;
      let item;
      for (z in rules2) {
        if (rules2.hasOwnProperty(z)) {
          item = rules2[z];
          this.rules[z] = Array.isArray(item) ? item : [item];
        }
      }
    },
    validate: function validate(source_, o, oc) {
      const _this = this;
      if (o === void 0) {
        o = {};
      }
      if (oc === void 0) {
        oc = function oc2() {
        };
      }
      let source = source_;
      let options = o;
      let callback = oc;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback();
        }
        return Promise.resolve();
      }
      function complete(results) {
        let i;
        let errors = [];
        let fields = {};
        function add(e) {
          if (Array.isArray(e)) {
            let _errors;
            errors = (_errors = errors).concat.apply(_errors, e);
          } else {
            errors.push(e);
          }
        }
        for (i = 0; i < results.length; i++) {
          add(results[i]);
        }
        if (!errors.length) {
          errors = null;
          fields = null;
        } else {
          fields = convertFieldsError(errors);
        }
        callback(errors, fields);
      }
      if (options.messages) {
        let messages$1 = this.messages();
        if (messages$1 === messages) {
          messages$1 = newMessages();
        }
        deepMerge$1(messages$1, options.messages);
        options.messages = messages$1;
      } else {
        options.messages = this.messages();
      }
      let arr;
      let value2;
      const series = {};
      const keys = options.keys || Object.keys(this.rules);
      keys.forEach((z) => {
        arr = _this.rules[z];
        value2 = source[z];
        arr.forEach((r) => {
          let rule = r;
          if (typeof rule.transform === "function") {
            if (source === source_) {
              source = { ...source };
            }
            value2 = source[z] = rule.transform(value2);
          }
          if (typeof rule === "function") {
            rule = {
              validator: rule
            };
          } else {
            rule = { ...rule };
          }
          rule.validator = _this.getValidationMethod(rule);
          rule.field = z;
          rule.fullField = rule.fullField || z;
          rule.type = _this.getType(rule);
          if (!rule.validator) {
            return;
          }
          series[z] = series[z] || [];
          series[z].push({
            rule,
            value: value2,
            source,
            field: z
          });
        });
      });
      const errorFields = {};
      return asyncMap(series, options, (data, doIt) => {
        const { rule } = data;
        let deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullfield(key, schema) {
          return { ...schema, fullField: `${rule.fullField}.${key}` };
        }
        function cb(e) {
          if (e === void 0) {
            e = [];
          }
          let errors = e;
          if (!Array.isArray(errors)) {
            errors = [errors];
          }
          if (!options.suppressWarning && errors.length) {
            Schema.warning("async-validator:", errors);
          }
          if (errors.length && rule.message) {
            errors = [].concat(rule.message);
          }
          errors = errors.map(complementError(rule));
          if (options.first && errors.length) {
            errorFields[rule.field] = 1;
            return doIt(errors);
          }
          if (!deep) {
            doIt(errors);
          } else {
            if (rule.required && !data.value) {
              if (rule.message) {
                errors = [].concat(rule.message).map(complementError(rule));
              } else if (options.error) {
                errors = [options.error(rule, format(options.messages.required, rule.field))];
              } else {
                errors = [];
              }
              return doIt(errors);
            }
            let fieldsSchema = {};
            if (rule.defaultField) {
              for (const k in data.value) {
                if (data.value.hasOwnProperty(k)) {
                  fieldsSchema[k] = rule.defaultField;
                }
              }
            }
            fieldsSchema = { ...fieldsSchema, ...data.rule.fields };
            for (const f in fieldsSchema) {
              if (fieldsSchema.hasOwnProperty(f)) {
                const fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
                fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
              }
            }
            const schema = new Schema(fieldsSchema);
            schema.messages(options.messages);
            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }
            schema.validate(data.value, data.rule.options || options, (errs) => {
              const finalErrors = [];
              if (errors && errors.length) {
                finalErrors.push.apply(finalErrors, errors);
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, errs);
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        let res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          res = rule.validator(rule, data.value, cb, data.source, options);
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(rule.message || `${rule.field} fails`);
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(() => cb(), (e) => cb(e));
        }
      }, (results) => {
        complete(results);
      });
    },
    getType: function getType(rule) {
      if (rule.type === void 0 && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
      }
      if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
        throw new Error(format("Unknown rule type %s", rule.type));
      }
      return rule.type || "string";
    },
    getValidationMethod: function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      const keys = Object.keys(rule);
      const messageIndex = keys.indexOf("message");
      if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
      }
      if (keys.length === 1 && keys[0] === "required") {
        return validators.required;
      }
      return validators[this.getType(rule)] || false;
    }
  };
  Schema.register = function register(type2, validator) {
    if (typeof validator !== "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    validators[type2] = validator;
  };
  Schema.warning = warning;
  Schema.messages = messages;
  Schema.warning = function() {
  };
  const _sfc_main$d = {
    name: "u-form",
    mixins: [mpMixin, mixin, props$5],
    provide() {
      return {
        uForm: this
      };
    },
    data() {
      return {
        formRules: {},
        // 规则校验器
        validator: {},
        // 原始的model快照，用于resetFields方法重置表单时使用
        originalModel: null
      };
    },
    watch: {
      // 监听规则的变化
      rules: {
        immediate: true,
        handler(n) {
          this.setRules(n);
        }
      },
      // 监听属性的变化，通知子组件u-form-item重新获取信息
      propsChange(n) {
        var _a;
        if ((_a = this.children) == null ? void 0 : _a.length) {
          this.children.map((child) => {
            typeof child.updateParentData == "function" && child.updateParentData();
          });
        }
      },
      // 监听model的初始值作为重置表单的快照
      model: {
        immediate: true,
        handler(n) {
          if (!this.originalModel) {
            this.originalModel = deepClone(n);
          }
        }
      }
    },
    computed: {
      propsChange() {
        return [
          this.errorType,
          this.borderBottom,
          this.labelPosition,
          this.labelWidth,
          this.labelAlign,
          this.labelStyle
        ];
      }
    },
    created() {
      this.children = [];
    },
    methods: {
      // 手动设置校验的规则，如果规则中有函数的话，微信小程序中会过滤掉，所以只能手动调用设置规则
      setRules(rules2) {
        if (Object.keys(rules2).length === 0)
          return;
        if (Object.keys(this.model).length === 0) {
          error("设置rules，model必须设置！如果已经设置，请刷新页面。");
          return;
        }
        this.formRules = rules2;
        this.validator = new Schema(rules2);
      },
      // 清空所有u-form-item组件的内容，本质上是调用了u-form-item组件中的resetField()方法
      resetFields() {
        this.resetModel();
      },
      // 重置model为初始值的快照
      resetModel(obj) {
        this.children.map((child) => {
          const prop = child == null ? void 0 : child.prop;
          const value2 = getProperty(this.originalModel, prop);
          setProperty(this.model, prop, value2);
        });
      },
      // 清空校验结果
      clearValidate(props2) {
        props2 = [].concat(props2);
        this.children.map((child) => {
          if (props2[0] === void 0 || props2.includes(child.prop)) {
            child.message = null;
          }
        });
      },
      // 对部分表单字段进行校验
      async validateField(value2, callback, event = null) {
        this.$nextTick(() => {
          const errorsRes = [];
          value2 = [].concat(value2);
          let promises = this.children.map((child) => {
            return new Promise((resolve, reject) => {
              const childErrors = [];
              if (value2.includes(child.prop)) {
                const propertyVal = getProperty(
                  this.model,
                  child.prop
                );
                const propertyChain = child.prop.split(".");
                const propertyName = propertyChain[propertyChain.length - 1];
                let rule = [];
                if (child.itemRules && child.itemRules.length > 0) {
                  rule = child.itemRules;
                } else {
                  rule = this.formRules[child.prop];
                }
                if (!rule) {
                  resolve();
                  return;
                }
                const rules2 = [].concat(rule);
                if (!rules2.length) {
                  resolve();
                }
                for (let i = 0; i < rules2.length; i++) {
                  const ruleItem = rules2[i];
                  const trigger = [].concat(ruleItem == null ? void 0 : ruleItem.trigger);
                  if (event && !trigger.includes(event)) {
                    resolve();
                    continue;
                  }
                  const validator = new Schema({
                    [propertyName]: ruleItem
                  });
                  validator.validate(
                    {
                      [propertyName]: propertyVal
                    },
                    (errors, fields) => {
                      var _a;
                      if (test.array(errors)) {
                        errors.forEach((element) => {
                          element.prop = child.prop;
                        });
                        errorsRes.push(...errors);
                        childErrors.push(...errors);
                      }
                      child.message = ((_a = childErrors[0]) == null ? void 0 : _a.message) ? childErrors[0].message : null;
                      if (i == rules2.length - 1) {
                        resolve(errorsRes);
                      }
                    }
                  );
                }
              } else {
                resolve({});
              }
            });
          });
          Promise.all(promises).then((results) => {
            typeof callback === "function" && callback(errorsRes);
          }).catch((error2) => {
            formatAppLog("error", "at node_modules/uview-plus/components/u-form/u-form.vue:216", "An error occurred:", error2);
          });
        });
      },
      // 校验全部数据
      validate(callback) {
        if (Object.keys(this.formRules).length === 0) {
          error("未设置rules，请看文档说明！如果已经设置，请刷新页面。");
          return;
        }
        return new Promise((resolve, reject) => {
          this.$nextTick(() => {
            const formItemProps = this.children.map(
              (item) => item.prop
            );
            this.validateField(formItemProps, (errors) => {
              if (errors.length) {
                this.errorType === "toast" && toast(errors[0].message);
                reject(errors);
              } else {
                resolve(true);
              }
            });
          });
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-form" }, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$6], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-form/u-form.vue"]]);
  const _sfc_main$c = {
    __name: "index",
    setup(__props) {
      const form = vue.ref({
        phone: "",
        password: ""
      });
      const rules2 = {
        phone: [{
          required: true,
          message: "请输入手机号",
          trigger: ["blur", "change"]
        }],
        password: [{
          required: true,
          message: "请输入密码",
          trigger: ["blur", "change"]
        }]
      };
      const uFormRef = vue.ref(null);
      function submit() {
        uFormRef.value.validate().then((valid) => {
          if (valid) {
            uni.$u.toast("校验通过");
          } else {
            uni.$u.toast("校验失败");
          }
        }).catch(() => {
          uni.$u.toast("校验失败");
        });
      }
      return (_ctx, _cache) => {
        const _component_up_form_item = resolveEasycom(vue.resolveDynamicComponent("up-form-item"), __easycom_1$3);
        const _component_up_input = resolveEasycom(vue.resolveDynamicComponent("up-input"), __easycom_0$2);
        const _component_up_button = resolveEasycom(vue.resolveDynamicComponent("up-button"), __easycom_3$1);
        const _component_up_form = resolveEasycom(vue.resolveDynamicComponent("up-form"), __easycom_2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createVNode(_component_up_form, {
            model: form.value,
            ref_key: "uFormRef",
            ref: uFormRef,
            rules: rules2,
            labelPosition: "top"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_up_form_item, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { style: { "font-size": "2rem", "margin": "auto" } }, "密码登录")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_up_form_item, { prop: "phone" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_up_input, {
                    modelValue: form.value.phone,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.phone = $event),
                    placeholder: "请输入手机号"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_up_form_item, { prop: "password" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_up_input, {
                    modelValue: form.value.password,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.password = $event),
                    placeholder: "请你输入密码"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_up_button, {
                type: "warning",
                text: "登录",
                onClick: submit,
                style: { "margin-top": "0.5rem" }
              }),
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "justify-content": "space-between", "align-items": "center", "margin-top": "0.7rem" }
              }, [
                vue.createElementVNode("view", { class: "" }, [
                  vue.createElementVNode("text", null, "还没有账号？"),
                  vue.createElementVNode("text", { style: { "color": "#ff8b03" } }, "马上注册")
                ]),
                vue.createElementVNode("view", { class: "" }, [
                  vue.createElementVNode("text", null, "忘记密码")
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["model"])
        ]);
      };
    }
  };
  const indexset = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-6037e29d"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/login/index.vue"]]);
  const _sfc_main$b = {
    __name: "enroll",
    setup(__props) {
      const form = vue.ref({
        phone: "",
        password: "",
        Resetyourpassword: ""
      });
      const rules2 = {
        phone: [{
          required: true,
          message: "请输入姓名",
          trigger: ["blur", "change"]
        }],
        password: [{
          required: true,
          message: "请输入姓名",
          trigger: ["blur", "change"]
        }],
        Resetyourpassword: [{
          required: true,
          message: "请输入姓名",
          trigger: ["blur", "change"]
        }]
      };
      const uFormRef = vue.ref(null);
      function submit() {
        uFormRef.value.validate().then((valid) => {
          if (valid) {
            uni.$u.toast("校验通过");
          } else {
            uni.$u.toast("校验失败");
          }
        }).catch(() => {
          uni.$u.toast("校验失败");
        });
      }
      return (_ctx, _cache) => {
        const _component_up_form_item = resolveEasycom(vue.resolveDynamicComponent("up-form-item"), __easycom_1$3);
        const _component_up_input = resolveEasycom(vue.resolveDynamicComponent("up-input"), __easycom_0$2);
        const _component_up_button = resolveEasycom(vue.resolveDynamicComponent("up-button"), __easycom_3$1);
        const _component_up_form = resolveEasycom(vue.resolveDynamicComponent("up-form"), __easycom_2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createVNode(_component_up_form, {
            model: form.value,
            ref_key: "uFormRef",
            ref: uFormRef,
            rules: rules2,
            labelPosition: "top"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_up_form_item, { prop: "phone" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { style: { "font-size": "2rem", "margin": "auto" } }, "注册")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_up_form_item, { prop: "phone" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_up_input, {
                    modelValue: form.value.phone,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.phone = $event),
                    placeholder: "请填写正确的手机号"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_up_form_item, { prop: "password" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_up_input, {
                    modelValue: form.value.password,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.password = $event),
                    placeholder: "请设置您的密码"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_up_form_item, { prop: "Resetyourpassword" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_up_input, {
                    modelValue: form.value.Resetyourpassword,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.Resetyourpassword = $event),
                    placeholder: "重复您设置的密码"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createCommentVNode(' <up-button @click="submit">同意条款并注册</up-button> '),
              vue.createVNode(_component_up_button, {
                type: "warning",
                text: "同意条款并注册",
                onClick: submit,
                style: { "margin-top": "0.5rem" }
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["model"])
        ]);
      };
    }
  };
  const enroll = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-066e49b4"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/login/enroll.vue"]]);
  const _sfc_main$a = {
    __name: "login",
    setup(__props) {
      const pnpneshow = vue.ref(false);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
          vue.createElementVNode("view", { class: "login-box" }, [
            vue.createElementVNode("view", { class: "" }, [
              !pnpneshow.value ? (vue.openBlock(), vue.createBlock(indexset, { key: 0 })) : vue.createCommentVNode("v-if", true),
              pnpneshow.value ? (vue.openBlock(), vue.createBlock(enroll, { key: 1 })) : vue.createCommentVNode("v-if", true)
            ])
          ])
        ]);
      };
    }
  };
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-e4e4508d"], ["__file", "C:/Users/Administrator/Desktop/vue3/pages/login/login.vue"]]);
  const props$4 = defineMixin({
    props: {
      // 文字颜色
      color: {
        type: String,
        default: () => props$m.link.color
      },
      // 字体大小，单位px
      fontSize: {
        type: [String, Number],
        default: () => props$m.link.fontSize
      },
      // 是否显示下划线
      underLine: {
        type: Boolean,
        default: () => props$m.link.underLine
      },
      // 要跳转的链接
      href: {
        type: String,
        default: () => props$m.link.href
      },
      // 小程序中复制到粘贴板的提示语
      mpTips: {
        type: String,
        default: () => props$m.link.mpTips
      },
      // 下划线颜色
      lineColor: {
        type: String,
        default: () => props$m.link.lineColor
      },
      // 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色
      text: {
        type: String,
        default: () => props$m.link.text
      }
    }
  });
  const _sfc_main$9 = {
    name: "u-link",
    mixins: [mpMixin, mixin, props$4],
    computed: {
      linkStyle() {
        const style = {
          color: this.color,
          fontSize: addUnit(this.fontSize),
          // line-height设置为比字体大小多2px
          lineHeight: addUnit(getPx(this.fontSize) + 2),
          textDecoration: this.underLine ? "underline" : "none"
        };
        return style;
      }
    },
    emits: ["click"],
    methods: {
      addStyle,
      openLink() {
        plus.runtime.openURL(this.href);
        this.$emit("click");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        class: "u-link",
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.openLink && $options.openLink(...args), ["stop"])),
        style: vue.normalizeStyle([$options.linkStyle, $options.addStyle(_ctx.customStyle)])
      },
      vue.toDisplayString(_ctx.text),
      5
      /* TEXT, STYLE */
    );
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$5], ["__scopeId", "data-v-dedad317"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-link/u-link.vue"]]);
  const props$3 = defineMixin({
    props: {
      // 主题颜色
      type: {
        type: String,
        default: () => props$m.text.type
      },
      // 是否显示
      show: {
        type: Boolean,
        default: () => props$m.text.show
      },
      // 显示的值
      text: {
        type: [String, Number],
        default: () => props$m.text.text
      },
      // 前置图标
      prefixIcon: {
        type: String,
        default: () => props$m.text.prefixIcon
      },
      // 后置图标
      suffixIcon: {
        type: String,
        default: () => props$m.text.suffixIcon
      },
      // 文本处理的匹配模式
      // text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接
      mode: {
        type: String,
        default: () => props$m.text.mode
      },
      // mode=link下，配置的链接
      href: {
        type: String,
        default: () => props$m.text.href
      },
      // 格式化规则
      format: {
        type: [String, Function],
        default: () => props$m.text.format
      },
      // mode=phone时，点击文本是否拨打电话
      call: {
        type: Boolean,
        default: () => props$m.text.call
      },
      // 小程序的打开方式
      openType: {
        type: String,
        default: () => props$m.text.openType
      },
      // 是否粗体，默认normal
      bold: {
        type: Boolean,
        default: () => props$m.text.bold
      },
      // 是否块状
      block: {
        type: Boolean,
        default: () => props$m.text.block
      },
      // 文本显示的行数，如果设置，超出此行数，将会显示省略号
      lines: {
        type: [String, Number],
        default: () => props$m.text.lines
      },
      // 文本颜色
      color: {
        type: String,
        default: () => props$m.text.color
      },
      // 字体大小
      size: {
        type: [String, Number],
        default: () => props$m.text.size
      },
      // 图标的样式
      iconStyle: {
        type: [Object, String],
        default: () => props$m.text.iconStyle
      },
      // 文字装饰，下划线，中划线等，可选值 none|underline|line-through
      decoration: {
        tepe: String,
        default: () => props$m.text.decoration
      },
      // 外边距，对象、字符串，数值形式均可
      margin: {
        type: [Object, String, Number],
        default: () => props$m.text.margin
      },
      // 文本行高
      lineHeight: {
        type: [String, Number],
        default: () => props$m.text.lineHeight
      },
      // 文本对齐方式，可选值left|center|right
      align: {
        type: String,
        default: () => props$m.text.align
      },
      // 文字换行，可选值break-word|normal|anywhere
      wordWrap: {
        type: String,
        default: () => props$m.text.wordWrap
      }
    }
  });
  const value = {
    computed: {
      // 经处理后需要显示的值
      value() {
        const {
          text,
          mode,
          format: format2,
          href
        } = this;
        if (mode === "price") {
          if (!/^\d+(\.\d+)?$/.test(text)) {
            error("金额模式下，text参数需要为金额格式");
          }
          if (test.func(format2)) {
            return format2(text);
          }
          return priceFormat(text, 2);
        }
        if (mode === "date") {
          !test.date(text) && error("日期模式下，text参数需要为日期或时间戳格式");
          if (test.func(format2)) {
            return format2(text);
          }
          if (format2) {
            return timeFormat(text, format2);
          }
          return timeFormat(text, "yyyy-mm-dd");
        }
        if (mode === "phone") {
          if (test.func(format2)) {
            return format2(text);
          }
          if (format2 === "encrypt") {
            return `${text.substr(0, 3)}****${text.substr(7)}`;
          }
          return text;
        }
        if (mode === "name") {
          !(typeof text === "string") && error("姓名模式下，text参数需要为字符串格式");
          if (test.func(format2)) {
            return format2(text);
          }
          if (format2 === "encrypt") {
            return this.formatName(text);
          }
          return text;
        }
        if (mode === "link") {
          !test.url(href) && error("超链接模式下，href参数需要为URL格式");
          return text;
        }
        return text;
      }
    },
    methods: {
      // 默认的姓名脱敏规则
      formatName(name) {
        let value2 = "";
        if (name.length === 2) {
          value2 = name.substr(0, 1) + "*";
        } else if (name.length > 2) {
          let char = "";
          for (let i = 0, len = name.length - 2; i < len; i++) {
            char += "*";
          }
          value2 = name.substr(0, 1) + char + name.substr(-1, 1);
        } else {
          value2 = name;
        }
        return value2;
      }
    }
  };
  const _sfc_main$8 = {
    name: "up-text",
    mixins: [mpMixin, mixin, value, props$3],
    emits: ["click"],
    computed: {
      valueStyle() {
        const style = {
          textDecoration: this.decoration,
          fontWeight: this.bold ? "bold" : "normal",
          wordWrap: this.wordWrap,
          fontSize: addUnit(this.size)
        };
        !this.type && (style.color = this.color);
        this.isNvue && this.lines && (style.lines = this.lines);
        this.lineHeight && (style.lineHeight = addUnit(this.lineHeight));
        !this.isNvue && this.block && (style.display = "block");
        return deepMerge$2(style, addStyle(this.customStyle));
      },
      isNvue() {
        let nvue = false;
        return nvue;
      },
      isMp() {
        let mp = false;
        return mp;
      }
    },
    data() {
      return {};
    },
    methods: {
      addStyle,
      clickHandler() {
        if (this.call && this.mode === "phone") {
          uni.makePhoneCall({
            phoneNumber: this.text
          });
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    const _component_u_link = resolveEasycom(vue.resolveDynamicComponent("u-link"), __easycom_1$2);
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-text", [_ctx.customClass]]),
        style: vue.normalizeStyle({
          margin: _ctx.margin,
          justifyContent: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end"
        }),
        onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        _ctx.mode === "price" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: vue.normalizeClass(["u-text__price", _ctx.type && `u-text__value--${_ctx.type}`]),
            style: vue.normalizeStyle([$options.valueStyle])
          },
          "￥",
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "u-text__prefix-icon"
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.prefixIcon,
            customStyle: $options.addStyle(_ctx.iconStyle)
          }, null, 8, ["name", "customStyle"])
        ])) : vue.createCommentVNode("v-if", true),
        _ctx.mode === "link" ? (vue.openBlock(), vue.createBlock(_component_u_link, {
          key: 2,
          class: vue.normalizeClass(["u-text__value", [_ctx.type && `u-text__value--${_ctx.type}`, _ctx.lines && `u-line-${_ctx.lines}`]]),
          style: vue.normalizeStyle({ fontWeight: $options.valueStyle.fontWeight, wordWrap: $options.valueStyle.wordWrap, fontSize: $options.valueStyle.fontSize }),
          text: _ctx.value,
          href: _ctx.href,
          underLine: ""
        }, null, 8, ["style", "class", "text", "href"])) : _ctx.openType && $options.isMp ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 3,
          class: "u-reset-button u-text__value",
          style: vue.normalizeStyle([$options.valueStyle]),
          "data-index": _ctx.index,
          openType: _ctx.openType,
          onGetuserinfo: _cache[0] || (_cache[0] = (...args) => _ctx.onGetUserInfo && _ctx.onGetUserInfo(...args)),
          onContact: _cache[1] || (_cache[1] = (...args) => _ctx.onContact && _ctx.onContact(...args)),
          onGetphonenumber: _cache[2] || (_cache[2] = (...args) => _ctx.onGetPhoneNumber && _ctx.onGetPhoneNumber(...args)),
          onError: _cache[3] || (_cache[3] = (...args) => _ctx.onError && _ctx.onError(...args)),
          onLaunchapp: _cache[4] || (_cache[4] = (...args) => _ctx.onLaunchApp && _ctx.onLaunchApp(...args)),
          onOpensetting: _cache[5] || (_cache[5] = (...args) => _ctx.onOpenSetting && _ctx.onOpenSetting(...args)),
          lang: _ctx.lang,
          "session-from": _ctx.sessionFrom,
          "send-message-title": _ctx.sendMessageTitle,
          "send-message-path": _ctx.sendMessagePath,
          "send-message-img": _ctx.sendMessageImg,
          "show-message-card": _ctx.showMessageCard,
          "app-parameter": _ctx.appParameter
        }, vue.toDisplayString(_ctx.value), 45, ["data-index", "openType", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "app-parameter"])) : (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 4,
            class: vue.normalizeClass(["u-text__value", [
              _ctx.type && `u-text__value--${_ctx.type}`,
              _ctx.lines && `u-line-${_ctx.lines}`
            ]]),
            style: vue.normalizeStyle([$options.valueStyle])
          },
          vue.toDisplayString(_ctx.value),
          7
          /* TEXT, CLASS, STYLE */
        )),
        _ctx.suffixIcon ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 5,
          class: "u-text__suffix-icon"
        }, [
          vue.createVNode(_component_u_icon, {
            name: _ctx.suffixIcon,
            customStyle: $options.addStyle(_ctx.iconStyle)
          }, null, 8, ["name", "customStyle"])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$4], ["__scopeId", "data-v-5fec1d8b"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-text/u-text.vue"]]);
  const props$2 = defineMixin({
    props: {
      // 标题
      title: {
        type: [String, Number],
        default: () => props$m.stepsItem.title
      },
      // 描述文本
      desc: {
        type: [String, Number],
        default: () => props$m.stepsItem.desc
      },
      // 图标大小
      iconSize: {
        type: [String, Number],
        default: () => props$m.stepsItem.iconSize
      },
      // 当前步骤是否处于失败状态
      error: {
        type: Boolean,
        default: () => props$m.stepsItem.error
      },
      // 自定义样式
      itemStyle: {
        type: [Object],
        default: {}
      }
    }
  });
  const _sfc_main$7 = {
    name: "u-steps-item",
    mixins: [mpMixin, mixin, props$2],
    data() {
      return {
        index: 0,
        childLength: 0,
        showLine: false,
        size: {
          height: 0,
          width: 0
        },
        parentData: {
          direction: "row",
          current: 0,
          activeColor: "",
          inactiveColor: "",
          activeIcon: "",
          inactiveIcon: "",
          dot: false
        }
      };
    },
    watch: {
      "parentData"(newValue, oldValue) {
      }
    },
    created() {
      this.init();
    },
    computed: {
      lineStyle() {
        var _a, _b;
        const style = {};
        if (this.parentData.direction === "row") {
          style.width = this.size.width + "px";
          style.left = this.size.width / 2 + "px";
        } else {
          style.height = this.size.height + "px";
        }
        style.backgroundColor = ((_b = (_a = this.parent.children) == null ? void 0 : _a[this.index + 1]) == null ? void 0 : _b.error) ? color.error : this.index < this.parentData.current ? this.parentData.activeColor : this.parentData.inactiveColor;
        return style;
      },
      itemStyleInner() {
        return {
          ...this.itemStyle
        };
      },
      statusClass() {
        const {
          index: index2,
          error: error2
        } = this;
        const {
          current
        } = this.parentData;
        if (current == index2) {
          return error2 === true ? "error" : "process";
        } else if (error2) {
          return "error";
        } else if (current > index2) {
          return "finish";
        } else {
          return "wait";
        }
      },
      statusColor() {
        let colorTmp = "";
        switch (this.statusClass) {
          case "finish":
            colorTmp = this.parentData.activeColor;
            break;
          case "error":
            colorTmp = color.error;
            break;
          case "process":
            colorTmp = this.parentData.dot ? this.parentData.activeColor : "transparent";
            break;
          default:
            colorTmp = this.parentData.inactiveColor;
            break;
        }
        return colorTmp;
      },
      contentStyle() {
        const style = {};
        if (this.parentData.direction === "column") {
          style.marginLeft = this.parentData.dot ? "2px" : "6px";
          style.marginTop = this.parentData.dot ? "0px" : "6px";
        } else {
          style.marginTop = this.parentData.dot ? "2px" : "6px";
          style.marginLeft = this.parentData.dot ? "2px" : "6px";
        }
        return style;
      }
    },
    mounted() {
      this.parent && this.parent.updateFromChild();
      sleep().then(() => {
        this.getStepsItemRect();
      });
    },
    methods: {
      init() {
        this.updateParentData();
        if (!this.parent) {
          return error("u-steps-item必须要搭配u-steps组件使用");
        }
        this.index = this.parent.children.indexOf(this);
        this.childLength = this.parent.children.length;
      },
      updateParentData() {
        this.getParentData("u-steps");
      },
      // 父组件数据发生变化
      updateFromParent() {
        this.init();
      },
      // 获取组件的尺寸，用于设置横线的位置
      getStepsItemRect() {
        this.$uGetRect(".u-steps-item").then((size) => {
          this.size = size;
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    const _component_up_text = resolveEasycom(vue.resolveDynamicComponent("up-text"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-steps-item", [`u-steps-item--${$data.parentData.direction}`]]),
        ref: "u-steps-item"
      },
      [
        $data.index + 1 < $data.childLength ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["u-steps-item__line", [`u-steps-item__line--${$data.parentData.direction}`]]),
            style: vue.normalizeStyle([$options.lineStyle])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["u-steps-item__wrapper", [`u-steps-item__wrapper--${$data.parentData.direction}`, $data.parentData.dot && `u-steps-item__wrapper--${$data.parentData.direction}--dot`]]),
            style: vue.normalizeStyle([$options.itemStyleInner])
          },
          [
            vue.renderSlot(_ctx.$slots, "icon", {}, () => [
              $data.parentData.dot ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  class: "u-steps-item__wrapper__dot",
                  style: vue.normalizeStyle({
                    backgroundColor: $options.statusColor
                  })
                },
                null,
                4
                /* STYLE */
              )) : $data.parentData.activeIcon || $data.parentData.inactiveIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "u-steps-item__wrapper__icon"
              }, [
                vue.createVNode(_component_u_icon, {
                  name: $data.index <= $data.parentData.current ? $data.parentData.activeIcon : $data.parentData.inactiveIcon,
                  size: _ctx.iconSize,
                  color: $data.index <= $data.parentData.current ? $data.parentData.activeColor : $data.parentData.inactiveColor
                }, null, 8, ["name", "size", "color"])
              ])) : (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 2,
                  style: vue.normalizeStyle({
                    backgroundColor: $options.statusClass === "process" ? $data.parentData.activeColor : "transparent",
                    borderColor: $options.statusColor
                  }),
                  class: "u-steps-item__wrapper__circle"
                },
                [
                  $options.statusClass === "process" || $options.statusClass === "wait" ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "u-steps-item__wrapper__circle__text",
                      style: vue.normalizeStyle({
                        color: $data.index == $data.parentData.current ? "#ffffff" : $data.parentData.inactiveColor
                      })
                    },
                    vue.toDisplayString($data.index + 1),
                    5
                    /* TEXT, STYLE */
                  )) : (vue.openBlock(), vue.createBlock(_component_u_icon, {
                    key: 1,
                    color: $options.statusClass === "error" ? "error" : $data.parentData.activeColor,
                    size: "12",
                    name: $options.statusClass === "error" ? "close" : "checkmark"
                  }, null, 8, ["color", "name"]))
                ],
                4
                /* STYLE */
              ))
            ], true)
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["u-steps-item__content", [`u-steps-item__content--${$data.parentData.direction}`]]),
            style: vue.normalizeStyle([$options.contentStyle])
          },
          [
            vue.createVNode(_component_up_text, {
              text: _ctx.title,
              type: $data.parentData.current == $data.index ? "main" : "content",
              lineHeight: "20px",
              size: $data.parentData.current == $data.index ? 14 : 13
            }, null, 8, ["text", "type", "size"]),
            vue.renderSlot(_ctx.$slots, "desc", {}, () => [
              vue.createVNode(_component_up_text, {
                text: _ctx.desc,
                type: "tips",
                size: "12"
              }, null, 8, ["text"])
            ], true)
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.createCommentVNode(' <view\r\n		    class="u-steps-item__line"\r\n		    v-if="showLine && parentData.direction === \'column\'"\r\n			:class="[`u-steps-item__line--${parentData.direction}`]"\r\n		    :style="[lineStyle]"\r\n		></view> ')
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$3], ["__scopeId", "data-v-9f07ce7c"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-steps-item/u-steps-item.vue"]]);
  const props$1 = defineMixin({
    props: {
      // 排列方向
      direction: {
        type: String,
        default: () => props$m.steps.direction
      },
      // 设置第几个步骤
      current: {
        type: [String, Number],
        default: () => props$m.steps.current
      },
      // 激活状态颜色
      activeColor: {
        type: String,
        default: () => props$m.steps.activeColor
      },
      // 未激活状态颜色
      inactiveColor: {
        type: String,
        default: () => props$m.steps.inactiveColor
      },
      // 激活状态的图标
      activeIcon: {
        type: String,
        default: () => props$m.steps.activeIcon
      },
      // 未激活状态图标
      inactiveIcon: {
        type: String,
        default: () => props$m.steps.inactiveIcon
      },
      // 是否显示点类型
      dot: {
        type: Boolean,
        default: () => props$m.steps.dot
      }
    }
  });
  const _sfc_main$6 = {
    name: "u-steps",
    mixins: [mpMixin, mixin, props$1],
    data() {
      return {};
    },
    watch: {
      children() {
        this.updateChildData();
      },
      parentData() {
        this.updateChildData();
      }
    },
    computed: {
      // 监听参数的变化，通过watch中，手动去更新子组件的数据，否则子组件不会自动变化
      parentData() {
        return [this.current, this.direction, this.activeColor, this.inactiveColor, this.activeIcon, this.inactiveIcon, this.dot];
      }
    },
    methods: {
      // 更新子组件的数据
      updateChildData() {
        this.children.map((child) => {
          test.func((child || {}).updateFromParent()) && child.updateFromParent();
        });
      },
      // 接受子组件的通知，去修改其他子组件的数据
      updateFromChild() {
        this.updateChildData();
      }
    },
    created() {
      this.children = [];
    },
    options: {
      virtualHost: false
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-steps", [`u-steps--${_ctx.direction}`]])
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2], ["__scopeId", "data-v-30d91cab"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-steps/u-steps.vue"]]);
  const _sfc_main$5 = {
    props: {
      index: {
        type: Number,
        required: true
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_up_steps_item = resolveEasycom(vue.resolveDynamicComponent("up-steps-item"), __easycom_0$1);
    const _component_up_steps = resolveEasycom(vue.resolveDynamicComponent("up-steps"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
      vue.createVNode(_component_up_steps, { current: $props.index }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_up_steps_item, {
            title: "添加商铺",
            desc: "10:30"
          }),
          vue.createVNode(_component_up_steps_item, {
            title: "上传认证材料",
            desc: "10:35"
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["current"])
    ]);
  }
  const joinset = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1], ["__scopeId", "data-v-fe5b5a11"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Stay/join.vue"]]);
  function pickExclude(obj, keys) {
    if (!["[object Object]", "[object File]"].includes(Object.prototype.toString.call(obj))) {
      return {};
    }
    return Object.keys(obj).reduce((prev, key) => {
      if (!keys.includes(key)) {
        prev[key] = obj[key];
      }
      return prev;
    }, {});
  }
  function formatImage(res) {
    return res.tempFiles.map((item) => ({
      ...pickExclude(item, ["path"]),
      type: "image",
      url: item.path,
      thumb: item.path,
      size: item.size
    }));
  }
  function formatVideo(res) {
    return [
      {
        ...pickExclude(res, ["tempFilePath", "thumbTempFilePath", "errMsg"]),
        type: "video",
        url: res.tempFilePath,
        thumb: res.thumbTempFilePath,
        size: res.size
      }
    ];
  }
  function chooseFile({
    accept,
    multiple,
    capture,
    compressed,
    maxDuration,
    sizeType,
    camera,
    maxCount,
    extension
  }) {
    return new Promise((resolve, reject) => {
      switch (accept) {
        case "image":
          uni.chooseImage({
            count: multiple ? Math.min(maxCount, 9) : 1,
            sourceType: capture,
            sizeType,
            success: (res) => resolve(formatImage(res)),
            fail: reject
          });
          break;
        case "video":
          uni.chooseVideo({
            sourceType: capture,
            compressed,
            maxDuration,
            camera,
            success: (res) => resolve(formatVideo(res)),
            fail: reject
          });
          break;
      }
    });
  }
  const mixinUpload = {
    watch: {
      // 监听accept的变化，判断是否符合个平台要求
      // 只有微信小程序才支持选择媒体，文件类型，所以这里做一个判断提示
      accept: {
        immediate: true,
        handler(val) {
          if (val === "all" || val === "media") {
            error("只有微信小程序才支持把accept配置为all、media之一");
          }
          if (val === "file") {
            error("只有微信小程序和H5(HX2.9.9)才支持把accept配置为file");
          }
        }
      }
    }
  };
  const props = defineMixin({
    props: {
      // 接受的文件类型, 可选值为all media image file video
      accept: {
        type: String,
        default: () => props$m.upload.accept
      },
      extension: {
        type: Array,
        default: () => props$m.upload.extension
      },
      // 	图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头
      capture: {
        type: [String, Array],
        default: () => props$m.upload.capture
      },
      // 当accept为video时生效，是否压缩视频，默认为true
      compressed: {
        type: Boolean,
        default: () => props$m.upload.compressed
      },
      // 当accept为video时生效，可选值为back或front
      camera: {
        type: String,
        default: () => props$m.upload.camera
      },
      // 当accept为video时生效，拍摄视频最长拍摄时间，单位秒
      maxDuration: {
        type: Number,
        default: () => props$m.upload.maxDuration
      },
      // 上传区域的图标，只能内置图标
      uploadIcon: {
        type: String,
        default: () => props$m.upload.uploadIcon
      },
      // 上传区域的图标的颜色，默认
      uploadIconColor: {
        type: String,
        default: () => props$m.upload.uploadIconColor
      },
      // 是否开启文件读取前事件
      useBeforeRead: {
        type: Boolean,
        default: () => props$m.upload.useBeforeRead
      },
      // 读取后的处理函数
      afterRead: {
        type: Function,
        default: null
      },
      // 读取前的处理函数
      beforeRead: {
        type: Function,
        default: null
      },
      // 是否显示组件自带的图片预览功能
      previewFullImage: {
        type: Boolean,
        default: () => props$m.upload.previewFullImage
      },
      // 最大上传数量
      maxCount: {
        type: [String, Number],
        default: () => props$m.upload.maxCount
      },
      // 是否启用
      disabled: {
        type: Boolean,
        default: () => props$m.upload.disabled
      },
      // 预览上传的图片时的裁剪模式，和image组件mode属性一致
      imageMode: {
        type: String,
        default: () => props$m.upload.imageMode
      },
      // 标识符，可以在回调函数的第二项参数中获取
      name: {
        type: String,
        default: () => props$m.upload.name
      },
      // 所选的图片的尺寸, 可选值为original compressed
      sizeType: {
        type: Array,
        default: () => props$m.upload.sizeType
      },
      // 是否开启图片多选，部分安卓机型不支持
      multiple: {
        type: Boolean,
        default: () => props$m.upload.multiple
      },
      // 是否展示删除按钮
      deletable: {
        type: Boolean,
        default: () => props$m.upload.deletable
      },
      // 文件大小限制，单位为byte
      maxSize: {
        type: [String, Number],
        default: () => props$m.upload.maxSize
      },
      // 显示已上传的文件列表
      fileList: {
        type: Array,
        default: () => props$m.upload.fileList
      },
      // 上传区域的提示文字
      uploadText: {
        type: String,
        default: () => props$m.upload.uploadText
      },
      // 内部预览图片区域和选择图片按钮的区域宽度
      width: {
        type: [String, Number],
        default: () => props$m.upload.width
      },
      // 内部预览图片区域和选择图片按钮的区域高度
      height: {
        type: [String, Number],
        default: () => props$m.upload.height
      },
      // 是否在上传完成后展示预览图
      previewImage: {
        type: Boolean,
        default: () => props$m.upload.previewImage
      }
    }
  });
  const _sfc_main$4 = {
    name: "u-upload",
    mixins: [mpMixin, mixin, mixinUpload, props],
    data() {
      return {
        lists: [],
        isInCount: true
      };
    },
    watch: {
      // 监听文件列表的变化，重新整理内部数据
      fileList: {
        handler() {
          this.formatFileList();
        },
        immediate: true,
        deep: true
      },
      deletable(newVal) {
        this.formatFileList();
      },
      maxCount(newVal) {
        this.formatFileList();
      },
      accept(newVal) {
        this.formatFileList();
      }
    },
    emits: ["error", "beforeRead", "oversize", "afterRead", "delete", "clickPreview"],
    methods: {
      addUnit,
      addStyle,
      formatFileList() {
        const {
          fileList = [],
          maxCount
        } = this;
        const lists = fileList.map(
          (item) => Object.assign(Object.assign({}, item), {
            // 如果item.url为本地选择的blob文件的话，无法判断其为video还是image，此处优先通过accept做判断处理
            isImage: this.accept === "image" || test.image(item.url || item.thumb),
            isVideo: this.accept === "video" || test.video(item.url || item.thumb),
            deletable: typeof item.deletable === "boolean" ? item.deletable : this.deletable
          })
        );
        this.lists = lists;
        this.isInCount = lists.length < maxCount;
      },
      chooseFile() {
        const {
          maxCount,
          multiple,
          lists,
          disabled
        } = this;
        if (disabled)
          return;
        let capture;
        try {
          capture = test.array(this.capture) ? this.capture : this.capture.split(",");
        } catch (e) {
          capture = [];
        }
        chooseFile(
          Object.assign({
            accept: this.accept,
            extension: this.extension,
            multiple: this.multiple,
            capture,
            compressed: this.compressed,
            maxDuration: this.maxDuration,
            sizeType: this.sizeType,
            camera: this.camera
          }, {
            maxCount: maxCount - lists.length
          })
        ).then((res) => {
          this.onBeforeRead(multiple ? res : res[0]);
        }).catch((error2) => {
          this.$emit("error", error2);
        });
      },
      // 文件读取之前
      onBeforeRead(file) {
        const {
          beforeRead,
          useBeforeRead
        } = this;
        let res = true;
        if (test.func(beforeRead)) {
          res = beforeRead(file, this.getDetail());
        }
        if (useBeforeRead) {
          res = new Promise((resolve, reject) => {
            this.$emit(
              "beforeRead",
              Object.assign(Object.assign({
                file
              }, this.getDetail()), {
                callback: (ok) => {
                  ok ? resolve() : reject();
                }
              })
            );
          });
        }
        if (!res) {
          return;
        }
        if (test.promise(res)) {
          res.then((data) => this.onAfterRead(data || file));
        } else {
          this.onAfterRead(file);
        }
      },
      getDetail(index2) {
        return {
          name: this.name,
          index: index2 == null ? this.fileList.length : index2
        };
      },
      onAfterRead(file) {
        const {
          maxSize,
          afterRead
        } = this;
        const oversize = Array.isArray(file) ? file.some((item) => item.size > maxSize) : file.size > maxSize;
        if (oversize) {
          this.$emit("oversize", Object.assign({
            file
          }, this.getDetail()));
          return;
        }
        if (typeof afterRead === "function") {
          afterRead(file, this.getDetail());
        }
        this.$emit("afterRead", Object.assign({
          file
        }, this.getDetail()));
      },
      deleteItem(index2) {
        this.$emit(
          "delete",
          Object.assign(Object.assign({}, this.getDetail(index2)), {
            file: this.fileList[index2]
          })
        );
      },
      // 预览图片
      onPreviewImage(item) {
        if (!item.isImage || !this.previewFullImage)
          return;
        uni.previewImage({
          // 先filter找出为图片的item，再返回filter结果中的图片url
          urls: this.lists.filter((item2) => this.accept === "image" || test.image(item2.url || item2.thumb)).map((item2) => item2.url || item2.thumb),
          current: item.url || item.thumb,
          fail() {
            toast("预览图片失败");
          }
        });
      },
      onPreviewVideo(event) {
        if (!this.previewFullImage)
          return;
        event.currentTarget.dataset;
        this.data;
      },
      onClickPreview(event) {
        const {
          index: index2
        } = event.currentTarget.dataset;
        const item = this.data.lists[index2];
        if (!this.previewFullImage)
          return;
        switch (item.type) {
          case "video":
            this.onPreviewVideo(event);
            break;
        }
        this.$emit(
          "clickPreview",
          Object.assign(Object.assign({}, item), this.getDetail(index2))
        );
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$7);
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$9);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-upload",
        style: vue.normalizeStyle([$options.addStyle(_ctx.customStyle)])
      },
      [
        vue.createElementVNode("view", { class: "u-upload__wrap" }, [
          _ctx.previewImage ? (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            vue.renderList($data.lists, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "u-upload__wrap__preview",
                key: index2
              }, [
                item.isImage || item.type && item.type === "image" ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: item.thumb || item.url,
                  mode: _ctx.imageMode,
                  class: "u-upload__wrap__preview__image",
                  onClick: ($event) => $options.onPreviewImage(item),
                  style: vue.normalizeStyle([{
                    width: $options.addUnit(_ctx.width),
                    height: $options.addUnit(_ctx.height)
                  }])
                }, null, 12, ["src", "mode", "onClick"])) : (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "u-upload__wrap__preview__other",
                  onClick: ($event) => $options.onClickPreview($event, item)
                }, [
                  vue.createVNode(_component_u_icon, {
                    color: "#80CBF9",
                    size: "26",
                    name: item.isVideo || item.type && item.type === "video" ? "movie" : "folder"
                  }, null, 8, ["name"]),
                  vue.createElementVNode(
                    "text",
                    { class: "u-upload__wrap__preview__other__text" },
                    vue.toDisplayString(item.isVideo || item.type && item.type === "video" ? "视频" : "文件"),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"])),
                item.status === "uploading" || item.status === "failed" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 2,
                  class: "u-upload__status"
                }, [
                  vue.createElementVNode("view", { class: "u-upload__status__icon" }, [
                    item.status === "failed" ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                      key: 0,
                      name: "close-circle",
                      color: "#ffffff",
                      size: "25"
                    })) : (vue.openBlock(), vue.createBlock(_component_u_loading_icon, {
                      key: 1,
                      size: "22",
                      mode: "circle",
                      color: "#ffffff"
                    }))
                  ]),
                  item.message ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "u-upload__status__message"
                    },
                    vue.toDisplayString(item.message),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true)
                ])) : vue.createCommentVNode("v-if", true),
                item.status !== "uploading" && (_ctx.deletable || item.deletable) ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 3,
                  class: "u-upload__deletable",
                  onClick: vue.withModifiers(($event) => $options.deleteItem(index2), ["stop"])
                }, [
                  vue.createElementVNode("view", { class: "u-upload__deletable__icon" }, [
                    vue.createVNode(_component_u_icon, {
                      name: "close",
                      color: "#ffffff",
                      size: "10"
                    })
                  ])
                ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
                item.status === "success" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 4,
                  class: "u-upload__success"
                }, [
                  vue.createElementVNode("view", { class: "u-upload__success__icon" }, [
                    vue.createVNode(_component_u_icon, {
                      name: "checkmark",
                      color: "#ffffff",
                      size: "12"
                    })
                  ])
                ])) : vue.createCommentVNode("v-if", true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          )) : vue.createCommentVNode("v-if", true),
          $data.isInCount ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 1 },
            [
              _ctx.$slots.trigger ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                onClick: _cache[0] || (_cache[0] = (...args) => $options.chooseFile && $options.chooseFile(...args))
              }, [
                vue.renderSlot(_ctx.$slots, "trigger", {}, void 0, true)
              ])) : !_ctx.$slots.trigger && (_ctx.$slots.default || _ctx.$slots.$default) ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                onClick: _cache[1] || (_cache[1] = (...args) => $options.chooseFile && $options.chooseFile(...args))
              }, [
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: vue.normalizeClass(["u-upload__button", [_ctx.disabled && "u-upload__button--disabled"]]),
                "hover-class": !_ctx.disabled ? "u-upload__button--hover" : "",
                "hover-stay-time": "150",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.chooseFile && $options.chooseFile(...args)),
                style: vue.normalizeStyle([{
                  width: $options.addUnit(_ctx.width),
                  height: $options.addUnit(_ctx.height)
                }])
              }, [
                vue.createVNode(_component_u_icon, {
                  name: _ctx.uploadIcon,
                  size: "26",
                  color: _ctx.uploadIconColor
                }, null, 8, ["name", "color"]),
                _ctx.uploadText ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "u-upload__button__text"
                  },
                  vue.toDisplayString(_ctx.uploadText),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ], 14, ["hover-class"]))
            ],
            64
            /* STABLE_FRAGMENT */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render], ["__scopeId", "data-v-cafe0b2a"], ["__file", "C:/Users/Administrator/Desktop/vue3/node_modules/uview-plus/components/u-upload/u-upload.vue"]]);
  const _sfc_main$3 = {
    __name: "centent",
    emits: "submit",
    setup(__props, { emit: __emit }) {
      const fileList1 = vue.ref([]);
      const form = vue.ref({
        Contact: "",
        phonen: "",
        Storelocation: "",
        Specific: ""
      });
      const rules2 = {
        Contact: [{
          required: true,
          message: "请输入店铺名称",
          trigger: ["blur", "change"]
        }],
        phonen: [{
          required: true,
          message: "请输入商铺分类",
          trigger: ["blur", "change"]
        }],
        Storelocation: [{
          required: true,
          message: "请输入商铺位置",
          trigger: ["blur", "change"]
        }],
        Specific: [{
          required: true,
          message: "请输入商铺的具体位置",
          trigger: ["blur", "change"]
        }]
      };
      const uFormRef = vue.ref(null);
      const emits = __emit;
      function submit() {
        uFormRef.value.validate().then((valid) => {
          if (valid) {
            emits("submit");
          } else {
            uni.$u.toast("亲，请填写内容");
          }
        }).catch(() => {
          uni.$u.toast("错误");
        });
      }
      const deletePic = (event) => {
        fileList1.value.splice(event.index, 1);
      };
      const afterRead = async (event) => {
        let lists = [].concat(event.file);
        let fileListLen = fileList1.value.length;
        lists.map((item) => {
          fileList1.value.push({
            ...item,
            status: "uploading",
            message: "上传中"
          });
        });
        for (let i = 0; i < lists.length; i++) {
          const result = await uploadFilePromise(lists[i].url);
          let item = fileList1.value[fileListLen];
          fileList1.value.splice(fileListLen, 1, {
            ...item,
            status: "success",
            message: "",
            url: result
          });
          fileListLen++;
        }
      };
      const uploadFilePromise = (url2) => {
        return new Promise((resolve, reject) => {
          uni.uploadFile({
            url: "http://192.168.2.21:7001/upload",
            // 仅为示例，非真实的接口地址
            filePath: url2,
            name: "file",
            formData: {
              user: "test"
            },
            success: (res) => {
              setTimeout(() => {
                resolve(res.data.data);
              }, 1e3);
            }
          });
        });
      };
      return (_ctx, _cache) => {
        const _component_up_input = resolveEasycom(vue.resolveDynamicComponent("up-input"), __easycom_0$2);
        const _component_up_form_item = resolveEasycom(vue.resolveDynamicComponent("up-form-item"), __easycom_1$3);
        const _component_up_upload = resolveEasycom(vue.resolveDynamicComponent("up-upload"), __easycom_0);
        const _component_up_form = resolveEasycom(vue.resolveDynamicComponent("up-form"), __easycom_2);
        const _component_up_button = resolveEasycom(vue.resolveDynamicComponent("up-button"), __easycom_3$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createElementVNode("view", { class: "index-box" }, [
            vue.createElementVNode("view", { class: "index-logo" }, " 观涛入驻 "),
            vue.createElementVNode("view", { class: "index-x" }, [
              vue.createVNode(_component_up_form, {
                model: form.value,
                rules: rules2,
                ref_key: "uFormRef",
                ref: uFormRef,
                labelPosition: "top"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_up_form_item, {
                    label: "店铺名称",
                    prop: "Contact"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_up_input, {
                        modelValue: form.value.Contact,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.Contact = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_up_form_item, {
                    label: "商铺分类",
                    prop: "phonen"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_up_input, {
                        modelValue: form.value.phonen,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.phonen = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_up_form_item, {
                    label: "商铺位置",
                    prop: "Storelocation"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_up_input, {
                        modelValue: form.value.Storelocation,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.Storelocation = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_up_form_item, {
                    label: "详细地址",
                    prop: "Specific"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_up_input, {
                        modelValue: form.value.Specific,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.Specific = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_up_form_item, { label: "门牌照片" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_up_upload, {
                        fileList: fileList1.value,
                        onAfterRead: afterRead,
                        onDelete: deletePic,
                        name: "1",
                        multiple: "",
                        maxCount: 10
                      }, null, 8, ["fileList"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model"]),
              vue.createVNode(_component_up_button, { onClick: submit }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("下一步")
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])
        ]);
      };
    }
  };
  const centern = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bfa92176"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Stay/centent.vue"]]);
  const _imports_0 = "/static/OIP-C.jpg";
  const _sfc_main$2 = {
    __name: "Uploadthecertification",
    emits: "Previous",
    setup(__props, { emit: __emit }) {
      const fileList1 = vue.ref([]);
      const fileList2 = vue.ref([]);
      const fileList3 = vue.ref([]);
      const emits = __emit;
      const Previous = () => {
        emits("Previous");
      };
      const uFormRef = vue.ref(null);
      function submit() {
      }
      const deletePic = (event) => {
        fileList1.value.splice(event.index, 1);
      };
      const afterRead = async (event) => {
        let lists = [].concat(event.file);
        let fileListLen = fileList1.value.length;
        lists.map((item) => {
          fileList1.value.push({
            ...item,
            status: "uploading",
            message: "上传中"
          });
        });
        for (let i = 0; i < lists.length; i++) {
          const result = await uploadFilePromise(lists[i].url);
          let item = fileList1.value[fileListLen];
          fileList1.value.splice(fileListLen, 1, {
            ...item,
            status: "success",
            message: "",
            url: result
          });
          fileListLen++;
        }
      };
      const uploadFilePromise = (url2) => {
        return new Promise((resolve, reject) => {
          uni.uploadFile({
            url: "http://192.168.2.21:7001/upload",
            // 仅为示例，非真实的接口地址
            filePath: url2,
            name: "file",
            formData: {
              user: "test"
            },
            success: (res) => {
              setTimeout(() => {
                resolve(res.data.data);
              }, 1e3);
            }
          });
        });
      };
      return (_ctx, _cache) => {
        const _component_up_upload = resolveEasycom(vue.resolveDynamicComponent("up-upload"), __easycom_0);
        const _component_up_form_item = resolveEasycom(vue.resolveDynamicComponent("up-form-item"), __easycom_1$3);
        const _component_up_form = resolveEasycom(vue.resolveDynamicComponent("up-form"), __easycom_2);
        const _component_up_button = resolveEasycom(vue.resolveDynamicComponent("up-button"), __easycom_3$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createElementVNode("view", { class: "index-box" }, [
            vue.createElementVNode("view", { class: "index-logo" }, " 观涛入驻 "),
            vue.createElementVNode("view", { class: "index-x" }, [
              vue.createVNode(
                _component_up_form,
                {
                  ref_key: "uFormRef",
                  ref: uFormRef,
                  labelPosition: "top"
                },
                {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_up_form_item, { label: "上传营业执照" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_upload, {
                          fileList: fileList1.value,
                          onAfterRead: afterRead,
                          onDelete: deletePic,
                          name: "6",
                          multiple: "",
                          maxCount: 1,
                          width: "250",
                          height: "150"
                        }, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("image", {
                              src: _imports_0,
                              mode: "widthFix",
                              style: { "width": "250px", "height": "150px" }
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fileList"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_form_item, { label: "上传身份证正面" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_upload, {
                          fileList: fileList2.value,
                          onAfterRead: afterRead,
                          onDelete: deletePic,
                          name: "6",
                          multiple: "",
                          maxCount: 1,
                          width: "250",
                          height: "150"
                        }, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("image", {
                              src: "https://cdn.uviewui.com/uview/demo/upload/positive.png",
                              mode: "widthFix",
                              style: { "width": "250px", "height": "150px" }
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fileList"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    vue.createVNode(_component_up_form_item, { label: "上传身份证反面" }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_up_upload, {
                          fileList: fileList3.value,
                          onAfterRead: afterRead,
                          onDelete: deletePic,
                          name: "6",
                          multiple: "",
                          maxCount: 1,
                          width: "250",
                          height: "150"
                        }, {
                          default: vue.withCtx(() => [
                            vue.createElementVNode("image", {
                              src: "https://cdn.uviewui.com/uview/demo/upload/positive.png",
                              mode: "widthFix",
                              style: { "width": "250px", "height": "150px" }
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["fileList"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              vue.createElementVNode("view", {
                class: "",
                style: { "display": "flex", "width": "200px", "margin": "auto" }
              }, [
                vue.createVNode(_component_up_button, {
                  type: "error",
                  text: "上一步",
                  style: { "width": "70px" },
                  onClick: Previous
                }),
                vue.createVNode(_component_up_button, {
                  text: "提交",
                  style: { "width": "70px" },
                  onClick: submit
                })
              ])
            ])
          ])
        ]);
      };
    }
  };
  const Uploadthecertification = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e5bb0d32"], ["__file", "C:/Users/Administrator/Desktop/vue3/components/Stay/Uploadthecertification.vue"]]);
  const _sfc_main$1 = {
    __name: "Stay",
    setup(__props) {
      const index2 = vue.ref(0);
      const uploshow = vue.ref(false);
      const submit = () => {
        index2.value = 1;
        uploshow.value = true;
      };
      const Previous = () => {
        index2.value = 0;
        uploshow.value = false;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createVNode(joinset, { index: index2.value }, null, 8, ["index"]),
          !uploshow.value ? (vue.openBlock(), vue.createBlock(centern, {
            key: 0,
            onSubmit: submit
          })) : vue.createCommentVNode("v-if", true),
          uploshow.value ? (vue.openBlock(), vue.createBlock(Uploadthecertification, {
            key: 1,
            onPrevious: Previous
          })) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const PagesStayStay = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-66c75f8c"], ["__file", "C:/Users/Administrator/Desktop/vue3/pages/Stay/Stay.vue"]]);
  __definePage("pages/Home/Home", PagesHomeHome);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/Joinus/Joinus", PagesJoinusJoinus);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/Stay/Stay", PagesStayStay);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/Administrator/Desktop/vue3/App.vue"]]);
  const { toString } = Object.prototype;
  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (let i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge() {
    const result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url2, params) {
    if (!params) {
      return url2;
    }
    let serializedParams;
    if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      const parts = [];
      forEach(params, (val, key) => {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray(val)) {
          key = `${key}[]`;
        } else {
          val = [val];
        }
        forEach(val, (v) => {
          if (isDate(v)) {
            v = v.toISOString();
          } else if (isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(`${encode(key)}=${encode(v)}`);
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      const hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}` : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle(resolve, reject, response) {
    const { validateStatus } = response.config;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$1 = (keys, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    return config3;
  };
  const adapter = (config2) => new Promise((resolve, reject) => {
    const fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params);
    const _config = {
      url: fullPath,
      header: config2.header,
      complete: (response) => {
        config2.fullPath = fullPath;
        response.config = config2;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config2.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      const otherConfig = {
        filePath: config2.filePath,
        name: config2.name
      };
      const optionalKeys = [
        "files",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile({ ..._config, ...otherConfig, ...mergeKeys$1(optionalKeys, config2) });
    } else if (config2.method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        _config.timeout = config2.timeout;
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      requestTask = uni.request({ ..._config, ...mergeKeys$1(optionalKeys, config2) });
    }
    if (config2.getTask) {
      config2.getTask(requestTask, config2);
    }
  });
  const dispatchRequest = (config2) => adapter(config2);
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h) => {
      if (h !== null) {
        fn(h);
      }
    });
  };
  const mergeKeys = (keys, globalsConfig, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      } else if (!isUndefined(globalsConfig[prop])) {
        config3[prop] = globalsConfig[prop];
      }
    });
    return config3;
  };
  const mergeConfig = (globalsConfig, config2 = {}) => {
    const method = config2.method || globalsConfig.method || "GET";
    let config3 = {
      baseURL: globalsConfig.baseURL || "",
      method,
      url: config2.url || "",
      params: config2.params || {},
      custom: { ...globalsConfig.custom || {}, ...config2.custom || {} },
      header: deepMerge(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus"];
    config3 = { ...config3, ...mergeKeys(defaultToConfig2Keys, globalsConfig, config2) };
    if (method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        config3.timeout = config2.timeout;
      } else if (!isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else if (method === "UPLOAD") {
      delete config3.header["content-type"];
      delete config3.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined(config2[prop])) {
          config3[prop] = config2[prop];
        }
      });
      if (isUndefined(config3.timeout) && !isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config3 = { ...config3, ...mergeKeys(defaultsKeys, globalsConfig, config2) };
    }
    return config3;
  };
  const defaults = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  var clone = function() {
    function _instanceof(obj, type2) {
      return type2 != null && obj instanceof type2;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value2) {
              resolve(_clone(value2, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype == "undefined") {
            proto = Object.getPrototypeOf(parent2);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }
        if (circular) {
          var index2 = allParents.indexOf(parent2);
          if (index2 != -1) {
            return allChildren[index2];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value2, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value2, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value2) {
            var entryChild = _clone(value2, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i);
          if (attrs) {
            child[i] = _clone(parent2[i], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i] = _clone(parent2[i], depth2 - 1);
          } catch (e) {
            if (e instanceof TypeError) {
              continue;
            } else if (e instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i = 0; i < allPropertyNames.length; i++) {
            var propertyName = allPropertyNames[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c = function() {
      };
      c.prototype = parent;
      return new c();
    };
    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o) {
      return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o) {
      return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o) {
      return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
      var flags = "";
      if (re.global)
        flags += "g";
      if (re.ignoreCase)
        flags += "i";
      if (re.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  class Request {
    /**
    * @param {Object} arg - 全局配置
    * @param {String} arg.baseURL - 全局根路径
    * @param {Object} arg.header - 全局header
    * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
    * @param {String} arg.dataType = [json] - 全局默认的dataType
    * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
    * @param {Object} arg.custom - 全局默认的自定义参数
    * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
    * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
    * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
    * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
    * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
    */
    constructor(arg = {}) {
      if (!isPlainObject(arg)) {
        arg = {};
        formatAppLog("warn", "at node_modules/uview-plus/libs/luch-request/core/Request.js:39", "设置全局参数必须接收一个Object");
      }
      this.config = clone({ ...defaults, ...arg });
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    /**
    * @Function
    * @param {Request~setConfigCallback} f - 设置全局默认配置
    */
    setConfig(f) {
      this.config = f(this.config);
    }
    middleware(config2) {
      config2 = mergeConfig(this.config, config2);
      const chain = [dispatchRequest, void 0];
      let promise2 = Promise.resolve(config2);
      this.interceptors.request.forEach((interceptor) => {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach((interceptor) => {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise2 = promise2.then(chain.shift(), chain.shift());
      }
      return promise2;
    }
    /**
    * @Function
    * @param {Object} config - 请求配置项
    * @prop {String} options.url - 请求路径
    * @prop {Object} options.data - 请求参数
    * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
    * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
    * @prop {Object} [options.header = config.header] - 请求header
    * @prop {Object} [options.method = config.method] - 请求方法
    * @returns {Promise<unknown>}
    */
    request(config2 = {}) {
      return this.middleware(config2);
    }
    get(url2, options = {}) {
      return this.middleware({
        url: url2,
        method: "GET",
        ...options
      });
    }
    post(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "POST",
        ...options
      });
    }
    put(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "PUT",
        ...options
      });
    }
    delete(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "DELETE",
        ...options
      });
    }
    options(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "OPTIONS",
        ...options
      });
    }
    upload(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "UPLOAD";
      return this.middleware(config2);
    }
    download(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "DOWNLOAD";
      return this.middleware(config2);
    }
  }
  const zIndex = {
    toast: 10090,
    noNetwork: 10080,
    // popup包含popup，actionsheet，keyboard，picker的值
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  let platform = "none";
  platform = "vue3";
  platform = "plus";
  const platform$1 = platform;
  const http = new Request();
  let themeType = ["primary", "success", "error", "warning", "info"];
  function setConfig(configs) {
    index.shallowMerge(config, configs.config || {});
    index.shallowMerge(props$m, configs.props || {});
    index.shallowMerge(color, configs.color || {});
    index.shallowMerge(zIndex, configs.zIndex || {});
  }
  index.setConfig = setConfig;
  const $u = {
    route,
    date: index.timeFormat,
    // 另名date
    colorGradient: colorGradient$1.colorGradient,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    colorToRgba: colorGradient$1.colorToRgba,
    test,
    type: themeType,
    http,
    config,
    // uview-plus配置信息相关，比如版本号
    zIndex,
    debounce,
    throttle,
    mixin,
    mpMixin,
    props: props$m,
    ...index,
    color,
    platform: platform$1
  };
  const install = (Vue2) => {
    uni.$u = $u;
    Vue2.config.globalProperties.$u = $u;
    Vue2.mixin(mixin);
  };
  const uviewPlus = {
    install
  };
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(uviewPlus);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
