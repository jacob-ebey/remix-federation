"use strict";
(self["webpackChunkremix_app_template"] = self["webpackChunkremix_app_template"] || []).push([["app_routes_federated_name_tsx"],{

/***/ "./app/components/nav.tsx":
/*!********************************!*\
  !*** ./app/components/nav.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var remix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remix */ "webpack/sharing/consume/default/@remix-run/react/@remix-run/react");
/* harmony import */ var remix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remix__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");

function Nav() {
  return /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(remix__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/rofl/test"
  }, "Federated Page")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(remix__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/about"
  }, "Learn how this works"))));
}


/***/ }),

/***/ "./app/routes/federated.$name.tsx":
/*!****************************************!*\
  !*** ./app/routes/federated.$name.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loader": () => (/* binding */ loader),
/* harmony export */   "default": () => (/* binding */ FederatedName)
/* harmony export */ });
/* harmony import */ var remix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remix */ "webpack/sharing/consume/default/@remix-run/react/@remix-run/react");
/* harmony import */ var remix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/nav */ "./app/components/nav.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");


let loader = ({ params }) => {
  return params.name || "world";
};
function FederatedName() {
  let name = (0,remix__WEBPACK_IMPORTED_MODULE_0__.useLoaderData)();
  return /* @__PURE__ */ React.createElement("header", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("hgroup", null, /* @__PURE__ */ React.createElement("h1", null, "Federated Route"), /* @__PURE__ */ React.createElement("h2", null, "Hello, ", name)), /* @__PURE__ */ React.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}


/***/ })

}]);