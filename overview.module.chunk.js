webpackJsonp(["overview.module"],{

/***/ "./src/app/ffufm-feedback-dashboard-features/overview/overview.component.css":
/***/ (function(module, exports) {

module.exports = ".chip > label {\n    background-color: #7f7e80;\n    border-radius: 5px;\n    padding: 5px;\n    color: #ffffff;\n}\n\n.chip {\n    display: inline;\n}\n\n.chip > label > span {\n    color: white;\n}\n\n.selected-user-container {\n    height: 50px;\n}"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<!--overview component-->\n\n<div class=\"container\" style=\"text-align: center\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h1> PROJECT MANAGER </h1>\n      <div class=\"form-inline\">\n        start date: <input type=\"date\" class=\"form-control\" [(ngModel)]=\"projectManagerStartDate\"\n                           (input)=\"loadProjectManagerChart()\"><span style=\"visibility: hidden\">space</span>\n        end date: <input type=\"date\" class=\"form-control\" [(ngModel)]=\"projectManagerEndDate\"\n                         (input)=\"loadProjectManagerChart()\">\n        <div class=\"btn-group\" dropdown>\n          <button class=\"btn btn-primary\" (click)=\"toggleAllProjectManagers()\">toggle all</button>\n          <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"><span class=\"caret\"></span>\n          </button>\n          <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n            <ng-container *ngFor=\"let pm of projectManagers\">\n              <li role=\"menuitem\">\n\n                <ng-container *ngIf=\"pm.selected === false\">\n                  <a class=\"dropdown-item\" (click)=\"toggleProjectManager(pm.id)\">{{\n                    pm.displayName }}</a>\n                </ng-container>\n\n              </li>\n            </ng-container>\n          </ul>\n        </div>\n      </div>\n      <div class=\"container-fluid\">\n        <ngx-charts-bar-vertical [results]=\"projectManagersAccumulatedAnswersByQuestion\"\n                                 [legend]=\"showLegend\"></ngx-charts-bar-vertical>\n      </div>\n      <span *ngFor=\"let pm of projectManagers\">\n        <ng-container *ngIf=\"pm.selected === true\">\n          <div class=\"chip\">\n            <label>{{ pm.displayName }}\n              <span (click)=\"toggleProjectManager(pm.id)\">✖</span>\n            </label>\n          </div>\n        </ng-container>\n      </span>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <!-- TL -->\n      <h1> TEAM LEAD </h1>\n      <div class=\"form-inline\">\n\n        start date: <input type=\"date\" class=\"form-control\" [(ngModel)]=\"teamStartDate\"\n                           (input)=\"loadTeamChart()\"><span style=\"visibility: hidden\">space</span>\n        end date: <input type=\"date\" class=\"form-control\" [(ngModel)]=\"teamEndDate\"\n                         (input)=\"loadTeamChart()\">\n        <div class=\"btn-group\" dropdown>\n          <button class=\"btn btn-primary\" (click)=\"toggleAllTeams()\">toggle all</button>\n          <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"><span class=\"caret\"></span>\n          </button>\n          <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n            <ng-container *ngFor=\"let team of teams\">\n              <li role=\"menuitem\">\n\n                <ng-container *ngIf=\"team.selected === false\">\n                  <a class=\"dropdown-item\" (click)=\"toggleTeam(team.id)\">{{\n                    team.displayName }}</a>\n                </ng-container>\n\n              </li>\n            </ng-container>\n          </ul>\n        </div>\n      </div>\n      <div class=\"container-fluid\">\n        <ngx-charts-bar-vertical [results]=\"teamsAccumulatedAnswersByQuestion\"\n                                 [legend]=\"showLegend\"></ngx-charts-bar-vertical>\n      </div>\n      <span *ngFor=\"let team of teams\">\n        <ng-container *ngIf=\"team.selected === true\">\n          <div class=\"chip\">\n          <label>{{ team.displayName }}\n            <span (click)=\"toggleTeam(team.id)\">✖</span>\n          </label>\n          </div>\n        </ng-container>\n      </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_services__ = __webpack_require__("./src/app/core/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_stores__ = __webpack_require__("./src/app/core/stores/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(route, projectStore, answerStore, userStore, questionStore, answerService) {
        this.route = route;
        this.projectStore = projectStore;
        this.answerStore = answerStore;
        this.userStore = userStore;
        this.questionStore = questionStore;
        this.answerService = answerService;
        this.projectManagerStartDate = __WEBPACK_IMPORTED_MODULE_4_moment__(Date.now()).format('YYYY-MM-DD');
        this.projectManagerEndDate = __WEBPACK_IMPORTED_MODULE_4_moment__(Date.now()).format('YYYY-MM-DD');
        this.projectManagersAccumulatedAnswersByQuestion = [];
        this.projectManagersAnswersByQuestionAndProject = {};
        this.showLegend = 'true';
        this.teamStartDate = __WEBPACK_IMPORTED_MODULE_4_moment__(Date.now()).format('YYYY-MM-DD');
        this.teamEndDate = __WEBPACK_IMPORTED_MODULE_4_moment__(Date.now()).format('YYYY-MM-DD');
        this.teamsAnswersByQuestionAndProject = {};
        this.teamsAccumulatedAnswersByQuestion = [];
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (params) {
        });
        this.getUsers();
        this.getProjects();
        this.getQuestions();
        this.loadProjectManagers();
        this.loadProjectManagerChart();
        this.loadTeams();
        this.loadTeamChart();
    };
    OverviewComponent.prototype.convertWeekToTeamStartDate = function () {
        this.teamStartDate = __WEBPACK_IMPORTED_MODULE_4_moment__().isoWeek(this.teamStartWeek).format('YYYY-MM-DD');
    };
    OverviewComponent.prototype.convertWeekToTeamEndDate = function () {
        this.teamEndDate = __WEBPACK_IMPORTED_MODULE_4_moment__().isoWeek(this.teamEndWeek).format('YYYY-MM-DD');
    };
    OverviewComponent.prototype.toggleTeam = function (userId) {
        this.teams.forEach(function (team) {
            if (team.id === userId) {
                if (team.selected === true) {
                    team.selected = false;
                }
                else {
                    team.selected = true;
                }
            }
        });
        this.loadTeamChart();
    };
    OverviewComponent.prototype.toggleAllTeams = function () {
        this.teams.forEach(function (team) {
            if (team.selected === true) {
                team.selected = false;
            }
            else {
                team.selected = true;
            }
        });
        this.loadProjectManagerChart();
    };
    OverviewComponent.prototype.toggleProjectManager = function (userId) {
        this.projectManagers.forEach(function (pm) {
            if (pm.id === userId) {
                if (pm.selected === true) {
                    pm.selected = false;
                }
                else {
                    pm.selected = true;
                }
            }
        });
        this.loadProjectManagerChart();
    };
    OverviewComponent.prototype.toggleAllProjectManagers = function () {
        this.projectManagers.forEach(function (pm) {
            if (pm.selected === true) {
                pm.selected = false;
            }
            else {
                pm.selected = true;
            }
        });
        this.loadProjectManagerChart();
    };
    OverviewComponent.prototype.loadTeamChart = function () {
        this.getProjectsByTeam();
        this.getAnswersByTeam();
        this.teamsSortAnswersByQuestionAndProject();
        this.loadTeamsAccumulatedAnswers();
        console.log(this.teamsAccumulatedAnswersByQuestion);
    };
    OverviewComponent.prototype.loadProjectManagerChart = function () {
        this.getProjectsByProjectManager();
        this.getAnswersByProjectManager();
        this.projectManagersSortAnswersByQuestionAndProject();
        this.loadProjectManagersAccumulatedAnswers();
        console.log(this.projectManagersAnswersByQuestionAndProject);
        console.log(this.projectManagersAccumulatedAnswersByQuestion);
    };
    OverviewComponent.prototype.teamsSortAnswersByQuestionAndProject = function () {
        this.teamsAnswersByQuestionAndProject = __WEBPACK_IMPORTED_MODULE_5_lodash__["mapValues"](__WEBPACK_IMPORTED_MODULE_5_lodash__["groupBy"](this.answersByTeam, 'question_id'), function (clist) { return clist.map(function (question) { return __WEBPACK_IMPORTED_MODULE_5_lodash__["omit"](question, 'question_id'); }); });
    };
    OverviewComponent.prototype.projectManagersSortAnswersByQuestionAndProject = function () {
        this.projectManagersAnswersByQuestionAndProject = __WEBPACK_IMPORTED_MODULE_5_lodash__["mapValues"](__WEBPACK_IMPORTED_MODULE_5_lodash__["groupBy"](this.answersByProjectManager, 'question_id'), function (clist) { return clist.map(function (question) { return __WEBPACK_IMPORTED_MODULE_5_lodash__["omit"](question, 'question_id'); }); });
    };
    OverviewComponent.prototype.loadTeamsAccumulatedAnswers = function () {
        var _this = this;
        this.teamsAccumulatedAnswersByQuestion = [];
        Object.keys(this.teamsAnswersByQuestionAndProject).forEach(function (key) {
            var accumulatedAnswer = 0;
            _this.teamsAnswersByQuestionAndProject[key].forEach(function (answer) {
                accumulatedAnswer += Number(answer.content);
            });
            _this.questions.forEach(function (question) {
                if (question.role_id == 0 || question.role_id == 1) {
                    if (question.id === key) {
                        _this.teamsAccumulatedAnswersByQuestion.push({
                            name: question.content,
                            value: accumulatedAnswer
                        });
                    }
                }
            });
        });
    };
    OverviewComponent.prototype.loadProjectManagersAccumulatedAnswers = function () {
        var _this = this;
        this.projectManagersAccumulatedAnswersByQuestion = [];
        Object.keys(this.projectManagersAnswersByQuestionAndProject).forEach(function (key) {
            var accumulatedAnswer = 0;
            var divider = 0;
            _this.projectManagersAnswersByQuestionAndProject[key].forEach(function (answer) {
                accumulatedAnswer += Number(answer.content);
                divider += 1;
            });
            _this.questions.forEach(function (question) {
                if (question.role_id == 0 || question.role_id == 2) {
                    if (question.id === key) {
                        _this.projectManagersAccumulatedAnswersByQuestion.push({
                            name: question.content,
                            value: accumulatedAnswer / divider
                        });
                    }
                }
            });
        });
    };
    OverviewComponent.prototype.getProjectsByTeam = function () {
        var _this = this;
        this.projectsByTeam = [];
        this.projects.forEach(function (project) {
            _this.teams.forEach(function (team) {
                project.billingDate = __WEBPACK_IMPORTED_MODULE_4_moment__(project.billingDate);
                if (team.selected === true &&
                    project.teamLeadId === team.id
                    &&
                        project.billingDate <= __WEBPACK_IMPORTED_MODULE_4_moment__(_this.teamEndDate) &&
                    project.billingDate >= __WEBPACK_IMPORTED_MODULE_4_moment__(_this.teamStartDate)) {
                    _this.projectsByTeam.push(project);
                }
            });
        });
    };
    OverviewComponent.prototype.getProjectsByProjectManager = function () {
        var _this = this;
        this.projectsByProjectManager = [];
        this.projects.forEach(function (project) {
            _this.projectManagers.forEach(function (pm) {
                project.billingDate = __WEBPACK_IMPORTED_MODULE_4_moment__(project.billingDate);
                if (pm.selected === true &&
                    project.projectManagerId === pm.id &&
                    project.billingDate <= __WEBPACK_IMPORTED_MODULE_4_moment__(_this.projectManagerEndDate) &&
                    project.billingDate >= __WEBPACK_IMPORTED_MODULE_4_moment__(_this.projectManagerStartDate)) {
                    _this.projectsByProjectManager.push(project);
                }
            });
        });
    };
    OverviewComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectStore.getProjects()
            .subscribe(function (projects) {
            _this.projects = projects;
        });
    };
    OverviewComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questions = [];
        this.questionStore.getQuestions()
            .subscribe(function (questions) {
            questions.forEach(function (question) {
                _this.questions.push(question);
            });
        });
    };
    OverviewComponent.prototype.getAnswersByTeam = function () {
        var _this = this;
        this.answerStore.getAnswers()
            .subscribe(function (answers) {
            _this.answersByTeam = answers.filter(function (answer) { return __WEBPACK_IMPORTED_MODULE_5_lodash__["findIndex"](_this.projectsByTeam, { id: answer.project_id + '' }) !== -1; });
        });
    };
    OverviewComponent.prototype.getAnswersByProjectManager = function () {
        var _this = this;
        this.answerStore.getAnswers()
            .subscribe(function (answers) {
            _this.answersByProjectManager = answers.filter(function (answer) { return __WEBPACK_IMPORTED_MODULE_5_lodash__["findIndex"](_this.projectsByProjectManager, { id: answer.project_id + '' }) !== -1; });
        });
    };
    OverviewComponent.prototype.loadTeams = function () {
        var _this = this;
        this.teams = this.projects.reduce(function (acc, project) {
            var teamLeadId = project.teamLeadId;
            if (__WEBPACK_IMPORTED_MODULE_5_lodash__["findIndex"](acc, { id: teamLeadId }) === -1 && teamLeadId !== null) {
                var user = __WEBPACK_IMPORTED_MODULE_5_lodash__["find"](_this.users, { id: teamLeadId });
                user['selected'] = true;
                acc.push(user);
            }
            return acc;
        }, []);
    };
    OverviewComponent.prototype.loadProjectManagers = function () {
        var _this = this;
        this.projectManagers = this.projects.reduce(function (acc, project) {
            var projectManagerId = project.projectManagerId;
            if (__WEBPACK_IMPORTED_MODULE_5_lodash__["findIndex"](acc, { id: projectManagerId }) === -1 && projectManagerId !== null) {
                var user = __WEBPACK_IMPORTED_MODULE_5_lodash__["find"](_this.users, { id: projectManagerId });
                user['selected'] = true;
                acc.push(user);
            }
            return acc;
        }, []);
    };
    OverviewComponent.prototype.getUsers = function () {
        var _this = this;
        this.userStore.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    OverviewComponent.prototype.generateAnswer = function () {
        var answer = {
            'content': this.answer_content,
            'project_id': this.answer_project_id,
            'question_id': this.answer_question_id,
            'user_id': 1
        };
        alert(this.answerService.postAnswer(answer) + 'sent');
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'ffufm-feedback-dashboard-overview',
            template: __webpack_require__("./src/app/ffufm-feedback-dashboard-features/overview/overview.component.html"),
            styles: [__webpack_require__("./src/app/ffufm-feedback-dashboard-features/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_stores__["d" /* ProjectStore */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_stores__["a" /* AnswerStore */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_stores__["f" /* UserStore */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_stores__["e" /* QuestionStore */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_services__["a" /* AnswerService */]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/overview/overview.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewModule", function() { return OverviewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ffufm_feedback_dashboard_features_overview_overview_routing__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/overview/overview.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_overview_overview_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OverviewModule = /** @class */ (function () {
    function OverviewModule() {
    }
    OverviewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__app_shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_ffufm_feedback_dashboard_features_overview_overview_routing__["a" /* OverviewRouting */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_overview_overview_component__["a" /* OverviewComponent */]
            ]
        })
    ], OverviewModule);
    return OverviewModule;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/overview/overview.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_ffufm_feedback_dashboard_features_overview_overview_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var overviewRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__app_ffufm_feedback_dashboard_features_overview_overview_component__["a" /* OverviewComponent */]
    }
];
var OverviewRouting = /** @class */ (function () {
    function OverviewRouting() {
    }
    OverviewRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(overviewRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
        })
    ], OverviewRouting);
    return OverviewRouting;
}());



/***/ })

});
//# sourceMappingURL=overview.module.chunk.js.map