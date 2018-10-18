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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/profile/profile.component */ "./src/app/auth/profile/profile.component.ts");
/* harmony import */ var _member_session_session_session_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./member/session/session/session.component */ "./src/app/member/session/session/session.component.ts");
/* harmony import */ var _member_session_new_session_new_session_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./member/session/new-session/new-session.component */ "./src/app/member/session/new-session/new-session.component.ts");
/* harmony import */ var _member_session_current_session_current_session_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./member/session/current-session/current-session.component */ "./src/app/member/session/current-session/current-session.component.ts");
/* harmony import */ var _member_session_past_session_past_session_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./member/session/past-session/past-session.component */ "./src/app/member/session/past-session/past-session.component.ts");
/* harmony import */ var _member_account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./member/account/account.component */ "./src/app/member/account/account.component.ts");
/* harmony import */ var _models_listings_listings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/listings/listings.component */ "./src/app/models/listings/listings.component.ts");
/* harmony import */ var _models_live_live_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/live/live.component */ "./src/app/models/live/live.component.ts");
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'profile', component: _auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'models', component: _models_models_component__WEBPACK_IMPORTED_MODULE_14__["ModelsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'models/listings', component: _models_listings_listings_component__WEBPACK_IMPORTED_MODULE_12__["ListingsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'models/live', component: _models_live_live_component__WEBPACK_IMPORTED_MODULE_13__["LiveComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'member/account', component: _member_account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'member/session', component: _member_session_session_session_component__WEBPACK_IMPORTED_MODULE_7__["SessionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'member/session/new', component: _member_session_new_session_new_session_component__WEBPACK_IMPORTED_MODULE_8__["NewSessionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'member/session/current', component: _member_session_current_session_current_session_component__WEBPACK_IMPORTED_MODULE_9__["CurrentSessionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'member/session/past', component: _member_session_past_session_past_session_component__WEBPACK_IMPORTED_MODULE_10__["PastSessionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n    height: 100%;\r\n}\r\n\r\nmat-sidenav{\r\n    width:250px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color:white;\r\n}\r\n\r\na:hover,\r\na:active{\r\n    color:lightgray;\r\n}\r\n\r\n.navigation-items{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.navigation-caption{\r\n    display: inline-block;\r\n    padding-left: 6px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    \n  <mat-sidenav  #sidebar role=\"navigation\">\n    <app-sidebar (close)=\"sidebar.close()\"></app-sidebar>\n  </mat-sidenav>\n\n  <mat-sidenav-container>\n      <app-header (toggleSidebar)=\"sidebar.toggle()\"></app-header>\n      <router-outlet></router-outlet>\n  </mat-sidenav-container>\n\n</mat-sidenav-container>\n\n\n\n"

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
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'alpha69-ng';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.initAuthListener();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _nav_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/sidebar/sidebar.component */ "./src/app/nav/sidebar/sidebar.component.ts");
/* harmony import */ var _nav_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/header/header.component */ "./src/app/nav/header/header.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _files_drop_zone_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./files/drop-zone.directive */ "./src/app/files/drop-zone.directive.ts");
/* harmony import */ var _files_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./files/file-upload/file-upload.component */ "./src/app/files/file-upload/file-upload.component.ts");
/* harmony import */ var _auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/profile/profile.component */ "./src/app/auth/profile/profile.component.ts");
/* harmony import */ var _files_file_size_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./files/file-size.pipe */ "./src/app/files/file-size.pipe.ts");
/* harmony import */ var _member_account_account_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./member/account/account.component */ "./src/app/member/account/account.component.ts");
/* harmony import */ var _member_member_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./member/member.service */ "./src/app/member/member.service.ts");
/* harmony import */ var _member_session_session_session_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./member/session/session/session.component */ "./src/app/member/session/session/session.component.ts");
/* harmony import */ var _member_session_new_session_new_session_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./member/session/new-session/new-session.component */ "./src/app/member/session/new-session/new-session.component.ts");
/* harmony import */ var _member_session_current_session_current_session_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./member/session/current-session/current-session.component */ "./src/app/member/session/current-session/current-session.component.ts");
/* harmony import */ var _member_session_past_session_past_session_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./member/session/past-session/past-session.component */ "./src/app/member/session/past-session/past-session.component.ts");
/* harmony import */ var _member_session_stream_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./member/session/stream.service */ "./src/app/member/session/stream.service.ts");
/* harmony import */ var src_app_common_yesno_dialog_yesno_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/common/yesno-dialog/yesno-dialog.component */ "./src/app/common/yesno-dialog/yesno-dialog.component.ts");
/* harmony import */ var _models_listings_listings_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./models/listings/listings.component */ "./src/app/models/listings/listings.component.ts");
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");
/* harmony import */ var _models_live_live_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./models/live/live.component */ "./src/app/models/live/live.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _nav_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _nav_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _files_drop_zone_directive__WEBPACK_IMPORTED_MODULE_19__["DropZoneDirective"],
                _files_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_20__["FileUploadComponent"],
                _auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _files_file_size_pipe__WEBPACK_IMPORTED_MODULE_22__["FileSizePipe"],
                _member_session_session_session_component__WEBPACK_IMPORTED_MODULE_25__["SessionComponent"],
                _member_session_new_session_new_session_component__WEBPACK_IMPORTED_MODULE_26__["NewSessionComponent"],
                _member_session_current_session_current_session_component__WEBPACK_IMPORTED_MODULE_27__["CurrentSessionComponent"],
                _member_session_past_session_past_session_component__WEBPACK_IMPORTED_MODULE_28__["PastSessionComponent"],
                _member_account_account_component__WEBPACK_IMPORTED_MODULE_23__["AccountComponent"],
                src_app_common_yesno_dialog_yesno_dialog_component__WEBPACK_IMPORTED_MODULE_30__["YesNoDialogComponent"],
                _models_listings_listings_component__WEBPACK_IMPORTED_MODULE_31__["ListingsComponent"],
                _models_models_component__WEBPACK_IMPORTED_MODULE_32__["ModelsComponent"],
                _models_live_live_component__WEBPACK_IMPORTED_MODULE_33__["LiveComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorageModule"]
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _member_member_service__WEBPACK_IMPORTED_MODULE_24__["MemberService"], _member_session_stream_service__WEBPACK_IMPORTED_MODULE_29__["StreamService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [src_app_common_yesno_dialog_yesno_dialog_component__WEBPACK_IMPORTED_MODULE_30__["YesNoDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _common_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/ui.service */ "./src/app/common/ui.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(router, afAuth, db, uiService) {
        this.router = router;
        this.afAuth = afAuth;
        this.db = db;
        this.uiService = uiService;
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoggedin = false;
    }
    AuthService.prototype.initAuthListener = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                localStorage.setItem('uid', user.uid);
                _this.uiService.showSnackbar('Authenticated', null, 3000);
                _this.isLoggedin = true;
                _this.changed.next(true);
                _this.router.navigate(['/models']);
            }
            else {
                localStorage.removeItem('uid');
                _this.isLoggedin = false;
                _this.changed.next(false);
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthService.prototype.signUp = function (email, password, displayName, isModel, dob, realfullname) {
        var _this = this;
        this.uiService.loadingStateChange.next(true);
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (userCredential) {
            var data = {
                displayName: displayName,
                level: 0,
                agree18yo: true,
                agreeMember: true,
                isModel: isModel,
                created: new Date(),
                model: (isModel) ? {
                    realname: realfullname,
                    dob: dob,
                    agreeModel: true
                } : null
            };
            _this.db.doc("members/" + userCredential.user.uid).set(data).then(function () {
                _this.uiService.loadingStateChange.next(false);
            })
                .catch(function (error) {
                _this.uiService.loadingStateChange.next(false);
                _this.uiService.showSnackbarError(error);
            });
            _this.db.doc("member-wallets/" + userCredential.user.uid).set({ balance: 0 })
                .catch(function (error) {
                _this.uiService.showSnackbarError(error);
            });
            if (isModel) {
                _this.db.doc("model-tipjars/" + userCredential.user.uid).set({ balance: 0 })
                    .catch(function (error) {
                    _this.uiService.showSnackbarError(error);
                });
            }
        })
            .catch(function (error) {
            _this.uiService.loadingStateChange.next(false);
            _this.uiService.showSnackbarError(error);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.uiService.loadingStateChange.next(true);
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (userCredential) {
            // TODO: load member from db
            _this.uiService.loadingStateChange.next(false);
        })
            .catch(function (error) {
            _this.uiService.loadingStateChange.next(false);
            _this.uiService.showSnackbarError(error);
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('uid');
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.isAuth = function () {
        return this.isLoggedin;
    };
    AuthService.prototype.getUser = function () {
        return __assign({}, this.afAuth.auth.currentUser);
    };
    AuthService.prototype.getUserId = function () {
        return this.afAuth.auth.currentUser.uid;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _common_ui_service__WEBPACK_IMPORTED_MODULE_5__["UIService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    width: 300px;\r\n  }\r\n  \r\n.login-form {\r\n    padding-top:30px;\r\n}\r\n  \r\n.page-title {\r\n    text-align: center\r\n  }"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-title\">\r\n    <h1>Login</h1>\r\n  </section>\r\n<section class=\"login-form\">\r\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n     \r\n      <mat-form-field>\r\n        <input type=\"email\" matInput placeholder=\"Your Email\" ngModel name=\"email\" email required #emailInput=\"ngModel\"/>\r\n        <mat-error *ngIf=\"!emailInput.hasError('required')\">Invalid email</mat-error>\r\n      </mat-form-field>\r\n     \r\n      <mat-form-field> \r\n          <input type=\"password\"\r\n           matInput \r\n           placeholder=\"Your Password\"\r\n           ngModel\r\n           name=\"password\"\r\n           required\r\n           minlength=\"6\"/>\r\n      </mat-form-field>\r\n     \r\n      <button *ngIf=\"!isLoading\" type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\">Submit</button>\r\n      <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\r\n    </form>\r\n  </section>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _common_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/ui.service */ "./src/app/common/ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, uiService) {
        this.authService = authService;
        this.uiService = uiService;
        this.isLoadning = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingSubs = this.uiService.loadingStateChange.subscribe(function (state) { _this.isLoadning = state; });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.loadingSubs.unsubscribe();
    };
    LoginComponent.prototype.onSubmit = function (form) {
        console.log(form);
        this.authService.login(form.value.email, form.value.password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _common_ui_service__WEBPACK_IMPORTED_MODULE_2__["UIService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/profile/profile.component.css":
/*!****************************************************!*\
  !*** ./src/app/auth/profile/profile.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\r\n    width: 600px;\r\n}"

/***/ }),

/***/ "./src/app/auth/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <section class=\"member-info\" *ngIf=\"user\">\r\n    <h1>member info</h1>\r\n    <p> email: {{ user.email}}</p> \r\n    <p> displayName: {{ user.displayName}}</p> \r\n    <img [src]=\"user.photoUrl\" style=\"max-width: 100px;height:auto\" />\r\n\r\n  </section>\r\n  <section class=\"profile-image\" > \r\n      <app-file-upload></app-file-upload>\r\n  </section>\r\n  \r\n</section>"

/***/ }),

/***/ "./src/app/auth/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, db) {
        this.authService = authService;
        this.db = db;
        this.user = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userSub = this.db.doc("members/" + this.authService.getUserId()).valueChanges()
            .subscribe(function (data) {
            _this.user = data;
            console.log(data);
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this._userSub.unsubscribe();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/auth/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/auth/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 300px;\r\n}\r\n\r\n.signup-form {\r\n  padding-top:  30px\r\n}\r\n\r\n.page-title {\r\n  text-align: center\r\n}"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-title\">\r\n  <h1>Signup</h1>\r\n</section>\r\n<section class=\"signup-form\">\r\n  <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n   \r\n\r\n    <mat-form-field>\r\n      <input type=\"email\" matInput placeholder=\"Email\" ngModel name=\"email\" email required #emailInput=\"ngModel\"/>\r\n      <mat-error *ngIf=\"!emailInput.hasError('required')\">Invalid email</mat-error>\r\n    </mat-form-field>\r\n   \r\n    <mat-form-field hintLabel=\"Should be at least 6 characters long\"> \r\n        <input type=\"password\"\r\n         matInput \r\n         placeholder=\"Password\"\r\n         ngModel\r\n         name=\"password\"\r\n         required\r\n         minlength=\"6\"\r\n         #pwInput=\"ngModel\">\r\n         <mat-hint align=\"end\">{{pwInput.value?.length}}/6</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input type=\"text\" matInput placeholder=\"Display name\" ngModel name=\"displayName\" required/>\r\n    </mat-form-field>\r\n\r\n    <mat-slide-toggle labelPosition=\"after\" color=\"accent\" ngModel name=\"isModel\">Register as Cam Model</mat-slide-toggle>\r\n    \r\n    <ng-container *ngIf=\"f.value.isModel\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Birthdate\" [matDatepicker]=\"picker\" [max]=\"maxDate\" ngModel name=\"dob\" required>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n\r\n      \r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"Real fullname\" ngModel name=\"realfullname\" required/>\r\n      </mat-form-field>\r\n      <p> TDB: missing fields for various model specific info, like pay-out information etc...</p>\r\n      <br/>\r\n      <br/>\r\n\r\n      <mat-checkbox labelPosition=\"after\" ngModel name=\"agreeModel\" required color=\"accent\">Agree to Models <a href=\"#\">Terms and Conditions.</a></mat-checkbox>\r\n\r\n  </ng-container>\r\n    \r\n  <mat-checkbox labelPosition=\"after\" ngModel name=\"agree18yo\" required color=\"accent\">I am 18 years or Older</mat-checkbox>\r\n    <mat-checkbox labelPosition=\"after\" ngModel name=\"agreeMember\" required color=\"accent\">Agree to Membership <a href=\"#\">Terms and Conditions.</a></mat-checkbox>\r\n\r\n    <button *ngIf=\"!isLoadning\" type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\">Submit</button>\r\n    <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\r\n  </form>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    };
    SignupComponent.prototype.onSubmit = function (form) {
        /* let ok = false;
     
         if (form.value.agreeMember === true && form.value.agree18yo === true ) {
     
           if (form.value.isModel === true && form.value.agreeModel === true ) {
             ok = true;
           }
         }*/
        this.authService.signUp(form.value.email, form.value.password, form.value.displayName, (form.value.isModel === true ? true : false), form.value.dob, form.value.realfullname);
    };
    SignupComponent.prototype.ngOnDestroy = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/common/ui.service.ts":
/*!**************************************!*\
  !*** ./src/app/common/ui.service.ts ***!
  \**************************************/
/*! exports provided: UIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIService", function() { return UIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UIService = /** @class */ (function () {
    function UIService(snackbar) {
        this.snackbar = snackbar;
        this.loadingStateChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    UIService.prototype.showSnackbarError = function (error) {
        this.snackbar.open(error.message, null, { duration: 5000 });
        console.error(error);
    };
    UIService.prototype.showSnackbar = function (message, action, duration) {
        this.snackbar.open(message, action, { duration: duration });
        //  console.log(message);
    };
    UIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], UIService);
    return UIService;
}());



/***/ }),

/***/ "./src/app/common/yesno-dialog/yesno-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/yesno-dialog/yesno-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: YesNoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YesNoDialogComponent", function() { return YesNoDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var YesNoDialogComponent = /** @class */ (function () {
    function YesNoDialogComponent(data) {
        this.data = data;
    }
    YesNoDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-yesno-dialog',
            template: "<h1 mat-dialog-title>{{ data.title }}</h1>\n            <mat-dialog-content>\n              <p>{{ data.content }}</p>\n            </mat-dialog-content>\n            <mat-dialog-actions>\n              <button mat-button [mat-dialog-close]=\"true\">{{ data.yesLabel }}</button>\n              <button mat-button [mat-dialog-close]=\"false\">{{ data.noLabel }}</button>\n             </mat-dialog-actions>"
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], YesNoDialogComponent);
    return YesNoDialogComponent;
}());



/***/ }),

