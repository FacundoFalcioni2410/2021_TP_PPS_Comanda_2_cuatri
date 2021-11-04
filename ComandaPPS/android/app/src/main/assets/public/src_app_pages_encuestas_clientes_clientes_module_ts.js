(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_encuestas_clientes_clientes_module_ts"],{

/***/ 81201:
/*!*********************************************************************!*\
  !*** ./src/app/pages/encuestas/clientes/clientes-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPageRoutingModule": () => (/* binding */ ClientesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes.page */ 30187);




const routes = [
    {
        path: '',
        component: _clientes_page__WEBPACK_IMPORTED_MODULE_0__.ClientesPage
    }
];
let ClientesPageRoutingModule = class ClientesPageRoutingModule {
};
ClientesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientesPageRoutingModule);



/***/ }),

/***/ 18682:
/*!*************************************************************!*\
  !*** ./src/app/pages/encuestas/clientes/clientes.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPageModule": () => (/* binding */ ClientesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes-routing.module */ 81201);
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.page */ 30187);







let ClientesPageModule = class ClientesPageModule {
};
ClientesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientesPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_1__.ClientesPage]
    })
], ClientesPageModule);



/***/ }),

/***/ 30187:
/*!***********************************************************!*\
  !*** ./src/app/pages/encuestas/clientes/clientes.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPage": () => (/* binding */ ClientesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clientes.page.html */ 46790);
/* harmony import */ var _clientes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.page.scss */ 20272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 94333);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fotos.service */ 21106);
/* harmony import */ var sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.js */ 90110);









let ClientesPage = class ClientesPage {
    constructor(formBuilder, fotoS, vibration, firestore, userService) {
        this.formBuilder = formBuilder;
        this.fotoS = fotoS;
        this.vibration = vibration;
        this.firestore = firestore;
        this.userService = userService;
        this.nombresFotos = [];
        this.formDataFotos = null;
        this.form = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            satisfaccion: ['5', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            productoConsumido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            trato: ['bien', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            visitar: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        this.firestore.getProductos().subscribe(value => {
            this.productos = value;
        });
    }
    ngOnInit() {
    }
    obtenerCantidad(encuesta, valor, clave) {
        let filtrado = encuesta.filter((item) => {
            return item[clave] == valor;
        });
        return filtrado.length;
    }
    change(value) {
        console.log(value.detail.value);
    }
    mostrarToast(options) {
        sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__.default.fire(options);
    }
    archivoSeleccionado(event) {
        if (event.target.files.length > 0) {
            this.formDataFotos = new FormData();
            for (let i = 0; i < event.target.files.length; i++) {
                this.nombresFotos.push(event.target.files[i].name);
                this.formDataFotos.delete(`archivo${i}`);
                this.formDataFotos.append(`archivo${i}`, event.target.files[i], event.target.files[i].name);
            }
        }
        else {
            this.formDataFotos = null;
            this.vibration.vibrate(2000);
            this.mostrarToast({ text: "Debe seleccionar 3 fotos", toast: true, position: 'bottom', timer: 2000, timerProgressBar: true, icon: 'error' });
        }
    }
    subirEncuesta() {
        this.fotoS.subirArchivos(this.formDataFotos, this.nombresFotos, this.form.value);
    }
};
ClientesPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_4__.FotosService },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
ClientesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-clientes',
        template: _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clientes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClientesPage);



/***/ }),

