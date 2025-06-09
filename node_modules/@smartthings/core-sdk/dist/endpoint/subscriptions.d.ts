import { Endpoint } from '../endpoint';
import { EndpointClientConfig } from '../endpoint-client';
import { Count } from '../types';
import { ConfigEntry } from './installedapps';
export interface DeviceSubscriptionDetail {
    /**
     * The GUID of the device that is subscribed to.
     */
    deviceId: string;
    /**
     * The component ID on the device that is subscribed to or * for all.
     */
    componentId?: string;
    /**
     * Name of the capability that is subscribed to or * for all.
     */
    capability?: string;
    /**
     * Name of the capabilities attribute or * for all.
     */
    attribute?: string;
    /**
     * A particular value for the attribute that will trigger the subscription
     * or * for all.
     */
    value?: any;
    /**
     * Only execute the subscription if the subscribed event is a state change
     * from previous events.
     */
    stateChangeOnly?: boolean;
    /**
     * A name for the subscription that will be passed to the installed app.
     * Must be unique per installed app.
     */
    subscriptionName?: string;
    /**
     * List of mode ID's that the subscription will execute for. If not provided
     * then all modes will be supported.
     */
    modes?: string[];
}
export interface CapabilitySubscriptionDetail {
    /**
     * The id of the location that both the app and source device are in.
     */
    locationId: string;
    /**
     * Name of the capability that is subscribed to.
     */
    capability: string;
    /**
     * Name of the capabilities attribute or * for all.
     */
    attribute?: string;
    /**
     * A particular value for the attribute that will trigger the subscription
     * or * for all.
     */
    value?: any;
    /**
     * Only execute the subscription if the subscribed event is a state change
     * from previous events.
     */
    stateChangeOnly?: boolean;
    /**
     * A name for the subscription that will be passed to the installed app.
     * Must be unique per installed app.
     */
    subscriptionName?: string;
    /**
     * List of modes that the subscription will execute for. If not provided
     * then all modes will be supported.
     */
    modes?: string[];
}
export interface ModeSubscriptionDetail {
    /**
     * The GUID for the location to subscribe to mode changes.
     */
    locationId: string;
}
export interface DeviceLifecycleDetail {
    /**
     * An array of GUIDs of devices being subscribed to. A max of 20 GUIDs are
     * allowed.
     */
    deviceIds?: string[];
    /**
     * A name for the subscription that will be passed to the installed app.
     */
    subscriptionName?: string;
    /**
     * The id of the location that both the app and source device are in.
     */
    locationId?: string;
}
export interface DeviceHealthDetail {
    /**
     * An array of GUIDs of devices being subscribed to. A max of 20 GUIDs are
     * allowed.
     */
    deviceIds?: string[];
    /**
     * A name for the subscription that will be passed to the installed app.
     */
    subscriptionName?: string;
    /**
     * The id of the location that both the app and source device are in.
     */
    locationId?: string;
}
export interface SecurityArmStateDetail {
    /**
     * A name for the subscription that will be passed to the installed app.
     */
    subscriptionName?: string;
    /**
     * The id of the location that both the app and the security system are in.
     */
    locationId: string;
}
export interface HubHealthDetail {
    /**
     * A name for the subscription that will be passed to the installed app.
     */
    subscriptionName?: string;
    /**
     * The id of the location that both the app and hubs are in
     */
    locationId: string;
}
export interface SceneLifecycleDetail {
    /**
     * A name for the subscription that will be passed to the installed app.
     */
    subscriptionName?: string;
    /**
     * The id of the location that both the app and scenes are in.
     */
    locationId: string;
}
export declare enum SubscriptionSource {
    DEVICE = "DEVICE",
    CAPABILITY = "CAPABILITY",
    MODE = "MODE",
    DEVICE_LIFECYCLE = "DEVICE_LIFECYCLE",
    DEVICE_HEALTH = "DEVICE_HEALTH",
    SECURITY_ARM_STATE = "SECURITY_ARM_STATE",
    HUB_HEALTH = "HUB_HEALTH",
    SCENE_LIFECYCLE = "SCENE_LIFECYCLE"
}
export interface Subscription {
    /**
     * The id of the subscription.
     */
    id?: string;
    /**
     * The id of the subscribing app.
     */
    installedAppId?: string;
    sourceType?: SubscriptionSource;
    device?: DeviceSubscriptionDetail;
    capability?: CapabilitySubscriptionDetail;
    mode?: ModeSubscriptionDetail;
    deviceLifecycle?: DeviceLifecycleDetail;
    deviceHealth?: DeviceHealthDetail;
    securityArmState?: SecurityArmStateDetail;
    hubHealth?: HubHealthDetail;
    sceneLifecycle?: SceneLifecycleDetail;
}
export interface SubscriptionRequest {
    sourceType: SubscriptionSource;
    device?: DeviceSubscriptionDetail;
    capability?: CapabilitySubscriptionDetail;
    mode?: ModeSubscriptionDetail;
    deviceLifecycle?: DeviceLifecycleDetail;
    deviceHealth?: DeviceHealthDetail;
    securityArmState?: SecurityArmStateDetail;
    hubHealth?: HubHealthDetail;
    sceneLifecycle?: SceneLifecycleDetail;
}
export interface DeviceSubscriptionOptions {
    /**
     * When true events are received only then their attribute values have changed. When false events are received
     * whenever they are sent. Note that some devices my only send events when the values change.
     */
    stateChangeOnly?: boolean;
    /**
     * List of mode UUIDs. Send events only when location mode is one of these values.
     */
    modes?: string[];
}
export declare class SubscriptionsEndpoint extends Endpoint {
    constructor(config: EndpointClientConfig);
    /**
     * Returns a list of all the subscriptions for an installed app.
     * @param installedAppId UUID of the installed app. This parameter is not required if the client id configured
     * with an installedAppId
     */
    list(installedAppId?: string): Promise<Subscription[]>;
    /**
     * Gets the definition of a specific subscription for the specified installed app.
     * @param name the alphanumeric name of the subscription
     * @param installedAppId UUID of the installed app. This parameter is not required if the client id configured
     * with an installedAppId
     */
    get(name: string, installedAppId?: string): Promise<Subscription>;
    /**
     * Deletes one or more subscriptions of an installed app
     * @param subscriptionId UUID of the subscription to delete. If not specified then all subscriptions associated with the
     * installed app instance are deleted.
     * @param installedAppId UUID of the installed app. This parameter is not required if the client id configured
     * with an installedAppId
     */
    delete(subscriptionId?: string, installedAppId?: string): Promise<Count>;
    /**
     * Create a subscription for an installed app instance
     * @param data the definition of the subscription
     * @param installedAppId UUID of the installed app. This parameter is not required if the client id configured
     * with an installedAppId
     */
    create(data: SubscriptionRequest, installedAppId?: string): Promise<Subscription>;
    /**
     * Deletes a subscription of an installed app
     * @param name name of the subscription to delete. If not specified then all subscriptions associated with the
     * installed app instance are deleted.
     * @param installedAppId UUID of the installed app. This parameter is not required if the client id configured
     * with an installedAppId
     * @deprecated use delete(name) instead
     */
    unsubscribe(name: string, installedAppId?: string): Promise<Count>;
    /**
     * Deletes all subscriptions of an installed app
     * @param installedAppId UUID of the installed app. This parameter is not required if the client id configured
     * with an installedAppId
     * @deprecated use delete() instead
     */
    unsubscribeAll(installedAppId?: string): Promise<Count>;
    /**
     * Creates device event subscriptions for one or more devices specified in a SmartApp device configuration setting.
     * This method is intended for use from SmartApps or API Access apps and must be called from a client configured
     * with an installedAppId. Use the create() method if the client is not
     * so configured.
     * @param devices a SmartApp device configuration setting configured with one or more devices
     * @param capability alphanumeric ID of the capability to subscribe to or '*' to subscribed to all capabilities of
     * the devices
     * @param attribute string defining what attribute(s) and attribute value(s) to subscribe to. Specifying an attribute
     * name such as 'switch' subscribed to all values of the switch attribute. Specifying a name.value string such as
     * 'switch.on' subscribed to only the on values of the switch. Specifying the wildcard '*' subscribes to all
     * values of all attributes of the capability.
     * @param subscriptionName the alphanumeric subscription name
     * @param options map of options, stateChange only a modes. If not stateChangeOnly is not specified the default
     * is true. If modes is not specified then events are sent for all modes.
     */
    subscribeToDevices(devices: ConfigEntry[], capability: string, attribute: string, subscriptionName: string, options?: DeviceSubscriptionOptions): Promise<Subscription[]>;
    /**
     * Creates a device subscription to a specific capability for all devices in a location. This method is intended
     * for use from SmartApps or API Access apps and must be called from a client configured
     * with an installedAppId and locationId. Use the create() method if the client is not
     * so configured.
     * @param capability alphanumeric ID of the capability
     * @param attribute string defining what attribute(s) and attribute value(s) to subscribe to. Specifying an attribute
     * name such as 'switch' subscribed to all values of the switch attribute. Specifying a name.value string such as
     * 'switch.on' subscribed to only the on values of the switch. Specifying the wildcard '*' subscribes to all
     * values of all attributes of the capability.
     * @param subscriptionName the alphanumber subscription name
     * @param options map of options, stateChange only a modes. If not stateChangeOnly is not specified the default
     * is true. If modes is not specified then events are sent for all modes.
     */
    subscribeToCapability(capability: string, attribute: string, subscriptionName: string, options?: DeviceSubscriptionOptions): Promise<Subscription>;
    /**
     * Subscribes to the mode change events from a location. This method is intended
     * for use from SmartApps or API Access apps and must be called from a client configured
     * with an installedAppId and locationId. Use the create() method if the client is not
     * so configured.
     * @param subscriptionName alphanumeric subscription name
     */
    subscribeToModeChange(subscriptionName: string): Promise<Subscription>;
    /**
     * Subscribes to device lifecycle events (i.e. create, update, and delete) from a location. This method is intended
     * for use from SmartApps or API Access apps and must be called from a client configured
     * with an installedAppId and locationId. Use the create() method if the client is not
     * so configured.
     * @param subscriptionName alphanumeric subscription name
     */
    subscribeToDeviceLifecycle(subscriptionName: string): Promise<Subscription>;
    /**
     * Subscribes to device health events (i.e. online and offline) from a location. This method is intended
     * for use from SmartApps or API Access apps and must be called from a client configured
     * with an installedAppId and locationId. Use the create() method if the client is not
     * so configured.
     * @param subscriptionName alphanumeric subscription name
     */
    subscribeToDeviceHealth(subscriptionName: string): Promise<Subscription>;
    /**
     * Subscribes to security system events from a location. This method is intended
     * for use from SmartApps or API Access apps and must be called from a client configured
     * with an installedAppId and locationId. Use the create() method if the client is not
     * so configured.
     * @param subscriptionName alphanumeric subscription name
     */
    subscribeToSecuritySystem(subscriptionName: string): Promise<Subscription>;
    /**
     * Subscribes to hub health events from a location. This method is intended
     * for use from SmartApps or API Access apps and must be called from a client configured
     * with an installedAppId and locationId. Use the create() method if the client is not
     * so configured.
     * @param subscriptionName alphanumeric subscription name
     */
    subscribeToHubHealth(subscriptionName: string): Promise<Subscription>;
    /**
     * Subscribes to scene lifecycle events from a location. This method is intended
     * for use from SmartApps or API Access apps and must be called from a client configured
     * with an installedAppId and locationId. Use the create() method if the client is not
     * so configured.
     * @param subscriptionName alphanumeric subscription name
     */
    subscribeToSceneLifecycle(subscriptionName: string): Promise<Subscription>;
}
//# sourceMappingURL=subscriptions.d.ts.map