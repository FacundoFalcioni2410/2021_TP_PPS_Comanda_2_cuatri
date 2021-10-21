(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_registro_registro-empleado_registro-empleado_module_ts"],{

/***/ 776:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/registro/registro-empleado/registro-empleado-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroEmpleadoPageRoutingModule": () => (/* binding */ RegistroEmpleadoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registro_empleado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-empleado.page */ 6577);




const routes = [
    {
        path: '',
        component: _registro_empleado_page__WEBPACK_IMPORTED_MODULE_0__.RegistroEmpleadoPage
    }
];
let RegistroEmpleadoPageRoutingModule = class RegistroEmpleadoPageRoutingModule {
};
RegistroEmpleadoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroEmpleadoPageRoutingModule);



/***/ }),

/***/ 9056:
/*!******************************************************************************!*\
  !*** ./src/app/pages/registro/registro-empleado/registro-empleado.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroEmpleadoPageModule": () => (/* binding */ RegistroEmpleadoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registro_empleado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-empleado-routing.module */ 776);
/* harmony import */ var _registro_empleado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-empleado.page */ 6577);
/* harmony import */ var src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sharedComponents/shared/shared.module */ 4029);








let RegistroEmpleadoPageModule = class RegistroEmpleadoPageModule {
};
RegistroEmpleadoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _registro_empleado_page__WEBPACK_IMPORTED_MODULE_1__.RegistroEmpleadoPage,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _registro_empleado_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroEmpleadoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
    })
], RegistroEmpleadoPageModule);



/***/ }),

/***/ 6577:
/*!****************************************************************************!*\
  !*** ./src/app/pages/registro/registro-empleado/registro-empleado.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroEmpleadoPage": () => (/* binding */ RegistroEmpleadoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registro_empleado_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro-empleado.page.html */ 8753);
/* harmony import */ var _registro_empleado_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-empleado.page.scss */ 3163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 4333);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firestore.service */ 1343);
/* harmony import */ var src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fotos.service */ 1257);
/* harmony import */ var src_app_services_qr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/qr.service */ 2724);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);











let RegistroEmpleadoPage = class RegistroEmpleadoPage {
    constructor(form, authService, fotoS, firestore, vibration, qrS) {
        this.form = form;
        this.authService = authService;
        this.fotoS = fotoS;
        this.firestore = firestore;
        this.vibration = vibration;
        this.qrS = qrS;
        this.loading = false;
        this.controles = this.form.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            dni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            cuil: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
            tipo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
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
    getCuil() {
        var _a;
        return (_a = this.controles.get('cuil')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getEmail() {
        var _a;
        return (_a = this.controles.get('email')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getPassword() {
        var _a;
        return (_a = this.controles.get('password')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getTipo() {
        var _a;
        return (_a = this.controles.get('tipo')) === null || _a === void 0 ? void 0 : _a.value;
    }
    mostrarToast(options) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire(options);
    }
    scanDNI() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
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
                var _a, _b;
                if (result.isConfirmed) {
                    let datos = yield this.qrS.scanDNI();
                    (_a = this.controles.get('dni')) === null || _a === void 0 ? void 0 : _a.setValue(datos === null || datos === void 0 ? void 0 : datos.dni);
                    (_b = this.controles.get('cuil')) === null || _b === void 0 ? void 0 : _b.setValue(datos === null || datos === void 0 ? void 0 : datos.cuil);
                }
            }));
        });
    }
    RegistrarEmpleado() {
        this.loading = true;
        let empleado = {
            nombre: this.getNombre(),
            apellido: this.getApellido(),
            dni: this.getDni(),
            cuil: this.getCuil(),
            tipo: this.getTipo(),
            email: this.getEmail(),
            password: this.getPassword()
        };
        this.authService.registro(empleado)
            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.fotoS.loading = true;
            empleado.uid = res.user.uid;
            this.authService.usuarioActual = empleado;
            this.mostrarToast({ text: 'Sáquese una foto para completar el registro (opcional, puede hacerlo después)', toast: true, position: 'bottom', timer: 2000, timerProgressBar: true, icon: 'info' });
            const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().mixin({
                customClass: {
                    confirmButton: 'btn btn-success mb-2',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: 'Foto opcional',
                text: "¿Quiere sacarse una foto ahora? Puede hacerlo después.",
                icon: 'question',
                backdrop: false,
                showCancelButton: true,
                confirmButtonText: 'Si, sacarmela ahora.',
                cancelButtonText: 'No, prefiero hacerlo despues',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    this.fotoS.TakePhoto(empleado);
                }
                else if (
                /* Read more about handling dismissals below */
                result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().DismissReason.cancel)) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
                        title: "Foto cancelada.",
                        text: "Podes subir tu foto después. Registro completado",
                        icon: 'success',
                        backdrop: false
                    });
                    this.authService.AltaEmpleado(empleado);
                    this.fotoS.loading = false;
                }
            });
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
        });
    }
};
RegistroEmpleadoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_5__.FotosService },
    { type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration },
    { type: src_app_services_qr_service__WEBPACK_IMPORTED_MODULE_6__.QRService }
];
RegistroEmpleadoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-registro-empleado',
        template: _raw_loader_registro_empleado_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_empleado_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroEmpleadoPage);