/***/ "./src/app/files/drop-zone.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/files/drop-zone.directive.ts ***!
  \**********************************************/
/*! exports provided: DropZoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZoneDirective", function() { return DropZoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropZoneDirective = /** @class */ (function () {
    function DropZoneDirective() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DropZoneDirective.prototype.onDrop = function ($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    };
    DropZoneDirective.prototype.onDragOver = function ($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    };
    DropZoneDirective.prototype.onDragLeave = function ($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "dropped", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "hovered", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDrop", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDragLeave", null);
    DropZoneDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropZone]'
        }),
        __metadata("design:paramtypes", [])
    ], DropZoneDirective);
    return DropZoneDirective;
}());



/***/ }),

/***/ "./src/app/files/file-size.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/files/file-size.pipe.ts ***!
  \*****************************************/
/*! exports provided: FileSizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizePipe", function() { return FileSizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
var FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];
var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
    }
    FileSizePipe.prototype.transform = function (sizeInBytes, longForm) {
        var units = longForm
            ? FILE_SIZE_UNITS_LONG
            : FILE_SIZE_UNITS;
        var power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        var size = sizeInBytes / Math.pow(1024, power); // size in new units
        var formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
        var unit = units[power];
        return size ? formattedSize + " " + unit : '0';
    };
    FileSizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'fileSize'
        })
    ], FileSizePipe);
    return FileSizePipe;
}());



/***/ }),

