(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_registro_registro-mesa_registro-mesa_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registro_mesa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-mesa.page */ 7044);




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

/***/ 7942:
/*!**********************************************************************!*\
  !*** ./src/app/pages/registro/registro-mesa/registro-mesa.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroMesaPageModule": () => (/* binding */ RegistroMesaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registro_mesa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-mesa-routing.module */ 344);
/* harmony import */ var _registro_mesa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-mesa.page */ 7044);
/* harmony import */ var src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sharedComponents/shared/shared.module */ 4029);








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

/***/ 7044:
/*!********************************************************************!*\
  !*** ./src/app/pages/registro/registro-mesa/registro-mesa.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroMesaPage": () => (/* binding */ RegistroMesaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registro_mesa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro-mesa.page.html */ 7606);
/* harmony import */ var _registro_mesa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-mesa.page.scss */ 5667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);






let RegistroMesaPage = class RegistroMesaPage {
    constructor(form, auth) {
        this.form = form;
        this.auth = auth;
        this.controles = this.form.group({
            'numero': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            'cantidadComensales': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            'tipo': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]],
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
            tipo: this.getTipo(),
            //foto: aca va la foto
        };
        this.auth.AltaMesa(mesa);
        this.controles.reset();
    }
};
RegistroMesaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
RegistroMesaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-registro-mesa',
        template: _raw_loader_registro_mesa_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_mesa_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroMesaPage);



/***/ }),

/***/ 5667:
/*!**********************************************************************!*\
  !*** ./src/app/pages/registro/registro-mesa/registro-mesa.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap\");\nbody {\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  background-color: #f7f7f7;\n}\n* {\n  box-sizing: border-box;\n}\n/* Add padding to container elements */\n.containerForm {\n  padding: 20px;\n  width: 800px;\n  min-width: 300px;\n  left: 50%;\n  top: 120%;\n  margin: 1% auto;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background: white;\n  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);\n}\n/* Full-width input fields */\ninput[type=text], input[type=password], input[type=number] {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  background: #232323;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\nselect {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  background: #f7f7f7;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\ninput[type=text]:focus, input[type=password]:focus, input[type=number]:focus, select:focus {\n  background-color: #6565bf;\n  outline: none;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #0eb7f4;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  font-size: 16px;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  border-radius: 10px;\n}\nbutton:hover {\n  opacity: 1;\n}\n/* Change styles for signup button on extra small screens */\n@media screen and (max-width: 910px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 500px;\n  }\n}\n@media screen and (max-width: 510px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLW1lc2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHNGQUFBO0FBRVI7RUFDRSxxREFBQTtFQUNBLHlCQUFBO0FBQUY7QUFFQTtFQUFHLHNCQUFBO0FBRUg7QUFBQSxzQ0FBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUdBLGlEQUFBO0FBR0o7QUFBQSw0QkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtBQUlGO0FBQUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFHRjtBQUVBLGdDQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsVUFBQTtBQUNGO0FBRUEsMkRBQUE7QUFDQTtFQUNFO0lBQ0csV0FBQTtFQUNIOztFQUVBO0lBQ0ksWUFBQTtFQUNKO0FBQ0Y7QUFFQTtFQUNJO0lBQ0csV0FBQTtFQUFMOztFQUdFO0lBQ0ksWUFBQTtFQUFOO0FBQ0YiLCJmaWxlIjoicmVnaXN0cm8tbWVzYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O1xyXG59XHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lckZvcm0ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDEyMCU7XHJcbiAgICBtYXJnaW46IDElIGF1dG87XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMXB4IDIxcHggLTlweCByZ2JhKDAsMCwwLDAuMzgpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMXB4IDIxcHggLTlweCByZ2JhKDAsMCwwLDAuMzgpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxuICB9XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMsIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxMDEsIDE5MSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGViN2Y0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBmb250LXNpemU6MTZweDtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNpZ251cCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MTBweCkge1xyXG4gIC5zaWdudXBidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyRm9ybXtcclxuICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEwcHgpIHtcclxuICAgIC5zaWdudXBidG4ge1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXJGb3Jte1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 7606:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro-mesa/registro-mesa.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button>\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Registro de mesa</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n  <ion-content>\r\n    <div class=\"container\" style=\"max-height: 100vh !important;\" >\r\n\r\n      \r\n      <form [formGroup]='controles' (ngSubmit)='RegistrarMesa()'>\r\n          <div class=\"containerForm bg-dark text-white\">\r\n\r\n              <h3>Ingrese los datos de la mesa:</h3>\r\n              <!-- Se cargará el nombre, la descripción, el tiempo (promedio) de elavoración y el precio -->\r\n              <div class=\"row\">\r\n                 <div class=\"col-12\">\r\n                      <label for=\"nombre\"><b>Número de la mesa</b></label>\r\n                      <input type=\"number\" formControlName='numero' name=\"numero\" required>\r\n                      \r\n                      <div class='text-danger p-1 m-0' *ngIf=\"controles.get('numero')?.touched && controles.get('numero')?.errors?.required\">\r\n                          Ingrese el número de la mesa\r\n                      </div>\r\n                      <div class='text-danger p-1 m-0' *ngIf=\"controles.get('numero')?.touched && controles.get('numero')?.errors?.minlength\">\r\n                        Ingrese un número válido.\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                        <label for=\"cantidadComensales\"><b>Cantidad de comensales</b></label>\r\n                        <input type=\"number\" formControlName='cantidadComensales' name=\"cantidadComensales\" required>\r\n                        \r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('cantidadComensales')?.touched && controles.get('cantidadComensales')?.errors?.required\">\r\n                            Ingrese la cantidad de comensales.\r\n                        </div>\r\n                        <div class='text-danger p-1' *ngIf=\"controles.get('cantidadComensales')?.touched && controles.get('cantidadComensales')?.errors?.minlength\">\r\n                            Ingrese una cantidad de comensales valida.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <label for=\"tipo\" ><b>Tipo</b></label>\r\n                        <select class=\"text-dark\"  formControlName='tipo' name=\"tipo\" required>\r\n                          <option>Estándar</option>\r\n                          <option>VIP</option>\r\n                          <option>Discapacitados</option>\r\n                        </select>\r\n                    </div>\r\n              </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                          <button type=\"submit\" [disabled]='controles.invalid' class=\"btn\">Registrar mesa</button>\r\n                      </div>\r\n                  </div>\r\n         \r\n         </div>\r\n      </form>\r\n    </div>\r\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro-mesa_registro-mesa_module_ts.js.map