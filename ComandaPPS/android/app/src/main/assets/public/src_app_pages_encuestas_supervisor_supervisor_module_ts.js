(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_encuestas_supervisor_supervisor_module_ts"],{

/***/ 58049:
/*!***************************************************************************!*\
  !*** ./src/app/components/listado-generico/listado-generico.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoGenericoComponent": () => (/* binding */ ListadoGenericoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_listado_generico_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./listado-generico.component.html */ 13030);
/* harmony import */ var _listado_generico_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listado-generico.component.scss */ 85007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let ListadoGenericoComponent = class ListadoGenericoComponent {
    constructor() {
        this.personaClickeadaEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    SeleccionarPersona(persona) {
        this.personaClickeadaEmitter.emit(persona);
    }
};
ListadoGenericoComponent.ctorParameters = () => [];
ListadoGenericoComponent.propDecorators = {
    personas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    personaClickeadaEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ListadoGenericoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-listado-generico',
        template: _raw_loader_listado_generico_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_listado_generico_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListadoGenericoComponent);



/***/ }),

/***/ 9350:
/*!*************************************************************************!*\
  !*** ./src/app/pages/encuestas/supervisor/supervisor-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisorPageRoutingModule": () => (/* binding */ SupervisorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _supervisor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supervisor.page */ 97499);




const routes = [
    {
        path: '',
        component: _supervisor_page__WEBPACK_IMPORTED_MODULE_0__.SupervisorPage
    }
];
let SupervisorPageRoutingModule = class SupervisorPageRoutingModule {
};
SupervisorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupervisorPageRoutingModule);



/***/ }),

/***/ 97950:
/*!*****************************************************************!*\
  !*** ./src/app/pages/encuestas/supervisor/supervisor.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisorPageModule": () => (/* binding */ SupervisorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _supervisor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supervisor-routing.module */ 9350);
/* harmony import */ var _supervisor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supervisor.page */ 97499);
/* harmony import */ var src_app_components_listado_generico_listado_generico_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/listado-generico/listado-generico.component */ 58049);








let SupervisorPageModule = class SupervisorPageModule {
};
SupervisorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _supervisor_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupervisorPageRoutingModule
        ],
        declarations: [_supervisor_page__WEBPACK_IMPORTED_MODULE_1__.SupervisorPage, src_app_components_listado_generico_listado_generico_component__WEBPACK_IMPORTED_MODULE_2__.ListadoGenericoComponent]
    })
], SupervisorPageModule);



/***/ }),

/***/ 97499:
/*!***************************************************************!*\
  !*** ./src/app/pages/encuestas/supervisor/supervisor.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisorPage": () => (/* binding */ SupervisorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_supervisor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./supervisor.page.html */ 93449);
/* harmony import */ var _supervisor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supervisor.page.scss */ 1976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 71965);






chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarController, chart_js__WEBPACK_IMPORTED_MODULE_3__.BubbleController, chart_js__WEBPACK_IMPORTED_MODULE_3__.DoughnutController, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineController, chart_js__WEBPACK_IMPORTED_MODULE_3__.PieController, chart_js__WEBPACK_IMPORTED_MODULE_3__.PolarAreaController, chart_js__WEBPACK_IMPORTED_MODULE_3__.RadarController, chart_js__WEBPACK_IMPORTED_MODULE_3__.ScatterController, chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LogarithmicScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.RadialLinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.TimeSeriesScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.Decimation, chart_js__WEBPACK_IMPORTED_MODULE_3__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.SubTitle);
let SupervisorPage = class SupervisorPage {
    constructor(userService) {
        this.userService = userService;
        this.clickeado = false;
        this.userService.getClientes().subscribe((data) => {
            console.log(data);
            this.clientes = data;
            this.userService.getEmpleados().subscribe((data) => {
                console.log(data);
                this.empleados = data;
                this.totalPersonas = this.clientes.concat(this.empleados);
            });
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.ctx = document.getElementById('myChart');
        this.ctx1 = this.ctx.getContext('2d');
        this.ActualizarGrafico();
    }
    PersonaClickeada(event) {
        this.personaClickeada = event;
        this.clickeado = true;
    }
    change(value) {
        console.log(value.detail.value);
    }
    ActualizarGrafico() {
        var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart(this.ctx, {
            type: 'pie',
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
                        borderWidth: 1
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
SupervisorPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
SupervisorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-supervisor',
        template: _raw_loader_supervisor_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_supervisor_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SupervisorPage);



/***/ }),

/***/ 85007:
/*!*****************************************************************************!*\
  !*** ./src/app/components/listado-generico/listado-generico.component.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YWRvLWdlbmVyaWNvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 1976:
/*!*****************************************************************!*\
  !*** ./src/app/pages/encuestas/supervisor/supervisor.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("body {\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.4;\n}\n\nh1 {\n  font-weight: 400;\n  line-height: 1.2;\n}\n\np {\n  font-size: 1.125rem;\n}\n\nh1, p {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\nbutton {\n  border: none;\n}\n\n@media (min-width: 576px) {\n  .container {\n    max-width: 540px;\n    margin: 0 auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n    margin: 0 auto;\n  }\n}\n\n.header {\n  padding: 0 0.625rem;\n  margin-bottom: 1.875rem;\n}\n\n.description {\n  font-style: italic;\n  font-weight: 200;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n}\n\n.clue {\n  margin-left: 0.25rem;\n  font-size: 0.9rem;\n  color: #e4e4e4;\n}\n\n.text-center {\n  text-align: center;\n}\n\n/* form */\n\nform {\n  background: var(--color-darkblue-alpha);\n  padding: 2.5rem 0.625rem;\n  border-radius: 0.25rem;\n}\n\n@media (min-width: 480px) {\n  form {\n    padding: 2.5rem;\n  }\n}\n\n.form-group {\n  margin: 0 auto 1.25rem auto;\n  padding: 0.25rem;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 2.375rem;\n  padding: 0.375rem 0.75rem;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.form-control:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.input-radio,\n.input-checkbox {\n  display: inline-block;\n  margin-right: 0.625rem;\n  min-height: 1.25rem;\n  min-width: 1.25rem;\n}\n\n.input-textarea {\n  min-height: 120px;\n  width: 100%;\n  padding: 0.625rem;\n  resize: vertical;\n}\n\n.submit-button {\n  display: block;\n  width: 100%;\n  padding: 0.75rem;\n  background-color: orange;\n  color: inherit;\n  border-radius: 2px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cGVydmlzb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQUksZ0JBQUE7RUFBaUIsZ0JBQUE7QUFJdkI7O0FBSEU7RUFBRyxtQkFBQTtBQU9MOztBQU5FO0VBQU0sYUFBQTtFQUFjLHFCQUFBO0FBV3RCOztBQVZFO0VBQVEsWUFBQTtBQWNWOztBQVhFO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGNBQUE7RUFjSjtBQUNGOztBQWJFO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGNBQUE7RUFlSjtBQUNGOztBQWRFO0VBQVMsbUJBQUE7RUFDUCx1QkFBQTtBQWlCSjs7QUFmRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQWtCSjs7QUFoQkU7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQW1CSjs7QUFqQkU7RUFDRSxrQkFBQTtBQW9CSjs7QUFsQkUsU0FBQTs7QUFFQTtFQUNFLHVDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQW9CSjs7QUFsQkU7RUFDRTtJQUNFLGVBQUE7RUFxQko7QUFDRjs7QUFuQkU7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FBcUJKOztBQW5CRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FBc0JKOztBQW5CRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdEQUFBO0FBc0JKOztBQXBCRTs7RUFFRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXVCSjs7QUFwQkU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBdUJKOztBQXBCRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF1QkoiLCJmaWxlIjoic3VwZXJ2aXNvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7fVxyXG4gIFxyXG4gIGgxIHtmb250LXdlaWdodDogNDAwO2xpbmUtaGVpZ2h0OiAxLjI7fVxyXG4gIHAge2ZvbnQtc2l6ZTogMS4xMjVyZW07fVxyXG4gIGgxLHAge21hcmdpbi10b3A6IDA7bWFyZ2luLWJvdHRvbTogMC41cmVtO31cclxuICBidXR0b24ge2JvcmRlcjogbm9uZTt9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgbWF4LXdpZHRoOiA1NDBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87fX1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bzt9fVxyXG4gIFxyXG4gIC5oZWFkZXIge3BhZGRpbmc6IDAgMC42MjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTt9XHJcbiAgXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO31cclxuICBcclxuICAuY2x1ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgY29sb3I6ICNlNGU0ZTQ7fVxyXG4gIFxyXG4gIC50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4gIFxyXG4gIC8qIGZvcm0gKi9cclxuICBcclxuICBmb3JtIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWRhcmtibHVlLWFscGhhKTtcclxuICAgIHBhZGRpbmc6IDIuNXJlbSAwLjYyNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07fVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgIHBhZGRpbmc6IDIuNXJlbTt9XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEuMjVyZW0gYXV0bztcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07fVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMi4zNzVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzgwYmRmZjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7fVxyXG4gIFxyXG4gIC5pbnB1dC1yYWRpbyxcclxuICAuaW5wdXQtY2hlY2tib3gge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiAgICBtaW4td2lkdGg6IDEuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC10ZXh0YXJlYSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC42MjVyZW07XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gIH1cclxuICBcclxuICAuc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6b3JhbmdlO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICJdfQ== */");

/***/ }),

/***/ 13030:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/listado-generico/listado-generico.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<table class=\"table table-dark table-striped  table-hover\">\r\n  <thead>\r\n    <tr class=\"table-dark\">\r\n      <th scope=\"col\">Nombre</th>\r\n      <th scope=\"col\">Apellido</th>\r\n      <th scope=\"col\">DNI</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr class=\"table-dark\" *ngFor=\"let persona of personas\" (click)=\"SeleccionarPersona(persona)\">\r\n      <td>{{persona.nombre}}</td>\r\n      <td>{{persona.apellido}}</td>\r\n      <td>{{persona.dni}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ 93449:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/encuestas/supervisor/supervisor.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button>\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Encuesta de supervisor</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"container bg-dark\" >\r\n\r\n    <h1 id=\"title\"> Encuesta para supervisores</h1>\r\n      \r\n          <app-listado-generico *ngIf=\"!clickeado\" [personas]=\"totalPersonas\" (personaClickeadaEmitter)=\"PersonaClickeada($event)\"></app-listado-generico>\r\n        \r\n    <div *ngIf=\"clickeado\">\r\n      <form id=\"survey-form\">\r\n        <div class=\"form-group\">\r\n          <h2>{{personaClickeada.nombre}}, {{personaClickeada.apellido}}</h2>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Anotacion sobre el cliente/empleado...</ion-label>\r\n            <ion-textarea></ion-textarea>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ion-label position:for=\"trato\">Trato con los demás</ion-label>\r\n          <ion-item>\r\n            <ion-range id=\"trato\" (ionChange)='change($event)' value=\"5\" min=\"1\" max=\"10\" color=\"danger\" mode=\"ios\" pin=\"true\">\r\n              <ion-icon slot=\"start\" name=\"sad\"></ion-icon>\r\n              <ion-icon slot=\"end\" name=\"happy\"></ion-icon>\r\n            </ion-range>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ion-list>\r\n            <ion-radio-group value=\"absolutamente\" mode=\"ios\" >\r\n              \r\n              <ion-list-header>\r\n                <ion-label>Mantuvo la limpieza del lugar</ion-label>\r\n              </ion-list-header>\r\n              \r\n              <ion-item>\r\n                <ion-label>Absolutamente</ion-label>\r\n                <ion-radio slot=\"start\" color=\"success\" value=\"absolutamente\"></ion-radio>\r\n              </ion-item>\r\n    \r\n              <ion-item>\r\n                <ion-label>Ensució un poco</ion-label>\r\n                <ion-radio slot=\"start\" color=\"warning\" value=\"ensucio\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item>\r\n                <ion-label>Un desastre</ion-label>\r\n                <ion-radio slot=\"start\" color=\"danger\" value=\"desastre\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <ion-item>\r\n            <ion-label>Turno en el que accedió al local</ion-label>\r\n            <ion-select ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\r\n              <ion-select-option value=\"mediodia\">Mediodía</ion-select-option>\r\n              <ion-select-option value=\"tarde\">Tarde</ion-select-option>\r\n              <ion-select-option value=\"noche\">Noche</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <div>\r\n            <ion-list>\r\n              <ion-list-header>¿Conforme con el comportamiento?</ion-list-header>\r\n                <ion-item>\r\n                  <ion-label>Si</ion-label>\r\n                  <ion-checkbox mode=\"ios\" color=\"primary\" checked slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" id=\"submit\" class=\"submit-button\">\r\n            Enviar encuesta\r\n          </button>\r\n        </div>\r\n        \r\n      </form>\r\n      \r\n  </div>\r\n    <div style=\"width: 5cm; height: 5cm; display: block; margin: auto;\">\r\n      <canvas id=\"myChart\" width=\"50px\" height=\"50px\"></canvas>\r\n    </div>\r\n</div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_encuestas_supervisor_supervisor_module_ts.js.map