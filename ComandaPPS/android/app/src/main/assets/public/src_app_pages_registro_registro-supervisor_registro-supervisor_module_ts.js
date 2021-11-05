(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_registro_registro-supervisor_registro-supervisor_module_ts"],{

/***/ 38005:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/registro/registro-supervisor/registro-supervisor-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroSupervisorPageRoutingModule": () => (/* binding */ RegistroSupervisorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _registro_supervisor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-supervisor.page */ 21378);




const routes = [
    {
        path: '',
        component: _registro_supervisor_page__WEBPACK_IMPORTED_MODULE_0__.RegistroSupervisorPage
    }
];
let RegistroSupervisorPageRoutingModule = class RegistroSupervisorPageRoutingModule {
};
RegistroSupervisorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroSupervisorPageRoutingModule);



/***/ }),

/***/ 1912:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/registro/registro-supervisor/registro-supervisor.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroSupervisorPageModule": () => (/* binding */ RegistroSupervisorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _registro_supervisor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-supervisor-routing.module */ 38005);
/* harmony import */ var _registro_supervisor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-supervisor.page */ 21378);
/* harmony import */ var src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sharedComponents/shared/shared.module */ 44029);








let RegistroSupervisorPageModule = class RegistroSupervisorPageModule {
};
RegistroSupervisorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _registro_supervisor_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroSupervisorPageRoutingModule,
            src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_registro_supervisor_page__WEBPACK_IMPORTED_MODULE_1__.RegistroSupervisorPage]
    })
], RegistroSupervisorPageModule);



/***/ }),

/***/ 21378:
/*!********************************************************************************!*\
  !*** ./src/app/pages/registro/registro-supervisor/registro-supervisor.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroSupervisorPage": () => (/* binding */ RegistroSupervisorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_registro_supervisor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro-supervisor.page.html */ 2202);
/* harmony import */ var _registro_supervisor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-supervisor.page.scss */ 27606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 94333);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firestore.service */ 91343);
/* harmony import */ var src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fotos.service */ 21106);
/* harmony import */ var src_app_services_qr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/qr.service */ 52724);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);











let RegistroSupervisorPage = class RegistroSupervisorPage {
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
            perfil: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
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
    getPerfil() {
        var _a;
        return (_a = this.controles.get('perfil')) === null || _a === void 0 ? void 0 : _a.value;
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
        let supervisor = {
            nombre: this.getNombre(),
            apellido: this.getApellido(),
            dni: this.getDni(),
            cuil: this.getCuil(),
            perfil: this.getPerfil(),
            email: this.getEmail(),
            password: this.getPassword()
        };
        this.authService.registro(supervisor)
            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.fotoS.loading = true;
            supervisor.uid = res.user.uid;
            this.authService.usuarioActual = supervisor;
            this.mostrarToast({ text: 'Sáquese una foto para completar el registro (opcional, puede hacerlo después)', toast: true, position: 'bottom', timer: 2000, timerProgressBar: true, icon: 'info' });
            setTimeout(() => {
                this.fotoS.TakePhoto(supervisor);
            }, 1500);
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
RegistroSupervisorPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_5__.FotosService },
    { type: src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration },
    { type: src_app_services_qr_service__WEBPACK_IMPORTED_MODULE_6__.QRService }
];
RegistroSupervisorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-registro-supervisor',
        template: _raw_loader_registro_supervisor_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_supervisor_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroSupervisorPage);



/***/ }),