/***/ "./src/app/files/file-upload/file-upload.component.html":
/*!**************************************************************!*\
  !*** ./src/app/files/file-upload/file-upload.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropzone\" \r\n     appDropZone\r\n     (hovered)=\"toggleHover($event)\"\r\n     (dropped)=\"startUpload($event)\"\r\n     [class.hovering]=\"isHovering\">\r\n\r\n     <h3>Drag and Drop a file or select a file</h3>\r\n \r\n     <div class=\"file\">\r\n        <label class=\"file-label\">\r\n\r\n        <input class=\"file-input\" type=\"file\" (change)=\"startUpload($event.target.files)\">\r\n\r\n          <span class=\"file-cta\">\r\n            <span class=\"file-icon\">\r\n              <i class=\"fa fa-upload\"></i>\r\n            </span>\r\n            <span class=\"file-label\">\r\n              or choose a file…\r\n            </span>\r\n          </span>\r\n        </label>\r\n      </div>\r\n</div>\r\n\r\n<div *ngIf=\"percentage | async as pct\">\r\n\r\n  <progress class=\"progress is-info\" \r\n            [value]=\"pct\" \r\n            max=\"100\">        \r\n  </progress>\r\n  {{ pct | number }}%\r\n\r\n</div>\r\n\r\n\r\n<div *ngIf=\"snapshot | async as snap\">\r\n  {{ snap.bytesTransferred | fileSize }} of {{ snap.totalBytes | fileSize }} \r\n\r\n  \r\n  <div *ngIf=\"downloadUrl$ | async as url\">\r\n    <h3>Results!</h3>\r\n    <img [src]=\"url\"><br>\r\n    <a [href]=\"url\" target=\"_blank\" rel=\"noopener\">Download Me!</a>\r\n  </div> \r\n\r\n  <button (click)=\"task.pause()\" class=\"button is-warning\" [disabled]=\"!isActive(snap)\">Pause</button>\r\n  <button (click)=\"task.cancel()\" class=\"button is-danger\" [disabled]=\"!isActive(snap)\">Cancel</button>\r\n  <button (click)=\"task.resume()\" class=\"button is-info\"   [disabled]=\"!(snap?.state === 'paused')\">Resume</button>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/files/file-upload/file-upload.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/files/file-upload/file-upload.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropzone {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 300px;\n  border: 2px dashed #f16624;\n  border-radius: 5px;\n  background: white;\n  margin: 10px 0; }\n  .dropzone.hovering {\n    border: 2px solid #f16624;\n    color: #dadada !important; }\n  progress::-webkit-progress-value {\n  transition: width 0.1s ease; }\n"

/***/ }),

/***/ "./src/app/files/file-upload/file-upload.component.ts":
/*!************************************************************!*\
  !*** ./src/app/files/file-upload/file-upload.component.ts ***!
  \************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ui.service */ "./src/app/common/ui.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// https://angularfirebase.com/lessons/firebase-storage-with-angularfire-dropzone-file-uploader/
