import { Endpoint } from '../endpoint';
import { EndpointClientConfig } from '../endpoint-client';
import { CommandMappings, Device, DeviceEvent } from './devices';
import { DeviceProfileCreateRequest } from './deviceprofiles';
export interface VirtualDeviceOwner {
    ownerType: VirtualDeviceOwnerTypeEnum;
    ownerId: string;
}
export type VirtualDeviceOwnerTypeEnum = 'USER' | 'LOCATION';
export type ExecutionTarget = 'CLOUD' | 'LOCAL';
export interface VirtualDeviceCreateRequest {
    name: string;
    owner: VirtualDeviceOwner;
    deviceProfileId?: string;
    deviceProfile?: DeviceProfileCreateRequest;
    roomId?: string;
    commandMappings?: CommandMappings;
    executionTarget?: ExecutionTarget;
    hubId?: string;
    driverId?: string;
    channelId?: string;
}
export interface VirtualDeviceStandardCreateRequest {
    name: string;
    owner: VirtualDeviceOwner;
    prototype: string;
    roomId?: string;
    executionTarget?: ExecutionTarget;
    hubId?: string;
    driverId?: string;
    channelId?: string;
}
export interface VirtualDeviceListOptions {
    locationId?: string;
}
export interface VirtualDeviceEventsResponse {
    stateChanges: boolean[];
}
export declare class VirtualDevicesEndpoint extends Endpoint {
    constructor(config: EndpointClientConfig);
    /**
     * Returns list of virtual devices.
     * @param options map of filter options. Currently only 'locationId' is supported.
     */
    list(options?: VirtualDeviceListOptions): Promise<Device[]>;
    /**
     * Create a virtual device from a device profile. An existing device profile can be designated by ID, or the
     * definition of a device profile can be provided inline.
     */
    create(definition: VirtualDeviceCreateRequest): Promise<Device>;
    /**
     * Creates a virtual device from a standard prototype.
     */
    createStandard(definition: VirtualDeviceStandardCreateRequest): Promise<Device>;
    /**
     * Creates events for the specified device
     * @param id UUID of the device
     * @param deviceEvents list of events
     */
    createEvents(id: string, deviceEvents: DeviceEvent[]): Promise<VirtualDeviceEventsResponse>;
}
//# sourceMappingURL=virtualdevices.d.ts.map