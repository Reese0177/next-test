"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

;// CONCATENATED MODULE: external "isomorphic-unfetch"
const external_isomorphic_unfetch_namespaceObject = require("isomorphic-unfetch");
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(527);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Prices.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Prices extends (external_react_default()).Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      currency: 'USD'
    });
  }

  render() {
    let list;

    if (this.state.currency === 'USD') {
      list = /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "list-group-item",
        children: ["Bitcoin rate for ", this.props.bpi.USD.description, ": ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "badge badge-primary",
          children: [this.props.bpi.USD.code, " ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: this.props.bpi.USD.rate
          })]
        })]
      });
    } else if (this.state.currency === 'GBP') {
      list = /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "list-group-item",
        children: ["Bitcoin rate for ", this.props.bpi.GBP.description, ": ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "badge badge-primary",
          children: [this.props.bpi.GBP.code, " ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: this.props.bpi.GBP.rate
          })]
        })]
      });
    } else if (this.state.currency === 'EUR') {
      list = /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "list-group-item",
        children: ["Bitcoin rate for ", this.props.bpi.EUR.description, ": ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "badge badge-primary",
          children: [this.props.bpi.EUR.code, " ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: this.props.bpi.EUR.rate
          })]
        })]
      });
    }

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "list-group",
        children: list
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
        onChange: e => this.setState({
          currency: e.target.value
        }),
        className: "form-control",
        children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "USD",
          children: "USD"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "GBP",
          children: "GBP"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "EUR",
          children: "EUR"
        })]
      })]
    });
  }

}

/* harmony default export */ const components_Prices = (Prices);
;// CONCATENATED MODULE: ./pages/index.js






const Index = props => /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Hello Next.js"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Check current Bitcoin rates"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Prices, {
      bpi: props.bpi
    })]
  })
});

Index.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentPrice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  };
};

/* harmony default export */ const pages = (Index);

/***/ }),

/***/ 847:
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [527], () => (__webpack_exec__(559)));
module.exports = __webpack_exports__;

})();