(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_ingreso-local_ingreso-local_module_ts"],{

/***/ 7937:
/*!*********************************************************************!*\
  !*** ./src/app/pages/ingreso-local/ingreso-local-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoLocalPageRoutingModule": () => (/* binding */ IngresoLocalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ingreso_local_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso-local.page */ 9975);




const routes = [
    {
        path: '',
        component: _ingreso_local_page__WEBPACK_IMPORTED_MODULE_0__.IngresoLocalPage
    }
];
let IngresoLocalPageRoutingModule = class IngresoLocalPageRoutingModule {
};
IngresoLocalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IngresoLocalPageRoutingModule);



/***/ }),

/***/ 9916:
/*!*************************************************************!*\
  !*** ./src/app/pages/ingreso-local/ingreso-local.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoLocalPageModule": () => (/* binding */ IngresoLocalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ingreso_local_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso-local-routing.module */ 7937);
/* harmony import */ var _ingreso_local_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingreso-local.page */ 9975);







let IngresoLocalPageModule = class IngresoLocalPageModule {
};
IngresoLocalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ingreso_local_routing_module__WEBPACK_IMPORTED_MODULE_0__.IngresoLocalPageRoutingModule
        ],
        declarations: [_ingreso_local_page__WEBPACK_IMPORTED_MODULE_1__.IngresoLocalPage]
    })
], IngresoLocalPageModule);



/***/ }),

/***/ 9975:
/*!***********************************************************!*\
  !*** ./src/app/pages/ingreso-local/ingreso-local.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoLocalPage": () => (/* binding */ IngresoLocalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ingreso_local_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ingreso-local.page.html */ 4210);
/* harmony import */ var _ingreso_local_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingreso-local.page.scss */ 3291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let IngresoLocalPage = class IngresoLocalPage {
    constructor() {
        this.listaEspera = false;
    }
    ngOnInit() {
    }
    EntrarEnListaEspera() {
        this.listaEspera = true;
    }
};
IngresoLocalPage.ctorParameters = () => [];
IngresoLocalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ingreso-local',
        template: _raw_loader_ingreso_local_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ingreso_local_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IngresoLocalPage);



/***/ }),

/***/ 3291:
/*!*************************************************************!*\
  !*** ./src/app/pages/ingreso-local/ingreso-local.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmdyZXNvLWxvY2FsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 4210:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ingreso-local/ingreso-local.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button>\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Ingreso al local</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container col-xxl-8 mt-3 px-4 bg-dark\">\r\n    <div class=\"row flex-lg-row-reverse align-items-center g-5\">\r\n      <div class=\"col-12 col-sm-8 col-lg-6\">\r\n        <img src=\"../../../assets/puerta.png\" class=\"d-block mx-lg-auto img-fluid\" alt=\"Bootstrap Themes\" width=\"700\" height=\"500\" loading=\"lazy\">\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <h1 class=\"display-5 fw-bold lh-1 mb-3\">Bienvenido a NOMBRE RESTAURANTE</h1>\r\n        <p class=\"lead\">Por favor, ingrese a la lista de espera y espere a que un metre le asigne una mesa.</p>\r\n        <div class=\"d-grid gap-2 d-md-flex justify-content-md-start\">\r\n          <button *ngIf=\"!listaEspera\" (click)=\"EntrarEnListaEspera()\" type=\"button\" class=\"btn btn-primary btn-lg px-4 me-md-2\">Entrar a la lista de espera</button>\r\n          <label *ngIf=\"listaEspera\" class=\"btn btn-primary btn-lg px-4 me-md-2\"  [class.button-disabled]=\"true\">Entraste a la lista de espera!</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ingreso-local_ingreso-local_module_ts.js.map