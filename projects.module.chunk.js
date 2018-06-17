webpackJsonp(["projects.module"],{

/***/ "./src/app/ffufm-feedback-dashboard-features/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = ".chart-container {\n    height: 30vh;\n}\n\n.results-container {\n    max-height: 80vh;\n}\n\nbutton {\n    margin: 0 auto;\n    display: block;\n}\n\n.results .right-panel {\n    display: inline-block;\n    width: 69%;\n}\n\n.results .left-panel {\n    display: inline-block;\n    width: 30%;\n}\n\n.chip > label {\n  background-color: #7f7e80;\n  border-radius: 5px;\n  padding: 5px;\n  color: #ffffff;\n}\n\n.chip > label > span {\n  color: white;\n}\n\n.chip > label:hover{\n  background-color: #979194;\n}\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<!--projects works!-->\n\n<div class=\"results container\">\n  <div class=\"left-panel\">\n    number of projects to show: <input type=\"text\" class=\"form-control\" [(ngModel)]=\"count\"\n                                       (input)=\"reloadProjects()\">\n    billing date earlier than: <input type=\"date\" class=\"form-control\" [(ngModel)]=\"startDate\"\n                                      (input)=\"reloadProjects()\">\n    project name contains: <input class=\"form-control\" [(ngModel)]=\"queryProjectName\" (input)=\"reloadProjects()\">\n    description contains: <input class=\"form-control\" [(ngModel)]=\"queryProjectDescription\"\n                                 (input)=\"reloadProjects()\">\n    team name contains: <input class=\"form-control\" [(ngModel)]=\"queryProjectTeamLeadName\" (input)=\"reloadProjects()\">\n    project manager name contains: <input class=\"form-control\" [(ngModel)]=\"queryProjectProjectManagerName\"\n                                          (input)=\"reloadProjects()\">\n  </div>\n\n  <div class=\"right-panel pre-scrollable\" style=\"text-align: center\">\n    <div *ngFor=\"let project of sortedProjects\">\n      <!--<button (click)=\"dumpProject(project)\" class=\"btn\">{{ project.name }} <{{ project.id }}></button>-->\n\n      <span class=\"chip\" (click)=\"dumpProject(project)\">\n          <label>{{ project.name }} <{{ project.id }}>\n          </label>\n        </span>\n    </div>\n  </div>\n  <br/>\n  <br/>\n  <br/>\n  <ng-container *ngIf=\"selectedProject !== null\">\n  <pre>\n      Name: {{ selectedProject.name }} | ID: {{ selectedProject.id }}\n      Description: {{ selectedProject.description }}\n      Billing Date: {{ selectedProject.billingDate }}\n      Billable Days: {{ selectedProject.billableDays }}\n      Project Manager: {{ selectedProject.$$projectManagerName }}\n      Team Lead: {{ selectedProject.$$teamLeadName }}\n  </pre>\n  </ng-container>\n\n</div>\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_stores__ = __webpack_require__("./src/app/core/stores/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = /** @class */ (function () {
    // sortedProjects: any[];
    // projects: any[];
    // sortedProjects: any[];
    function ProjectsComponent(projectStore, userStore) {
        this.projectStore = projectStore;
        this.userStore = userStore;
        this.count = '';
        this.startDate = __WEBPACK_IMPORTED_MODULE_3_moment__(Date.now()).format('YYYY-MM-DD');
        this.queryProjectName = '';
        this.queryProjectDescription = '';
        this.queryProjectTeamLeadName = '';
        this.queryProjectProjectManagerName = '';
        this.selectedProject = null;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getUsers();
        this.reloadProjects();
    };
    ProjectsComponent.prototype.getUsers = function () {
        var _this = this;
        this.userStore.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectStore.getProjects()
            .subscribe(function (projects) {
            _this.projects = [];
            projects.forEach(function (project) {
                // project.name = project.name + ' <' + project.id + '>';
                _this.projects.push(project);
            });
        });
    };
    ProjectsComponent.prototype.reloadProjects = function () {
        var _this = this;
        this.sortedProjects = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](this.projects, function (project) {
            project.billingDate = __WEBPACK_IMPORTED_MODULE_3_moment__(project.billingDate);
            _this.users.forEach(function (user) {
                if (user.id === project.projectManagerId) {
                    project.$$projectManagerName = user.displayName;
                }
                if (user.id === project.teamLeadId) {
                    project.$$teamLeadName = user.displayName;
                }
            });
            return project;
        });
        this.sortedProjects = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](this.sortedProjects, function (project) { return project.billingDate; }, 'desc');
        this.sortedProjects = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.projects, function (project) {
            return (project.billingDate <= __WEBPACK_IMPORTED_MODULE_3_moment__(_this.startDate) &&
                (project.name.toLowerCase().includes(_this.queryProjectName.toLowerCase()) || project.id.toLowerCase().includes(_this.queryProjectName.toLowerCase())) &&
                (project.description.toLowerCase().includes(_this.queryProjectDescription.toLowerCase())) &&
                (project.$$teamLeadName.toLowerCase().includes(_this.queryProjectTeamLeadName.toLowerCase()) || project.teamLeadId === _this.queryProjectTeamLeadName) &&
                (project.$$projectManagerName.toLowerCase().includes(_this.queryProjectProjectManagerName.toLowerCase()) || project.projectManagerId === _this.queryProjectProjectManagerName));
        });
        this.sortedProjects = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](this.sortedProjects, function (project) { return project.billingDate; }).reverse();
        if (this.count !== '') {
            this.sortedProjects = this.sortedProjects.splice(0, Number(this.count));
        }
    };
    ProjectsComponent.prototype.select = function (event) {
        var projectId = event['name'].toString().slice(event['name'].indexOf('<') + 1, event['name'].indexOf('>'));
        window.location.href = window.location.href + '/' + projectId;
    };
    ProjectsComponent.prototype.dumpProject = function (project) {
        this.selectedProject = project;
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ffufm-feedback-dashboard-projects',
            template: __webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_core_stores__["d" /* ProjectStore */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["f" /* UserStore */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/projects/projects.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ffufm_feedback_dashboard_features_projects_projects_routing__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects/projects.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_projects_projects_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__app_shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_ffufm_feedback_dashboard_features_projects_projects_routing__["a" /* ProjectsRouting */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_projects_projects_component__["a" /* ProjectsComponent */]
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/projects/projects.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_projects_projects_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/projects/projects.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var projectsRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_projects_projects_component__["a" /* ProjectsComponent */]
    }
];
var ProjectsRouting = /** @class */ (function () {
    function ProjectsRouting() {
    }
    ProjectsRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(projectsRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
        })
    ], ProjectsRouting);
    return ProjectsRouting;
}());



/***/ })

});
//# sourceMappingURL=projects.module.chunk.js.map