webpackJsonp(["projects-by-question.module"],{

/***/ "./src/app/ffufm-feedback-dashboard-features/projects-by-question/projects-by-question.component.css":
/***/ (function(module, exports) {

module.exports = ".chart-container {\n    height: 30vh;\n\n}"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/projects-by-question/projects-by-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let project of arrayOfProjectsByQuestion\">\n  {{ project | json }}\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/projects-by-question/projects-by-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsByQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_stores__ = __webpack_require__("./src/app/core/stores/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsByQuestionComponent = /** @class */ (function () {
    function ProjectsByQuestionComponent(route, projectStore, answerStore, questionStore) {
        this.route = route;
        this.projectStore = projectStore;
        this.answerStore = answerStore;
        this.questionStore = questionStore;
    }
    ProjectsByQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectsByQuestion = [];
            _this.teamId = params.teamId;
            _this.questionId = params.questionId;
            _this.getProjectsByQuestion();
        });
    };
    ProjectsByQuestionComponent.prototype.getProjectsByQuestion = function () {
        var _this = this;
        this.getAnswers();
        this.getQuestions();
        this.getProjectsByUser();
        this.answersByUser = [];
        this.answers.forEach(function (answer) {
            _this.projectsByUser.forEach(function (project) {
                _this.questions.forEach(function (question) {
                    if (question.id == answer.question_id.toString()) {
                        if (answer.project_id.toString() == project.id) {
                            _this.answersByUser.push({
                                name: project.name + ' <' + project.id + '>',
                                value: Number(answer.content),
                                question_id: answer.question_id,
                                project_id: project.id
                            });
                        }
                    }
                });
            });
        });
        this.projectsByQuestion = __WEBPACK_IMPORTED_MODULE_3_lodash__["mapValues"](__WEBPACK_IMPORTED_MODULE_3_lodash__["groupBy"](this.answersByUser, 'question_id'), function (clist) { return clist.map(function (answer) { return __WEBPACK_IMPORTED_MODULE_3_lodash__["omit"](answer, 'question_id'); }); });
        this.arrayOfProjectsByQuestion = [];
        Object.entries(this.projectsByQuestion).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            _this.arrayOfProjectsByQuestion.push({ 'question_id': key, 'answer': value });
        });
    };
    ProjectsByQuestionComponent.prototype.getProjectsByUser = function () {
        var _this = this;
        this.projectsByUser = [];
        this.projectStore.getProjects()
            .subscribe(function (projects) {
            _this.projects = projects;
        });
        this.projects.forEach(function (project) {
            if (project.teamLeadId == _this.teamId) {
                project['value'] = Number(project.billableDays);
                _this.projectsByUser.push(project);
            }
        });
    };
    ProjectsByQuestionComponent.prototype.getAnswers = function () {
        var _this = this;
        this.answerStore.getAnswers()
            .subscribe(function (answers) {
            _this.answers = answers;
        });
    };
    ProjectsByQuestionComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionStore.getQuestions()
            .subscribe(function (questions) {
            _this.questions = questions;
        });
    };
    ProjectsByQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'ffufm-feedback-dashboard-projects-by-question',
            template: __webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects-by-question/projects-by-question.component.html"),
            styles: [__webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects-by-question/projects-by-question.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["d" /* ProjectStore */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["a" /* AnswerStore */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["e" /* QuestionStore */]])
    ], ProjectsByQuestionComponent);
    return ProjectsByQuestionComponent;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/projects-by-question/projects-by-question.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsByQuestionModule", function() { return ProjectsByQuestionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_projects_by_question_projects_by_question_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects-by-question/projects-by-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_projects_by_question_projects_by_question_routing__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects-by-question/projects-by-question.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProjectsByQuestionModule = /** @class */ (function () {
    function ProjectsByQuestionModule() {
    }
    ProjectsByQuestionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_projects_by_question_projects_by_question_routing__["a" /* ProjectsByQuestionRouting */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_projects_by_question_projects_by_question_component__["a" /* ProjectsByQuestionComponent */]
            ]
        })
    ], ProjectsByQuestionModule);
    return ProjectsByQuestionModule;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/projects-by-question/projects-by-question.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsByQuestionRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_projects_by_question_projects_by_question_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects-by-question/projects-by-question.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var projectsByQuestionRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_projects_by_question_projects_by_question_component__["a" /* ProjectsByQuestionComponent */]
    }
];
var ProjectsByQuestionRouting = /** @class */ (function () {
    function ProjectsByQuestionRouting() {
    }
    ProjectsByQuestionRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(projectsByQuestionRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
        })
    ], ProjectsByQuestionRouting);
    return ProjectsByQuestionRouting;
}());



/***/ })

});
//# sourceMappingURL=projects-by-question.module.chunk.js.map