"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSubscriptionPeriodBody = void 0;
class UpdateSubscriptionPeriodBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return UpdateSubscriptionPeriodBody.attributeTypeMap;
    }
}
exports.UpdateSubscriptionPeriodBody = UpdateSubscriptionPeriodBody;
UpdateSubscriptionPeriodBody.discriminator = undefined;
UpdateSubscriptionPeriodBody.attributeTypeMap = [
    {
        "name": "start",
        "baseName": "start",
        "type": "number",
        "format": ""
    },
    {
        "name": "end",
        "baseName": "end",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=UpdateSubscriptionPeriodBody.js.map