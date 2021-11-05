(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_registro_registro-producto_registro-producto_module_ts"],{

/***/ 96444:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/registro/registro-producto/registro-producto-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroProductoPageRoutingModule": () => (/* binding */ RegistroProductoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _registro_producto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-producto.page */ 46840);




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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _registro_producto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-producto-routing.module */ 96444);
/* harmony import */ var _registro_producto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-producto.page */ 46840);
/* harmony import */ var src_app_sharedComponents_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sharedComponents/shared/shared.module */ 44029);








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

/***/ 46840:
/*!****************************************************************************!*\
  !*** ./src/app/pages/registro/registro-producto/registro-producto.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroProductoPage": () => (/* binding */ RegistroProductoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_registro_producto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro-producto.page.html */ 1123);
/* harmony import */ var _registro_producto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-producto.page.scss */ 55425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 94333);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fotos.service */ 21106);
/* harmony import */ var sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.js */ 90110);









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
        };
        this.fotoS.subirArchivos(this.formDataFotos, this.nombresFotos, producto)
            .then(() => {
            sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__.default.fire({
                title: 'Registrado',
                text: 'Se registró el producto.',
                icon: 'success',
                timer: 2000,
                timerProgressBar: true
            });
        });
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

/***/ 55425:
/*!******************************************************************************!*\
  !*** ./src/app/pages/registro/registro-producto/registro-producto.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap\");\nbody {\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  background-color: #f7f7f7;\n}\n* {\n  box-sizing: border-box;\n}\nion-content {\n  --background: url('fotoRegistro.jpg') 20%;\n  background-repeat: no-repeat;\n  background-attachment: fixed !important;\n}\n/* Add padding to container elements */\n.containerForm {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  width: 800px;\n  min-width: 300px;\n  left: 50%;\n  top: 120%;\n  margin: 8% auto;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  background-color: #120711b3 !important;\n  background: white;\n  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);\n}\n/* Full-width input fields */\ninput[type=text], input[type=password], input[type=number] {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  background: #232323;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\nselect {\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  display: inline-block;\n  border: none;\n  background: #f7f7f7;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\ninput[type=text]:focus, input[type=password]:focus, input[type=number]:focus, select:focus {\n  background-color: #6565bf;\n  outline: none;\n}\n/* Set a style for all buttons */\nbutton {\n  background-color: #0eb7f4;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n  font-size: 16px;\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n  border-radius: 10px;\n}\nbutton:hover {\n  opacity: 1;\n}\ninput[type=file] {\n  display: none;\n}\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n/* Change styles for signup button on extra small screens */\n@media screen and (max-width: 910px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 500px;\n  }\n}\n@media screen and (max-width: 510px) {\n  .signupbtn {\n    width: 100%;\n  }\n\n  .containerForm {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLXByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxzRkFBQTtBQUVSO0VBQ0UscURBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUE7RUFBRyxzQkFBQTtBQUVIO0FBQUE7RUFDRSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7QUFHRjtBQUFBLHNDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0VBR0EsaURBQUE7QUFHRjtBQUNBLDRCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtBQUVGO0FBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0FBR0Y7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQUVGO0FBR0EsZ0NBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7QUFBRjtBQUdBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0EsMkRBQUE7QUFDQTtFQUNFO0lBQ0csV0FBQTtFQUFIOztFQUdBO0lBQ0ksWUFBQTtFQUFKO0FBQ0Y7QUFHQTtFQUNFO0lBQ0csV0FBQTtFQURIOztFQUlBO0lBQ0ksWUFBQTtFQURKO0FBQ0YiLCJmaWxlIjoicmVnaXN0cm8tcHJvZHVjdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztcclxufVxyXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9mb3RvUmVnaXN0cm8uanBnJykgMjAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLmNvbnRhaW5lckZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMTIwJTtcclxuICBtYXJnaW46IDglIGF1dG87XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIwNzExYjMgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDJweCAxcHggMjFweCAtOXB4IHJnYmEoMCwwLDAsMC4zOCk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDFweCAyMXB4IC05cHggcmdiYSgwLDAsMCwwLjM4KTtcclxufVxyXG5cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzIzMjMyMztcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cywgaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDEwMSwgMTkxKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZWI3ZjQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzaWdudXAgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTEwcHgpIHtcclxuICAuc2lnbnVwYnRuIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lckZvcm17XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMHB4KSB7XHJcbiAgLnNpZ251cGJ0biB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJGb3Jte1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n  <ion-toolbar>\r\n      <ion-title>Agregar producto</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n          <ion-menu-button menu=\"first\" style=\"font-size:14px;\">Menu</ion-menu-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-content>\r\n    <div class=\"container\" style=\"max-height: 100vh !important;\" >\r\n\r\n      \r\n      <form [formGroup]='controles' (ngSubmit)='RegistrarProducto()'>\r\n          <div class=\"containerForm bg-dark text-white\">\r\n\r\n              <h3>Ingrese los datos del producto:</h3>\r\n              <!-- Se cargará el nombre, la descripción, el tiempo (promedio) de elavoración y el precio -->\r\n              <div class=\"row\">\r\n                 <div class=\"col-12\">\r\n                      <label for=\"nombre\"><b>Nombre del producto</b></label>\r\n                      <input type=\"text\" formControlName='nombre' name=\"nombre\" required>\r\n                      \r\n                      <div class='text-light p-1 m-0' *ngIf=\"controles.get('nombre')?.touched && controles.get('nombre')?.errors?.required\">\r\n                          Ingrese el nombre del producto\r\n                      </div>\r\n                      <div class='text-light p-1 m-0' *ngIf=\"controles.get('nombre')?.touched && controles.get('nombre')?.errors?.minlength\">\r\n                        Ingrese un nombre del producto valido\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                        <label for=\"descripcion\"><b>Descripcion</b></label>\r\n                        <input type=\"text\" formControlName='descripcion' name=\"descripcion\" required>\r\n                        \r\n                        <div class='text-light p-1' *ngIf=\"controles.get('descripcion')?.touched && controles.get('descripcion')?.errors?.required\">\r\n                            Ingrese la descripcion\r\n                        </div>\r\n                        <div class='text-light p-1' *ngIf=\"controles.get('descripcion')?.touched && controles.get('descripcion')?.errors?.minlength\">\r\n                            Ingrese una descripcion valida.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <label for=\"tiempo\"><b>Tiempo de elaboracion</b></label>\r\n                        <input type=\"number\" formControlName='TElaboracion' name=\"TElaboracion\" required>\r\n                        \r\n                        <div class='text-light p-1' *ngIf=\"controles.get('TElaboracion')?.touched && controles.get('TElaboracion')?.errors?.required\">\r\n                            Ingrese un tiempo de elaboracion\r\n                        </div>\r\n                        <div class='text-light p-1' *ngIf=\"controles.get('TElaboracion')?.touched && controles.get('TElaboracion')?.errors?.maxlength\">\r\n                            Ingrese un tiempo de elaboracion valido.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <label for=\"precio\"><b>Precio</b></label>\r\n                        <input type=\"number\" formControlName='precio' name=\"precio\" required>\r\n                        \r\n                        <div class='text-light p-1' *ngIf=\"controles.get('precio')?.touched && controles.get('precio')?.errors?.required\">\r\n                            Ingrese el precio\r\n                        </div>\r\n                        <div class='text-light p-1' *ngIf=\"controles.get('precio')?.touched && controles.get('precio')?.errors?.minlength\">\r\n                            Ingrese un precio valido\r\n                        </div>\r\n                    </div>\r\n              </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                          <label for=\"file-upload\" class=\"custom-file-upload mt-2\">\r\n                            <i class=\"fa fa-cloud-upload\"></i> Suba 3 fotos del producto\r\n                          </label>\r\n                          <input class=\"btn btn-primary\" type=\"file\" multiple accept=\"image/*\" (change)='archivoSeleccionado($event)' id=\"file-upload\">\r\n                          <button type=\"submit\" [disabled]='controles.invalid || !formDataFotos' class=\"btn\">Registrar</button>\r\n                      </div>\r\n                  </div>\r\n         </div>\r\n      </form>\r\n    \r\n    </div>\r\n  </ion-content>\r\n  \r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro-producto_registro-producto_module_ts.js.map