var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(storage, uiService, authService, db, afAuth) {
        this.storage = storage;
        this.uiService = uiService;
        this.authService = authService;
        this.db = db;
        this.afAuth = afAuth;
    }
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    FileUploadComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    FileUploadComponent.prototype.startUpload = function (event) {
        var _this = this;
        var file = event.item(0);
        // Client-side validation example
        if (file.type.split('/')[0] !== 'image') {
            this.uiService.showSnackbar('unsupported file type', null, 3000);
            console.error('unsupported file type :( ');
            return;
        }
        var path = "images/profile/" + new Date().getTime() + "_" + file.name;
        this.ref = this.storage.ref(path);
        this.task = this.ref.put(file);
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges();
        this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (snap) {
            if (snap.bytesTransferred === snap.totalBytes) {
                _this.downloadUrl$ = _this.ref.getDownloadURL();
                _this.getDownloadUrlSub = _this.ref.getDownloadURL().subscribe(function (value) {
                    _this.downloadURL = value;
                    // update photoUrl on the users db record, and also on the user record
                    // this.db.doc(`members/${this.authService.getUser().uid}`).update({photoUrl: value});
                    _this.authService.getUser().updateProfile({ displayName: null, photoURL: value });
                }, function (error) {
                    _this.uiService.showSnackbarError(error);
                });
                _this.uiService.showSnackbar("Picture Uploaded. " + snap.totalBytes + " bytes", null, 3000);
            }
        }));
    };
    FileUploadComponent.prototype.isActive = function (snapshot) {
        return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    };
    FileUploadComponent.prototype.ngOnDestroy = function () {
        if (this.getDownloadUrlSub) {
            this.getDownloadUrlSub.unsubscribe();
        }
    };
    FileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/files/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.scss */ "./src/app/files/file-upload/file-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"],
            _common_ui_service__WEBPACK_IMPORTED_MODULE_3__["UIService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"]
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/member/account/account.component.css":
/*!******************************************************!*\
  !*** ./src/app/member/account/account.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/account/account.component.html":
/*!*******************************************************!*\
  !*** ./src/app/member/account/account.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  account works!\n</p>\n"

/***/ }),

/***/ "./src/app/member/account/account.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/member/account/account.component.ts ***!
  \*****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/member/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/member/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/member/member.service.ts":
