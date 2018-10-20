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
/* harmony import */ var _models_live_live_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/live/live.component */ "./src/app/models/live/live.component.ts");
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");
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
    { path: 'models', component: _models_models_component__WEBPACK_IMPORTED_MODULE_13__["ModelsComponent"] },
    { path: 'models/live', component: _models_live_live_component__WEBPACK_IMPORTED_MODULE_12__["LiveComponent"] },
    { path: 'profile', component: _auth_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
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

module.exports = "\r\nmat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n    height: 100%;\r\n}\r\n\r\nmat-sidenav{\r\n    width:250px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color:white;\r\n}\r\n\r\na:hover,\r\na:active{\r\n    color:lightgray;\r\n}\r\n\r\n.navigation-items{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.navigation-caption{\r\n    display: inline-block;\r\n    padding-left: 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0NBQ2Y7O0FBQ0Q7O0lBRUksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2e1xyXG4gICAgd2lkdGg6MjUwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuYTpob3ZlcixcclxuYTphY3RpdmV7XHJcbiAgICBjb2xvcjpsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWl0ZW1ze1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWNhcHRpb257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n    \r\n  <mat-sidenav  #sidebar role=\"navigation\">\r\n    <app-sidebar (close)=\"sidebar.close()\"></app-sidebar>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-container>\r\n      <app-header (toggleSidebar)=\"sidebar.toggle()\"></app-header>\r\n      <router-outlet></router-outlet>\r\n  </mat-sidenav-container>\r\n\r\n</mat-sidenav-container>\r\n\r\n\r\n\r\n"

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
        // localStorage.removeItem('uid');
        localStorage.removeItem('mid');
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
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");
/* harmony import */ var _models_live_live_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./models/live/live.component */ "./src/app/models/live/live.component.ts");
/* harmony import */ var _common_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./common/ok-dialog/ok-dialog.component */ "./src/app/common/ok-dialog/ok-dialog.component.ts");
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
                _models_models_component__WEBPACK_IMPORTED_MODULE_31__["ModelsComponent"],
                _models_live_live_component__WEBPACK_IMPORTED_MODULE_32__["LiveComponent"],
                _common_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_33__["OKDialogComponent"]
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
            entryComponents: [src_app_common_yesno_dialog_yesno_dialog_component__WEBPACK_IMPORTED_MODULE_30__["YesNoDialogComponent"], _common_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_33__["OKDialogComponent"]]
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
    AuthService.prototype.signUp = function (email, password, displayName, isModel, dob, realfullname, aboutMe, avatarImg, listingImg) {
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
                    aboutMe: aboutMe,
                    avatarImg: avatarImg,
                    listingImg: listingImg,
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

module.exports = "mat-form-field {\r\n    width: 300px;\r\n  }\r\n  \r\n.login-form {\r\n    padding-top:30px;\r\n}\r\n  \r\n.page-title {\r\n    text-align: center\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtHQUNkOztBQUVIO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0dBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuLmxvZ2luLWZvcm0ge1xyXG4gICAgcGFkZGluZy10b3A6MzBweDtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgfSJdfQ== */"

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

module.exports = ".profile-image {\r\n    width: 600px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/auth/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <section class=\"member-info\" *ngIf=\"currentMember\">\r\n    <h1>member info</h1>\r\n <!--   <p> email: {{ currentMember.email}}</p>-->\r\n    <p> displayName: {{ currentMember.displayName}}</p>\r\n    <!-- <img [src]=\"currentMember.photoUrl\" style=\"max-width: 100px;height:auto\" />-->\r\n    <h1>TO-BE-DONE</h1>\r\n\r\n    <h1>Version: {{version}}</h1>\r\n  </section>\r\n\r\n  <section class=\"profile-image\" >\r\n      <app-file-upload></app-file-upload>\r\n  </section>\r\n\r\n</section>\r\n"

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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
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
        this.currentMember = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version;
        this.currrentMemberSub = this.db.doc("members/" + this.authService.getUserId()).valueChanges()
            .subscribe(function (data) {
            _this.currentMember = data;
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        if (this.currrentMemberSub) {
            this.currrentMemberSub.unsubscribe();
        }
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

module.exports = "mat-form-field {\r\n  width: 300px;\r\n}\r\n\r\n.signup-form {\r\n  padding-top:  30px\r\n}\r\n\r\n.page-title {\r\n  text-align: center\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBR0Q7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5zaWdudXAtZm9ybSB7XHJcbiAgcGFkZGluZy10b3A6ICAzMHB4XHJcbn1cclxuXHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-title\">\r\n  <h1>Signup</h1>\r\n</section>\r\n\r\n<section class=\"signup-form\">\r\n  <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n   \r\n\r\n    <mat-form-field>\r\n      <input type=\"email\" matInput placeholder=\"Email\" ngModel name=\"email\" email required #emailInput=\"ngModel\"/>\r\n      <mat-error *ngIf=\"!emailInput.hasError('required')\">Invalid email</mat-error>\r\n    </mat-form-field>\r\n   \r\n    <mat-form-field hintLabel=\"Should be at least 6 characters long\"> \r\n        <input type=\"password\"\r\n         matInput \r\n         placeholder=\"Password\"\r\n         ngModel\r\n         name=\"password\"\r\n         required\r\n         minlength=\"6\"\r\n         #pwInput=\"ngModel\">\r\n         <mat-hint align=\"end\">{{pwInput.value?.length}}/6</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input type=\"text\" matInput placeholder=\"Display name\" ngModel name=\"displayName\" required/>\r\n    </mat-form-field>\r\n\r\n    <mat-slide-toggle labelPosition=\"after\" color=\"accent\" ngModel name=\"isModel\">Register as Cam Model</mat-slide-toggle>\r\n    \r\n    <ng-container *ngIf=\"f.value.isModel\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Birthdate\" [matDatepicker]=\"picker\" [max]=\"maxDate\" ngModel name=\"dob\" required>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n\r\n      \r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"Real fullname\" ngModel name=\"realfullname\" required/>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"short About Me\" ngModel name=\"aboutMe\" maxlength=200 required/>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"Avatar image Url\" ngModel url name=\"avatarImg\" maxlength=9999 required/>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"Model listing image Url\" url ngModel name=\"listingImg\" maxlength=9999 required/>\r\n      </mat-form-field>\r\n      <p> TDB: missing fields for various model specific info, like pay-out information. and A proper image handling setup etc...</p>\r\n      <br/>\r\n      <br/>\r\n\r\n      <mat-checkbox labelPosition=\"after\" ngModel name=\"agreeModel\" required color=\"accent\">Agree to Models <a href=\"#\">Terms and Conditions.</a></mat-checkbox>\r\n\r\n  </ng-container>\r\n    \r\n    <mat-checkbox labelPosition=\"after\" ngModel name=\"agree18yo\" required color=\"accent\">I am 18 years or Older</mat-checkbox>\r\n    <mat-checkbox labelPosition=\"after\" ngModel name=\"agreeMember\" required color=\"accent\">Agree to Membership <a href=\"#\">Terms and Conditions.</a></mat-checkbox>\r\n\r\n    <button *ngIf=\"!isLoadning\" type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\">Submit</button>\r\n  \r\n  </form>\r\n</section>\r\n\r\n"

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
        this.authService.signUp(form.value.email, form.value.password, form.value.displayName, (form.value.isModel === true ? true : false), form.value.dob, form.value.realfullname, form.value.aboutMe, form.value.avatarImg, form.value.listingImg);
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

/***/ "./src/app/common/ok-dialog/ok-dialog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/ok-dialog/ok-dialog.component.ts ***!
  \*********************************************************/
/*! exports provided: OKDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OKDialogComponent", function() { return OKDialogComponent; });
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


var OKDialogComponent = /** @class */ (function () {
    function OKDialogComponent(data) {
        this.data = data;
    }
    OKDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ok-dialog',
            template: "<h1 mat-dialog-title>{{ data.title }}</h1>\n            <mat-dialog-content>\n              <p>{{ data.content }}</p>\n            </mat-dialog-content>\n            <mat-dialog-actions>\n              <button mat-button [mat-dialog-close]=\"true\">{{ data.okLabel }}</button>\n            </mat-dialog-actions>"
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], OKDialogComponent);
    return OKDialogComponent;
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

module.exports = "<div class=\"dropzone\" \n     appDropZone\n     (hovered)=\"toggleHover($event)\"\n     (dropped)=\"startUpload($event)\"\n     [class.hovering]=\"isHovering\">\n\n     <h3>Drag and Drop a file or select a file</h3>\n \n     <div class=\"file\">\n        <label class=\"file-label\">\n\n        <input class=\"file-input\" type=\"file\" (change)=\"startUpload($event.target.files)\">\n\n          <span class=\"file-cta\">\n            <span class=\"file-icon\">\n              <i class=\"fa fa-upload\"></i>\n            </span>\n            <span class=\"file-label\">\n              or choose a file…\n            </span>\n          </span>\n        </label>\n      </div>\n</div>\n\n<div *ngIf=\"percentage | async as pct\">\n\n  <progress class=\"progress is-info\" \n            [value]=\"pct\" \n            max=\"100\">        \n  </progress>\n  {{ pct | number }}%\n\n</div>\n\n\n<div *ngIf=\"snapshot | async as snap\">\n  {{ snap.bytesTransferred | fileSize }} of {{ snap.totalBytes | fileSize }} \n\n  \n  <div *ngIf=\"downloadUrl$ | async as url\">\n    <h3>Results!</h3>\n    <img [src]=\"url\"><br>\n    <a [href]=\"url\" target=\"_blank\" rel=\"noopener\">Download Me!</a>\n  </div> \n\n  <button (click)=\"task.pause()\" class=\"button is-warning\" [disabled]=\"!isActive(snap)\">Pause</button>\n  <button (click)=\"task.cancel()\" class=\"button is-danger\" [disabled]=\"!isActive(snap)\">Cancel</button>\n  <button (click)=\"task.resume()\" class=\"button is-info\"   [disabled]=\"!(snap?.state === 'paused')\">Resume</button>\n\n</div>"

/***/ }),

/***/ "./src/app/files/file-upload/file-upload.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/files/file-upload/file-upload.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropzone {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 300px;\n  border: 2px dashed #f16624;\n  border-radius: 5px;\n  background: white;\n  margin: 10px 0; }\n  .dropzone.hovering {\n    border: 2px solid #f16624;\n    color: #dadada !important; }\n  progress::-webkit-progress-value {\n  transition: width 0.1s ease; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZXMvZmlsZS11cGxvYWQvQzpcXFVzZXJzXFxqYXhjcGhcXGNvZGVcXGFscGhhNjktbmcvc3JjXFxhcHBcXGZpbGVzXFxmaWxlLXVwbG9hZFxcZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2Qix1QkFBc0I7RUFDdEIsY0FBYTtFQUNiLDJCQUEwQjtFQUMxQixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGVBQWMsRUFNakI7RUFmRDtJQVlRLDBCQUF5QjtJQUN6QiwwQkFBeUIsRUFDNUI7RUFHTDtFQUNJLDRCQUEyQixFQUM5QiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3B6b25lIHsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNmMTY2MjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgICYuaG92ZXJpbmcge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMTY2MjQ7XHJcbiAgICAgICAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxucHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4xcyBlYXNlO1xyXG59Il19 */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/member/account/account.component.html":
/*!*******************************************************!*\
  !*** ./src/app/member/account/account.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  account works!\r\n</p>\r\n"

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

module.exports = "<section class='page-title'>\r\n    <h1>Session Control</h1>\r\n</section>\r\n\r\n<section class=\"content\">\r\n<mat-accordion class=\"accordion\" multi=\"true\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\r\n\r\n    <mat-expansion-panel  *ngIf=\"session\" fxFlex.xs=\"100%\" fxFlex=\"400px\">\r\n        <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n                Name & Title\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n                 &nbsp; \r\n                <mat-icon>face</mat-icon>\r\n            </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        \r\n        <mat-form-field>\r\n            <input type=\"text\" matInput placeholder=\"Model name to use\" [(ngModel)]=\"session.modelName\"  (change)=\"saveSession('session.modelName')\"/> \r\n        </mat-form-field>\r\n                 \r\n        <mat-form-field>\r\n            <input type=\"text\" matInput placeholder=\"Title\"  [(ngModel)]=\"session.title\"  (change)=\"saveSession('session.title')\" />\r\n        </mat-form-field>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel fxFlex.xs=\"100%\" fxFlex=\"400px\" *ngIf=\"session\" >\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    View settings\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    ({{session.accessType}})&nbsp;\r\n                    <mat-icon>visibility</mat-icon>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Who can view?\"  [(ngModel)]=\"session.accessType\" (selectionChange)=\"saveSession('session.accessType')\" >\r\n                        <mat-option value=\"public\"><u>Everyone</u> can view</mat-option>\r\n                        <mat-option value=\"member\">all <u>Members</u> can view</mat-option>\r\n                        <mat-option value=\"level\">only <u>Members</u> => <u>level</u> </mat-option>\r\n                        <mat-option value=\"onrequest\"><u>Members</u> can <u>Request to join</u></mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"session.accessType === 'level'\">\r\n                <input type=\"number\" matInput placeholder=\"Required level?\"  [(ngModel)]=\"session.minLevel\"  (change)=\"saveSession('session.minLevel')\" />  \r\n            </mat-form-field>\r\n    </mat-expansion-panel>\r\n    \r\n\r\n    <mat-expansion-panel fxFlex.xs=\"100%\" fxFlex=\"400px\" *ngIf=\"session\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Pay Per Minute\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    {{session.usePpm? '(Enabled)' :' ' }}&nbsp;\r\n                    <mat-icon>attach_money</mat-icon>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <mat-slide-toggle labelPosition=\"before\" color=\"accent\" [(ngModel)]=\"session.usePpm\" (change)=\"saveSession('session.usePpm')\">Enable Pay-Per-Minute</mat-slide-toggle>\r\n\r\n            <mat-form-field *ngIf=\"session.usePpm\">\r\n              <input type=\"number\" matInput placeholder=\"Tokens to Pay-Per-Minute\" [(ngModel)]=\"session.ppm.amount\" (change)=\"saveSession('session.ppm.amount')\"  />\r\n            </mat-form-field>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel fxFlex.xs=\"100%\" fxFlex=\"400px\" *ngIf=\"session\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Goal\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    {{session.useGoal? '(Enabled)' : '' }}&nbsp;\r\n                    <mat-icon>assistant_photo</mat-icon>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <mat-slide-toggle labelPosition=\"before\" color=\"accent\" [(ngModel)]=\"session.useGoal\"  (change)=\"saveSession('session.useGoal')\">Do you want to set a Goal?</mat-slide-toggle>\r\n          <ng-container *ngIf=\"goal\">\r\n              <mat-form-field>\r\n                  <input type=\"number\" matInput placeholder=\"Goal Amount token (Target)\" [(ngModel)]=\"goal.amount\"   (change)=\"saveSession('goal.amount')\" />\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                  <input type=\"text\"  matInput placeholder=\"Goal description\" [(ngModel)]=\"goal.descr\"  (change)=\"saveSession('goal.descr')\" />\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                      <mat-select placeholder=\"Show Fx on goal complete?\"  [(ngModel)]=\"goal.doneFx\"  (selectionChange)=\"saveSession('goal.doneFx')\" >\r\n                              <mat-option value=\"None\">No</mat-option>\r\n                              <mat-option value=\"fx1\">1 TBD</mat-option>\r\n                              <mat-option value=\"fx2\">2 TBD</mat-option>\r\n                              <mat-option value=\"fx3\">3 TBD</mat-option>\r\n                              <mat-option value=\"fx3\">4 TBD</mat-option>\r\n                            </mat-select>\r\n              </mat-form-field>\r\n         </ng-container>   \r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel fxFlex.xs=\"100%\" fxFlex=\"400px\" *ngIf=\"session\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Stream Control\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    &nbsp;\r\n                    <mat-icon>cast</mat-icon>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Stream Url\" [ngModel]=\"session.stream.url\" readonly />\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input type=\"text\"  matInput placeholder=\"Stream Key\" [ngModel]=\"session.stream.key\" readonly/>\r\n                </mat-form-field>\r\n            <button mat-raised-button color=\"primary\" (click)=\"getNewStreamKey()\">Get new stream key</button><br/><br/>\r\n            <button mat-raised-button color=\"accent\" (click)=\"stopSession()\">Stop Session!</button>\r\n        \r\n    </mat-expansion-panel>\r\n\r\n  \r\n</mat-accordion>\r\n\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<section class='page-title'>\r\n    <h1>Live metrics</h1>\r\n</section>\r\n\r\n<mat-accordion class=\"accordion\" multi=\"true\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\r\n\r\n        <mat-expansion-panel  *ngIf=\"goal\" fxFlex.xs=\"100%\" fxFlex=\"400px\" expanded class=\"goal-meter\">\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    Goal Meter\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    {{goalCollectedPct}}% ({{goal.collected}}t / {{goal.amount}}t)&nbsp; \r\n                    <mat-progress-spinner\r\n                    color=\"primary\"\r\n                    mode=\"determinate\"\r\n                    [value]=\"goalCollectedPct\"\r\n                    strokeWidth=3\r\n                    diameter=20>\r\n                 </mat-progress-spinner>\r\n                </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            \r\n            <div>\r\n                <table>\r\n                    <tr>\r\n                    <td>\r\n                        <mat-progress-spinner\r\n                        color=\"primary\"\r\n                        mode=\"determinate\"\r\n                        [value]=\"goalCollectedPct\"\r\n                        strokeWidth=10\r\n                        diameter=80>\r\n                     </mat-progress-spinner></td>\r\n                    \r\n                    <td style=\"font-size: 48pt\">{{goalCollectedPct}}%</td>\r\n                    <td style=\"font-size: 11pt;font-weight: normal;text-align: center;padding-left:10px\">{{goal.collected}}<br/>out of<br/>{{goal.amount}} <img src=\"https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Fcoin16.png?alt=media&token=45502c9f-a9d4-4c2e-9671-aa92141db4f5\"></td>\r\n                </tr>\r\n                <tr><td colspan=\"2\" style=\"text-align:center;font-size:12pt;font-weight: bold\">{{goal.descr}}</td></tr>\r\n                </table>\r\n            \r\n           \r\n            </div>\r\n            \r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel  *ngIf=\"tipjar\" fxFlex.xs=\"100%\" fxFlex=\"400px\" expanded class=\"tipjar\" >\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                       Tip jar\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        {{tipjar.balance}} t &nbsp; \r\n                        <mat-icon>attach_money</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n              <div style=\"font-size: 48pt;padding-top:30px;text-align: center;\">\r\n                {{tipjar.balance}}  <img src=\"https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Fcoin32.png?alt=media&token=f4b3f892-a7d1-4908-a2c5-54d3dbd02b22\">\r\n              </div>\r\n            </mat-expansion-panel>\r\n\r\n\r\n            <mat-expansion-panel  *ngIf=\"wallet\" fxFlex.xs=\"100%\" fxFlex=\"400px\" expanded class=\"wallet\">\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                           Personal Wallet\r\n                        </mat-panel-title>\r\n                        <mat-panel-description>\r\n                            {{wallet.balance}} t &nbsp; \r\n                            <mat-icon>attach_money</mat-icon>\r\n                        </mat-panel-description>\r\n                    </mat-expansion-panel-header>\r\n                  <div style=\"font-size: 48pt;padding-top:30px;text-align: center;\">\r\n                    {{wallet.balance}} <img src=\"https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Fcoin32.png?alt=media&token=f4b3f892-a7d1-4908-a2c5-54d3dbd02b22\">\r\n                  </div>\r\n                </mat-expansion-panel>\r\n\r\n                <mat-expansion-panel  *ngIf=\"session\" fxFlex.xs=\"100%\" fxFlex=\"400px\" expanded class=\"runtime\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                              Runtime & Clock\r\n                            </mat-panel-title>\r\n                            <mat-panel-description>\r\n                                {{runtimeHours}}h {{runtimeMinutes}}m  ({{clockHours}}:{{clockMinutes}})\r\n                                <mat-icon>access_time</mat-icon>\r\n                            </mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                     \r\n                        <div style=\"font-size: 48pt;padding-top:30px;text-align: center;\">\r\n                        <ng-container *ngIf=\"runtimeDays>0\"> {{runtimeDays}}d </ng-container> {{runtimeHours}}h {{runtimeMinutes}}m\r\n                      </div>\r\n\r\n                      <div style=\"font-size: 14pt;padding-top:30px;text-align: center;\">\r\n                        {{clockHours}}:{{clockMinutes}} {{timezone}} \r\n                      </div>\r\n\r\n                    </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/member/session/current-session/current-session.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/member/session/current-session/current-session.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 300px; }\n\n.current-session {\n  padding-top: 30px; }\n\n/* http://www.colorzilla.com/gradient-editor/ */\n\n.goal-meter {\n  background: #e4f5fc;\n  background: linear-gradient(to bottom, #e4f5fc 0%, #7dc8e8 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4f5fc', endColorstr='#7dc8e8',GradientType=0 ); }\n\n.tipjar {\n  background: #fefcea;\n  background: linear-gradient(to bottom, #fefcea 0%, #ede4af 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea', endColorstr='#ede4af',GradientType=0 ); }\n\n.wallet {\n  background: #eeeeee;\n  background: linear-gradient(to bottom, #eeeeee 0%, #cccccc 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#cccccc',GradientType=0 ); }\n\n.runtime {\n  background: #cdeb8b;\n  background: linear-gradient(to bottom, #cdeb8b 0%, #daeab4 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cdeb8b', endColorstr='#daeab4',GradientType=0 ); }\n\n.page-title {\n  text-align: center; }\n\n.accordion .mat-expansion-panel-header-title,\n.accordion .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.accordion .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n\nmat-expansion-panel {\n  margin: 5px 5px 5px 5px; }\n\n.content {\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyL3Nlc3Npb24vY3VycmVudC1zZXNzaW9uL0M6XFxVc2Vyc1xcamF4Y3BoXFxjb2RlXFxhbHBoYTY5LW5nL3NyY1xcYXBwXFxtZW1iZXJcXHNlc3Npb25cXGN1cnJlbnQtc2Vzc2lvblxcY3VycmVudC1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWSxFQUNiOztBQUVEO0VBQ0Usa0JBQ0YsRUFBQzs7QUFJSCxnREFBZ0Q7O0FBRWhEO0VBQ0ksb0JBQW1CO0VBR25CLGlFQUErRDtFQUMvRCxvSEFBbUgsRUFDcEg7O0FBRUQ7RUFDRSxvQkFBbUI7RUFHbkIsaUVBQStEO0VBQy9ELG9IQUFtSCxFQUNwSDs7QUFFRDtFQUNFLG9CQUFtQjtFQUduQixpRUFBK0Q7RUFDL0Qsb0hBQW1ILEVBQ3BIOztBQUVEO0VBQ0Usb0JBQW1CO0VBR25CLGlFQUErRDtFQUMvRCxvSEFBbUgsRUFDbkg7O0FBR0o7RUFDRSxtQkFDRixFQUFDOztBQUNEOztFQUVFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLCtCQUE4QjtFQUM5QixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDdkI7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsbUJBQWlCO0VBQ2pCLHFCQUFvQixFQUVyQiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9zZXNzaW9uL2N1cnJlbnQtc2Vzc2lvbi9jdXJyZW50LXNlc3Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXJyZW50LXNlc3Npb24ge1xyXG4gICAgcGFkZGluZy10b3A6ICAzMHB4XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbi8qIGh0dHA6Ly93d3cuY29sb3J6aWxsYS5jb20vZ3JhZGllbnQtZWRpdG9yLyAqL1xyXG5cclxuLmdvYWwtbWV0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U0ZjVmYztcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2U0ZjVmYyAwJSwgIzdkYzhlOCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2U0ZjVmYyAwJSwjN2RjOGU4IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2U0ZjVmYyAwJSwjN2RjOGU4IDEwMCUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNlNGY1ZmMnLCBlbmRDb2xvcnN0cj0nIzdkYzhlOCcsR3JhZGllbnRUeXBlPTAgKTtcclxuICB9XHJcblxyXG4gIC50aXBqYXIgeyBcclxuICAgIGJhY2tncm91bmQ6ICNmZWZjZWE7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZWZjZWEgMCUsICNlZGU0YWYgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZWZjZWEgMCUsI2VkZTRhZiAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZWZjZWEgMCUsI2VkZTRhZiAxMDAlKTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmVmY2VhJywgZW5kQ29sb3JzdHI9JyNlZGU0YWYnLEdyYWRpZW50VHlwZT0wICk7XHJcbiAgfVxyXG5cclxuICAud2FsbGV0IHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlZWVlIDAlLCAjY2NjY2NjIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWVlZWVlIDAlLCNjY2NjY2MgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWVlZWVlIDAlLCNjY2NjY2MgMTAwJSk7XHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2VlZWVlZScsIGVuZENvbG9yc3RyPScjY2NjY2NjJyxHcmFkaWVudFR5cGU9MCApO1xyXG4gIH1cclxuXHJcbiAgLnJ1bnRpbWUgeyBcclxuICAgIGJhY2tncm91bmQ6ICNjZGViOGI7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNjZGViOGIgMCUsICNkYWVhYjQgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNjZGViOGIgMCUsI2RhZWFiNCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjZGViOGIgMCUsI2RhZWFiNCAxMDAlKTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjY2RlYjhiJywgZW5kQ29sb3JzdHI9JyNkYWVhYjQnLEdyYWRpZW50VHlwZT0wICk7XHJcbiAgIH1cclxuXHJcblxyXG4ucGFnZS10aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4uYWNjb3JkaW9uIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSwgXHJcbi5hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgbWFyZ2luOiA1cHggNXB4IDVweCA1cHg7XHJcbiB9XHJcblxyXG4gLmNvbnRlbnQge1xyXG4gICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgcGFkZGluZy1yaWdodDo1cHg7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuIH0iXX0= */"

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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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

module.exports = "mat-form-field {\r\n    width: 300px;\r\n  }\r\n\r\n  .new-session {\r\n    padding-top:  30px\r\n  }\r\n\r\n  .page-title {\r\n    text-align: center\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyL3Nlc3Npb24vbmV3LXNlc3Npb24vbmV3LXNlc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7R0FDZDs7RUFFRDtJQUNFLGtCQUFrQjtHQUNuQjs7RUFHRDtJQUNFLGtCQUFrQjtHQUNuQiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9zZXNzaW9uL25ldy1zZXNzaW9uL25ldy1zZXNzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAubmV3LXNlc3Npb24ge1xyXG4gICAgcGFkZGluZy10b3A6ICAzMHB4XHJcbiAgfVxyXG5cclxuXHJcbiAgLnBhZ2UtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgfSJdfQ== */"

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
                id: new Date().getTime(),
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9zZXNzaW9uL3Bhc3Qtc2Vzc2lvbi9wYXN0LXNlc3Npb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/member/session/past-session/past-session.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/member/session/past-session/past-session.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  past-session works!\r\n</p>\r\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9zZXNzaW9uL3Nlc3Npb24vc2Vzc2lvbi5jb21wb25lbnQuY3NzIn0= */"

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

/***/ "./src/app/models/live/live.component.css":
/*!************************************************!*\
  !*** ./src/app/models/live/live.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    width: 300px;\r\n  }\r\n\r\n\r\n  .page-title{\r\n    text-align: center\r\n  }\r\n\r\n\r\n  .accordion .mat-expansion-panel-header-title, \r\n  .accordion .mat-expansion-panel-header-description {\r\n    flex-basis: 0;\r\n  }\r\n\r\n\r\n  .accordion .mat-expansion-panel-header-description {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n\r\n  mat-expansion-panel {\r\n    margin: 5px 5px 5px 5px;\r\n   }\r\n\r\n\r\n  .content {\r\n     padding-left: 5px;\r\n     padding-right:5px;\r\n     padding-bottom: 10px;\r\n  \r\n   }\r\n\r\n\r\n  .wallet-balance {\r\n    font-size: 36pt;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    margin:10px;\r\n   }\r\n\r\n\r\n  .wallet-balance-label {\r\n    font-size: 12pt;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin:0px;\r\n   }\r\n\r\n\r\n  .tipwall-list {\r\n     list-style-type: none;\r\n     font-size: 10pt;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWxzL2xpdmUvbGl2ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtHQUNkOzs7RUFHRDtJQUNFLGtCQUFrQjtHQUNuQjs7O0VBQ0Q7O0lBRUUsY0FBYztHQUNmOzs7RUFFRDtJQUNFLCtCQUErQjtJQUMvQixvQkFBb0I7R0FDckI7OztFQUNEO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7RUFFSDtLQUNJLGtCQUFrQjtLQUNsQixrQkFBa0I7S0FDbEIscUJBQXFCOztJQUV0Qjs7O0VBRUQ7SUFDQyxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1o7OztFQUVEO0lBQ0MsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYOzs7RUFFRDtLQUNFLHNCQUFzQjtLQUN0QixnQkFBZ0I7SUFDakIiLCJmaWxlIjoic3JjL2FwcC9tb2RlbHMvbGl2ZS9saXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnBhZ2UtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICB9XHJcbiAgLmFjY29yZGlvbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsIFxyXG4gIC5hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIG1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgbWFyZ2luOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgIH1cclxuICBcclxuIC5jb250ZW50IHtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBcclxuICAgfVxyXG5cclxuICAgLndhbGxldC1iYWxhbmNlIHtcclxuICAgIGZvbnQtc2l6ZTogMzZwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgfVxyXG5cclxuICAgLndhbGxldC1iYWxhbmNlLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgfVxyXG5cclxuICAgLnRpcHdhbGwtbGlzdCB7XHJcbiAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/models/live/live.component.html":
/*!*************************************************!*\
  !*** ./src/app/models/live/live.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class='page-title'>\r\n    <h3 *ngIf=\"model\">Live with {{model.session.modelName}}</h3>\r\n</section>\r\n\r\n<section class=\"content\">\r\n missing PPM handling and transaction safe tipping\r\n<mat-accordion class=\"accordion\" multi=\"true\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\r\n\r\n  <mat-expansion-panel  *ngIf=\"wallet\" fxFlex.xs=\"100%\" fxFlex=\"400px\" expanded>\r\n      <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n              Wallet\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n              &nbsp; \r\n              <mat-icon>attach_money</mat-icon>\r\n          </mat-panel-description>\r\n       </mat-expansion-panel-header>\r\n      \r\n       <p class=\"wallet-balance-label\">Balance</p>\r\n       <p class=\"wallet-balance\">\r\n          {{wallet.balance}} <img src=\"https://firebasestorage.googleapis.com/v0/b/alpha69-ng.appspot.com/o/images%2Fcoin32.png?alt=media&token=f4b3f892-a7d1-4908-a2c5-54d3dbd02b22\">\r\n      </p>\r\n    \r\n\r\n      <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" #tipform=\"ngForm\" (ngSubmit)=\"onTip(tipform)\">\r\n\r\n          <mat-form-field>\r\n            <input type=\"number\" matInput placeholder=\"tip amount\" ngModel name=\"amount\" required/>\r\n            <mat-hint align=\"end\">minimum tip amount: {{model.session.minTipAmount? model.session.minTipAmount : 1}}</mat-hint>\r\n          </mat-form-field>\r\n      \r\n          <mat-form-field>\r\n            <input type=\"text\" matInput placeholder=\"tip message\" ngModel name=\"message\" maxlength=\"140\" />\r\n          </mat-form-field>\r\n      \r\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"tipform.invalid ||\r\n            (tipform.value.amount > wallet.balance) ||\r\n            (tipform.value.amount < (model.session.minTipAmount? model.session.minTipAmount : 1) )\">Tip</button>\r\n\r\n      </form>\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel  *ngIf=\"transactions\" fxFlex.xs=\"100%\" fxFlex=\"600px\" expanded>\r\n        <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n                Tip wall\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n                &nbsp; \r\n                <mat-icon>attach_money</mat-icon>\r\n            </mat-panel-description>\r\n         </mat-expansion-panel-header>\r\n        \r\n         <ul class=\"tipwall-list\">\r\n             <li *ngFor=\"let trans of transactions\">{{trans.dt.toDate() | date: 'hh:mm:ss'}}, {{trans.nme}}: {{trans.amt}} {{trans.msg? trans.msg : \"\"}}</li>\r\n         </ul>\r\n    </mat-expansion-panel>\r\n\r\n</mat-accordion>\r\n\r\n</section>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
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
    function LiveComponent(db, router, auth) {
        this.db = db;
        this.router = router;
        this.auth = auth;
        this.subs$ = [];
    }
    LiveComponent.prototype.onTip = function (form) {
        console.log(form);
        // TO DO RUN IN TRANSACTION perhaps in FUNCTION
        // in transaction :
        //  1 check wallet balance,
        //  2 reduce wallet
        //  2 increase tipjar
        //  3 check for goal, and post to goal
        //  4 write transaction
        // end transaction
        // 5 delay 500 msec
        var uid = localStorage.getItem('uid');
        var mid = localStorage.getItem('mid');
        // set new balance
        var newBalance = this.wallet.balance - form.value.amount;
        this.db.doc("member-wallets/" + uid).update({ balance: newBalance });
        // set the users shade on the tipjar
        var tipjarShadeAmount = this.tipjarShade ? this.tipjarShade.amount + form.value.amount : form.value.amount;
        if (this.tipjarShade) {
            this.db.doc("model-tipjars/" + mid + "/tippers/" + uid).update({ amount: tipjarShadeAmount });
        }
        else {
            this.db.doc("model-tipjars/" + mid + "/tippers/" + uid).set({ amount: tipjarShadeAmount });
        }
        // set the users shade on the goal, if there is goal for this session
        if (this.goal) {
            var goalShadeAmount = this.goalShade ? this.goalShade.amount + form.value.amount : form.value.amount;
            if (this.goalShade) {
                this.db.doc("session-goals/" + mid + "/tippers/" + uid).update({ amount: goalShadeAmount });
            }
            else {
                this.db.doc("session-goals/" + mid + "/tippers/" + uid).set({ amount: goalShadeAmount });
            }
        }
        // transactions
        if (form.value.message) {
            this.db.collection('session-tips').add({
                dt: new Date(),
                sid: this.model.session.id,
                amt: form.value.amount,
                uid: uid,
                nme: this.member.displayName,
                msg: form.value.message
            });
        }
        else {
            this.db.collection('session-tips').add({
                dt: new Date(),
                sid: this.model.session.id,
                amt: form.value.amount,
                uid: uid,
                nme: this.member.displayName
            });
        }
    };
    LiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        var uid = localStorage.getItem('uid');
        var mid = localStorage.getItem('mid');
        // this user
        this.subs$.push(this.db.doc("members/" + uid)
            .valueChanges()
            .subscribe(function (data) {
            _this.member = data;
            console.log('MEMBER ' + uid + ' =');
            console.log(_this.member);
        }));
        // model
        this.subs$.push(this.db.doc("members/" + mid)
            .valueChanges()
            .subscribe(function (data) {
            _this.model = data;
            console.log('MODEL ' + mid + ' =');
            console.log(_this.model);
            // transactions, get last 100
            _this.subs$.push(_this.db.collection('session-tips', function (ref) { return ref
                .where('sid', '==', _this.model.session.id)
                .orderBy('dt')
                .limit(100); })
                .valueChanges()
                .subscribe(function (items) {
                console.log('TRANSACTION=');
                console.log(items);
                _this.transactions = items;
            }));
        }));
        // users personal wallet
        this.subs$.push(this.db.doc("member-wallets/" + uid)
            .valueChanges()
            .subscribe(function (data) {
            _this.wallet = data;
            console.log('WALLET=');
            console.log(_this.wallet);
        }));
        // users personal wallet
        this.subs$.push(this.db.doc("session-goals/" + mid)
            .valueChanges()
            .subscribe(function (data) {
            _this.goal = data;
            console.log('GOAL=');
            console.log(_this.goal);
        }));
        // tipjar shade
        this.subs$.push(this.db.doc("model-tipjars/" + mid + "/tippers/" + uid)
            .valueChanges()
            .subscribe(function (data) {
            _this.tipjarShade = data;
            console.log('TIPJAR-SHADE=');
            console.log(_this.tipjarShade);
        }));
        // goal shade
        this.subs$.push(this.db.doc("session-goals/" + mid + "/tippers/" + uid)
            .valueChanges()
            .subscribe(function (data) {
            _this.goalShade = data;
            console.log('GOAL-SHADE=');
            console.log(_this.goalShade);
        }));
    };
    LiveComponent.prototype.ngOnDestroy = function () {
        if (this.subs$) {
            for (var _i = 0, _a = this.subs$; _i < _a.length; _i++) {
                var s = _a[_i];
                s.unsubscribe();
            }
            this.subs$ = null;
        }
    };
    LiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live',
            template: __webpack_require__(/*! ./live.component.html */ "./src/app/models/live/live.component.html"),
            styles: [__webpack_require__(/*! ./live.component.css */ "./src/app/models/live/live.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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

module.exports = ".page-title{\r\n    text-align: center\r\n}\r\n.content {\r\n\r\n}\r\nmat-card {\r\n    margin-top:10px;\r\n    margin-left:10px;\r\n    margin-right:10px;\r\n    margin-bottom:10px;\r\n}\r\nmat-card-title\r\n{\r\n    font-weight: bold;\r\n}\r\n.model-card {\r\n    max-width: 400px;\r\n  }\r\n.ppm {\r\n  text-align: center;\r\n  padding-top:2px;\r\n  padding-bottom:2px;\r\n}\r\n.ppm-value {\r\n  font-weight: normal;\r\n  padding-left: 3px;\r\n}\r\n.ppm-label {\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWxzL21vZGVscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7O0NBRUM7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUVEOztJQUVJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksaUJBQWlCO0dBQ2xCO0FBR0g7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0Usa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kZWxzL21vZGVscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4uY29udGVudCB7XHJcblxyXG59XHJcbm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGVcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1vZGVsLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG5cclxuLnBwbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOjJweDtcclxuICBwYWRkaW5nLWJvdHRvbToycHg7XHJcbn1cclxuXHJcbi5wcG0tdmFsdWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbn1cclxuLnBwbS1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/models/models.component.html":
/*!**********************************************!*\
  !*** ./src/app/models/models.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class='page-title'>\r\n    <h1>Models</h1>\r\n</section>\r\n\r\n<section class='content'  fxLayout=\"row wrap\" fxLayoutAlign=\"center\" *ngIf=\"models\" >\r\n\r\n    <mat-card class=\"model-card\" fxFlex.xs=\"100%\" fxFlex=\"400px\" *ngFor=\"let m of models\" >\r\n        <mat-card-header>\r\n          <img mat-card-avatar *ngIf=\"m.model.avatarImg\" [src]=\"m.model.avatarImg\">\r\n          <mat-card-title>{{m.session ? m.session.modelName : m.displayName }}</mat-card-title>\r\n          <mat-card-subtitle>{{m.session ? m.session.title: \"&nbsp;\"}}</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img mat-card-image [src]=\"m.model.listingImg\" alt=\"\">\r\n        <mat-card-content>\r\n          <p>\r\n              {{m.model.aboutMe?m.model.aboutMe : \"&nbsp;\"}}\r\n          </p>\r\n          <div class=\"ppm\" *ngIf=\"m.session && m.session.ppm && m.session.ppm.amount>0\">\r\n            <label class=\"ppm-label\">Pay Per Minute:</label><span class=\"ppm-value\">{{m.session.ppm.amount}} token</span>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n\r\n        <ng-container *ngIf=\"analyzeJoinOption(m) =='join'\">\r\n            <button mat-raised-button class=\"live-button\" color=\"accent\" (click)=\"onJoin(m)\">JOIN</button>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"analyzeJoinOption(m) =='login'\">\r\n            <button mat-raised-button class=\"live-button\" color=\"warn\" (click)=\"navLogin()\">LOGIN</button>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"analyzeJoinOption(m) =='onrequest'\">\r\n          <button mat-stroked-button class=\"live-button\" color=\"warn\" (click)=\"onRequestToJoin(m)\">REQUEST</button>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"analyzeJoinOption(m) =='lowscore'\">\r\n            <button mat-stroked-button class=\"live-button\" color=\"link\" (click)=\"onLowlevel(m)\"> <mat-icon>star</mat-icon>{{m.session.minLevel}}</button>\r\n\r\n        </ng-container>\r\n\r\n\r\n          <button mat-button (click)=\"onProfile(m)\" color=\"primary\">PROFILE</button>\r\n          <button mat-button (click)=\"onShare(m)\"  color=\"primary\">SHARE</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n\r\n</section>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/ok-dialog/ok-dialog.component */ "./src/app/common/ok-dialog/ok-dialog.component.ts");
/* harmony import */ var _common_yesno_dialog_yesno_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/yesno-dialog/yesno-dialog.component */ "./src/app/common/yesno-dialog/yesno-dialog.component.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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








var ModelsComponent = /** @class */ (function () {
    function ModelsComponent(db, auth, router, dialog) {
        this.db = db;
        this.auth = auth;
        this.router = router;
        this.dialog = dialog;
        this.models = [];
    }
    ModelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.removeItem('mid');
        if (localStorage.getItem('uid')) {
            this.currentMemberSub = this.db.doc("members/" + localStorage.getItem('uid'))
                .valueChanges()
                .subscribe(function (data) { _this.currentMember = data; });
        }
        this.modelsSub = this.db.collection('members', function (ref) { return ref.where('isModel', '==', true); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result.map(function (item) {
                return __assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        }))
            .subscribe(function (data) {
            _this.models = data;
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    ModelsComponent.prototype.navLogin = function () {
        this.router.navigate(['/login']);
    };
    ModelsComponent.prototype.analyzeJoinOption = function (m) {
        if (m.session) {
            if (m.session.accessType === 'public') {
                return 'join';
            }
            else if (m.session.accessType === 'member') {
                return this.auth.isAuth() ? 'join' : 'login';
            }
            else if (m.session.accessType === 'onrequest') {
                return this.auth.isAuth() ? 'onrequest' : 'login';
            }
            else if (m.session.accessType === 'level') {
                if (!this.auth.isAuth()) {
                    return 'login';
                }
                else {
                    return this.currentMember.level >= m.session.minLevel ? 'join' : 'lowscore';
                }
            }
        }
        else {
            return 'none';
        }
    };
    ModelsComponent.prototype.onJoin = function (m) {
        var _this = this;
        if (m.session.ppm && m.session.ppm.amount > 0) {
            var dialogRef = this.dialog.open(_common_yesno_dialog_yesno_dialog_component__WEBPACK_IMPORTED_MODULE_7__["YesNoDialogComponent"], {
                data: {
                    title: 'CONFIRM! Pay-Per-Minute',
                    content: "You will automatically be chardged " + m.session.ppm.amount + " tokens per minut on this live session",
                    yesLabel: "I Accept to " + m.session.ppm.amount + " token pay per minute",
                    noLabel: 'No, I will leave'
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    localStorage.setItem('mid', m.id);
                    _this.router.navigate(['/models/live']);
                }
            });
        }
        else {
            localStorage.setItem('mid', m.id);
            this.router.navigate(['/models/live']);
        }
    };
    ModelsComponent.prototype.onProfile = function (m) {
    };
    ModelsComponent.prototype.onShare = function (m) {
    };
    ModelsComponent.prototype.onLowlevel = function (m) {
        var dialogRef = this.dialog.open(_common_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_6__["OKDialogComponent"], {
            data: {
                title: 'Information',
                content: m.session.modelName + " requires a minimum user-level\n                  of " + m.session.minLevel + " to join this session.\n                  your user-level now is " + this.currentMember.level,
                okLabel: 'OK'
            }
        });
    };
    ModelsComponent.prototype.onRequestToJoin = function (m) {
        var dialogRef = this.dialog.open(_common_ok_dialog_ok_dialog_component__WEBPACK_IMPORTED_MODULE_6__["OKDialogComponent"], {
            data: {
                title: 'Sorry!',
                content: 'The [Request to Join] feature was not been implemented yet',
                okLabel: ':('
            }
        });
    };
    ModelsComponent.prototype.ngOnDestroy = function () {
        if (this.modelsSub) {
            this.modelsSub.unsubscribe();
        }
        if (this.currentMemberSub) {
            this.currentMemberSub.unsubscribe();
        }
    };
    ModelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-models',
            template: __webpack_require__(/*! ./models.component.html */ "./src/app/models/models.component.html"),
            styles: [__webpack_require__(/*! ./models.component.css */ "./src/app/models/models.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
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

module.exports = "a {\r\n    text-decoration: none;\r\n    color:white;\r\n}\r\na:hover,\r\na:active{\r\n    color:lightgray;\r\n}\r\n.navigation-items{\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.navigation-caption{\r\n    display: inline-block;\r\n    padding-left: 6px;\r\n}\r\n.logout{\r\n    cursor: pointer;\r\n}\r\n.navigation-items li\r\n{\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0NBQ2Y7QUFDRDs7SUFFSSxnQkFBZ0I7Q0FDbkI7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtDQUNiO0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFFRDs7SUFFSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbmF2L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuYTpob3ZlcixcclxuYTphY3RpdmV7XHJcbiAgICBjb2xvcjpsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWl0ZW1ze1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWNhcHRpb257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLmxvZ291dHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmlnYXRpb24taXRlbXMgbGlcclxue1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/header/header.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav/header/header.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n          \r\n  <div>\r\n      <button mat-icon-button (click)=\"onToggleSidebar()\">\r\n      <mat-icon>menu</mat-icon>\r\n  </button></div>\r\n  \r\n  <div><a routerLink=\"/\">LOGO</a></div>\r\n\r\n  <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs >\r\n      <ul fxLayout fxLayoutGap=\"10px\" class=\"navigation-items\">\r\n        <li *ngIf=\"isAuth\">Hi <a routerLink=\"/profile\"><u>{{ displayName }}</u></a>!</li>\r\n        <li *ngIf=\"!isAuth\"><a routerLink=\"/signup\">Signup</a></li>\r\n        <li *ngIf=\"!isAuth\"><a routerLink=\"/login\">Login</a></li>\r\n        <li><a routerLink=\"/models\">Models</a></li>\r\n        <li *ngIf=\"isAuth && isModel\"><a routerLink=\"/member/session\">Session</a></li>\r\n        <li *ngIf=\"isAuth\" class=\"logout\" (click)=\"onLogout()\"><a>Logout</a></li>\r\n    </ul>\r\n  </div>\r\n</mat-toolbar>"

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
                    _this.displayName = member.displayName;
                    _this.level = member.level;
                });
            }
        });
    };
    HeaderComponent.prototype.onToggleSidebar = function () {
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/sidebar/sidebar.component.html":
/*!****************************************************!*\
  !*** ./src/app/nav/sidebar/sidebar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n  <a mat-list-item  *ngIf=\"isAuth\" routerLink=\"/profile\">Hi {{ displayName}}</a>\r\n  <a mat-list-item  *ngIf=\"!isAuth\" routerLink=\"/signup\" (click)=\"onClose()\"><mat-icon>face</mat-icon><span class=\"navigation-caption\">Signup</span></a>\r\n  <a mat-list-item  *ngIf=\"!isAuth\" routerLink=\"/login\" (click)=\"onClose()\"><mat-icon>input</mat-icon><span class=\"navigation-caption\">Login</span></a>\r\n  <a mat-list-item  routerLink=\"/models\" (click)=\"onClose()\"><mat-icon>people</mat-icon><span class=\"navigation-caption\">Models</span></a>\r\n  <a mat-list-item  *ngIf=\"isAuth && isModel\" routerLink=\"/member/session\" (click)=\"onClose()\"><mat-icon>people</mat-icon><span class=\"navigation-caption\">Session</span></a>\r\n  <mat-list-item  *ngIf=\"isAuth\">\r\n    <button mat-icon-button  (click)=\"onLogout()\"><mat-icon>eject</mat-icon><span class=\"navigation-caption\">Logout</span></button>\r\n  </mat-list-item>\r\n</mat-nav-list>"

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
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
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



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService, db) {
        this.authService = authService;
        this.db = db;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isAuth = false;
        this.isModel = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authServiceChangedSub = this.authService.changed.subscribe(function (status) {
            _this.isAuth = status;
            if (_this.isAuth) {
                _this.memberChangeSub = _this.db.doc("members/" + localStorage.getItem('uid')).valueChanges()
                    .subscribe(function (member) {
                    _this.isModel = (member.isModel === true) ? true : false;
                    _this.displayName = member.displayName;
                    _this.level = member.level;
                });
            }
        });
    };
    SidebarComponent.prototype.onClose = function () {
        this.close.emit();
    };
    SidebarComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.authServiceChangedSub.unsubscribe();
        this.memberChangeSub.unsubscribe();
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
        __metadata("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
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

module.exports = ".welcome {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome\" fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"20px\" fxLayoutAlign=\"center center center\">\r\n  <section>\r\n    <h1>Alpha69 NG</h1>\r\n    <p>version {{version}}</p>\r\n  </section>\r\n\r\n</div>"

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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
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
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].version;
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
    },
    version: '0.20.2359'
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

module.exports = __webpack_require__(/*! C:\Users\jaxcph\code\alpha69-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map