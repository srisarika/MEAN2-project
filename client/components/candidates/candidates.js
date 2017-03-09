System.register(['angular2/core', 'angular2/router', '../../../client/services/httpprovider', '../../../client/services/userdetails', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, httpprovider_1, userdetails_1, http_1;
    var CandidatesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (httpprovider_1_1) {
                httpprovider_1 = httpprovider_1_1;
            },
            function (userdetails_1_1) {
                userdetails_1 = userdetails_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            CandidatesComponent = (function () {
                function CandidatesComponent(_userdetails, _router, _httpprovider) {
                    this._userdetails = _userdetails;
                    this._router = _router;
                    this._httpprovider = _httpprovider;
                    this.candidates = [];
                    this.manageCandidate = {};
                    this.userrole = "";
                    this.changeduser = "";
                    this.manage = false;
                    this.isuser = false;
                    this.isadmin = false;
                    this.changed = false;
                    this.rolechange = false;
                }
                CandidatesComponent.prototype.delete = function (candidate) {
                    var vari = this;
                    this._httpprovider.httpReq('http://localhost:9001/deletecandidate', 'POST', candidate, null).subscribe(function (data) {
                        vari.candidates = data;
                    });
                    return false;
                };
                CandidatesComponent.prototype.submitCandidate = function (candidate) {
                    var vari = this;
                    this._httpprovider.httpReq('http://localhost:9001/editcandidate', 'POST', candidate, null).subscribe(function (data) {
                        console.log(data);
                    });
                    vari.manage = false;
                    return false;
                };
                CandidatesComponent.prototype.edit = function (candidate) {
                    var vari = this;
                    vari.manage = true;
                    vari.manageCandidate = candidate;
                    return false;
                };
                CandidatesComponent.prototype.ngOnInit = function () {
                    var vari = this;
                    vari.isadmin = true;
                    this._httpprovider.httpReq('http://localhost:9001/admin/candidates', 'GET', null, null).subscribe(function (data) {
                        for (var i = 0; i < data.length; i++) {
                            vari.candidates.push(data[i]);
                        }
                    });
                };
                CandidatesComponent = __decorate([
                    core_1.Component({
                        selector: 'candidates',
                        template: "\n<div>Employees Component</div> \n  <table>\n        <thead>\n            <th>Name</th>\n            <th>Email</th>\n            <th>DOB</th>\n            <th>Department</th>\n            <th>Gender</th>\n            <th>Delete</th>\n            <th>Edit</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#candidate of candidates\">\n                <td>{{candidate.name}}</td> \n                <td>{{candidate.email}}</td>\n                <td>{{candidate.dob}}</td>\n                <td>{{candidate.department}}</td>\n                <td>{{candidate.gender}}</td>\n                <td><a href=\"\" (click)=\"delete(candidate)\">Delete</a></td>\n                <td><a href=\"\" (click)=\"edit(candidate)\">Edit</a></td>\n            </tr>\n        </tbody>\n    </table>\n      <table *ngIf=\"manage\">\n        <thead>\n            <th>Name</th>\n            <th>Email</th>\n            <th>DOB</th>\n            <th>Department</th>\n            <th>Gender</th>\n        </thead>\n        <tbody>\n            <tr>            \n                 <td><input type=\"text\" [(ngModel)]=\"manageCandidate.name\" placeholder=\"Name\"/></td>\n                 <td><input type=\"text\" [(ngModel)]=\"manageCandidate.email\" placeholder=\"Email\"/></td>\n                 <td><input type=\"text\" [(ngModel)]=\"manageCandidate.dob\" placeholder=\"DOB\"/></td>\n                 <td><input type=\"text\" [(ngModel)]=\"manageCandidate.department\" placeholder=\"Department\"/></td>\n                 <td><input type=\"text\" [(ngModel)]=\"manageCandidate.gender\" placeholder=\"Gender\"/></td>\n                 <td><a href=\"\" (click)=\"submitCandidate(manageCandidate)\">Done</a></td>\n            </tr>\n        </tbody>\n    </table>\n  ",
                        providers: [http_1.Http, http_1.HTTP_PROVIDERS, httpprovider_1.Httpprovider]
                    }), 
                    __metadata('design:paramtypes', [userdetails_1.Userdetails, router_1.Router, httpprovider_1.Httpprovider])
                ], CandidatesComponent);
                return CandidatesComponent;
            }());
            exports_1("CandidatesComponent", CandidatesComponent);
        }
    }
});
//# sourceMappingURL=candidates.js.map