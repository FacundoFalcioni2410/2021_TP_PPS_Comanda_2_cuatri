(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_registro_registro-mesa_registro-mesa_module_ts"],{

/***/ 94132:
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spinner.component.html */ 50593);
/* harmony import */ var _spinner_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.component.scss */ 91799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let SpinnerComponent = class SpinnerComponent {
    constructor() { }
    ngOnInit() { }
};
SpinnerComponent.ctorParameters = () => [];
SpinnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-spinner',
        template: _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spinner_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpinnerComponent);



/***/ }),

/***/ 35082:
/*!*****************************************************!*\
  !*** ./src/app/components/timer/timer.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerComponent": () => (/* binding */ TimerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_timer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./timer.component.html */ 56464);
/* harmony import */ var _timer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.component.scss */ 60524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let TimerComponent = class TimerComponent {
    constructor() {
        this.minutos = 0;
        this.terminado = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        setTimeout(() => {
            this.resetTimer();
            setInterval(() => this.tick(), 1000);
        }, 200);
    }
    ngOnInit() {
    }
    resetTimer() {
        this.isPaused = false;
        this.minutos = this.minutos;
        this.segundos = this.segundos;
    }
    tick() {
        if (!this.isPaused) {
            if (--this.segundos < 0) {
                this.isPaused = true;
                this.terminado.emit(true);
            }
            // if(this.minutos === 0 && this.segundos === 0)
            // {
            //   this.isPaused = true;
            //   this.terminado.emit(true);
            // }
        }
    }
};
TimerComponent.ctorParameters = () => [];
TimerComponent.propDecorators = {
    minutos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    segundos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    terminado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
TimerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-timer',
        template: _raw_loader_timer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_timer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TimerComponent);



/***/ }),

/***/ 344:
/*!******************************************************************************!*\
  !*** ./src/app/pages/registro/registro-mesa/registro-mesa-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroMesaPageRoutingModule": () => (/* binding */ RegistroMesaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _registro_mesa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-mesa.page */ 37044);




const routes = [
    {
        path: '',
        component: _registro_mesa_page__WEBPACK_IMPORTED_MODULE_0__.RegistroMesaPage
    }
];
let RegistroMesaPageRoutingModule = class RegistroMesaPageRoutingModule {
};
RegistroMesaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroMesaPageRoutingModule);



/***/ }),

/***/ 37942:
/*!**********************************************************************!*\
  !*** ./src/app/pages/registro/registro-mesa/registro-mesa.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroMesaPageModule": () => (/* binding */ RegistroMesaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _registro_mesa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-mesa-routing.module */ 344);
/* harmony import */ var _registro_mesa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-mesa.page */ 37044);
/* harmony import */ var src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sharedComponents/shared/shared.module */ 44029);








let RegistroMesaPageModule = class RegistroMesaPageModule {
};
RegistroMesaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _registro_mesa_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroMesaPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ],
        declarations: [_registro_mesa_page__WEBPACK_IMPORTED_MODULE_1__.RegistroMesaPage]
    })
], RegistroMesaPageModule);



/***/ }),

/***/ 37044:
/*!********************************************************************!*\
  !*** ./src/app/pages/registro/registro-mesa/registro-mesa.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroMesaPage": () => (/* binding */ RegistroMesaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_registro_mesa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro-mesa.page.html */ 57606);
/* harmony import */ var _registro_mesa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-mesa.page.scss */ 95667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fotos.service */ 21106);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);








