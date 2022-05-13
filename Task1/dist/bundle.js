/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Rubik, Arial, sans-serif;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-family: Rubik, Arial, sans-serif;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nol,\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.success {\n  border: 3px solid green;\n  width: 100%;\n  max-width: 300px;\n  margin: 10px auto;\n  height: 100px;\n  font-size: 20px;\n  color: green;\n  padding: 30px;\n  background-color: rgb(191, 223, 191);\n}\n\n.danger {\n  border: 3px solid red;\n  width: 50%;\n  margin: 10px auto;\n  height: 100px;\n  font-size: 20px;\n  color: red;\n  padding: 30px;\n  background-color: rgb(248, 248, 248);\n}\n\n#btn__primary {\n  padding: 20px;\n  font-size: 20px;\n  border-radius: 20px;\n  background-color: green;\n  color: #fff;\n  transition: all 0.4s ease-out;\n  border: none;\n  cursor: pointer;\n  transition: all 0.4s ease-out;\n}\n#btn__primary:hover {\n  background-color: rgb(235, 129, 8);\n}\n.form {\n  margin: 0 auto;\n}\n.form form {\n  max-width: 300px;\n  width: 100%;\n  margin: 50px auto;\n  padding: 20px;\n}\n.form form .input_wrapper {\n  display: block;\n  position: relative;\n  font-weight: bold;\n}\n.form form .input_wrapper .error {\n  color: rgb(250, 9, 9);\n  padding: 10px;\n  width: 100%;\n  position: absolute;\n  top: 30%;\n  font-weight: bold;\n  font-size: 15px;\n  visibility: hidden;\n}\n.form form .input_wrapper .error::before {\n  content: attr(data-before);\n  position: absolute;\n  padding: 4px 8px;\n  background-color: var(--success);\n  border-radius: 50%;\n  font-size: 10px;\n  color: white;\n  visibility: var(--visible);\n  left: -30px;\n}\n.form form input {\n  padding: 15px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  position: relative;\n  width: 100%;\n  border-radius: 10px;\n  border-color: rgba(0, 0, 0, 0.2);\n  transition: all 0.4s ease-out;\n}\n.form form input.valid {\n  border: 3px solid green;\n}\n.form form input.invalid {\n  border: 3px solid red;\n}\n.form form input.invalid + .error {\n  visibility: visible;\n  color: red;\n}\n.form form input:focus {\n  box-shadow: 4px 4px 10px 5px rgba(153, 151, 151, 0.6);\n  outline: none;\n}\n.form form input::-webkit-outer-spin-button, .form form input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.form form button {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/base/_base.scss","webpack://./src/styles/abstracts/_variables.scss","webpack://./src/styles/main.scss","webpack://./src/styles/base/_helpers.scss","webpack://./src/styles/components/_button.scss","webpack://./src/styles/abstracts/_mixin.scss","webpack://./src/styles/pages/_home.scss"],"names":[],"mappings":"AAKA;EACI,UAAA;EACA,SAAA;EACA,sBAAA;EACA,qCCNU;ACGd;;AFMA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFI,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;EACA,qCChGU;AC6Fd;;AFSA;;;;;;;;;;;EAWI,cAAA;AENJ;;AFSA;EACI,yBAAA;EACA,iBAAA;AENJ;;AFSA;;EAEI,YAAA;AENJ;;AFSA;;EAEI,gBAAA;AENJ;;AFSA;EACI,qBAAA;AENJ;;AC1HA;EACI,uBAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACE,oCAAA;AD6HN;;ACzHE;EACI,qBAAA;EACA,UAAA;EACA,iBAAA;EACA,aAAA;EACA,eAAA;EACA,UAAA;EACA,aAAA;EACE,oCAAA;AD4HR;;AElJA;EACI,aAAA;EACA,eAAA;ECFA,mBDGgB;EAChB,uBAAA;EACA,WAAA;ECAA,6BAAA;EDEA,YAAA;EACA,eAAA;ECHA,6BAAA;AHyJJ;AGxJI;EAEI,kCDFuB;AF2J/B;AInKA;EACC,cAAA;AJqKD;AIpKC;EACG,gBAAA;EACA,WAAA;EACC,iBAAA;EACA,aAAA;AJsKL;AInKK;EACG,cAAA;EACA,kBAAA;EACA,iBAAA;AJqKR;AIlKQ;EACI,qBAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;EACA,QAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;AJoKZ;AInKY;EACI,0BAAA;EACA,kBAAA;EACD,gBAAA;EACC,gCAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,0BAAA;EACA,WAAA;AJqKhB;AI9JK;EACG,aAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;ED3CJ,mBC4CyB;EACrB,gCL/CG;EIOP,6BAAA;AHyMJ;AI7JgB;EACI,uBAAA;AJ+JpB;AI3JgB;EACI,qBAAA;AJ6JpB;AIxJgB;EACI,mBAAA;EACA,UAAA;AJ0JpB;AIrJQ;EACI,qDAAA;EACA,aAAA;AJuJZ;AIrJQ;EAEE,wBAAA;AJsJV;AIjJI;EACI,WAAA;AJmJR","sourcesContent":["// -----------------------------------------------------------------------------\r\n// This file contains very basic styles.\r\n// -----------------------------------------------------------------------------\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: $font-family;\r\n}\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n    font-family: $font-family;\r\n  \r\n\r\n}\r\n\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nblockquote,\r\nq {\r\n    quotes: none;\r\n}\r\n\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n","// -----------------------------------------------------------------------------\r\n// This file contains all application-wide Sass variables.\r\n// -----------------------------------------------------------------------------\r\n$font-family: Rubik, Arial,sans-serif;\r\n$black-100:rgba(0,0,0,0.2);\r\n\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap\");\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Rubik, Arial, sans-serif;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-family: Rubik, Arial, sans-serif;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nol,\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.success {\n  border: 3px solid green;\n  width: 100%;\n  max-width: 300px;\n  margin: 10px auto;\n  height: 100px;\n  font-size: 20px;\n  color: green;\n  padding: 30px;\n  background-color: rgb(191, 223, 191);\n}\n\n.danger {\n  border: 3px solid red;\n  width: 50%;\n  margin: 10px auto;\n  height: 100px;\n  font-size: 20px;\n  color: red;\n  padding: 30px;\n  background-color: rgb(248, 248, 248);\n}\n\n#btn__primary {\n  padding: 20px;\n  font-size: 20px;\n  border-radius: 20px;\n  background-color: green;\n  color: #fff;\n  transition: all 0.4s ease-out;\n  border: none;\n  cursor: pointer;\n  transition: all 0.4s ease-out;\n}\n#btn__primary:hover {\n  background-color: rgb(235, 129, 8);\n}\n.form {\n  margin: 0 auto;\n}\n.form form {\n  max-width: 300px;\n  width: 100%;\n  margin: 50px auto;\n  padding: 20px;\n}\n.form form .input_wrapper {\n  display: block;\n  position: relative;\n  font-weight: bold;\n}\n.form form .input_wrapper .error {\n  color: rgb(250, 9, 9);\n  padding: 10px;\n  width: 100%;\n  position: absolute;\n  top: 30%;\n  font-weight: bold;\n  font-size: 15px;\n  visibility: hidden;\n}\n.form form .input_wrapper .error::before {\n  content: attr(data-before);\n  position: absolute;\n  padding: 4px 8px;\n  background-color: var(--success);\n  border-radius: 50%;\n  font-size: 10px;\n  color: white;\n  visibility: var(--visible);\n  left: -30px;\n}\n.form form input {\n  padding: 15px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n  position: relative;\n  width: 100%;\n  border-radius: 10px;\n  border-color: rgba(0, 0, 0, 0.2);\n  transition: all 0.4s ease-out;\n}\n.form form input.valid {\n  border: 3px solid green;\n}\n.form form input.invalid {\n  border: 3px solid red;\n}\n.form form input.invalid + .error {\n  visibility: visible;\n  color: red;\n}\n.form form input:focus {\n  box-shadow: 4px 4px 10px 5px rgba(153, 151, 151, 0.6);\n  outline: none;\n}\n.form form input::-webkit-outer-spin-button, .form form input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n.form form button {\n  width: 100%;\n}","// -----------------------------------------------------------------------------\r\n// This file contains CSS helper classes.\r\n// -----------------------------------------------------------------------------\r\n\r\n\r\n\r\n\r\n.success{\r\n    border:3px solid green;\r\n    width:100%;\r\n    max-width:300px;\r\n    margin: 10px auto;\r\n    height:100px;\r\n    font-size: 20px;\r\n    color:green;\r\n    padding:30px;\r\n      background-color: rgb(191, 223, 191);\r\n   \r\n}\r\n\r\n  .danger{\r\n      border:3px solid red;\r\n      width:50%;\r\n      margin: 10px auto;\r\n      height:100px;\r\n      font-size: 20px;\r\n      color:red;\r\n      padding:30px;\r\n        background-color: rgb(248, 248, 248);     \r\n  }\r\n","// -----------------------------------------------------------------------------\r\n// This file contains all styles related to the button component.\r\n// -----------------------------------------------------------------------------\r\n\r\n\r\n\r\n#btn__primary{\r\n    padding:20px;\r\n    font-size: 20px;\r\n    @include border(20px);\r\n    background-color:green;\r\n    color:#fff;\r\n    @include transition($bgCol:rgb(235, 129, 8));\r\n    border: none;\r\n    cursor: pointer;\r\n    @include transition;\r\n}","// -----------------------------------------------------------------------------\r\n// This file contains all application-wide Sass mixins.\r\n// -----------------------------------------------------------------------------\r\n\r\n\r\n@mixin border($rad:null,$bord:null){\r\n    border-radius:$rad;\r\n    $border:$bord;\r\n}\r\n\r\n@mixin transition($col:null,$bgCol:null){\r\n    transition:all 0.4s ease-out;\r\n    &:hover{\r\n        color:$col;\r\n        background-color:$bgCol;\r\n    }\r\n}","// -----------------------------------------------------------------------------\r\n// This file contains styles that are specific to the home page.\r\n// ---------------\r\n\r\n.form{\r\n margin:0 auto;\r\n form{\r\n    max-width:300px;\r\n    width:100%;\r\n     margin:50px auto;\r\n     padding:20px;\r\n     \r\n    \r\n     .input_wrapper{\r\n        display: block;\r\n        position:relative;\r\n        font-weight: bold;\r\n      \r\n    \r\n        .error{\r\n            color:rgb(250, 9, 9);\r\n            padding:10px;\r\n            width:100%;\r\n            position:absolute;\r\n            top:30%;\r\n            font-weight: bold;\r\n            font-size: 15px;\r\n            visibility: hidden;\r\n            &::before{\r\n                content:attr(data-before);\r\n                position: absolute;\r\n               padding:4px 8px;\r\n                background-color:var(--success);\r\n                border-radius: 50%;\r\n                font-size: 10px;\r\n                color:white;\r\n                visibility:var(--visible);\r\n                left:-30px;\r\n            }\r\n            \r\n            \r\n        }\r\n    \r\n    }\r\n     input{\r\n        padding:15px;\r\n        margin-top:10px;\r\n        margin-bottom:30px;\r\n        position:relative;\r\n        width:100%;\r\n        @include border($rad:10px);\r\n        border-color: $black-100;\r\n        \r\n        @include transition;\r\n                    \r\n                &.valid{\r\n                    border:3px solid green\r\n                \r\n                }\r\n\r\n                &.invalid{\r\n                    border:3px solid red;\r\n                    \r\n                }\r\n              \r\n\r\n                &.invalid + .error{\r\n                    visibility: visible;\r\n                    color:red;\r\n                }\r\n \r\n\r\n\r\n        &:focus{\r\n            box-shadow: 4px 4px 10px 5px rgba(153, 151, 151, 0.6);\r\n            outline: none;\r\n        }\r\n        &::-webkit-outer-spin-button,\r\n        &::-webkit-inner-spin-button {\r\n          -webkit-appearance: none;\r\n         \r\n        }\r\n    \r\n    }\r\n    button{\r\n        width:100%;\r\n     }\r\n   \r\n    }\r\n\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/Error.js":
/*!*************************!*\
  !*** ./src/js/Error.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ erroricons)
/* harmony export */ });
let errorClass = document.querySelectorAll('.error');

