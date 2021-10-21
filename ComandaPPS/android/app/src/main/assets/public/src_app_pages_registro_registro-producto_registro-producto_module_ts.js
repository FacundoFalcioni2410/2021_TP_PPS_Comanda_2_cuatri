(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_registro_registro-producto_registro-producto_module_ts"],{

/***/ 6444:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/registro/registro-producto/registro-producto-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroProductoPageRoutingModule": () => (/* binding */ RegistroProductoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registro_producto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-producto.page */ 6840);




const routes = [
    {
        path: '',
        component: _registro_producto_page__WEBPACK_IMPORTED_MODULE_0__.RegistroProductoPage
    }
];
let RegistroProductoPageRoutingModule = class RegistroProductoPageRoutingModule {
};
RegistroProductoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroProductoPageRoutingModule);



/***/ }),

/***/ 8190:
/*!******************************************************************************!*\
  !*** ./src/app/pages/registro/registro-producto/registro-producto.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroProductoPageModule": () => (/* binding */ RegistroProductoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registro_producto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-producto-routing.module */ 6444);
/* harmony import */ var _registro_producto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-producto.page */ 6840);
/* harmony import */ var src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sharedComponents/shared/shared.module */ 4029);








let RegistroProductoPageModule = class RegistroProductoPageModule {
};
RegistroProductoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _registro_producto_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroProductoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_registro_producto_page__WEBPACK_IMPORTED_MODULE_1__.RegistroProductoPage]
    })
], RegistroProductoPageModule);



/***/ }),

/***/ 6840:
/*!****************************************************************************!*\
  !*** ./src/app/pages/registro/registro-producto/registro-producto.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroProductoPage": () => (/* binding */ RegistroProductoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registro_producto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro-producto.page.html */ 1123);
/* harmony import */ var _registro_producto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-producto.page.scss */ 5425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 4333);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fotos.service */ 1257);
/* harmony import */ var sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.js */ 7379);









