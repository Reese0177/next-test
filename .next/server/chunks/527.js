"use strict";
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__(847);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Navbar.js




const Navbar = () => /*#__PURE__*/jsx_runtime_.jsx("nav", {
  className: "navbar navbar-expand navbar-dark bg-dark mb-4",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "navbar-brand",
      href: "#",
      children: "BitzPrice"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "collapse navbar-collapse",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "navbar-nav ml-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "nav-item",
          children: /*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link",
              children: "Home"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "nav-item",
          children: /*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
            href: "/about",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link",
              children: "About"
            })
          })
        })]
      })
    })]
  })
});

/* harmony default export */ const components_Navbar = (Navbar);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Layout.js





const Layout = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: "Bitzprice"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "stylesheet",
      href: "https://bootswatch.com/5/slate/bootstrap.css"
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: props.children
  })]
});

/* harmony default export */ const components_Layout = (Layout);

/***/ })

};
;