//display error icons 
function erroricons(field,num,errormsg){
   
    if(field.className == "invalid"){
        errorClass.item(num).setAttribute('data-before','!');
        errorClass.item(num).style.setProperty('--success','red');
        errorClass.item(num).innerHTML=`${errormsg}`;
    }
    else if(field.className == "valid"){
        errorClass.item(num).setAttribute('data-before','✓');
        errorClass.item(num).style.setProperty('--visible','visible');
        errorClass.item(num).style.setProperty('--success','green');
    }
}



/***/ }),

/***/ "./src/js/validate.js":
/*!****************************!*\
  !*** ./src/js/validate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validate)
/* harmony export */ });


//Validation using regex
function validate(field,regex){
    if(regex.test(field.value)){
        field.className="valid";
      
    } else{
        field.className="invalid";
        
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error */ "./src/js/Error.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate */ "./src/js/validate.js");




let form = document.forms[0];

let inputsElem = Array.from(form.children);
const nameRegex = new RegExp(/^[A-Za-z]{2,20}$/);
const emailRegExp = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]+$/i);
const phoneno = new RegExp(/^\d{10}$/);
let passReg = new RegExp(/^(?=.*[0-9])(?=.*[@$%*#!&])[a-zA-Z0-9!@#$%*&]{6,20}$/);

let inputs = document.querySelectorAll('input');
let displayError = document.getElementById('displayError');
let btn = document.getElementById('btn__primary');

console.log(inputs[0]);




btn.addEventListener('click',(e)=>{
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value == "" || inputs[i].className == "invalid"){  
            displayError.innerHTML="One of the field is incorrect or invalid. Please, follow the examples in order to continue";
            displayError.classList.add('danger');
            displayError.classList.remove('success');
            inputs[i].className="invalid";  
            
        } 
        else if(inputs[0].className == "valid"){
            if(inputs[1].className == "valid"){
                if(inputs[2].className == "valid"){
                    if(inputs[3].className == "valid"){
                        if(inputs[4].className == "valid"){
                            displayError.innerHTML="Your form has been submitted ";
                        displayError.classList.remove('danger');
                        displayError.classList.add('success');
                        }
                    }
                }
            }
        }
                           
        }
       
        e.preventDefault();   
})




// Handling inputs 
inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
      
            if(e.target.name === 'firstName'){
                (0,_validate__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target,nameRegex);
                (0,_Error__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target,0,"Please enter a valid First Name");
                     
            } 
             else if(e.target.name === 'lastName'){
                (0,_validate__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target,nameRegex)
                ;(0,_Error__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target,1,"Please enter a valid Last Name");
            }
            
            else if(e.target.name === 'email'){
                (0,_validate__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target,emailRegExp);
                (0,_Error__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target,2);
                (0,_Error__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target,2,"Please enter a valid email");
                if(e.target.value > 20){
                    (0,_Error__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target,2,"Please enter a @ email");
                }
               
            }
            else if(e.target.name === 'phoneNo'){
                (0,_validate__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target,phoneno);
                (0,_Error__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target,3);
                (0,_Error__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target,3,"Your contact No. should be of 10 digits only");   
            }
            else if(e.target.name === 'password'){
                (0,_validate__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target,passReg);
                (0,_Error__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target,4,"Your password should contain atleast 1 digit and 1 special character");
               
            }
    })
})

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map