webpackHotUpdate(0,{

/***/ "./src/BeanList.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(\"./node_modules/axios/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BeanCard__ = __webpack_require__(\"./src/BeanCard.jsx\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(\"./src/Header.jsx\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/* eslint no-console:0 */\n\n\n\n\n\nvar BeanList = function (_Component) {\n  _inherits(BeanList, _Component);\n\n  function BeanList() {\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, BeanList);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {\n      searchTerm: '',\n      beanList: ''\n    }, _this.handleSearchTermChange = function () {\n      var _this2;\n\n      return (_this2 = _this).__handleSearchTermChange__REACT_HOT_LOADER__.apply(_this2, arguments);\n    }, _this.handleFilterBeansInput = function () {\n      var _this3;\n\n      return (_this3 = _this).__handleFilterBeansInput__REACT_HOT_LOADER__.apply(_this3, arguments);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  BeanList.prototype.componentDidMount = function componentDidMount() {\n    var _this4 = this;\n\n    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('http://127.0.0.1:1337/beanlist').then(function (resData) {\n      _this4.setState({ beanList: resData.data });\n      console.log('line 16');\n    }).catch(function (err) {\n      return console.log(err);\n    });\n  };\n\n  BeanList.prototype.__handleSearchTermChange__REACT_HOT_LOADER__ = function __handleSearchTermChange__REACT_HOT_LOADER__(event) {\n    this.setState({ searchTerm: event.target.value });\n  };\n\n  BeanList.prototype.__handleFilterBeansInput__REACT_HOT_LOADER__ = function __handleFilterBeansInput__REACT_HOT_LOADER__() {\n    var _this5 = this;\n\n    var beans = this.props.beans.filter(function (cur) {\n      return (cur.name + ' ' + cur.region + ' ' + cur.description).toUpperCase().indexOf(_this5.state.searchTerm.toUpperCase()) >= 0;\n    });\n    return beans || [];\n  };\n\n  BeanList.prototype.render = function render() {\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'div',\n      { className: 'beanList' },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__[\"a\" /* default */], {\n        searchTerm: this.state.searchTerm,\n        handleSearchTermChange: this.handleSearchTermChange\n      }),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'div',\n        null,\n        this.handleFilterBeansInput().map(function (curBean) {\n          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__BeanCard__[\"a\" /* default */], _extends({ key: curBean.id }, curBean));\n        })\n      )\n    );\n  };\n\n  return BeanList;\n}(__WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"]);\n\nvar _default = BeanList;\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n;\n\nvar _temp2 = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(BeanList, 'BeanList', '/Users/FloweryPao/Documents/nolli-coffee/src/BeanList.jsx');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/FloweryPao/Documents/nolli-coffee/src/BeanList.jsx');\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQmVhbkxpc3QuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0JlYW5MaXN0LmpzeD84ZmMzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyogZXNsaW50IG5vLWNvbnNvbGU6MCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQmVhbkNhcmQgZnJvbSAnLi9CZWFuQ2FyZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxudmFyIEJlYW5MaXN0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEJlYW5MaXN0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCZWFuTGlzdCgpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJlYW5MaXN0KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFRlcm06ICcnLFxuICAgICAgYmVhbkxpc3Q6ICcnXG4gICAgfSwgX3RoaXMuaGFuZGxlU2VhcmNoVGVybUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpczI7XG5cbiAgICAgIHJldHVybiAoX3RoaXMyID0gX3RoaXMpLl9faGFuZGxlU2VhcmNoVGVybUNoYW5nZV9fUkVBQ1RfSE9UX0xPQURFUl9fLmFwcGx5KF90aGlzMiwgYXJndW1lbnRzKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVGaWx0ZXJCZWFuc0lucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzMztcblxuICAgICAgcmV0dXJuIChfdGhpczMgPSBfdGhpcykuX19oYW5kbGVGaWx0ZXJCZWFuc0lucHV0X19SRUFDVF9IT1RfTE9BREVSX18uYXBwbHkoX3RoaXMzLCBhcmd1bWVudHMpO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgQmVhbkxpc3QucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6MTMzNy9iZWFubGlzdCcpLnRoZW4oZnVuY3Rpb24gKHJlc0RhdGEpIHtcbiAgICAgIF90aGlzNC5zZXRTdGF0ZSh7IGJlYW5MaXN0OiByZXNEYXRhLmRhdGEgfSk7XG4gICAgICBjb25zb2xlLmxvZygnbGluZSAxNicpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xuICB9O1xuXG4gIEJlYW5MaXN0LnByb3RvdHlwZS5fX2hhbmRsZVNlYXJjaFRlcm1DaGFuZ2VfX1JFQUNUX0hPVF9MT0FERVJfXyA9IGZ1bmN0aW9uIF9faGFuZGxlU2VhcmNoVGVybUNoYW5nZV9fUkVBQ1RfSE9UX0xPQURFUl9fKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRlcm06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBCZWFuTGlzdC5wcm90b3R5cGUuX19oYW5kbGVGaWx0ZXJCZWFuc0lucHV0X19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX2hhbmRsZUZpbHRlckJlYW5zSW5wdXRfX1JFQUNUX0hPVF9MT0FERVJfXygpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciBiZWFucyA9IHRoaXMucHJvcHMuYmVhbnMuZmlsdGVyKGZ1bmN0aW9uIChjdXIpIHtcbiAgICAgIHJldHVybiAoY3VyLm5hbWUgKyAnICcgKyBjdXIucmVnaW9uICsgJyAnICsgY3VyLmRlc2NyaXB0aW9uKS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoX3RoaXM1LnN0YXRlLnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSkgPj0gMDtcbiAgICB9KTtcbiAgICByZXR1cm4gYmVhbnMgfHwgW107XG4gIH07XG5cbiAgQmVhbkxpc3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdiZWFuTGlzdCcgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7XG4gICAgICAgIHNlYXJjaFRlcm06IHRoaXMuc3RhdGUuc2VhcmNoVGVybSxcbiAgICAgICAgaGFuZGxlU2VhcmNoVGVybUNoYW5nZTogdGhpcy5oYW5kbGVTZWFyY2hUZXJtQ2hhbmdlXG4gICAgICB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckJlYW5zSW5wdXQoKS5tYXAoZnVuY3Rpb24gKGN1ckJlYW4pIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChCZWFuQ2FyZCwgX2V4dGVuZHMoeyBrZXk6IGN1ckJlYW4uaWQgfSwgY3VyQmVhbikpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIEJlYW5MaXN0O1xufShDb21wb25lbnQpO1xuXG52YXIgX2RlZmF1bHQgPSBCZWFuTGlzdDtcblxuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7XG47XG5cbnZhciBfdGVtcDIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgX19SRUFDVF9IT1RfTE9BREVSX18gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoQmVhbkxpc3QsICdCZWFuTGlzdCcsICcvVXNlcnMvRmxvd2VyeVBhby9Eb2N1bWVudHMvbm9sbGktY29mZmVlL3NyYy9CZWFuTGlzdC5qc3gnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihfZGVmYXVsdCwgJ2RlZmF1bHQnLCAnL1VzZXJzL0Zsb3dlcnlQYW8vRG9jdW1lbnRzL25vbGxpLWNvZmZlZS9zcmMvQmVhbkxpc3QuanN4Jyk7XG59KCk7XG5cbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9CZWFuTGlzdC5qc3hcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL0JlYW5MaXN0LmpzeFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})