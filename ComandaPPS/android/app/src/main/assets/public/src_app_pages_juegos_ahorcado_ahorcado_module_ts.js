(self["webpackChunkPPSComanda"] = self["webpackChunkPPSComanda"] || []).push([["src_app_pages_juegos_ahorcado_ahorcado_module_ts"],{

/***/ 9726:
/*!******************************************************************!*\
  !*** ./src/app/pages/juegos/ahorcado/ahorcado-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AhorcadoPageRoutingModule": () => (/* binding */ AhorcadoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ahorcado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ahorcado.page */ 5151);




const routes = [
    {
        path: '',
        component: _ahorcado_page__WEBPACK_IMPORTED_MODULE_0__.AhorcadoPage
    }
];
let AhorcadoPageRoutingModule = class AhorcadoPageRoutingModule {
};
AhorcadoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AhorcadoPageRoutingModule);



/***/ }),

/***/ 9223:
/*!**********************************************************!*\
  !*** ./src/app/pages/juegos/ahorcado/ahorcado.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AhorcadoPageModule": () => (/* binding */ AhorcadoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ahorcado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ahorcado-routing.module */ 9726);
/* harmony import */ var _ahorcado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ahorcado.page */ 5151);







let AhorcadoPageModule = class AhorcadoPageModule {
};
AhorcadoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ahorcado_routing_module__WEBPACK_IMPORTED_MODULE_0__.AhorcadoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_ahorcado_page__WEBPACK_IMPORTED_MODULE_1__.AhorcadoPage]
    })
], AhorcadoPageModule);



/***/ }),

/***/ 5151:
/*!********************************************************!*\
  !*** ./src/app/pages/juegos/ahorcado/ahorcado.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AhorcadoPage": () => (/* binding */ AhorcadoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ahorcado_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ahorcado.page.html */ 1983);
/* harmony import */ var _ahorcado_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ahorcado.page.scss */ 938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);





let AhorcadoPage = class AhorcadoPage {
    constructor(auth) {
        this.auth = auth;
        this.arrayPalabras = [];
        this.firstTime = true;
        this.imagenArray = [
            "assets/images/ahorcado/ahorcado-1.png",
            "assets/images/ahorcado/ahorcado-2.png",
            "assets/images/ahorcado/ahorcado-3.png",
            "assets/images/ahorcado/ahorcado-4.png",
            "assets/images/ahorcado/ahorcado-5.png",
            "assets/images/ahorcado/ahorcado-6.png",
            "assets/images/ahorcado/ahorcado-7.png",
            "assets/images/ahorcado/ahorcado-8.png",
        ];
        this.image = '';
        this.errores = 0;
        this.alertError = "";
        this.abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.arrayGuiones = [];
        this.letra = "";
        this.palabra = "";
        this.image = this.imagenArray[0];
        this.auth.getProductos()
            .subscribe((data) => {
            this.arrayPalabras = data;
            this.SetearPalabra();
            this.firstTime = false;
        });
    }
    ngOnInit() {
        // this.SetearPalabra();
    }
    getIndicesOf(searchStr, str, caseSensitive) {
        var searchStrLen = searchStr.length;
        if (searchStrLen == 0) {
            return [];
        }
        var startIndex = 0, index, indices = [];
        if (!caseSensitive) {
            str = str.toLowerCase();
            searchStr = searchStr.toLowerCase();
        }
        while ((index = str.indexOf(searchStr, startIndex)) > -1) {
            indices.push(index);
            startIndex = index + searchStrLen;
        }
        return indices;
    }
    obtenerRandom() {
        return Math.round(Math.random() * (this.arrayPalabras.length - 0));
    }
    cambiarLetra(letra) {
        console.log(this.arrayPalabras);
        let indiceACambiar = this.getIndicesOf(letra, this.palabra, false);
        if (indiceACambiar.length) {
            for (let indice of indiceACambiar) {
                this.arrayGuiones[indice] = letra;
            }
        }
        else {
            this.errores++;
            if (this.errores < 8) {
                this.image = this.imagenArray[this.errores];
            }
        }
    }
    SetearPalabra() {
        var _a;
        console.log(this.arrayPalabras);
        this.errores = 0;
        this.image = this.imagenArray[0];
        this.arrayGuiones = [];
        let random = this.obtenerRandom();
        this.palabra = (_a = this.arrayPalabras[random]) === null || _a === void 0 ? void 0 : _a.nombre;
        // this.palabra = this.arrayPalabras[0]; 
        /*PROBLEMA ACÁ. NO PUEDE LEER LENGHT NI ASIGNARLE ALGUN INDEX QUE NO EXISTA,
        HAY QUE VERIFICAR QUE EXISTA EL INDICE YA QUE NO EXISTE AL MOMENTO DE HACER LE SUBSCRIBE, QUIZÁ ALGUN SET TIME OUT
         POR ESO AGREGUÉ UN INDICE 0 PARA PROBAR
        HABRÍA QUE HACER QUE EL RANDOM TIRE ALGUN NUMERO QUE SEA INDICE ASI LO AGARRA EL LENGHT
        */
        for (let i = 0; i < this.palabra.length; i++) {
            this.arrayGuiones.push("_");
        }
        //console.log("random numero: " + random);
        console.log("palabra: " + this.palabra);
    }
};
AhorcadoPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
AhorcadoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ahorcado',
        template: _raw_loader_ahorcado_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ahorcado_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AhorcadoPage);



