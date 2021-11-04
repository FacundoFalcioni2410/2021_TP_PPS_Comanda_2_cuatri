(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mail.service */ 65585);
/* harmony import */ var sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.js */ 90110);









let LoginPage = class LoginPage {
    constructor(auth, formBuilder, router, mailS) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.mailS = mailS;
        this.logo = "../../../assets/restaurant.png";
        this.form = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]]
        });
    }
    ngOnInit() {
    }
    accesoRapidoCliente() {
        this.form.controls.email.setValue('cliente@cliente.com');
        this.form.controls.password.setValue('clientecliente');
        this.login();
    }
    accesoRapidoMetre() {
        this.form.controls.email.setValue('empleado2@empleado.com');
        this.form.controls.password.setValue('empleado');
        this.login();
    }
    accesoRapidoCocinero() {
        this.form.controls.email.setValue('cocinero@cocinero.com');
        this.form.controls.password.setValue('cocinero');
        this.login();
    }
    accesoRapidoMozo() {
        this.form.controls.email.setValue('mozo@mozo.com');
        this.form.controls.password.setValue('mozomozo');
        this.login();
    }
    accesoRapidoBartender() {
        this.form.controls.email.setValue('bartender@bartender.com');
        this.form.controls.password.setValue('bartender');
        this.login();
    }
    accesoRapidoSupervisor() {
        this.form.controls.email.setValue('supervisor@supervisor.com');
        this.form.controls.password.setValue('12345678');
        this.login();
    }
    login() {
        this.logo = "../../../assets/spinner.gif";
        this.auth.login(this.form.value)
            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let user = yield this.auth.getUsers(res.user.email);
            if (user) {
                if (!(user === null || user === void 0 ? void 0 : user.cuil) && !(user === null || user === void 0 ? void 0 : user.habilitado)) {
                    this.mostrarToast({ text: 'Su cuenta todavia no fue habilitada, revise su correo electronico', toast: true, position: 'bottom', timer: 2500, timerProgressBar: true, icon: 'error' });
                }
                else if (!(user === null || user === void 0 ? void 0 : user.cuil) && (user === null || user === void 0 ? void 0 : user.habilitado)) {
                    this.mostrarToast({ text: 'Datos correctos', toast: true, position: 'bottom', timer: 1500, timerProgressBar: true, icon: 'success' });
                    setTimeout(() => {
                        this.logo = "../../../assets/restaurant.png";
                        this.router.navigate(['/ingreso-local']);
                    }, 1500);
                }
                else if (user.tipo) {
                    this.mostrarToast({ text: 'Datos correctos', toast: true, position: 'bottom', timer: 1500, timerProgressBar: true, icon: 'success' });
                    if (user.tipo == 'bartender') {
                        this.router.navigate(['/lista-bartender']);
                    }
                    else if (user.tipo == 'metre') {
                        this.router.navigate(['/lista-espera']);
                    }
                    else if (user.tipo == 'mozo') {
                        this.router.navigate(['/listado-pedidos-mozo']);
                    }
                    else {
                        this.router.navigate(['/lista-cocinero']);
                    }
                }
                else {
                    this.router.navigate(['/lista-cliente-deshabilitados']);
                    this.mostrarToast({ text: 'Datos correctos', toast: true, position: 'bottom', timer: 1500, timerProgressBar: true, icon: 'success' });
                }
            }
            else {
                this.mostrarToast({ text: 'Datos incorrectos', toast: true, position: 'bottom', timer: 1500, timerProgressBar: true, icon: 'error' });
            }
            setTimeout(() => {
                this.logo = "../../../assets/restaurant.png";
            }, 1500);
        }))
            .catch(err => {
            this.mostrarToast({ text: 'Datos incorrectos', toast: true, position: 'bottom', timer: 1500, timerProgressBar: true, icon: 'error' });
            setTimeout(() => {
                this.logo = "../../../assets/restaurant.png";
            }, 1500);
        });
    }
    mostrarToast(options) {
        sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__.default.fire(options);
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_mail_service__WEBPACK_IMPORTED_MODULE_3__.MailService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 28781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap\");\nbody {\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  background-color: #f7f7f7;\n}\n* {\n  box-sizing: border-box;\n}\nion-content {\n  --background: url('background.jpg') 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed !important;\n}\n/* Add padding to container elements */\n.containerForm {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  width: 800px;\n  min-width: 300px;\n  left: 50%;\n  top: 120%;\n  margin: 15% auto;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #120711b3 !important;\n  background: white;\n  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);\n}\n/* Full-width input fields */\ninput[type=text], input[type=password], input[type=number] {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  background: #232323;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\nselect {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  background: #f7f7f7;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\ninput[type=text]:focus, input[type=password]:focus, input[type=number]:focus, select:focus {\n  background-color: #6565bf;\n  outline: none;\n}\n.error-text {\n  font-size: 14px;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #0eb7f4;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  font-size: 16px;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  border-radius: 10px;\n}\nbutton:hover {\n  opacity: 1;\n}\n/* Change styles for signup button on extra small screens */\n@media screen and (max-width: 910px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 500px;\n  }\n}\n@media screen and (max-width: 510px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxzRkFBQTtBQUVSO0VBQ0UscURBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUE7RUFBRyxzQkFBQTtBQUVIO0FBQUE7RUFDRSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7QUFHRjtBQUFBLHNDQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtFQUdBLGlEQUFBO0FBR0o7QUFBQSw0QkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtBQUlGO0FBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFHRjtBQUVBO0VBQ0UsZUFBQTtBQUNGO0FBRUEsZ0NBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFDRSxVQUFBO0FBQ0Y7QUFFQSwyREFBQTtBQUNBO0VBQ0U7SUFDRyxXQUFBO0VBQ0g7O0VBRUE7SUFDSSxZQUFBO0VBQ0o7QUFDRjtBQUVBO0VBQ0k7SUFDRyxXQUFBO0VBQUw7O0VBR0U7SUFDSSxZQUFBO0VBQU47QUFDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O1xyXG59XHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQuanBnJykgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVyIGVsZW1lbnRzICovXHJcbi5jb250YWluZXJGb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDEyMCU7XHJcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMDcxMWIzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMXB4IDIxcHggLTlweCByZ2JhKDAsMCwwLDAuMzgpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMXB4IDIxcHggLTlweCByZ2JhKDAsMCwwLDAuMzgpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxuICB9XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMsIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxMDEsIDE5MSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4uZXJyb3ItdGV4dHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWI3ZjQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxMHB4KSB7XHJcbiAgLnNpZ251cGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJGb3Jte1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTBweCkge1xyXG4gICAgLnNpZ251cGJ0biB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRhaW5lckZvcm17XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ 31021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        \r\n        <ion-title>Iniciar sesión</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button menu=\"first\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"container\" style=\"max-height: 100vh !important;\">\r\n        <form [formGroup]='form' (ngSubmit)='this.login()'>\r\n            <div class=\"containerForm text-white\">\r\n                <img [src]=\"this.logo\" alt=\"\" height=\"100px\" width=\"100px\">\r\n                <h1>Ingreso</h1>\r\n                <h3>Ingrese sus datos:</h3>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <ion-item>\r\n                            <ion-label class=\"ms-1\" position=\"floating\" for=\"email\"><b>Email</b></ion-label>\r\n                            <ion-input type=\"text\" class=\"\" formControlName='email' name=\"email\" required></ion-input>\r\n                        </ion-item>\r\n\r\n                        <div class='text-light px-1 error-text m-0'\r\n                            *ngIf=\"form.get('email')?.touched && form.get('email')?.errors?.required\">\r\n                            Ingrese su email\r\n                        </div>\r\n                        <div class='text-light px-1 error-text m-0'\r\n                            *ngIf=\"form.get('email')?.touched && form.get('email')?.errors?.email\">\r\n                            Ingrese un email valido\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <ion-item>\r\n                            <ion-label class=\"ms-1\" position=\"floating\" for=\"password\"><b>Contraseña</b></ion-label>\r\n                            <ion-input type=\"password\" class=\"\" formControlName='password' name=\"password\" required>\r\n                            </ion-input>\r\n                        </ion-item>\r\n\r\n                        <div class='text-light px-1 error-text'\r\n                            *ngIf=\"form.get('password')?.touched && form.get('password')?.errors?.required\">\r\n                            Ingrese su contraseña\r\n                        </div>\r\n                        <div class='text-light px-1 error-text'\r\n                            *ngIf=\"form.get('password')?.touched && form.get('password')?.errors?.minlength\">\r\n                            La contraseña debe tener 8 caracteres o mas\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <ion-row>\r\n                            <ion-col size='12'>\r\n                                <ion-button type=\"submit\" [disabled]=\"form.invalid\" class=\"mt-2\" color=\"success\"\r\n                                    style=\"font-size:12px;\" fill=\"solid\" expand=\"block\">Ingresar</ion-button>\r\n                            </ion-col>\r\n                            <ion-col size='12'>\r\n                                <ion-button type=\"button\" class=\"mt-2\" color=\"success\"\r\n                                    style=\"font-size:12px;\" fill=\"solid\" expand=\"block\" [routerLink]=\"['/registro-cliente']\">Registrarse</ion-button>\r\n                            </ion-col>\r\n                            <ion-col size='4'>\r\n                                <ion-button type=\"button\" class=\"mt-2 text-light\" color=\"primary\" fill=\"solid\" expand=\"block\"\r\n                                    style=\"font-size:12px;\" (click)=\"accesoRapidoCliente()\">\r\n                                    Cliente</ion-button>\r\n                            </ion-col>\r\n                            <ion-col size='4'>\r\n                                <ion-button type=\"button\" class=\"mt-2 text-light\" color=\"primary\" fill=\"solid\" expand=\"block\"\r\n                                    style=\"font-size:12px;\" (click)=\"accesoRapidoMetre()\">Metre\r\n                                </ion-button>\r\n                            </ion-col>\r\n                            <ion-col size='4'>\r\n                                <ion-button type=\"button\" class=\"mt-2 text-light\" color=\"primary\" fill=\"solid\" expand=\"block\"\r\n                                    style=\"font-size:12px;\" (click)=\"accesoRapidoSupervisor()\">\r\n                                    Dueño</ion-button>\r\n                            </ion-col>\r\n                            <ion-col size='4'>\r\n                                <ion-button type=\"button\" class=\"mt-2 text-light\" color=\"primary\" fill=\"solid\" expand=\"block\"\r\n                                    style=\"font-size:12px;\" (click)=\"accesoRapidoMozo()\">Mozo\r\n                                </ion-button>\r\n                            </ion-col>\r\n                            <ion-col size='4'>\r\n                                <ion-button type=\"button\" class=\"mt-2 text-light\" color=\"primary\" fill=\"solid\" expand=\"block\"\r\n                                    style=\"font-size:12px;\" (click)=\"accesoRapidoCocinero()\">\r\n                                    Cocinero</ion-button>\r\n                            </ion-col>\r\n                            <ion-col size='4'>\r\n                                <ion-button type=\"button\" class=\"mt-2 text-light\" color=\"primary\" fill=\"solid\" expand=\"block\"\r\n                                    style=\"font-size:10px;\" (click)=\"accesoRapidoBartender()\">\r\n                                    Bartender</ion-button>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map