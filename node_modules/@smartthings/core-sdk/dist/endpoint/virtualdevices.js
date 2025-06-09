"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualDevicesEndpoint = void 0;
const endpoint_1 = require("../endpoint");
const endpoint_client_1 = require("../endpoint-client");
class VirtualDevicesEndpoint extends endpoint_1.Endpoint {
    constructor(config) {
        super(new endpoint_client_1.EndpointClient('virtualdevices', config));
    }
    /**
     * Returns list of virtual devices.
     * @param options map of filter options. Currently only 'locationId' is supported.
     */
    list(options = {}) {
        const params = {};
        if ('locationId' in options && options.locationId) {
            params.locationId = options.locationId;
        }
        else if (this.client.config.locationId) {
            params.locationId = this.client.config.locationId;
        }
        return this.client.getPagedItems(undefined, params);
    }
    /**
     * Create a virtual device from a device profile. An existing device profile can be designated by ID, or the
     * definition of a device profile can be provided inline.
     */
    create(definition) {
        return this.client.post('', definition);
    }
    /**
     * Creates a virtual device from a standard prototype.
     */
    createStandard(definition) {
        return this.client.post('prototypes', definition);
    }
    /**
     * Creates events for the specified device
     * @param id UUID of the device
     * @param deviceEvents list of events
     */
    createEvents(id, deviceEvents) {
        return this.client.post(`${id}/events`, { deviceEvents });
    }
}
exports.VirtualDevicesEndpoint = VirtualDevicesEndpoint;
