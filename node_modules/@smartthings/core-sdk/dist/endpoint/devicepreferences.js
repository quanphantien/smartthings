"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicePreferencesEndpoint = void 0;
const endpoint_1 = require("../endpoint");
const endpoint_client_1 = require("../endpoint-client");
class DevicePreferencesEndpoint extends endpoint_1.Endpoint {
    constructor(config) {
        super(new endpoint_client_1.EndpointClient('devicepreferences', config));
    }
    list(namespace) {
        return this.client.getPagedItems('', namespace ? { namespace } : {});
    }
    get(id) {
        return this.client.get(id);
    }
    create(devicePreference) {
        devicePreference.explicit = true;
        return this.client.post(undefined, devicePreference);
    }
    update(id, devicePreference) {
        return this.client.put(id, devicePreference);
    }
    createTranslations(preferenceId, localization) {
        return this.client.post(`${preferenceId}/i18n`, localization);
    }
    getTranslations(preferenceId, locale) {
        return this.client.get(`${preferenceId}/i18n/${locale}`);
    }
    listTranslations(preferenceId) {
        return this.client.getPagedItems(`${preferenceId}/i18n`);
    }
    updateTranslations(preferenceId, localization) {
        return this.client.put(`${preferenceId}/i18n/${localization.tag}`, localization);
    }
}
exports.DevicePreferencesEndpoint = DevicePreferencesEndpoint;
