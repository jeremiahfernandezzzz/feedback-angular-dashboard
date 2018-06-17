webpackJsonp(["projects-by-team.module"],{

/***/ "./src/app/ffufm-feedback-dashboard-features/projects-by-team/projects-by-team.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    text-align: center;\n}\n\n.results {\n  height: 50vh;\n  width: 70vw;\n}\n\n.chart-container {\n    height: 80vh;\n    width: 45vw\n}\n\n.chip > label {\n  background-color: #7f7e80;\n  border-radius: 5px;\n  padding: 5px;\n  color: #ffffff;\n}\n\n.chip > label > span {\n  color: white;\n}\n\n.chip > label:hover{\n  background-color: #979194;\n}\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/projects-by-team/projects-by-team.component.html":
/***/ (function(module, exports) {

module.exports = "<!--projects by team component-->\n\n<div>\n  <div class=\"btn-group\">\n    <button class=\"btn btn-success\" (click)=\"view = 'questions'; selectedProject = null; noData=''\">view by question\n    </button>\n    <button class=\"btn btn-primary\" (click)=\"view = 'projects'; projectsByAnswer = null; noData=''\">view by project\n    </button>\n  </div>\n  <h4>Team</h4>\n  <h3>{{ team.displayName }}</h3>\n  <br/>\n  <div class=\"pre-scrollable\">\n    <div *ngIf=\"view == 'questions'\">\n      <div *ngFor=\"let question of questions\" style=\"display: inline\">\n        <!--<button class=\"btn btn-secondary\" (click)=\"loadProjectsByAnswer(question.id)\">{{ question.content }} <{{-->\n          <!--question.id }}>-->\n        <!--</button>-->\n\n        <span class=\"chip\" (click)=\"loadProjectsByAnswer(question.id)\">\n          <label>{{ question.content }} <{{ question.id }}>\n          </label>\n        </span>\n      </div>\n    </div>\n    <div *ngIf=\"view == 'projects'\">\n      <div *ngFor=\"let project of projectsByUser\"  style=\"display: inline\">\n        <!--<a routerLink='/projects/{{ project.id }}/'>-->\n        <!--<button class=\"btn btn-secondary\" (click)=\"selectedProject = project; loadAnswersByProject()\">{{ project.name }}-->\n          <!--<{{-->\n          <!--project.id }}>-->\n        <!--</button>-->\n\n        <span class=\"chip\" (click)=\"selectedProject = project; loadAnswersByProject()\">\n          <label>{{ project.name }} <{{ project.id }}>\n          </label>\n        </span>\n        <!--</a>-->\n      </div>\n    </div>\n  </div>\n  <div>\n    <div *ngIf=\"view == 'questions'\">\n      <h3 [innerHTML]=\"noData\"></h3>\n      <div class=\"results container\">\n\n        <ngx-charts-bar-vertical [results]=\"projectsByAnswer\"\n                                 [legend]=\"showLegend\"></ngx-charts-bar-vertical>\n      </div>\n    </div>\n    <div *ngIf=\"view == 'projects'\">\n      <h3 [innerHTML]=\"noData\"></h3>\n      <div *ngIf=\"selectedProject == null\">\n        <h4> Total billable days: {{ totalBillableDays }} </h4>\n        <div class=\" results container\">\n          <ngx-charts-pie-chart [results]=\"projectsByUser\"\n                                [legend]=\"showLegend\"></ngx-charts-pie-chart>\n        </div>\n      </div>\n      <div *ngIf=\"selectedProject != null\">\n        <div class=\"results container\">\n          <ngx-charts-bar-vertical [results]=\"answersByProject\"\n                                   [legend]=\"showLegend\"></ngx-charts-bar-vertical>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/projects-by-team/projects-by-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsByTeamComponent; });
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




var ProjectsByTeamComponent = /** @class */ (function () {
    function ProjectsByTeamComponent(route, projectStore, answerStore, userStore, questionStore) {
        this.route = route;
        this.projectStore = projectStore;
        this.answerStore = answerStore;
        this.userStore = userStore;
        this.questionStore = questionStore;
        this.showLegend = 'true';
        this.totalBillableDays = 0;
        this.view = 'questions';
    }
    ProjectsByTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectsByQuestion = [];
            _this.teamId = params.teamId;
            _this.questionId = params.questionId;
            _this.getProjectsByQuestion();
            _this.getTeam();
        });
    };
    ProjectsByTeamComponent.prototype.loadProjectInfo = function () {
        var _this = this;
        this.projectStore.getProjects()
            .subscribe(function (projects) {
            projects.forEach(function (project) {
                if (project.id === _this.selectedProject.id) {
                    _this.projectInfo = project;
                }
            });
        });
    };
    ProjectsByTeamComponent.prototype.loadProjectsByAnswer = function (questionId) {
        var _this = this;
        this.questions.forEach(function (question) {
            if (question.id === questionId) {
                _this.noData = question.content + '<br/><br/>no answers available.<br/><br/>submit an answer <a href="http://google.com">here</a>';
            }
        });
        this.projectsByAnswer = [];
        this.arrayOfProjectsByQuestion.forEach(function (answer) {
            if (answer.question_id === questionId) {
                _this.questions.forEach(function (question) {
                    if (question.id === questionId) {
                        _this.noData = question.content;
                    }
                });
                _this.projectsByAnswer = answer.answer;
            }
        });
    };
    ProjectsByTeamComponent.prototype.loadAnswersByProject = function () {
        var _this = this;
        this.projects.forEach(function (project) {
            if (project.id === _this.selectedProject.id) {
                _this.noData = project.name + '<br/><br/>no answers available.<br/><br/>submit an answer <a href="http://google.com">here</a>';
            }
        });
        this.answersByProject = [];
        this.answers.forEach(function (answer) {
            if (_this.selectedProject.id == answer.project_id.toString()) {
                _this.questions.forEach(function (question) {
                    if (question.id == answer.question_id.toString()) {
                        _this.noData = _this.selectedProject.name;
                        _this.answersByProject.push({
                            'name': question.content,
                            'value': answer.content
                        });
                    }
                });
            }
        });
    };
    ProjectsByTeamComponent.prototype.getProjectsByUser = function () {
        var _this = this;
        this.projectsByUser = [];
        this.projectStore.getProjects()
            .subscribe(function (projects) {
            _this.projects = projects;
        });
        this.projects.forEach(function (project) {
            if (project.teamLeadId == _this.teamId) {
                project['value'] = Number(project.billableDays);
                _this.totalBillableDays += project['value'];
                _this.projectsByUser.push(project);
            }
        });
    };
    ProjectsByTeamComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questions = [];
        this.questionStore.getQuestions()
            .subscribe(function (questions) {
            questions.forEach(function (question) {
                if (question.role_id == 0 || question.role_id == 1) {
                    _this.questions.push(question);
                }
            });
        });
    };
    ProjectsByTeamComponent.prototype.getProjectsByQuestion = function () {
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
                                name: project.name,
                                value: Number(answer.content),
                                question_id: answer.question_id,
                                project_id: project.id,
                                team_id: _this.teamId
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
    ProjectsByTeamComponent.prototype.getAnswers = function () {
        var _this = this;
        this.answerStore.getAnswers()
            .subscribe(function (answers) {
            _this.answers = answers;
        });
    };
    ProjectsByTeamComponent.prototype.getTeam = function () {
        var _this = this;
        this.userStore.getUsers()
            .subscribe(function (users) {
            users.forEach(function (user) {
                if (user.id === _this.teamId) {
                    _this.team = user;
                }
            });
        });
    };
    ProjectsByTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'ffufm-feedback-dashboard-projects-by-team',
            template: __webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects-by-team/projects-by-team.component.html"),
            styles: [__webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects-by-team/projects-by-team.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["d" /* ProjectStore */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["a" /* AnswerStore */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["f" /* UserStore */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["e" /* QuestionStore */]])
    ], ProjectsByTeamComponent);
    return ProjectsByTeamComponent;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/projects-by-team/projects-by-team.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsByTeamModule", function() { return ProjectsByTeamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_projects_by_team_projects_by_team_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects-by-team/projects-by-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_projects_by_team_projects_by_team_routing__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects-by-team/projects-by-team.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProjectsByTeamModule = /** @class */ (function () {
    function ProjectsByTeamModule() {
    }
    ProjectsByTeamModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_projects_by_team_projects_by_team_routing__["a" /* ProjectsByTeamRouting */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_projects_by_team_projects_by_team_component__["a" /* ProjectsByTeamComponent */]
            ]
        })
    ], ProjectsByTeamModule);
    return ProjectsByTeamModule;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/projects-by-team/projects-by-team.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsByTeamRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_projects_by_team_projects_by_team_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects-by-team/projects-by-team.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var projectsByTeamRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_projects_by_team_projects_by_team_component__["a" /* ProjectsByTeamComponent */]
    }
];
var ProjectsByTeamRouting = /** @class */ (function () {
    function ProjectsByTeamRouting() {
    }
    ProjectsByTeamRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(projectsByTeamRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
        })
    ], ProjectsByTeamRouting);
    return ProjectsByTeamRouting;
}());



/***/ })

});
//# sourceMappingURL=projects-by-team.module.chunk.js.map