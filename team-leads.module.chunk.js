webpackJsonp(["team-leads.module"],{

/***/ "./src/app/ffufm-feedback-dashboard-features/team-leads/team-leads.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/team-leads/team-leads.component.html":
/***/ (function(module, exports) {

module.exports = "team-leads component\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/team-leads/team-leads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamLeadsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamLeadsComponent = /** @class */ (function () {
    function TeamLeadsComponent() {
    }
    TeamLeadsComponent.prototype.ngOnInit = function () {
    };
    TeamLeadsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ffufm-feedback-dashboard-team-leads',
            template: __webpack_require__("./src/app/ffufm-feedback-dashboard-features/team-leads/team-leads.component.html"),
            styles: [__webpack_require__("./src/app/ffufm-feedback-dashboard-features/team-leads/team-leads.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamLeadsComponent);
    return TeamLeadsComponent;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/team-leads/team-leads.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamLeadsModule", function() { return TeamLeadsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_team_leads_team_leads_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/team-leads/team-leads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_team_leads_team_leads_routing__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/team-leads/team-leads.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TeamLeadsModule = /** @class */ (function () {
    function TeamLeadsModule() {
    }
    TeamLeadsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_team_leads_team_leads_routing__["a" /* TeamLeadsRouting */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_team_leads_team_leads_component__["a" /* TeamLeadsComponent */]
            ]
        })
    ], TeamLeadsModule);
    return TeamLeadsModule;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/team-leads/team-leads.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamLeadsRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_team_leads_team_leads_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/team-leads/team-leads.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var teamLeadsRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_team_leads_team_leads_component__["a" /* TeamLeadsComponent */]
    }
];
var TeamLeadsRouting = /** @class */ (function () {
    function TeamLeadsRouting() {
    }
    TeamLeadsRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(teamLeadsRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
        })
    ], TeamLeadsRouting);
    return TeamLeadsRouting;
}());



/***/ })

});
//# sourceMappingURL=team-leads.module.chunk.js.map