(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_registro_registro-cliente_registro-cliente_module_ts"],{

/***/ 64707:
/*!************************************************************************************!*\
  !*** ./src/app/pages/registro/registro-cliente/registro-cliente-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroClientePageRoutingModule": () => (/* binding */ RegistroClientePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _registro_cliente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-cliente.page */ 21085);




const routes = [
    {
        path: '',
        component: _registro_cliente_page__WEBPACK_IMPORTED_MODULE_0__.RegistroClientePage
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

/***/ 94708:
/*!****************************************************************************!*\
  !*** ./src/app/pages/registro/registro-cliente/registro-cliente.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroClientePageModule": () => (/* binding */ RegistroClientePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _registro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-cliente-routing.module */ 64707);
/* harmony import */ var _registro_cliente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-cliente.page */ 21085);
/* harmony import */ var src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sharedComponents/shared/shared.module */ 44029);








let RegistroClientePageModule = class RegistroClientePageModule {
};
RegistroClientePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _registro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroClientePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_registro_cliente_page__WEBPACK_IMPORTED_MODULE_1__.RegistroClientePage]
    })
], RegistroClientePageModule);



/***/ }),

/***/ 21085:
/*!**************************************************************************!*\
  !*** ./src/app/pages/registro/registro-cliente/registro-cliente.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroClientePage": () => (/* binding */ RegistroClientePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_registro_cliente_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro-cliente.page.html */ 34986);
/* harmony import */ var _registro_cliente_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-cliente.page.scss */ 17346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 94333);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firestore.service */ 91343);
/* harmony import */ var src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fotos.service */ 21106);
/* harmony import */ var src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mail.service */ 65585);
/* harmony import */ var src_app_services_qr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/qr.service */ 52724);
/* harmony import */ var sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.js */ 90110);













let RegistroClientePage = class RegistroClientePage {
    constructor(formBuilder, authService, fotoS, firestore, vibration, qrS, mailS, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.fotoS = fotoS;
        this.firestore = firestore;
        this.vibration = vibration;
        this.qrS = qrS;
        this.mailS = mailS;
        this.router = router;
        this.loading = false;
        this.anonimo = false;
        this.controles = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            dni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1111111), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(9999999)]],
        });
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
        sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__.default.fire(options);
    }
    registroAnonimo() {
        this.anonimo = !this.anonimo;
        if (this.anonimo) {
            this.formRegistroAnonimo();
        }
        else {
            this.formRegistro();
        }
    }
    formRegistroAnonimo() {
        this.controles = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        });
    }
    formRegistro() {
        this.controles = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            dni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1111111), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(9999999)]],
        });
    }
    scanDNI() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_8__.default.fire({
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
            }).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
        if (!this.anonimo) {
            cliente = {
                nombre: this.getNombre(),
                email: this.getEmail(),
                password: this.getPassword(),
                habilitado: false,
                listaEspera: false,
                tipoCliente: 'estandar'
            };
        }
        else {
            cliente = {
                nombre: this.getNombre(),
                habilitado: true,
                listaEspera: false,
                tipoCliente: 'anonimo'
            };
        }
        this.authService.registro(cliente)
            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.fotoS.loading = true;
            cliente.uid = res.user.uid;
            this.authService.usuarioActual = cliente;
            this.mostrarToast({ text: 'Debe sacarse una foto para completar el registro', toast: true, position: 'bottom', timer: 2000, timerProgressBar: true, icon: 'info' });
            setTimeout(() => {
                this.fotoS.TakePhoto(cliente);
            }, 2000);
            // if(cliente.tipoCliente === "estandar")
            // {
            //   this.mailS.enviarAviso(cliente);
            // }
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
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_5__.FotosService },
    { type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration },
    { type: src_app_services_qr_service__WEBPACK_IMPORTED_MODULE_7__.QRService },
    { type: src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_6__.MailService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router }
];
RegistroClientePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-registro-cliente',
        template: _raw_loader_registro_cliente_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_cliente_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroClientePage);



/***/ }),