/***/ }),

/***/ 938:
/*!**********************************************************!*\
  !*** ./src/app/pages/juegos/ahorcado/ahorcado.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".btn-group button {\n  background-color: #04AA6D;\n  /* Green background */\n  border: 1px solid green;\n  /* Green border */\n  color: white;\n  /* White text */\n  padding: 10px 24px;\n  /* Some padding */\n  cursor: pointer;\n  /* Pointer/hand icon */\n  float: left;\n  /* Float the buttons side by side */\n}\n\ninput {\n  width: 100%;\n}\n\n.espacios {\n  margin: auto;\n}\n\n.col-2 {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFob3JjYWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQTJCLHFCQUFBO0VBQzNCLHVCQUFBO0VBQXlCLGlCQUFBO0VBQ3pCLFlBQUE7RUFBYyxlQUFBO0VBQ2Qsa0JBQUE7RUFBb0IsaUJBQUE7RUFDcEIsZUFBQTtFQUFpQixzQkFBQTtFQUNqQixXQUFBO0VBQWEsbUNBQUE7QUFPakI7O0FBSkU7RUFDRSxXQUFBO0FBT0o7O0FBSkE7RUFDSSxZQUFBO0FBT0o7O0FBSkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQU9KIiwiZmlsZSI6ImFob3JjYWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZ3JvdXAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7IC8qIEdyZWVuIGJhY2tncm91bmQgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAvKiBHcmVlbiBib3JkZXIgKi9cclxuICAgIGNvbG9yOiB3aGl0ZTsgLyogV2hpdGUgdGV4dCAqL1xyXG4gICAgcGFkZGluZzogMTBweCAyNHB4OyAvKiBTb21lIHBhZGRpbmcgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlci9oYW5kIGljb24gKi9cclxuICAgIGZsb2F0OiBsZWZ0OyAvKiBGbG9hdCB0aGUgYnV0dG9ucyBzaWRlIGJ5IHNpZGUgKi9cclxuICB9XHJcblxyXG4gIGlucHV0e1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmVzcGFjaW9ze1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5jb2wtMntcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG59Il19 */");

/***/ }),

/***/ 1983:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/juegos/ahorcado/ahorcado.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button>\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Ahorcado</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n      <div class=\"col-1 d-inline\">\r\n        <div id=\"keyboard\" *ngFor='let letra of abecedario' class='d-inline'>\r\n          <button class=\"btn btn-lg btn-primary m-2 d-inline\" id='letter' (click)=\"this.cambiarLetra(letra)\">{{letra}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row justify-content-center\">\r\n        <img style=\"height: 80%; width: 80%;\" [src]=\"image\">\r\n      </div>\r\n\r\n    <div *ngIf=\"errores>=7\">\r\n        <div>\r\n            <div class=\"text-danger row justify-content-center m-5\" style=\"font-size: 72px; font-family: Verdana, Geneva, Tahoma, sans-serif\">GAME OVER!</div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!arrayGuiones.includes('_') && !firstTime\">\r\n        <div>\r\n            <div class=\"text-success row justify-content-center m-5\" style=\"font-size: 72px; font-family:Verdana, Geneva, Tahoma, sans-serif\">GANASTE!</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row justify-content-center\" class=\"text-success row justify-content-center m-5\" style=\"font-size: 30px; font-family: Verdana, Geneva, Tahoma, sans-serif\">\r\n      <button (click)=\"SetearPalabra()\">Resetear</button>\r\n    </div>\r\n\r\n    <div class=\"text-light text-center\">\r\n      <div *ngIf=\"errores < 7\">\r\n        <div *ngFor='let espacio of this.arrayGuiones' class='espacios d-inline'>\r\n          <p class=\"d-inline px-1\">{{espacio}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_juegos_ahorcado_ahorcado_module_ts.js.map