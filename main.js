(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing */ "./src/app/routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cardapio_component_cardapio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardapio-component/cardapio.component */ "./src/app/cardapio-component/cardapio.component.ts");
/* harmony import */ var _cadastro_component_cadastro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cadastro-component/cadastro.component */ "./src/app/cadastro-component/cadastro.component.ts");
/* harmony import */ var _home_component_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-component/home.component */ "./src/app/home-component/home.component.ts");
/* harmony import */ var _item_component_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-component/item.component */ "./src/app/item-component/item.component.ts");
/* harmony import */ var _carrinho_component_carrinho_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./carrinho-component/carrinho.component */ "./src/app/carrinho-component/carrinho.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 /* Components importados */





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _cardapio_component_cardapio_component__WEBPACK_IMPORTED_MODULE_6__["CardapioComponent"], _cadastro_component_cadastro_component__WEBPACK_IMPORTED_MODULE_7__["CadastroComponent"], _home_component_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _item_component_item_component__WEBPACK_IMPORTED_MODULE_9__["ItemComponent"], _carrinho_component_carrinho_component__WEBPACK_IMPORTED_MODULE_10__["CarrinhoComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] /* Primeiro arquivo a ser executado, podendo ser qualquer component criado */
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cadastro-component/cadastro.component.css":
/*!***********************************************************!*\
  !*** ./src/app/cadastro-component/cadastro.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cadastro-component/cadastro.component.html":
/*!************************************************************!*\
  !*** ./src/app/cadastro-component/cadastro.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron col text-center\">\r\n  <a [routerLink]=\"['']\" style=\"text-decoration: none\"><h1 class=\"text-dark\">iFome</h1> </a>\r\n  <a [routerLink]=\"['']\"> <img class=\"img-fluid mt-2\" width=\"20%\" src=\"../../assets/img/burguer.png\" alt=\"\"></a>\r\n\r\n\r\n\r\n\r\n<div class=\"row justify-content-center\">\r\n        <h3 class=\"mt-3\">Cadastro:</h3>\r\n        </div>\r\n        \r\n    <div class=\"row justify-content-center mt-2\">\r\n        <div class=\"col-md-3\">\r\n            <form>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome\" [(ngModel)]=\"nome\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"E-mail\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"number\" class=\"form-control\" id=\"idade\" placeholder=\"Idade\" [(ngModel)]=\"idade\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" id=\"endereço\" placeholder=\"Endereço\" [(ngModel)]=\"endereco\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input type=\"password\" class=\"form-control\" id=\"senha\" placeholder=\"Senha\" [(ngModel)]=\"senha\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div class=\"row justify-content-center\">\r\n              <button type=\"submit\" class=\"btn btn-success m-2\" (click) = \"save(nome, email, idade, senha)\">Enviar</button>\r\n              <a [routerLink]=\"['']\"><button type=\"submit\" class=\"btn btn-success m-2\" >Voltar</button></a>\r\n              </div>\r\n            </form>\r\n        </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/cadastro-component/cadastro.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cadastro-component/cadastro.component.ts ***!
  \**********************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CadastroComponent = /** @class */ (function () {
    function CadastroComponent() {
    }
    CadastroComponent.prototype.save = function (nome, email, idade, senha) {
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('idade', idade);
        localStorage.setItem('senha', senha);
    };
    CadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.component.html */ "./src/app/cadastro-component/cadastro.component.html"),
            styles: [__webpack_require__(/*! ./cadastro.component.css */ "./src/app/cadastro-component/cadastro.component.css")]
        })
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/cardapio-component/cardapio.component.css":
/*!***********************************************************!*\
  !*** ./src/app/cardapio-component/cardapio.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    list-style: none;\r\n}"

/***/ }),