/***/ 17346:
/*!****************************************************************************!*\
  !*** ./src/app/pages/registro/registro-cliente/registro-cliente.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap\");\nbody {\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  background-color: #f7f7f7;\n}\n* {\n  box-sizing: border-box;\n}\nion-content {\n  --background: url('fotoRegistro.jpg') 20%;\n  background-repeat: no-repeat;\n  background-attachment: fixed !important;\n}\n/* Add padding to container elements */\n.containerForm {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  width: 800px;\n  min-width: 300px;\n  left: 50%;\n  top: 120%;\n  margin: 8% auto;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #120711b3 !important;\n  background: white;\n  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);\n}\n/* Full-width input fields */\ninput[type=text], input[type=password], input[type=number] {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  background: #232323;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\nselect {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  background: #f7f7f7;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\ninput[type=text]:focus, input[type=password]:focus, input[type=number]:focus, select:focus {\n  background-color: #6565bf;\n  outline: none;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #0eb7f4;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  font-size: 16px;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  border-radius: 10px;\n}\nbutton:hover {\n  opacity: 1;\n}\n/* Change styles for signup button on extra small screens */\n@media screen and (max-width: 910px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 500px;\n  }\n}\n@media screen and (max-width: 510px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLWNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHNGQUFBO0FBRVI7RUFDRSxxREFBQTtFQUNBLHlCQUFBO0FBQUY7QUFFQTtFQUFHLHNCQUFBO0FBRUg7QUFBQTtFQUNFLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSx1Q0FBQTtBQUdGO0FBQUEsc0NBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFHQSxpREFBQTtBQUdGO0FBQUEsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0FBR0Y7QUFEQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFJRjtBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBR0Y7QUFFQSxnQ0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLFVBQUE7QUFDRjtBQUVBLDJEQUFBO0FBQ0E7RUFDRTtJQUNHLFdBQUE7RUFDSDs7RUFFQTtJQUNJLFlBQUE7RUFDSjtBQUNGO0FBRUE7RUFDRTtJQUNHLFdBQUE7RUFBSDs7RUFHQTtJQUNJLFlBQUE7RUFBSjtBQUNGIiwiZmlsZSI6InJlZ2lzdHJvLWNsaWVudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztcclxufVxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9mb3RvUmVnaXN0cm8uanBnJykgMjAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lckZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMTIwJTtcclxuICBtYXJnaW46IDglIGF1dG87XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIwNzExYjMgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDJweCAxcHggMjFweCAtOXB4IHJnYmEoMCwwLDAsMC4zOCk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzLCBpbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMsIHNlbGVjdDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTAxLCAxOTEpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlYjdmNDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTEwcHgpIHtcclxuICAuc2lnbnVwYnRuIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lckZvcm17XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMHB4KSB7XHJcbiAgLnNpZ251cGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJGb3Jte1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ 34986:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro-cliente/registro-cliente.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n          </ion-buttons>\r\n        <ion-title>Registro</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button menu=\"first\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"container\" style=\"max-height: 100vh !important;\" >\r\n        <div *ngIf=\"this.fotoS.loading\">\r\n            <app-spinner></app-spinner>\r\n        </div>\r\n      \r\n        <form [formGroup]='controles' (ngSubmit)='RegistrarCliente()'>\r\n            <div class=\"containerForm bg-dark text-white\">\r\n                <ion-row class=\"ion-justify-content-center ion-align-items-center\">\r\n                    <ion-label color='dark' class=\"label\">Registro anónimo </ion-label>\r\n                    <ion-toggle (click)=\"this.registroAnonimo()\"></ion-toggle>\r\n                </ion-row>\r\n                <h3>Ingrese sus datos:</h3>\r\n  \r\n                <div class=\"row\">\r\n                    <div class=\"col-6\" *ngIf='!this.anonimo'>\r\n                        <label for=\"email\"><b>Email</b></label>\r\n                        <input type=\"text\" formControlName='email' name=\"email\" required>\r\n                        \r\n                        <div class='text-light p-1 m-0' *ngIf=\"controles.get('email')?.touched && controles.get('email')?.errors?.required\">\r\n                            Ingrese su email\r\n                        </div>\r\n                        <div class='text-light p-1 m-0' *ngIf=\"controles.get('email')?.touched && controles.get('email')?.errors?.email\">\r\n                            Ingrese un email valido\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf='!this.anonimo'>\r\n                        <label for=\"password\"><b>Contraseña</b></label>\r\n                        <input type=\"password\" formControlName='password' name=\"password\" required>\r\n                        \r\n                        <div class='text-light p-1' *ngIf=\"controles.get('password')?.touched && controles.get('password')?.errors?.required\">\r\n                            Ingrese su contraseña\r\n                        </div>\r\n                        <div class='text-light p-1' *ngIf=\"controles.get('password')?.touched && controles.get('password')?.errors?.minlength\">\r\n                            La contraseña debe tener 8 caracteres o mas\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <label for=\"nombre\"><b>Nombre</b></label>\r\n                        <input type=\"text\" formControlName='nombre' name=\"nombre\" required>\r\n                        \r\n                        <div class='text-light p-1' *ngIf=\"controles.get('nombre')?.touched && controles.get('nombre')?.errors?.required\">\r\n                            Ingrese su nombre\r\n                        </div>\r\n                        <div class='text-light p-1' *ngIf=\"controles.get('nombre')?.touched && controles.get('nombre')?.errors?.minlength\">\r\n                            Ingrese un nombre valido\r\n                        </div>\r\n                    </div>\r\n                <div *ngIf='!this.anonimo'>\r\n                    <div class=\"col-12\">\r\n                        <label for=\"apellido\"><b>Apellido</b></label>\r\n                        <input type=\"text\" formControlName='apellido' name=\"apellido\" required>\r\n                        \r\n                        <div class='text-light p-1' *ngIf=\"controles.get('apellido')?.touched && controles.get('apellido')?.errors?.required\">\r\n                            Ingrese su apellido\r\n                        </div>\r\n                        <div class='text-light p-1' *ngIf=\"controles.get('apellido')?.touched && controles.get('apellido')?.errors?.minlength\">\r\n                            Ingrese un apellido valido\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12\" *ngIf=\"!this.anonimo\">\r\n                        <label for=\"password\"><b>DNI</b></label>\r\n                        <div class=\"d-flex aling-items-center\">\r\n                            <input class='d-inline' type=\"number\" formControlName='dni' name=\"dni\" required style=\"width: 85%;\">\r\n                            <i class=\"fas fa-qrcode pt-3 ps-2\" (click)=\"this.scanDNI()\" style=\"font-size: 32px;\"></i>\r\n                        </div>\r\n                        \r\n                        <div class='text-light p-1' *ngIf=\"controles.get('dni')?.touched && controles.get('dni')?.errors?.required\">\r\n                            Ingrese su dni\r\n                        </div>\r\n                        <div class='text-light p-1' *ngIf=\"controles.get('dni')?.touched && controles.get('dni')?.errors?.minlength\">\r\n                            Ingrese un dni valido\r\n                        </div>\r\n                    </div>   \r\n                </div>               \r\n                </div>        \r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <button type=\"submit\" [disabled]='controles.invalid' class=\"btn\">Registrar</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro-cliente_registro-cliente_module_ts.js.map