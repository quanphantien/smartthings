"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsEndpoint = void 0;
const endpoint_1 = require("../endpoint");
const endpoint_client_1 = require("../endpoint-client");
class OrganizationsEndpoint extends endpoint_1.Endpoint {
    constructor(config) {
        super(new endpoint_client_1.EndpointClient('organizations', config));
    }
    list() {
        return this.client.getPagedItems('');
    }
    get(id) {
        return this.client.get(id);
    }
}
exports.OrganizationsEndpoint = OrganizationsEndpoint;