let RegistroMesaPage = class RegistroMesaPage {
    constructor(form, auth, fotoS) {
        this.form = form;
        this.auth = auth;
        this.fotoS = fotoS;
        this.controles = this.form.group({
            'numero': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            'cantidadComensales': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            'tipo': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
        });
    }
    ngOnInit() {
    }
    getNumero() {
        var _a;
        return (_a = this.controles.get('numero')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getCantidadComensales() {
        var _a;
        return (_a = this.controles.get('cantidadComensales')) === null || _a === void 0 ? void 0 : _a.value;
    }
    getTipo() {
        var _a;
        return (_a = this.controles.get('tipo')) === null || _a === void 0 ? void 0 : _a.value;
    }
    RegistrarMesa() {
        let mesa = {
            numero: this.getNumero(),
            cantidadComensales: this.getCantidadComensales(),
            mesaTipo: this.getTipo(),
            cliente: false
        };
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({ text: 'Debe sacarse una foto para completar el registro', toast: true, position: 'bottom', timer: 2000, timerProgressBar: true, icon: 'info' });
        setTimeout(() => {
            this.fotoS.TakePhoto(mesa);
        }, 2000);
        this.controles.reset();
    }
};
RegistroMesaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_3__.FotosService }
];
RegistroMesaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registro-mesa',
        template: _raw_loader_registro_mesa_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_mesa_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroMesaPage);



/***/ }),

/***/ 44029:
/*!**********************************************************!*\
  !*** ./src/app/sharedComponents/shared/shared.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/spinner/spinner.component */ 94132);
/* harmony import */ var src_app_components_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/timer/timer.component */ 35082);





let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            src_app_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent,
            src_app_components_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__.TimerComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        ],
        exports: [
            src_app_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent,
            src_app_components_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__.TimerComponent,
        ]
    })
], SharedModule);



/***/ }),

/***/ 91799:
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 60524:
/*!*******************************************************!*\
  !*** ./src/app/components/timer/timer.component.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 95667:
/*!**********************************************************************!*\
  !*** ./src/app/pages/registro/registro-mesa/registro-mesa.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap\");\nbody {\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  background-color: #f7f7f7;\n}\n* {\n  box-sizing: border-box;\n}\nion-content {\n  --background: url('fotoRegistro.jpg') 20%;\n  background-repeat: no-repeat;\n  background-attachment: fixed !important;\n}\n/* Add padding to container elements */\n.containerForm {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  width: 800px;\n  min-width: 300px;\n  left: 50%;\n  top: 120%;\n  margin: 8% auto;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #120711b3 !important;\n  background: white;\n  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);\n}\n/* Full-width input fields */\ninput[type=text], input[type=password], input[type=number] {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  background: #232323;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\nselect {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  background: #f7f7f7;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\ninput[type=text]:focus, input[type=password]:focus, input[type=number]:focus, select:focus {\n  background-color: #6565bf;\n  outline: none;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #0eb7f4;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  font-size: 16px;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  border-radius: 10px;\n}\nbutton:hover {\n  opacity: 1;\n}\n/* Change styles for signup button on extra small screens */\n@media screen and (max-width: 910px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 500px;\n  }\n}\n@media screen and (max-width: 510px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLW1lc2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHNGQUFBO0FBRVI7RUFDRSxxREFBQTtFQUNBLHlCQUFBO0FBQUY7QUFFQTtFQUFHLHNCQUFBO0FBRUg7QUFBQTtFQUNFLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSx1Q0FBQTtBQUdGO0FBQUEsc0NBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFHQSxpREFBQTtBQUdGO0FBQ0EsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0FBRUY7QUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFHRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBRUY7QUFHQSxnQ0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0FBQUY7QUFHQTtFQUNFLFVBQUE7QUFBRjtBQUdBLDJEQUFBO0FBQ0E7RUFDRTtJQUNHLFdBQUE7RUFBSDs7RUFHQTtJQUNJLFlBQUE7RUFBSjtBQUNGO0FBR0E7RUFDRTtJQUNHLFdBQUE7RUFESDs7RUFJQTtJQUNJLFlBQUE7RUFESjtBQUNGIiwiZmlsZSI6InJlZ2lzdHJvLW1lc2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztcclxufVxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9mb3RvUmVnaXN0cm8uanBnJykgMjAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lckZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMTIwJTtcclxuICBtYXJnaW46IDglIGF1dG87XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIwNzExYjMgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDJweCAxcHggMjFweCAtOXB4IHJnYmEoMCwwLDAsMC4zOCk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxufVxyXG5cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cywgaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDEwMSwgMTkxKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWI3ZjQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc2lnbnVwIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxMHB4KSB7XHJcbiAgLnNpZ251cGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJGb3Jte1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTBweCkge1xyXG4gIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyRm9ybXtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 50593:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spinner/spinner.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\r\n  <img src=\"../../../assets/spinner.gif\" alt=\"\" class=\"d-block m-auto\" height=\"100px\" width=\"100px\">\r\n</div>");

/***/ }),