/*!******************************************!*\
  !*** ./src/app/member/member.service.ts ***!
  \******************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberService = /** @class */ (function () {
    function MemberService(db, authService) {
        this.db = db;
        this.authService = authService;
    }
    /*getCurrent() {
      // .doc(`members/${this.authService.getUser().uid}`)
      this.db.collection('members')
      .snapshotChanges()
      .pipe(
        map( result => {
          return result.map ( doc => {
  
          })
        })
      );
      } */
    MemberService.prototype.getModels = function () {
    };
    MemberService.prototype.getAll = function () {
    };
    MemberService.prototype.getByDisplayName = function (displayName) {
    };
    MemberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "./src/app/member/session/current-session/current-session.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/member/session/current-session/current-session.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class='page-title'>\r\n    <h1>Session Control</h1>\r\n</section>\r\n\r\n<section class=\"content\">\r\n<mat-accordion class=\"accordion\" multi=\"true\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\r\n\r\n    <mat-expansion-panel  *ngIf=\"session\" fxFlex.xs=\"100%\" fxFlex=\"400px\">\r\n        <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n                Name & Title\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n                 &nbsp; \r\n                <mat-icon>face</mat-icon>\r\n            </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        \r\n        <mat-form-field>\r\n            <input type=\"text\" matInput placeholder=\"Model name to use\" [(ngModel)]=\"session.modelName\"  (change)=\"saveSession('session.modelName')\"/> \r\n        </mat-form-field>\r\n                 \r\n        <mat-form-field>\r\n            <input type=\"text\" matInput placeholder=\"Title\"  [(ngModel)]=\"session.title\"  (change)=\"saveSession('session.title')\" />\r\n        </mat-form-field>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel fxFlex.xs=\"100%\" fxFlex=\"400px\" *ngIf=\"session\" >\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    View settings\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    ({{session.accessType}})&nbsp;\r\n                    <mat-icon>visibility</mat-icon>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Who can view?\"  [(ngModel)]=\"session.accessType\" (selectionChange)=\"saveSession('session.accessType')\" >\r\n                        <mat-option value=\"public\"><u>Everyone</u> can view</mat-option>\r\n                        <mat-option value=\"member\">all <u>Members</u> can view</mat-option>\r\n                        <mat-option value=\"level\">only <u>Members</u> => <u>level</u> </mat-option>\r\n                        <mat-option value=\"onrequest\"><u>Members</u> can <u>Request to join</u></mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"session.accessType === 'level'\">\r\n                <input type=\"number\" matInput placeholder=\"Required level?\"  [(ngModel)]=\"session.minLevel\"  (change)=\"saveSession('session.minLevel')\" />  \r\n            </mat-form-field>\r\n    </mat-expansion-panel>\r\n    \r\n\r\n    <mat-expansion-panel fxFlex.xs=\"100%\" fxFlex=\"400px\" *ngIf=\"session\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Pay Per Minute\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    {{session.usePpm? '(Enabled)' :' ' }}&nbsp;\r\n                    <mat-icon>attach_money</mat-icon>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <mat-slide-toggle labelPosition=\"before\" color=\"accent\" [(ngModel)]=\"session.usePpm\" (change)=\"saveSession('session.usePpm')\">Enable Pay-Per-Minute</mat-slide-toggle>\r\n\r\n            <mat-form-field *ngIf=\"session.usePpm\">\r\n              <input type=\"number\" matInput placeholder=\"Tokens to Pay-Per-Minute\" [(ngModel)]=\"session.ppm.amount\" (change)=\"saveSession('session.ppm.amount')\"  />\r\n            </mat-form-field>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel fxFlex.xs=\"100%\" fxFlex=\"400px\" *ngIf=\"session\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Goal\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    {{session.useGoal? '(Enabled)' : '' }}&nbsp;\r\n                    <mat-icon>assistant_photo</mat-icon>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <mat-slide-toggle labelPosition=\"before\" color=\"accent\" [(ngModel)]=\"session.useGoal\"  (change)=\"saveSession('session.useGoal')\">Do you want to set a Goal?</mat-slide-toggle>\r\n          <ng-container *ngIf=\"goal\">\r\n              <mat-form-field>\r\n                  <input type=\"number\" matInput placeholder=\"Goal Amount token (Target)\" [(ngModel)]=\"goal.amount\"   (change)=\"saveSession('goal.amount')\" />\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                  <input type=\"text\"  matInput placeholder=\"Goal description\" [(ngModel)]=\"goal.descr\"  (change)=\"saveSession('goal.descr')\" />\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                      <mat-select placeholder=\"Show Fx on goal complete?\"  [(ngModel)]=\"goal.doneFx\"  (selectionChange)=\"saveSession('goal.doneFx')\" >\r\n                              <mat-option value=\"None\">No</mat-option>\r\n                              <mat-option value=\"fx1\">1 TBD</mat-option>\r\n                              <mat-option value=\"fx2\">2 TBD</mat-option>\r\n                              <mat-option value=\"fx3\">3 TBD</mat-option>\r\n                              <mat-option value=\"fx3\">4 TBD</mat-option>\r\n                            </mat-select>\r\n              </mat-form-field>\r\n         </ng-container>   \r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel fxFlex.xs=\"100%\" fxFlex=\"400px\" *ngIf=\"session\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Stream Control\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    &nbsp;\r\n                    <mat-icon>cast</mat-icon>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Stream Url\" [ngModel]=\"session.stream.url\" readonly />\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input type=\"text\"  matInput placeholder=\"Stream Key\" [ngModel]=\"session.stream.key\" readonly/>\r\n                </mat-form-field>\r\n            <button mat-raised-button color=\"primary\" (click)=\"getNewStreamKey()\">Get new stream key</button><br/><br/>\r\n            <button mat-raised-button color=\"accent\" (click)=\"stopSession()\">Stop Session!</button>\r\n        \r\n    </mat-expansion-panel>\r\n\r\n  \r\n</mat-accordion>\r\n\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<section class='page-title'>\r\n    <h1>Live metrics</h1>\r\n</section>\r\n\r\n<mat-accordion class=\"accordion\" multi=\"true\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\r\n\r\n        <mat-expansion-panel  *ngIf=\"goal\" fxFlex.xs=\"100%\" fxFlex=\"400px\" expanded class=\"goal-meter\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    Goal Meter\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    {{goalCollectedPct}}% ({{goal.collected}}t / {{goal.amount}}t)&nbsp; \r\n                    <mat-progress-spinner\r\n                    color=\"primary\"\r\n                    mode=\"determinate\"\r\n                    [value]=\"goalCollectedPct\"\r\n                    strokeWidth=3\r\n                    diameter=20>\r\n                 </mat-progress-spinner>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <div>\r\n                <table>\r\n                    <tr>\r\n                    <td>\r\n                        <mat-progress-spinner\r\n                        color=\"primary\"\r\n                        mode=\"determinate\"\r\n                        [value]=\"goalCollectedPct\"\r\n                        strokeWidth=10\r\n                        diameter=80>\r\n                     </mat-progress-spinner></td>\r\n                    \r\n                    <td style=\"font-size: 48pt\">{{goalCollectedPct}}%</td>\r\n                    <td style=\"font-size: 11pt;font-weight: normal;text-align: center;padding-left:10px\">{{goal.collected}}<br/>out of<br/>{{goal.amount}} <img src=\"/src/assets/coin16.png\"></td>\r\n                </tr>\r\n                <tr><td colspan=\"2\" style=\"text-align:center;font-size:12pt;font-weight: bold\">{{goal.descr}}</td></tr>\r\n                </table>\r\n            \r\n           \r\n            </div>\r\n            \r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel  *ngIf=\"tipjar\" fxFlex.xs=\"100%\" fxFlex=\"400px\" expanded class=\"tipjar\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                       Tip jar\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        {{tipjar.balance}} t &nbsp; \r\n                        <mat-icon>attach_money</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n              <div style=\"font-size: 48pt;padding-top:30px;text-align: center;\">\r\n                {{tipjar.balance}}  <img src=\"/src/assets/coin32.png\">\r\n              </div>\r\n            </mat-expansion-panel>\r\n\r\n\r\n            <mat-expansion-panel  *ngIf=\"wallet\" fxFlex.xs=\"100%\" fxFlex=\"400px\" expanded class=\"wallet\">\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                           Personal Wallet\r\n                        </mat-panel-title>\r\n                        <mat-panel-description>\r\n                            {{wallet.balance}} t &nbsp; \r\n                            <mat-icon>attach_money</mat-icon>\r\n                        </mat-panel-description>\r\n                    </mat-expansion-panel-header>\r\n                  <div style=\"font-size: 48pt;padding-top:30px;text-align: center;\">\r\n                    {{wallet.balance}} <img src=\"/src/assets/coin32.png\">\r\n                  </div>\r\n                </mat-expansion-panel>\r\n\r\n                <mat-expansion-panel  *ngIf=\"session\" fxFlex.xs=\"100%\" fxFlex=\"400px\" expanded class=\"runtime\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                              Runtime & Clock\r\n                            </mat-panel-title>\r\n                            <mat-panel-description>\r\n                                {{runtimeHours}}h {{runtimeMinutes}}m  ({{clockHours}}:{{clockMinutes}})\r\n                                <mat-icon>access_time</mat-icon>\r\n                            </mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                     \r\n                        <div style=\"font-size: 48pt;padding-top:30px;text-align: center;\">\r\n                        <ng-container *ngIf=\"runtimeDays>0\"> {{runtimeDays}}d </ng-container> {{runtimeHours}}h {{runtimeMinutes}}m\r\n                      </div>\r\n\r\n                      <div style=\"font-size: 14pt;padding-top:30px;text-align: center;\">\r\n                        {{clockHours}}:{{clockMinutes}} {{timezone}} \r\n                      </div>\r\n\r\n                    </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/member/session/current-session/current-session.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/member/session/current-session/current-session.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 300px; }\n\n.current-session {\n  padding-top: 30px; }\n\n/* http://www.colorzilla.com/gradient-editor/ */\n\n.goal-meter {\n  background: #e4f5fc;\n  background: linear-gradient(to bottom, #e4f5fc 0%, #7dc8e8 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4f5fc', endColorstr='#7dc8e8',GradientType=0 ); }\n\n.tipjar {\n  background: #fefcea;\n  background: linear-gradient(to bottom, #fefcea 0%, #ede4af 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea', endColorstr='#ede4af',GradientType=0 ); }\n\n.wallet {\n  background: #eeeeee;\n  background: linear-gradient(to bottom, #eeeeee 0%, #cccccc 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#cccccc',GradientType=0 ); }\n\n.runtime {\n  background: #cdeb8b;\n  background: linear-gradient(to bottom, #cdeb8b 0%, #daeab4 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cdeb8b', endColorstr='#daeab4',GradientType=0 ); }\n\n.page-title {\n  text-align: center; }\n\n.accordion .mat-expansion-panel-header-title,\n.accordion .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.accordion .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n\nmat-expansion-panel {\n  margin: 5px 5px 5px 5px; }\n\n.content {\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/member/session/current-session/current-session.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/member/session/current-session/current-session.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CurrentSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentSessionComponent", function() { return CurrentSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_common_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/ui.service */ "./src/app/common/ui.service.ts");
/* harmony import */ var _stream_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stream.service */ "./src/app/member/session/stream.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_common_yesno_dialog_yesno_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/yesno-dialog/yesno-dialog.component */ "./src/app/common/yesno-dialog/yesno-dialog.component.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CurrentSessionComponent = /** @class */ (function () {
    function CurrentSessionComponent(db, uiService, ss, dialog) {
        this.db = db;
        this.uiService = uiService;
        this.ss = ss;
        this.dialog = dialog;
    }
    CurrentSessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.runtimeHours = 0;
        this.runtimeMinutes = 0;
        this.clockHours = 0;
        this.clockMinutes = 0;
        this.currentMemberSub = this.db.doc("members/" + localStorage.getItem('uid')).valueChanges().subscribe(function (data) {
            _this.session = __assign({}, data.session, { created: data.session.created.toDate() });
            console.log(_this.session);
        });
        this.goalSub = this.db.doc("session-goals/" + localStorage.getItem('uid'))
            .valueChanges()
            .subscribe(function (data) {
            _this.goal = data;
            _this.goalCollectedPct = Number(((_this.goal.collected / _this.goal.amount) * 100).toFixed(1));
        });
        this.tipjarSub = this.db.doc("model-tipjars/" + localStorage.getItem('uid'))
            .valueChanges()
            .subscribe(function (data) {
            _this.tipjar = data;
        });
        this.tipjarSub = this.db.doc("member-wallets/" + localStorage.getItem('uid'))
            .valueChanges()
            .subscribe(function (data) {
            _this.wallet = data;
        });
        this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.clockSub = source.subscribe(function (value) {
            if (_this.session) {
                _this.calculateTimes();
            }
        });
    };
    CurrentSessionComponent.prototype.calculateTimes = function () {
        var now = new Date();
        this.clockHours = now.getHours();
        this.clockMinutes = now.getMinutes();
        var runtime_ms = this.session.created.getTime();
        var now_ms = now.getTime();
        var difference_ms = now_ms - runtime_ms;
        difference_ms = difference_ms / 1000;
        this.runtimeSeconds = Math.floor(difference_ms % 60);
        difference_ms = difference_ms / 60;
        this.runtimeMinutes = Math.floor(difference_ms % 60);
        difference_ms = difference_ms / 60;
        this.runtimeHours = Math.floor(difference_ms % 24);
        this.runtimeDays = Math.floor(difference_ms / 24);
    };
    CurrentSessionComponent.prototype.saveSession = function (scope) {
        if (scope === 'session.usePpm' && (this.session.ppm === null || this.session.ppm === undefined)) {
            this.session.ppm = { amount: 1 };
        }
        if (scope === 'session.useGoal') {
            if (this.session.useGoal === false) {
                this.db.doc("session-goals/" + localStorage.getItem('uid')).delete();
                this.goal = null;
            }
            if (this.session.useGoal === true && (this.goal === null || this.goal === undefined)) {
                this.db.doc("session-goals/" + localStorage.getItem('uid'))
                    .set({
                    amount: 1000,
                    collected: 0,
                    descr: '',
                    doneFx: 'None'
                });
            }
        }
        if ((scope === 'goal.amount' || scope === 'goal.descr' || scope === 'goal.doneFx') && (this.goal)) {
            if (scope === 'goal.amount') {
                this.goal.collected = 0;
            }
            this.db.doc("session-goals/" + localStorage.getItem('uid')).update(this.goal);
        }
        // TBD: log change
        this.session.modified = new Date();
        this.db.doc("members/" + localStorage.getItem('uid')).update({ session: this.session });
        console.log("change to: [" + scope + "] saved");
        this.uiService.showSnackbar('Setings Saved', null, 2000);
    };
    CurrentSessionComponent.prototype.stopSession = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_common_yesno_dialog_yesno_dialog_component__WEBPACK_IMPORTED_MODULE_6__["YesNoDialogComponent"], {
            data: {
                title: 'Stop live session ?',
                content: 'Please confirm that you want to stop streaming this live session',
                yesLabel: 'I Confirm',
                noLabel: 'No, keep session open'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.db.collection('members').doc(localStorage.getItem('uid')).update({ session: null })
                    .then(function () {
                    _this.db.doc("session-goals/" + localStorage.getItem('uid')).delete();
                    _this.goal = null;
                    console.log('session stopped');
                    _this.session = null;
                    _this.uiService.showSnackbar('Session stopped', null, 3000);
                })
                    .catch(function (error) {
                    _this.uiService.showSnackbarError(error);
                });
            }
        });
    };
    CurrentSessionComponent.prototype.getNewStreamKey = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_common_yesno_dialog_yesno_dialog_component__WEBPACK_IMPORTED_MODULE_6__["YesNoDialogComponent"], {
            data: {
                title: 'Renew stream key?',
                content: 'Please confirm that you want a new key for the streaming service?',
                yesLabel: 'I Confirm',
                noLabel: 'No, keep existing stream key'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.session.stream = _this.ss.fetchNewStream();
                _this.session.modified = new Date();
                _this.db.doc("members/" + localStorage.getItem('uid')).update({ session: _this.session });
                console.log("change to: [session.stream] saved");
                _this.uiService.showSnackbar('New stream key generated', null, 2000);
            }
        });
    };
    CurrentSessionComponent.prototype.ngOnDestroy = function () {
        if (this.currentMemberSub) {
            this.currentMemberSub.unsubscribe();
        }
        if (this.goalSub) {
            this.goalSub.unsubscribe();
        }
        if (this.tipjarSub) {
            this.tipjarSub.unsubscribe();
        }
        if (this.walletSub) {
            this.walletSub.unsubscribe();
        }
        if (this.clockSub) {
            this.clockSub.unsubscribe();
        }
    };
    CurrentSessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-session',
            template: __webpack_require__(/*! ./current-session.component.html */ "./src/app/member/session/current-session/current-session.component.html"),
            styles: [__webpack_require__(/*! ./current-session.component.scss */ "./src/app/member/session/current-session/current-session.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], src_app_common_ui_service__WEBPACK_IMPORTED_MODULE_3__["UIService"], _stream_service__WEBPACK_IMPORTED_MODULE_4__["StreamService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], CurrentSessionComponent);
    return CurrentSessionComponent;
}());