/***/ 27606:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/registro/registro-supervisor/registro-supervisor.page.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap\");\nbody {\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  background-color: #f7f7f7;\n}\n* {\n  box-sizing: border-box;\n}\nion-content {\n  --background: url('fotoRegistro.jpg') 20%;\n  background-repeat: no-repeat;\n  background-attachment: fixed !important;\n}\n/* Add padding to container elements */\n.containerForm {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  width: 800px;\n  min-width: 300px;\n  left: 50%;\n  top: 120%;\n  margin: 8% auto;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #120711b3 !important;\n  background: white;\n  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);\n}\n/* Full-width input fields */\ninput[type=text], input[type=password], input[type=number] {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  background: #232323;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\nselect {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  background: #f7f7f7;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\ninput[type=text]:focus, input[type=password]:focus, input[type=number]:focus, select:focus {\n  background-color: #6565bf;\n  outline: none;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #0eb7f4;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  font-size: 16px;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  border-radius: 10px;\n}\nbutton:hover {\n  opacity: 1;\n}\n/* Change styles for signup button on extra small screens */\n@media screen and (max-width: 910px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 500px;\n  }\n}\n@media screen and (max-width: 510px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLXN1cGVydmlzb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHNGQUFBO0FBRVI7RUFDRSxxREFBQTtFQUNBLHlCQUFBO0FBQUY7QUFFQTtFQUFHLHNCQUFBO0FBRUg7QUFBQTtFQUNFLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSx1Q0FBQTtBQUdGO0FBQUEsc0NBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFHQSxpREFBQTtBQUdGO0FBQ0EsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0FBRUY7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFFRjtBQUVBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFJQSxnQ0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0FBREY7QUFJQTtFQUNFLFVBQUE7QUFERjtBQUlBLDJEQUFBO0FBQ0E7RUFDRTtJQUNHLFdBQUE7RUFESDs7RUFJQTtJQUNJLFlBQUE7RUFESjtBQUNGO0FBSUE7RUFDRTtJQUNHLFdBQUE7RUFGSDs7RUFLQTtJQUNJLFlBQUE7RUFGSjtBQUNGIiwiZmlsZSI6InJlZ2lzdHJvLXN1cGVydmlzb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztcclxufVxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9mb3RvUmVnaXN0cm8uanBnJykgMjAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lckZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMTIwJTtcclxuICBtYXJnaW46IDglIGF1dG87XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIwNzExYjMgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDJweCAxcHggMjFweCAtOXB4IHJnYmEoMCwwLDAsMC4zOCk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxufVxyXG5cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMsIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxMDEsIDE5MSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViN2Y0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBmb250LXNpemU6MTZweDtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MTBweCkge1xyXG4gIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyRm9ybXtcclxuICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEwcHgpIHtcclxuICAuc2lnbnVwYnRuIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lckZvcm17XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 2202:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro-supervisor/registro-supervisor.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Registro de dueño</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button menu=\"first\" style=\"font-size:14px;\">Menu</ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n  <ion-content>\r\n    <div class=\"container\" style=\"max-height: 100vh !important;\" >\r\n        <div *ngIf=\"this.fotoS.loading\">\r\n            <app-spinner></app-spinner>\r\n        </div>\r\n      \r\n      <form [formGroup]='controles' (ngSubmit)='RegistrarEmpleado()'>\r\n          <div class=\"containerForm bg-dark text-white\">\r\n\r\n              <h3>Ingrese sus datos:</h3>\r\n  \r\n              <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                      <label for=\"email\"><b>Email</b></label>\r\n                      <input type=\"text\" formControlName='email' name=\"email\" required>\r\n                      \r\n                      <div class='text-light p-1 m-0' *ngIf=\"controles.get('email')?.touched && controles.get('email')?.errors?.required\">\r\n                          Ingrese su email\r\n                      </div>\r\n                      <div class='text-light p-1 m-0' *ngIf=\"controles.get('email')?.touched && controles.get('email')?.errors?.email\">\r\n                          Ingrese un email valido\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                      <label for=\"password\"><b>Contraseña</b></label>\r\n                      <input type=\"password\" formControlName='password' name=\"password\" required>\r\n                      \r\n                      <div class='text-light p-1' *ngIf=\"controles.get('password')?.touched && controles.get('password')?.errors?.required\">\r\n                          Ingrese su contraseña\r\n                      </div>\r\n                      <div class='text-light p-1' *ngIf=\"controles.get('password')?.touched && controles.get('password')?.errors?.minlength\">\r\n                          La contraseña debe tener 8 caracteres o mas\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <label for=\"password\"><b>Nombre</b></label>\r\n                    <input type=\"text\" formControlName='nombre' name=\"nombre\" required>\r\n                    \r\n                    <div class='text-light p-1' *ngIf=\"controles.get('nombre')?.touched && controles.get('nombre')?.errors?.required\">\r\n                        Ingrese su nombre\r\n                    </div>\r\n                    <div class='text-light p-1' *ngIf=\"controles.get('nombre')?.touched && controles.get('nombre')?.errors?.minlength\">\r\n                        Ingrese un nombre validow\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <label for=\"password\"><b>Apellido</b></label>\r\n                    <input type=\"text\" formControlName='apellido' name=\"apellido\" required>\r\n                    \r\n                    <div class='text-light p-1' *ngIf=\"controles.get('apellido')?.touched && controles.get('apellido')?.errors?.required\">\r\n                        Ingrese su apellido\r\n                    </div>\r\n                    <div class='text-light p-1' *ngIf=\"controles.get('apellido')?.touched && controles.get('apellido')?.errors?.minlength\">\r\n                        Ingrese un apellido valido\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <label for=\"password\" class=\"d-block\"><b>DNI</b></label>\r\n                    <div class=\"d-flex aling-items-center\">\r\n                        <input class='d-inline' type=\"number\" formControlName='dni' name=\"dni\" required style=\"width: 85%;\">\r\n                        <i class=\"fas fa-qrcode pt-3 ps-2\" (click)=\"this.scanDNI()\" style=\"font-size: 32px;\"></i>\r\n                    </div>\r\n                    \r\n                    <div class='text-light p-1' *ngIf=\"controles.get('dni')?.touched && controles.get('dni')?.errors?.required\">\r\n                        Ingrese su dni\r\n                    </div>\r\n                    <div class='text-light p-1' *ngIf=\"controles.get('dni')?.touched && controles.get('dni')?.errors?.minlength\">\r\n                        Ingrese un dni valido\r\n                    </div>\r\n                </div>           \r\n                <div class=\"col-12\">\r\n                  <label for=\"cuil\"><b>CUIL</b></label>\r\n                  <input type=\"number\" formControlName='cuil' name=\"cuil\" required>\r\n                  \r\n                  <div class='text-light p-1' *ngIf=\"controles.get('cuil')?.touched && controles.get('cuil')?.errors?.required\">\r\n                      Ingrese su CUIL\r\n                  </div>\r\n                  <div class='text-light p-1' *ngIf=\"controles.get('cuil')?.touched && controles.get('cuil')?.errors?.minlength\">\r\n                      Ingrese un CUIL válido\r\n                  </div>\r\n              </div>   \r\n                <div class=\"col-12 mt-3\">\r\n                    <ion-item>\r\n                        <ion-label>Perfil:</ion-label>\r\n                        <ion-select formControlName=\"perfil\" mode=\"ios\" interface=\"popover\" placeholder=\"\">\r\n                          <ion-select-option value=\"dueno\">Dueño</ion-select-option>\r\n                          <ion-select-option value=\"supervisor\">Supervisores</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </div>\r\n              </div>        \r\n              <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                      <button type=\"submit\" [disabled]='controles.invalid' class=\"btn\">Registrar</button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </form>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro-supervisor_registro-supervisor_module_ts.js.map