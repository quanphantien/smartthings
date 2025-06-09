import { Endpoint } from '../endpoint';
import { EndpointClientConfig } from '../endpoint-client';
export interface EnrolledChannel {
    channelId: string;
    name: string;
    description?: string;
    /**
     * ISO-8601 timestamp of creation of channel.
     */
    createdDate?: string;
    /**
     * ISO-8601 timestamp of last modification of channel
     */
    lastModifiedDate?: string;
    /**
     * URL to web interface to modify channel subscriptions.
     */
    subscriptionUrl?: string;
}
export interface InstalledDriver {
    driverId: string;
    name: string;
    description?: string;
    version: string;
    channelId: string;
    developer: string;
    /**
     * Information on how to reach the vendor.
     */
    vendorSupportInformation: string;
    /**
     * map of permissions and attributes used by the driver.
     *
     * Format:
     *   {"permissions":{"perm1":{...}, "perm2"{...}}}
     */
    permissions: {
        [name: string]: any;
    };
}
export interface Hub {
    id: string;
    name: string;
    eui: string;
    owner: string;
    serialNumber: string;
    firmwareVersion: string;
}
export interface HubCharacteristics {
    [key: string]: any;
}
export declare class HubdevicesEndpoint extends Endpoint {
    constructor(config: EndpointClientConfig);
    /**
     * Get a hub record
     * @param hubId
     */
    get(hubId: string): Promise<Hub>;
    /**
     * Get the characteristics of a hub
     * @param hubId
     */
    getCharacteristics(hubId: string): Promise<HubCharacteristics>;
    /**
     * Install driver on a hub. The primary use case of this functionality is to install a
     * self-published driver to be included in generic discovery (e.g. scanning).
     */
    installDriver(driverId: string, hubId: string, channelId: string): Promise<void>;
    /**
     * Change the driver for a device to the one specified by driverId.
     */
    switchDriver(driverId: string, hubId: string, deviceId: string, forceUpdate?: boolean): Promise<void>;
    /**
     * Removes a driver from being installed on a hub. This will allow the hub to clean up the
     * deleted driver. However, all dependent devices need to be removed for cleanup to fully occur.
     */
    uninstallDriver(driverId: string, hubId: string): Promise<void>;
    /**
     * List drivers installed on the hub.
     *
     * @param deviceId When included, limit the drivers to those marked as matching the specified device.
     */
    listInstalled(hubId: string, deviceId?: string): Promise<InstalledDriver[]>;
    getInstalled(hubId: string, driverId: string): Promise<InstalledDriver>;
    /**
     * Returns the list of driver channels the hub is currently subscribed to.
     * Currently only returns the driver channel type.
     */
    enrolledChannels(hubId: string): Promise<EnrolledChannel[]>;
}
//# sourceMappingURL=hubdevices.d.ts.map