(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_encuestas_clientes_clientes_module_ts"],{

/***/ 1201:
/*!*********************************************************************!*\
  !*** ./src/app/pages/encuestas/clientes/clientes-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPageRoutingModule": () => (/* binding */ ClientesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes.page */ 187);




const routes = [
    {
        path: '',
        component: _clientes_page__WEBPACK_IMPORTED_MODULE_0__.ClientesPage
    }
];
let ClientesPageRoutingModule = class ClientesPageRoutingModule {
};
ClientesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientesPageRoutingModule);



/***/ }),

/***/ 8682:
/*!*************************************************************!*\
  !*** ./src/app/pages/encuestas/clientes/clientes.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPageModule": () => (/* binding */ ClientesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes-routing.module */ 1201);
/* harmony import */ var _clientes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.page */ 187);







let ClientesPageModule = class ClientesPageModule {
};
ClientesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientesPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_1__.ClientesPage]
    })
], ClientesPageModule);



/***/ }),

/***/ 187:
/*!***********************************************************!*\
  !*** ./src/app/pages/encuestas/clientes/clientes.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesPage": () => (/* binding */ ClientesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clientes.page.html */ 6790);
/* harmony import */ var _clientes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.page.scss */ 272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 4333);
/* harmony import */ var src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fotos.service */ 1257);
/* harmony import */ var sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.js */ 7379);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ 1965);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);










chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.BarController, chart_js__WEBPACK_IMPORTED_MODULE_5__.BubbleController, chart_js__WEBPACK_IMPORTED_MODULE_5__.DoughnutController, chart_js__WEBPACK_IMPORTED_MODULE_5__.LineController, chart_js__WEBPACK_IMPORTED_MODULE_5__.PieController, chart_js__WEBPACK_IMPORTED_MODULE_5__.PolarAreaController, chart_js__WEBPACK_IMPORTED_MODULE_5__.RadarController, chart_js__WEBPACK_IMPORTED_MODULE_5__.ScatterController, chart_js__WEBPACK_IMPORTED_MODULE_5__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.LogarithmicScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.RadialLinearScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.TimeSeriesScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.Decimation, chart_js__WEBPACK_IMPORTED_MODULE_5__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_5__.Title, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.SubTitle);
let ClientesPage = class ClientesPage {
    constructor(formBuilder, fotoS, vibration, firestore) {
        this.formBuilder = formBuilder;
        this.fotoS = fotoS;
        this.vibration = vibration;
        this.firestore = firestore;
        this.nombresFotos = [];
        this.formDataFotos = null;
        this.form = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            satisfaccion: ['5', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            productoConsumido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            trato: ['bien', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            visitar: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
        this.firestore.getProductos().subscribe(value => {
            this.productos = value;
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.ctx = document.getElementById('myChart');
        this.ctx1 = this.ctx.getContext('2d');
        this.ctx.fillStyle = 'black';
        this.ActualizarGrafico();
    }
    change(value) {
        console.log(value.detail.value);
    }
    mostrarToast(options) {
        sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__.default.fire(options);
    }
    archivoSeleccionado(event) {
        if (event.target.files.length > 0) {
            this.formDataFotos = new FormData();
            for (let i = 0; i < event.target.files.length; i++) {
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
    subirEncuesta() {
        this.fotoS.subirArchivos(this.formDataFotos, this.nombresFotos, this.form.value);
    }
    ActualizarGrafico() {
        var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart(this.ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 3
                    }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    graphClickEvent(event, array) {
        //console.log(array[0].index);
        // console.log(arrayDatos[array[0].index]);
        //let imagen = document.getElementById('imagen') as HTMLImageElement
        //let card = document.getElementById('card') as HTMLElement;
        //card.style.display = 'block';
        //imagen.src = url[array[0].index];
    }
};
ClientesPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_fotos_service__WEBPACK_IMPORTED_MODULE_3__.FotosService },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService }
];
ClientesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-clientes',
        template: _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clientes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClientesPage);



/***/ }),

/***/ 272:
/*!*************************************************************!*\
  !*** ./src/app/pages/encuestas/clientes/clientes.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("body {\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.4;\n}\n\nh1 {\n  font-weight: 400;\n  line-height: 1.2;\n}\n\np {\n  font-size: 1.125rem;\n}\n\nh1, p {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\nbutton {\n  border: none;\n}\n\n@media screen and (max-width: 510px) {\n  .container {\n    width: 320px;\n    margin: 0 auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n    margin: 0 auto;\n  }\n}\n\n.header {\n  padding: 0 0.625rem;\n  margin-bottom: 1.875rem;\n}\n\n.description {\n  font-style: italic;\n  font-weight: 200;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n}\n\n.container {\n  background-color: #120711 !important;\n  display: flex;\n  flex-direction: column;\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n\n.clue {\n  margin-left: 0.25rem;\n  font-size: 0.9rem;\n  color: #e4e4e4;\n}\n\n.text-center {\n  text-align: center;\n}\n\n/* form */\n\nform {\n  background: var(--color-darkblue-alpha);\n  padding: 2.5rem 0.625rem;\n  border-radius: 0.25rem;\n}\n\n@media (min-width: 480px) {\n  form {\n    padding: 2.5rem;\n  }\n}\n\n.form-group {\n  margin: 0 auto 1.25rem auto;\n  padding: 0.25rem;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 2.375rem;\n  padding: 0.375rem 0.75rem;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.form-control:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.input-radio,\n.input-checkbox {\n  display: inline-block;\n  margin-right: 0.625rem;\n  min-height: 1.25rem;\n  min-width: 1.25rem;\n}\n\n.input-textarea {\n  min-height: 120px;\n  width: 100%;\n  padding: 0.625rem;\n  resize: vertical;\n}\n\n.submit-button {\n  display: block;\n  width: 100%;\n  padding: 0.75rem;\n  background-color: orange;\n  color: inherit;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\ninput[type=file] {\n  display: none;\n}\n\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUFJLGdCQUFBO0VBQWlCLGdCQUFBO0FBR3ZCOztBQURFO0VBQUcsbUJBQUE7QUFLTDs7QUFIRTtFQUFNLGFBQUE7RUFBYyxxQkFBQTtBQVF0Qjs7QUFORTtFQUFRLFlBQUE7QUFVVjs7QUFOQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7RUFTRjtBQUNGOztBQUxBO0VBQ0k7SUFDRSxnQkFBQTtJQUNBLGNBQUE7RUFPSjtBQUNGOztBQUpBO0VBQVMsbUJBQUE7RUFDTCx1QkFBQTtBQU9KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBT0o7O0FBSkE7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQU9GOztBQUpBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFKQTtFQUNJLGtCQUFBO0FBT0o7O0FBSkUsU0FBQTs7QUFFRjtFQUNJLHVDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQU1KOztBQUhBO0VBQ0k7SUFDRSxlQUFBO0VBTUo7QUFDRjs7QUFIQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FBTUo7O0FBSEE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQU1KOztBQUhBOztFQUVJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSEE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSEE7RUFDRSxhQUFBO0FBTUY7O0FBSEE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTUYiLCJmaWxlIjoiY2xpZW50ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcbiAgXHJcbiAgaDEge2ZvbnQtd2VpZ2h0OiA0MDA7bGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG4gIHAge2ZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbn1cclxuICBoMSxwIHttYXJnaW4tdG9wOiAwO21hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG4gIGJ1dHRvbiB7Ym9yZGVyOiBub25lO1xyXG59XHJcbiAgXHJcbiAgXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUxMHB4KSB7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICB9XHJcbn1cclxuICBcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgbWF4LXdpZHRoOiA3MjBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiB9XHJcbiAgXHJcbi5oZWFkZXIge3BhZGRpbmc6IDAgMC42MjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcclxufVxyXG4gIFxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMDcxMSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuLmNsdWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiAjZTRlNGU0O1xyXG59XHJcbiAgXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuICBcclxuICAvKiBmb3JtICovXHJcbiAgXHJcbmZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZGFya2JsdWUtYWxwaGEpO1xyXG4gICAgcGFkZGluZzogMi41cmVtIDAuNjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufVxyXG4gIFxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAgIGZvcm0ge1xyXG4gICAgICBwYWRkaW5nOiAyLjVyZW07XHJcbiAgICB9XHJcbn1cclxuICBcclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMS4yNXJlbSBhdXRvO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbTt9XHJcbiAgXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMi4zNzVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4MGJkZmY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xyXG59XHJcbiAgXHJcbi5pbnB1dC1yYWRpbyxcclxuLmlucHV0LWNoZWNrYm94IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XHJcbiAgICBtaW4taGVpZ2h0OiAxLjI1cmVtO1xyXG4gICAgbWluLXdpZHRoOiAxLjI1cmVtO1xyXG4gIH1cclxuICBcclxuLmlucHV0LXRleHRhcmVhIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjYyNXJlbTtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgfVxyXG4gIFxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6b3JhbmdlO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 6790:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/encuestas/clientes/clientes.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button>\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Encuesta de cliente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <h3 id=\"title\">Bienvenido a la encuesta de NOMBRE_RESTAURANTE</h3>\r\n    <p id=\"description\">Complete los siguientes datos: </p>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"this.subirEncuesta()\" id=\"survey-form\">\r\n        <div class=\"\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\" for=\"name\">Nombre</ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              formControlName=\"nombre\"\r\n              id=\"name\"\r\n              mode=\"ios\"\r\n              placeholder=\"Ingrese su nombre\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </div>\r\n    \r\n        <div class=\"mt-1\">\r\n          <ion-label position for=\"satisfaccion\">¿Cual fue tu grado de satisfaccion?</ion-label>\r\n          <ion-item>\r\n            <ion-range formControlName=\"satisfaccion\" id=\"satisfaccion\" (ionChange)='change($event)' value=\"5\" min=\"1\" max=\"10\" color=\"danger\" mode=\"ios\" pin=\"true\">\r\n              <ion-icon slot=\"start\" name=\"sad\"></ion-icon>\r\n              <ion-icon slot=\"end\" name=\"happy\"></ion-icon>\r\n            </ion-range>\r\n          </ion-item>\r\n        </div>\r\n    \r\n        <div class=\"mt-1\">\r\n          <ion-item>\r\n            <ion-label>Producto consumido</ion-label>\r\n            <ion-select formControlName=\"productoConsumido\" mode=\"ios\" interface=\"popover\" placeholder=\"\">\r\n              <ion-select-option *ngFor=\"let producto of productos\" [value]=\"producto.nombre\">{{producto.nombre}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <div class=\"mt-1\">\r\n          <ion-list>\r\n              <ion-radio-group formControlName=\"trato\" mode=\"ios\" value=\"bien\">\r\n                \r\n                <ion-list-header>\r\n                  <ion-label>¿Como te trato el personal?</ion-label>\r\n                </ion-list-header>\r\n                \r\n                <ion-item>\r\n                  <ion-label>Excelente</ion-label>\r\n                  <ion-radio slot=\"start\" color=\"success\" value=\"excelente\"></ion-radio>\r\n                </ion-item>\r\n      \r\n                <ion-item>\r\n                  <ion-label>Bien</ion-label>\r\n                  <ion-radio slot=\"start\" color=\"warning\" value=\"bien\"></ion-radio>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label>Pesimo</ion-label>\r\n                  <ion-radio slot=\"start\" color=\"danger\" value=\"pesimo\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n          </ion-list>\r\n        </div>\r\n\r\n        <div class=\"mt-1\">\r\n          <ion-list>\r\n            <ion-list-header>¿Volveria al local?</ion-list-header>\r\n              <ion-item>\r\n                <ion-label>Si</ion-label>\r\n                <ion-checkbox formControlName=\"visitar\" mode=\"ios\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n              </ion-item>\r\n          </ion-list>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n                <label for=\"file-upload\" class=\"custom-file-upload mt-2\">\r\n                    <i class=\"fa fa-cloud-upload\"></i> Custom Upload\r\n                </label>\r\n                <input class=\"btn btn-primary\" type=\"file\" id=\"file-upload\" multiple accept=\"image/*\" (change)='archivoSeleccionado($event)'>\r\n          </div>\r\n      </div>\r\n        <ion-button class=\"d-block m-auto mt-2\" size=\"large\" [disabled]=\"form.invalid\" type=\"submit\">Enviar encuesta</ion-button>\r\n      </form>\r\n    </div>\r\n    <div style=\"width: 7cm; height: 7cm; display: block; margin: auto; background-color: rgb(42, 35, 35);\">\r\n      <canvas id=\"myChart\" width=\"50px\" height=\"50px\"></canvas>\r\n    </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_encuestas_clientes_clientes_module_ts.js.map