/***/ 56464:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/timer/timer.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"text-center\">\r\n  <h1 class=\"d-inline\"> {{ minutos | number: '2.0' }}:{{ segundos | number: '2.0' }} </h1>\r\n</div>");

/***/ }),

/***/ 57606:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro-mesa/registro-mesa.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n      <ion-title>Agregar mesa</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n          <ion-menu-button menu=\"first\" style=\"font-size:14px;\">Menu</ion-menu-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  <ion-content>\r\n    <div class=\"container\" style=\"max-height: 100vh !important;\" >\r\n\r\n      \r\n      <form [formGroup]='controles' (ngSubmit)='RegistrarMesa()'>\r\n          <div class=\"containerForm bg-dark text-white\">\r\n\r\n              <h3>Ingrese los datos de la mesa:</h3>\r\n              <!-- Se cargará el nombre, la descripción, el tiempo (promedio) de elavoración y el precio -->\r\n              <div class=\"row\">\r\n                 <div class=\"col-12\">\r\n                      <label for=\"nombre\"><b>Número de la mesa</b></label>\r\n                      <input type=\"number\" formControlName='numero' name=\"numero\" required>\r\n                      \r\n                      <div class='text-light p-1 m-0' *ngIf=\"controles.get('numero')?.touched && controles.get('numero')?.errors?.required\">\r\n                          Ingrese el número de la mesa\r\n                      </div>\r\n                      <div class='text-light p-1 m-0' *ngIf=\"controles.get('numero')?.touched && controles.get('numero')?.errors?.minlength\">\r\n                        Ingrese un número válido.\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                        <label for=\"cantidadComensales\"><b>Cantidad de comensales</b></label>\r\n                        <input type=\"number\" formControlName='cantidadComensales' name=\"cantidadComensales\" required>\r\n                        \r\n                        <div class='text-light p-1' *ngIf=\"controles.get('cantidadComensales')?.touched && controles.get('cantidadComensales')?.errors?.required\">\r\n                            Ingrese la cantidad de comensales.\r\n                        </div>\r\n                        <div class='text-light p-1' *ngIf=\"controles.get('cantidadComensales')?.touched && controles.get('cantidadComensales')?.errors?.minlength\">\r\n                            Ingrese una cantidad de comensales valida.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 mt-3\">\r\n                      <ion-item>\r\n                          <ion-label>Tipo de mesa:</ion-label>\r\n                          <ion-select formControlName=\"tipo\" mode=\"ios\" interface=\"popover\" placeholder=\"\">\r\n                            <ion-select-option value=\"estandar\">Estándar</ion-select-option>\r\n                            <ion-select-option value=\"VIP\">VIP</ion-select-option>\r\n                            <ion-select-option value=\"discapacitados\">Discapacitados</ion-select-option>\r\n                          </ion-select>\r\n                      </ion-item>\r\n                  </div>\r\n              </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                          <button type=\"submit\" [disabled]='controles.invalid' class=\"btn\">Registrar mesa</button>\r\n                      </div>\r\n                  </div>\r\n         \r\n         </div>\r\n      </form>\r\n    </div>\r\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro-mesa_registro-mesa_module_ts.js.map