/***/ "./src/app/cardapio-component/cardapio.component.html":
/*!************************************************************!*\
  !*** ./src/app/cardapio-component/cardapio.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron col text-center\">\r\n        <a [routerLink]=\"['']\" style=\"text-decoration: none\"><h1 class=\"text-dark\">iFome</h1> </a>\r\n        <a [routerLink]=\"['']\"> <img class=\"img-fluid mt-2\" width=\"15%\" src=\"../../assets/img/burguer.png\" alt=\"\"></a>\r\n        \r\n<div class=\"row justify-content-center\">\r\n<h3 class=\"mt-3\">Escolha um restaurante:</h3>\r\n</div>\r\n\r\n<div class=\"row justify-content-center mt-2\">\r\n<ul class=\"list-group\">\r\n    \r\n    <div class=\"row justify-content-center\">\r\n        <div *ngFor=\"let cardapio of listaRestaurante\">\r\n            <div class=\"col-4\">\r\n                <div class=\"card m-3\" style=\"width: 18rem;\">\r\n                        <img class=\"card-img-top\" src=\"../../assets/img/{{cardapio.img}}\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                                <h4 class=\"card-title text-success\">{{cardapio.nome}}</h4>\r\n                                <h5 class=\"card-title\">Cardápio</h5>\r\n                            \r\n                                <ul class=\"card-text p-0\">\r\n                                    <li *ngFor=\"let item of cardapio.cardapio\">{{item.nome}}</li>\r\n                                    \r\n                                </ul>\r\n                                \r\n                            <h5 class=\"card-title mt-2\">Endereço</h5>\r\n                            <p class=\"card-text\">{{cardapio.endereco}}</p>\r\n                            <a [routerLink]=\"['/item']\" (click)=\"itens(cardapio.nome, cardapio.endereco, cardapio.img, cardapio.cardapio)\"><button type=\"submit\" class=\"btn btn-success m-2\" >Ver mais</button></a>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ul>\r\n</div>"

/***/ }),

/***/ "./src/app/cardapio-component/cardapio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cardapio-component/cardapio.component.ts ***!
  \**********************************************************/
/*! exports provided: CardapioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardapioComponent", function() { return CardapioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardapioComponent = /** @class */ (function () {
    function CardapioComponent() {
        this.listaRestaurante = [
            { nome: "McDonald's", endereco: 'Rua sei la o que', cardapio: [
                    { nome: 'Big Mac', img: 'bigmac.jpg', preco: 25 },
                    { nome: 'Batata Grande', img: 'batata.jpg', preco: 8 },
                    { nome: 'Coca 500 ml', img: 'coca.jpg', preco: 5 }
                ], img: "mcdonald.png" },
            { nome: 'Sushi Daora', endereco: 'Rua 2', cardapio: [
                    { nome: 'Combinado Sushi', img: 'sushi.jpg', preco: 50 },
                    { nome: 'Sashimi de Salmão', img: 'sashimi.jpg', preco: 45 },
                    { nome: 'Hot Filadélfia', img: 'hot.png', preco: 28 }
                ], img: "sushi.png" },
            { nome: 'Pizzaria 123', endereco: 'Rua 3', cardapio: [
                    { nome: 'Calabresa', img: 'calabresa.jpg', preco: 38 },
                    { nome: 'Portuguesa', img: 'portuguesa.jpg', preco: 28 },
                    { nome: 'Marguerita', img: 'marguerita.jpg', preco: 34 }
                ], img: "pizza.jpg" },
            { nome: 'Harburguer Monstrão', endereco: 'Rua 4', cardapio: [
                    { nome: 'X-Bacon', img: 'xburg.png', preco: 12 },
                    { nome: 'X-Tudão', img: 'xtudo.jpg', preco: 20 },
                    { nome: 'X-Infarto', img: 'infarto.jpg', preco: 24 }
                ], img: "burguer2.png" }
        ];
    }
    CardapioComponent.prototype.itens = function (nome, endereco, img, cardapio) {
        var cardapio1 = [cardapio[0].nome, cardapio[0].img, cardapio[0].preco];
        var cardapio2 = [cardapio[1].nome, cardapio[1].img, cardapio[1].preco];
        var cardapio3 = [cardapio[2].nome, cardapio[2].img, cardapio[2].preco];
        localStorage.setItem("nome", nome),
            localStorage.setItem("endereco", endereco),
            localStorage.setItem("img", img),
            localStorage.setItem("cardapio1", cardapio1),
            localStorage.setItem("cardapio2", cardapio2),
            localStorage.setItem("cardapio3", cardapio3);
    };
    ;
    CardapioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cardapio',
            template: __webpack_require__(/*! ./cardapio.component.html */ "./src/app/cardapio-component/cardapio.component.html"),
            styles: [__webpack_require__(/*! ./cardapio.component.css */ "./src/app/cardapio-component/cardapio.component.css")]
        })
    ], CardapioComponent);
    return CardapioComponent;
}());



