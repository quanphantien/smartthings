"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = void 0;
class Endpoint {
    constructor(client) {
        this.client = client;
    }
    locationId(id) {
        const result = id || this.client.config.locationId;
        if (result) {
            return result;
        }
        throw Error('Location ID not defined');
    }
    installedAppId(id) {
        const result = id || this.client.config.installedAppId;
        if (result) {
            return result;
        }
        throw Error('Installed App ID not defined');
    }
}
exports.Endpoint = Endpoint;
