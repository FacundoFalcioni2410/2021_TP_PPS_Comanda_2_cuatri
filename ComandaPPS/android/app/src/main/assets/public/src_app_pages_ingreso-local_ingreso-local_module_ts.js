(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_ingreso-local_ingreso-local_module_ts"],{

/***/ 47937:
/*!*********************************************************************!*\
  !*** ./src/app/pages/ingreso-local/ingreso-local-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoLocalPageRoutingModule": () => (/* binding */ IngresoLocalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ingreso_local_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso-local.page */ 19975);




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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ingreso_local_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso-local-routing.module */ 47937);
/* harmony import */ var _ingreso_local_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingreso-local.page */ 19975);







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

/***/ 19975:
/*!***********************************************************!*\
  !*** ./src/app/pages/ingreso-local/ingreso-local.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoLocalPage": () => (/* binding */ IngresoLocalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ingreso_local_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ingreso-local.page.html */ 24210);
/* harmony import */ var _ingreso_local_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingreso-local.page.scss */ 73291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_qr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/qr.service */ 52724);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);








let IngresoLocalPage = class IngresoLocalPage {
    constructor(qrS, userService, route) {
        this.qrS = qrS;
        this.userService = userService;
        this.route = route;
        this.listaEspera = false;
        this.userService.getUser().subscribe((res) => {
            this.usuario = res;
        });
    }
    ngOnInit() {
    }
    EntrarEnListaEspera() {
        var _a;
        this.listaEspera = true;
        this.userService.usuarioActual.listaEspera = true;
        this.userService.updateListaEsperaCliente((_a = this.userService.usuarioActual) === null || _a === void 0 ? void 0 : _a.id, true);
    }
    Scan() {
        if (!this.usuario.listaEspera && !this.usuario.mesaAsignada) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: 'Escaneo',
                backdrop: false,
                text: 'Escanee el código QR para ingresar a la lista',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                showCancelButton: true,
                confirmButtonText: 'Escanear',
                cancelButtonText: 'Cancelar',
                reverseButtons: true,
            }).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (result.isConfirmed) {
                    let datos = yield this.qrS.scan();
                    if (datos.text) {
                        if (datos.text == "ingresoListaDeEspera") {
                            this.EntrarEnListaEspera();
                        }
                    }
                }
            }));
        }
        else { //CASO EN EL QUE EL CLIENTE YA HAYA SIDO ACEPTADO EN LA LISTA Y TIENE MESA ASIGNADA
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: 'Escaneo',
                backdrop: false,
                text: `Escanee el código QR de la mesa que se le asignó ${this.usuario.mesaAsignada}.`,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                showCancelButton: true,
                confirmButtonText: 'Escanear',
                cancelButtonText: 'Cancelar',
                reverseButtons: true,
            }).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log('then');
                if (result.isConfirmed) {
                    let datos = yield this.qrS.scan();
                    console.log(datos);
                    if (datos.text) {
                        console.log(datos.text);
                        if (datos.text == this.usuario.mesaAsignada) {
                            this.route.navigateByUrl('/realizar-pedido');
                        }
                    }
                }
            }));
        }
    }
};
IngresoLocalPage.ctorParameters = () => [
    { type: src_app_services_qr_service__WEBPACK_IMPORTED_MODULE_3__.QRService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
IngresoLocalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-ingreso-local',
        template: _raw_loader_ingreso_local_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ingreso_local_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IngresoLocalPage);



/***/ }),

/***/ 73291:
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

/***/ 24210:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ingreso-local/ingreso-local.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button>\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Ingreso al local</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container mt-3 bg-dark\">\r\n    <div class=\"row flex-lg-row-reverse align-items-center justify-content-center g-5\">\r\n      <div class=\"col-12 col-sm-8 col-lg-6 align-items-center justify-content-center\">\r\n        <img src=\"../../../assets/puerta.png\" class=\"d-block mt-5 mx-lg-auto img-fluid\" alt=\"Bootstrap Themes\" width=\"700\" height=\"500\" loading=\"lazy\">\r\n      </div>\r\n      <div class=\"col-lg-6 text-center\">\r\n        <h1 class=\"display-5 fw-bold lh-1 mb-3\">Bienvenido a Churrasic Park</h1>\r\n        <p *ngIf=\"!this.usuario?.listaEspera\" class=\"lead\">Por favor, ingrese a la lista de espera y espere a que un metre le asigne una mesa.</p>\r\n        <i *ngIf=\"!this.usuario?.listaEspera\" class=\"fas fa-qrcode pt-3 ps-2\" (click)=\"Scan()\" style=\"font-size: 32px;\"></i>\r\n        <div *ngIf=\"this.usuario?.listaEspera && !this.usuario.mesaAsignada\" class=\"d-grid gap-2 d-md-flex justify-content-md-start\">\r\n          <label>Entraste a la lista de espera! Esperá a que un empleado te asigne una mesa.</label>\r\n        </div>\r\n        <div *ngIf=\"this.usuario?.mesaAsignada\" class=\"d-grid gap-2 d-md-flex justify-content-md-start\">\r\n          <label>Ya tenes una mesa asignada ({{this.usuario?.mesaAsignada}}), scanea el QR de tu mesa</label>\r\n          <i class=\"fas fa-qrcode pt-3 ps-2 mb-5\" (click)=\"Scan()\" style=\"font-size: 32px;\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ingreso-local_ingreso-local_module_ts.js.map