let RegistroProductoPage = class RegistroProductoPage {
    constructor(form, auth, fotoS, vibration) {
        this.form = form;
        this.auth = auth;
        this.fotoS = fotoS;
        this.vibration = vibration;
        this.nombresFotos = [];
        this.controles = this.form.group({
            'nombre': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            'descripcion': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            'TElaboracion': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(3)]],
            'precio': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(8)]],
        });
    }
    ngOnInit() {
    }
    getNombre() {
        var _a;
        return (_a = this.controles.get('nombre')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getDescripcion() {
        var _a;
        return (_a = this.controles.get('descripcion')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getTiempoElaboracion() {
        var _a;
        return (_a = this.controles.get('TElaboracion')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getPrecio() {
        var _a;
        return (_a = this.controles.get('precio')) === null || _a === void 0 ? void 0 : _a.value;
    }
    archivoSeleccionado(event) {
        if (event.target.files.length === 3) {
            this.formDataFotos = new FormData();
            for (let i = 0; i < 3; i++) {
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
    mostrarToast(options) {
        sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__.default.fire(options);
    }
    RegistrarProducto() {
        let producto = {
            nombre: this.getNombre(),
            descripcion: this.getDescripcion(),
            tiempo: this.getTiempoElaboracion(),
            precio: this.getPrecio(),
            //fotos: aca va las fotos
        };
        this.fotoS.subirArchivos(this.formDataFotos, this.nombresFotos, producto);
        this.controles.reset();
    }
};
RegistroProductoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_4__.FotosService },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration }
];
RegistroProductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-registro-producto',
        template: _raw_loader_registro_producto_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_producto_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroProductoPage);



/***/ }),

/***/ 5425:
/*!******************************************************************************!*\
  !*** ./src/app/pages/registro/registro-producto/registro-producto.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap\");\nbody {\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  background-color: #f7f7f7;\n}\n* {\n  box-sizing: border-box;\n}\n/* Add padding to container elements */\n.containerForm {\n  padding: 20px;\n  width: 800px;\n  min-width: 300px;\n  left: 50%;\n  top: 120%;\n  margin: 1% auto;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background: white;\n  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);\n}\n/* Full-width input fields */\ninput[type=text], input[type=password], input[type=number] {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  background: #232323;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\nselect {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  background: #f7f7f7;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\ninput[type=text]:focus, input[type=password]:focus, input[type=number]:focus, select:focus {\n  background-color: #6565bf;\n  outline: none;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #0eb7f4;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  font-size: 16px;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  border-radius: 10px;\n}\nbutton:hover {\n  opacity: 1;\n}\ninput[type=file] {\n  display: none;\n}\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n/* Change styles for signup button on extra small screens */\n@media screen and (max-width: 910px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 500px;\n  }\n}\n@media screen and (max-width: 510px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLXByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxzRkFBQTtBQUVSO0VBQ0UscURBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUE7RUFBRyxzQkFBQTtBQUVIO0FBQUEsc0NBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFHQSxpREFBQTtBQUdKO0FBQUEsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0FBR0Y7QUFEQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFJRjtBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBR0Y7QUFFQSxnQ0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLFVBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtBQUNGO0FBRUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFFQSwyREFBQTtBQUNBO0VBQ0U7SUFDRyxXQUFBO0VBQ0g7O0VBRUE7SUFDSSxZQUFBO0VBQ0o7QUFDRjtBQUVBO0VBQ0k7SUFDRyxXQUFBO0VBQUw7O0VBR0U7SUFDSSxZQUFBO0VBQU47QUFDRiIsImZpbGUiOiJyZWdpc3Ryby1wcm9kdWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O1xyXG59XHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lckZvcm0ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDEyMCU7XHJcbiAgICBtYXJnaW46IDElIGF1dG87XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMXB4IDIxcHggLTlweCByZ2JhKDAsMCwwLDAuMzgpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMXB4IDIxcHggLTlweCByZ2JhKDAsMCwwLDAuMzgpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxuICB9XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMsIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxMDEsIDE5MSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViN2Y0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBmb250LXNpemU6MTZweDtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxMHB4KSB7XHJcbiAgLnNpZ251cGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJGb3Jte1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTBweCkge1xyXG4gICAgLnNpZ251cGJ0biB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRhaW5lckZvcm17XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ 1123:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro-producto/registro-producto.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button>\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Registro de producto</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-content>\r\n    <div class=\"container\" style=\"max-height: 100vh !important;\" >\r\n\r\n      \r\n      <form [formGroup]='controles' (ngSubmit)='RegistrarProducto()'>\r\n          <div class=\"containerForm bg-dark text-white\">\r\n\r\n              <h3>Ingrese los datos del producto:</h3>\r\n              <!-- Se cargará el nombre, la descripción, el tiempo (promedio) de elavoración y el precio -->\r\n              <div class=\"row\">\r\n                 <div class=\"col-12\">\r\n                      <label for=\"nombre\"><b>Nombre del producto</b></label>\r\n                      <input type=\"text\" formControlName='nombre' name=\"nombre\" required>\r\n                      \r\n                      <div class='text-danger p-1 m-0' *ngIf=\"controles.get('nombre')?.touched && controles.get('nombre')?.errors?.required\">\r\n                          Ingrese el nombre del producto\r\n                      </div>\r\n                      <div class='text-danger p-1 m-0' *ngIf=\"controles.get('nombre')?.touched && controles.get('nombre')?.errors?.minlength\">\r\n                        Ingrese un nombre del producto valido\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                        <label for=\"descripcion\"><b>Descripcion</b></label>\r\n                        <input type=\"text\" formControlName='descripcion' name=\"descripcion\" required>\r\n                        \r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('descripcion')?.touched && controles.get('descripcion')?.errors?.required\">\r\n                            Ingrese la descripcion\r\n                        </div>\r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('descripcion')?.touched && controles.get('descripcion')?.errors?.minlength\">\r\n                            Ingrese una descripcion valida.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <label for=\"tiempo\"><b>Tiempo de elaboracion</b></label>\r\n                        <input type=\"number\" formControlName='TElaboracion' name=\"TElaboracion\" required>\r\n                        \r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('TElaboracion')?.touched && controles.get('TElaboracion')?.errors?.required\">\r\n                            Ingrese un tiempo de elaboracion\r\n                        </div>\r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('TElaboracion')?.touched && controles.get('TElaboracion')?.errors?.maxlength\">\r\n                            Ingrese un tiempo de elaboracion valido.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <label for=\"precio\"><b>Precio</b></label>\r\n                        <input type=\"number\" formControlName='precio' name=\"precio\" required>\r\n                        \r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('precio')?.touched && controles.get('precio')?.errors?.required\">\r\n                            Ingrese el precio\r\n                        </div>\r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('precio')?.touched && controles.get('precio')?.errors?.minlength\">\r\n                            Ingrese un precio valido\r\n                        </div>\r\n                    </div>\r\n              </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                          <label for=\"file-upload\" class=\"custom-file-upload mt-2\">\r\n                            <i class=\"fa fa-cloud-upload\"></i> Custom Upload\r\n                          </label>\r\n                          <input class=\"btn btn-primary\" type=\"file\" multiple accept=\"image/*\" (change)='archivoSeleccionado($event)' id=\"file-upload\">\r\n                          <button type=\"submit\" [disabled]='controles.invalid || !formDataFotos' class=\"btn\">Registrar</button>\r\n                      </div>\r\n                  </div>\r\n         </div>\r\n      </form>\r\n    \r\n    </div>\r\n  </ion-content>\r\n  \r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro-producto_registro-producto_module_ts.js.map