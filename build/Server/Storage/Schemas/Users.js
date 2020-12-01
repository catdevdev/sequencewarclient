"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
/* Classes */
var Modification_1 = require("../../../Modification");
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.users = [];
        return _this;
    }
    Users.prototype.Add = function (user) {
        this.users.push(user);
    };
    Users.prototype.RemoveById = function (id) {
        var _this = this;
        this.users.filter(function () { return _this.users; });
        var removeIndex = this.users.map(function (item) { return item.Id; }).indexOf(id);
        this.users.splice(removeIndex, 1);
    };
    Users.prototype.GetById = function (id) {
        return this.users.filter(function (_a) {
            var Id = _a.Id;
            return Id === id;
        })[0];
    };
    Object.defineProperty(Users.prototype, "Users", {
        get: function () {
            return this.users;
        },
        set: function (value) {
            this.users = value;
        },
        enumerable: false,
        configurable: true
    });
    return Users;
}(Modification_1.Modification));
exports.Users = Users;
