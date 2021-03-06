"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.ApiKeyAuthentication = void 0;
class ApiKeyAuthentication {
    constructor(tokenProvider) {
        this.tokenProvider = tokenProvider;
    }
    getName() {
        return "ApiKey";
    }
    applySecurityAuthentication(context) {
        return __awaiter(this, void 0, void 0, function* () {
            context.setHeaderParam("Authorization", "Bearer " + (yield this.tokenProvider.getToken()));
        });
    }
}
exports.ApiKeyAuthentication = ApiKeyAuthentication;
function configureAuthMethods(config) {
    let authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["ApiKey"]) {
        authMethods["ApiKey"] = new ApiKeyAuthentication(config["ApiKey"]["tokenProvider"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
//# sourceMappingURL=auth.js.map