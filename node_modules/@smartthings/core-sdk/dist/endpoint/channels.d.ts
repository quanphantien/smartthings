import { Endpoint } from '../endpoint';
import { EndpointClientConfig } from '../endpoint-client';
import { EdgeDriver } from './drivers';
export interface ChannelBase {
    name: string;
    description: string;
    termsOfServiceUrl: string;
}
export interface ChannelCreate extends ChannelBase {
    type?: 'DRIVER';
}
export interface Channel extends ChannelCreate {
    channelId: string;
    createdDate: string;
    lastModifiedDate: string;
}
export type ChannelUpdate = ChannelBase;
export type SubscriberType = 'HUB';
export interface ListOptions {
    /**
     * Filter channels by subscriber type.
     */
    subscriberType?: SubscriberType;
    /**
     * Filter channels based on the subscriber id (e.g. hub id).
     *
     * Requires `subscriberType` to also be specified.
     */
    subscriberId?: string;
    /**
     * Include channels that have been subscribed to as well as user-owned channels.
     */
    includeReadOnly?: boolean;
}
export interface DriverChannelDetails {
    channelId: string;
    driverId: string;
    version: string;
    createdDate: string;
    lastModifiedDate: string;
}
export declare class ChannelsEndpoint extends Endpoint {
    constructor(config: EndpointClientConfig);
    create(data: ChannelCreate): Promise<Channel>;
    delete(id: string): Promise<void>;
    update(id: string, data: ChannelUpdate): Promise<Channel>;
    get(id: string): Promise<Channel>;
    getDriverChannelMetaInfo(channelId: string, driverId: string): Promise<EdgeDriver>;
    list(options?: ListOptions): Promise<Channel[]>;
    listAssignedDrivers(channelId: string): Promise<DriverChannelDetails[]>;
    /**
     * Assign or publish a driver to a channel.
     *
     * NOTE: This method also works to update the driver version assigned to a channel.
     */
    assignDriver(channelId: string, driverId: string, version: string): Promise<DriverChannelDetails>;
    unassignDriver(channelId: string, driverId: string): Promise<void>;
    enrollHub(channelId: string, hubId: string): Promise<void>;
    unenrollHub(channelId: string, hubId: string): Promise<void>;
}
//# sourceMappingURL=channels.d.ts.map