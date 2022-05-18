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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Rubik, Arial, sans-serif;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-family: Rubik, Arial, sans-serif;\n}\n\nhtml, body {\n  min-width: fit-content;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nol,\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.editicn {\n  position: absolute;\n  right: 40px;\n  bottom: 25px;\n  font-size: 25px;\n  transform: rotate(90deg);\n  cursor: pointer;\n  opacity: 0.8;\n  transition: all 0.5s ease-in-out;\n}\n.editicn:hover {\n  opacity: 1;\n}\n\n.bord {\n  border: 1px solid white;\n  padding: 10px;\n  position: relative;\n}\n\n.trashicn {\n  position: absolute;\n  right: 20px;\n  top: 23%;\n  font-size: 25px;\n  cursor: pointer;\n  opacity: 0.8;\n  transition: all 0.5s ease-in-out;\n}\n.trashicn:hover {\n  opacity: 1;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\nh1 {\n  font-size: 35px;\n  font-weight: bold;\n}\n\n.btn {\n  font-size: 20px;\n  color: #fff;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n.btn--primary {\n  background-color: rgb(11, 202, 11);\n  padding: 20px;\n  margin-top: 40px;\n  width: 40%;\n}\n.btn--primary:hover {\n  box-shadow: 0 0 4px 4px rgba(250, 250, 250, 0.3);\n  background-color: rgba(92, 91, 83, 0.8);\n}\n.btn--secondary {\n  width: 40%;\n  margin-top: 40px;\n  padding: 20px;\n  background-color: rgb(75, 70, 74);\n}\n.btn--secondary:hover {\n  box-shadow: 0 0 4px 4px rgba(250, 250, 250, 0.3);\n  background-color: rgba(92, 91, 83, 0.8);\n}\n\n.task {\n  width: 100%;\n  border: 1px solid red;\n  max-width: 500px;\n  min-height: 100vh;\n  margin: 0 auto;\n  color: #fff;\n  font-size: 22px;\n  padding: 30px;\n  text-align: center;\n  position: relative;\n}\n.task h1 {\n  padding: 20px;\n  background-color: orange;\n}\n.task__add {\n  cursor: pointer;\n  background-color: rgb(99, 168, 180);\n  width: 50px;\n  height: 50px;\n  padding: 10px;\n  position: absolute;\n  bottom: 0;\n  right: 20px;\n  border-radius: 50px;\n  transition: all 0.5s ease-in-out;\n}\n.task__add:hover {\n  background-color: crimson;\n}\n\n#task__container {\n  background-color: crimson;\n  padding: 30px;\n  text-align: left;\n  font-size: 20px;\n}\n#task__container.show {\n  display: block;\n}\n#task__container input {\n  padding: 10px;\n  outline: none;\n  border: none;\n  width: 100%;\n  border-radius: 5px;\n  margin-bottom: 20px;\n  margin-top: 10px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n  font-size: 20px;\n}\n#task__container input:hover {\n  box-shadow: 0 0 4px 4px rgba(250, 250, 250, 0.3);\n}\n#task__container textarea {\n  width: 100%;\n  margin-top: 10px;\n  outline: none;\n  border: none;\n  font-size: 20px;\n  transition: all 0.5s ease-in-out;\n}\n#task__container textarea:hover {\n  box-shadow: 0 0 4px 4px rgba(250, 250, 250, 0.3);\n}\n#task__container .task__buttons {\n  display: flex;\n  justify-content: space-around;\n}\n#task__box {\n  background-color: orange;\n  margin-top: 0;\n  text-align: left;\n  font-size: 15px;\n}", "",{"version":3,"sources":["webpack://./src/styles/base/_base.scss","webpack://./src/styles/abstracts/_variables.scss","webpack://./src/styles/main.scss","webpack://./src/styles/base/_helpers.scss","webpack://./src/styles/abstracts/_mixin.scss","webpack://./src/styles/base/_typography.scss","webpack://./src/styles/components/_button.scss","webpack://./src/styles/pages/_home.scss"],"names":[],"mappings":"AAKA;EACI,UAAA;EACA,SAAA;EACA,sBAAA;EACA,qCCNU;ACGd;;AFMA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAkFI,eAAA;EACA,aAAA;EACA,wBAAA;EACA,qCC9FU;AC0Fd;;AFQA;EACI,sBAAA;AELJ;;AFQA;;;;;;;;;;;EAWI,cAAA;AELJ;;AFQA;EACI,yBAAA;EACA,iBAAA;AELJ;;AFQA;;EAEI,YAAA;AELJ;;AFQA;;EAEI,gBAAA;AELJ;;AFQA;EACI,qBAAA;AELJ;;AC/HA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,wBAAA;EACA,eAAA;EACA,YAAA;ECCA,gCAAA;AFkIJ;ACjII;EACI,UAAA;ADmIR;;AC9HA;EACI,uBAAA;EACA,aAAA;EACA,kBAAA;ADiIJ;;AC9HA;EACI,kBAAA;EACA,WAAA;EACA,QAAA;EACA,eAAA;EACA,eAAA;EACA,YAAA;ECnBA,gCAAA;AFqJJ;AChII;EACI,UAAA;ADkIR;;AC5HA;EACI,aAAA;AD+HJ;;AC5HG;EACI,cAAA;AD+HP;;AGxKA;EACI,eAAA;EACA,iBAAA;AH2KJ;;AI3KA;EACI,eAAA;EACA,WLDO;EKEP,aAAA;EACA,YAAA;EFHA,kBEIqB;EACrB,eAAA;EFAA,gCAAA;AF+KJ;AIvKI;EACI,kCAAA;EACA,aAAA;EACD,gBAAA;EACA,UAAA;AJyKP;AIxKO;EACC,gDAAA;EACG,uCAAA;AJ0KX;AIrKI;EACI,UAAA;EACA,gBAAA;EACA,aAAA;EACA,iCAAA;AJuKR;AItKQ;EACI,gDAAA;EACG,uCAAA;AJwKf;;AKxMI;EACI,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;EACA,WNNG;EMOH,eAAA;EACA,aAAA;EACA,kBAAA;EAEA,kBAAA;AL0MR;AKzMQ;EACI,aAAA;EACA,wBNbD;ACwNX;AKzMQ;EACI,eAAA;EACA,mCAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EHxBR,mBGyB6B;EHpB7B,gCAAA;AFgOJ;AK1MY;EACI,yBAAA;AL4MhB;;AKpMI;EACI,yBAAA;EACA,aAAA;EACA,gBAAA;EAEA,eAAA;ALsMR;AKrMQ;EACI,cAAA;ALuMZ;AKpMQ;EACI,aAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EHjDR,gCAAA;EGmDQ,eAAA;ALsMZ;AKrMY;EACI,gDAAA;ALuMhB;AKnMQ;EACI,WAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,eAAA;EH9DR,gCAAA;AFoQJ;AKlMY;EACI,gDAAA;ALoMhB;AKhMM;EACI,aAAA;EACA,6BAAA;ALkMV;AK7LI;EACI,wBAAA;EACA,aAAA;EACA,gBAAA;EACA,eAAA;AL+LR","sourcesContent":["// -----------------------------------------------------------------------------\r\n// This file contains very basic styles.\r\n// -----------------------------------------------------------------------------\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: $font-family;\r\n}\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  \r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n    font-family: $font-family;\r\n    \r\n\r\n}\r\nhtml,body{\r\n    min-width: fit-content;\r\n}\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nblockquote,\r\nq {\r\n    quotes: none;\r\n}\r\n\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n","// -----------------------------------------------------------------------------\r\n// This file contains all application-wide Sass variables.\r\n// -----------------------------------------------------------------------------\r\n$font-family: Rubik, Arial,sans-serif;\r\n$black-100:rgba(0,0,0,0.2);\r\n\r\n$text-base:#fff;\r\n$bg-orange:orange;","@import url(\"https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap\");\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Rubik, Arial, sans-serif;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-family: Rubik, Arial, sans-serif;\n}\n\nhtml, body {\n  min-width: fit-content;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nol,\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.editicn {\n  position: absolute;\n  right: 40px;\n  bottom: 25px;\n  font-size: 25px;\n  transform: rotate(90deg);\n  cursor: pointer;\n  opacity: 0.8;\n  transition: all 0.5s ease-in-out;\n}\n.editicn:hover {\n  opacity: 1;\n}\n\n.bord {\n  border: 1px solid white;\n  padding: 10px;\n  position: relative;\n}\n\n.trashicn {\n  position: absolute;\n  right: 20px;\n  top: 23%;\n  font-size: 25px;\n  cursor: pointer;\n  opacity: 0.8;\n  transition: all 0.5s ease-in-out;\n}\n.trashicn:hover {\n  opacity: 1;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\nh1 {\n  font-size: 35px;\n  font-weight: bold;\n}\n\n.btn {\n  font-size: 20px;\n  color: #fff;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n.btn--primary {\n  background-color: rgb(11, 202, 11);\n  padding: 20px;\n  margin-top: 40px;\n  width: 40%;\n}\n.btn--primary:hover {\n  box-shadow: 0 0 4px 4px rgba(250, 250, 250, 0.3);\n  background-color: rgba(92, 91, 83, 0.8);\n}\n.btn--secondary {\n  width: 40%;\n  margin-top: 40px;\n  padding: 20px;\n  background-color: rgb(75, 70, 74);\n}\n.btn--secondary:hover {\n  box-shadow: 0 0 4px 4px rgba(250, 250, 250, 0.3);\n  background-color: rgba(92, 91, 83, 0.8);\n}\n\n.task {\n  width: 100%;\n  border: 1px solid red;\n  max-width: 500px;\n  min-height: 100vh;\n  margin: 0 auto;\n  color: #fff;\n  font-size: 22px;\n  padding: 30px;\n  text-align: center;\n  position: relative;\n}\n.task h1 {\n  padding: 20px;\n  background-color: orange;\n}\n.task__add {\n  cursor: pointer;\n  background-color: rgb(99, 168, 180);\n  width: 50px;\n  height: 50px;\n  padding: 10px;\n  position: absolute;\n  bottom: 0;\n  right: 20px;\n  border-radius: 50px;\n  transition: all 0.5s ease-in-out;\n}\n.task__add:hover {\n  background-color: crimson;\n}\n\n#task__container {\n  background-color: crimson;\n  padding: 30px;\n  text-align: left;\n  font-size: 20px;\n}\n#task__container.show {\n  display: block;\n}\n#task__container input {\n  padding: 10px;\n  outline: none;\n  border: none;\n  width: 100%;\n  border-radius: 5px;\n  margin-bottom: 20px;\n  margin-top: 10px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n  font-size: 20px;\n}\n#task__container input:hover {\n  box-shadow: 0 0 4px 4px rgba(250, 250, 250, 0.3);\n}\n#task__container textarea {\n  width: 100%;\n  margin-top: 10px;\n  outline: none;\n  border: none;\n  font-size: 20px;\n  transition: all 0.5s ease-in-out;\n}\n#task__container textarea:hover {\n  box-shadow: 0 0 4px 4px rgba(250, 250, 250, 0.3);\n}\n#task__container .task__buttons {\n  display: flex;\n  justify-content: space-around;\n}\n#task__box {\n  background-color: orange;\n  margin-top: 0;\n  text-align: left;\n  font-size: 15px;\n}","// -----------------------------------------------------------------------------\r\n// This file contains CSS helper classes.\r\n// -----------------------------------------------------------------------------\r\n.editicn{\r\n    position:absolute;\r\n    right:40px;\r\n    bottom:25px;\r\n    font-size: 25px;\r\n    transform: rotate(90deg);\r\n    cursor: pointer;\r\n    opacity:0.8;\r\n    @include transition;\r\n    &:hover{\r\n        opacity:1;\r\n    }\r\n}\r\n\r\n\r\n.bord{\r\n    border:1px solid white;\r\n    padding:10px;\r\n    position:relative;\r\n}\r\n\r\n.trashicn{\r\n    position:absolute;\r\n    right:20px;\r\n    top:23%;\r\n    font-size: 25px;\r\n    cursor: pointer;\r\n    opacity:0.8;\r\n    @include transition;\r\n    &:hover{\r\n        opacity:1;\r\n    }\r\n  \r\n}\r\n\r\n\r\n.hide{\r\n    display: none;\r\n   }\r\n   \r\n   .show{\r\n       display: block;\r\n   }\r\n\r\n","// -----------------------------------------------------------------------------\r\n// This file contains all application-wide Sass mixins.\r\n// -----------------------------------------------------------------------------\r\n\r\n\r\n@mixin border($rad:null,$bord:null){\r\n    border-radius:$rad;\r\n    $border:$bord;\r\n}\r\n\r\n@mixin transition($col:null,$bgCol:null){\r\n    transition:all 0.5s ease-in-out;\r\n    &:hover{\r\n        color:$col;\r\n        background-color:$bgCol;\r\n    }\r\n}","// -----------------------------------------------------------------------------\r\n// This file contains all heading styles.\r\n// -----------------------------------------------------------------------------\r\nh1{\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n}\r\n\r\n","// -----------------------------------------------------------------------------\r\n// This file contains all styles related to the button component.\r\n// -----------------------------------------------------------------------------\r\n\r\n\r\n%btn{\r\n    font-size: 20px;\r\n    color:$text-base;\r\n    outline: none;\r\n    border: none;\r\n    @include border($rad:5px);\r\n    cursor: pointer;\r\n    @include transition;\r\n    \r\n\r\n}\r\n\r\n.btn{\r\n    @extend %btn;\r\n    &--primary{\r\n        background-color: rgb(11, 202, 11);\r\n        padding:20px;\r\n       margin-top:40px;\r\n       width:40%;\r\n       &:hover{\r\n        box-shadow: 0 0 4px 4px rgba(250, 250, 250, 0.3);\r\n           background-color: rgba(92, 91, 83,0.8);\r\n       }\r\n       \r\n\r\n    }\r\n    &--secondary{\r\n        width:40%;\r\n        margin-top:40px;\r\n        padding:20px;\r\n        background-color: rgb(75, 70, 74);\r\n        &:hover{\r\n            box-shadow: 0 0 4px 4px rgba(250, 250, 250, 0.3);\r\n               background-color: rgba(92, 91, 83,0.8);\r\n           }\r\n    \r\n    }\r\n}\r\n\r\n","// -----------------------------------------------------------------------------\r\n// This file contains styles that are specific to the home page.\r\n// ---------------\r\n\r\n\r\n\r\n    .task{\r\n        width:100%;\r\n        border:1px solid red;\r\n        max-width:500px;\r\n        min-height: 100vh;\r\n        margin:0 auto;\r\n        color:$text-base;\r\n        font-size:22px;\r\n        padding:30px;\r\n        text-align: center;\r\n      \r\n        position:relative;\r\n        h1{\r\n            padding:20px;\r\n            background-color:$bg-orange;\r\n        }\r\n        &__add{\r\n            cursor: pointer;\r\n            background-color:rgb(99, 168, 180);\r\n            width:50px;\r\n            height:50px;\r\n            padding:10px;\r\n            position:absolute;\r\n            bottom:0;\r\n            right:20px;\r\n            @include border($rad:50px);\r\n            @include transition;\r\n            &:hover{\r\n                background-color:crimson;\r\n            }\r\n        } \r\n      \r\n    \r\n    \r\n}\r\n#task{\r\n    &__container{\r\n        background-color:crimson;\r\n        padding:30px;\r\n        text-align: left;\r\n        @include border($bord:5px);\r\n        font-size: 20px;\r\n        &.show{\r\n            display: block;\r\n          }\r\n          \r\n        input{\r\n            padding:10px;\r\n            outline: none;\r\n            border: none;\r\n            width:100%;\r\n            border-radius: 5px;\r\n            margin-bottom:20px;\r\n            margin-top:10px;\r\n            cursor: pointer;\r\n            @include transition;\r\n            font-size: 20px;\r\n            &:hover{\r\n                box-shadow: 0 0 4px 4px rgba(250, 250, 250, 0.3);\r\n            }\r\n           \r\n        }\r\n        textarea{\r\n            width:100%;\r\n            margin-top:10px;\r\n            outline: none;\r\n            border: none;\r\n            font-size:20px;\r\n            @include border($bord:5px);\r\n            @include transition;\r\n           \r\n            &:hover{\r\n                box-shadow: 0 0 4px 4px rgba(250, 250, 250, 0.3);\r\n            }\r\n           \r\n        }\r\n      .task__buttons{\r\n          display: flex;\r\n          justify-content: space-around;\r\n      }\r\n    \r\n    \r\n    }\r\n    &__box{\r\n        background-color:orange;\r\n        margin-top:0;\r\n        text-align: left;\r\n        font-size:15px;\r\n       \r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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





let taskContainer = document.getElementById("task__container");
let taskAdd = document.querySelector('.task__add');
let lists = document.getElementById("task__lists");
let taskTitle = document.getElementById('task__title');
let taskTime = document.getElementById('task__time');
let taskDescription = document.getElementById('task__description');
let taskBox = document.getElementById('task__box');
let addBtn= document.getElementById('addBtn');
let cancelBtn = document.getElementById('cancelBtn');
let errormsg = document.getElementById('error-msg');
function updateElem(e){
    let editBtn = document.querySelectorAll(".editicn");
    let trashBtn = document.querySelectorAll(".trashicn");
    for(let i=0;i<editBtn.length;i++){
        editBtn[i].addEventListener("click",(e)=>{
        //     taskContainer.className="show";
        //  taskTitle.value = editBtn[i].parentElement.childNodes[0].nodeValue;
        //  taskTime.value = editBtn[i].parentElement.childNodes[2].nodeValue;
        //  taskDescription.value = editBtn[i].parentElement.childNodes[3].nodeValue;
        //     taskContainer.addEventListener("submit",()=>{
        //         editBtn[i].parentElement.childNodes[0].nodeValue = taskTitle.value;
        //         console.log(taskTitle.value);


            // })

            lists.children[i].contentEditable=true;
            editBtn[i].contentEditable=false;
            trashBtn[i].contentEditable=false;
        })
    }   
    }








//Add the elements
 function newElement(){
   
    let listel = document.createElement("li");
    let taskList = lists.appendChild(listel);
    let lineBreak = document.createElement("br");
    let title = document.createTextNode(taskTitle.value);
    let tm = document.createTextNode(taskTime.value);
    let td = document.createTextNode(taskDescription.value);
    let spanelem = document.createElement("span"); 
    let spanel = document.createElement("span"); 
    let newLine = document.createElement("br"); 
    let trashtext = document.createTextNode("\u00D7");
    let edittext = document.createTextNode("\u270E");


            if(taskTitle.value=="" || taskDescription.value=="" || taskTime.value==""){
                errormsg.className="show";
                return false;
            }
            else{   
               
                listel.className ="bord"
                taskList.appendChild(title);
                listel.appendChild(lineBreak);
                taskList.appendChild(tm);
                listel.appendChild(newLine);
                taskList.appendChild(td); 
            
                spanelem.className="trashicn";
                spanel.className="editicn";
                 spanelem.appendChild(trashtext);
                spanel.appendChild(edittext);
                taskList.append(spanelem,spanel);   
                errormsg.className="hide";
                taskContainer.className="hide";
               
                return true;
               
            }

          
     
    }

  
  
 //Delete the elements
 function removeElem(){
    let closeBtn = document.querySelectorAll(".trashicn");
   
    for(let i=0;i<closeBtn.length;i++){
        closeBtn[i].addEventListener("click",function(e){
            closeBtn[i].parentNode.remove();
        })
    }
    
  
   }
   
   
   
    
    

   

   cancelBtn.onclick = function(){
       taskContainer.className="hide";
   }


    taskContainer.addEventListener('submit',(e)=>{
        if(taskTime.value != "" && taskTitle.value != "" && taskDescription.value !=""){
            taskTime.value="";
            taskTitle.value="";
            taskDescription.value="";
        }
      
        e.preventDefault();
    
    })
   
    
    taskAdd.addEventListener('click',(e)=>{
       taskContainer.classList.toggle('show');
    })    
  

 addBtn.addEventListener('click',(e)=>{
   
    newElement();
   removeElem();
   updateElem();
  
   });






   

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map