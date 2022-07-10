"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Notification.attributeTypeMap;
    }
}
exports.Notification = Notification;
Notification.discriminator = undefined;
Notification.attributeTypeMap = [
    {
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "any",
        "format": ""
    },
    {
        "name": "emails",
        "baseName": "emails",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "NotificationTypeEnum",
        "format": ""
    }
];
//# sourceMappingURL=Notification.js.map