/***/ }),

/***/ "./src/app/carrinho-component/carrinho.component.css":
/*!***********************************************************!*\
  !*** ./src/app/carrinho-component/carrinho.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/carrinho-component/carrinho.component.html":
/*!************************************************************!*\
  !*** ./src/app/carrinho-component/carrinho.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron col text-center\">\r\n        <h1 class=\"\"><a [routerLink]=\"['']\" class=\"text-dark\" style=\"text-decoration: none\">iFome</a></h1> \r\n        <a [routerLink]=\"['']\"> <img class=\"img-fluid mt-2\" width=\"20%\" src=\"../../assets/img/burguer.png\" alt=\"\"></a>\r\n        \r\n        <h3 class=\"mt-5\">Carrinho</h3>\r\n        <div class=\"row justify-content-center mt-3\">\r\n\r\n          \r\n\r\n\r\n        <div class=\"col-8 mt-2\">\r\n\r\n                <table class=\"table\">\r\n                                                                \r\n                        <thead>\r\n                                <tr>\r\n                                <th scope=\"col\">Foto</th>\r\n                                <th scope=\"col\">Nome</th>\r\n                                <th scope=\"col\">Preço</th>\r\n                                </tr>\r\n                        </thead>\r\n                        <tbody>\r\n\r\n                          <tr *ngFor = \"let i of item\">\r\n                            <td><img src=\"../../assets/img/{{i.img}}\" alt=\"\" class=\"img-fluid \" width=\"180px\"></td>\r\n                            <td class=\"align-middle\"><p class=\"card-text\">{{i.nome}}</p></td>\r\n                            <td class=\"align-middle\"><p class=\"card-text\">R${{i.preco}},00</p></td>\r\n                          </tr>\r\n                          <tr>\r\n                              <td></td>\r\n                              <td ></td>\r\n                              <td ><p>Total: R${{total}},00</p></td>\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                      </table>\r\n        \r\n        </div>       \r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/carrinho-component/carrinho.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/carrinho-component/carrinho.component.ts ***!
  \**********************************************************/
/*! exports provided: CarrinhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoComponent", function() { return CarrinhoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarrinhoComponent = /** @class */ (function () {
    function CarrinhoComponent() {
        this.nome = [];
        this.img = [];
        this.preco = [];
        this.item = [];
        this.total = 0;
    }
    CarrinhoComponent.prototype.ngOnInit = function () {
        this.nome = sessionStorage.getItem("c_nome").split(",");
        this.img = sessionStorage.getItem("c_img").split(",");
        this.preco = sessionStorage.getItem("c_preco").split(",");
        for (var i = 0; i < this.nome.length; i++) {
            this.item.push({ nome: this.nome[i], img: this.img[i], preco: parseFloat(this.preco[i]) });
            this.total = this.total + parseFloat(this.preco[i]);
        }
    };
    CarrinhoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carrinho',
            template: __webpack_require__(/*! ./carrinho.component.html */ "./src/app/carrinho-component/carrinho.component.html"),
            styles: [__webpack_require__(/*! ./carrinho.component.css */ "./src/app/carrinho-component/carrinho.component.css")]
        })
    ], CarrinhoComponent);
    return CarrinhoComponent;
}());



/***/ }),

