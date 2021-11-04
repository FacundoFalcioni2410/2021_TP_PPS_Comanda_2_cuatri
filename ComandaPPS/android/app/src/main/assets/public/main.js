(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_services_fotos_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'splash',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("src_app_pages_splash_splash_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/splash/splash.module */ 71203)).then(m => m.SplashPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'registro-cliente',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_services_fotos_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_registro_registro-cliente_registro-cliente_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registro/registro-cliente/registro-cliente.module */ 94708)).then(m => m.RegistroClientePageModule)
    },
    {
        path: 'registro-producto',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_services_fotos_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_registro_registro-producto_registro-producto_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registro/registro-producto/registro-producto.module */ 8190)).then(m => m.RegistroProductoPageModule)
    },
    {
        path: 'registro-mesa',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_services_fotos_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_registro_registro-mesa_registro-mesa_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registro/registro-mesa/registro-mesa.module */ 37942)).then(m => m.RegistroMesaPageModule)
    },
    {
        path: 'registro-empleado',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_services_fotos_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_registro_registro-empleado_registro-empleado_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registro/registro-empleado/registro-empleado.module */ 99056)).then(m => m.RegistroEmpleadoPageModule)
    },
    {
        path: 'registro-supervisor',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_services_fotos_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_registro_registro-supervisor_registro-supervisor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registro/registro-supervisor/registro-supervisor.module */ 1912)).then(m => m.RegistroSupervisorPageModule)
    },
    {
        path: 'clientes',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-src_app_services_fotos_service_ts"), __webpack_require__.e("src_app_pages_encuestas_clientes_clientes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/encuestas/clientes/clientes.module */ 18682)).then(m => m.ClientesPageModule)
    },
    {
        path: 'supervisores',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_encuestas_supervisor_supervisor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/encuestas/supervisor/supervisor.module */ 97950)).then(m => m.SupervisorPageModule)
    },
    {
        path: 'ingreso-local',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ingreso-local_ingreso-local_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/ingreso-local/ingreso-local.module */ 9916)).then(m => m.IngresoLocalPageModule)
    },
    {
        path: 'ahorcado',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_juegos_ahorcado_ahorcado_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/juegos/ahorcado/ahorcado.module */ 79223)).then(m => m.AhorcadoPageModule)
    },
    {
        path: '',
        redirectTo: 'splash',
        pathMatch: 'full'
    },
    {
        path: 'lista-cliente-deshabilitados',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_lista-cliente-deshabilitados_lista-cliente-deshabilitados_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/lista-cliente-deshabilitados/lista-cliente-deshabilitados.module */ 53362)).then(m => m.ListaClienteDeshabilitadosPageModule)
    },
    {
        path: 'realizar-pedido',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_realizar-pedido_realizar-pedido_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/realizar-pedido/realizar-pedido.module */ 89588)).then(m => m.RealizarPedidoPageModule)
    },
    {
        path: 'lista-espera',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_lista-espera_lista-espera_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/lista-espera/lista-espera.module */ 42934)).then(m => m.ListaEsperaPageModule)
    },
    {
        path: 'carrito',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_carrito_carrito_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/carrito/carrito.module */ 74646)).then(m => m.CarritoPageModule)
    },
    {
        path: 'lista-bartender',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_empleados_lista-bartender_lista-bartender_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/empleados/lista-bartender/lista-bartender.module */ 27215)).then(m => m.ListaBartenderPageModule)
    },
    {
        path: 'chat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chat/chat.module */ 35501)).then(m => m.ChatPageModule)
    },
    {
        path: 'listado-pedidos-mozo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_empleados_listado-pedidos-mozo_listado-pedidos-mozo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/empleados/listado-pedidos-mozo/listado-pedidos-mozo.module */ 76895)).then(m => m.ListadoPedidosMozoPageModule)
    },
    {
        path: 'lista-cocinero',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_empleados_lista-cocinero_lista-cocinero_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/empleados/lista-cocinero/lista-cocinero.module */ 70221)).then(m => m.ListaCocineroPageModule)
    },
    {
        path: 'mesa-asignada-cliente',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mesa-asignada-cliente_mesa-asignada-cliente_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mesa-asignada-cliente/mesa-asignada-cliente.module */ 88037)).then(m => m.MesaAsignadaClientePageModule)
    },
    {
        path: 'cliente-espera-pedido',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cliente-espera-pedido_cliente-espera-pedido_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cliente-espera-pedido/cliente-espera-pedido.module */ 23262)).then(m => m.ClienteEsperaPedidoPageModule)
    },
    {
        path: 'grafico-cliente',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_grafico-cliente_grafico-cliente_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/grafico-cliente/grafico-cliente.module */ 47628)).then(m => m.GraficoClientePageModule)
    },
    {
        path: 'cuenta-del-pedido',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cuenta-del-pedido_cuenta-del-pedido_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cuenta-del-pedido/cuenta-del-pedido.module */ 11831)).then(m => m.CuentaDelPedidoPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 88939);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ 60845);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 94333);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 92760);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-lazyload-image */ 27260);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav/nav.component */ 40994);














