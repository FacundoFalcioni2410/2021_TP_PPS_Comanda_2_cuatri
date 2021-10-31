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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.js */ 90110);








let LoginPage = class LoginPage {
    constructor(auth, formBuilder, router) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.logo = "../../../assets/restaurant.png";
        this.form = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)]]
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
    accesoRapidoSupervisor() {
        this.form.controls.email.setValue('supervisor@supervisor.com');
        this.form.controls.password.setValue('12345678');
        this.login();
    }
    login() {
        this.logo = "../../../assets/spinner.gif";
        this.auth.login(this.form.value)
            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(res);
            let user = yield this.auth.getUsers(res.user.email);
            console.log(user);
            if (user) {
                if (!(user === null || user === void 0 ? void 0 : user.cuil) && !(user === null || user === void 0 ? void 0 : user.habilitado)) {
                    this.mostrarToast({ text: 'Debe aguardar a que su cuenta sea aceptada para ingresar', toast: true, position: 'bottom', timer: 2500, timerProgressBar: true, icon: 'error' });
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
                    this.router.navigate(['/lista-espera']);
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
        sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__.default.fire(options);
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap\");\nbody {\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  background-color: #f7f7f7;\n}\n* {\n  box-sizing: border-box;\n}\n/* Add padding to container elements */\n.containerForm {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  width: 800px;\n  min-width: 300px;\n  left: 50%;\n  top: 120%;\n  margin: 1% auto;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #120711 !important;\n  background: white;\n  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);\n}\n/* Full-width input fields */\ninput[type=text], input[type=password], input[type=number] {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  background: #232323;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\nselect {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  background: #f7f7f7;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\ninput[type=text]:focus, input[type=password]:focus, input[type=number]:focus, select:focus {\n  background-color: #6565bf;\n  outline: none;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #0eb7f4;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  font-size: 16px;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  border-radius: 10px;\n}\nbutton:hover {\n  opacity: 1;\n}\n/* Change styles for signup button on extra small screens */\n@media screen and (max-width: 910px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 500px;\n  }\n}\n@media screen and (max-width: 510px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 250px;\n    height: 600px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxzRkFBQTtBQUVSO0VBQ0UscURBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUE7RUFBRyxzQkFBQTtBQUVIO0FBQUEsc0NBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFHQSxpREFBQTtBQUdKO0FBQUEsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0FBR0Y7QUFEQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFJRjtBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBR0Y7QUFFQSxnQ0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLFVBQUE7QUFDRjtBQUVBLDJEQUFBO0FBQ0E7RUFDRTtJQUNHLFdBQUE7RUFDSDs7RUFFQTtJQUNJLFlBQUE7RUFDSjtBQUNGO0FBRUE7RUFDSTtJQUNHLFdBQUE7RUFBTDs7RUFHRTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBQU47QUFDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O1xyXG59XHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lckZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMTIwJTtcclxuICAgIG1hcmdpbjogMSUgYXV0bztcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjA3MTEgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAxcHggMjFweCAtOXB4IHJnYmEoMCwwLDAsMC4zOCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCAxcHggMjFweCAtOXB4IHJnYmEoMCwwLDAsMC4zOCk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMXB4IDIxcHggLTlweCByZ2JhKDAsMCwwLDAuMzgpO1xyXG4gIH1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cywgaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDEwMSwgMTkxKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWI3ZjQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxMHB4KSB7XHJcbiAgLnNpZ251cGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJGb3Jte1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTBweCkge1xyXG4gICAgLnNpZ251cGJ0biB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRhaW5lckZvcm17XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\" style=\"max-height: 100vh !important;\" >\r\n    <form [formGroup]='form' (ngSubmit)='this.login()'>\r\n        <div class=\"containerForm text-white\">\r\n            <img [src]=\"this.logo\" alt=\"\" height=\"150px\" width=\"150px\">\r\n            <h1>Ingreso</h1>\r\n            <h3>Ingrese sus datos:</h3>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <ion-item>\r\n                        <ion-label class=\"ms-1\" position=\"floating\" for=\"email\"><b>Email</b></ion-label>\r\n                        <ion-input type=\"text\" class=\"\" formControlName='email' name=\"email\" required></ion-input>\r\n                    </ion-item>\r\n                    \r\n                    <div class='text-danger p-1 m-0' *ngIf=\"form.get('email')?.touched && form.get('email')?.errors?.required\">\r\n                        Ingrese su email\r\n                    </div>\r\n                    <div class='text-danger p-1 m-0' *ngIf=\"form.get('email')?.touched && form.get('email')?.errors?.email\">\r\n                        Ingrese un email valido\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <ion-item>\r\n                        <ion-label class=\"ms-1\" position=\"floating\" for=\"password\"><b>Contraseña</b></ion-label>\r\n                        <ion-input type=\"password\" class=\"\" formControlName='password' name=\"password\" required></ion-input>\r\n                    </ion-item>\r\n                    \r\n                    <div class='text-danger p-1' *ngIf=\"form.get('password')?.touched && form.get('password')?.errors?.required\">\r\n                        Ingrese su contraseña\r\n                    </div>\r\n                    <div class='text-danger p-1' *ngIf=\"form.get('password')?.touched && form.get('password')?.errors?.minlength\">\r\n                        La contraseña debe tener 8 caracteres o mas\r\n                    </div>\r\n                </div>\r\n            </div>        \r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <ion-button type=\"submit\" [disabled]=\"form.invalid\" class=\"mt-3\" color=\"secondary\" fill=\"solid\" expand=\"block\">Ingresar</ion-button>\r\n                    <ion-button type=\"button\" class=\"mt-3\" color=\"secondary\" fill=\"solid\" expand=\"block\" (click)=\"accesoRapidoCliente()\">Cliente</ion-button>\r\n                    <ion-button type=\"button\" class=\"mt-3\" color=\"secondary\" fill=\"solid\" expand=\"block\" (click)=\"accesoRapidoMetre()\">Metre</ion-button>\r\n                    <ion-button type=\"button\" class=\"mt-3\" color=\"secondary\" fill=\"solid\" expand=\"block\" (click)=\"accesoRapidoSupervisor()\">Dueño</ion-button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map