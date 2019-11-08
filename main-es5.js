function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n  <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\n    \n    <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: none;\n          }\n\n          .cls-2 {\n            fill: #ffffff;\n          }\n        </style>\n      </defs>\n      <rect class=\"cls-1\" width=\"400\" height=\"400\" />\n      <path class=\"cls-2\" d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\n      />\n    </svg>\n    \n  </a>\n</div>\n\n<div class=\"content\" role=\"main\">\n\n  <!-- Highlight Card -->\n  <div class=\"card highlight-card card-small\">\n\n    <svg id=\"rocket\" alt=\"Rocket Ship\" xmlns=\"http://www.w3.org/2000/svg\" width=\"101.678\" height=\"101.678\" viewBox=\"0 0 101.678 101.678\">\n      <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\n        <circle id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"50.839\" cy=\"50.839\" r=\"50.839\" transform=\"translate(141 696)\" fill=\"#dd0031\"/>\n        <g id=\"Group_47\" data-name=\"Group 47\" transform=\"translate(165.185 720.185)\">\n          <path id=\"Path_33\" data-name=\"Path 33\" d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\" transform=\"translate(0.371 3.363)\" fill=\"#fff\"/>\n          <path id=\"Path_34\" data-name=\"Path 34\" d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\" transform=\"translate(0 0.005)\" fill=\"#fff\"/>\n        </g>\n      </g>\n    </svg>\n\n    <span>{{ title }} app is running!</span>\n\n    <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\" viewBox=\"0 0 516.119 1083.632\">\n      <path id=\"Path_40\" data-name=\"Path 40\" d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\" transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\"/>\n    </svg>\n\n  </div>\n\n  <!-- Resources -->\n  <h2>Resources</h2>\n  <p>Here are some links to help you get started:</p>\n\n  <div class=\"card-container\">\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg>\n\n      <span>Learn Angular</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"/></svg>\n\n      <span>CLI Documentation</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z\"/></svg>\n\n      <span>Angular Blog</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n    </a>\n\n  </div>\n\n  <!-- Next Steps -->\n  <h2>Next Steps</h2>\n  <p>What do you want to do next with your app?</p>\n\n  <input type=\"hidden\" #selection>\n\n  <div class=\"card-container\">\n    <div class=\"card card-small\" (click)=\"selection.value = 'component'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>New Component</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'material'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Angular Material</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'dependency'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Add Dependency</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'test'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Run and Watch Tests</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'build'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Build for Production</span>\n    </div>\n  </div>\n\n  <!-- Terminal -->\n  <div class=\"terminal\" [ngSwitch]=\"selection.value\">\n      <pre *ngSwitchDefault>ng generate component xyz</pre>\n      <pre *ngSwitchCase=\"'material'\">ng add @angular/material</pre>\n      <pre *ngSwitchCase=\"'dependency'\">ng add _____</pre>\n      <pre *ngSwitchCase=\"'test'\">ng test</pre>\n      <pre *ngSwitchCase=\"'build'\">ng build --prod</pre>\n  </div>\n\n  <!-- Links -->\n  <div class=\"card-container\">\n    <a class=\"circle-link\" title=\"Animations\" href=\"https://angular.io/guide/animations\" target=\"_blank\" rel=\"noopener\">\n      <svg id=\"Group_20\" data-name=\"Group 20\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.813\" height=\"23.453\" viewBox=\"0 0 21.813 23.453\">\n        <path id=\"Path_15\" data-name=\"Path 15\" d=\"M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z\" transform=\"translate(-4088.702 -972.736)\" fill=\"#ffa726\"/>\n        <path id=\"Path_16\" data-name=\"Path 16\" d=\"M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z\" transform=\"translate(-4170.633 -972.736)\" fill=\"#fb8c00\"/>\n        <path id=\"Path_17\" data-name=\"Path 17\" d=\"M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1058.315)\" fill=\"#ffe0b2\"/>\n        <path id=\"Path_18\" data-name=\"Path 18\" d=\"M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1036.757)\" fill=\"#fff3e0\"/>\n        <path id=\"Path_19\" data-name=\"Path 19\" d=\"M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1015.199)\" fill=\"#fff\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"CLI\" href=\"https://cli.angular.io/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular CLI Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.762\" height=\"23.447\" viewBox=\"0 0 21.762 23.447\">\n        <g id=\"Group_21\" data-name=\"Group 21\" transform=\"translate(0)\">\n          <path id=\"Path_20\" data-name=\"Path 20\" d=\"M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-2649.48 -313.618)\" fill=\"#37474f\"/>\n          <path id=\"Path_21\" data-name=\"Path 21\" d=\"M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-2731.05 -313.618)\" fill=\"#263238\"/>\n          <path id=\"Path_22\" data-name=\"Path 22\" d=\"M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z\" transform=\"translate(-2687.274 -362.17)\" fill=\"#fff\"/>\n          <path id=\"Path_23\" data-name=\"Path 23\" d=\"M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z\" transform=\"translate(-2702.289 -380.631)\" fill=\"#fff\"/>\n          <rect id=\"Rectangle_12\" data-name=\"Rectangle 12\" width=\"3.517\" height=\"0.469\" transform=\"translate(9.709 13.744)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Augury\" href=\"https://augury.rangle.io/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular Augury Logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n        <defs>\n          <clipPath id=\"clip-path\">\n            <rect id=\"Rectangle_13\" data-name=\"Rectangle 13\" width=\"10.338\" height=\"10.27\" fill=\"none\"/>\n          </clipPath>\n        </defs>\n        <g id=\"Group_25\" data-name=\"Group 25\" transform=\"translate(0)\">\n          <path id=\"Path_24\" data-name=\"Path 24\" d=\"M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-3769.274 -311.417)\" fill=\"#4a3493\"/>\n          <path id=\"Path_25\" data-name=\"Path 25\" d=\"M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-3851.207 -311.417)\" fill=\"#311b92\"/>\n          <g id=\"Group_24\" data-name=\"Group 24\" transform=\"translate(6.194 6.73)\" opacity=\"0.5\">\n            <g id=\"Group_23\" data-name=\"Group 23\" transform=\"translate(0 0)\">\n              <g id=\"Group_22\" data-name=\"Group 22\" clip-path=\"url(#clip-path)\">\n                <path id=\"Path_26\" data-name=\"Path 26\" d=\"M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3822.107 -368.821)\" fill=\"#fff\"/>\n              </g>\n            </g>\n          </g>\n          <path id=\"Path_27\" data-name=\"Path 27\" d=\"M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3814.311 -359.969)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Protractor\" href=\"https://www.protractortest.org/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular Protractor Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n        <g id=\"Group_26\" data-name=\"Group 26\" transform=\"translate(0)\">\n          <path id=\"Path_28\" data-name=\"Path 28\" d=\"M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-4609.274 -311.417)\" fill=\"#e13439\"/>\n          <path id=\"Path_29\" data-name=\"Path 29\" d=\"M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-4691.207 -311.417)\" fill=\"#b52f32\"/>\n          <path id=\"Path_30\" data-name=\"Path 30\" d=\"M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z\" transform=\"translate(-4634.008 -355.852)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Find a Local Meetup\" href=\"https://www.meetup.com/find/?keywords=angular\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Meetup Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24.607\" height=\"23.447\" viewBox=\"0 0 24.607 23.447\">\n        <path id=\"logo--mSwarm\" d=\"M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z\" transform=\"translate(0 0.123)\" fill=\"#f64060\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Join the Conversation on Gitter\" href=\"https://gitter.im/angular/angular\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Gitter Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19.447\" height=\"19.447\" viewBox=\"0 0 19.447 19.447\">\n        <g id=\"Group_40\" data-name=\"Group 40\" transform=\"translate(-1612 -405)\">\n          <rect id=\"Rectangle_19\" data-name=\"Rectangle 19\" width=\"19.447\" height=\"19.447\" transform=\"translate(1612 405)\" fill=\"#e60257\"/>\n          <g id=\"gitter\" transform=\"translate(1617.795 408.636)\">\n            <g id=\"Group_33\" data-name=\"Group 33\" transform=\"translate(0 0)\">\n              <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"1.04\" height=\"9.601\" transform=\"translate(2.304 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_16\" data-name=\"Rectangle 16\" width=\"1.04\" height=\"9.601\" transform=\"translate(4.607 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_17\" data-name=\"Rectangle 17\" width=\"1.04\" height=\"4.648\" transform=\"translate(6.91 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_18\" data-name=\"Rectangle 18\" width=\"1.04\" height=\"6.971\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n            </g>\n          </g>\n        </g>\n      </svg>\n    </a>\n  </div>\n\n  <!-- Footer -->\n  <footer>\n      Love Angular?&nbsp;\n      <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\"> Give our repo a star.\n        <div class=\"github-star-badge\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>\n          Star\n        </div>\n      </a>\n      <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#1976d2\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n      </a>\n  </footer>\n\n  <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\n    <path id=\"Path_39\" data-name=\"Path 39\" d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\" transform=\"translate(142.69 -634.312)\" fill=\"#eee\"/>\n  </svg>\n\n</div>\n\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bookstore-app/bookstore-app.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookstore-app/bookstore-app.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookstoreAppBookstoreAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 style=\"background-color: teal;text-align: center;padding:20px;\">Welcome to my book store</h3>\n\n    <section class=\"form-group\" style=\"margin-left:350px;\">\n        <input type=\"text\" placeholder=\"BookStoreApp\" class=\"form-control w-50 text-center bg-dark\">\n        <input type=\"text\" placeholder=\"bookname\" class=\"w-50 form-control\"[(ngModel)]=\"bookname\">\n        <input type=\"text\" placeholder=\"isbnno\" class=\"w-50 form-control\" [(ngModel)]=\"isbn\">\n        <input type=\"text\" placeholder=\"Author name\" class=\"w-50 form-control\"[(ngModel)]=\"authorname\">\n        <button class=\"btn btn-info w-50\" (click)=\"addbook()\">add book</button><br>\n        \n    </section>\n\n<div>\n      <table class=\"table\">\n          <thead class=\"thead-dark text-center\">\n              <th>bookid</th>\n              <th>bookname</th>\n              <th>ISBN no</th>\n              <th>AuthorName</th>\n              <th>action</th>\n         </thead>\n         <tbody class=\"text-center\">\n             <tr *ngFor=\"let book of library\" let i=index;>\n             <td>{{book.BookId}}</td>\n             <td>{{book.BookName}}</td>\n             <td>{{book.Isbn}}</td>\n             <td>{{book.AuthorName}}</td>\n             <button class=\"btn btn-danger\" (click)=\"deleteBook(i)\">delete</button>\n             </tr>\n         </tbody>\n         \n      </table>\n</div>   ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/changedemo/changedemo.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changedemo/changedemo.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChangedemoChangedemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"div1 \" class=\"bg-success w-50 p-3 ml-5 mt-5\">\n    <div class=\"form-group\">\n        <label>Listcategory</label>\n        <select class=\"form-control w-50 \"[(ngModel)]=\"listcategory\" (change)=\"categorychanged()\">\n            <option *ngFor=\"let item of categories\">\n                {{item}}\n            </option>\n        </select>\n        <label >product list</label>\n        <select class=\"form-control w-50\" [(ngModel)]=\"listproduct\"(change)=\"datachanged()\" >\n            <option *ngFor=\"let product of products\">\n              {{product}}\n            </option>\n                \n            \n        </select>\n    </div>\n    \n    \n</div>\n<div class=\"card w-50 ml-5 mt-5\">\n        <div class='card-header text-center'>\n            {{productname}}\n        </div>\n        <div class=\"card-body text-center\">\n           <img [src]=\"imgpreview\" width=\"100\" height=\"100\">\n        </div>\n        <div class=\"card-footer text-center\">\n           {{productprice}}\n        </div>\n        <button class=\"btn btn-info w-25 text-center ml-5\" (click)=\" addCart()\">addToCart</button>\n        \n    </div>\n<div class=\"mt-5\">\n    <h3 class=\"text-left text-danger bg-dark w-25 m-auto d-block text-center \"> shopping cart</h3>\n</div>\n<div class=\"mt-2\">\n   <table class=\"table table-hover\">\n       <thead class=\"thead-dark text-danger text-center\">\n           <th>Productid</th>\n           <th>Name</th>\n           <th>Price</th>\n           <th>preview</th>\n           <th>total</th>\n           <th>action</th>\n       </thead>\n       <tbody>\n           <tr *ngFor ='let item of shoppingcart' class='text-center'let i=index>\n               <td>{{item.ProductId}}</td>\n               <td>{{item.Name}}</td>\n               <td>{{item.Price}}</td>\n               <td><img [src]=\"item.Preview\"></td>\n               <td>{{totalprice}}</td>\n               <button class=\"btn btn-danger\" (click)=\" delCart(i)\">delete</button> \n               \n           </tr>\n           \n           \n           \n           \n           \n       </tbody>\n   </table>\n</div>\n\n    \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/child/child.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/child/child.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChildChildComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h1>child component</h1>\n    {{msg}}\n</div>\n<div style=\"border-style:dotted;\">\n    Total count={{count}}\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/classbinding/classbinding.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/classbinding/classbinding.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppClassbindingClassbindingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>classbinding works!</p>\n<div class=\"form-group\">\n    <label>choose effects</label>\n    <ul>\n   <li> <input type=\"checkbox\"[(ngModel)]=\"textEffects\">texteffects</li>\n    <li><input type=\"checkbox\"[(ngModel)]=\"backEffects\">backeffects</li>\n    <li><input type=\"checkbox\" [(ngModel)]=\"borderEffects\">bordereffects</li>\n    </ul>\n</div>\n<h1 [ngClass]=\"{texteffects:textEffects,backeffects:backEffects,bordereffects:borderEffects}\">Sample text</h1>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/formdemo/formdemo.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formdemo/formdemo.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormdemoFormdemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h2>Register user</h2>\n    <form #frmRegister=\"ngForm\">\n           <div class=\"form-group\">\n           <label>UserName</label>\n           <div>\n               <input class=\"form-control\" type=\"text\" name=\"textname\" #textname ngModel required>\n           </div>\n           </div>\n        \n        <div class=\"form-group\">\n           <label>Mobile</label>\n        <div>\n            <input class=\"form-control\" type=\"text\" name=\"txtmobile\"#txtmobile ngModel pattern=\"\\+91[0-9]{10}\">\n        </div> \n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"frmRegister.invalid\" class=\"btn btn-primary\">submit</button>\n        </div>\n    </form>\n    <div class=\"form-group\">\n        <h2>form state validation service</h2>\n        <dl>pristine[noFieldModified]</dl>\n        <dd>{{frmRegister.pristine}}</dd>\n    </div>\n\n    \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inlinstyle/inlinstyle.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inlinstyle/inlinstyle.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInlinstyleInlinstyleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>inlinstyle works!</p>\n<div class=\"container\">\n    <h3>inline effects</h3>\n    <div >\n        <label>choose background</label>\n        <div class=\"form-group\">\n            <select class=\"form-control w-50\" [(ngModel)]=\"background\">\n                <option value=\"red\">Red</option>\n                <option value=\"green\">Green</option>\n            </select>\n        </div>\n    </div>\n    <div >\n        <label>choose forground</label>\n        <select class=\"form-control w-50\"[(ngModel)]=\"textcolor\">\n            <option class=\"text-warning\" value=\"orange\">Orange</option>\n            <option class=\"text-danger\" value=\"red\">Red</option>\n        </select>\n    </div>\n    <div class=\"form-group\">\n        <label>text align</label><br>\n        <input type=\"radio\"value=\"left\"[(ngModel)]=\"textalign\">Left<br>\n        <input type=\"radio\"value=\"center\"[(ngModel)]=\"textalign\">Center<br>\n        <input type=\"radio\"value=\"right\"[(ngModel)]=\"textalign\">Right\n    </div>\n</div>\n<h1 [ngStyle]=\"geteffect()\">I am the text</h1>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inputstate-valid/inputstate-valid.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inputstate-valid/inputstate-valid.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInputstateValidInputstateValidComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <form #formRegister=\"ngForm\" novalidate>\n        <div class=\"form-group\">\n            <label>userName</label>\n            <div>\n                <input type=\"text\" name=\"textname\" ngModel #textname=\"ngModel\" class=\"form-control\" required minlength=\"4\">\n                <div *ngIf=\"formRegister.submitted && textname.invalid\">\n                    <span *ngIf=\"textname.errors.required\" class=\"text-danger\">user name is required*</span>\n                    <span *ngIf=\"textname.errors.minlength\" class=\"text-danger\">name too short*</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <div>\n                <input type=\"email\" name=\"emailname\" ngModel #emailname=\"ngModel\" class=\"form-control\" required>\n                <div *ngIf=\"formRegister.submitted && emailname.invalid\">\n                    <span *ngIf=\"emailname.errors.required\" class=\"text-danger\">email is required*</span>\n                   \n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Mobile</label>\n            <div>\n                <input type=\"email\" name=\"Mobileno\" ngModel #Mobileno=\"ngModel\" class=\"form-control\" required pattern=\"\\+91[0-9]{10}\">\n                <div *ngIf=\"formRegister.submitted && Mobileno.invalid\">\n                    <span *ngIf=\"Mobileno.errors.required\" class=\"text-danger\">Mobileno is required*</span>\n                   <span *ngIf=\"Mobileno.errors.pattern\" class=\"text-danger\">Mobileno is must be started from +91 and should be 10digit</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n                <label>Select gender</label>\n              <select class=\"form-control\" ngModel name=\"listgender\" #listgender=\"ngModel\" (change)=\"verifyGender(listgender.value)\">\n                <option value=\"nogender\">Choose</option>\n                <option value=\"male\">Male</option>\n                <option value=\"female\">Female</option>\n              </select>\n              <span *ngIf=\"InvalidGender\" class=\"text-danger\">please select danger</span>\n            </div>\n        <div class=\"form-group\">\n            <label>enter evenno</label>\n            <div>\n                <input type=\"text\" class=\"form-control\" name=\"even\" ngModel #even=\"ngModel\"(blur)=\"changeVerifyeven(even.value)\">\n                <div *ngIf=\"evenvalid\">\n                    <span *ngIf=\"evenvalid\" class=\"text-danger\">please enter even no*</span>\n                </div>\n            </div>\n            \n        </div>    \n            \n        <div class=\"form-group\">\n          <button class=\"btn btn-primary\">Register user</button>\n        </div>\n        \n        \n    </form>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/keydemo/keydemo.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/keydemo/keydemo.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKeydemoKeydemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>keydemo works!</p>\n<div class=\"container\">\n    <h2>Register user</h2>\n    <div class=\"form-group\">\n        <label>Username</label>\n    </div>\n    <input type=\"text\" [(ngModel)]=\"textusername\" class=\"form-control\"(keyup)=\"checkUser()\">\n    <div>{{msgusername}}</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>login works!</p>\n<fieldset>\n    <legend>LoginForm</legend>\n    <input type=\"text\" [(ngModel)]=\"name\">\n</fieldset>\n\n    <div class=\"form-group\">\n         <label>username</label>\n         <input type=\"text\" class=\"form-control\"[(ngModel)]=\"username\">\n    </div>\n   \nusername is{{username}}\nhello!{{name}}\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/medical-exam-result/medical-exam-result.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medical-exam-result/medical-exam-result.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMedicalExamResultMedicalExamResultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    \n        <h2>Select category</h2>\n        <select class=\"form-control w-50  mt-2\" [(ngModel)]=\"selectedCategoryValue\" (change)=\"oncategorychanged()\">\n            <option>All</option>\n            <option>Medical</option> \n            <option>Enginnering</option>\n            \n        </select>\n   \n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/medical-exam/medical-exam.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medical-exam/medical-exam.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMedicalExamMedicalExamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <app-medical-exam-result [All]=\"all\" [Medical]=\"Medical\"[Enginnering]=\"Enginnering\" (componentchanged)=\"oncategorychanged($event)\"></app-medical-exam-result>\n    <div class=\"mt-5\">\n    <table class=\"table table-hover\">\n      <thead class=\"thead-dark\">\n          <th>Name</th>\n          <th>Rank</th>\n          <th>Category</th>\n          <th>Exam</th>\n      </thead>\n      <tbody>\n          <ng-container *ngFor=\"let item of examData\">\n            <tr *ngIf=\"selectedValue=='All'|| selectedValue==item.category \">\n                <td>{{item.name}}</td>\n                <td>{{item.Rank}}</td>\n                <td>{{item.category}}</td>\n                <td>{{item.Exam}}</td>\n            </tr>\n          </ng-container>\n      </tbody>\n  </table>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/parent/parent.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parent/parent.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppParentParentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h1>parent component</h1>\n    <app-child [msg]=\"parentmsg\" [count]='getcount()'></app-child>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/placement/placement.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/placement/placement.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlacementPlacementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>placement works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/prac1parent/prac1parent.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prac1parent/prac1parent.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrac1parentPrac1parentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <app-prac2child (componentchanged)=\"oncomponentChanged($event)\"></app-prac2child>\n    {{selectedvalue}}\n   <div class=\"mt-3\">\n   <h3>product list</h3>\n   <table class=\"table table-hover\">\n       <thead class=\"thead-dark\">\n           <th>Name</th>\n           <th>Price</th>\n           <th>Category</th>\n       </thead>\n       <tbody>\n           <ng-container *ngFor=\"let item of data\">\n             <tr *ngIf=\"selectedvalue=='All'|| selectedvalue==item.category\">\n                 <td>{{item.name}}</td>\n                 <td>{{item.price}}</td>\n                 <td>{{item.category}}</td>\n             </tr>\n           </ng-container>\n       </tbody>\n   </table>\n   </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/prac2child/prac2child.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prac2child/prac2child.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrac2childPrac2childComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <label>select category</label>\n    <div>\n        <select class=\"form-control\" [(ngModel)]=\"selectedcategory\" (change)=\"oncategorychanged()\">\n            <option>All</option>\n            <option>Electronics</option>\n            <option>Shoes</option>\n        </select>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pracchild/pracchild.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pracchild/pracchild.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPracchildPracchildComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <input type=\"radio\" name=\"filter\" value=\"All\" [(ngModel)]=\"selectedCategory\" (change)=\"oncategoryChanged()\">All[{{All}}]\n    <input type=\"radio\" name=\"filter\" value=\"Electronics\"[(ngModel)]=\"selectedCategory\" (change)=\"oncategoryChanged()\">Electronics[{{Electronics}}]\n    <input type=\"radio\" name=\"filter\" value=\"Shoes\" [(ngModel)]=\"selectedCategory\" (change)=\"oncategoryChanged()\">Shoes[{{Shoes}}]\n</div>\n<div>\n    {{selectedCategory}}\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pracparent/pracparent.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pracparent/pracparent.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPracparentPracparentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <app-pracchild [All]=\"all\"[Electronics]=\"electronics\"[Shoes]=\"shoes\" (componentChanged)=\"changecomponent($event)\"></app-pracchild>\n    <div>\n        <table class=\"table table-hover\">\n            <thead class=\"thead-dark\">\n                <th>Name</th>\n                <th>Price</th>\n                <th>Category</th>\n            </thead>\n            <ng-container *ngFor=\"let item of data\">\n            <tr *ngIf=\"selectedValue=='All' ||selectedValue==item.category\" >\n                <td>{{item.name}}</td>\n                <td>{{item.price}}</td>\n                <td>{{item.category}}</td>\n            </tr>\n            </ng-container>\n        </table>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pracproduct/pracproduct.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pracproduct/pracproduct.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPracproductPracproductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div>\n        <label>Select Category</label>\n        <select class=\"form-control w-75\" [(ngModel)]=\"selectedCategory\"(change)=\"onCategoryChanged()\" >\n          <option>Electronics</option>\n          <option>Shoes</option>\n        </select>\n    </div>\n    <div>\n      <label>select product</label>\n      <select class=\"form-control w-75\" [(ngModel)]=\"productlist\" >\n          <option *ngFor=\"let item of Product\">{{item}}</option>\n      </select>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>product works!</p>\n<div class=\"form-group ml-2\">\n    <label class=\"text-primary\">Product name</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"add your product\"[(ngModel)]=\"name\">\n</div>\n<div class=\"form-group ml-2\">\n    <label class=\"text-primary\">Price</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"add price\"[(ngModel)]=\"price\">\n</div>\n<button class=\"btn btn-info\"(click)=\"addProduct()\">add product</button>\n\n    <h3>ProductList</h3>\n    <table class=\"table table-hover\">\n       <thead class=\"thead-dark text-center\">\n           <th>product id</th>\n           <th>product name</th>\n           <th>price</th>\n           <th>action</th>\n       </thead>\n       <tbody>\n           <tr *ngFor=\"let item of product\" class=\"text-center\" let i=index; let Last=last;>\n               <td>{{item.Id}}</td>\n               <td>{{item.name}}</td>\n               <td>{{item.price}}</td>\n               <button class=\"btn btn-danger\" (click)=\"deleteProduct(i,Last)\">Delete</button>\n           </tr>\n       </tbody>\n    </table>\n    \n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/productcomponent/productcomponent.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productcomponent/productcomponent.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductcomponentProductcomponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <app-productfilter [All]=\"all\" [electronics]=\"electronics\" [shoes]=\"shoes\" (componentchanged)=\"oncategorychanged($event)\"></app-productfilter>\n<h2>Product Filter</h2>\n      <table class=\"table table-hover\">\n          <thead class=\"thead-dark\">\n          <th>Name</th>\n          <th>Price</th>\n          <th>Category</th>\n          </thead> \n      \n      <tbody>\n          <ng-container *ngFor=\"let Product of data\">\n              <tr *ngIf=\"selectedValue=='All' ||selectedValue==Product.category \" >\n                  <td> {{Product.name}} </td>\n                  <td> {{Product.price}}</td>\n                  <td> {{Product.category}}</td>\n              </tr>\n          </ng-container>\n      </tbody>\n      </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/productfilter/productfilter.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productfilter/productfilter.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductfilterProductfilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <fieldset>\n        <legend>filterproduct</legend>\n        <div class=\"form-group\">\n          <input type=\"radio\" [(ngModel)]='selectedCategoryValue' value=\"All\" name='change'(change)=\"oncategorychanged()\">All\n                             [{{All}}]\n        \n        \n            <input type=\"radio\" [(ngModel)]='selectedCategoryValue'value='electronics' name='change' (change)=\"oncategorychanged()\">electronics\n                     [{{electronics}}]\n            <input type=\"radio\" [(ngModel)]='selectedCategoryValue'value='shoes' name='change'(change)=\"oncategorychanged()\">\n                   Shoes  [{{shoes}}]          \n        </div>\n    </fieldset>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron jumbotron-fluid bg-danger\">\n     <div class=\"container p-5 \">\n         <nav class=\"navbar navbar-expand-sm fixed-top\">\n             <div class=\"row\">\n               \n             <ul class=\"navbar-nav col-md-3 \">\n                 <li class=\"nav-item\">\n                     <a class=\"navbar-brand nav-link text-white\">Logo</a>\n                 </li>\n             </ul>\n             <ul class=\"navbar-nav  col-md-6\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link text-white \" href=\"#\">About</a>\n                    </li>\n                  </ul>\n             </div>\n             \n         </nav>\n     </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reactiveform/reactiveform.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reactiveform/reactiveform.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReactiveformReactiveformComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <h2>Reactive Form</h2>\n    <form [formGroup]=\"formRegister\" (ngSubmit)=\"onsubmit()\">\n        <dl>\n            <dt>First name</dt>\n            <dd><input type=\"text\" formControlName=\"firstname\"></dd>\n            <dt>Last name</dt>\n            <dd><input type=\"text\" formControlName=\"lastname\"></dd>\n        </dl>\n        <div formGroupName=\"frmaddress\">\n            <fieldset>\n                <legend>Address</legend>\n                <dl>\n                    <dt>city</dt>\n                    <dd><input type=\"text\"formControlName=\"city\"></dd>\n                    <dt>pincode</dt>\n                    <dd><input type=\"text\"formControlName=\"pincode\"></dd>\n                    <button (click)=\"updateaddress()\">upDateaddress</button>\n                </dl>\n            </fieldset>\n\n        </div>\n        <button class=\"btn btn-primary\">submit</button>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/service-login/service-login.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service-login/service-login.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServiceLoginServiceLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <fieldset>\n        <legend>Login</legend>\n        <dl>\n            <dt>Username</dt>\n            <dd><input type=\"password\"></dd>\n            <dt>Verify code</dt>\n            <div>\n                {{code}}\n            </div>\n            <div>\n                <button (click)=\"newcode()\">newcode</button>\n            </div>\n        </dl>\n    </fieldset>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'shoppingcart';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-classbinding',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _classbinding_classbinding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./classbinding/classbinding.component */
    "./src/app/classbinding/classbinding.component.ts");
    /* harmony import */


    var _bookstore_app_bookstore_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./bookstore-app/bookstore-app.component */
    "./src/app/bookstore-app/bookstore-app.component.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _inlinstyle_inlinstyle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./inlinstyle/inlinstyle.component */
    "./src/app/inlinstyle/inlinstyle.component.ts");
    /* harmony import */


    var _keydemo_keydemo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./keydemo/keydemo.component */
    "./src/app/keydemo/keydemo.component.ts");
    /* harmony import */


    var _changedemo_changedemo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./changedemo/changedemo.component */
    "./src/app/changedemo/changedemo.component.ts");
    /* harmony import */


    var _project_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./project/project.component */
    "./src/app/project/project.component.ts");
    /* harmony import */


    var _parent_parent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./parent/parent.component */
    "./src/app/parent/parent.component.ts");
    /* harmony import */


    var _child_child_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./child/child.component */
    "./src/app/child/child.component.ts");
    /* harmony import */


    var _productcomponent_productcomponent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./productcomponent/productcomponent.component */
    "./src/app/productcomponent/productcomponent.component.ts");
    /* harmony import */


    var _productfilter_productfilter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./productfilter/productfilter.component */
    "./src/app/productfilter/productfilter.component.ts");
    /* harmony import */


    var _medical_exam_medical_exam_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./medical-exam/medical-exam.component */
    "./src/app/medical-exam/medical-exam.component.ts");
    /* harmony import */


    var _medical_exam_result_medical_exam_result_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./medical-exam-result/medical-exam-result.component */
    "./src/app/medical-exam-result/medical-exam-result.component.ts");
    /* harmony import */


    var _captcha_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./captcha.service */
    "./src/app/captcha.service.ts");
    /* harmony import */


    var _service_login_service_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./service-login/service-login.component */
    "./src/app/service-login/service-login.component.ts");
    /* harmony import */


    var _formdemo_formdemo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./formdemo/formdemo.component */
    "./src/app/formdemo/formdemo.component.ts");
    /* harmony import */


    var _inputstate_valid_inputstate_valid_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./inputstate-valid/inputstate-valid.component */
    "./src/app/inputstate-valid/inputstate-valid.component.ts");
    /* harmony import */


    var _reactiveform_reactiveform_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./reactiveform/reactiveform.component */
    "./src/app/reactiveform/reactiveform.component.ts");
    /* harmony import */


    var _pracparent_pracparent_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pracparent/pracparent.component */
    "./src/app/pracparent/pracparent.component.ts");
    /* harmony import */


    var _pracchild_pracchild_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pracchild/pracchild.component */
    "./src/app/pracchild/pracchild.component.ts");
    /* harmony import */


    var _pracproduct_pracproduct_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pracproduct/pracproduct.component */
    "./src/app/pracproduct/pracproduct.component.ts");
    /* harmony import */


    var _prac1parent_prac1parent_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./prac1parent/prac1parent.component */
    "./src/app/prac1parent/prac1parent.component.ts");
    /* harmony import */


    var _prac2child_prac2child_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./prac2child/prac2child.component */
    "./src/app/prac2child/prac2child.component.ts");
    /* harmony import */


    var _placement_placement_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./placement/placement.component */
    "./src/app/placement/placement.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"], _classbinding_classbinding_component__WEBPACK_IMPORTED_MODULE_7__["ClassbindingComponent"], _bookstore_app_bookstore_app_component__WEBPACK_IMPORTED_MODULE_8__["BookstoreAppComponent"], _inlinstyle_inlinstyle_component__WEBPACK_IMPORTED_MODULE_10__["InlinstyleComponent"], _keydemo_keydemo_component__WEBPACK_IMPORTED_MODULE_11__["KeydemoComponent"], _changedemo_changedemo_component__WEBPACK_IMPORTED_MODULE_12__["ChangedemoComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_13__["ProjectComponent"], _parent_parent_component__WEBPACK_IMPORTED_MODULE_14__["ParentComponent"], _child_child_component__WEBPACK_IMPORTED_MODULE_15__["ChildComponent"], _productcomponent_productcomponent_component__WEBPACK_IMPORTED_MODULE_16__["ProductcomponentComponent"], _productfilter_productfilter_component__WEBPACK_IMPORTED_MODULE_17__["ProductfilterComponent"], _medical_exam_medical_exam_component__WEBPACK_IMPORTED_MODULE_18__["MedicalExamComponent"], _medical_exam_result_medical_exam_result_component__WEBPACK_IMPORTED_MODULE_19__["MedicalExamResultComponent"], _service_login_service_login_component__WEBPACK_IMPORTED_MODULE_21__["ServiceLoginComponent"], _formdemo_formdemo_component__WEBPACK_IMPORTED_MODULE_22__["FormdemoComponent"], _inputstate_valid_inputstate_valid_component__WEBPACK_IMPORTED_MODULE_23__["InputstateValidComponent"], _reactiveform_reactiveform_component__WEBPACK_IMPORTED_MODULE_24__["ReactiveformComponent"], _pracparent_pracparent_component__WEBPACK_IMPORTED_MODULE_25__["PracparentComponent"], _pracchild_pracchild_component__WEBPACK_IMPORTED_MODULE_26__["PracchildComponent"], _pracproduct_pracproduct_component__WEBPACK_IMPORTED_MODULE_27__["PracproductComponent"], _prac1parent_prac1parent_component__WEBPACK_IMPORTED_MODULE_28__["Prac1parentComponent"], _prac2child_prac2child_component__WEBPACK_IMPORTED_MODULE_29__["Prac2childComponent"], _placement_placement_component__WEBPACK_IMPORTED_MODULE_30__["PlacementComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [_captcha_service__WEBPACK_IMPORTED_MODULE_20__["CaptchaService"], _data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]],
      bootstrap: [_bookstore_app_bookstore_app_component__WEBPACK_IMPORTED_MODULE_8__["BookstoreAppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/bookstore-app/bookstore-app.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/bookstore-app/bookstore-app.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookstoreAppBookstoreAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzdG9yZS1hcHAvYm9va3N0b3JlLWFwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/bookstore-app/bookstore-app.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/bookstore-app/bookstore-app.component.ts ***!
    \**********************************************************/

  /*! exports provided: BookstoreAppComponent */

  /***/
  function srcAppBookstoreAppBookstoreAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookstoreAppComponent", function () {
      return BookstoreAppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookstoreAppComponent =
    /*#__PURE__*/
    function () {
      function BookstoreAppComponent() {
        _classCallCheck(this, BookstoreAppComponent);

        this.library = [];
      }

      _createClass(BookstoreAppComponent, [{
        key: "addbook",
        value: function addbook() {
          var bookid = this.library.length + 1;
          this.library.push({
            BookId: bookid,
            BookName: this.bookname,
            Isbn: this.isbn,
            AuthorName: this.authorname
          });
          alert("record is inserted");
          this.bookname = "";
          this.authorname = "";
          this.isbn = "";
        }
      }, {
        key: "deleteBook",
        value: function deleteBook(index) {
          var confirm1 = confirm("are you sure want to remove product");

          if (confirm1 == true) {
            switch (index) {
              case index === 1:
                this.library.splice(index, 1);
                break;
            }
          }
        }
      }]);

      return BookstoreAppComponent;
    }();

    BookstoreAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookstore-app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookstore-app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bookstore-app/bookstore-app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookstore-app.component.css */
      "./src/app/bookstore-app/bookstore-app.component.css")).default]
    })], BookstoreAppComponent);
    /***/
  },

  /***/
  "./src/app/captcha.service.ts":
  /*!************************************!*\
    !*** ./src/app/captcha.service.ts ***!
    \************************************/

  /*! exports provided: CaptchaService */

  /***/
  function srcAppCaptchaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaptchaService", function () {
      return CaptchaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CaptchaService =
    /*#__PURE__*/
    function () {
      function CaptchaService() {
        _classCallCheck(this, CaptchaService);
      }

      _createClass(CaptchaService, [{
        key: "genratecode",
        value: function genratecode() {
          var a = Math.random() * 10;
          var b = Math.random() * 10;
          var c = Math.random() * 10;
          var d = Math.random() * 10;
          var code = Math.round(a) + '' + Math.round(b) + '' + Math.round(c) + '' + Math.round(d);
          return code;
        }
      }]);

      return CaptchaService;
    }();

    CaptchaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CaptchaService);
    /***/
  },

  /***/
  "./src/app/changedemo/changedemo.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/changedemo/changedemo.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChangedemoChangedemoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#div1{\r\n    margin-left:20px ;\r\n    \r\n\r\n}\r\n    \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlZGVtby9jaGFuZ2VkZW1vLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7OztBQUdyQiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZWRlbW8vY2hhbmdlZGVtby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpdjF7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4IDtcclxuICAgIFxyXG5cclxufVxyXG4gICAgXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/changedemo/changedemo.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/changedemo/changedemo.component.ts ***!
    \****************************************************/

  /*! exports provided: ChangedemoComponent */

  /***/
  function srcAppChangedemoChangedemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangedemoComponent", function () {
      return ChangedemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChangedemoComponent =
    /*#__PURE__*/
    function () {
      function ChangedemoComponent() {
        _classCallCheck(this, ChangedemoComponent);

        this.totalprice = 0;
        this.shoppingcart = [];
        this.categories = ['electronics', 'shoes'];
        this.electronics = ['samsungTv', 'sony'];
        this.shoes = ['nike casuals', 'leecooperboot'];
        this.data = [{
          Name: 'samsung tv',
          photo: "assets/1.jpg",
          price: 3000
        }, {
          Name: 'Sony mobile',
          photo: "assets/3.jpg",
          price: 4000
        }, {
          Name: 'LeeCooper',
          photo: "assets/2.jpg",
          price: 6000
        }, {
          Name: 'Leecooperblack',
          photo: "assets/4.jpg",
          price: 7000
        }];
      }

      _createClass(ChangedemoComponent, [{
        key: "categorychanged",
        value: function categorychanged() {
          switch (this.listcategory) {
            case 'electronics':
              this.products = this.electronics;
              break;

            case 'shoes':
              this.products = this.shoes;
              break;
          }
        }
      }, {
        key: "showdetails",
        value: function showdetails(index) {
          this.productname = this.data[index].Name;
          this.productprice = this.data[index].price;
          this.imgpreview = this.data[index].photo;
        }
      }, {
        key: "datachanged",
        value: function datachanged() {
          switch (this.listproduct) {
            case 'samsungTv':
              this.showdetails(0);
              break;

            case 'sony':
              this.showdetails(1);
              break;

            case 'nike casuals':
              this.showdetails(2);
              break;

            case 'leecooperboot':
              this.showdetails(3);
              break;
          }
        }
      }, {
        key: "addCart",
        value: function addCart() {
          this.id = this.shoppingcart.length + 1;
          this.shoppingcart.push({
            ProductId: this.id,
            Name: this.productname,
            Price: this.productprice,
            Preview: this.imgpreview
          });
        }
      }, {
        key: "delCart",
        value: function delCart(i) {
          this.shoppingcart.splice(i, 1);
        }
      }]);

      return ChangedemoComponent;
    }();

    ChangedemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-changedemo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./changedemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/changedemo/changedemo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./changedemo.component.css */
      "./src/app/changedemo/changedemo.component.css")).default]
    })], ChangedemoComponent);
    /***/
  },

  /***/
  "./src/app/child/child.component.css":
  /*!*******************************************!*\
    !*** ./src/app/child/child.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppChildChildComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoaWxkL2NoaWxkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/child/child.component.ts":
  /*!******************************************!*\
    !*** ./src/app/child/child.component.ts ***!
    \******************************************/

  /*! exports provided: ChildComponent */

  /***/
  function srcAppChildChildComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChildComponent", function () {
      return ChildComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChildComponent = function ChildComponent() {
      _classCallCheck(this, ChildComponent);

      this.msg = "binding from child element";
      this.count = 0;
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChildComponent.prototype, "msg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChildComponent.prototype, "count", void 0);
    ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-child',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./child.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/child/child.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./child.component.css */
      "./src/app/child/child.component.css")).default]
    })], ChildComponent);
    /***/
  },

  /***/
  "./src/app/classbinding/classbinding.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/classbinding/classbinding.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppClassbindingClassbindingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".texteffects{\r\n    color:red;\r\n}\r\n.bordereffects{\r\n    border-style:dotted;\r\n}\r\n.backeffects{\r\n    background-color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xhc3NiaW5kaW5nL2NsYXNzYmluZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQztJQUNHLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NsYXNzYmluZGluZy9jbGFzc2JpbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0ZWZmZWN0c3tcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4uYm9yZGVyZWZmZWN0c3tcclxuICAgIGJvcmRlci1zdHlsZTpkb3R0ZWQ7XHJcbn1cclxuIC5iYWNrZWZmZWN0c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/classbinding/classbinding.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/classbinding/classbinding.component.ts ***!
    \********************************************************/

  /*! exports provided: ClassbindingComponent */

  /***/
  function srcAppClassbindingClassbindingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassbindingComponent", function () {
      return ClassbindingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClassbindingComponent = function ClassbindingComponent() {
      _classCallCheck(this, ClassbindingComponent);
    };

    ClassbindingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-classbinding',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./classbinding.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/classbinding/classbinding.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./classbinding.component.css */
      "./src/app/classbinding/classbinding.component.css")).default]
    })], ClassbindingComponent);
    /***/
  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService() {
        _classCallCheck(this, DataService);
      }

      _createClass(DataService, [{
        key: "getdata",
        value: function getdata() {
          return [{
            name: 'samsungtv',
            price: 3000,
            category: 'electronics'
          }, {
            name: "sony",
            price: 5000,
            category: 'electronics'
          }, {
            name: "leecooper",
            price: 4000,
            category: "shoes"
          }, {
            name: "lee",
            price: 6000,
            category: "shoes"
          }];
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/formdemo/formdemo.component.css":
  /*!*************************************************!*\
    !*** ./src/app/formdemo/formdemo.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormdemoFormdemoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1kZW1vL2Zvcm1kZW1vLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/formdemo/formdemo.component.ts":
  /*!************************************************!*\
    !*** ./src/app/formdemo/formdemo.component.ts ***!
    \************************************************/

  /*! exports provided: FormdemoComponent */

  /***/
  function srcAppFormdemoFormdemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormdemoComponent", function () {
      return FormdemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormdemoComponent =
    /*#__PURE__*/
    function () {
      function FormdemoComponent() {
        _classCallCheck(this, FormdemoComponent);
      }

      _createClass(FormdemoComponent, [{
        key: "submitClick",
        value: function submitClick(formObject) {
          alert(formObject.textname);
        }
      }]);

      return FormdemoComponent;
    }();

    FormdemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-formdemo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./formdemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/formdemo/formdemo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./formdemo.component.css */
      "./src/app/formdemo/formdemo.component.css")).default]
    })], FormdemoComponent);
    /***/
  },

  /***/
  "./src/app/inlinstyle/inlinstyle.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/inlinstyle/inlinstyle.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInlinstyleInlinstyleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lubGluc3R5bGUvaW5saW5zdHlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/inlinstyle/inlinstyle.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/inlinstyle/inlinstyle.component.ts ***!
    \****************************************************/

  /*! exports provided: InlinstyleComponent */

  /***/
  function srcAppInlinstyleInlinstyleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InlinstyleComponent", function () {
      return InlinstyleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InlinstyleComponent =
    /*#__PURE__*/
    function () {
      function InlinstyleComponent() {
        _classCallCheck(this, InlinstyleComponent);
      }

      _createClass(InlinstyleComponent, [{
        key: "geteffect",
        value: function geteffect() {
          var effects = {
            'background-color': this.background,
            'color': this.textcolor,
            'text-align': this.textalign
          };
          return effects;
        }
      }]);

      return InlinstyleComponent;
    }();

    InlinstyleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inlinstyle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inlinstyle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inlinstyle/inlinstyle.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inlinstyle.component.css */
      "./src/app/inlinstyle/inlinstyle.component.css")).default]
    })], InlinstyleComponent);
    /***/
  },

  /***/
  "./src/app/inputstate-valid/inputstate-valid.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/inputstate-valid/inputstate-valid.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInputstateValidInputstateValidComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0c3RhdGUtdmFsaWQvaW5wdXRzdGF0ZS12YWxpZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/inputstate-valid/inputstate-valid.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/inputstate-valid/inputstate-valid.component.ts ***!
    \****************************************************************/

  /*! exports provided: InputstateValidComponent */

  /***/
  function srcAppInputstateValidInputstateValidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputstateValidComponent", function () {
      return InputstateValidComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InputstateValidComponent =
    /*#__PURE__*/
    function () {
      function InputstateValidComponent() {
        _classCallCheck(this, InputstateValidComponent);

        this.InvalidGender = true;
        this.evenvalid = true;
      }

      _createClass(InputstateValidComponent, [{
        key: "verifyGender",
        value: function verifyGender(gender) {
          if (gender != 'nogender') {
            this.InvalidGender = false;
          } else {
            this.InvalidGender = true;
          }
        }
      }, {
        key: "changeVerifyeven",
        value: function changeVerifyeven(value) {
          if (value % 2 == 0) {
            this.evenvalid = false;
          } else {
            this.evenvalid = true;
          }
        }
      }]);

      return InputstateValidComponent;
    }();

    InputstateValidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inputstate-valid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inputstate-valid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inputstate-valid/inputstate-valid.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inputstate-valid.component.css */
      "./src/app/inputstate-valid/inputstate-valid.component.css")).default]
    })], InputstateValidComponent);
    /***/
  },

  /***/
  "./src/app/keydemo/keydemo.component.css":
  /*!***********************************************!*\
    !*** ./src/app/keydemo/keydemo.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppKeydemoKeydemoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tleWRlbW8va2V5ZGVtby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/keydemo/keydemo.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/keydemo/keydemo.component.ts ***!
    \**********************************************/

  /*! exports provided: KeydemoComponent */

  /***/
  function srcAppKeydemoKeydemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeydemoComponent", function () {
      return KeydemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var KeydemoComponent =
    /*#__PURE__*/
    function () {
      function KeydemoComponent() {
        _classCallCheck(this, KeydemoComponent);

        this.userdata = [{
          username: 'john'
        }, {
          username: 'david'
        }, {
          username: 'joh12'
        }];
      }

      _createClass(KeydemoComponent, [{
        key: "checkUser",
        value: function checkUser() {
          for (var i = 0; i < this.userdata.length; i++) {
            if (this.userdata[i].username == this.textusername) {
              this.msgusername = 'username taken try another';
              break;
            } else {
              this.msgusername = 'congrats!user name available';
            }
          }
        }
      }]);

      return KeydemoComponent;
    }();

    KeydemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-keydemo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./keydemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/keydemo/keydemo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./keydemo.component.css */
      "./src/app/keydemo/keydemo.component.css")).default]
    })], KeydemoComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/medical-exam-result/medical-exam-result.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/medical-exam-result/medical-exam-result.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMedicalExamResultMedicalExamResultComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtZXhhbS1yZXN1bHQvbWVkaWNhbC1leGFtLXJlc3VsdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/medical-exam-result/medical-exam-result.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/medical-exam-result/medical-exam-result.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MedicalExamResultComponent */

  /***/
  function srcAppMedicalExamResultMedicalExamResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicalExamResultComponent", function () {
      return MedicalExamResultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MedicalExamResultComponent =
    /*#__PURE__*/
    function () {
      function MedicalExamResultComponent() {
        _classCallCheck(this, MedicalExamResultComponent);

        this.All = 0;
        this.Medical = 0;
        this.Enginnering = 0;
        this.selectedCategoryValue = "All";
        this.componentchanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MedicalExamResultComponent, [{
        key: "oncategorychanged",
        value: function oncategorychanged() {
          this.componentchanged.emit(this.selectedCategoryValue);
        }
      }]);

      return MedicalExamResultComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MedicalExamResultComponent.prototype, "All", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MedicalExamResultComponent.prototype, "Medical", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MedicalExamResultComponent.prototype, "Enginnering", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MedicalExamResultComponent.prototype, "componentchanged", void 0);
    MedicalExamResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-medical-exam-result',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./medical-exam-result.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/medical-exam-result/medical-exam-result.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./medical-exam-result.component.css */
      "./src/app/medical-exam-result/medical-exam-result.component.css")).default]
    })], MedicalExamResultComponent);
    /***/
  },

  /***/
  "./src/app/medical-exam/medical-exam.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/medical-exam/medical-exam.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMedicalExamMedicalExamComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtZXhhbS9tZWRpY2FsLWV4YW0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/medical-exam/medical-exam.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/medical-exam/medical-exam.component.ts ***!
    \********************************************************/

  /*! exports provided: MedicalExamComponent */

  /***/
  function srcAppMedicalExamMedicalExamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicalExamComponent", function () {
      return MedicalExamComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MedicalExamComponent =
    /*#__PURE__*/
    function () {
      function MedicalExamComponent() {
        _classCallCheck(this, MedicalExamComponent);

        this.examData = [{
          name: "Abhishek",
          Rank: 485,
          category: "Medical",
          Exam: "Aiims"
        }, {
          name: "Abhishek",
          Rank: 612,
          category: "Medical",
          Exam: "Neet"
        }, {
          name: "Abhishek",
          Rank: 443,
          category: "Medical",
          Exam: "Jipmer"
        }, {
          name: "Avinash",
          Rank: 485,
          category: "Enginnering",
          Exam: "IIT"
        }, {
          name: "Akash",
          Rank: 612,
          category: "Enginnering",
          Exam: "JEE MAIN"
        }, {
          name: "Prharsh",
          Rank: 443,
          category: "Enginnering",
          Exam: "WB"
        }];
        this.all = this.examData.length;
        this.Medical = this.examData.filter(function (x) {
          return x.category == "Medical";
        }).length;
        this.Enginnering = this.examData.filter(function (x) {
          return x.category == "Enginnering";
        }).length;
        this.selectedValue = 'All';
      }

      _createClass(MedicalExamComponent, [{
        key: "oncategorychanged",
        value: function oncategorychanged(selectedvalue) {
          this.selectedValue = selectedvalue;
        }
      }]);

      return MedicalExamComponent;
    }();

    MedicalExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-medical-exam',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./medical-exam.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/medical-exam/medical-exam.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./medical-exam.component.css */
      "./src/app/medical-exam/medical-exam.component.css")).default]
    })], MedicalExamComponent);
    /***/
  },

  /***/
  "./src/app/parent/parent.component.css":
  /*!*********************************************!*\
    !*** ./src/app/parent/parent.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppParentParentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmVudC9wYXJlbnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/parent/parent.component.ts":
  /*!********************************************!*\
    !*** ./src/app/parent/parent.component.ts ***!
    \********************************************/

  /*! exports provided: ParentComponent */

  /***/
  function srcAppParentParentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParentComponent", function () {
      return ParentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ParentComponent =
    /*#__PURE__*/
    function () {
      function ParentComponent() {
        _classCallCheck(this, ParentComponent);

        this.parentmsg = "message from parent";
        this.cities = ['Delhi', 'Hyd'];
      }

      _createClass(ParentComponent, [{
        key: "getcount",
        value: function getcount() {
          return this.cities.length;
        }
      }]);

      return ParentComponent;
    }();

    ParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./parent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/parent/parent.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./parent.component.css */
      "./src/app/parent/parent.component.css")).default]
    })], ParentComponent);
    /***/
  },

  /***/
  "./src/app/placement/placement.component.css":
  /*!***************************************************!*\
    !*** ./src/app/placement/placement.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlacementPlacementComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlbWVudC9wbGFjZW1lbnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/placement/placement.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/placement/placement.component.ts ***!
    \**************************************************/

  /*! exports provided: PlacementComponent */

  /***/
  function srcAppPlacementPlacementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlacementComponent", function () {
      return PlacementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PlacementComponent =
    /*#__PURE__*/
    function () {
      function PlacementComponent() {
        _classCallCheck(this, PlacementComponent);
      }

      _createClass(PlacementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlacementComponent;
    }();

    PlacementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-placement',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./placement.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/placement/placement.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./placement.component.css */
      "./src/app/placement/placement.component.css")).default]
    })], PlacementComponent);
    /***/
  },

  /***/
  "./src/app/prac1parent/prac1parent.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/prac1parent/prac1parent.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrac1parentPrac1parentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByYWMxcGFyZW50L3ByYWMxcGFyZW50LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/prac1parent/prac1parent.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/prac1parent/prac1parent.component.ts ***!
    \******************************************************/

  /*! exports provided: Prac1parentComponent */

  /***/
  function srcAppPrac1parentPrac1parentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Prac1parentComponent", function () {
      return Prac1parentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Prac1parentComponent =
    /*#__PURE__*/
    function () {
      function Prac1parentComponent() {
        _classCallCheck(this, Prac1parentComponent);

        this.data = [{
          name: "samsung",
          price: 4000,
          category: "Electronics"
        }, {
          name: "sony",
          price: 5000,
          category: "Electronics"
        }, {
          name: "Lee",
          price: 4000,
          category: "Shoes"
        }, {
          name: "Cooper",
          price: 5000,
          category: "Shoes"
        }];
        this.selectedvalue = "All";
      }

      _createClass(Prac1parentComponent, [{
        key: "oncomponentChanged",
        value: function oncomponentChanged(value) {
          this.selectedvalue = value;
        }
      }]);

      return Prac1parentComponent;
    }();

    Prac1parentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prac1parent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prac1parent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/prac1parent/prac1parent.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prac1parent.component.css */
      "./src/app/prac1parent/prac1parent.component.css")).default]
    })], Prac1parentComponent);
    /***/
  },

  /***/
  "./src/app/prac2child/prac2child.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/prac2child/prac2child.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrac2childPrac2childComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByYWMyY2hpbGQvcHJhYzJjaGlsZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/prac2child/prac2child.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/prac2child/prac2child.component.ts ***!
    \****************************************************/

  /*! exports provided: Prac2childComponent */

  /***/
  function srcAppPrac2childPrac2childComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Prac2childComponent", function () {
      return Prac2childComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Prac2childComponent =
    /*#__PURE__*/
    function () {
      function Prac2childComponent() {
        _classCallCheck(this, Prac2childComponent);

        this.All = 0;
        this.Electronics = 0;
        this.Shoes = 0;
        this.componentchanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(Prac2childComponent, [{
        key: "oncategorychanged",
        value: function oncategorychanged() {
          this.componentchanged.emit(this.selectedcategory);
        }
      }]);

      return Prac2childComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Prac2childComponent.prototype, "All", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Prac2childComponent.prototype, "Electronics", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], Prac2childComponent.prototype, "Shoes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], Prac2childComponent.prototype, "componentchanged", void 0);
    Prac2childComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prac2child',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prac2child.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/prac2child/prac2child.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prac2child.component.css */
      "./src/app/prac2child/prac2child.component.css")).default]
    })], Prac2childComponent);
    /***/
  },

  /***/
  "./src/app/pracchild/pracchild.component.css":
  /*!***************************************************!*\
    !*** ./src/app/pracchild/pracchild.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPracchildPracchildComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByYWNjaGlsZC9wcmFjY2hpbGQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pracchild/pracchild.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pracchild/pracchild.component.ts ***!
    \**************************************************/

  /*! exports provided: PracchildComponent */

  /***/
  function srcAppPracchildPracchildComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PracchildComponent", function () {
      return PracchildComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PracchildComponent =
    /*#__PURE__*/
    function () {
      function PracchildComponent() {
        _classCallCheck(this, PracchildComponent);

        this.All = 0;
        this.Electronics = 0;
        this.Shoes = 0;
        this.selectedCategory = 'All';
        this.componentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PracchildComponent, [{
        key: "oncategoryChanged",
        value: function oncategoryChanged() {
          alert(this.selectedCategory);
          this.componentChanged.emit(this.selectedCategory);
        }
      }]);

      return PracchildComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PracchildComponent.prototype, "All", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PracchildComponent.prototype, "Electronics", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PracchildComponent.prototype, "Shoes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PracchildComponent.prototype, "componentChanged", void 0);
    PracchildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pracchild',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pracchild.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pracchild/pracchild.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pracchild.component.css */
      "./src/app/pracchild/pracchild.component.css")).default]
    })], PracchildComponent);
    /***/
  },

  /***/
  "./src/app/pracparent/pracparent.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/pracparent/pracparent.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPracparentPracparentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByYWNwYXJlbnQvcHJhY3BhcmVudC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pracparent/pracparent.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pracparent/pracparent.component.ts ***!
    \****************************************************/

  /*! exports provided: PracparentComponent */

  /***/
  function srcAppPracparentPracparentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PracparentComponent", function () {
      return PracparentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PracparentComponent =
    /*#__PURE__*/
    function () {
      function PracparentComponent() {
        _classCallCheck(this, PracparentComponent);

        this.data = [{
          name: "samsung",
          price: 4000,
          category: "Electronics"
        }, {
          name: "sony",
          price: 4000,
          category: "Electronics"
        }, {
          name: "lee",
          price: 4000,
          category: "Shoes"
        }, {
          name: "cooper",
          price: 4000,
          category: "Shoes"
        }];
        this.all = this.data.length;
        this.electronics = this.data.filter(function (x) {
          return x.category == 'Electronics';
        }).length;
        this.shoes = this.data.filter(function (x) {
          return x.category == 'Shoes';
        }).length;
        this.selectedValue = 'All';
      }

      _createClass(PracparentComponent, [{
        key: "changecomponent",
        value: function changecomponent(selected) {
          this.selectedValue = selected;
        }
      }]);

      return PracparentComponent;
    }();

    PracparentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pracparent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pracparent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pracparent/pracparent.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pracparent.component.css */
      "./src/app/pracparent/pracparent.component.css")).default]
    })], PracparentComponent);
    /***/
  },

  /***/
  "./src/app/pracproduct/pracproduct.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/pracproduct/pracproduct.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPracproductPracproductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByYWNwcm9kdWN0L3ByYWNwcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pracproduct/pracproduct.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pracproduct/pracproduct.component.ts ***!
    \******************************************************/

  /*! exports provided: PracproductComponent */

  /***/
  function srcAppPracproductPracproductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PracproductComponent", function () {
      return PracproductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PracproductComponent =
    /*#__PURE__*/
    function () {
      function PracproductComponent() {
        _classCallCheck(this, PracproductComponent);

        this.categories = ['Electronics', 'Shoes'];
        this.Electronics = ['SamsungTv', 'SonyTv'];
        this.Shoes = ['leecooper', 'Reebook'];
        this.data = [{
          name: "samsungtv",
          price: 4000,
          category: "Electronics"
        }, {
          name: "SonyTv",
          price: 4000,
          category: "Electronics"
        }, {
          name: "leecooper",
          price: 4000,
          category: "Shoes"
        }, {
          name: "samsungtv",
          price: 4000,
          category: "Shoes"
        }];
      }

      _createClass(PracproductComponent, [{
        key: "onCategoryChanged",
        value: function onCategoryChanged() {
          switch (this.selectedCategory) {
            case 'Electronics':
              this.Product = this.Electronics;
              break;

            case 'Shoes':
              this.Product = this.Shoes;
              break;
          }
        }
      }]);

      return PracproductComponent;
    }();

    PracproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pracproduct',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pracproduct.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pracproduct/pracproduct.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pracproduct.component.css */
      "./src/app/pracproduct/pracproduct.component.css")).default]
    })], PracproductComponent);
    /***/
  },

  /***/
  "./src/app/product/product.component.css":
  /*!***********************************************!*\
    !*** ./src/app/product/product.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/product/product.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/product/product.component.ts ***!
    \**********************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent() {
        _classCallCheck(this, ProductComponent);

        this.product = [];
      }

      _createClass(ProductComponent, [{
        key: "addProduct",
        value: function addProduct() {
          this.id = this.product.length + 1;
          this.product.push({
            Id: this.id,
            name: this.name,
            price: this.price
          });
          alert("record is inserted");
          this.name = "";
          this.price = 0;
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(index, last) {
          var confirm1 = confirm("are you sure want to delete the product");

          if (confirm1 == true) {
            alert("if you sure want to delete themessage");
            this.product.splice(index, 1);
          }
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.css */
      "./src/app/product/product.component.css")).default]
    })], ProductComponent);
    /***/
  },

  /***/
  "./src/app/productcomponent/productcomponent.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/productcomponent/productcomponent.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductcomponentProductcomponentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rjb21wb25lbnQvcHJvZHVjdGNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/productcomponent/productcomponent.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/productcomponent/productcomponent.component.ts ***!
    \****************************************************************/

  /*! exports provided: ProductcomponentComponent */

  /***/
  function srcAppProductcomponentProductcomponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductcomponentComponent", function () {
      return ProductcomponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");

    var ProductcomponentComponent =
    /*#__PURE__*/
    function () {
      function ProductcomponentComponent(product) {
        _classCallCheck(this, ProductcomponentComponent);

        this.product = product;
        this.data = [];
        this.selectedValue = "All";
        this.all = this.data.length;
        this.electronics = this.data.filter(function (x) {
          return x.category == 'electronics';
        }).length;
        this.shoes = this.data.filter(function (x) {
          return x.category == 'shoes';
        }).length;
      }

      _createClass(ProductcomponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.data = this.product.getdata();
        }
      }, {
        key: "oncategorychanged",
        value: function oncategorychanged(selectedvalue) {
          this.selectedValue = selectedvalue;
        }
      }]);

      return ProductcomponentComponent;
    }();

    ProductcomponentComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    ProductcomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-productcomponent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./productcomponent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/productcomponent/productcomponent.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./productcomponent.component.css */
      "./src/app/productcomponent/productcomponent.component.css")).default]
    })], ProductcomponentComponent);
    /***/
  },

  /***/
  "./src/app/productfilter/productfilter.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/productfilter/productfilter.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductfilterProductfilterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RmaWx0ZXIvcHJvZHVjdGZpbHRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/productfilter/productfilter.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/productfilter/productfilter.component.ts ***!
    \**********************************************************/

  /*! exports provided: ProductfilterComponent */

  /***/
  function srcAppProductfilterProductfilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductfilterComponent", function () {
      return ProductfilterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductfilterComponent =
    /*#__PURE__*/
    function () {
      function ProductfilterComponent() {
        _classCallCheck(this, ProductfilterComponent);

        this.All = 0;
        this.electronics = 0;
        this.shoes = 0;
        this.selectedCategoryValue = "All";
        this.componentchanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ProductfilterComponent, [{
        key: "oncategorychanged",
        value: function oncategorychanged() {
          this.componentchanged.emit(this.selectedCategoryValue);
        }
      }]);

      return ProductfilterComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductfilterComponent.prototype, "All", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductfilterComponent.prototype, "electronics", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductfilterComponent.prototype, "shoes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductfilterComponent.prototype, "componentchanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductfilterComponent.prototype, "oncategorychanged", null);
    ProductfilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-productfilter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./productfilter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/productfilter/productfilter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./productfilter.component.css */
      "./src/app/productfilter/productfilter.component.css")).default]
    })], ProductfilterComponent);
    /***/
  },

  /***/
  "./src/app/project/project.component.css":
  /*!***********************************************!*\
    !*** ./src/app/project/project.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectProjectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/project/project.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/project/project.component.ts ***!
    \**********************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcAppProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectComponent = function ProjectComponent() {
      _classCallCheck(this, ProjectComponent);
    };

    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project.component.css */
      "./src/app/project/project.component.css")).default]
    })], ProjectComponent);
    /***/
  },

  /***/
  "./src/app/reactiveform/reactiveform.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/reactiveform/reactiveform.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReactiveformReactiveformComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWN0aXZlZm9ybS9yZWFjdGl2ZWZvcm0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/reactiveform/reactiveform.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/reactiveform/reactiveform.component.ts ***!
    \********************************************************/

  /*! exports provided: ReactiveformComponent */

  /***/
  function srcAppReactiveformReactiveformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveformComponent", function () {
      return ReactiveformComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ReactiveformComponent =
    /*#__PURE__*/
    function () {
      function ReactiveformComponent() {
        _classCallCheck(this, ReactiveformComponent);

        this.formRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
      }

      _createClass(ReactiveformComponent, [{
        key: "onsubmit",
        value: function onsubmit() {
          alert(this.formRegister.value.firstname);
        }
      }, {
        key: "updateaddress",
        value: function updateaddress() {
          this.formRegister.patchValue({
            frmaddress: {
              city: "delhi",
              pincode: 34590
            }
          });
        }
      }]);

      return ReactiveformComponent;
    }();

    ReactiveformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reactiveform',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reactiveform.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reactiveform/reactiveform.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reactiveform.component.css */
      "./src/app/reactiveform/reactiveform.component.css")).default]
    })], ReactiveformComponent);
    /***/
  },

  /***/
  "./src/app/service-login/service-login.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/service-login/service-login.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppServiceLoginServiceLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UtbG9naW4vc2VydmljZS1sb2dpbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/service-login/service-login.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/service-login/service-login.component.ts ***!
    \**********************************************************/

  /*! exports provided: ServiceLoginComponent */

  /***/
  function srcAppServiceLoginServiceLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceLoginComponent", function () {
      return ServiceLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _captcha_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../captcha.service */
    "./src/app/captcha.service.ts");

    var ServiceLoginComponent =
    /*#__PURE__*/
    function () {
      function ServiceLoginComponent(captcha) {
        _classCallCheck(this, ServiceLoginComponent);

        this.captcha = captcha;
        this.code = this.captcha.genratecode();
      }

      _createClass(ServiceLoginComponent, [{
        key: "newcode",
        value: function newcode() {
          this.code = this.captcha.genratecode();
        }
      }]);

      return ServiceLoginComponent;
    }();

    ServiceLoginComponent.ctorParameters = function () {
      return [{
        type: _captcha_service__WEBPACK_IMPORTED_MODULE_2__["CaptchaService"]
      }];
    };

    ServiceLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-service-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./service-login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/service-login/service-login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./service-login.component.css */
      "./src/app/service-login/service-login.component.css")).default]
    })], ServiceLoginComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Angular8\shoppingcart\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map