(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkassessment"] = self["webpackChunkassessment"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
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
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _site_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./site/home-page/home-page.component */
      326);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'Assessment';
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [["role", "main", 1, "content"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "home-page");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 0);
          }
        },
        directives: [_site_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent],
        styles: ["[_nghost-%COMP%] {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEpBQTBKO0lBQzFKLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7O0FBRUEsWUFBWTs7QUFDVjs7Ozs7OztLQU9HOztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQXVQc0I7O0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTBCSzs7QUFDTCxPQUFPOztBQUNULGFBQWEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbi8qIDxzdHlsZT4gKi9cclxuICAvKiA6aG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgfSAqL1xyXG5cclxuICAvKiBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBoNSxcclxuICBoNiB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW46IC04cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMzJweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiAjODg4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCA4cHggMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLXNtYWxsIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNjhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKGJsYWNrLCAwLjM1KTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAzMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB0b3A6IC0yNHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxODBweDtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICB9XHJcblxyXG4gIGEsXHJcbiAgYTp2aXNpdGVkLFxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTI1Njk5O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xyXG4gICAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMTRweCAwO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDRweDtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbCBwcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5jaXJjbGUtbGluayB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIC5jaXJjbGUtbGluazpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2Uge1xyXG4gICAgY29sb3I6ICMyNDI5MmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZmFmYmZjLCNlZmYzZjYgOTAlKTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbDtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG5cclxuICBzdmcjY2xvdWRzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogLTE2MHB4O1xyXG4gICAgbGVmdDogLTIzMHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gICAgd2lkdGg6IDE5MjBweDtcclxuICB9XHJcblxyXG5cclxuICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG4gIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gICAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXHJcbiAgICAudGVybWluYWwge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgIHJpZ2h0OiAxMjBweDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9ICovXHJcbiAgLyogfSAgKi9cclxuLyogPC9zdHlsZT4gKi8iXX0= */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _site_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./site/home-page/home-page.module */
      121);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _site_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_1__.HomePageModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _site_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_1__.HomePageModule]
        });
      })();
      /***/

    },

    /***/
    8760:
    /*!****************************************!*\
      !*** ./src/app/shared/default-data.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JOBS": function JOBS() {
          return (
            /* binding */
            _JOBS
          );
        }
        /* harmony export */

      });

      var _JOBS = [{
        "title": "Sr Frontend Developer",
        "jobId": "170521003351",
        "jobType": "HOT JOB",
        "currency": "INR",
        "footerPlaceholderLabel": "6 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Smith Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Front End,Redux,React.js,Angular",
        "placeholders": [{
          "type": "experience",
          "label": "2-7 Yrs"
        }, {
          "type": "salary",
          "label": "20,00,000 - 35,00,000 PA."
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru, Delhi / NCR, Mumbai (All Areas)"
        }],
        "companyId": 3257954,
        "staticUrl": "edu-angels-india-jobs-careers-3257954",
        "jobDescription": "<p>We are looking for Sr Frontend Developers passionate about building rich web applications. We are looking for self-driven individuals who love to find innovative solutions and can perform under pressure. An eye for detail and being proud of produced code are the must-have attributes for this job.</p><br/><p><strong>Responsibilities</strong></p><br/><ul><li>You will be responsible for converting Product team requirements to modular, testable, and efficient code.</li><li>You will also be required to cater to NFRs related to security and performance.</li></ul><br/><p><strong>Skills</strong></p><br/><ul><li>2+ years of experience in working on React.js/Redux/Angular</li><li>Good knowledge of responsive framework MaterializeCSS along with exposure to HTML5, JavaScript, and CSS3 is required.</li><li>Experience in building/deploying applications on AWS is a definite advantage.</li><li>A good understanding of architectural patterns (e.g. MVC) is required.</li><li>Good communication and analytical skills are the basic needs of this role.</li><li>An urge to create awesome applications that people will enjoy using is a must.</li></ul><br/><p><strong>Qualification</strong></p><br/><ul><li>Engineering graduates from Tier I or II institutes or worked with top product-based organizations</li><li>B.E. / B.Tech / MCA / M.E. / M.Tech</li></ul>",
        "showMultipleApply": true,
        "groupId": 2572448,
        "isTopGroup": 0,
        "createdDate": 1621954180352
      }, {
        "title": "Senior Responsive Web Developer",
        "jobId": "270521005341",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "4 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Johnson Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "isomorphic,Javascript,React.Js,IT Skills,DOM,Front End,Redux,Ecmascript",
        "placeholders": [{
          "type": "experience",
          "label": "5-10 Yrs"
        }, {
          "type": "salary",
          "label": "20,00,000 - 27,50,000 PA."
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 6084266,
        "staticUrl": "binate-solutions-jobs-careers-0",
        "jobDescription": "Optimizing components for maximum performance across a vast array of web-capable devices including smart TVs,set-top boxes and gaming consoles <br><br>Experience with common front-end development tools such as Babel,Webpack,NPM,etc<br><br>Experience with data structure libraries (e.g.,Immutable.js) <br><br>Experience with popular React.js workflows (such as Redux)",
        "showMultipleApply": true,
        "groupId": 5488036,
        "isTopGroup": 0,
        "createdDate": 1622118325296
      }, {
        "title": "UI Developer",
        "jobId": "290521001879",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "2 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Williams Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "ReactJs,GIT,CSS,SASS,UI,CSS3,Angular JS,JavaScript",
        "placeholders": [{
          "type": "experience",
          "label": "2-7 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Hyderabad/Secunderabad, Bangalore/Bengaluru"
        }],
        "companyId": 6058730,
        "staticUrl": "hiringeye-solutions-jobs-careers-6058730",
        "jobDescription": "<p><strong>Roles and Responsibilities</strong> </p><p><b>Need Immediate UI Developer</b></p>    <p></p>    <p><br></p><p><b>Job Description</b></p>    <p> Develop, and  curate the web and app-based interfaces that thousands of customers interact  with on a daily basis.</p>    <p> Managing end to  end development from the frontend perspective.</p>    <p> Build reusable  code and libraries for future use.</p>    <p> Ensure the  technical feasibility of UI/UX designs.</p>    <p> Ensure captured  data validation to best standards.</p>    <p><br></p><p><b>Minimum  Qualifications</b></p>    <p> Proficient  understanding of HTML5, CSS3, CSS preprocessors (LESS/SASS).</p>    <p> Proficient  understanding of ReactJs and JavaScript.</p>    <p> Familiarity with  React Native is a plus.</p>    <p> Knowledge of SPAs  and build tools (like webpack, parcel etc.)</p>    <p> Proficient  understanding of code versioning tools, such as GIT</p>    <p> Proficient  understanding of cross-browser compatibility issues and ways to work around  them.</p>    <p> Experience with  performance optimization of applications</p>    <p> Write well  designed, testable, efficient and well documented code by using best software  development practices.</p>    <p> Excellent problem-solving  ability and desire to learn new technologies and platforms</p>    <p></p>    <p><b><br></b></p><p><b>Please provide  below details mandatory</b></p>    <p>1. Total Experience</p>    <p>2. Experience in to  Angular JS/React JS-</p>    <p>3. Current  Location-</p>    <p>4. Open for  Hyderabad/Bangalore/Both-</p>    <p>5. Notice Period-  we consider who can join within 2 weeks-</p>    <p></p><p><br></p><p><br></p><p><br></p>",
        "showMultipleApply": true,
        "groupId": 5464180,
        "isTopGroup": 0,
        "createdDate": 1622281448437
      }, {
        "title": "Senior Java Developer - Open Source Technologies",
        "jobId": "310521907653",
        "jobType": "HOT JOB",
        "currency": "INR",
        "footerPlaceholderLabel": "1 Day Ago",
        "footerPlaceholderColor": "green",
        "companyName": "Brown Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "IT Skills,Java,Software Development,Testing,Cloud,Jenkins,AWS,Open Source",
        "placeholders": [{
          "type": "experience",
          "label": "5-10 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 852658,
        "staticUrl": "premium-jobs-careers-852658",
        "jobDescription": "Minimum Experience :  5 Years (Java Development)<br><br>Hands-on experience working with large-scale distributed software systems is highly desired <br><br>Prior experience in developing microservices in Cloud-based applications (ex AWS) would be highly advantageous",
        "showMultipleApply": true,
        "groupId": 589890,
        "isTopGroup": 0,
        "createdDate": 1622473962036
      }, {
        "title": "Senior Software Engineer",
        "jobId": "290521002870",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "1 Day Ago",
        "footerPlaceholderColor": "green",
        "companyName": "Jones Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Software Engineering,Mern Stack,Java,CSS,Mean Stack,Javascript,PHP,HTML",
        "placeholders": [{
          "type": "experience",
          "label": "3-8 Yrs"
        }, {
          "type": "salary",
          "label": "20,00,000 - 35,00,000 PA."
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 5218346,
        "staticUrl": "majoris-technologies-jobs-careers-5218346",
        "jobDescription": "<p>For one of our Singapore based customer (Product Based),we are looking to hire a team of Full Stack, lead Full Stack and SSE in Bangalore. Looking for Tech geeks, having 3-10 years of experience who is excited for this full time opportunity. </p><br/><ul><li>• 3+ years of web development experience using LAMP stack or Node.js or similar web technologies </li><li>• Well-versed with front-end code in HTML5, CSS3, Javascript, React.js with familiarity in various frameworks and template languages </li><li>• Possess strong understanding of Object-Oriented Programming, especially in PHP </li><li>• Proficient with database design, optimization and tuning in MySQL or MongoDB </li><li>• Experience in design patterns, unit testing, automation techniques (Selenium WebDriver) </li><li>• Exposure to Amazon Web Services (EC2, S3, EBS, RDS, SQS, Redshift, etc.) </li><li>• Exposure to Docker and Kubernetes </li><li>• Exposure to collaborating tools like GitHub, JIRA, Confluence </li><li>• Experience in frameworks such as Symfony 2, Express.js, or proven ability to learn on the job </li><li>• Experience in Microservices and REST architecture </li><li>• Exposure to Scrum methodology and XP technical practices such as unit testing, pair programming, test-driven development, continuous integration or continuous delivery </li><li>• Self-motivated, fast learner, detail-oriented, team player and a sense of humor </li></ul><br/><p>                                                                      OR</p><br/><ul><li>Candidate should possess string analytical skills and passion for continuous learning and incremental improvement </li><li>• Core technical skills and competencies include: SPRING, Hibernate, PrimeFaces, Angular, Ionic Framework, PL/SQL, UI/UX </li><li>• Web services: RESTful </li><li>• Working experience in EJB/JPA/JSF, HTML5, and Javascript is preferred </li><li>• Prior experience in working in real estate and finance sectors would be an added advantage </li><li>• Good understanding of the Software Development Life Cycle and Service Oriented architectures </li><li>• The ability and desire to contribute ideas and take ownership of assigned tasks </li><li>• The ability to work in a team and remotely </li><li>• Ability to create and deliver high quality Code in expected time frames </li><li>• Comfortable to liaise with teams in different countries </li></ul><br/>",
        "showMultipleApply": true,
        "groupId": 4353066,
        "isTopGroup": 0,
        "createdDate": 1622363209302
      }, {
        "title": "Java Full Stack Developer",
        "logoPath": "https://img.naukimg.com/logo_images/v3/190692.gif",
        "logoPathV3": "https://img.naukimg.com/logo_images/v3/190692.gif",
        "jobId": "270521006761",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "4 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Miller Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "IT Skills,Java,Testing,Cloud,DevOps,Jenkins,AWS,Spring Boot",
        "placeholders": [{
          "type": "experience",
          "label": "5-10 Yrs"
        }, {
          "type": "salary",
          "label": "15,00,000 - 30,00,000 PA."
        }, {
          "type": "location",
          "label": "Hyderabad/Secunderabad, Bangalore/Bengaluru"
        }],
        "companyId": 190692,
        "staticUrl": "teksystems-global-services-jobs-careers-190692",
        "ambitionBoxData": {
          "Url": "https://www.ambitionbox.com/reviews/teksystems-reviews?utm_campaign=reco_ratings&utm_medium=desktop&utm_source=naukri",
          "ReviewsCount": 278,
          "AggregateRating": "3.6",
          "Title": "TEKsystems Reviews by Employees"
        },
        "jobDescription": "<b>Greetings from TEKsystems Global Service</b>s!!!<div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\"><br></div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">Its indeed pleasure knowing you through this email, we are looking for professional like you, who is passionate in upskilling and learning new technologies. if you are keen to explore this opportunity please share your resume I will call you for a detailed discussion.</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">we are looking some one strong in Java Full Stack Development SSE/Module Lead and Technical Leads. </div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">we have 40+ Positions open for Java skills in our core development & Transformation Devops cloud practice.</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\"><br></div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\"><b style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">Skills Needed</b></div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Hands on experience in designing and developing high-performing, scalable,<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Enterprise-grade cloud applications on Java EE platforms<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Object Oriented analysis and Design patterns.<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Jenkins task to deploy a server,<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">Good in Angular JS/ React JS must be strong in front end development<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Run the simulator against it for verifying the baseline.<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Trigger scripts that need to get the logs from the server<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Profound insight of Java and JEE internals (Memory Management, Transaction management)<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Excellent knowledge of Relational Databases SQL and ORM technologies<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Experience in developing RESTful web services<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Good experience in Spring, Spring Boot, REST APIs, Protocol Buffers, gRPC, Junit, Gradle<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Solid experience in creating and deploying micro services is very important.<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Working experience/ knowledge with AWS Lamda, Dockers<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Good to Have Skills: Shell script, MySQL<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Sound knowledge on DevOps activities<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Creating database schemas that represent and support business processes<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Basic understanding of JVM, its limitations, weaknesses, and workarounds<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Implementing automated testing platforms and unit tests<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Proficient understanding of code versioning tools, such as GIT<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Familiarity with build tools such as Ant, Maven, and Gradle<br style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">• Familiarity with continuous integration</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">Mandatory skills: Sprint Boot, Microservices, REST API, </div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">Good to Have: AWS Lamda, Dockers</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\"><br></div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\"><b style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\"> About US:</b></div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">TEKsystems Global Services (TGS) is the Software services division of TEKsystems. TEKsystems is a $4.3 billion organization with over 150 offices across the globe. TGS accounts for $600 Million and has about 5000 full time employees across the globe of which 1200 are in India. TGS operates through multiple solution centers across locations like US (Dallas, Seattle, Santa Clara, Bloomington, Baltimore), UK (Amsterdam, London), Canada, Manila and India (Bangalore and Hyderabad). We are an ISO 27001 certified Organization.</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">TGS offers a wide range of IT services including but not limited to delivering high end business consulting services and building applications. This is done through multiple practices including:</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">o             CD - Core Development  </div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">o             DE- Digital Experience </div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">o             TDC – Transformation Devops Cloud</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">o             DAI - Data Analytics and Insides</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">o             CT - Continuous Testing</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">o             Salesforce</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">o             EA - Enterprise Application </div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">o             EI - Enterprise integration</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">o             DA - Data analytics</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">o             DI- Data Insides</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">o             IO – Infrastructure optimization</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\">For more details please visit us on https://www.teksystems.com/en/services</div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\"><br></div><div style=\"margin-bottom:7px;margin-left:0;margin-right:0;margin-top:0\"><br></div>",
        "showMultipleApply": true,
        "groupId": 140602,
        "isTopGroup": 0,
        "createdDate": 1622130540387
      }, {
        "title": "FrontEnd Developer - Kristal.AI",
        "jobId": "270521004316",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "4 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Davis Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "IT Skills,Javascript,Front End,UI Development,React.Js",
        "placeholders": [{
          "type": "experience",
          "label": "4-8 Yrs"
        }, {
          "type": "salary",
          "label": "15,00,000 - 30,00,000 PA."
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 5857888,
        "staticUrl": "codejudge-it-solutions-india-jobs-careers-5857888",
        "jobDescription": "A minimum of 4+ years experience in Web development <br><br>Hands-on experience on ReactJs of 3 years at least",
        "showMultipleApply": true,
        "groupId": 5277626,
        "isTopGroup": 0,
        "createdDate": 1622111291542
      }, {
        "title": "Fullstack developer",
        "logoPath": "https://img.naukimg.com/logo_images/v3/129906.gif",
        "logoPathV3": "https://img.naukimg.com/logo_images/v3/129906.gif",
        "jobId": "190521001125",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "4 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Garcia Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "IT Skills,React.js,Javascript,node js,react js,React,reactjs,Nodejs",
        "placeholders": [{
          "type": "experience",
          "label": "3-8 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 129906,
        "staticUrl": "replicon-india-jobs-careers-129906",
        "ambitionBoxData": {
          "Url": "https://www.ambitionbox.com/reviews/replicon-software-reviews?utm_campaign=reco_ratings&utm_medium=desktop&utm_source=naukri",
          "ReviewsCount": 33,
          "AggregateRating": "3.8",
          "Title": "Replicon Reviews by Employees"
        },
        "jobDescription": "Experience in Javascript in frontend is must<br><br>Having experience with AWS is an asset,but any Cloud infrastructure platform is a strong starting point (eg<br><br>We want to build out our team with more engineers who are also passionate about building great applications and care about giving our customers a great user experience",
        "showMultipleApply": true,
        "groupId": 99060,
        "isTopGroup": 0,
        "createdDate": 1622142019412
      }, {
        "title": "Opening!! Node JS Developer",
        "jobId": "250521004166",
        "jobType": "HOT JOB",
        "currency": "INR",
        "footerPlaceholderLabel": "6 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Rodriguez Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Express,Mean Stack,Ionic Framework,MySQL,Node.Js,MongoDB,Flutter,Angular",
        "placeholders": [{
          "type": "experience",
          "label": "4-8 Yrs"
        }, {
          "type": "salary",
          "label": "16,00,000 - 30,00,000 PA."
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru, Mumbai (All Areas)"
        }],
        "companyId": 5763128,
        "staticUrl": "u-s-recruitment-consultants-jobs-careers-5763128",
        "jobDescription": "At least 3 to 4 years experience in Support and Maintenance using MEAN Stack technologies<br><br>Required Qualification: B Tech / BE / MCA Etc<br><br>Required Experience: 4 to 10 years<br><br>Good written and verbal communication skills <br><br>Experience of working effectively as part of a team",
        "showMultipleApply": true,
        "groupId": 5187596,
        "isTopGroup": 0,
        "createdDate": 1621940520444
      }, {
        "title": "Need Full Stack Developer - Remote position and Direct Client Payrole.",
        "jobId": "290521000217",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "3 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Wilson Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Node,full stack,react,fullstack,script",
        "placeholders": [{
          "type": "experience",
          "label": "5-10 Yrs"
        }, {
          "type": "salary",
          "label": "25,00,000 - 40,00,000 PA."
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 5316638,
        "staticUrl": "cks-global-ventures-jobs-careers-5316638",
        "jobDescription": "Sr. Full Stack Developer with over 5+ Years with NodeJs, ReactJs and Scripting experience is needed. Its for a Multi National Client and a Product based company. If Interested send your resume to srirama.muttukuru@assetone.net or call me 8919339597",
        "showMultipleApply": true,
        "groupId": 4440448,
        "isTopGroup": 0,
        "createdDate": 1622256338321
      }, {
        "title": "Lead Backend Developer - Java/Hibernate/Spring Boot",
        "logoPath": "https://img.naukimg.com/logo_images/v3/678662.gif",
        "logoPathV3": "https://img.naukimg.com/logo_images/v3/678662.gif",
        "jobId": "091220903090",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "6 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Martinez Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "JMS,Hibernate,JUnit,PL-SQL,Design Patterns,Kafka,Spring Boot,ORM",
        "placeholders": [{
          "type": "experience",
          "label": "6-11 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 678662,
        "staticUrl": "premium-jobs-jobs-careers-678662",
        "ambitionBoxData": {
          "Url": "https://www.ambitionbox.com/reviews/linktree-technologies-reviews?utm_campaign=reco_ratings&utm_medium=desktop&utm_source=naukri",
          "ReviewsCount": 3,
          "AggregateRating": "3.4",
          "Title": "LinkTree Technologies Reviews by Employees"
        },
        "jobDescription": "Should have sound implementation experience on Jenkins,Maven,Sonar,Nolio,Ansible / TFS Build,any one of the usage of Selenium / Fortify / open source regression test suite with the usage of BDD with cucumber framework,ELK or Prometheus configuration for continuous monitoring<br><br> Should have demonstrated challenge-based approached,in terms of challenging the status quo",
        "showMultipleApply": true,
        "groupId": 415584,
        "isTopGroup": 0,
        "createdDate": 1621922688217
      }, {
        "title": "Hiring Full Stack developer with Azure",
        "logoPath": "https://img.naukimg.com/logo_images/v3/4882552.gif",
        "logoPathV3": "https://img.naukimg.com/logo_images/v3/4882552.gif",
        "jobId": "310521004912",
        "jobType": "HOT JOB",
        "currency": "INR",
        "footerPlaceholderLabel": "1 Day Ago",
        "footerPlaceholderColor": "green",
        "companyName": "Anderson Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Java,Azure,Angular,IT Skills,Software Development,Testing,Cloud,DevOps",
        "placeholders": [{
          "type": "experience",
          "label": "4-9 Yrs"
        }, {
          "type": "salary",
          "label": "15,00,000 - 25,00,000 PA."
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 4882552,
        "staticUrl": "veear-projects-jobs-careers-4882552",
        "jobDescription": "<br/><p>Greetings from Veear Projects!!! </p><br/><p><strong>Role: </strong></p><p><u>Full Stack Developer (Java & Angular + Azure)</u></p><p>The ideal candidate for this position should possess a good understanding of enterprise-class IT development methodologies and demonstrate solid skills in around business processes. This individual must have excellent communication skills, both verbal and written, and demonstrate a team-oriented, goal and results-driven work ethic.  The role requires working collaboratively with the business community and other IT team members within a dynamic and high-profile environment. </p><br/><p><strong><u>Job Responsibilities:</u></strong></p><ul><li>Designs and develops software solutions to      meet business requirements. Manages full software development life cycle      including testing, implementation, and auditing. Performs solution design,      bug verification, and beta support, which may require research and      analysis.</li><li>Execute, assess, and troubleshoot software      programs and applications. Analyze and amend software errors in a timely      and accurate fashion, and participate in software upgrades, revisions,      fixes and patches as mandated.</li><li>Design, develop and document specifications      throughout the project life cycle. Coding, developing, and documenting      software specifications throughout the project life cycle.</li><li>Guide developers on issues related to the      design, development, and deployment of mission-critical information and      software systems; review work of development teams.</li></ul><br/><p><strong>Skills & Qualifications: -</strong></p><ul><li>Experience of architecture Web      applications, data modeling techniques and analysis.</li><li>Expert level hands on experience in Azure cloud      application design and development</li><li>Experience in building scalable single page applications deployed in azure end to end using Angular 9 or above. </li><li>Experience and Knowledge around different      frameworks like <strong>Angular</strong>, EmberJS, Bootstrap or any custom styling      framework.</li><li>Extensive experience of providing      solutions in various Web and Mobile application functions and additional      knowledge of related functions is required.</li><li>5+ years of experience and Knowledge around      Java Spring Framework, Node JS etc.</li><li><strong>Experience in building microservices using Spring boot,      Spring REST, Web API, spring JDBC, Spring security for authentication and      authorization</strong></li><li><strong>Expert level experience in building cloud applications using Microsoft Azure Services (App Service, Azure Spring Cloud, API Management, Azure Functions and Blob Storage)</strong></li><li>Experience building scalable and resilient applications in private or public cloud environments.</li><li><strong>Experience      in Cloud platform  Azure</strong></li><li>Experience in DevOps tools like Azure DevOps, Docker, Kubernetes, and Library Management tools like Artifactory or NuGet</li><li>Experience using CICD Azure pipelines</li><li>Good understanding on Azure API Management</li><li>Hands on experience in Azure web application development and Integrations</li><li>Experience in building custom applications      on top of ERP applications (including data modeling, architecture etc.).</li><li>Ability to take a project from scoping      requirements through launch.</li><li>Experience in streaming technologies like Apache Kafka,      Spark is preferred</li><li>Ability to analyze & resolve production      support issues.</li><li>Self-Driven and ability to react to change      and shifting priorities.</li><li>Must have experience supporting /      implementing large web development projects like product development      assignments.</li><li>Demonstrated proficiency around basic to      complex queries in SQL. SQL      experience with SQL Server, T-SQL, SQL Profiler, etc.</li><li><strong>Expertise in multiple web development      technologies like HTML5, CSS3, jQuery, Javascript, SASS, LESS, JSON and      REST.</strong></li><li>Experience in managing complexities of      Project and Software Development Life Cycle Methodologies.</li><li>Expertise with responsive design and      understanding of mobile first design principals</li><li>Knowledge of any industry standard Custom      web Portals.</li></ul><br/><p><strong>Experience/Education :</strong></p><ul><li>4-year degree from an accredited      college/university in Information Systems (Computer Science) or related      field or equivalent related experience.</li><li>6+ years of fullstack Java IT Web and/or      Mobile Applications experience.</li><li>2 - 3 years of experience using HTML5, CSS,      AJAX, JavaScript</li><li>2+ years experience with Angular 8 and      above</li><li>Experience with CSS Pre-compilers (LESS or      SASS)</li><li>Knowledge of REST services using JSON and      AJAX</li><li>Spring Boot and familiarity with using      Spring through JPA</li></ul><br/><p><strong>Preferred Qualifications:</strong></p><ul><li>Advance degree or post-graduation degree is      preferred.</li><li>Previous experience in the electronics or      distribution industries.</li><li>Previous experience working for a large      public enterprise corporation.</li><li>Knowledge on Java spring security</li><li>Knowledge of unit testing, JS testing      frameworks like Jasmine, Karma</li><li>Working experience with Oracle APEX      application development & design will be a plus</li></ul><br/><p>Location : Bangalore(Currently, Work from Home)</p><p>Onsite opportunity for US</p>",
        "showMultipleApply": true,
        "groupId": 4114218,
        "isTopGroup": 0,
        "createdDate": 1622465362789
      }, {
        "title": "Senior Software Engineer  - Backend Developer",
        "jobId": "270521003438",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "4 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Taylor Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Java,Software Engineering,AWS,Microservices",
        "placeholders": [{
          "type": "experience",
          "label": "5-8 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 2489088,
        "staticUrl": "zolostays-property-solutions-jobs-careers-2489088",
        "ambitionBoxData": {
          "Url": "https://www.ambitionbox.com/reviews/zolo-reviews?utm_campaign=reco_ratings&utm_medium=desktop&utm_source=naukri",
          "ReviewsCount": 136,
          "AggregateRating": "3.6",
          "Title": "Zolo Reviews by Employees"
        },
        "jobDescription": "4+ years of strong hands-on experience in Java backend programming language to developer application",
        "showMultipleApply": true,
        "groupId": 1913972,
        "isTopGroup": 0,
        "createdDate": 1622105646089
      }, {
        "title": "Full Stack Developer - Node.js/React.js",
        "logoPath": "https://img.naukimg.com/logo_images/v3/678662.gif",
        "logoPathV3": "https://img.naukimg.com/logo_images/v3/678662.gif",
        "jobId": "110321902800",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "6 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Thomas Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "RESTful API,Design Patterns,CI/CD,Full Stack,Node.js,React.js,AWS,Microservices",
        "placeholders": [{
          "type": "experience",
          "label": "5-10 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Hyderabad/Secunderabad, Bangalore/Bengaluru"
        }],
        "companyId": 678662,
        "staticUrl": "premium-jobs-jobs-careers-678662",
        "jobDescription": "Requirements (Nice to have) : - Experience designing and developing Cloud based services and Application Programming Interfaces (API) for cloud service orchestration <br><br> MySQL and NoSQL DB (like MongoDB Cassandra) - MUST HAVE<br><br>Requirements (Must Have ) <br><br> Should have strong knowledge of AWS Cloud libraries <br><br> Hands on with coding & Experience in multiple coding platforms",
        "showMultipleApply": true,
        "groupId": 415584,
        "isTopGroup": 0,
        "createdDate": 1621922751918
      }, {
        "title": "Full Stack Developer - AngularJS/React.js",
        "jobId": "270221905112",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "6 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Hernandez Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "IT Skills,Elastic Search,CSS,Javascript,Angular.js,RDBMS,Full Stack,MVC",
        "placeholders": [{
          "type": "experience",
          "label": "7-12 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 852658,
        "staticUrl": "premium-jobs-careers-852658",
        "jobDescription": "<B>Roles and Responsibilities</B><BR><P><P>As a Principal Full-stack engineer, you will work across the Acceldata platform products. We- re looking for people with a strong background or inclination towards data engineering and systems; you- re comfortable in dealing with lots of moving pieces and can work at the intersection of Databases, API's and Frontends<BR><BR>You will : <BR><BR>- Be actively involved in strategic direction and product decisions.<BR><BR>- Design, build and maintain APIs, user-facing experiences, and services.<BR><BR>- Work closely with our customers and sales teams on a regular basis to carve out new features and use cases<BR><BR>- Work with MVC frameworks such as React or Angular <BR><BR>- Work with database systems, RDBMS, Mongo, Elastic Search.<BR><BR>- Develop shared front-end components (JavaScript & CSS) for use across all of our products, enabling other UI engineers to build better products faster.</P><P></P>",
        "showMultipleApply": true,
        "groupId": 589890,
        "isTopGroup": 0,
        "createdDate": 1621922379065
      }, {
        "title": "Java SSE / Lead JAVA Developer\n",
        "jobId": "050421906938",
        "jobType": "HOT JOB",
        "currency": "INR",
        "footerPlaceholderLabel": "1 Day Ago",
        "footerPlaceholderColor": "green",
        "companyName": "Moore Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Java,microservice   architecture,Bigdata,RESTful services,Spring boot,Spring,Microservices",
        "placeholders": [{
          "type": "experience",
          "label": "6-11 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 852658,
        "staticUrl": "premium-jobs-careers-852658",
        "jobDescription": "Strong experience and knowledge in Spring boot framework and microservice architecture<br><br>Should have experience working on Application frameworks such as Spring,Spring Boot,AOP<br><br>Should have a deep understanding of Enterprise / Distributed Architecture patterns and should be able to demonstrate the relevant usage of the same<br><br>Demonstrated experience as a Java",
        "showMultipleApply": true,
        "groupId": 589890,
        "isTopGroup": 0,
        "createdDate": 1622446656783
      }, {
        "title": "Java Developer / Lead Java Developer - Spring/Python/Design Patterns",
        "jobId": "280221901201",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "6 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Martin Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Spring cloud stack,communication,Agile,OO,NoSQL,API design,Hibernate,SOAP",
        "placeholders": [{
          "type": "experience",
          "label": "5-10 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 852658,
        "staticUrl": "premium-jobs-careers-852658",
        "jobDescription": "Strong knowledge of Spring,Spring Boot and API design is a must<br><br> Experience in Python will be preferred<br><br> Hands-on experience in analysis,design,coding,and implementation of complex,custom-built applications <br><br> 5 to 7 years (7 to 15 years for lead role) of hands-on development experience using technology Java / J2ee,Spring,hibernate",
        "showMultipleApply": true,
        "groupId": 589890,
        "isTopGroup": 0,
        "createdDate": 1621922378998
      }, {
        "title": "Technical Lead (Backend)",
        "jobId": "121220001683",
        "jobType": "CLASSIFIED",
        "currency": "INR",
        "footerPlaceholderLabel": "2 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Jackson Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "development,SQL,REST,OOAD,structures,microservices,Java,Spring",
        "placeholders": [{
          "type": "experience",
          "label": "7-11 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 2497034,
        "staticUrl": "arete-careers-opc-jobs-careers-2497034",
        "jobDescription": "Experience in software development, design and delivery. Experience in working on Java, Spring, REST, SQL, microservices is required. Great design and problem solving skills, OOAD, efficient data structures and algorithms.",
        "showMultipleApply": true,
        "groupId": 1920896,
        "isTopGroup": 0,
        "createdDate": 1622272943635
      }, {
        "title": "Technical Lead",
        "logoPath": "https://img.naukimg.com/logo_images/v3/5105902.gif",
        "logoPathV3": "https://img.naukimg.com/logo_images/v3/5105902.gif",
        "jobId": "260521900368",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "5 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Thompson Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Java,Spring Boot,AWS,Microservices",
        "placeholders": [{
          "type": "experience",
          "label": "6-11 Yrs"
        }, {
          "type": "salary",
          "label": "22,50,000 - 37,50,000 PA."
        }, {
          "type": "location",
          "label": "Pune, Bangalore/Bengaluru"
        }],
        "companyId": 5105902,
        "staticUrl": "bigshyft-jobs-careers-5105902",
        "jobDescription": "6+ years with 4+ years of server-side application development experience with Java,Springboot,Microservices,AWS <br><br>Demonstrated experience delivering highly scalable products",
        "showMultipleApply": true,
        "groupId": 4252054,
        "isTopGroup": 0,
        "createdDate": 1622000786000
      }, {
        "title": "Full Stack Developer - React.js/ Node.js",
        "jobId": "180121900575",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "6 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "White Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Node js,React,Agile,Scrum,debugging,Java,Angular,OO",
        "placeholders": [{
          "type": "experience",
          "label": "5-10 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 852658,
        "staticUrl": "premium-jobs-careers-852658",
        "jobDescription": "Must have at least 4+ years of total experience <br><br> Minimum 2+ years in Angular OR React and Node.js <br><br> Solid development experience in Java or .NET <br><br> Development experience in cloud environment is a plus <br><br> Experience with Agile / Scrum methodology",
        "showMultipleApply": true,
        "groupId": 589890,
        "isTopGroup": 0,
        "createdDate": 1621921963828
      }, {
        "title": "Senior JavaScript(UI) Developer",
        "jobId": "270521000258",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "5 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Lopez Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "CSS,Javascript,HTML,jQuery,DOM,Ecmascript,API",
        "placeholders": [{
          "type": "experience",
          "label": "4-9 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 4564206,
        "staticUrl": "pattem-digital-technologies-jobs-careers-3986584",
        "jobDescription": "Understanding of Web Accessibility WCAG guidelines(0) is preferred<br><br>To apply for JavaScript Developer jobs,you should have knowledge of back end services for building out APIs on the basis of your knowledge of relational databases and web servers <br><br>You should have gained prominence over source control (Git),command-line applications (on Linux / Windows),and front-end testing frameworks",
        "showMultipleApply": true,
        "groupId": 3215592,
        "isTopGroup": 0,
        "createdDate": 1622082305595
      }, {
        "title": "Java Developer -IU - Costrategix Technologies Pvt. Ltd. - Bangalore",
        "jobId": "160321008802",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "6 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Lee Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "SQL,JPA,Java,OOPs,NoSQL,SOAP,Multithreading,REST",
        "placeholders": [{
          "type": "experience",
          "label": "5-10 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 1383534,
        "staticUrl": "costrategix-technologies-jobs-careers-1383534",
        "ambitionBoxData": {
          "Url": "https://www.ambitionbox.com/reviews/costrategix-technologies-reviews?utm_campaign=reco_ratings&utm_medium=desktop&utm_source=naukri",
          "ReviewsCount": 5,
          "AggregateRating": "3.6",
          "Title": "Costrategix Technologies Reviews by Employees"
        },
        "jobDescription": "Good in DB concepts and exposure to writing advanced queries<br><br> Good in basic concepts -",
        "showMultipleApply": true,
        "groupId": 986422,
        "isTopGroup": 0,
        "createdDate": 1621942322818
      }, {
        "title": "Lead - UI Developer",
        "jobId": "310521002967",
        "jobType": "HOT JOB",
        "currency": "INR",
        "footerPlaceholderLabel": "1 Day Ago",
        "footerPlaceholderColor": "green",
        "companyName": "Gonzalez Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Angularjs,jQuery,Javascript,IT Skills,Cloud,DevOps,Node.Js",
        "placeholders": [{
          "type": "experience",
          "label": "7-11 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 5237988,
        "staticUrl": "dover-india-jobs-careers-5237988",
        "ambitionBoxData": {
          "Url": "https://www.ambitionbox.com/reviews/dover-india-reviews?utm_campaign=reco_ratings&utm_medium=desktop&utm_source=naukri",
          "ReviewsCount": 49,
          "AggregateRating": "3.8",
          "Title": "Dover India Reviews by Employees"
        },
        "jobDescription": "<br/><p><strong>Roles and Responsibilities</strong> </p><br/><ul><li> Experience in development of UI applications in AngularJS. Proficiency in NodeJS, Javascript and exposure to working with RESTAPIs.</li><li>Be a part of the initial team to define and setup a best in class Digital platform for the Enterprise The cloud UI developer will work with the engineering team and take full ownership of the specific components of the Digital Platform Work with the Scrum Master, Product Managers, multiple Engineering team members both from Devand QA and Devops, and anchor end to end development and ownership for the respective platform component.</li><li>Share/enhance insights and talent in a collaborative work environment Responsible for building quick prototypes using a variety of time series (sensor) data sets to demonstrate the viability of a concept .</li><li>Lead 1-3 engineers on the development of applications in the related area .</li><li>Should be self-motivated and adopt an collaborative approach to get things done. Should be able to troubleshoot, deploy and debug independently. Should possess excellent attention to detail </li><li>Write high quality, modular and reusable code </li></ul><br/><br/><p><strong>Desired Candidate Profile</strong> </p><ul><li> B.Tech with 7-11 years of experience or M.Tech with 5-9 years of industry experience with minimum of 4 years of experience in AngularJS.</li><li>4 yrs or more experience in developing AngularJS applications .</li><li>Proficient in NodeJS, JavaScript .</li><li>Experience in working with RESTAPIs .</li><li>Experience in working in Agile development methodology and JIRA/GIT tools </li></ul>",
        "showMultipleApply": true,
        "groupId": 4370428,
        "isTopGroup": 0,
        "createdDate": 1622452812902
      }, {
        "title": "Full Stack Web Developer - (.Net Core / C#)",
        "jobId": "290521000040",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "3 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Harris Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "C#,ASP.Net MVC,.NET Framework,IT Skills,Javascript,AWS,.Net,ASP.Net",
        "placeholders": [{
          "type": "experience",
          "label": "3-8 Yrs"
        }, {
          "type": "salary",
          "label": "15,00,000 - 25,00,000 PA."
        }, {
          "type": "location",
          "label": "Pune, Bangalore/Bengaluru, Delhi / NCR"
        }],
        "companyId": 2688108,
        "staticUrl": "talent-toppers-jobs-careers-2640754",
        "jobDescription": "<p><strong>Full Stack Developer  Web Platform</strong></p><p>The organization is a product firm having a leading Sales Execution SaaS platform used by over 1,00,000 users across 25 countries to grow their businesses. The organization differentiates itself by focusing on high-velocity sales processes and solving industry specific problems better than others. Education, Financial Services, Healthcare and Consumer Marketplaces are the key focus areas for the company.</p><p>Their goal is to build the worlds best software platform for sales execution. That is a significant challenge for engineering team to build a product that users and customers love. A fast-growing SaaS platform also brings challenges of scale, performance, security, and cost optimization.</p><p>They are working on an accelerated roadmap that involves building several new products, upgrading our technology infrastructure including migrating the entire platform to .NET core, eventually aligning with .NET 5.0 by end of 2021.</p><br/><p><strong>The Role</strong></p><ul><li>Web Platform is the primary way for users to access LeadSquared. It is built using HTML 5 / JavaScript, bootstrap, ASP.NET MVC / C# connecting to WCF/REST API, with MySQL / Redis / Elasticsearch on the backend and fully deployed on AWS.</li><li>We are looking for software engineers who are passionate about writing clean code, are strong on ASP.NET MVC and .NET framework in general, and have a clear understanding of building scalable web applications using .NET</li><li>The role involves understanding business requirements and designing an appropriate solution that is secure, scalable, high performing and testable. It is a hands-on role involving building software and taking ownership of delivery.</li></ul><br/><p><strong>Requirements:</strong></p><ul><li>Passion for building and delivering great software with a strong sense of ownership.</li><li>Minimum of 3 year-experience in building web applications using ASP.NET MVC and .NET platform in general.</li><li>Strong expertise in SQL programming, with experience of writing & optimizing queries that access/process millions of records.</li><li>Should have strong UI development skills using HTML, CSS/JavaScript frameworks.</li><li>Good understanding of IIS configuration.</li><li>Strong experience with Build and Release, Agile processes, and Estimation/Planning.</li><li>Exposure to New Relic or similar tools to optimize web application performance.</li></ul>",
        "showMultipleApply": true,
        "groupId": 2045788,
        "isTopGroup": 0,
        "createdDate": 1622229603037
      }, {
        "title": "Mobile Development Lead",
        "logoPath": "https://img.naukimg.com/logo_images/v3/5105902.gif",
        "logoPathV3": "https://img.naukimg.com/logo_images/v3/5105902.gif",
        "jobId": "250521900300",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "6 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Clark Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Java,UI/UX,Performance Testing,Mobile Apps,Android",
        "placeholders": [{
          "type": "experience",
          "label": "4-7 Yrs"
        }, {
          "type": "salary",
          "label": "15,00,000 - 25,00,000 PA."
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 5105902,
        "staticUrl": "bigshyft-jobs-careers-5105902",
        "jobDescription": "You have had strong UX / UI design exposure and experience in making native apps work intuitively and with pixel perfect interfaces <br><br>You have 3+ years solid experience managing and developing people,and leading significantly sized teams of engineers<br><br>You have significant experience as a successful software development leader in large scale and complex mobile applications",
        "showMultipleApply": true,
        "groupId": 4252054,
        "isTopGroup": 0,
        "createdDate": 1621913682000
      }, {
        "title": "Technical Lead - Javascript/Node.js",
        "logoPath": "https://img.naukimg.com/logo_images/v3/678662.gif",
        "logoPathV3": "https://img.naukimg.com/logo_images/v3/678662.gif",
        "jobId": "170321901974",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "6 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Lewis Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "AngularJS,Vue.js,Javascript,Node.js,MongoDB,React Native,React.js",
        "placeholders": [{
          "type": "experience",
          "label": "4-9 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Mumbai, Hyderabad/Secunderabad, Pune, Bangalore/Bengaluru, Delhi / NCR"
        }],
        "companyId": 678662,
        "staticUrl": "premium-jobs-jobs-careers-678662",
        "jobDescription": "Must have 4+ years of work experience as a React (Front-end),Node JS (Back-end) and MongoDB developer<br><br>Good to have working knowledge of NextJS,React Native,Angular,VueJS,Meteor JS",
        "showMultipleApply": true,
        "groupId": 415584,
        "isTopGroup": 0,
        "createdDate": 1621922741337
      }, {
        "title": "Unified IP Developer",
        "jobId": "310521902143",
        "jobType": "HOT JOB",
        "currency": "INR",
        "footerPlaceholderLabel": "1 Day Ago",
        "footerPlaceholderColor": "green",
        "companyName": "Robinson Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "SNMP,troubleshooting,SOAP,Kanban,Java,Web service Development,REST,Scrum",
        "placeholders": [{
          "type": "experience",
          "label": "6-8 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru"
        }],
        "companyId": 852658,
        "staticUrl": "premium-jobs-careers-852658",
        "jobDescription": "6 to 8 years of IT experience and min 2 years of banking domain background requirement<BR><BR> Aspect UIP Full Stack including M3 Script build/maintain/changes<BR><BR> Aspect Unified IP 7.3 Full Stack Developer<BR><BR> Experience with application / platform development<BR><BR> Experience in deploying, configuring and administering Aspect UIP 7.3 Full Stack. Experience in upgrading UIP from a prior version to 7.3 or 7.x very desirable.<BR><BR> Experience with M3 Scripting.<BR><BR> Experience with Windows, SQL DB required<BR><BR> Experience with Java, J2EE, REST and SOAP Web service Development Preferred<BR><BR> Experience integrating with GENESYS Platform for Aspect UIP perspective Preferred<BR><BR> Experience with configuring Blended Agent Environments.<BR><BR> Experience is configuring to configure AOD feeds.<BR><BR> Familiarity with SNMP, troubleshooting and testing UIP adjuncts and integrations<BR><BR> Experience working in Kanban/Scrum teams Preferred",
        "showMultipleApply": true,
        "groupId": 589890,
        "isTopGroup": 0,
        "createdDate": 1622446734205
      }, {
        "title": "Data Structure and Algorithm-Fullstack, 30-45 days joiners, Bangalore",
        "logoPath": "https://img.naukimg.com/logo_images/v3/659933.gif",
        "logoPathV3": "https://img.naukimg.com/logo_images/v3/659933.gif",
        "jobId": "250221002809",
        "jobType": "HOT JOB",
        "currency": "INR",
        "footerPlaceholderLabel": "1 Day Ago",
        "footerPlaceholderColor": "green",
        "companyName": "Walker Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Java,Angularjs,Algorithms,Web Technologies,OOPS,MySQL,PHP,Redis",
        "placeholders": [{
          "type": "experience",
          "label": "4-9 Yrs"
        }, {
          "type": "salary",
          "label": "15,00,000 - 30,00,000 PA."
        }, {
          "type": "location",
          "label": "Bangalore/Bengaluru(Koramangala)"
        }],
        "companyId": 659933,
        "staticUrl": "experis-it-jobs-careers-659933",
        "jobDescription": "<p> POSITION: SSE/ Sr. Full stack engineer - DSA</p><p>Preferred: PHP, Python, Ruby on Rails, Java, Scala</p><br/><p>Open to Technology</p><br/><p>Location: Bangalore</p><p> Experience: 2 to 10 Years</p><br/><p>What you'll do:</p><p>Design and develop software with high quality and take ownership. </p><p>Work collaboratively in an Agile team Participate in full development life cycle including planning and code reviews </p><p>Build applications that can easily scale to the demands of Livestream, OTT & Data analytics. Ensure the best technical design and approach with an aim for continuous improvement.</p><br/><p> Skills and Knowledge you should possess: </p><p>BTech / MTech in Computer science or equivalent degree. </p><p>Minimum 4+ years of web development experience with ReactJS And/OR AngularJS </p><p>Minimum 4 yrs of experience in any backend technologies like PHP/ Java/ Scala Database Experience (MySQL, Oracle, Redis, Memcache, etc) Hands-on with Design, Coding, Debugging and Testing Strong troubleshooting and problem-solving skills</p><p><strong>Very good in Algorithms, Data structures, and Time Complexities Good experience of OOPS and Design patterns.</strong></p><p>Willingness to learn and experiment with new technology.</p><p>Experience with cloud infrastructure is highly desirable. </p><br/><br/><p>Programming Language should not be constarint, candidate having hands on Experience in DSA is mandatory.<br/></p>",
        "showMultipleApply": true,
        "groupId": 400578,
        "isTopGroup": 0,
        "createdDate": 1622458966282
      }, {
        "title": "Java FullStack Engineers/Senior Engineers (AVP/VP)",
        "logoPath": "https://img.naukimg.com/logo_images/v3/135571.gif",
        "logoPathV3": "https://img.naukimg.com/logo_images/v3/135571.gif",
        "jobId": "040121000385",
        "jobType": "PREFERRED",
        "currency": "INR",
        "footerPlaceholderLabel": "1 Day Ago",
        "footerPlaceholderColor": "green",
        "companyName": "Perez Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Cloud Foundry,J2EE,algorithms,hibernate,data structures,Microservices,Angular 2 / 4 / 5,Web Services",
        "placeholders": [{
          "type": "experience",
          "label": "7-12 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Hyderabad/Secunderabad, Bangalore/Bengaluru"
        }],
        "companyId": 135571,
        "staticUrl": "wells-fargo-international-solutions-jobs-careers-135571",
        "ambitionBoxData": {
          "Url": "https://www.ambitionbox.com/reviews/wells-fargo-reviews?utm_campaign=reco_ratings&utm_medium=desktop&utm_source=naukri",
          "ReviewsCount": 1507,
          "AggregateRating": "4.1",
          "Title": "Wells Fargo India Reviews by Employees"
        },
        "jobDescription": "<p>  </p><p>Visionary engineers for designing and developing applications and system solutions. </p><p>Familiarity with a variety of designs, languages, and methodologies like J2EE,Microservices, Agile and Scrum </p><p>Competence and comfort using multiple frameworks hibernate, Angular 2/4/5, Spring Boot. Knowledge of Web Services, threading, algorithms and data structures. </p>",
        "showMultipleApply": true,
        "groupId": 5239022,
        "isTopGroup": 0,
        "createdDate": 1622460463655
      }, {
        "title": "Node.js Developer- JavaScript /Express.js/ React.js/ Angular",
        "jobId": "260521003016",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "5 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Hall Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "MEAN,*Web services,Express js,micro services,React js,MERN,JavaScript,API integration",
        "placeholders": [{
          "type": "experience",
          "label": "6-11 Yrs"
        }, {
          "type": "salary",
          "label": "18,00,000 - 30,00,000 PA."
        }, {
          "type": "location",
          "label": "Pune, Chennai, Bangalore/Bengaluru"
        }],
        "companyId": 4726448,
        "staticUrl": "selectica-international-solutions-jobs-careers-4726448",
        "jobDescription": "JavaScript, Node.js ,Express.js, Mongo DB, React.js OR Angular, MERN OR MEAN Full Stack Developer\n*Web services API integration \n*Cloud & micro services deployments \n*AWS",
        "showMultipleApply": true,
        "groupId": 5202136,
        "isTopGroup": 0,
        "createdDate": 1622018110302
      }, {
        "title": "Great opportunity For a Lead-Java - Wissen Technology",
        "logoPath": "https://img.naukimg.com/logo_images/v3/68527.gif",
        "logoPathV3": "https://img.naukimg.com/logo_images/v3/68527.gif",
        "jobId": "260521003085",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "5 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Young Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Data Structure Algorithm,J2EE,Hibernate,Spring,Core Java,Multithreading,IT Skills,Java",
        "placeholders": [{
          "type": "experience",
          "label": "7-11 Yrs"
        }, {
          "type": "salary",
          "label": "Not disclosed"
        }, {
          "type": "location",
          "label": "Mumbai, Pune, Gurgaon/Gurugram, Bangalore/Bengaluru"
        }],
        "companyId": 68527,
        "staticUrl": "wissen-infotech-jobs-careers-68527",
        "ambitionBoxData": {
          "Url": "https://www.ambitionbox.com/reviews/wissen-infotech-reviews?utm_campaign=reco_ratings&utm_medium=desktop&utm_source=naukri",
          "ReviewsCount": 109,
          "AggregateRating": "4.3",
          "Title": "Wissen Infotech Reviews by Employees"
        },
        "jobDescription": "Must have a experience in a lead role<br><br>Must have an experience of working projects in BFSI Domain<br><br>Preference to Service Notice Period or whose notice period is below 45 days<br><br>Relevant Skills Required - Core Java / J2EE,Spring,Hibernate,Multithreading,Data Structure Algorithm<br><br>Experience Range - 7-11 Years",
        "showMultipleApply": true,
        "groupId": 52424,
        "isTopGroup": 0,
        "createdDate": 1622018802274
      }, {
        "title": "JAVA Developer Lead/(Permanently Work From Home)",
        "jobId": "260521000563",
        "jobType": "PREMIUM",
        "currency": "INR",
        "footerPlaceholderLabel": "5 Days Ago",
        "footerPlaceholderColor": "grey",
        "companyName": "Allen Pvt ltd.",
        "isSaved": false,
        "tagsAndSkills": "Struts,Spring MVC,Microservices,Hibernate,Rest API,Java 8,IT Skills,Java",
        "placeholders": [{
          "type": "experience",
          "label": "5-10 Yrs"
        }, {
          "type": "salary",
          "label": "15,00,000 - 25,00,000 PA."
        }, {
          "type": "location",
          "label": "Kolkata, Hyderabad/Secunderabad, Pune, Ahmedabad, Chennai, Bangalore/Bengaluru"
        }],
        "companyId": 3497798,
        "staticUrl": "ekah-consulting-jobs-careers-3497798",
        "jobDescription": "Exp - 4.5 yrs to 10 yrs/Notice Period-Immediate Joiners.  Job Description : Experience in Java 8/Microservices/Spring MVC/Hibernate/Rest API/Struts",
        "showMultipleApply": true,
        "groupId": 2786186,
        "isTopGroup": 0,
        "createdDate": 1622003339889
      }];
      /***/
    },

    /***/
    1944:
    /*!***********************************************!*\
      !*** ./src/app/shared/pipes/safeHtml.pipe.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SafeHtml": function SafeHtml() {
          return (
            /* binding */
            _SafeHtml
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);

      var _SafeHtml = /*#__PURE__*/function () {
        function _SafeHtml(sanitizer) {
          _classCallCheck(this, _SafeHtml);

          this.sanitizer = sanitizer;
        }

        _createClass(_SafeHtml, [{
          key: "transform",
          value: function transform(html) {
            var styleSanitized = this.sanitizer.bypassSecurityTrustStyle(html);
            var htmlSanitized = this.sanitizer.bypassSecurityTrustHtml(html);
            return htmlSanitized;
          }
        }]);

        return _SafeHtml;
      }();

      _SafeHtml.ɵfac = function SafeHtml_Factory(t) {
        return new (t || _SafeHtml)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
      };

      _SafeHtml.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "safeHtml",
        type: _SafeHtml,
        pure: true
      });
      /***/
    },

    /***/
    6903:
    /*!*********************************************!*\
      !*** ./src/app/shared/pipes/search.pipe.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchPipe": function SearchPipe() {
          return (
            /* binding */
            _SearchPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/job.service */
      2975);

      var _SearchPipe = /*#__PURE__*/function () {
        function _SearchPipe(jobService) {
          _classCallCheck(this, _SearchPipe);

          this.jobService = jobService;
        }

        _createClass(_SearchPipe, [{
          key: "transform",
          value: function transform(data, keywordSearch, locationSearch, experienceSearch) {
            var _this = this;

            if (!data) return null;
            if (!keywordSearch && !locationSearch && !experienceSearch) return data; // if(!inputValue)return data;

            var filteredData = data;

            if (keywordSearch) {
              filteredData = filteredData.filter(function (item) {
                return JSON.stringify(item).toLowerCase().includes(keywordSearch.toLowerCase());
              });
            }

            if (locationSearch) {
              filteredData = filteredData.filter(function (item) {
                return JSON.stringify(item.placeholders[2].label).toLowerCase().includes(locationSearch.toLowerCase());
              });
            }

            if (experienceSearch) {
              filteredData = filteredData.filter(function (item) {
                return JSON.stringify(item.placeholders[0].label).toLowerCase().includes(experienceSearch.toLowerCase());
              });
            }

            if (filteredData && !filteredData.length) {
              setTimeout(function () {
                _this.jobService.commonEmitter.emit({
                  type: 'search',
                  value: false
                });
              });
            } else {
              this.jobService.commonEmitter.emit({
                type: 'search',
                value: true
              });
            }

            filteredData.sort(function (a, b) {
              var val1 = a['footerPlaceholderLabel'].split(' ')[0],
                  val2 = b['footerPlaceholderLabel'].split(' ')[0];
              return val1 - val2;
            });
            console.log(filteredData);
            return filteredData;
          }
        }]);

        return _SearchPipe;
      }();

      _SearchPipe.ɵfac = function SearchPipe_Factory(t) {
        return new (t || _SearchPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService, 16));
      };

      _SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "jobFilter",
        type: _SearchPipe,
        pure: true
      });
      /***/
    },

    /***/
    2975:
    /*!************************************************!*\
      !*** ./src/app/shared/services/job.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobService": function JobService() {
          return (
            /* binding */
            _JobService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _default_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../default-data */
      8760);

      var _JobService = /*#__PURE__*/function () {
        function _JobService() {
          _classCallCheck(this, _JobService);

          this.commonEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_JobService, [{
          key: "getJobs",
          value: function getJobs() {
            return Promise.resolve(_default_data__WEBPACK_IMPORTED_MODULE_0__.JOBS);
          }
        }]);

        return _JobService;
      }();

      _JobService.ɵfac = function JobService_Factory(t) {
        return new (t || _JobService)();
      };

      _JobService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _JobService,
        factory: _JobService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    326:
    /*!*******************************************************!*\
      !*** ./src/app/site/home-page/home-page.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageComponent": function HomePageComponent() {
          return (
            /* binding */
            _HomePageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _shared_services_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/services/job.service */
      2975);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../job-list/job-list.component */
      3231);

      function HomePageComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomePageComponent_div_49_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r1.locationSearch = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomePageComponent_div_49_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.experienceSearch = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.locationSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.experienceSearch);
        }
      }

      var _HomePageComponent = /*#__PURE__*/function () {
        function _HomePageComponent(jobService, changeDetector) {
          _classCallCheck(this, _HomePageComponent);

          this.jobService = jobService;
          this.changeDetector = changeDetector;
          this.jobs = [];
          this.filteredList = [];
          this.fullTimeJobs = false;
          this.partTimeJobs = false;
          this.freelancerJobs = false;
          this.allJobs = false;
          this.showNoMatch = false;
          this.showNoMatchOnChecked = false;
          this.showAdvancedFilter = false;
        }

        _createClass(_HomePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.changeDetector.detectChanges();
          }
        }, {
          key: "updateJobList",
          value: function updateJobList() {
            if (!this.fullTimeJobs && !this.allJobs && (this.partTimeJobs || this.freelancerJobs)) {
              this.showNoMatchOnChecked = true;
            } else this.showNoMatchOnChecked = false;
          }
        }]);

        return _HomePageComponent;
      }();

      _HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
        return new (t || _HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };

      _HomePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _HomePageComponent,
        selectors: [["home-page"]],
        decls: 51,
        vars: 11,
        consts: [["role", "banner", 1, "toolbar"], [1, "logo-text"], [1, "company-name"], [1, "header_links"], [1, "header-links-left"], [1, "links"], [1, "header-right"], [1, "right-links"], ["role", "main", 1, "content"], [1, "search_box"], [1, "simple-search-start"], [1, "keyword_search"], ["type", "search", "placeholder", "Search By Keyword", 3, "ngModel", "ngModelChange"], [1, "checkbox_group"], [1, "checkbox_list", 3, "change"], ["type", "checkbox", "id", "fulltime", 3, "ngModel", "ngModelChange"], ["for", "fulltime"], ["type", "checkbox", "id", "parttime", 3, "ngModel", "ngModelChange"], ["for", "parttime"], ["type", "checkbox", "id", "freelancer", 3, "ngModel", "ngModelChange"], ["for", "Freelancer"], ["type", "checkbox", "id", "all", 3, "ngModel", "ngModelChange"], ["for", "all"], [1, "advanced-search"], ["type", "checkbox", "id", "advanced_search", 3, "ngModel", "ngModelChange"], ["for", "advanced_search"], ["class", "advanced-search-display", 4, "ngIf"], [3, "keywordSearch", "locationSearch", "experienceSearch", "showNoMatchOnChecked"], [1, "advanced-search-display"], [1, "location_search"], ["type", "search", "placeholder", "Search By Location", 3, "ngModel", "ngModelChange"], ["type", "search", "placeholder", "Search By Experience", 3, "ngModel", "ngModelChange"]],
        template: function HomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Job Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "For Employees");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "For Applicants");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Submit Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.keywordSearch = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HomePageComponent_Template_ul_change_23_listener() {
              return ctx.updateJobList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.fullTimeJobs = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Full time");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.partTimeJobs = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Part time");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_35_listener($event) {
              return ctx.freelancerJobs = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Freelancer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_40_listener($event) {
              return ctx.allJobs = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomePageComponent_Template_input_ngModelChange_45_listener($event) {
              return ctx.showAdvancedFilter = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Advanced Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, HomePageComponent_div_49_Template, 5, 2, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "job-list", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.keywordSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.fullTimeJobs);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.partTimeJobs);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.freelancerJobs);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.allJobs);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.showAdvancedFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAdvancedFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("keywordSearch", ctx.keywordSearch)("locationSearch", ctx.locationSearch)("experienceSearch", ctx.experienceSearch)("showNoMatchOnChecked", ctx.showNoMatchOnChecked);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_1__.JobListComponent],
        styles: [".toolbar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  \r\n  display: flex;\r\n  align-items: center;\r\n  \r\n  color: black;\r\n  font-weight: 600;\r\n  position: relative;\r\n}\r\n\r\n.logo-text[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 200px;\r\n}\r\n\r\n.company-name[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  margin: 20px;\r\n  padding: 10px;\r\n  border: 1px solid black\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  \r\n  \r\n  width: 100%;\r\n  flex-direction: column;\r\n  \r\n}\r\n\r\n.header_links[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.header-links-left[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  padding: 0px;\r\n}\r\n\r\n.header-right[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  float: right;\r\n  padding: 0px;\r\n  margin-right: 40px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.right-links[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.search_box[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  \r\n  min-height: 100px;\r\n  border: 1px solid black;\r\n  \r\n}\r\n\r\n.simple-search-start[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  min-height: 50px;\r\n  align-items: center;\r\n}\r\n\r\n.keyword_search[_ngcontent-%COMP%] {\r\n  margin: 30px;\r\n}\r\n\r\n.advanced-search[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\r\n\r\n.advanced-search-display[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  margin: 10px;\r\n  align-items: center;\r\n  min-height: 50px;\r\n}\r\n\r\n.location_search[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\n\r\n.checkbox_group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.checkbox_list[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  list-style: none;\r\n}\r\n\r\n.job_list_outer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  border: 1px solid black;\r\n  \r\n}\r\n\r\n.job_list_inner[_ngcontent-%COMP%] {\r\n  \r\n  height: auto;\r\n  min-height: 100px;\r\n  margin: 32px;\r\n  border: 1px solid black;\r\n  \r\n}\r\n\r\n.no_jobs[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  min-height: 100px;\r\n  margin: 32px;\r\n  border: 1px solid black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.job_content[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 10px;\r\n  max-width: 70%;\r\n}\r\n\r\n.job_title[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.job_description[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  \r\n}\r\n\r\n.job_description[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n\r\n.job_description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n}\r\n\r\n.job-content-right[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  float: right;\r\n  margin-right:50px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.company_logo[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.job_apply[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.job_title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  .logo-text[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    float: left;\r\n  }\r\n  .toolbar[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;\r\n  }\r\n  .header-links-left[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n  }\r\n  .header-right[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-top: 0px;\r\n  }\r\n  .checkbox_list[_ngcontent-%COMP%] {\r\n    float: left;\r\n    display: block;\r\n  }\r\n  .job-content-right[_ngcontent-%COMP%] {\r\n    display: contents;\r\n  }\r\n\r\n  .company_logo[_ngcontent-%COMP%]{\r\n    margin: 30px;\r\n  }\r\n  .job_apply[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;   \r\n    margin: 30px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 575px) {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1o7O21DQUVpQztFQUNqQyxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztFQUNoQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsWUFBWTtFQUNkOztBQUVGOztBQUVBLHNDQUFzQyIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLyogbWFyZ2luOiAtOHB4OyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyOyAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxvZ28tdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmNvbXBhbnktbmFtZSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFja1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBtYXJnaW46IDMycHggYXV0bzsgKi9cclxuICAvKiBwYWRkaW5nOiAwIDE2cHg7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcblxyXG4uaGVhZGVyX2xpbmtzIHtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXItbGlua3MtbGVmdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmhlYWRlci1yaWdodCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4ubGlua3Mge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yaWdodC1saW5rcyB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaF9ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXHJcbn1cclxuXHJcbi5zaW1wbGUtc2VhcmNoLXN0YXJ0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmtleXdvcmRfc2VhcmNoIHtcclxuICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi5hZHZhbmNlZC1zZWFyY2gge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uYWR2YW5jZWQtc2VhcmNoLWRpc3BsYXkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5sb2NhdGlvbl9zZWFyY2gge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmNoZWNrYm94X2dyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5jaGVja2JveF9saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmpvYl9saXN0X291dGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgLyogYm9yZGVyLXJhZGl1czogMjBweDsgKi9cclxufVxyXG5cclxuLmpvYl9saXN0X2lubmVyIHtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiAzMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXHJcbn1cclxuXHJcbi5ub19qb2JzIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiAzMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmpvYl9jb250ZW50IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmpvYl90aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uam9iX2Rlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxufVxyXG5cclxuLmpvYl9kZXNjcmlwdGlvbiBoNCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uam9iX2Rlc2NyaXB0aW9uIHAge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uam9iLWNvbnRlbnQtcmlnaHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OjUwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmNvbXBhbnlfbG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uam9iX2FwcGx5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uam9iX3RpdGxlIGg0IHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmxvZ28tdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIC50b29sYmFyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLmhlYWRlci1saW5rcy1sZWZ0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgLmhlYWRlci1yaWdodCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgLmNoZWNrYm94X2xpc3Qge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmpvYi1jb250ZW50LXJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gIH1cclxuXHJcbiAgLmNvbXBhbnlfbG9nb3tcclxuICAgIG1hcmdpbjogMzBweDtcclxuICB9XHJcbiAgLmpvYl9hcHBseSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICAgXHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgfVxyXG5cclxufSBcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7fSJdfQ== */"]
      });
      /***/
    },

    /***/
    121:
    /*!****************************************************!*\
      !*** ./src/app/site/home-page/home-page.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home-page.component */
      326);
      /* harmony import */


      var _shared_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/pipes/safeHtml.pipe */
      1944);
      /* harmony import */


      var src_app_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/pipes/search.pipe */
      6903);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../job-list/job-list.component */
      3231);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _HomePageModule = function _HomePageModule() {
        _classCallCheck(this, _HomePageModule);
      };

      _HomePageModule.ɵfac = function HomePageModule_Factory(t) {
        return new (t || _HomePageModule)();
      };

      _HomePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _HomePageModule
      });
      _HomePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_HomePageModule, {
          declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent, _shared_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_1__.SafeHtml, src_app_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__.SearchPipe, _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_3__.JobListComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule],
          exports: [_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent]
        });
      })();
      /***/

    },

    /***/
    3231:
    /*!*****************************************************!*\
      !*** ./src/app/site/job-list/job-list.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JobListComponent": function JobListComponent() {
          return (
            /* binding */
            _JobListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var src_app_shared_services_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/job.service */
      2975);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var src_app_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/pipes/search.pipe */
      6903);
      /* harmony import */


      var _shared_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/pipes/safeHtml.pipe */
      1944);

      function JobListComponent_ng_container_1_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Job Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "safeHtml");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Number of experience required");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var job_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r3.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 4, job_r3.jobDescription), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r3.placeholders[2].label);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](job_r3.placeholders[0].label);
        }
      }

      function JobListComponent_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, JobListComponent_ng_container_1_div_1_div_1_Template, 21, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Apply ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var job_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.showNoMatch);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", job_r3.logoPath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      function JobListComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, JobListComponent_ng_container_1_div_1_Template, 8, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "jobFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](2, 1, ctx_r0.jobs, ctx_r0.keywordSearch, ctx_r0.locationSearch, ctx_r0.experienceSearch));
        }
      }

      function JobListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No Match Found");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _JobListComponent = /*#__PURE__*/function () {
        function _JobListComponent(jobService) {
          var _this2 = this;

          _classCallCheck(this, _JobListComponent);

          this.jobService = jobService;
          this.jobs = [];
          this.showNoMatch = false;
          this.jobService.commonEmitter.subscribe(function (data) {
            if (data.type === 'search' && !data.value) {
              _this2.showNoMatch = true;
            }

            if (data.type === 'search' && data.value) {
              _this2.showNoMatch = false;
            }
          });
        }

        _createClass(_JobListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.jobService.getJobs().then(function (jobs) {
              _this3.jobs = jobs;
              console.log(_this3.jobs);
            });
          }
        }]);

        return _JobListComponent;
      }();

      _JobListComponent.ɵfac = function JobListComponent_Factory(t) {
        return new (t || _JobListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService));
      };

      _JobListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _JobListComponent,
        selectors: [["job-list"]],
        inputs: {
          keywordSearch: "keywordSearch",
          locationSearch: "locationSearch",
          experienceSearch: "experienceSearch",
          showNoMatchOnChecked: "showNoMatchOnChecked"
        },
        decls: 3,
        vars: 2,
        consts: [[1, "job_list_outer"], [4, "ngIf"], ["class", "no_jobs", 4, "ngIf"], ["class", "job_list_inner", 4, "ngFor", "ngForOf"], [1, "job_list_inner"], ["class", "job_content", 4, "ngIf"], [1, "job-content-right"], [1, "company_logo"], ["alt", "'Company Logo'", 3, "src"], [1, "job_apply"], [1, "apply_button"], [1, "job_content"], [1, "job_title"], [1, "job_description"], [3, "innerHTML"], [1, "no_jobs"]],
        template: function JobListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, JobListComponent_ng_container_1_Template, 3, 6, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, JobListComponent_div_2_Template, 3, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showNoMatchOnChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showNoMatch || ctx.showNoMatchOnChecked);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        pipes: [src_app_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe, _shared_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtml],
        styles: [".toolbar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  \r\n  display: flex;\r\n  align-items: center;\r\n  \r\n  color: black;\r\n  font-weight: 600;\r\n  position: relative;\r\n}\r\n\r\n.logo-text[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 200px;\r\n}\r\n\r\n.company-name[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  margin: 20px;\r\n  padding: 10px;\r\n  border: 1px solid black\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  \r\n  \r\n  width: 100%;\r\n  flex-direction: column;\r\n  \r\n}\r\n\r\n.header_links[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.header-links-left[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  padding: 0px;\r\n}\r\n\r\n.header-right[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  float: right;\r\n  padding: 0px;\r\n  margin-right: 40px;\r\n}\r\n\r\n.links[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.right-links[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.search_box[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  \r\n  min-height: 100px;\r\n  border: 1px solid black;\r\n  \r\n}\r\n\r\n.simple-search-start[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  min-height: 50px;\r\n  align-items: center;\r\n}\r\n\r\n.keyword_search[_ngcontent-%COMP%] {\r\n  margin: 30px;\r\n}\r\n\r\n.advanced-search[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\r\n\r\n.advanced-search-display[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  margin: 10px;\r\n  align-items: center;\r\n  min-height: 50px;\r\n}\r\n\r\n.location_search[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\n\r\n.checkbox_group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.checkbox_list[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  list-style: none;\r\n}\r\n\r\n.job_list_outer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  border: 1px solid black;\r\n  \r\n}\r\n\r\n.job_list_inner[_ngcontent-%COMP%] {\r\n  \r\n  height: auto;\r\n  min-height: 100px;\r\n  margin: 32px;\r\n  border: 1px solid black;\r\n  \r\n}\r\n\r\n.no_jobs[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  min-height: 100px;\r\n  margin: 32px;\r\n  border: 1px solid black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.job_content[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 10px;\r\n  max-width: 70%;\r\n}\r\n\r\n.job_title[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.job_description[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  \r\n}\r\n\r\n.job_description[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n\r\n.job_description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n}\r\n\r\n.job-content-right[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  float: right;\r\n  margin-right:50px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.company_logo[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.job_apply[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.job_title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  .logo-text[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    float: left;\r\n  }\r\n  .toolbar[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;\r\n  }\r\n  .header-links-left[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n  }\r\n  .header-right[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-top: 0px;\r\n  }\r\n  .checkbox_list[_ngcontent-%COMP%] {\r\n    float: left;\r\n    display: block;\r\n  }\r\n  .job-content-right[_ngcontent-%COMP%] {\r\n    display: contents;\r\n  }\r\n\r\n  .company_logo[_ngcontent-%COMP%]{\r\n    margin: 30px;\r\n  }\r\n  .job_apply[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;   \r\n    margin: 30px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 575px) {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1o7O21DQUVpQztFQUNqQyxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztFQUNoQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsWUFBWTtFQUNkOztBQUVGOztBQUVBLHNDQUFzQyIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLyogbWFyZ2luOiAtOHB4OyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyOyAqL1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxvZ28tdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmNvbXBhbnktbmFtZSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFja1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBtYXJnaW46IDMycHggYXV0bzsgKi9cclxuICAvKiBwYWRkaW5nOiAwIDE2cHg7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcblxyXG4uaGVhZGVyX2xpbmtzIHtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXItbGlua3MtbGVmdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmhlYWRlci1yaWdodCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4ubGlua3Mge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yaWdodC1saW5rcyB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaF9ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXHJcbn1cclxuXHJcbi5zaW1wbGUtc2VhcmNoLXN0YXJ0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmtleXdvcmRfc2VhcmNoIHtcclxuICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi5hZHZhbmNlZC1zZWFyY2gge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uYWR2YW5jZWQtc2VhcmNoLWRpc3BsYXkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5sb2NhdGlvbl9zZWFyY2gge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmNoZWNrYm94X2dyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5jaGVja2JveF9saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmpvYl9saXN0X291dGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgLyogYm9yZGVyLXJhZGl1czogMjBweDsgKi9cclxufVxyXG5cclxuLmpvYl9saXN0X2lubmVyIHtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiAzMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXHJcbn1cclxuXHJcbi5ub19qb2JzIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiAzMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmpvYl9jb250ZW50IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmpvYl90aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uam9iX2Rlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxufVxyXG5cclxuLmpvYl9kZXNjcmlwdGlvbiBoNCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uam9iX2Rlc2NyaXB0aW9uIHAge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uam9iLWNvbnRlbnQtcmlnaHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OjUwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmNvbXBhbnlfbG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uam9iX2FwcGx5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uam9iX3RpdGxlIGg0IHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmxvZ28tdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIC50b29sYmFyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLmhlYWRlci1saW5rcy1sZWZ0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgLmhlYWRlci1yaWdodCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgLmNoZWNrYm94X2xpc3Qge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmpvYi1jb250ZW50LXJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gIH1cclxuXHJcbiAgLmNvbXBhbnlfbG9nb3tcclxuICAgIG1hcmdpbjogMzBweDtcclxuICB9XHJcbiAgLmpvYl9hcHBseSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICAgXHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgfVxyXG5cclxufSBcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7fSJdfQ== */"]
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map