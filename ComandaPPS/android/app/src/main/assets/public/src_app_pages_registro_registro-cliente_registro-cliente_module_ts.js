(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_registro_registro-cliente_registro-cliente_module_ts"],{

/***/ 4707:
/*!************************************************************************************!*\
  !*** ./src/app/pages/registro/registro-cliente/registro-cliente-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroClientePageRoutingModule": () => (/* binding */ RegistroClientePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro/registro.component */ 2120);




const routes = [
    {
        path: '',
        component: _registro_registro_component__WEBPACK_IMPORTED_MODULE_0__.RegistroComponent
    }
];
let RegistroClientePageRoutingModule = class RegistroClientePageRoutingModule {
};
RegistroClientePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroClientePageRoutingModule);



/***/ }),

/***/ 4708:
/*!****************************************************************************!*\
  !*** ./src/app/pages/registro/registro-cliente/registro-cliente.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroClientePageModule": () => (/* binding */ RegistroClientePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-cliente-routing.module */ 4707);
/* harmony import */ var _registro_cliente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-cliente.page */ 1085);
/* harmony import */ var src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sharedComponents/shared/shared.module */ 4029);
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro/registro.component */ 2120);









let RegistroClientePageModule = class RegistroClientePageModule {
};
RegistroClientePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _registro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroClientePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_registro_cliente_page__WEBPACK_IMPORTED_MODULE_1__.RegistroClientePage, _registro_registro_component__WEBPACK_IMPORTED_MODULE_3__.RegistroComponent]
    })
], RegistroClientePageModule);



/***/ }),

/***/ 1085:
/*!**************************************************************************!*\
  !*** ./src/app/pages/registro/registro-cliente/registro-cliente.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroClientePage": () => (/* binding */ RegistroClientePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registro_cliente_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro-cliente.page.html */ 4986);
/* harmony import */ var _registro_cliente_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-cliente.page.scss */ 7346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 4333);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firestore.service */ 1343);
/* harmony import */ var src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fotos.service */ 1257);
/* harmony import */ var src_app_services_qr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/qr.service */ 2724);
/* harmony import */ var sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.js */ 7379);











let RegistroClientePage = class RegistroClientePage {
    constructor(form, authService, fotoS, firestore, vibration, qrS) {
        this.form = form;
        this.authService = authService;
        this.fotoS = fotoS;
        this.firestore = firestore;
        this.vibration = vibration;
        this.qrS = qrS;
        this.loading = false;
        this.controles = this.form.group({});
    }
    set tipo(value) {
        this.tipoCliente = value;
        if (value === 'anonimo') {
            this.controles = this.form.group({
                'nombre': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8)]],
                'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
            });
        }
        else {
            this.controles = this.form.group({
                'nombre': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                'apellido': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                'dni': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8)]],
                'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
            });
        }
    }
    ngOnInit() {
    }
    getNombre() {
        var _a;
        return (_a = this.controles.get('nombre')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getApellido() {
        var _a;
        return (_a = this.controles.get('apellido')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getDni() {
        var _a;
        return (_a = this.controles.get('dni')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getEmail() {
        var _a;
        return (_a = this.controles.get('email')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getPassword() {
        var _a;
        return (_a = this.controles.get('password')) === null || _a === void 0 ? void 0 : _a.value;
    }
    mostrarToast(options) {
        sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__.default.fire(options);
    }
    scanDNI() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__.default.fire({
                title: 'Escaneo DNI!',
                backdrop: false,
                text: 'Para escanear el DNI guiese con la foto de arriba',
                imageUrl: '../../../../assets/dni.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                showCancelButton: true,
                confirmButtonText: 'Escanear',
                cancelButtonText: 'Cancelar',
                reverseButtons: true,
            }).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                var _a;
                if (result.isConfirmed) {
                    let datos = yield this.qrS.scanDNI();
                    (_a = this.controles.get('dni')) === null || _a === void 0 ? void 0 : _a.setValue(datos === null || datos === void 0 ? void 0 : datos.dni);
                }
            }));
        });
    }
    RegistrarCliente() {
        this.loading = true;
        let cliente;
        if (this.tipoCliente === "anonimo") {
            cliente = {
                nombre: this.getNombre(),
                email: this.getEmail(),
                password: this.getPassword(),
                habilitado: true,
            };
        }
        else {
            cliente = {
                nombre: this.getNombre(),
                apellido: this.getApellido(),
                dni: this.getDni(),
                email: this.getEmail(),
                password: this.getPassword(),
                habilitado: false,
            };
        }
        this.authService.registro(cliente)
            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.fotoS.loading = true;
            cliente.uid = res.user.uid;
            this.authService.usuarioActual = cliente;
            this.mostrarToast({ text: 'Debe sacarse una foto para completar el registro', toast: true, position: 'bottom', timer: 2000, timerProgressBar: true, icon: 'info' });
            setTimeout(() => {
                this.fotoS.TakePhoto(cliente);
            }, 2000);
            this.controles.reset();
        }))
            .catch(err => {
            setTimeout(() => {
                this.loading = false;
            }, 1000);
            this.vibration.vibrate(2000);
            if (err.code === "auth/email-already-in-use") {
                this.mostrarToast({ text: 'La cuenta ya existe', toast: true, position: 'bottom', timer: 1500, timerProgressBar: true, icon: 'error' });
            }
            this.controles.reset();
            // this.mostrarToast({text: 'Datos incorrectos',toast: true, position: 'bottom',timer: 1500,timerProgressBar: true,icon: 'error'});
        });
    }
};
RegistroClientePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_5__.FotosService },
    { type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration },
    { type: src_app_services_qr_service__WEBPACK_IMPORTED_MODULE_6__.QRService }
];
RegistroClientePage.propDecorators = {
    tipo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
RegistroClientePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-registro-cliente',
        template: _raw_loader_registro_cliente_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_cliente_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroClientePage);



