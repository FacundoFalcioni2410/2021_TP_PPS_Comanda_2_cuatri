(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_splash_splash_module_ts"],{

/***/ 24135:
/*!***********************************************************************!*\
  !*** ./node_modules/@capacitor/splash-screen/dist/esm/definitions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 88592:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/splash-screen/dist/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreen": () => (/* binding */ SplashScreen)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 24135);

const SplashScreen = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('SplashScreen', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_splash-screen_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 78962)).then(m => new m.SplashScreenWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1148:
/*!*******************************************************!*\
  !*** ./src/app/pages/splash/splash-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageRoutingModule": () => (/* binding */ SplashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash.page */ 19137);




const routes = [
    {
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_0__.SplashPage
    }
];
let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SplashPageRoutingModule);



/***/ }),

/***/ 71203:
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageModule": () => (/* binding */ SplashPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash-routing.module */ 1148);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page */ 19137);







let SplashPageModule = class SplashPageModule {
};
SplashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashPageRoutingModule
        ],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_1__.SplashPage]
    })
], SplashPageModule);



/***/ }),

/***/ 19137:
/*!*********************************************!*\
  !*** ./src/app/pages/splash/splash.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPage": () => (/* binding */ SplashPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./splash.page.html */ 9666);
/* harmony import */ var _splash_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash.page.scss */ 19572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/splash-screen */ 88592);






let SplashPage = class SplashPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__.SplashScreen.hide();
        setTimeout(() => {
            this.router.navigate(['/home']);
        }, 2000);
    }
};
SplashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SplashPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-splash',
        template: _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_splash_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SplashPage);



/***/ }),

/***/ 19572:
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".div {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #2D73CE;\n}\n\n.nombre1 {\n  position: absolute;\n  z-index: 999;\n  top: 120px;\n}\n\n.nombre {\n  position: absolute;\n  z-index: 999;\n  top: 80px;\n}\n\n.division {\n  position: absolute;\n  z-index: 999;\n  bottom: 150px;\n}\n\n* {\n  font-family: Trebuchet MS, Lucida Sans, Tahoma, sans-serif;\n  font-size: 32px;\n}\n\n.wobble-hor-bottom {\n  animation: wobble-hor-bottom 1.8s both;\n}\n\n@keyframes wobble-hor-bottom {\n  0%, 100% {\n    transform: translateX(0);\n    transform-origin: 50% 50%;\n  }\n  15% {\n    transform: translateX(-30px) rotate(-6deg);\n  }\n  30% {\n    transform: translateX(15px) rotate(6deg);\n  }\n  45% {\n    transform: translateX(-15px) rotate(-3.6deg);\n  }\n  60% {\n    transform: translateX(9px) rotate(2.4deg);\n  }\n  75% {\n    transform: translateX(-6px) rotate(-1.2deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFBa0IsTUFBQTtFQUFNLFFBQUE7RUFBUSxPQUFBO0VBQU8sU0FBQTtFQUN2Qyx5QkFBQTtBQUtKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUtKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUtKOztBQUZBO0VBQ0ksMERBQUE7RUFDQSxlQUFBO0FBS0o7O0FBREE7RUFBaUUsc0NBQUE7QUFNakU7O0FBSGdvQjtFQUE2QjtJQUF3Qyx3QkFBQTtJQUF5RCx5QkFBQTtFQXVDNXZCO0VBdkNxeEI7SUFBc0QsMENBQUE7RUEyQzMwQjtFQTNDcTNCO0lBQW9ELHdDQUFBO0VBK0N6NkI7RUEvQ2k5QjtJQUF3RCw0Q0FBQTtFQW1EemdDO0VBbkRxakM7SUFBcUQseUNBQUE7RUF1RDFtQztFQXZEbXBDO0lBQXVELDJDQUFBO0VBMkQxc0M7QUFDRiIsImZpbGUiOiJzcGxhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bGVmdDowO2JvdHRvbTowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMkQ3M0NFO1xyXG59XHJcblxyXG4ubm9tYnJlMXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRvcDogMTIwcHg7XHJcbn1cclxuXHJcbi5ub21icmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0b3A6IDgwcHg7XHJcbn1cclxuXHJcbi5kaXZpc2lvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJvdHRvbTogMTUwcHg7XHJcbn1cclxuXHJcbiogeyBcclxuICAgIGZvbnQtZmFtaWx5OiBUcmVidWNoZXQgTVMsTHVjaWRhIFNhbnMsVGFob21hLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcblxyXG4ud29iYmxlLWhvci1ib3R0b217LXdlYmtpdC1hbmltYXRpb246d29iYmxlLWhvci1ib3R0b20gMS44cyBib3RoO2FuaW1hdGlvbjp3b2JibGUtaG9yLWJvdHRvbSAxLjhzIGJvdGh9XHJcblxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHdvYmJsZS1ob3ItYm90dG9tezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCV9MTUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTMwcHgpIHJvdGF0ZSgtNmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTMwcHgpIHJvdGF0ZSgtNmRlZyl9MzAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTVweCkgcm90YXRlKDZkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSg2ZGVnKX00NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTVweCkgcm90YXRlKC0zLjZkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xNXB4KSByb3RhdGUoLTMuNmRlZyl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoOXB4KSByb3RhdGUoMi40ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCg5cHgpIHJvdGF0ZSgyLjRkZWcpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZSgtMS4yZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNnB4KSByb3RhdGUoLTEuMmRlZyl9fUBrZXlmcmFtZXMgd29iYmxlLWhvci1ib3R0b217MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJX0xNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMzBweCkgcm90YXRlKC02ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMzBweCkgcm90YXRlKC02ZGVnKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgxNXB4KSByb3RhdGUoNmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTVweCkgcm90YXRlKDZkZWcpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xNXB4KSByb3RhdGUoLTMuNmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTE1cHgpIHJvdGF0ZSgtMy42ZGVnKX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCg5cHgpIHJvdGF0ZSgyLjRkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDlweCkgcm90YXRlKDIuNGRlZyl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTZweCkgcm90YXRlKC0xLjJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZSgtMS4yZGVnKX19Il19 */");

/***/ }),

/***/ 9666:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/splash/splash.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class='div'>\r\n    <h3 class=\"nombre1 text-dark\">Agustin Gaitan</h3>\r\n    <h3 class=\"nombre text-dark\">Facundo Falcioni</h3>\r\n    <img src=\"./assets/icon.png\" alt=\"\" height=\"300\" width=\"300\" style=\"display:block;margin:auto;\" class='wobble-hor-bottom'>\r\n    <h3 class=\"division text-dark\">4 A</h3>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_splash_splash_module_ts.js.map