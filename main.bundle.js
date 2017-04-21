webpackJsonp([1,4],{

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceEventData; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ServiceEventData = (function () {
    //Constructor
    function ServiceEventData(http) {
        this.http = http;
        //Used as the URL for the InMemoryDbService database 
        this.baseUrl = 'api/events';
    }
    //Get all events
    ServiceEventData.prototype.getEvents = function () {
        return this.http.get(this.baseUrl).map(this.extractData).do(function (data) { return console.log('Service: getEvents: ' + JSON.stringify(data)); }).catch(this.handleError);
    };
    //Get one event. If id=0, return new/blank event
    ServiceEventData.prototype.getEvent = function (id) {
        if (id === 0) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.initializeNewEvent());
        }
        else {
            var url = this.baseUrl + "/" + id;
            return this.http.get(url).map(this.extractData).do(function (data) { return console.log('Service: getEvent: ' + JSON.stringify(data)); }).catch(this.handleError);
        }
    };
    //Delete event
    ServiceEventData.prototype.deleteEvent = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var url = this.baseUrl + "/" + id;
        return this.http.delete(url, options).do(function (data) { return console.log('Service: deleteEvent: ' + JSON.stringify(data)); }).catch(this.handleError);
    };
    //Save event. If id=0, save as new event, if not, update old event
    ServiceEventData.prototype.saveEvent = function (event) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        if (event.id === 0) {
            event.id = undefined;
            return this.http.post(this.baseUrl, event, options).map(this.extractData).do(function (data) { return console.log('Service: createEvent: ' + JSON.stringify(data)); }).catch(this.handleError);
        }
        else {
            var url = this.baseUrl + "/" + event.id;
            return this.http.put(url, event, options).map(function () { return event; }).do(function (data) { return console.log('Service: updateEvent: ' + JSON.stringify(data)); }).catch(this.handleError);
        }
    };
    ServiceEventData.prototype.extractData = function (response) {
        var body = response.json();
        return body.data || {};
    };
    ServiceEventData.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    ServiceEventData.prototype.initializeNewEvent = function () {
        return {
            id: 0,
            eventName: null,
            eventType: "SelectEventType",
            eventStart: (new Date()).toISOString().split("T")[0],
            eventEnd: (new Date()).toISOString().split("T")[0],
            eventCity: null,
            eventState: null,
            eventCountry: null,
            eventCost: null,
            eventComment: null
        };
    };
    ServiceEventData = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ServiceEventData);
    return ServiceEventData;
    var _a;
}());
//# sourceMappingURL=service-eventdata.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceAuth; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceAuth = (function () {
    function ServiceAuth() {
        var _this = this;
        //Configure Auth0
        this.lock = new Auth0Lock('gpoaLFY92U66mGgAllObNrU2TBye19Dw', 'fdagher1.auth0.com', {
            theme: {
                primaryColor: "#31324F",
                logo: "favicon.png"
            },
            languageDictionary: {
                title: "Event Recorder"
            }
        });
        //Set userProfile attribute of already saved Profile
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        // Add callback for the Lock `authenticated` event
        this.lock.on('authenticated', function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            //Fetch profile information
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    alert(error);
                    return;
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.userProfile = profile;
            });
        });
    }
    ServiceAuth.prototype.login = function () {
        this.lock.show();
    };
    ServiceAuth.prototype.logout = function () {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
    };
    ServiceAuth.prototype.authenticated = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    ServiceAuth = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ServiceAuth);
    return ServiceAuth;
}());
//# sourceMappingURL=service-auth.service.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 387;


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(515);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(serviceauth) {
        this.serviceauth = serviceauth;
        this.pageTitle = 'Event Recorder';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "\n        <div class='panel panel-primary'>\n        \n            <div class='panel-heading' style=\"position: fixed; width: 100%; height: 40px; margin-top: 0px; z-index: 1;\">\n                <a [routerLink]=\"['']\" style=\"color:white;text-decoration:none;margin: 20;\"> {{pageTitle}} </a>\n\n                <button class=\"btn btn-default btn-xs\" style=\"float: right;\" (click)=\"serviceauth.login()\" *ngIf=\"!serviceauth.authenticated()\">Log In</button>\n                <button class=\"btn btn-default btn-xs\" style=\"float: right;\" (click)=\"serviceauth.logout()\" *ngIf=\"serviceauth.authenticated() && serviceauth.userProfile\">Log Out {{serviceauth.userProfile.nickname}}</button>\n                <button class=\"btn btn-default btn-xs\" style=\"float: right;\" (click)=\"serviceauth.logout()\" *ngIf=\"serviceauth.authenticated() && !serviceauth.userProfile\">Log Out </button>      \n            </div>                           \n            \n            <<div style=\"margin-top: 20px; z-index: -1\">\n              <router-outlet></router-outlet>\n            </div>\n\n        </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* ServiceAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* ServiceAuth */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_event_module__ = __webpack_require__(507);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_5__events_event_module__["a" /* EventModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* ServiceAuth */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataEvent; });
var DataEvent = (function () {
    function DataEvent() {
    }
    DataEvent.prototype.createDb = function () {
        var events = [
            {
                'id': 1,
                'eventType': 'Concert/Play',
                'eventName': 'Yanni Concert at Warner Theater',
                'eventStart': '2017-04-01',
                'eventEnd': '2017-04-01',
                'eventCity': 'Washington DC',
                'eventState': 'DC',
                'eventCountry': 'United States',
                'eventCost': '47',
                'eventComment': 'Amazing music, great seats'
            },
            {
                'id': 2,
                'eventType': 'Activity',
                'eventName': 'Ski at Liberty Mountain',
                'eventStart': '2016-02-03',
                'eventEnd': '2016-02-03',
                'eventCity': 'Littlestown',
                'eventState': 'PA',
                'eventCountry': 'United States',
                'eventCost': '120',
                'eventComment': 'Fun but tiring, nice company'
            },
            {
                'id': 3,
                'eventType': 'Restaurant',
                'eventName': 'DC Steakhouse',
                'eventStart': '2016-06-02',
                'eventEnd': '2016-06-02',
                'eventCity': 'Washington DC',
                'eventState': 'DC',
                'eventCountry': 'United States',
                'eventCost': '138',
                'eventComment': 'Very good food. Suit required!'
            },
            {
                'id': 4,
                'eventType': 'Hotel',
                'eventName': 'Hotel Elephant',
                'eventStart': '2016-01-18',
                'eventEnd': '2016-01-21',
                'eventCity': "Lisbon",
                'eventState': 'Lisbon',
                'eventCountry': 'Portugal',
                'eventCost': '120/night',
                'eventComment': 'Central location, small rooms'
            },
            {
                'id': 5,
                'eventType': 'Site',
                'eventName': 'Lisbon Sites',
                'eventStart': '2016-01-19',
                'eventEnd': '2016-01-19',
                'eventCity': 'Lisbon',
                'eventState': 'Lisbon',
                'eventCountry': 'Portugal',
                'eventCost': 'free',
                'eventComment': 'Lots of walking'
            },
            {
                'id': 6,
                'eventType': 'Site',
                'eventName': 'San Juan Sites',
                'eventStart': '2016-02-17',
                'eventEnd': '2016-02-17',
                'eventCity': 'San Juan',
                'eventState': 'San Juan',
                'eventCountry': 'Puerto Rico',
                'eventCost': 'free',
                'eventComment': ''
            }
        ];
        return { events: events };
    };
    return DataEvent;
}());
//# sourceMappingURL=data-event.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_in_memory_web_api__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_event__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventlist_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_eventdata_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipe_eventfilter_pipe__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__eventedit_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__(514);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EventModule = (function () {
    function EventModule() {
    }
    EventModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__eventedit_component__["a" /* EventEditComponent */] },
                    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_7__eventedit_component__["a" /* EventEditComponent */] },
                    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_4__eventlist_component__["a" /* EventListComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__eventlist_component__["a" /* EventListComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_2_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__data_event__["a" /* DataEvent */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__eventlist_component__["a" /* EventListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pipe_eventfilter_pipe__["a" /* PipeEventFilter */],
                __WEBPACK_IMPORTED_MODULE_7__eventedit_component__["a" /* EventEditComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__service_eventdata_service__["a" /* ServiceEventData */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EventModule);
    return EventModule;
}());
//# sourceMappingURL=event.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_generic_validator__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_event__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_eventdata_service__ = __webpack_require__(220);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EventEditComponent = (function () {
    function EventEditComponent(fb, route, router, serviceeventData) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.serviceeventData = serviceeventData;
        //Variables used for validators
        this.displayMessage = {};
        //Used to check if form is in View or Edit Mode
        this.editMode = false;
        this.eventTypes = __WEBPACK_IMPORTED_MODULE_8__model_event__["a" /* eventTypes */];
        //Define validation messages
        this.validationMessages = {
            eventType: {
                required: 'Event name is required.'
            },
            eventName: { required: 'Event name is required.', minlength: 'Event name must be at least three characters', maxlength: 'Event name cannot exceed 50 characters.'
            },
            eventStart: {
                required: 'Event start date is required.'
            },
            eventEnd: {
                required: 'Event end date is required.'
            },
            eventCity: {
                required: 'Event city name is required.'
            },
            eventState: {
                required: 'Event state name is required.'
            },
            eventCountry: {
                required: 'Event country name is required.'
            }
        };
        this.genericValidator = new __WEBPACK_IMPORTED_MODULE_7__shared_generic_validator__["a" /* GenericValidator */](this.validationMessages);
    }
    //During initialization of this component, create the form group and form components, then get event ID from URL
    EventEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        //Create Reactive Form
        this.eventForm = this.fb.group({
            eventType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required],
            eventName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].maxLength(50)]],
            eventStart: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required],
            eventEnd: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required],
            eventCity: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required],
            eventState: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required],
            eventCountry: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required],
            eventCost: [''],
            eventComment: ['']
        });
        //Get the event id that is passed through the URL, and then get the corresponding event to populate sheet with event data. If id=0, put sheet in edit mode
        this.sub = this.route.params.subscribe(function (params) {
            if (isNaN(+params['id'])) {
                _this.eventIdFromRouter = 0;
            }
            else {
                _this.eventIdFromRouter = +params['id'];
            }
            _this.getEvent(_this.eventIdFromRouter);
            if (_this.eventIdFromRouter == 0) {
                _this.EditButtonClick();
            }
        });
    };
    EventEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log("ngAfterViewInit");
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements.map(function (formControl) { return __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"].fromEvent(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"], [this.eventForm.valueChanges].concat(controlBlurs)).debounceTime(800).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.eventForm);
        });
    };
    //When done editing the event data, unsubscribe 
    EventEditComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
        this.sub.unsubscribe();
    };
    EventEditComponent.prototype.EditButtonClick = function () {
        this.editMode = true;
        document.getElementsByName("formfieldset")[0].removeAttribute("disabled");
    };
    //If event form has data which is valid, merge it with what the event object initially had, then send it to save data service
    EventEditComponent.prototype.SaveFormButtonClick = function () {
        var _this = this;
        if (this.eventForm.dirty && this.eventForm.valid) {
            var e = Object.assign({}, this.event, this.eventForm.value);
            this.serviceeventData.saveEvent(e).subscribe(function () { return _this.onEventSaved(); }, function (error) { return _this.errorMessage = error; });
            //Reroute to this in order to refill the form with the default values
            this.router.navigate(['/edit/0']);
        }
    };
    EventEditComponent.prototype.EventListButtonClick = function () {
        this.router.navigate(['/eventlist']);
    };
    EventEditComponent.prototype.DeleteButtonClick = function () {
        var _this = this;
        if (confirm("Really delete the event: " + this.event.eventName + "?")) {
            this.serviceeventData.deleteEvent(this.event.id).subscribe(function () { return _this.onEventSaved(); }, function (error) { return _this.errorMessage = error; });
        }
    };
    //Create random event object and add to view
    EventEditComponent.prototype.GenerateButtonClick = function () {
        var generatedEvent = { id: 0, eventType: "Activity",
            eventName: "Scuba Diving",
            eventStart: (new Date()).toISOString().split("T")[0],
            eventEnd: (new Date()).toISOString().split("T")[0],
            eventCity: "Bandos Island",
            eventState: "Maldives",
            eventCountry: "Maldvies",
            eventCost: "$110",
            eventComment: "Saw a small shark!" };
        this.eventForm.controls['eventName'].setValue(generatedEvent.eventName);
        this.eventForm.controls['eventName'].markAsDirty();
        this.eventForm.controls['eventType'].setValue(generatedEvent.eventType);
        this.eventForm.controls['eventType'].markAsDirty();
        this.eventForm.controls['eventStart'].setValue(generatedEvent.eventStart);
        this.eventForm.controls['eventStart'].markAsDirty();
        this.eventForm.controls['eventEnd'].setValue(generatedEvent.eventEnd);
        this.eventForm.controls['eventEnd'].markAsDirty();
        this.eventForm.controls['eventCity'].setValue(generatedEvent.eventCity);
        this.eventForm.controls['eventCity'].markAsDirty();
        this.eventForm.controls['eventState'].setValue(generatedEvent.eventState);
        this.eventForm.controls['eventState'].markAsDirty();
        this.eventForm.controls['eventCountry'].setValue(generatedEvent.eventCountry);
        this.eventForm.controls['eventCountry'].markAsDirty();
        this.eventForm.controls['eventCost'].setValue(generatedEvent.eventCost);
        this.eventForm.controls['eventCost'].markAsDirty();
        this.eventForm.controls['eventComment'].setValue(generatedEvent.eventComment);
        this.eventForm.controls['eventComment'].markAsDirty();
    };
    //Requests the event from the dataservice and updates the form accordingly
    EventEditComponent.prototype.getEvent = function (id) {
        var _this = this;
        this.serviceeventData.getEvent(id).subscribe(function (event) { return _this.onEventRetrieved(event); }, function (error) { return _this.errorMessage = error; });
    };
    //Update form values with event data
    EventEditComponent.prototype.onEventRetrieved = function (event) {
        //The below entryis needed, otherwise, a message "id is missing" (or the like) appears 
        this.event = event;
        this.eventForm.patchValue({ eventType: event.eventType,
            eventName: event.eventName,
            eventStart: event.eventStart,
            eventEnd: event.eventEnd,
            eventCity: event.eventCity,
            eventState: event.eventState,
            eventCountry: event.eventCountry,
            eventCost: event.eventCost,
            eventComment: event.eventComment });
    };
    //Display successful save message for 1 second, then reset form entries and navigate to form
    EventEditComponent.prototype.onEventSaved = function () {
        var _this = this;
        this.statusMessage = "Saved";
        __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"].timer(1000).subscribe(function (x) { return _this.statusMessage = ""; });
        this.eventForm.reset();
        this.router.navigate(['']);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControlName */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }), 
        __metadata('design:type', Array)
    ], EventEditComponent.prototype, "formInputElements", void 0);
    EventEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(574)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__service_eventdata_service__["a" /* ServiceEventData */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__service_eventdata_service__["a" /* ServiceEventData */]) === 'function' && _d) || Object])
    ], EventEditComponent);
    return EventEditComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=eventedit.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_eventdata_service__ = __webpack_require__(220);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventListComponent = (function () {
    function EventListComponent(serviceeventData) {
        this.serviceeventData = serviceeventData;
    }
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceeventData.getEvents().subscribe(function (events) { return _this.events = events; }, function (error) { return _this.errorMessage = error; });
    };
    EventListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(575)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_eventdata_service__["a" /* ServiceEventData */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_eventdata_service__["a" /* ServiceEventData */]) === 'function' && _a) || Object])
    ], EventListComponent);
    return EventListComponent;
    var _a;
}());
//# sourceMappingURL=eventlist.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eventTypes; });
var eventTypes = ["Activity", "Concert/Play", "Conference", "Hotel", "Museum", "Restaurant", "Site", "Tour", "Visit", "Work Trip"];
//# sourceMappingURL=model-event.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeEventFilter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PipeEventFilter = (function () {
    function PipeEventFilter() {
    }
    PipeEventFilter.prototype.transform = function (value, filterBy) {
        if (filterBy) {
            filterBy = filterBy.toLocaleLowerCase();
        }
        else {
            filterBy = null;
        }
        if (filterBy) {
            return value.filter(function (event) { return event.eventName.toLocaleLowerCase().indexOf(filterBy) !== -1; });
        }
        else {
            return value;
        }
    };
    PipeEventFilter = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'pipeeventFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], PipeEventFilter);
    return PipeEventFilter;
}());
//# sourceMappingURL=pipe-eventfilter.pipe.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(576)
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericValidator; });

// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
var GenericValidator = (function () {
    // Provide the set of valid validation messages
    // Stucture:
    // controlName1: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // },
    // controlName2: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // }
    function GenericValidator(validationMessages) {
        this.validationMessages = validationMessages;
    }
    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    // controlName2: 'Validation Message.'
    GenericValidator.prototype.processMessages = function (container) {
        var _this = this;
        var messages = {};
        var _loop_1 = function(controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
                var c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormGroup */]) {
                    var childMessages = this_1.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control
                    if (this_1.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(function (messageKey) {
                                if (_this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += _this.validationMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var controlKey in container.controls) {
            _loop_1(controlKey);
        }
        return messages;
    };
    return GenericValidator;
}());
//# sourceMappingURL=generic-validator.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_component__ = __webpack_require__(512);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild([
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_5__about_component__["a" /* AboutComponent */] }
                ]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__about_component__["a" /* AboutComponent */]
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.col-xs-4, .col-xs-6, .col-xs-12 {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    \r\n}\r\n\r\n.verticalspacing-5px {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n</style>\r\n\r\n<form (ngSubmit)=\"SaveFormButtonClick()\" [formGroup]=\"eventForm\" novalidate>\r\n    <div class=\"panel-body\">\r\n        <fieldset name=\"formfieldset\" disabled>\r\n\r\n            <div name=\"Event_Type_Name\" class=\"form-group\">          \r\n                <div class=\"col-xs-6 col-lg-6 verticalspacing-5px\">\r\n                    <select class=\"form-control\" \r\n                            formControlName=\"eventType\">\r\n                        <option value=\"SelectEventType\" disabled>Select Event Type</option>\r\n                        <option *ngFor=\"let eventType of eventTypes\" [value]=\"eventType\">{{eventType}}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col-xs-6 col-lg-6 verticalspacing-5px\" [ngClass]=\"{'has-error': displayMessage.eventName }\">\r\n                    <input class=\"form-control\"\r\n                            formControlName=\"eventName\"\r\n                            type=\"text\"\r\n                            placeholder=\"Event Name (required)\" />\r\n                    <span class=\"help-block\" *ngIf=\"displayMessage.eventName\">{{displayMessage.eventName}}</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div name=\"Event_Start_End\" class=\"form-group\">\r\n                <div class=\"col-xs-6 col-lg-6 verticalspacing-5px\">\r\n                    <input class=\"form-control\"\r\n                            formControlName=\"eventStart\" \r\n                            type=\"date\"\r\n                            name=\"eventStart\" />\r\n                </div>\r\n                <div class=\"col-xs-6 col-lg-6 verticalspacing-5px\">\r\n                    <input class=\"form-control\"\r\n                            formControlName=\"eventEnd\" \r\n                            type=\"date\"\r\n                            name=\"eventEnd\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div name=\"Event_City_State_Country\" class=\"form-group col-xs-6 col-lg-6\">\r\n                <div class=\"verticalspacing-5px\" >\r\n                    <input class=\"form-control\"\r\n                            formControlName=\"eventCity\"\r\n                            type=\"text\"\r\n                            placeholder=\"City Name\"\r\n                            name=\"eventCity\"/>\r\n                </div>\r\n                <div class=\"verticalspacing-5px\">\r\n                    <input class=\"form-control\"\r\n                            formControlName=\"eventState\"\r\n                            type=\"text\"\r\n                            placeholder=\"State Name\"\r\n                            name=\"eventState\"/>\r\n                </div>\r\n                <div class=\"verticalspacing-5px\">\r\n                    <input class=\"form-control\"\r\n                            formControlName=\"eventCountry\"\r\n                            type=\"text\"\r\n                            placeholder=\"Country Name\"\r\n                            name=\"eventCountry\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div name=\"Event_Cost_Comment\" class=\"form-group col-xs-6 col-lg-6\">\r\n                <div class=\"verticalspacing-5px\">\r\n                    <input class=\"form-control\"\r\n                            formControlName=\"eventCost\"\r\n                            type=\"text\"\r\n                            placeholder=\"Cost\"\r\n                            name=\"eventCost\"/>\r\n                </div>\r\n                <div class=\"verticalspacing-5px\">\r\n                    <textarea class=\"form-control\"\r\n                            formControlName=\"eventComment\"\r\n                            placeholder=\"Comments\"\r\n                            name=\"eventComment\"\r\n                            cols=\"20\"\r\n                            rows=\"3\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"has-error\" *ngIf=\"errorMessage\">\r\n                {{errorMessage}}\r\n            </div>\r\n\r\n        </fieldset>\r\n    </div>\r\n    <div class=\"panel-footer\" style=\"position: fixed; bottom: 0px; width: 100%; height: 50px;\" *ngIf=\"editMode\">\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\"\r\n                    type=\"submit\"\r\n                    style=\"width:80px;margin-right:10px\"\r\n                    [disabled]='!eventForm.valid'>\r\n                Save\r\n            </button>\r\n            <a *ngIf=\"eventIdFromRouter > 0\" \r\n                class=\"btn btn-default\"\r\n                style=\"width:80px\"\r\n                (click)=\"DeleteButtonClick()\">\r\n                Delete\r\n            </a>\r\n            <a class=\"btn btn-default\"\r\n                style=\"width:80px\"\r\n                (click)=\"EventListButtonClick()\">\r\n                EventList\r\n            </a>\r\n            <a *ngIf=\"eventIdFromRouter === 0\"\r\n                class=\"btn btn-default\"\r\n                style=\"width:80px\"\r\n                (click)=\"GenerateButtonClick()\">\r\n                Generate\r\n            </a>\r\n            <span class='has-error' *ngIf='statusMessage'>\r\n                {{statusMessage}}\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class='panel-footer' style=\"position: fixed; bottom: 0px; width: 100%; height: 50px;\" *ngIf=\"!editMode\">\r\n        <button class=\"btn btn-default\" [routerLink]=\"['/list']\" style=\"width:80px\">\r\n            Back\r\n        </button>\r\n        <a class=\"btn btn-primary\" (click)=\"EditButtonClick()\" style=\"width:80px;margin-left:10px\">\r\n            Edit\r\n        </a>\r\n    </div>\r\n\r\n</form>"

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "\r\n<div class='panel-body'>\r\n    <div class='row' style=\"margin-bottom:4px\">\r\n        <div class='col-md-4'>\r\n            <input type='text' placeholder='Filter by' [(ngModel)]='listFilter' />\r\n        </div>\r\n    </div>\r\n\r\n    <div class='has-error' *ngIf='errorMessage'>\r\n        {{errorMessage}}\r\n    </div>\r\n\r\n    <div class='table-responsive'>\r\n        <table class='table' *ngIf='events && events.length'>\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-6 col-lg-6\">Event Name</th>\r\n                    <th class=\"col-xs-6 col-lg-6\">Event Description</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor='let event of events | pipeeventFilter:listFilter'>\r\n                    <td><a [routerLink]=\"['/edit', event.id]\">{{event.eventName}}</a></td>\r\n                    <td>{{event.eventType}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>   \r\n    </div>\r\n</div>\r\n\r\n<div class=\"panel-footer\" style=\"position: fixed; bottom: 0px; width: 100%; height: 50px;\">\r\n    <button class=\"btn btn-primary\" [routerLink]=\"['/edit', 0]\">\r\n        New\r\n    </button>\r\n    <button class=\"btn btn-default\" [routerLink]=\"['/about']\" style=\"float: right\">\r\n        About \r\n    </button>\r\n</div>"

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<form style=\"margin-left:2mm\">\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label\">Website: </label>\r\n        eventsrecorder.azurewebsites.net\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label\">Version: </label>\r\n        0.5\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label\">Author: </label>\r\n        FD\r\n    </div>\r\n</form>"

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(388);


/***/ })

},[833]);
//# sourceMappingURL=main.bundle.js.map