/***/ "./src/app/home-component/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-component/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-component/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-component/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron col text-center\">\r\n        <a [routerLink]=\"['']\" style=\"text-decoration: none\"><h1 class=\"text-dark\">iFome</h1> </a>\r\n        <a [routerLink]=\"['']\"> <img class=\"img-fluid mt-2\" width=\"20%\" src=\"../../assets/img/burguer.png\" alt=\"\"></a>\r\n            \r\n\r\n        <div class=\"row justify-content-center mt-5\">\r\n                <div class=\"col\">\r\n                       <h2>Bem-vindo, escolha uma opção:</h2>\r\n                </div>\r\n        </div>\r\n\r\n        <div class=\"row justify-content-center mt-3\">\r\n                <div class=\"col\">                        \r\n                        <a [routerLink]=\"['/cadastro']\"><button type=\"button\" class=\"btn btn-success btn-lg float-sm-right mt-2\">Faça seu Cadastro</button></a>\r\n                </div>\r\n                <div class=\"col\">\r\n                        <a [routerLink]=\"['/cardapio']\"><button type=\"button\" class=\"btn btn-success btn-lg float-sm-left mt-2\">Veja nosso Cardápio</button></a>\r\n                </div>\r\n        </div>\r\n        \r\n</div>"

/***/ }),

/***/ "./src/app/home-component/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-component/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home-component/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home-component/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/item-component/item.component.css":
/*!***************************************************!*\
  !*** ./src/app/item-component/item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/item-component/item.component.html":
/*!****************************************************!*\
  !*** ./src/app/item-component/item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron col text-center\">\r\n        <h1 class=\"\"><a [routerLink]=\"['']\" class=\"text-dark\" style=\"text-decoration: none\">iFome</a></h1> \r\n        <a [routerLink]=\"['']\"> <img class=\"img-fluid mt-2\" width=\"15%\" src=\"../../assets/img/burguer.png\" alt=\"\"></a>\r\n\r\n        \r\n        <div class=\"row justify-content-center\">\r\n                <div class=\"card m-3\" style=\"width: 40rem;\">\r\n                        <img class=\"card-img-top\" src=\"../../assets/img/{{img}}\" alt=\"Card image cap\" width=\"10%\">\r\n                        <div class=\"card-body\">\r\n                                <h3 class=\"card-title text-success\">{{nome}}</h3>\r\n                              \r\n\r\n                                <h5 class=\"card-title mt-2\">Endereço</h5>\r\n                                <p class=\"card-text\">{{endereco}}</p>\r\n                                <h5 class=\"card-title\">Cardápio</h5>    \r\n                                <div class=\"col mt-2\">\r\n\r\n                                        <table class=\"table\">\r\n                                                                                        \r\n                                                <thead>\r\n                                                        <tr>\r\n                                                        <th scope=\"col\">Foto</th>\r\n                                                        <th scope=\"col\">Nome</th>\r\n                                                        <th scope=\"col\">Preço</th>\r\n                                                        <th scope=\"col\">Carrinho</th>\r\n                                                        </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                  <tr>\r\n                                                    <td><img src=\"../../assets/img/{{cardapio1[1]}}\" alt=\"\" class=\"img-fluid \" width=\"180px\"></td>\r\n                                                    <td class=\"align-middle\"><p class=\"card-text\">{{cardapio1[0]}}</p></td>\r\n                                                    <td class=\"align-middle\"><p class=\"card-text\">R${{cardapio1[2]}},00</p></td>\r\n                                                    <td class=\"align-middle\"> <a (click) = \"addCarrinho(cardapio1[0],cardapio1[1],cardapio1[2])\"><button type=\"submit\" class=\"btn btn-success\" ><b>+</b></button></a> </td>\r\n                                                  </tr>\r\n                                                  <tr>\r\n                                                    <td><img src=\"../../assets/img/{{cardapio2[1]}}\" alt=\"\" class=\"img-fluid \" width=\"180px\"></td>\r\n                                                    <td class=\"align-middle\"><p class=\"card-text\">{{cardapio2[0]}}</p></td>\r\n                                                    <td class=\"align-middle\"><p class=\"card-text\">R${{cardapio2[2]}},00</p></td>\r\n                                                    <td class=\"align-middle\"> <a (click) = \"addCarrinho(cardapio2[0],cardapio2[1],cardapio2[2])\"><button type=\"submit\" class=\"btn btn-success\" ><b>+</b></button></a> </td> \r\n                                                  </tr>\r\n                                                  <tr>\r\n                                                    <td><img src=\"../../assets/img/{{cardapio3[1]}}\" alt=\"\" class=\"img-fluid \" width=\"180px\"></td>\r\n                                                    <td class=\"align-middle\"><p class=\"card-text\">{{cardapio3[0]}}</p></td>\r\n                                                    <td class=\"align-middle\"><p class=\"card-text\">R${{cardapio3[2]}},00</p></td> \r\n                                                    <td class=\"align-middle\"> <a (click) = \"addCarrinho(cardapio3[0],cardapio3[1],cardapio3[2])\"><button type=\"submit\" class=\"btn btn-success\" ><b>+</b></button></a> </td> \r\n                                                  </tr>\r\n                                                </tbody>\r\n                                              </table>\r\n                                \r\n                                </div>       \r\n\r\n                        </div>\r\n                        <a [routerLink]=\"['/cardapio']\" *ngIf=\"!carrinhoon\"><button type=\"submit\" class=\"btn btn-success m-2\" >Voltar</button></a> \r\n                        <a [routerLink]=\"['/carrinho']\" *ngIf=\"carrinhoon\"><button type=\"submit\" class=\"btn btn-success m-2\" (click) = \"salvar()\" >Ver carrinho ({{c_nome.length}})</button></a> \r\n                        </div>\r\n        </div>\r\n\r\n        \r\n</div>"

/***/ }),

