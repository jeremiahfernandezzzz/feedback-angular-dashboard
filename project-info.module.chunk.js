webpackJsonp(["project-info.module"],{

/***/ "./src/app/ffufm-feedback-dashboard-features/project-info/project-info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/project-info/project-info.component.html":
/***/ (function(module, exports) {

module.exports = "project-info component\n<div>\n  <pre>{{ project | json }}</pre>\n  <!--<hr/>-->\n  <!--<div *ngFor=\"let question of questions\">-->\n  <!--<h4>{{ question.content }}</h4>-->\n  <!--<div *ngFor=\"let answer of answers\">-->\n  <!--<div *ngIf=\"answer.question_id.toString() == question.id\">-->\n  <!--{{ answer.content }}-->\n  <!--</div>-->\n  <!--</div>-->\n  <!--</div>-->\n  <!--<pre>{{ answers | json }}</pre>-->\n</div>\n\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/project-info/project-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_stores__ = __webpack_require__("./src/app/core/stores/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectInfoComponent = /** @class */ (function () {
    function ProjectInfoComponent(route, projectStore, answerStore, questionStore) {
        this.route = route;
        this.projectStore = projectStore;
        this.answerStore = answerStore;
        this.questionStore = questionStore;
    }
    ProjectInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = params.projectId;
            _this.getProject();
            _this.getAnswers();
            _this.getQuestions();
        });
    };
    ProjectInfoComponent.prototype.getProject = function () {
        var _this = this;
        this.projectStore.getProjects()
            .subscribe(function (projects) {
            projects.forEach(function (project) {
                if (project.id === _this.projectId) {
                    _this.project = project;
                }
            });
        });
    };
    ProjectInfoComponent.prototype.getAnswers = function () {
        var _this = this;
        this.answers = [];
        this.answerStore.getAnswers()
            .subscribe(function (answers) {
            answers.forEach(function (answer) {
                if (answer.project_id.toString() === _this.projectId) {
                    _this.answers.push(answer);
                }
            });
        });
    };
    ProjectInfoComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionStore.getQuestions()
            .subscribe(function (questions) {
            _this.questions = questions;
        });
    };
    ProjectInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'ffufm-feedback-dashboard-project-info',
            template: __webpack_require__("./src/app/ffufm-feedback-dashboard-features/project-info/project-info.component.html"),
            styles: [__webpack_require__("./src/app/ffufm-feedback-dashboard-features/project-info/project-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["d" /* ProjectStore */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["a" /* AnswerStore */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["e" /* QuestionStore */]])
    ], ProjectInfoComponent);
    return ProjectInfoComponent;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/project-info/project-info.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfoModule", function() { return ProjectInfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_project_info_project_info_routing__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/project-info/project-info.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_ffufm_feedback_dashboard_features_project_info_project_info_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/project-info/project-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProjectInfoModule = /** @class */ (function () {
    function ProjectInfoModule() {
    }
    ProjectInfoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_project_info_project_info_routing__["a" /* ProjectInfoRouting */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_ffufm_feedback_dashboard_features_project_info_project_info_component__["a" /* ProjectInfoComponent */]
            ]
        })
    ], ProjectInfoModule);
    return ProjectInfoModule;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/project-info/project-info.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectInfoRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_project_info_project_info_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/project-info/project-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var projectInfoRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_project_info_project_info_component__["a" /* ProjectInfoComponent */]
    }
];
var ProjectInfoRouting = /** @class */ (function () {
    function ProjectInfoRouting() {
    }
    ProjectInfoRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(projectInfoRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
        })
    ], ProjectInfoRouting);
    return ProjectInfoRouting;
}());



/***/ })

});
//# sourceMappingURL=project-info.module.chunk.js.map