/***/ }),

/***/ 2120:
/*!********************************************************************************!*\
  !*** ./src/app/pages/registro/registro-cliente/registro/registro.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroComponent": () => (/* binding */ RegistroComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro.component.html */ 7436);
/* harmony import */ var _registro_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.component.scss */ 9500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let RegistroComponent = class RegistroComponent {
    constructor() {
        this.loading = false;
        this.seleccionado = false;
        this.tipo = '';
    }
    ngOnInit() { }
    seleccionarTipo(tipo) {
        this.seleccionado = true;
        this.tipo = tipo;
    }
};
RegistroComponent.ctorParameters = () => [];
RegistroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-registro',
        template: _raw_loader_registro_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroComponent);



/***/ }),

/***/ 7346:
/*!****************************************************************************!*\
  !*** ./src/app/pages/registro/registro-cliente/registro-cliente.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap\");\nbody {\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  background-color: #f7f7f7;\n}\n* {\n  box-sizing: border-box;\n}\n/* Add padding to container elements */\n.containerForm {\n  padding: 20px;\n  width: 800px;\n  min-width: 300px;\n  left: 50%;\n  top: 120%;\n  margin: 1% auto;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background: white;\n  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);\n}\n/* Full-width input fields */\ninput[type=text], input[type=password], input[type=number] {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  background: #232323;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\nselect {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  background: #f7f7f7;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\ninput[type=text]:focus, input[type=password]:focus, input[type=number]:focus, select:focus {\n  background-color: #6565bf;\n  outline: none;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #0eb7f4;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  font-size: 16px;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  border-radius: 10px;\n}\nbutton:hover {\n  opacity: 1;\n}\n/* Change styles for signup button on extra small screens */\n@media screen and (max-width: 910px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 500px;\n  }\n}\n@media screen and (max-width: 510px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLWNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHNGQUFBO0FBRVI7RUFDRSxxREFBQTtFQUNBLHlCQUFBO0FBQUY7QUFFQTtFQUFHLHNCQUFBO0FBRUg7QUFBQSxzQ0FBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUdBLGlEQUFBO0FBR0o7QUFBQSw0QkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtBQUlGO0FBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFHRjtBQUVBLGdDQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsVUFBQTtBQUNGO0FBRUEsMkRBQUE7QUFDQTtFQUNFO0lBQ0csV0FBQTtFQUNIOztFQUVBO0lBQ0ksWUFBQTtFQUNKO0FBQ0Y7QUFFQTtFQUNJO0lBQ0csV0FBQTtFQUFMOztFQUdFO0lBQ0ksWUFBQTtFQUFOO0FBQ0YiLCJmaWxlIjoicmVnaXN0cm8tY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O1xyXG59XHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lckZvcm0ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDEyMCU7XHJcbiAgICBtYXJnaW46IDElIGF1dG87XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMXB4IDIxcHggLTlweCByZ2JhKDAsMCwwLDAuMzgpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMXB4IDIxcHggLTlweCByZ2JhKDAsMCwwLDAuMzgpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxuICB9XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMsIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxMDEsIDE5MSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViN2Y0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBmb250LXNpemU6MTZweDtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MTBweCkge1xyXG4gIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyRm9ybXtcclxuICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEwcHgpIHtcclxuICAgIC5zaWdudXBidG4ge1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXJGb3Jte1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 9500:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/registro/registro-cliente/registro/registro.component.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 4986:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro-cliente/registro-cliente.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n    <div class=\"container\" style=\"max-height: 100vh !important;\" >\r\n        <div *ngIf=\"this.fotoS.loading\">\r\n            <app-spinner></app-spinner>\r\n        </div>\r\n      \r\n        <form [formGroup]='controles' (ngSubmit)='RegistrarCliente()'>\r\n            <div class=\"containerForm bg-dark text-white\">\r\n\r\n                <h3>Ingrese sus datos:</h3>\r\n  \r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <label for=\"email\"><b>Email</b></label>\r\n                        <input type=\"text\" formControlName='email' name=\"email\" required>\r\n                        \r\n                        <div class='text-danger p-1 m-0' *ngIf=\"controles.get('email')?.touched && controles.get('email')?.errors?.required\">\r\n                            Ingrese su email\r\n                        </div>\r\n                        <div class='text-danger p-1 m-0' *ngIf=\"controles.get('email')?.touched && controles.get('email')?.errors?.email\">\r\n                            Ingrese un email valido\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <label for=\"password\"><b>Contraseña</b></label>\r\n                        <input type=\"password\" formControlName='password' name=\"password\" required>\r\n                        \r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('password')?.touched && controles.get('password')?.errors?.required\">\r\n                            Ingrese su contraseña\r\n                        </div>\r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('password')?.touched && controles.get('password')?.errors?.minlength\">\r\n                            La contraseña debe tener 8 caracteres o mas\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <label for=\"password\"><b>Nombre</b></label>\r\n                        <input type=\"text\" formControlName='nombre' name=\"nombre\" required>\r\n                        \r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('nombre')?.touched && controles.get('nombre')?.errors?.required\">\r\n                            Ingrese su nombre\r\n                        </div>\r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('nombre')?.touched && controles.get('nombre')?.errors?.minlength\">\r\n                            Ingrese un nombre validow\r\n                        </div>\r\n                    </div>\r\n                <div *ngIf='this.tipoCliente !== \"anonimo\"'>\r\n                    <div class=\"col-12\">\r\n                        <label for=\"password\"><b>Apellido</b></label>\r\n                        <input type=\"text\" formControlName='apellido' name=\"apellido\" required>\r\n                        \r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('apellido')?.touched && controles.get('apellido')?.errors?.required\">\r\n                            Ingrese su apellido\r\n                        </div>\r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('apellido')?.touched && controles.get('apellido')?.errors?.minlength\">\r\n                            Ingrese un apellido valido\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <label for=\"password\"><b>DNI</b></label>\r\n                        <div class=\"d-flex aling-items-center\">\r\n                            <input class='d-inline' type=\"number\" formControlName='dni' name=\"dni\" required style=\"width: 85%;\">\r\n                            <i class=\"fas fa-qrcode pt-3 ps-2\" (click)=\"this.scanDNI()\" style=\"font-size: 32px;\"></i>\r\n                        </div>\r\n                        \r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('dni')?.touched && controles.get('dni')?.errors?.required\">\r\n                            Ingrese su dni\r\n                        </div>\r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('dni')?.touched && controles.get('dni')?.errors?.minlength\">\r\n                            Ingrese un dni valido\r\n                        </div>\r\n                    </div>   \r\n                </div>               \r\n                </div>        \r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <button type=\"submit\" [disabled]='controles.invalid' class=\"btn\">Registrar</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ 7436:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro-cliente/registro/registro.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button>\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Registro de empleados</ion-title>\n  </ion-toolbar>\n</ion-header>\n<!-- *ngIf='this.auth.isLoggedIn' (click)=\"this.auth.logOut()\" -->\n\n<ion-content>\n  <app-spinner *ngIf='this.loading'></app-spinner>\n  <div style='height: calc(100vh - 56px);margin:0;padding:0;' *ngIf='!this.seleccionado'>\n    <ion-button class=\"\" style=\"text-shadow: 3px 3px 3px black;height:50%;width:100%;margin:0;padding:0;color:#FF7F50;\" (click)='seleccionarTipo(\"estandar\")'>Cliente estandar</ion-button>\n    <ion-button class=\"\" style=\"text-shadow: 3px 3px 3px black;height:50%;width:100%;margin:0;padding:0;color:#22B6A2;\" (click)='seleccionarTipo(\"anonimo\")'>Anonimo</ion-button>\n  </div>\n\n  <app-registro-cliente *ngIf='this.seleccionado' [tipo]=\"this.tipo\"></app-registro-cliente>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro-cliente_registro-cliente_module_ts.js.map