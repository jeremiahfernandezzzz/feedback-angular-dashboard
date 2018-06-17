webpackJsonp(["project-managers.module"],{

/***/ "./src/app/ffufm-feedback-dashboard-features/project-managers/project-managers.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    text-align: center;\n}\n\n.results .right-panel {\n    display: inline-block;\n    width: 69%;\n}\n\n.results .left-panel {\n    display: inline-block;\n    width: 30%;\n}\n\n.chart-container {\n    height: 80vh;\n    width: 45vw\n}\n\n.chip > label {\n  background-color: #7f7e80;\n  border-radius: 5px;\n  padding: 5px;\n  color: #ffffff;\n}\n\n.chip > label > span {\n  color: white;\n}\n\n.chip > label:hover{\n  background-color: #979194;\n}\n\n.results {\n  height: 50vh;\n  width: 70vw;\n}\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/project-managers/project-managers.component.html":
/***/ (function(module, exports) {

module.exports = "<!--project-managers works!-->\n\n<!--<div class=\"results container\">-->\n  <div class=\"form-inline\">\n    search for pm: <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query\"\n                          (input)=\"loadProjectManagers()\"><br/> <br/>\n    <div *ngFor=\"let pm of projectManagers\" style=\"display: inline\">\n      <!--<div *ngIf=\"pm.hide == true\">-->\n      <!--(click)=\"filterProjectManagers(pm.id) style=\"background-color: {{ pm.color }}\"-->\n      <a href=\"#/project-managers/{{ pm.id }}/\">\n        <span class=\"chip\">\n          <label>{{ pm.displayName }} <{{ pm.id }}>\n          </label>\n        </span>\n        <!--<button class=\"btn\" (click)=\"filterProjectManagers(pm.id)\">{{ pm.displayName }} <{{ pm.id }}>-->\n        <!--</button>-->\n      </a>\n      <!--</div>-->\n      <!--<div *ngIf=\"pm.hide == false\">-->\n      <!--<button class=\"btn btn-info\" (click)=\"filterProjectManagers(pm.id)\">{{-->\n      <!--pm.displayName }} <{{ pm.id }}>-->\n      <!--</button>-->\n      <!--</div>-->\n\n    </div>\n  </div>\n  <div>\n    <h4>Total billable days: {{ totalBillableDays }}</h4>\n    <div class=\"results container\">\n      <!--<div class=\"chart-container\">-->\n      <!--(click)=\"select($event)\"-->\n      <!--(select)=\"selectt($event)\"-->\n      <ngx-charts-bar-vertical [results]=\"billableDaysByProjectManager\"\n                               [legend]=\"showLegend\"\n      ></ngx-charts-bar-vertical>\n    </div>\n    <!--</div>-->\n  </div>\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/project-managers/project-managers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectManagersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_stores__ = __webpack_require__("./src/app/core/stores/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectManagersComponent = /** @class */ (function () {
    function ProjectManagersComponent(projectStore, userStore) {
        this.projectStore = projectStore;
        this.userStore = userStore;
        this.showLegend = 'true';
        this.query = '';
        this.totalBillableDays = 0;
    }
    ProjectManagersComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getUsers();
        this.loadProjectManagers();
    };
    ProjectManagersComponent.prototype.loadBillableDaysByProjectManager = function () {
        var _this = this;
        this.billableDaysByProjectManager = [];
        this.projectsByProjectManager = __WEBPACK_IMPORTED_MODULE_2_lodash__["mapValues"](__WEBPACK_IMPORTED_MODULE_2_lodash__["groupBy"](this.projects, 'projectManagerId'), function (clist) { return clist.map(function (team) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["omit"](team, 'projectManagerId'); }); });
        Object.keys(this.projectsByProjectManager).forEach(function (key) {
            var accumulatedBillableDays = 0;
            _this.projectsByProjectManager[key].forEach(function (project) {
                accumulatedBillableDays += Number(project.billableDays);
            });
            _this.projectManagers.forEach(function (pm) {
                if (pm.id == key) {
                    if (pm.hide == false) {
                        _this.billableDaysByProjectManager.push({
                            'name': pm.displayName + ' <' + pm.id + '>',
                            'value': accumulatedBillableDays
                        });
                    }
                }
            });
            _this.totalBillableDays = Number(accumulatedBillableDays) + _this.totalBillableDays;
        });
    };
    ProjectManagersComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectStore.getProjects()
            .subscribe(function (projects) {
            _this.projects = projects;
        });
    };
    ProjectManagersComponent.prototype.filterProjectManagers = function (projectManagerId) {
        this.projectManagers.forEach(function (result) {
            if (result.id === projectManagerId) {
                if (result.hide == false) {
                    result.hide = true;
                }
                else {
                    result.hide = false;
                }
            }
        });
        this.loadBillableDaysByProjectManager();
    };
    ProjectManagersComponent.prototype.loadProjectManagers = function () {
        var _this = this;
        this.projectManagers = this.projects.reduce(function (acc, project) {
            var projectManagerId = project.projectManagerId;
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["findIndex"](acc, { id: projectManagerId }) === -1 && projectManagerId !== null) {
                var user = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](_this.users, { id: projectManagerId });
                if (user.displayName.toLowerCase().includes(_this.query.toLowerCase())) {
                    user.hide = false;
                    acc.push(user);
                }
            }
            return acc;
        }, []);
        this.loadBillableDaysByProjectManager();
    };
    ProjectManagersComponent.prototype.sortResults = function () {
        this.projectManagers = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](this.projectManagers, function (user) { return user.displayName; });
    };
    ProjectManagersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userStore.getUsers()
            .subscribe(function (users) {
            _this.users = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](users, function (user) {
                return user;
            });
            _this.users = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](_this.users, 'displayName', 'asc');
        });
    };
    ProjectManagersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ffufm-feedback-dashboard-project-managers',
            template: __webpack_require__("./src/app/ffufm-feedback-dashboard-features/project-managers/project-managers.component.html"),
            styles: [__webpack_require__("./src/app/ffufm-feedback-dashboard-features/project-managers/project-managers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_core_stores__["d" /* ProjectStore */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["f" /* UserStore */]])
    ], ProjectManagersComponent);
    return ProjectManagersComponent;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/project-managers/project-managers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectManagersModule", function() { return ProjectManagersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ffufm_feedback_dashboard_features_project_managers_project_managers_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/project-managers/project-managers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_project_managers_project_managers_routing__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/project-managers/project-managers.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProjectManagersModule = /** @class */ (function () {
    function ProjectManagersModule() {
    }
    ProjectManagersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__app_shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_project_managers_project_managers_routing__["a" /* ProjectManagersRouting */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_ffufm_feedback_dashboard_features_project_managers_project_managers_component__["a" /* ProjectManagersComponent */]
            ]
        })
    ], ProjectManagersModule);
    return ProjectManagersModule;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/project-managers/project-managers.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectManagersRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_project_managers_project_managers_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/project-managers/project-managers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var projectManagersRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_project_managers_project_managers_component__["a" /* ProjectManagersComponent */]
    }
];
var ProjectManagersRouting = /** @class */ (function () {
    function ProjectManagersRouting() {
    }
    ProjectManagersRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(projectManagersRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
        })
    ], ProjectManagersRouting);
    return ProjectManagersRouting;
}());



/***/ })

});
//# sourceMappingURL=project-managers.module.chunk.js.map