/***/ 20272:
/*!*************************************************************!*\
  !*** ./src/app/pages/encuestas/clientes/clientes.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("body {\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\nh1 {\n  font-weight: 400;\n  line-height: 1.2;\n}\n\np {\n  font-size: 1.125rem;\n}\n\nh1, p {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\nbutton {\n  border: none;\n}\n\n.header {\n  padding: 0 0.625rem;\n  margin-bottom: 1.875rem;\n}\n\n.description {\n  font-style: italic;\n  font-weight: 200;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n}\n\nion-content {\n  --background: url('fondo-deshabilitado.jpg') center 20%;\n  background-repeat: no-repeat;\n  background-attachment: fixed !important;\n}\n\n/* Add padding to container elements */\n\n.containerForm {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  width: 800px;\n  min-width: 300px;\n  left: 50%;\n  top: 120%;\n  margin: 5% auto;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #120711b3 !important;\n  background: white;\n  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);\n}\n\n.clue {\n  margin-left: 0.25rem;\n  font-size: 0.9rem;\n  color: #e4e4e4;\n}\n\n/* form */\n\nform {\n  background: var(--color-darkblue-alpha);\n  border-radius: 0.25rem;\n}\n\ninput[type=file] {\n  display: none;\n}\n\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 510px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 350px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFBSSxnQkFBQTtFQUFpQixnQkFBQTtBQUd2Qjs7QUFERTtFQUFHLG1CQUFBO0FBS0w7O0FBSEU7RUFBTSxhQUFBO0VBQWMscUJBQUE7QUFRdEI7O0FBTkU7RUFBUSxZQUFBO0FBVVY7O0FBUEE7RUFBUyxtQkFBQTtFQUNMLHVCQUFBO0FBV0o7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFXSjs7QUFSQTtFQUNFLHVEQUFBO0VBQ0EsNEJBQUE7RUFDQSx1Q0FBQTtBQVdGOztBQVJBLHNDQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtFQUdBLGlEQUFBO0FBV0Y7O0FBUkE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVdKOztBQVJFLFNBQUE7O0FBRUY7RUFDSSx1Q0FBQTtFQUNBLHNCQUFBO0FBVUo7O0FBTEE7RUFDRSxhQUFBO0FBUUY7O0FBTEE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTEE7RUFDRTtJQUNHLFdBQUE7RUFRSDs7RUFMQTtJQUNJLFlBQUE7RUFRSjtBQUNGIiwiZmlsZSI6ImNsaWVudGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbiAgXHJcbiAgaDEge2ZvbnQtd2VpZ2h0OiA0MDA7bGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG4gIHAge2ZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbn1cclxuICBoMSxwIHttYXJnaW4tdG9wOiAwO21hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG4gIGJ1dHRvbiB7Ym9yZGVyOiBub25lO1xyXG59XHJcbiAgXHJcbi5oZWFkZXIge3BhZGRpbmc6IDAgMC42MjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcclxufVxyXG4gIFxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvZm9uZG8tZGVzaGFiaWxpdGFkby5qcGcnKSBjZW50ZXIgMjAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lckZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMTIwJTtcclxuICBtYXJnaW46IDUlIGF1dG87XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIwNzExYjMgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDJweCAxcHggMjFweCAtOXB4IHJnYmEoMCwwLDAsMC4zOCk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxufVxyXG5cclxuLmNsdWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiAjZTRlNGU0O1xyXG59XHJcbiAgXHJcbiAgLyogZm9ybSAqL1xyXG4gIFxyXG5mb3JtIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWRhcmtibHVlLWFscGhhKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTBweCkge1xyXG4gIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyRm9ybXtcclxuICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 46790:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/encuestas/clientes/clientes.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button>\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Encuesta de cliente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <div class=\"containerForm\">\r\n      <h3 id=\"title\">Bienvenido a la encuesta de Churrasic Park</h3>\r\n      <p id=\"description\">Complete los siguientes datos: </p>\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"this.subirEncuesta()\" id=\"survey-form\">\r\n          <div class=\"\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\" for=\"name\">Nombre</ion-label>\r\n              <ion-input\r\n                type=\"text\"\r\n                formControlName=\"nombre\"\r\n                id=\"name\"\r\n                mode=\"ios\"\r\n                placeholder=\"Ingrese su nombre\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </div>\r\n      \r\n          <div class=\"mt-1\">\r\n            <ion-label position for=\"satisfaccion\">¿Cual fue tu grado de satisfaccion?</ion-label>\r\n            <ion-item>\r\n              <ion-range formControlName=\"satisfaccion\" id=\"satisfaccion\" (ionChange)='change($event)' value=\"5\" min=\"1\" max=\"10\" color=\"danger\" mode=\"ios\" pin=\"true\">\r\n                <ion-icon slot=\"start\" name=\"sad\"></ion-icon>\r\n                <ion-icon slot=\"end\" name=\"happy\"></ion-icon>\r\n              </ion-range>\r\n            </ion-item>\r\n          </div>\r\n      \r\n          <div class=\"mt-1\">\r\n            <ion-label class=\"my-1\">¿Pidió cocteles y postres?</ion-label>\r\n            <ion-item>\r\n              <ion-select formControlName=\"productoConsumido\" mode=\"ios\" interface=\"popover\" placeholder=\"\">\r\n                <ion-select-option value=\"cocteles\">Pedi cocteles</ion-select-option>\r\n                <ion-select-option value=\"postres\">Pedi postres</ion-select-option>\r\n                <ion-select-option value=\"ambos\">Ambos</ion-select-option>\r\n                <ion-select-option value=\"ninguno\">Ninguno de los 2</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </div>\r\n  \r\n          <div class=\"mt-1\">\r\n            <ion-list>\r\n                <ion-radio-group formControlName=\"trato\" mode=\"ios\" value=\"bien\">\r\n                  \r\n                  <ion-list-header>\r\n                    <ion-label>¿Como te trato el personal?</ion-label>\r\n                  </ion-list-header>\r\n                  \r\n                  <ion-item>\r\n                    <ion-label>Excelente</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"success\" value=\"excelente\"></ion-radio>\r\n                  </ion-item>\r\n        \r\n                  <ion-item>\r\n                    <ion-label>Bien</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"warning\" value=\"bien\"></ion-radio>\r\n                  </ion-item>\r\n  \r\n                  <ion-item>\r\n                    <ion-label>Pesimo</ion-label>\r\n                    <ion-radio slot=\"start\" color=\"danger\" value=\"pesimo\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n            </ion-list>\r\n          </div>\r\n  \r\n          <div class=\"mt-1\">\r\n            <ion-list>\r\n              <ion-list-header>¿Volveria al local?</ion-list-header>\r\n                <ion-item>\r\n                  <ion-label>Si</ion-label>\r\n                  <ion-checkbox formControlName=\"visitar\" mode=\"ios\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n            </ion-list>\r\n          </div>\r\n  \r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                  <label for=\"file-upload\" class=\"custom-file-upload mt-2 text-center\">\r\n                      <i class=\"fa fa-cloud-upload\"></i> Podes subir hasta 3 fotos relacionadas con la encuesta\r\n                  </label>\r\n                  <input class=\"btn btn-primary\" type=\"file\" id=\"file-upload\" multiple accept=\"image/*\" (change)='archivoSeleccionado($event)'>\r\n            </div>\r\n        </div>\r\n          <ion-button class=\"d-block m-auto mt-2\" size=\"large\" [disabled]=\"form.invalid\" type=\"submit\">Enviar encuesta</ion-button>\r\n        </form>\r\n      </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_encuestas_clientes_clientes_module_ts.js.map