/***/ }),

/***/ "./src/app/member/session/new-session/new-session.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/member/session/new-session/new-session.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    width: 300px;\r\n  }\r\n\r\n  .new-session {\r\n    padding-top:  30px\r\n  }\r\n\r\n  .page-title {\r\n    text-align: center\r\n  }"

/***/ }),

/***/ "./src/app/member/session/new-session/new-session.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/member/session/new-session/new-session.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-title\">\r\n  <h1>Setup new live streaming session</h1>\r\n</section>\r\n<section class=\"new-session\">\r\n\r\n    <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n     \r\n             \r\n      <mat-form-field *ngIf=\"currentMember\">\r\n        <input type=\"text\" matInput placeholder=\"Model name to use\" ngModel name=\"modelName\" required [(ngModel)]=\"currentMember.displayName\"/> \r\n      </mat-form-field>\r\n             \r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"Title\" ngModel name=\"title\" required />\r\n      </mat-form-field>\r\n     \r\n      <mat-form-field>\r\n          <mat-select placeholder=\"Who can view?\" ngModel name=\"accessType\" required >\r\n              <mat-option value=\"public\"><u>Everyone</u> can view</mat-option>\r\n              <mat-option value=\"member\">all <u>Members</u> can view</mat-option>\r\n              <mat-option value=\"level\">only <u>Members</u> => <u>level</u> </mat-option>\r\n              <mat-option value=\"onrequest\"><u>Members</u> can <u>Request to join</u></mat-option>\r\n            </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field *ngIf=\"f.value.accessType=='level'\">\r\n            <input type=\"number\" matInput placeholder=\"Required level?\" ngModel name=\"minLevel\" value=\"0\" />  \r\n      </mat-form-field>\r\n\r\n      <mat-slide-toggle labelPosition=\"after\" color=\"accent\" ngModel name=\"goalUse\"  value=\"false\">Do you want to set a Goal?</mat-slide-toggle>\r\n      \r\n      <ng-container *ngIf=\"f.value.goalUse\">\r\n        <mat-form-field>\r\n            <input type=\"number\" matInput placeholder=\"Goal Amount token (Target)\" ngModel name=\"goalAmount\" value=\"0\" />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input type=\"text\"  matInput placeholder=\"Goal description\" ngModel name=\"goalDescription\"  />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n                <mat-select placeholder=\"Show Fx on goal complete?\" ngModel name=\"goalDoneFx\" >\r\n                        <mat-option value=\"\">No</mat-option>\r\n                        <mat-option value=\"fx1\">1 TBD</mat-option>\r\n                        <mat-option value=\"fx2\">2 TBD</mat-option>\r\n                        <mat-option value=\"fx3\">3 TBD</mat-option>\r\n                        <mat-option value=\"fx3\">4 TBD</mat-option>\r\n                      </mat-select>\r\n        </mat-form-field>\r\n        <br>\r\n      </ng-container>   \r\n    \r\n\r\n      <mat-slide-toggle labelPosition=\"after\" color=\"accent\" ngModel name=\"ppmUse\"  value=\"false\">Enable Pay-Per-Minute</mat-slide-toggle>\r\n\r\n      <mat-form-field *ngIf=\"f.value.ppmUse\">\r\n          <input type=\"number\" matInput placeholder=\"Tokens to Pay-Per-Minute\" ngModel name=\"ppmAmount\" value=\"0\" />\r\n      </mat-form-field>\r\n      \r\n      <mat-checkbox color=\"accent\" ngModel name=\"agree\" labelPosition=\"after\" required>Agree to <a href=\"#\">Terms and Conditions.</a></mat-checkbox>\r\n\r\n      <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\">Submit</button>\r\n\r\n    </form>\r\n  </section>\r\n  \r\n  "

