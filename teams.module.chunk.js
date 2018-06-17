webpackJsonp(["teams.module"],{

/***/ "./src/app/ffufm-feedback-dashboard-features/teams/teams.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n  text-align: center;\n}\n.results {\n  height: 50vh;\n  width: 70vw;\n}\n.chip > label {\n  background-color: #7f7e80;\n  border-radius: 5px;\n  padding: 5px;\n  color: #ffffff;\n}\n.chip > label > span {\n  color: white;\n}\n.chip > label:hover{\n  background-color: #979194;\n}\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/teams/teams.component.html":
/***/ (function(module, exports) {

module.exports = "<!--teams component-->\n\n<div class=\"container\">\n  <div class=\"form-inline\">\n    search for teams: <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query\" (input)=\"loadTeams()\"><br/><br/>\n    <div *ngFor=\"let team of teams\" style=\"display:inline\">\n      <a href=\"#/teams/{{ team.id }}/\">\n        <span class=\"chip\">\n          <label>Team {{ team.displayName }} <{{ team.id }}>\n          </label>\n        </span>\n      </a>\n    </div>\n  </div>\n  <!--<div>-->\n  <h4>Total billable days: {{ totalBillableDays }}</h4>\n    <div class=\"results container\">\n      <!--<div class=\"results\">-->\n      <ngx-charts-bar-vertical [results]=\"billableDaysByTeam\"\n                               [legend]=\"showLegend\"></ngx-charts-bar-vertical>\n      <!--</div>-->\n    </div>\n  <!--</div>-->\n</div>\n"

/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/teams/teams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsComponent; });
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



var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(projectStore, userStore) {
        this.projectStore = projectStore;
        this.userStore = userStore;
        this.showLegend = 'true';
        this.query = '';
        this.totalBillableDays = 0;
    }
    TeamsComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getUsers();
        this.loadTeams();
        this.getUsers();
    };
    TeamsComponent.prototype.loadBillableDaysByTeam = function () {
        var _this = this;
        this.billableDaysByTeam = [];
        this.projectsByTeam = __WEBPACK_IMPORTED_MODULE_2_lodash__["mapValues"](__WEBPACK_IMPORTED_MODULE_2_lodash__["groupBy"](this.projects, 'teamLeadId'), function (clist) { return clist.map(function (team) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["omit"](team, 'teamLeadId'); }); });
        Object.keys(this.projectsByTeam).forEach(function (key) {
            var accumulatedBillableDays = 0;
            _this.projectsByTeam[key].forEach(function (project) {
                accumulatedBillableDays += Number(project.billableDays);
            });
            _this.teams.forEach(function (team) {
                if (team.id == key) {
                    _this.billableDaysByTeam.push({
                        'name': 'Team ' + team.displayName,
                        'value': accumulatedBillableDays
                    });
                }
            });
            // console.log(accumulatedBillableDays);
            _this.totalBillableDays = Number(accumulatedBillableDays) + _this.totalBillableDays;
        });
    };
    TeamsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectStore.getProjects()
            .subscribe(function (projects) {
            _this.projects = projects;
        });
    };
    TeamsComponent.prototype.loadTeams = function () {
        var _this = this;
        this.teams = this.projects.reduce(function (acc, project) {
            var teamLeadId = project.teamLeadId;
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["findIndex"](acc, { id: teamLeadId }) === -1 && teamLeadId !== null) {
                var user = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](_this.users, { id: teamLeadId });
                if (user.displayName.toLowerCase().includes(_this.query.toLowerCase())) {
                    acc.push(user);
                }
            }
            return acc;
        }, []);
        this.queryResults = this.teams;
        this.queryResults = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](this.queryResults, function (user) { return user; });
        this.loadBillableDaysByTeam();
    };
    TeamsComponent.prototype.getUsers = function () {
        var _this = this;
        this.userStore.getUsers()
            .subscribe(function (users) {
            _this.users = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](users, function (user) {
                return user;
            });
            _this.users = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](_this.users, 'displayName', 'asc');
        });
    };
    TeamsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ffufm-feedback-dashboard-teams',
            template: __webpack_require__("./src/app/ffufm-feedback-dashboard-features/teams/teams.component.html"),
            styles: [__webpack_require__("./src/app/ffufm-feedback-dashboard-features/teams/teams.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_core_stores__["d" /* ProjectStore */],
            __WEBPACK_IMPORTED_MODULE_1__app_core_stores__["f" /* UserStore */]])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/teams/teams.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsModule", function() { return TeamsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_teams_teams_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/teams/teams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_teams_teams_routing__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/teams/teams.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TeamsModule = /** @class */ (function () {
    function TeamsModule() {
    }
    TeamsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_ffufm_feedback_dashboard_features_teams_teams_routing__["a" /* TeamsRouting */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_teams_teams_component__["a" /* TeamsComponent */]
            ]
        })
    ], TeamsModule);
    return TeamsModule;
}());



/***/ }),

/***/ "./src/app/ffufm-feedback-dashboard-features/teams/teams.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_teams_teams_component__ = __webpack_require__("./src/app/ffufm-feedback-dashboard-features/teams/teams.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var teamsRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_ffufm_feedback_dashboard_features_teams_teams_component__["a" /* TeamsComponent */]
    }
];
var TeamsRouting = /** @class */ (function () {
    function TeamsRouting() {
    }
    TeamsRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(teamsRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
        })
    ], TeamsRouting);
    return TeamsRouting;
}());



/***/ })

});
//# sourceMappingURL=teams.module.chunk.js.map