/***/ }),

/***/ 3163:
/*!******************************************************************************!*\
  !*** ./src/app/pages/registro/registro-empleado/registro-empleado.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap\");\nbody {\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  background-color: #f7f7f7;\n}\n* {\n  box-sizing: border-box;\n}\n/* Add padding to container elements */\n.containerForm {\n  padding: 20px;\n  width: 800px;\n  min-width: 300px;\n  left: 50%;\n  top: 120%;\n  margin: 1% auto;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background: white;\n  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);\n}\n/* Full-width input fields */\ninput[type=text], input[type=password], input[type=number] {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  background: #232323;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\nselect {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  background: #f7f7f7;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\ninput[type=text]:focus, input[type=password]:focus, input[type=number]:focus, select:focus {\n  background-color: #6565bf;\n  outline: none;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #0eb7f4;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  font-size: 16px;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  border-radius: 10px;\n}\nbutton:hover {\n  opacity: 1;\n}\n/* Change styles for signup button on extra small screens */\n@media screen and (max-width: 910px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 500px;\n  }\n}\n@media screen and (max-width: 510px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLWVtcGxlYWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxzRkFBQTtBQUVSO0VBQ0UscURBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUE7RUFBRyxzQkFBQTtBQUVIO0FBQUEsc0NBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFHQSxpREFBQTtBQUdKO0FBQUEsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0FBR0Y7QUFEQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFJRjtBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBR0Y7QUFFQSxnQ0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLFVBQUE7QUFDRjtBQUVBLDJEQUFBO0FBQ0E7RUFDRTtJQUNHLFdBQUE7RUFDSDs7RUFFQTtJQUNJLFlBQUE7RUFDSjtBQUNGO0FBRUE7RUFDSTtJQUNHLFdBQUE7RUFBTDs7RUFHRTtJQUNJLFlBQUE7RUFBTjtBQUNGIiwiZmlsZSI6InJlZ2lzdHJvLWVtcGxlYWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7XHJcbn1cclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lciBlbGVtZW50cyAqL1xyXG4uY29udGFpbmVyRm9ybSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMTIwJTtcclxuICAgIG1hcmdpbjogMSUgYXV0bztcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAxcHggMjFweCAtOXB4IHJnYmEoMCwwLDAsMC4zOCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCAxcHggMjFweCAtOXB4IHJnYmEoMCwwLDAsMC4zOCk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMXB4IDIxcHggLTlweCByZ2JhKDAsMCwwLDAuMzgpO1xyXG4gIH1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cywgaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDEwMSwgMTkxKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWI3ZjQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxMHB4KSB7XHJcbiAgLnNpZ251cGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJGb3Jte1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTBweCkge1xyXG4gICAgLnNpZ251cGJ0biB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRhaW5lckZvcm17XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ 8753:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro-empleado/registro-empleado.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button>\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Registro de empleados</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-content>\r\n    <div class=\"container\" style=\"max-height: 100vh !important;\" >\r\n        <div *ngIf=\"this.fotoS.loading\">\r\n            <app-spinner></app-spinner>\r\n        </div>\r\n      \r\n      <form [formGroup]='controles' (ngSubmit)='RegistrarEmpleado()'>\r\n          <div class=\"containerForm bg-dark text-white\">\r\n\r\n              <h3>Ingrese sus datos:</h3>\r\n  \r\n              <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                      <label for=\"email\"><b>Email</b></label>\r\n                      <input type=\"text\" formControlName='email' name=\"email\" required>\r\n                      \r\n                      <div class='text-danger p-1 m-0' *ngIf=\"controles.get('email')?.touched && controles.get('email')?.errors?.required\">\r\n                          Ingrese su email\r\n                      </div>\r\n                      <div class='text-danger p-1 m-0' *ngIf=\"controles.get('email')?.touched && controles.get('email')?.errors?.email\">\r\n                          Ingrese un email valido\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                      <label for=\"password\"><b>Contraseña</b></label>\r\n                      <input type=\"password\" formControlName='password' name=\"password\" required>\r\n                      \r\n                      <div class='text-danger p-1' *ngIf=\"controles.get('password')?.touched && controles.get('password')?.errors?.required\">\r\n                          Ingrese su contraseña\r\n                      </div>\r\n                      <div class='text-danger p-1' *ngIf=\"controles.get('password')?.touched && controles.get('password')?.errors?.minlength\">\r\n                          La contraseña debe tener 8 caracteres o mas\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <label for=\"password\"><b>Nombre</b></label>\r\n                    <input type=\"text\" formControlName='nombre' name=\"nombre\" required>\r\n                    \r\n                    <div class='text-danger p-1' *ngIf=\"controles.get('nombre')?.touched && controles.get('nombre')?.errors?.required\">\r\n                        Ingrese su nombre\r\n                    </div>\r\n                    <div class='text-danger p-1' *ngIf=\"controles.get('nombre')?.touched && controles.get('nombre')?.errors?.minlength\">\r\n                        Ingrese un nombre validow\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <label for=\"password\"><b>Apellido</b></label>\r\n                    <input type=\"text\" formControlName='apellido' name=\"apellido\" required>\r\n                    \r\n                    <div class='text-danger p-1' *ngIf=\"controles.get('apellido')?.touched && controles.get('apellido')?.errors?.required\">\r\n                        Ingrese su apellido\r\n                    </div>\r\n                    <div class='text-danger p-1' *ngIf=\"controles.get('apellido')?.touched && controles.get('apellido')?.errors?.minlength\">\r\n                        Ingrese un apellido valido\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <ion-item>\r\n                        <ion-label>Puesto:</ion-label>\r\n                        <ion-select formControlName=\"tipo\" mode=\"ios\" interface=\"popover\" placeholder=\"\">\r\n                          <ion-select-option value=\"metre\">Metre</ion-select-option>\r\n                          <ion-select-option value=\"mozo\">Mozo</ion-select-option>\r\n                          <ion-select-option value=\"cocinero\">Cocinero</ion-select-option>\r\n                          <ion-select-option value=\"bartender\">Bartender</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </div>   \r\n                <div class=\"col-12\">\r\n                    <label for=\"password\"><b>DNI</b></label>\r\n                    <div class=\"d-flex aling-items-center\">\r\n                        <input class='d-inline' type=\"number\" formControlName='dni' name=\"dni\" required style=\"width: 85%;\">\r\n                        <i class=\"fas fa-qrcode pt-3 ps-2\" (click)=\"this.scanDNI()\" style=\"font-size: 32px;\"></i>\r\n                    </div>\r\n                    \r\n                    <div class='text-danger p-1' *ngIf=\"controles.get('dni')?.touched && controles.get('dni')?.errors?.required\">\r\n                        Ingrese su dni\r\n                    </div>\r\n                    <div class='text-danger p-1' *ngIf=\"controles.get('dni')?.touched && controles.get('dni')?.errors?.minlength\">\r\n                        Ingrese un dni valido\r\n                    </div>\r\n                </div>           \r\n                <div class=\"col-12\">\r\n                  <label for=\"cuil\"><b>CUIL</b></label>\r\n                  <input type=\"number\" formControlName='cuil' name=\"cuil\" required>\r\n                  \r\n                  <div class='text-danger p-1' *ngIf=\"controles.get('cuil')?.touched && controles.get('cuil')?.errors?.required\">\r\n                      Ingrese su CUIL\r\n                  </div>\r\n                  <div class='text-danger p-1' *ngIf=\"controles.get('cuil')?.touched && controles.get('cuil')?.errors?.minlength\">\r\n                      Ingrese un CUIL válido\r\n                  </div>\r\n                </div>    \r\n              </div>        \r\n              <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                      <button type=\"submit\" [disabled]='controles.invalid' class=\"btn\">Registrar</button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </form>\r\n  </div>\r\n  </ion-content>\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro-empleado_registro-empleado_module_ts.js.map