/***/ }),

/***/ "./src/app/member/session/new-session/new-session.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/member/session/new-session/new-session.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSessionComponent", function() { return NewSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_common_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/ui.service */ "./src/app/common/ui.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stream_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stream.service */ "./src/app/member/session/stream.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewSessionComponent = /** @class */ (function () {
    function NewSessionComponent(db, uiService, router, stream) {
        this.db = db;
        this.uiService = uiService;
        this.router = router;
        this.stream = stream;
    }
    NewSessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentMemberSub = this.db.doc("members/" + localStorage.getItem('uid')).valueChanges().subscribe(function (data) {
            _this.currentMember = data;
        });
    };
    NewSessionComponent.prototype.ngOnDestroy = function () {
        this.currentMemberSub.unsubscribe();
    };
    NewSessionComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log("#0: " + form.value.goalUse);
        var hasGoal = form.value.goalUse ? true : false;
        this.db.doc("members/" + localStorage.getItem('uid')).update({
            session: {
                title: form.value.title,
                modelName: form.value.modelName,
                accessType: form.value.accessType,
                minLevel: (form.value.minLevel) ? form.value.minLevel : 0,
                usePpm: form.value.ppmUse ? true : false,
                ppm: (form.value.ppmUse === true) ? { amount: form.value.ppmAmount } : null,
                useGoal: hasGoal,
                stream: this.stream.fetchNewStream(),
                created: new Date(),
                agreedStream: form.value.agree ? true : false
            }
        }).catch(function (error) {
            _this.uiService.showSnackbarError(error);
        });
        if (hasGoal) {
            this.db.doc("session-goals/" + localStorage.getItem('uid')).set({
                amount: form.value.goalAmount,
                collected: 0,
                descr: form.value.goalDescription,
                doneFx: form.value.goalDoneFx
            })
                .catch(function (error) {
                _this.uiService.showSnackbarError(error);
            });
        }
        this.uiService.showSnackbar('new session setup', null, 3000);
        this.router.navigate(['member/session']);
    };
    NewSessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-session',
            template: __webpack_require__(/*! ./new-session.component.html */ "./src/app/member/session/new-session/new-session.component.html"),
            styles: [__webpack_require__(/*! ./new-session.component.css */ "./src/app/member/session/new-session/new-session.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], src_app_common_ui_service__WEBPACK_IMPORTED_MODULE_2__["UIService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _stream_service__WEBPACK_IMPORTED_MODULE_4__["StreamService"]])
    ], NewSessionComponent);
    return NewSessionComponent;
}());



/***/ }),

/***/ "./src/app/member/session/past-session/past-session.component.css":
/*!************************************************************************!*\
  !*** ./src/app/member/session/past-session/past-session.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/session/past-session/past-session.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/member/session/past-session/past-session.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  past-session works!\n</p>\n"

/***/ }),

/***/ "./src/app/member/session/past-session/past-session.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/member/session/past-session/past-session.component.ts ***!
  \***********************************************************************/
/*! exports provided: PastSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastSessionComponent", function() { return PastSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PastSessionComponent = /** @class */ (function () {
    function PastSessionComponent() {
    }
    PastSessionComponent.prototype.ngOnInit = function () {
    };
    PastSessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-past-session',
            template: __webpack_require__(/*! ./past-session.component.html */ "./src/app/member/session/past-session/past-session.component.html"),
            styles: [__webpack_require__(/*! ./past-session.component.css */ "./src/app/member/session/past-session/past-session.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PastSessionComponent);
    return PastSessionComponent;
}());



/***/ }),

/***/ "./src/app/member/session/session/session.component.css":
/*!**************************************************************!*\
  !*** ./src/app/member/session/session/session.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/session/session/session.component.html":
/*!***************************************************************!*\
  !*** ./src/app/member/session/session/session.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group *ngIf=\"isModel\">\r\n\r\n  <mat-tab label=\"New Session\" *ngIf=\"!hasSession\">\r\n    <app-new-session></app-new-session>\r\n  </mat-tab>\r\n  <mat-tab label=\"Past Sessions\" *ngIf=\"!hasSession\">\r\n    <app-past-session></app-past-session>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n<app-current-session  *ngIf=\"hasSession && isModel\"></app-current-session>\r\n"

/***/ }),

/***/ "./src/app/member/session/session/session.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/member/session/session/session.component.ts ***!
  \*************************************************************/
/*! exports provided: SessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionComponent", function() { return SessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionComponent = /** @class */ (function () {
    function SessionComponent(db) {
        this.db = db;
    }
    SessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var path = "members/" + localStorage.getItem('uid');
        this._memberSubscription = this.db.doc(path)
            .valueChanges()
            .subscribe(function (member) {
            _this.isModel = member.isModel ? true : false;
            _this.hasSession = (member.session) ? true : false;
            //  console.log(member);
            //  console.log('is live: ' + this.hasSession);
            //  console.log('is model:' + this.isModel);
        });
    };
    SessionComponent.prototype.ngOnDestroy = function () {
        this._memberSubscription.unsubscribe();
    };
    SessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-session',
            template: __webpack_require__(/*! ./session.component.html */ "./src/app/member/session/session/session.component.html"),
            styles: [__webpack_require__(/*! ./session.component.css */ "./src/app/member/session/session/session.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], SessionComponent);
    return SessionComponent;
}());



/***/ }),

/***/ "./src/app/member/session/stream.service.ts":
/*!**************************************************!*\
  !*** ./src/app/member/session/stream.service.ts ***!
  \**************************************************/
/*! exports provided: StreamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamService", function() { return StreamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StreamService = /** @class */ (function () {
    function StreamService(db) {
        this.db = db;
    }
    StreamService.prototype.fetchNewStream = function () {
        var streamKey = Math.round((new Date()).getTime() / 1000);
        return {
            url: 'rtmp://104.40.203.155:1935/live',
            key: "" + streamKey
        };
    };
    StreamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], StreamService);
    return StreamService;
}());



/***/ }),

