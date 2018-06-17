webpackJsonp(["questions.module"],{

/***/ "./src/app/ffufm-feedback-dashboard-features/questions/questions.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "questions component\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_stores__ = __webpack_require__("./src/app/core/stores/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(route, projectStore, questionStore) {
        this.route = route;
        this.projectStore = projectStore;
        this.questionStore = questionStore;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (params) {
        });
    };
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'ffufm-feedback-dashboard-questions',
            template: __webpack_require__("./src/app/ffufm-feedback-dashboard-features/questions/questions.component.html"),
            styles: [__webpack_require__("./src/app/ffufm-feedback-dashboard-features/questions/questions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_stores__["d" /* ProjectStore */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_stores__["e" /* QuestionStore */]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/questions/questions.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsModule", function() { return QuestionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ffufm_feedback_dashboard_features_questions_questions_routing__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/questions/questions.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_questions_questions_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/questions/questions.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var QuestionsModule = /** @class */ (function () {
    function QuestionsModule() {
    }
    QuestionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__app_shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_ffufm_feedback_dashboard_features_questions_questions_routing__["a" /* QuestionsRouting */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_questions_questions_component__["a" /* QuestionsComponent */]
            ]
        })
    ], QuestionsModule);
    return QuestionsModule;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/questions/questions.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_questions_questions_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/questions/questions.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var questionsRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_questions_questions_component__["a" /* QuestionsComponent */]
    }
];
var QuestionsRouting = /** @class */ (function () {
    function QuestionsRouting() {
    }
    QuestionsRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(questionsRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
        })
    ], QuestionsRouting);
    return QuestionsRouting;
}());



/***/ })

});
//# sourceMappingURL=questions.module.chunk.js.map