/***/ "./src/app/item-component/item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/item-component/item.component.ts ***!
  \**************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
        this.nome = localStorage.getItem("nome");
        this.endereco = localStorage.getItem("endereco");
        this.img = localStorage.getItem("img");
        this.cardapio1 = localStorage.getItem("cardapio1").split(",");
        this.cardapio2 = localStorage.getItem("cardapio2").split(",");
        this.cardapio3 = localStorage.getItem("cardapio3").split(",");
        this.c_img = [];
        this.c_nome = [];
        this.c_preco = [];
        this.carrinhoon = false;
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent.prototype.addCarrinho = function (nome, img, preco) {
        this.c_nome.push(nome);
        console.log(this.c_nome);
        this.c_img.push(img);
        console.log(this.c_img);
        this.c_preco.push(preco);
        console.log(this.c_preco);
        this.carrinhoon = true;
    };
    ;
    ItemComponent.prototype.salvar = function () {
        sessionStorage.setItem("c_nome", this.c_nome.toString());
        sessionStorage.setItem("c_img", this.c_img.toString());
        sessionStorage.setItem("c_preco", this.c_preco.toString());
    };
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item-component/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/item-component/item.component.css")]
        })
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/routing.ts":
/*!****************************!*\
  !*** ./src/app/routing.ts ***!
  \****************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cardapio_component_cardapio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardapio-component/cardapio.component */ "./src/app/cardapio-component/cardapio.component.ts");
/* harmony import */ var _cadastro_component_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro-component/cadastro.component */ "./src/app/cadastro-component/cadastro.component.ts");
/* harmony import */ var _home_component_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-component/home.component */ "./src/app/home-component/home.component.ts");
/* harmony import */ var _item_component_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-component/item.component */ "./src/app/item-component/item.component.ts");
/* harmony import */ var _carrinho_component_carrinho_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carrinho-component/carrinho.component */ "./src/app/carrinho-component/carrinho.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _home_component_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'cardapio',
        component: _cardapio_component_cardapio_component__WEBPACK_IMPORTED_MODULE_2__["CardapioComponent"]
    },
    {
        path: 'cadastro',
        component: _cadastro_component_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComponent"]
    },
    {
        path: 'item',
        component: _item_component_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"]
    },
    {
        path: 'carrinho',
        component: _carrinho_component_carrinho_component__WEBPACK_IMPORTED_MODULE_6__["CarrinhoComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\62118502017.1\desktop\angular\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map