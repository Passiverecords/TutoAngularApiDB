var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./auth_config.json": 
        /*!**************************!*\
          !*** ./auth_config.json ***!
          \**************************/
        /*! exports provided: clientId, domain, default */
        /***/ (function (module) {
            module.exports = JSON.parse("{\"clientId\":\"YOUR APP clientId\",\"domain\":\"YOUR APP domain\"}");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column h-100\">\n  <app-nav-bar></app-nav-bar>\n\n  <div class=\"flex-grow-1 flex-shrink-1\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <app-footer></app-footer>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>Top 5 des Heros</h3>\n<div>\n  <a *ngFor=\"let hero of heroes\" class=\"col-1-4\"\n        routerLink=\"/detail/{{hero._id}}\">\n      <div class=\"module hero\">\n        <h4>{{hero.name}}</h4>\n      </div>\n  </a>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/profile/profile.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/profile/profile.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\" *ngIf=\"auth.userProfile$ | async as profile\">\n  <div\n    class=\"row align-items-center profile-header mb-5 text-center text-md-left\"\n  >\n    <div class=\"col-md-2\">\n      <img\n        [src]=\"profile.picture\"\n        class=\"rounded-circle img-fluid profile-picture mb-3 mb-md-0\"\n      />\n    </div>\n    <div class=\"col-md\">\n      <h2>{{ profile.name }}</h2>\n      <p class=\"lead text-muted\">{{ profile.email }}</p>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"profileJson\">\n    <pre class=\"rounded\">\n      <code>\n        <pre class=\"json\"[highlight]=\"profileJson\"></pre>\n      </code>\n    </pre>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"bg-light p-3 text-center\">\n    <div class=\"logo\"></div>\n    <p>\n      Sample project provided by\n      <a href=\"https://auth0.com\">Auth0</a>\n    </p>\n  </footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hero-detail/hero-detail.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hero-detail/hero-detail.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"hero\">\n    <h2>{{hero.name | uppercase}} Details</h2>\n    <div><span>id: </span>{{hero._id}}</div>\n    <div>\n      <label>name:\n          <input  *ngIf=\"'delete:hero' | accessePermission ; else elseBlock\"[(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n          <ng-template #elseBlock>{{hero.name}}</ng-template>\n      </label>\n    </div>\n    <button (click)=\"goBack()\">go back</button>\n    <button *ngIf=\"'delete:hero' | accessePermission\" (click)=\"save()\">save</button>\n  </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hero-search/hero-search.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hero-search/hero-search.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"search-component\">\n    <h4><label for=\"search-box\">Hero Search</label></h4>\n\n    <input #searchBox id=\"search-box\" (input)=\"search(searchBox.value)\" />\n\n    <ul class=\"search-result\">\n    <li *ngFor=\"let hero of heroes$ | async\" >\n        <a routerLink=\"/detail/{{hero._id}}\">\n        {{hero.name}}\n        </a>\n    </li>\n    </ul>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/heroes/heroes.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/heroes/heroes.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>My Heroes</h3>\n<div>\n  <label>Hero name:\n    <input #heroName />\n  </label>\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button *ngIf=\"'create:hero' | accessePermission\" (click)=\"add(heroName.value); heroName.value=''\">\n    add\n  </button>\n</div>\n\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\">\n    <a routerLink=\"/detail/{{hero._id}}\">\n      <span class=\"badge\">{{hero._id}}</span> {{hero.name}}\n    </a>\n    <button *ngIf=\"'delete:hero' | accessePermission\" class=\"delete\" title=\"delete hero\" (click)=\"delete(hero)\">\n      x Supprimer\n    </button>\n  </li>\n</ul>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center hero my-5\">\n  <img class=\"mb-3 app-logo\" src=\"../../assets/logo.png\" alt=\"Angular logo\" />\n  <h1 class=\"mb-4\">Angular Sample Project</h1>\n\n  <p class=\"lead\">\n    This is a sample application that demonstrates an authentication flow for an\n    SPA, using\n    <a href=\"https://angular.io\">Angular</a>\n  </p>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading\">\n  <img src=\"../../../assets/loading.svg\" alt=\"Loading...\" />\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"messageService.messages.length\">\n\n    <h2>Messages</h2>\n    <button class=\"clear\"\n        (click)=\"messageService.clear()\">clear</button>\n    <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-container\">\n    <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n      <div class=\"container\">\n        <div class=\"navbar-brand logo\"></div>\n        <button\n          class=\"navbar-toggler\"\n          type=\"button\"\n          data-toggle=\"collapse\"\n          data-target=\"#navbarNav\"\n          aria-controls=\"navbarNav\"\n          [attr.aria-expanded]=\"!isCollapsed\"\n          aria-label=\"Toggle navigation\"\n          (click)=\"isCollapsed = !isCollapsed\"\n        >\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div\n          class=\"collapse navbar-collapse\"\n          id=\"navbarNav\"\n          [ngbCollapse]=\"isCollapsed\"\n        >\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n              <a routerLink=\"/\" class=\"nav-link\">Home</a>\n            </li>\n          </ul>\n          <ul *ngIf=\"'read:hero' | accessePermission\" class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n              <a routerLink=\"/dashboard\" class=\"nav-link\">Dashboard</a>\n            </li>\n          </ul>\n          <ul *ngIf=\"'read:hero' | accessePermission\" class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n              <a routerLink=\"/heroes\" class=\"nav-link\">Heroes</a>\n            </li>\n          </ul>\n\n          <ul class=\"navbar-nav d-none d-md-block\">\n            <!-- Login button: show if NOT authenticated -->\n            <li class=\"nav-item\" *ngIf=\"auth.loggedIn === false\">\n              <button\n                id=\"qsLoginBtn\"\n                class=\"btn btn-primary btn-margin\"\n                (click)=\"auth.login()\"\n              >\n                Log in\n              </button>\n            </li>\n            <!-- / Login button -->\n\n            <!-- Fullsize dropdown: show if authenticated -->\n            <li class=\"nav-item dropdown\" *ngIf=\"auth.loggedIn === true && auth.userProfile$ | async as profile\" ngbDropdown>\n              <a\n                ngbDropdownToggle\n                class=\"nav-link dropdown-toggle\"\n                id=\"profileDropDown\"\n                data-toggle=\"dropdown\"\n              >\n                <!-- Profile image should be set to the profile picture from the id token -->\n                <img\n                  [src]=\"profile.picture\"\n                  alt=\"Profile picture\"\n                  class=\"nav-user-profile rounded-circle\"\n                  style=\"width: 75px\"\n                />\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-left\" ngbDropdownMenu>\n                <!-- Show the user's full name from the id token here -->\n                <div class=\"dropdown-header\" *ngIf=\"profile\">\n                  {{ profile.name }}\n                </div>\n                <a\n                  routerLink=\"/profile\"\n                  class=\"dropdown-item dropdown-profile\"\n                  *ngIf=\"profile\"\n                >\n                  <fa-icon [icon]=\"faUser\" class=\"mr-3\"></fa-icon> Profile\n                </a>\n                <button\n                  (click)=\"auth.logout()\"\n                  class=\"btn btn-link dropdown-item\"\n                  id=\"qsLogoutBtn\"\n                >\n                  <fa-icon [icon]=\"faPowerOff\" class=\"mr-3\"></fa-icon> Log out\n                </button>\n              </div>\n            </li>\n            <!-- /Fullsize dropdown -->\n          </ul>\n\n          <!-- Responsive login button: show if NOT authenticated -->\n          <ul class=\"navbar-nav d-md-none\" *ngIf=\"auth.loggedIn === false\">\n            <button\n              class=\"btn btn-primary btn-block\"\n              id=\"qsLoginBtn\"\n              (click)=\"auth.login()\"\n            >\n              Log in\n            </button>\n          </ul>\n          <!-- /Responsive login button -->\n\n          <!-- Responsive profile dropdown: show if authenticated -->\n          <div *ngIf=\"auth.loggedIn === true\">\n                        <ul\n              class=\"navbar-nav d-md-none justify-content-between\"\n              *ngIf=\"auth.userProfile$ | async as profile\"\n              style=\"min-height: 170px\"\n            >\n              <li class=\"nav-item\">\n                <span class=\"user-info\" *ngIf=\"profile\">\n                  <!-- Profile image should be set to the profile picture from the id token -->\n                  <img\n                    alt=\"Profile picture\"\n                    class=\"nav-user-profile d-inline-block rounded-circle mr-3\"\n                    style=\"width: 75px\"\n                    [src]=\"profile.picture\"\n                  />\n                  <!-- Show the user's full name from the id token here -->\n                  <h6 class=\"d-inline-block\">{{ profile.name }}</h6>\n                </span>\n              </li>\n              <li>\n                <fa-icon [icon]=\"faUser\" class=\"mr-3\"></fa-icon>\n                <a routerLink=\"/profile\">Profile</a>\n              </li>\n\n              <li>\n                <fa-icon [icon]=\"faPowerOff\" class=\"mr-3\"></fa-icon>\n                <button\n                  class=\"btn btn-link p-0\"\n                  id=\"qsLogoutBtn\"\n                  (click)=\"auth.logout()\"\n                >\n                  Log out\n                </button>\n              </li>\n            </ul>\n          </div>\n\n        </div>\n      </div>\n    </nav>\n  </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
            /* harmony import */ var _auth2_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth2/auth.guard */ "./src/app/auth2/auth.guard.ts");
            /* harmony import */ var _components_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/profile/profile.component */ "./src/app/components/dashboard/profile/profile.component.ts");
            /* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
            /* harmony import */ var _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/heroes/heroes.component */ "./src/app/components/heroes/heroes.component.ts");
            /* harmony import */ var _components_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/hero-detail/hero-detail.component */ "./src/app/components/hero-detail/hero-detail.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _service_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/interceptor.service */ "./src/app/service/interceptor.service.ts");
            var routes = [
                { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _auth2_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard2"]], },
                { path: 'detail/:_id', component: _components_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_9__["HeroDetailComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _auth2_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard2"]] },
                { path: 'heroes', component: _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_8__["HeroesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _auth2_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard2"]] },
                { path: 'profile', component: _components_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
                { path: '**', redirectTo: '', pathMatch: 'full' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                    providers: [
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                            useClass: _service_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["InterceptorService"],
                            multi: true
                        }
                    ]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: hljsLanguages, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function () { return hljsLanguages; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
            /* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js/lib/languages/json */ "./node_modules/highlight.js/lib/languages/json.js");
            /* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/profile/profile.component */ "./src/app/components/dashboard/profile/profile.component.ts");
            /* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
            /* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
            /* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
            /* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
            /* harmony import */ var _components_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/hero-detail/hero-detail.component */ "./src/app/components/hero-detail/hero-detail.component.ts");
            /* harmony import */ var _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/heroes/heroes.component */ "./src/app/components/heroes/heroes.component.ts");
            /* harmony import */ var _components_hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/hero-search/hero-search.component */ "./src/app/components/hero-search/hero-search.component.ts");
            /* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
            /* harmony import */ var _pipe_permison_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipe/permison.pipe */ "./src/app/pipe/permison.pipe.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            function hljsLanguages() {
                return [{ name: 'json', func: highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_5___default.a }];
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                        _components_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
                        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"],
                        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                        _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_16__["HeroesComponent"],
                        _components_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_15__["HeroDetailComponent"],
                        _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_18__["MessagesComponent"],
                        _components_hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_17__["HeroSearchComponent"],
                        _pipe_permison_pipe__WEBPACK_IMPORTED_MODULE_19__["PermissionPipe"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__["HighlightModule"].forRoot({
                            languages: hljsLanguages
                        }),
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.guard.ts": 
        /*!************************************!*\
          !*** ./src/app/auth/auth.guard.ts ***!
          \************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(auth) {
                    this.auth = auth;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    var _this = this;
                    return this.auth.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
                        if (!loggedIn) {
                            _this.auth.login(state.url);
                        }
                    }));
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/auth2/auth.guard.ts": 
        /*!*************************************!*\
          !*** ./src/app/auth2/auth.guard.ts ***!
          \*************************************/
        /*! exports provided: AuthGuard2 */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard2", function () { return AuthGuard2; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
            var AuthGuard2 = /** @class */ (function () {
                function AuthGuard2(auth) {
                    this.auth = auth;
                }
                AuthGuard2.prototype.canActivate = function (next, state) {
                    return this.auth.permissions.includes('read:hero');
                };
                return AuthGuard2;
            }());
            AuthGuard2.ctorParameters = function () { return [
                { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            AuthGuard2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard2);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/dashboard.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/dashboard/dashboard.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n    float: left;\n    padding-right: 20px;\n    padding-bottom: 20px;\n  }\n[class*='col-']:last-of-type {\n    padding-right: 0;\n  }\na {\n    text-decoration: none;\n  }\n*, *:after, *:before {\n    box-sizing: border-box;\n  }\nh3 {\n    text-align: center;\n    margin-bottom: 0;\n  }\nh4 {\n    position: relative;\n  }\n.grid {\n    margin: 0;\n  }\n.col-1-4 {\n    width: 25%;\n  }\n.module {\n    padding: 20px;\n    text-align: center;\n    color: #eee;\n    max-height: 120px;\n    min-width: 120px;\n    background-color: #3f525c;\n    border-radius: 2px;\n  }\n.module:hover {\n    background-color: #eee;\n    cursor: pointer;\n    color: #607d8b;\n  }\n.grid-pad {\n    padding: 10px 0;\n  }\n.grid-pad > [class*='col-']:last-of-type {\n    padding-right: 20px;\n  }\n@media (max-width: 600px) {\n    .module {\n      font-size: 10px;\n      max-height: 75px; }\n  }\n@media (max-width: 1024px) {\n    .grid {\n      margin: 0;\n    }\n    .module {\n      min-width: 60px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDO0FBQzVDO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7RUFDdEI7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFHRSxzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDQTtJQUNFO01BQ0UsZUFBZTtNQUNmLGdCQUFnQixFQUFFO0VBQ3RCO0FBQ0E7SUFDRTtNQUNFLFNBQVM7SUFDWDtJQUNBO01BQ0UsZUFBZTtJQUNqQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEYXNoYm9hcmRDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbltjbGFzcyo9J2NvbC0nXSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAqLCAqOmFmdGVyLCAqOmJlZm9yZSB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBoNCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5ncmlkIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmNvbC0xLTQge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLm1vZHVsZSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNlZWU7XG4gICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MjVjO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgfVxuICAubW9kdWxlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzYwN2Q4YjtcbiAgfVxuICAuZ3JpZC1wYWQge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuICAuZ3JpZC1wYWQgPiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5tb2R1bGUge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgbWF4LWhlaWdodDogNzVweDsgfVxuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuZ3JpZCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5tb2R1bGUge1xuICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgIH1cbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/dashboard.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/dashboard/dashboard.component.ts ***!
          \*************************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/hero.service */ "./src/app/service/hero.service.ts");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(heroService) {
                    this.heroService = heroService;
                    this.heroes = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                DashboardComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService.getHeroes()
                        .subscribe(function (heroes) { return _this.heroes = heroes.slice(0, 5); }, function (error) {
                        alert('ttt');
                    });
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _service_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/profile/profile.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/dashboard/profile/profile.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".userImg {\n  border-radius: 100px;\n  display: block;\n  height: 100px;\n  margin: 0 auto;\n  width: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDBweDtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/profile/profile.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/dashboard/profile/profile.component.ts ***!
          \*******************************************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
            /* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent(auth, api) {
                    this.auth = auth;
                    this.api = api;
                    this.profileJson = null;
                    this.responseJson = null;
                    this.permissions = [];
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var p = this.auth.userProfile$.subscribe(function (profile) { return _this.profileJson = JSON.stringify(profile, null, 2); });
                    this.permissions = this.auth.permissions;
                };
                return ProfileComponent;
            }());
            ProfileComponent.ctorParameters = function () { return [
                { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/components/dashboard/profile/profile.component.css")).default]
                })
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/footer/footer.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/footer/footer.component.ts ***!
          \*******************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/hero-detail/hero-detail.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/components/hero-detail/hero-detail.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* HeroDetailComponent's private CSS styles */\nlabel {\n    display: inline-block;\n    width: 100%;\n    margin: .5em 0;\n    color: #607D8B;\n    font-weight: bold;\n  }\ninput {\n    height: 2em;\n    font-size: 1em;\n    padding-left: .4em;\n  }\nbutton {\n    margin-top: 20px;\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n  }\nbutton:hover {\n    background-color: #cfd8dc;\n  }\nbutton:disabled {\n    background-color: #eee;\n    color: #ccc;\n    cursor: auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZXJvLWRldGFpbC9oZXJvLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QztJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZXJvLWRldGFpbC9oZXJvLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb0RldGFpbENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xubGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IC41ZW0gMDtcbiAgICBjb2xvcjogIzYwN0Q4QjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBpbnB1dCB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZy1sZWZ0OiAuNGVtO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjdXJzb3I6IGhhbmQ7XG4gIH1cbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICB9XG4gIGJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogI2NjYztcbiAgICBjdXJzb3I6IGF1dG87XG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/hero-detail/hero-detail.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/hero-detail/hero-detail.component.ts ***!
          \*****************************************************************/
        /*! exports provided: HeroDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function () { return HeroDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _service_hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/hero.service */ "./src/app/service/hero.service.ts");
            var HeroDetailComponent = /** @class */ (function () {
                function HeroDetailComponent(route, heroService, location) {
                    this.route = route;
                    this.heroService = heroService;
                    this.location = location;
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    this.getHero();
                };
                HeroDetailComponent.prototype.getHero = function () {
                    var _this = this;
                    var id = location.pathname.split('/')[2];
                    this.heroService.getHero(id)
                        .subscribe(function (hero) { return _this.hero = hero; });
                };
                HeroDetailComponent.prototype.goBack = function () {
                    this.location.back();
                };
                HeroDetailComponent.prototype.save = function () {
                    var _this = this;
                    this.heroService.updateHero(this.hero)
                        .subscribe(function () { return _this.goBack(); });
                };
                return HeroDetailComponent;
            }());
            HeroDetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _service_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], HeroDetailComponent.prototype, "hero", void 0);
            HeroDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-hero-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hero-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hero-detail/hero-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/components/hero-detail/hero-detail.component.css")).default]
                })
            ], HeroDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/components/hero-search/hero-search.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/components/hero-search/hero-search.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* HeroSearch private styles */\n.search-result li {\n    border-bottom: 1px solid gray;\n    border-left: 1px solid gray;\n    border-right: 1px solid gray;\n    width: 195px;\n    height: 16px;\n    padding: 5px;\n    background-color: white;\n    cursor: pointer;\n    list-style-type: none;\n  }\n.search-result li:hover {\n    background-color: #607D8B;\n  }\n.search-result li a {\n    color: #888;\n    display: block;\n    text-decoration: none;\n  }\n.search-result li a:hover {\n    color: white;\n  }\n.search-result li a:active {\n    color: white;\n  }\n#search-box {\n    width: 200px;\n    height: 20px;\n  }\nul.search-result {\n    margin-top: 0;\n    padding-left: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZXJvLXNlYXJjaC9oZXJvLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4QjtBQUM5QjtJQUNJLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUdBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlcm8tc2VhcmNoL2hlcm8tc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvU2VhcmNoIHByaXZhdGUgc3R5bGVzICovXG4uc2VhcmNoLXJlc3VsdCBsaSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gICAgd2lkdGg6IDE5NXB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICBcbiAgLnNlYXJjaC1yZXN1bHQgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIH1cbiAgXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGEge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5zZWFyY2gtcmVzdWx0IGxpIGE6YWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgI3NlYXJjaC1ib3gge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIFxuICB1bC5zZWFyY2gtcmVzdWx0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/hero-search/hero-search.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/hero-search/hero-search.component.ts ***!
          \*****************************************************************/
        /*! exports provided: HeroSearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSearchComponent", function () { return HeroSearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _service_hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/hero.service */ "./src/app/service/hero.service.ts");
            var HeroSearchComponent = /** @class */ (function () {
                function HeroSearchComponent(heroService) {
                    this.heroService = heroService;
                    this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                }
                // Push a search term into the observable stream.
                HeroSearchComponent.prototype.search = function (term) {
                    this.searchTerms.next(term);
                };
                HeroSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.heroes$ = this.searchTerms.pipe(
                    // wait 300ms after each keystroke before considering the term
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
                    // ignore new term if same as previous term
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), 
                    // switch to new search observable each time the term changes
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.heroService.searchHeroes(term); }));
                };
                return HeroSearchComponent;
            }());
            HeroSearchComponent.ctorParameters = function () { return [
                { type: _service_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"] }
            ]; };
            HeroSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-hero-search',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hero-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hero-search/hero-search.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hero-search.component.css */ "./src/app/components/hero-search/hero-search.component.css")).default]
                })
            ], HeroSearchComponent);
            /***/ 
        }),
        /***/ "./src/app/components/heroes/heroes.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/heroes/heroes.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* HeroesComponent's private CSS styles */\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n}\n.heroes li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes a {\n  color: #333;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 100%;\n}\n.heroes a:hover {\n  color:#607D8B;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color:#405061;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  top: -32px;\n  left: 50%;\n  background-color: gray !important;\n  color: white;\n}\nh3 {\n  text-align: center;\n  margin-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDO0FBQ3pDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQ0FBaUM7RUFDakMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi5oZXJvZXMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZXJvZXMgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhlcm9lcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBsZWZ0OiAuMWVtO1xufVxuXG4uaGVyb2VzIGEge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlcm9lcyBhOmhvdmVyIHtcbiAgY29sb3I6IzYwN0Q4Qjtcbn1cblxuLmhlcm9lcyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWluLXdpZHRoOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxuXG5idXR0b24uZGVsZXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMnB4O1xuICBsZWZ0OiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/heroes/heroes.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/heroes/heroes.component.ts ***!
          \*******************************************************/
        /*! exports provided: HeroesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function () { return HeroesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
            /* harmony import */ var _service_hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/hero.service */ "./src/app/service/hero.service.ts");
            var HeroesComponent = /** @class */ (function () {
                function HeroesComponent(heroService, auth) {
                    this.heroService = heroService;
                    this.auth = auth;
                }
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService.getHeroes()
                        .subscribe(function (heroes) {
                        _this.heroes = heroes;
                    });
                };
                HeroesComponent.prototype.add = function (name) {
                    var _this = this;
                    name = name.trim();
                    if (!name) {
                        return;
                    }
                    this.heroService.addHero({ name: name })
                        .subscribe(function (hero) {
                        _this.heroes.push(hero);
                    });
                };
                HeroesComponent.prototype.delete = function (hero) {
                    this.heroes = this.heroes.filter(function (h) { return h !== hero; });
                    this.heroService.deleteHero(hero);
                };
                return HeroesComponent;
            }());
            HeroesComponent.ctorParameters = function () { return [
                { type: _service_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"] },
                { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-heroes',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heroes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/heroes/heroes.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heroes.component.css */ "./src/app/components/heroes/heroes.component.css")).default]
                })
            ], HeroesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(auth) {
                    this.auth = auth;
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/loading/loading.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/loading/loading.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".loading {\n  display: flex;\n  min-height: 500px;\n  align-items: center;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/loading/loading.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/loading/loading.component.ts ***!
          \*********************************************************/
        /*! exports provided: LoadingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () { return LoadingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoadingComponent = /** @class */ (function () {
                function LoadingComponent() {
                }
                LoadingComponent.prototype.ngOnInit = function () {
                };
                return LoadingComponent;
            }());
            LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loading',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loading/loading.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading.component.css */ "./src/app/components/loading/loading.component.css")).default]
                })
            ], LoadingComponent);
            /***/ 
        }),
        /***/ "./src/app/components/messages/messages.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/messages/messages.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* MessagesComponent's private CSS styles */\nh2 {\n    color: red;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: lighter;\n  }\nbody {\n    margin: 2em;\n  }\nbody, input[text], button {\n    color: crimson;\n    font-family: Cambria, Georgia;\n  }\nbutton.clear {\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n  }\nbutton:hover {\n    background-color: #cfd8dc;\n  }\nbutton:disabled {\n    background-color: #eee;\n    color: #aaa;\n    cursor: auto;\n  }\nbutton.clear {\n    color: #333;\n    margin-bottom: 12px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUMzQztJQUNJLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsb0JBQW9CO0VBQ3RCO0FBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDQTtJQUNFLGNBQWM7SUFDZCw2QkFBNkI7RUFDL0I7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1lc3NhZ2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMiB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgfVxuICBib2R5IHtcbiAgICBtYXJnaW46IDJlbTtcbiAgfVxuICBib2R5LCBpbnB1dFt0ZXh0XSwgYnV0dG9uIHtcbiAgICBjb2xvcjogY3JpbXNvbjtcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcbiAgfVxuICBcbiAgYnV0dG9uLmNsZWFyIHtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjdXJzb3I6IGhhbmQ7XG4gIH1cbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICB9XG4gIGJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogI2FhYTtcbiAgICBjdXJzb3I6IGF1dG87XG4gIH1cbiAgYnV0dG9uLmNsZWFyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/messages/messages.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/messages/messages.component.ts ***!
          \***********************************************************/
        /*! exports provided: MessagesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () { return MessagesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/message.service */ "./src/app/service/message.service.ts");
            var MessagesComponent = /** @class */ (function () {
                function MessagesComponent(messageService) {
                    this.messageService = messageService;
                }
                MessagesComponent.prototype.ngOnInit = function () {
                };
                return MessagesComponent;
            }());
            MessagesComponent.ctorParameters = function () { return [
                { type: _service_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
            ]; };
            MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-messages',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/messages/messages.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.component.css */ "./src/app/components/messages/messages.component.css")).default]
                })
            ], MessagesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/nav-bar/nav-bar.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/nav-bar/nav-bar.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
          \*********************************************************/
        /*! exports provided: NavBarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () { return NavBarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
            /* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
            var NavBarComponent = /** @class */ (function () {
                function NavBarComponent(auth) {
                    this.auth = auth;
                    this.isCollapsed = true;
                    this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
                    this.faPowerOff = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPowerOff"];
                }
                NavBarComponent.prototype.ngOnInit = function () {
                };
                return NavBarComponent;
            }());
            NavBarComponent.ctorParameters = function () { return [
                { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav-bar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")).default]
                })
            ], NavBarComponent);
            /***/ 
        }),
        /***/ "./src/app/pipe/permison.pipe.ts": 
        /*!***************************************!*\
          !*** ./src/app/pipe/permison.pipe.ts ***!
          \***************************************/
        /*! exports provided: PermissionPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionPipe", function () { return PermissionPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
            var PermissionPipe = /** @class */ (function () {
                function PermissionPipe(auth) {
                    this.auth = auth;
                }
                PermissionPipe.prototype.transform = function (permission) {
                    return this.auth.permissions.includes(permission);
                };
                return PermissionPipe;
            }());
            PermissionPipe.ctorParameters = function () { return [
                { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            PermissionPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'accessePermission',
                    pure: false
                })
            ], PermissionPipe);
            /***/ 
        }),
        /***/ "./src/app/service/api.service.ts": 
        /*!****************************************!*\
          !*** ./src/app/service/api.service.ts ***!
          \****************************************/
        /*! exports provided: ApiService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function () { return ApiService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ApiService = /** @class */ (function () {
                function ApiService(http) {
                    this.http = http;
                }
                ApiService.prototype.ping$ = function () {
                    return this.http.get('http://127.0.0.1:3000/');
                };
                return ApiService;
            }());
            ApiService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ApiService);
            /***/ 
        }),
        /***/ "./src/app/service/auth.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/auth.service.ts ***!
          \*****************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
            /* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _auth_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth_config.json */ "./auth_config.json");
            var _auth_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../../../auth_config.json */ "./auth_config.json", 1);
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
            var AuthService = /** @class */ (function () {
                function AuthService(router, apiService) {
                    var _this = this;
                    this.router = router;
                    this.apiService = apiService;
                    this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default()({
                        domain: _auth_config_json__WEBPACK_IMPORTED_MODULE_3__["domain"],
                        client_id: _auth_config_json__WEBPACK_IMPORTED_MODULE_3__["clientId"],
                        redirect_uri: "" + window.location.origin,
                        audience: "http://127.0.0.1:3000/listeHeros"
                    })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err); }));
                    this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (client) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(client.isAuthenticated()); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) { return _this.loggedIn = res; }));
                    this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (client) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(client.handleRedirectCallback()); }));
                    this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({ permissions: [] });
                    this.userProfile$ = this.userProfileSubject$.asObservable();
                    this.loggedIn = null;
                    this.localAuthSetup();
                    this.handleAuthCallback();
                }
                AuthService.prototype.getUser$ = function (options) {
                    var _this = this;
                    // return this.auth0Client$.pipe(
                    //   concatMap((client: Auth0Client) => {
                    //     return from(client.getUser(options))
                    //   } ),
                    //   tap(user =>{
                    //     this.userProfileSubject$.next(user)
                    //   })
                    // );
                    return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (client) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(client.getUser(options)), _this.apiService.ping$());
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
                        res[0].permissions = res[1].jwtPayload.permissions;
                        _this.userProfileSubject$.next(res[0]);
                    }));
                };
                Object.defineProperty(AuthService.prototype, "permissions", {
                    get: function () {
                        return this.userProfileSubject$.getValue().permissions;
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthService.prototype.localAuthSetup = function () {
                    var _this = this;
                    var checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (loggedIn) {
                        if (loggedIn) {
                            return _this.getUser$();
                        }
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(loggedIn);
                    }));
                    checkAuth$.subscribe();
                };
                AuthService.prototype.login = function (redirectPath) {
                    if (redirectPath === void 0) { redirectPath = '/'; }
                    this.auth0Client$.subscribe(function (client) {
                        client.loginWithRedirect({
                            redirect_uri: "" + window.location.origin,
                            appState: { target: redirectPath }
                        });
                    });
                };
                AuthService.prototype.handleAuthCallback = function () {
                    var _this = this;
                    var params = window.location.search;
                    if (params.includes('code=') && params.includes('state=')) {
                        var targetRoute_1;
                        var authComplete$ = this.handleRedirectCallback$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (cbRes) {
                            targetRoute_1 = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
                        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function () {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
                                _this.getUser$(),
                                _this.isAuthenticated$
                            ]);
                        }));
                        authComplete$.subscribe(function (_a) {
                            var _b = __read(_a, 2), user = _b[0], loggedIn = _b[1];
                            _this.router.navigate([targetRoute_1]);
                        });
                    }
                };
                AuthService.prototype.getTokenSilently$ = function (options) {
                    return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (client) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(client.getTokenSilently(options)); }));
                };
                AuthService.prototype.logout = function () {
                    this.auth0Client$.subscribe(function (client) {
                        // Call method to log out
                        client.logout({
                            client_id: _auth_config_json__WEBPACK_IMPORTED_MODULE_3__["clientId"],
                            returnTo: window.location.origin
                        });
                    });
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/service/hero.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/hero.service.ts ***!
          \*****************************************/
        /*! exports provided: HeroService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function () { return HeroService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/service/message.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HeroService = /** @class */ (function () {
                function HeroService(http, messageService, router) {
                    this.http = http;
                    this.messageService = messageService;
                    this.router = router;
                    this.heroesUrl = 'http://127.0.0.1:3000/listeHeros'; // URL to web api
                }
                /** GET heroes from the server */
                HeroService.prototype.getHeroes = function () {
                    var _this = this;
                    return this.http.get(this.heroesUrl)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('fetched heroes'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getHeroes', [])));
                };
                /** GET hero by id. Return `undefined` when id not found */
                HeroService.prototype.getHeroNo404 = function (_id) {
                    var _this = this;
                    var url = this.heroesUrl + "/" + _id;
                    return this.http.get(url)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (heroes) { return heroes[0]; }), // returns a {0|1} element array
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) {
                        var outcome = h ? "fetched" : "did not find";
                        _this.log(outcome + " hero _id=" + _id);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getHero _id=" + _id)));
                };
                /** GET hero by id. Will 404 if id not found */
                HeroService.prototype.getHero = function (_id) {
                    var _this = this;
                    var url = this.heroesUrl + "/" + _id;
                    return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched hero _id=" + _id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getHero _id=" + _id)));
                };
                /* GET heroes whose name contains search term */
                HeroService.prototype.searchHeroes = function (term) {
                    var _this = this;
                    if (!term.trim()) {
                        // if not search term, return empty hero array.
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                    }
                    return this.http.get(this.heroesUrl + "/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("found heroes matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('searchHeroes', [])));
                };
                //////// Save methods //////////
                /** POST: add a new hero to the server */
                HeroService.prototype.addHero = function (hero) {
                    var _this = this;
                    return this.http.post(this.heroesUrl, hero).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newHero) { return _this.log("added hero w/ _id=" + newHero._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addHero')));
                };
                /** DELETE: delete the hero from the server */
                HeroService.prototype.deleteHero = function (hero) {
                    var _this = this;
                    var _id = typeof hero === 'number' ? hero : hero._id;
                    var url = this.heroesUrl + "/" + _id;
                    this.http.delete(url).subscribe(function (success) { return console.log(success); }, function (error) { return _this.handleError('deleteHero'); });
                };
                /** PUT: update the hero on the server */
                HeroService.prototype.updateHero = function (hero) {
                    var _this = this;
                    var url = this.heroesUrl + '/' + hero._id;
                    return this.http.put(url, hero).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated hero _id=" + hero._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateHero')));
                };
                /**
                 * Handle Http operation that failed.
                 * Let the app continue.
                 * @param operation - name of the operation that failed
                 * @param result - optional value to return as the observable result
                 */
                HeroService.prototype.handleError = function (operation, result) {
                    var _this = this;
                    if (operation === void 0) { operation = 'operation'; }
                    console.log(operation);
                    return function (error) {
                        // TODO: send the error to remote logging infrastructure
                        console.error(error);
                        if (error.status == "404") {
                            _this.router.navigate(['']);
                        }
                        // TODO: better job of transforming error for user consumption
                        _this.log(operation + " failed: " + error.message);
                        // Let the app keep running by returning an empty result.
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
                    };
                };
                /** Log a HeroService message with the MessageService */
                HeroService.prototype.log = function (message) {
                    this.messageService.add("HeroService: " + message);
                };
                return HeroService;
            }());
            HeroService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
            ]; };
            HeroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], HeroService);
            /***/ 
        }),
        /***/ "./src/app/service/interceptor.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/service/interceptor.service.ts ***!
          \************************************************/
        /*! exports provided: InterceptorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function () { return InterceptorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var InterceptorService = /** @class */ (function () {
                function InterceptorService(auth) {
                    this.auth = auth;
                }
                InterceptorService.prototype.intercept = function (req, next) {
                    return this.auth.getTokenSilently$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (token) {
                        var tokenReq = req.clone({
                            setHeaders: { 'Content-Type': 'application/json', Authorization: "Bearer " + token }
                        });
                        return next.handle(tokenReq);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err); }));
                };
                return InterceptorService;
            }());
            InterceptorService.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            InterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], InterceptorService);
            /***/ 
        }),
        /***/ "./src/app/service/message.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/service/message.service.ts ***!
          \********************************************/
        /*! exports provided: MessageService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function () { return MessageService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MessageService = /** @class */ (function () {
                function MessageService() {
                    this.messages = [];
                }
                MessageService.prototype.add = function (message) {
                    this.messages.push(message);
                };
                MessageService.prototype.clear = function () {
                    this.messages = [];
                };
                return MessageService;
            }());
            MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                })
            ], MessageService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/amaury/Project_test/Angular/angular-heroes/APP-AUTH0/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map