let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__.NavComponent
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig),
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_11__.SweetAlert2Module.forRoot(),
        ],
        providers: [
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner,
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_3__.Vibration,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy
            },
            { provide: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_13__.LAZYLOAD_IMAGE_HOOKS, useClass: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_13__.ScrollHooks }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 40994:
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nav.component.html */ 9717);
/* harmony import */ var _nav_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.component.scss */ 27235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);






let NavComponent = class NavComponent {
    constructor(menu, auth) {
        this.menu = menu;
        this.auth = auth;
    }
    ngOnInit() { }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    openEnd() {
        this.menu.open('end');
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
};
NavComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
NavComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-nav',
        template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_nav_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NavComponent);



/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 52182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.js */ 90110);







let AuthService = class AuthService {
    constructor(auth, router, firestore) {
        this.auth = auth;
        this.router = router;
        this.firestore = firestore;
        this.loading = false;
        this.tipoUsuario = '';
        //Clientes
        this.clienteCollection = firestore.collection('clientes');
        ///Mesas
        this.mesaCollection = firestore.collection('mesas');
        ///Productos
        this.productoCollection = firestore.collection('productos');
        //Empleados
        this.empleadoCollection = firestore.collection('empleados');
        //Dueños/Supervisores
        this.supervisorCollection = firestore.collection('supervisores');
        //Encuestas
        this.encuestaCollection = firestore.collection('encuestas');
        //Pedidos
        this.pedidosCollection = firestore.collection('pedidos');
    }
    getPedidos() {
        return this.pedidosCollection.valueChanges({ idField: 'id' });
    }
    getSupervisores() {
        return this.supervisorCollection.valueChanges({ idField: 'id' });
    }
    getEmpleados() {
        return this.empleadoCollection.valueChanges({ idField: 'id' });
    }
    getEncuestas() {
        return this.encuestaCollection.valueChanges({ idField: 'id' });
    }
    getProductos() {
        return this.productoCollection.valueChanges({ idField: 'id' });
    }
    getMesas() {
        return this.mesaCollection.valueChanges({ idField: 'id' });
    }
    getClientes() {
        return this.clienteCollection.valueChanges({ idField: 'id' });
    }
    getUser() {
        return this.clienteCollection.doc(this.usuarioActual.id).valueChanges({ idField: 'id' });
    }
    borrarUsuarioActual() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let user = yield this.auth.currentUser;
            user.delete().then(() => {
                console.log('deleted');
            });
            if ((_a = this.usuarioActual) === null || _a === void 0 ? void 0 : _a.perfil) {
                let clienteFirestore = yield this.firestore.collection('supervisor', ref => ref.where('uid', '==', this.usuarioActual.uid).limit(1)).valueChanges({ idField: 'id' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).toPromise();
                this.firestore.collection("supervisor").doc(clienteFirestore[0].id).delete();
            }
            else if ((_b = this.usuarioActual) === null || _b === void 0 ? void 0 : _b.tipo) {
                let clienteFirestore = yield this.firestore.collection('empleados', ref => ref.where('uid', '==', this.usuarioActual.uid).limit(1)).valueChanges({ idField: 'id' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).toPromise();
                this.firestore.collection("empleados").doc(clienteFirestore[0].id).delete();
            }
            else {
                let clienteFirestore = yield this.firestore.collection('clientes', ref => ref.where('uid', '==', this.usuarioActual.uid).limit(1)).valueChanges({ idField: 'id' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).toPromise();
                this.firestore.collection("clientes").doc(clienteFirestore[0].id).delete();
            }
        });
    }
    TraerPedidosGenerico(campo, valor) {
        return this.firestore.collection('pedidos', ref => ref.where(campo, '==', valor)).valueChanges({ idField: 'id' });
    }
    TraerPedidos() {
        return this.firestore.collection('pedidos').valueChanges({ idField: 'id' });
    }
    PedidoCliente(clienteID, pedido) {
        return this.firestore.collection('clientes').doc(clienteID).update({ pedido: pedido });
    }
    TraerClientesDeshabilitados() {
        return this.firestore.collection('clientes', ref => ref.where('habilitado', '==', false)).valueChanges({ idField: 'id' });
    }
    TraerGenerico(coleccion, campo, valor) {
        return this.firestore.collection(coleccion, ref => ref.where(campo, '==', valor)).valueChanges({ idField: 'id' });
    }
    SetearMesaCliente(cliente, mesa) {
        return this.clienteCollection.doc(cliente.id).update({ mesaAsignada: mesa });
    }
    UpdateEstadoCliente(cliente) {
        this.clienteCollection.doc(cliente.id).update({ habilitado: cliente.habilitado });
    }
    UpdatearMesaCliente(mesa, valor) {
        return this.mesaCollection.doc(mesa.id).update({ cliente: valor });
    }
    updateClienteActual(cliente) {
        return this.clienteCollection.doc(cliente.id).update({ mesaAsignada: cliente.mesaAsignada, pedido: cliente.pedido, listaEspera: cliente.listaEspera });
    }
    UpdatearIngresoCliente(cliente, valor) {
        return this.clienteCollection.doc(cliente.id).update({ 'ingresoMesa': valor });
    }
    UpdatearEstadoPedido(idPedido, valor) {
        return this.pedidosCollection.doc(idPedido).update({ 'estado': valor });
    }
    UpdatearEtapasRealizadasPedido(idPedido, valor) {
        return this.pedidosCollection.doc(idPedido).update({ 'etapasRealizadas': valor, cocteleriaEntregado: true });
    }
    UpdatearEtapasRealizadasPedidoCocina(idPedido, valor) {
        return this.pedidosCollection.doc(idPedido).update({ 'etapasRealizadas': valor, cocinaEntregado: true });
    }
    TraerPedido(idPedido) {
        return this.pedidosCollection.doc(idPedido).valueChanges({ idField: 'id' });
    }
    AltaCliente(cliente) {
        cliente.listaEspera = false;
        // this.usuarioActual = cliente;
        return this.clienteCollection.add(Object.assign({}, cliente));
    }
    AltaMesa(mesa) {
        return this.mesaCollection.add(Object.assign({}, mesa));
    }
    AltaProducto(producto) {
        return this.productoCollection.add(Object.assign({}, producto));
    }
    AltaEmpleado(empleado) {
        return this.empleadoCollection.add(Object.assign({}, empleado));
    }
    AltaSupervisor(supervisor) {
        return this.supervisorCollection.add(Object.assign({}, supervisor));
    }
    SubirPedido(pedido) {
        return this.pedidosCollection.add(pedido);
    }
    AltaEncuesta(encuesta) {
        return this.encuestaCollection.add(Object.assign({}, encuesta));
    }
    updateListaEsperaCliente(id, valor) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.firestore.collection('clientes').doc(id).update({ listaEspera: valor });
        });
    }
    getCliente(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.firestore.collection('clientes', ref => ref.where('uid', '==', uid).limit(1)).valueChanges({ idField: 'id' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).toPromise();
        });
    }
    getSupervisor(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.firestore.collection('supervisores', ref => ref.where('uid', '==', uid).limit(1)).valueChanges({ idField: 'id' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).toPromise();
        });
    }
    getEmpleado(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.firestore.collection('empleados', ref => ref.where('uid', '==', uid).limit(1)).valueChanges({ idField: 'id' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).toPromise();
        });
    }
    getUsers(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let usuario = yield this.firestore.collection('clientes', ref => ref.where('email', '==', email).limit(1)).valueChanges({ idField: 'id' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).toPromise();
            this.tipoUsuario = 'cliente';
            if (usuario.length === 0) {
                usuario = yield this.firestore.collection('empleados', ref => ref.where('email', '==', email).limit(1)).valueChanges({ idField: 'id' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).toPromise();
                this.tipoUsuario = 'empleado';
            }
            if (usuario.length === 0) {
                usuario = yield this.firestore.collection('supervisores', ref => ref.where('email', '==', email).limit(1)).valueChanges({ idField: 'id' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).toPromise();
                this.tipoUsuario = 'supervisor';
            }
            this.usuarioActual = usuario[0];
            return usuario[0];
        });
    }
    login(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.password);
    }
    registro(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.password);
    }
    mostrarToast(options) {
        sweetalert2_src_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__.default.fire(options);
    }
    guardarToken(usuario, perfil, token) {
        if (perfil === 'cliente') {
            this.clienteCollection.doc(usuario.id).update({ pushToken: token });
        }
        else if (perfil === 'supervisor') {
            this.supervisorCollection.doc(usuario.id).update({ pushToken: token });
        }
        else {
            this.empleadoCollection.doc(usuario.id).update({ pushToken: token });
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBG1tZOguXpKGw6BYcQsoP__7DaSRmqh7w",
        authDomain: "comandapps-f0233.firebaseapp.com",
        projectId: "comandapps-f0233",
        storageBucket: "comandapps-f0233.appspot.com",
        messagingSenderId: "769727808847",
        appId: "1:769727808847:web:304eb399730856f2c3313a"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		86030,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 27235:
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <app-nav></app-nav>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 9717:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-title *ngIf=\"this.auth.usuarioActual?.perfil=='dueno'\">Churrasic Park Dueño </ion-title>\r\n      <ion-title *ngIf=\"this.auth.usuarioActual?.perfil=='supervisor'\">Churrasic Park Supervisor</ion-title>\r\n      <ion-title *ngIf=\"this.auth.usuarioActual?.tipo\">Churrasic Park {{auth.usuarioActual?.tipo | titlecase}} </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content style=\"--background: #232323\">\r\n    <ion-list *ngIf=\"!this.auth?.usuarioActual\">\r\n      <ion-menu-toggle>\r\n        <ion-item [routerLink]=\"['/home']\" (click)=\"this.menu.close('main')\">Home</ion-item>\r\n      </ion-menu-toggle>\r\n      \r\n\r\n    </ion-list>\r\n    <ion-list *ngIf=\"this.auth?.usuarioActual\">\r\n      <ion-menu-toggle>\r\n        <ion-item [routerLink]=\"['/home']\">Home</ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle *ngIf=\"this.auth.usuarioActual?.tipo == 'metre'\">\r\n        <ion-item [routerLink]=\"['/lista-espera']\">Lista de espera</ion-item>\r\n      </ion-menu-toggle>\r\n      \r\n      <ion-menu-toggle *ngIf=\"this.auth.usuarioActual?.tipo == 'metre'\">\r\n        <ion-item [routerLink]=\"['/mesa-asignada-cliente']\">Asignar mesas</ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle *ngIf=\"this.auth.usuarioActual?.tipo == 'metre'\">\r\n        <ion-item [routerLink]=\"['/registro-cliente']\">Registrar cliente</ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle *ngIf=\"this.auth.usuarioActual?.tipo == 'bartender' || this.auth.usuarioActual?.tipo == 'cocinero'\">\r\n        <ion-item [routerLink]=\"['/registro-producto']\">Registrar producto</ion-item>\r\n      </ion-menu-toggle>\r\n      \r\n      <ion-menu-toggle *ngIf=\"this.auth.usuarioActual?.perfil\">\r\n        <ion-item [routerLink]=\"['/registro-empleado']\">Registro empleado</ion-item>\r\n      </ion-menu-toggle>\r\n      \r\n      <ion-menu-toggle *ngIf=\"this.auth.usuarioActual?.perfil\">\r\n        <ion-item [routerLink]=\"['/registro-supervisor']\">Registro supervisor</ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-menu-toggle *ngIf=\"this.auth.usuarioActual?.perfil\">\r\n        <ion-item [routerLink]=\"['/registro-mesa']\">Alta de mesa</ion-item>\r\n      </ion-menu-toggle>\r\n      \r\n      <ion-menu-toggle *ngIf=\"this.auth?.usuarioActual?.tipo === 'mozo'\">\r\n        <ion-item [routerLink]=\"['/chat']\">Chat</ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map