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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ingreso_local_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ingreso-local.page.html */ 24210);
/* harmony import */ var _ingreso_local_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingreso-local.page.scss */ 73291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 94333);
/* harmony import */ var src_app_services_audio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/audio.service */ 16425);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_qr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/qr.service */ 52724);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);










let IngresoLocalPage = class IngresoLocalPage {
    constructor(qrS, userService, route, vibration, audio) {
        this.qrS = qrS;
        this.userService = userService;
        this.route = route;
        this.vibration = vibration;
        this.audio = audio;
        this.listaEspera = false;
        this.userService.TraerGenerico('clientes', 'uid', this.userService.usuarioActual.uid).subscribe(res => {
            this.usuario = res[0];
            this.userService.usuarioActual = res[0];
        });
    }
    ngOnInit() {
    }
    EntrarEnListaEspera() {
        var _a;
        this.listaEspera = true;
        this.usuario.listaEspera = true;
        this.userService.updateListaEsperaCliente((_a = this.usuario) === null || _a === void 0 ? void 0 : _a.id, true);
    }
    Scan() {
        if (!this.usuario.listaEspera && this.usuario.mesaAsignada !== 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
            }).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (result.isConfirmed) {
                    let datos = yield this.qrS.scan();
                    if (datos.text) {
                        if (datos.text == "ingresoListaDeEspera") {
                            this.EntrarEnListaEspera();
                        }
                        else {
                            this.vibration.vibrate(2000);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                                title: "Error",
                                icon: 'error',
                                text: 'Escanee el codigo correcto.',
                                timer: 4000,
                                timerProgressBar: true,
                                backdrop: false,
                            });
                        }
                    }
                }
            }));
        }
        else if (this.usuario.listaEspera && this.usuario.mesaAsignada != 0) { //CASO EN EL QUE EL CLIENTE YA HAYA SIDO ACEPTADO EN LA LISTA Y TIENE MESA ASIGNADA
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
            }).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (result.isConfirmed) {
                    let datos = yield this.qrS.scan();
                    if (datos.text) {
                        if (datos.text == this.usuario.mesaAsignada) {
                            this.audio.PlayAudio();
                            this.route.navigateByUrl('/realizar-pedido');
                        }
                        else {
                            this.vibration.vibrate(2000);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                                title: "Error",
                                icon: 'error',
                                text: 'No se le asignó esa mesa.',
                                timer: 4000,
                                timerProgressBar: true,
                                backdrop: false,
                            });
                        }
                    }
                }
            }));
        }
        else if (!this.usuario.listaEspera && this.usuario.mesaAsignada == 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                title: 'Escaneo',
                backdrop: false,
                text: `Escanee el código QR de ingreso a la lista de espera para ver los gráficos.`,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                showCancelButton: true,
                confirmButtonText: 'Escanear',
                cancelButtonText: 'Cancelar',
                reverseButtons: true,
            }).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (result.isConfirmed) {
                    let datos = yield this.qrS.scan();
                    if (datos.text) {
                        if (datos.text == "ingresoListaDeEspera") {
                            this.audio.PlayAudio();
                            this.route.navigateByUrl('/grafico-cliente');
                        }
                        else {
                            this.vibration.vibrate(2000);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                                title: "Error",
                                icon: 'error',
                                text: 'No se le asignó esa mesa.',
                                timer: 4000,
                                timerProgressBar: true,
                                backdrop: false,
                            });
                        }
                    }
                }
            }));
        }
    }
};
IngresoLocalPage.ctorParameters = () => [
    { type: src_app_services_qr_service__WEBPACK_IMPORTED_MODULE_5__.QRService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration },
    { type: src_app_services_audio_service__WEBPACK_IMPORTED_MODULE_3__.AudioService }
];
IngresoLocalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-ingreso-local',
        template: _raw_loader_ingreso_local_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ingreso_local_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IngresoLocalPage);



/***/ }),

/***/ 52724:
/*!****************************************!*\
  !*** ./src/app/services/qr.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRService": () => (/* binding */ QRService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 92760);



let QRService = class QRService {
    constructor(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
    }
    scan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.barcodeScanner.scan({ showTorchButton: true, formats: 'QR_CODE,PDF_417', resultDisplayDuration: 0 });
        });
    }
    scanDNI() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let scannedData = yield this.barcodeScanner.scan({ showTorchButton: true, formats: 'QR_CODE,PDF_417', resultDisplayDuration: 0 });
            if (scannedData.text) {
                if (scannedData.text.includes('@')) {
                    let dniArr = scannedData.text.split('@');
                    let digitosCUIL = dniArr[8];
                    let cuil = digitosCUIL[0] + digitosCUIL[1] + dniArr[4] + digitosCUIL[2];
                    return {
                        dni: dniArr[4],
                        cuil: cuil
                    };
                }
            }
            return null;
        });
    }
    generateQR(mesa) {
        this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, mesa.numero)
            .then(data => {
        });
    }
};
QRService.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_0__.BarcodeScanner }
];
QRService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], QRService);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url('a.jpg') left 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed !important;\n}\n\n.bg {\n  background-color: #232323a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3Jlc28tbG9jYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHVDQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKIiwiZmlsZSI6ImluZ3Jlc28tbG9jYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2EuanBnJykgbGVmdCAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyM2ExO1xyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Ingreso al local</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button menu=\"first\" style=\"font-size:14px;\">Menu</ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container text-light\">\r\n    <div class=\"row align-items-center justify-content-center\" style=\"height:90vh;\">\r\n      <div class=\"col-12 text-center bg\">\r\n        <h1 class=\"display-5 fw-bold lh-1 m-0 p-0\">Bienvenido a Churrasic Park</h1>\r\n        <p *ngIf=\"!this.usuario?.listaEspera && this.usuario?.mesaAsignada !== 0\" class=\"lead fw-bold\">Por favor, ingrese a\r\n          la lista de espera y espere a que un metre le asigne una mesa.</p>\r\n        <i *ngIf=\"!this.usuario?.listaEspera && !this.usuario?.mesaAsignada\" class=\"fas fa-qrcode pt-3 ps-2 mb-3\"\r\n          (click)=\"Scan()\" style=\"font-size: 55px;\"></i>\r\n        <div *ngIf=\"this.usuario?.listaEspera && !this.usuario?.mesaAsignada\"\r\n          class=\"d-grid d-md-flex justify-content-md-start\">\r\n          <label class=\"fw-bold\">Entraste a la lista de espera! Esperá a que un empleado te asigne una mesa.</label>\r\n        </div>\r\n        <div *ngIf=\"this.usuario?.mesaAsignada\" class=\"d-grid gap-2 d-md-flex justify-content-md-start\">\r\n          <label class=\"fw-bold\">Ya tenes una mesa asignada ({{this.usuario?.mesaAsignada}}), scanea el QR de tu\r\n            mesa</label>\r\n          <i class=\"fas fa-qrcode pt-3 ps-2 mb-3\" (click)=\"Scan()\" style=\"font-size: 55px !important;\"></i>\r\n        </div>\r\n        <div *ngIf=\"!this.usuario?.listaEspera && this.usuario?.mesaAsignada === 0\"\r\n          class=\"d-grid gap-2 d-md-flex justify-content-md-start\">\r\n          <label class=\"fw-bold mb-2\">Escaneá el código QR de la lista de espera para visualizar los gráficos de las\r\n            encuestas.</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ingreso-local_ingreso-local_module_ts.js.map