/***/ "./src/app/models/listings/listings.component.css":
/*!********************************************************!*\
  !*** ./src/app/models/listings/listings.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/models/listings/listings.component.html":
/*!*********************************************************!*\
  !*** ./src/app/models/listings/listings.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  listings works!\n</p>\n"

/***/ }),

/***/ "./src/app/models/listings/listings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/models/listings/listings.component.ts ***!
  \*******************************************************/
/*! exports provided: ListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsComponent", function() { return ListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListingsComponent = /** @class */ (function () {
    function ListingsComponent() {
    }
    ListingsComponent.prototype.ngOnInit = function () {
    };
    ListingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.component.html */ "./src/app/models/listings/listings.component.html"),
            styles: [__webpack_require__(/*! ./listings.component.css */ "./src/app/models/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListingsComponent);
    return ListingsComponent;
}());



/***/ }),

/***/ "./src/app/models/live/live.component.css":
/*!************************************************!*\
  !*** ./src/app/models/live/live.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/models/live/live.component.html":
/*!*************************************************!*\
  !*** ./src/app/models/live/live.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  live works!\n</p>\n"

/***/ }),

/***/ "./src/app/models/live/live.component.ts":
/*!***********************************************!*\
  !*** ./src/app/models/live/live.component.ts ***!
  \***********************************************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LiveComponent = /** @class */ (function () {
    function LiveComponent() {
    }
    LiveComponent.prototype.ngOnInit = function () {
    };
    LiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live',
            template: __webpack_require__(/*! ./live.component.html */ "./src/app/models/live/live.component.html"),
            styles: [__webpack_require__(/*! ./live.component.css */ "./src/app/models/live/live.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LiveComponent);
    return LiveComponent;
}());



/***/ }),

/***/ "./src/app/models/models.component.css":
/*!*********************************************!*\
  !*** ./src/app/models/models.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/models/models.component.html":
/*!**********************************************!*\
  !*** ./src/app/models/models.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  models works!\n</p>\n"

/***/ }),

/***/ "./src/app/models/models.component.ts":
/*!********************************************!*\
  !*** ./src/app/models/models.component.ts ***!
  \********************************************/
/*! exports provided: ModelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsComponent", function() { return ModelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModelsComponent = /** @class */ (function () {
    function ModelsComponent() {
    }
    ModelsComponent.prototype.ngOnInit = function () {
    };
    ModelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-models',
            template: __webpack_require__(/*! ./models.component.html */ "./src/app/models/models.component.html"),
            styles: [__webpack_require__(/*! ./models.component.css */ "./src/app/models/models.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModelsComponent);
    return ModelsComponent;
}());



/***/ }),

/***/ "./src/app/nav/header/header.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav/header/header.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none;\r\n    color:white;\r\n}\r\na:hover,\r\na:active{\r\n    color:lightgray;\r\n}\r\n.navigation-items{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.navigation-caption{\r\n    display: inline-block;\r\n    padding-left: 6px;\r\n}\r\n.logout{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/nav/header/header.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav/header/header.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n          \r\n  <div>\r\n      <button mat-icon-button (click)=\"onToggleSidebar()\">\r\n      <mat-icon>menu</mat-icon>\r\n  </button></div>\r\n  \r\n  <div><a routerLink=\"/\">LOGO</a></div>\r\n\r\n  <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs >\r\n      <ul fxLayout fxLayoutGap=\"10px\" class=\"navigation-items\">\r\n        <li *ngIf=\"!isAuth\"><a routerLink=\"/signup\">Signup</a></li>\r\n        <li *ngIf=\"!isAuth\"><a routerLink=\"/login\">Login</a></li>\r\n        <li *ngIf=\"!isAuth\"><a routerLink=\"/models/listings\">Models</a></li>\r\n        <li *ngIf=\"isAuth\"><a routerLink=\"/profile\">Profile</a></li>\r\n        <li *ngIf=\"isAuth && isModel\"><a routerLink=\"/member/session\">Session Control</a></li>\r\n        <li *ngIf=\"isAuth\" class=\"logout\" (click)=\"onLogout()\"><a>Logout</a></li>\r\n    </ul>\r\n  </div>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/nav/header/header.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav/header/header.component.ts ***!
  \************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, db) {
        this.authService = authService;
        this.db = db;
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isAuth = false;
        this.isModel = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authServiceChangedSub = this.authService.changed.subscribe(function (status) {
            _this.isAuth = status;
            if (_this.isAuth) {
                _this.memberChangeSub = _this.db.doc("members/" + localStorage.getItem('uid')).valueChanges()
                    .subscribe(function (member) {
                    _this.isModel = (member.isModel === true) ? true : false;
                });
            }
        });
    };
    HeaderComponent.prototype.onToggleSidenav = function () {
        this.toggleSidebar.emit();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    // ------------------------------------
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authServiceChangedSub.unsubscribe();
        this.memberChangeSub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleSidebar", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/nav/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/nav/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/nav/sidebar/sidebar.component.css":
/*!***************************************************!*\
  !*** ./src/app/nav/sidebar/sidebar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/sidebar/sidebar.component.html":
/*!****************************************************!*\
  !*** ./src/app/nav/sidebar/sidebar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <a mat-list-item  *ngIf=\"!isLoggedIn\" routerLink=\"/signup\" (click)=\"onClose()\"><mat-icon>face</mat-icon><span class=\"navigation-caption\">Signup</span></a>\n  <a mat-list-item  *ngIf=\"!isLoggedIn\" routerLink=\"/login\" (click)=\"onClose()\"><mat-icon>input</mat-icon><span class=\"navigation-caption\">Login</span></a>\n  <a mat-list-item  routerLink=\"/models/listings\" (click)=\"onClose()\"><mat-icon>people</mat-icon><span class=\"navigation-caption\">Models</span></a>\n  <mat-list-item  *ngIf=\"isLoggedIn\">\n    <button mat-icon-button  (click)=\"onLogout()\"><mat-icon>eject</mat-icon><span class=\"navigation-caption\">Logout</span></button>\n  </mat-list-item>\n  \n</mat-nav-list>"

/***/ }),

/***/ "./src/app/nav/sidebar/sidebar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nav/sidebar/sidebar.component.ts ***!
  \**************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoggedIn = false;
        this.isModel = false;
    }
    SidebarComponent.prototype.onClose = function () {
        this.close.emit();
    };
    SidebarComponent.prototype.onLogout = function () {
    };
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "close", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/nav/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/nav/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome\" fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"20px\" fxLayoutAlign=\"center center center\">\r\n  <section>\r\n    <h1>Welcome</h1>\r\n    <p>hi</p>\r\n  </section>\r\n  <section>\r\n    <h1>Welcome</h1>\r\n    <p>there</p>\r\n  </section>\r\n  <section>\r\n    <h1>Welcome</h1>\r\n    <p>How are you</p>\r\n  </section>   \r\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAJ1uOpuEs4t2h5MGppWbVQgYDHrq4m5xo',
        authDomain: 'alpha69-ng.firebaseapp.com',
        databaseURL: 'https://alpha69-ng.firebaseio.com',
        projectId: 'alpha69-ng',
        storageBucket: 'alpha69-ng.appspot.com',
        messagingSenderId: '964085174298'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\d400041\Downloads\alpha69-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map