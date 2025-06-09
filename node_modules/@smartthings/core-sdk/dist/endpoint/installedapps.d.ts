import { Endpoint } from '../endpoint';
import { EndpointClientConfig } from '../endpoint-client';
import { Owner, PrincipalType, Status } from '../types';
export interface StringConfig {
    /**
     * A config value
     */
    value: string;
}
export interface DeviceConfig {
    /**
     * The ID of the device.
     */
    deviceId: string;
    /**
     * The component ID on the device.
     */
    componentId: string;
    permissions: string[];
}
export interface PermissionConfig {
    permissions: string[];
}
export interface ModeConfig {
    /**
     * The ID of the mode.
     */
    modeId: string;
}
export interface SceneConfig {
    /**
     * The ID of the scene.
     */
    sceneId: string;
    permissions: string[];
}
export interface MessageConfig {
    /**
     * The key value of the message group.
     */
    messageGroupKey: string;
}
export declare enum ConfigValueType {
    STRING = "STRING",
    DEVICE = "DEVICE",
    PERMISSION = "PERMISSION",
    MODE = "MODE",
    SCENE = "SCENE",
    MESSAGE = "MESSAGE"
}
export interface ConfigEntry {
    /**
     * The value type.
     */
    valueType: ConfigValueType;
    /**
     * The config if valueType is STRING, meaningless otherwise
     */
    stringConfig?: StringConfig;
    /**
     * The config if valueType is DEVICE, meaningless otherwise
     */
    deviceConfig?: DeviceConfig;
    /**
     * The config if valueType is PERMISSION, meaningless otherwise
     */
    permissionConfig?: PermissionConfig;
    /**
     * The config if valueType is MODE, meaningless otherwise
     */
    modeConfig?: ModeConfig;
    /**
     * The config if valueType is SCENE, meaningless otherwise
     */
    sceneConfig?: SceneConfig;
    /**
     * The config if valueType is MESSAGE, meaningless otherwise
     */
    messageConfig?: MessageConfig;
}
export declare enum InstalledAppType {
    LAMBDA_SMART_APP = "LAMBDA_SMART_APP",
    WEBHOOK_SMART_APP = "WEBHOOK_SMART_APP",
    API_ONLY = "API_ONLY",
    BEHAVIOR = "BEHAVIOR"
}
export declare enum InstallConfigurationStatus {
    STAGED = "STAGED",
    DONE = "DONE",
    AUTHORIZED = "AUTHORIZED",
    REVOKED = "REVOKED"
}
export declare enum InstalledAppStatus {
    PENDING = "PENDING",
    AUTHORIZED = "AUTHORIZED",
    REVOKED = "REVOKED",
    DISABLED = "DISABLED"
}
export interface InstalledAppUi {
    pluginId?: string;
    pluginUri?: string;
    dashboardCardsEnabled: boolean;
    preInstallDashboardCardsEnabled: boolean;
}
export interface InstalledAppIconImage {
    /**
     * A default icon image url for an app. https url required.
     */
    url?: string;
}
export declare enum InstalledAppClassification {
    AUTOMATION = "AUTOMATION",
    SERVICE = "SERVICE",
    DEVICE = "DEVICE",
    CONNECTED_SERVICE = "CONNECTED_SERVICE",
    HIDDEN = "HIDDEN"
}
export interface InstalledApp {
    /**
     * The ID of the installed app.
     */
    installedAppId: string;
    installedAppType: InstalledAppType;
    installedAppStatus: InstalledAppStatus;
    /**
     * A user defined name for the installed app. May be null.
     */
    displayName?: string;
    /**
     * The ID of the app.
     */
    appId: string;
    /**
     * A reference to an upstream system.  For example, Behaviors would
     * reference the behaviorId. May be null.
     */
    referenceId?: string;
    /**
     * The ID of the location to which the installed app may belong.
     */
    locationId?: string;
    owner: Owner;
    /**
     * A UTC ISO-8601 Date-Time String
     */
    createdDate: string;
    /**
     * A UTC ISO-8601 Date-Time String
     */
    lastUpdatedDate: string;
    ui?: InstalledAppUi;
    iconImage?: InstalledAppIconImage;
    /**
     * An App maybe associated to many classifications.  A classification drives
     * how the integration is presented to the user in the SmartThings mobile
     * clients.  These classifications include: * AUTOMATION - Denotes an
     * integration that should display under the \"Automation\" tab in mobile
     * clients. * SERVICE - Denotes an integration that is classified as a
     * \"Service\". * DEVICE - Denotes an integration that should display under
     * the \"Device\" tab in mobile clients. * CONNECTED_SERVICE - Denotes an
     * integration that should display under the \"Connected Services\" menu in
     * mobile clients. * HIDDEN - Denotes an integration that should not display
     * in mobile clients
     */
    classifications?: InstalledAppClassification[];
    /**
     * Denotes the principal type to be used with the app.  Default is LOCATION.
     */
    principalType: PrincipalType;
    /**
     * Inform the installation systems that the associated app can only be
     * installed once within a user's account.
     */
    singleInstance: boolean;
    restrictionTier?: number;
}
export interface ConfigurationRequest {
    appId: string;
    locationId: string;
    installedAppType: InstalledAppType;
    configurationStatus: InstallConfigurationStatus;
    config: {
        [name: string]: ConfigEntry[];
    };
}
export interface InstalledAppConfiguration {
    installedAppId: string;
    configurationId: string;
    configurationStatus: InstallConfigurationStatus;
    createdDate: string;
    lastUpdatedDate: string;
    config: {
        [name: string]: ConfigEntry;
    };
}
export interface InstalledAppConfigItem {
    installedAppId: string;
    configurationId: string;
    configurationStatus: InstallConfigurationStatus;
    createdDate: string;
    lastUpdatedDate: string;
}
export interface InstalledAppResponse {
    installedApp: InstalledApp;
    configurationDetail: InstalledAppConfiguration;
}
export interface TokenInformation {
    installedAppId: string;
    locationId: string;
    scope: string[];
}
export interface InstalledAppUpdateRequest {
    displayName: string;
}
export interface ConfigurationUpdateRequest {
    config: {
        [name: string]: ConfigEntry[];
    };
}
export interface ConfigurationPatchRequest {
    removals: string[];
    upserts: {
        [name: string]: ConfigEntry[];
    };
}
export interface ConfigurationItemsList {
    items: InstalledAppConfigItem[];
    _links?: {
        next?: {
            href: string;
        };
        previous?: {
            href: string;
        };
    };
}
export declare enum DashboardLifecycleEventType {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    DELETE = "DELETE"
}
export interface SmartAppEvent {
    name: string;
    attributes: {
        [name: string]: string;
    };
}
export interface SmartAppDashboardEvent {
    cardId: string;
    lifecycle: DashboardLifecycleEventType;
}
export interface InstalledAppEvents {
    smartAppEvents?: SmartAppEvent[];
    smartAppDashboardEvents?: SmartAppDashboardEvent[];
}
export declare enum InstalledAppMessageType {
    PREDEFINED = "PREDEFINED",
    ADHOC = "ADHOC"
}
export interface PredefinedMessage {
    messageTemplateKey: string;
    defaultVariables: {
        [name: string]: string;
    };
    localeVariables: [
        {
            localeTag: string;
            variables: {
                [name: string]: string;
            };
        }
    ];
}
export interface AdhocMessage {
    fallbackLocale: string;
    defaultVariables: {
        [name: string]: string;
    };
    templates: [
        {
            localeTag: string;
            template: string;
            variables: {
                [name: string]: string;
            };
        }
    ];
}
export interface InstalledAppMessage {
    messageGroupKey: string;
    messageType: InstalledAppMessageType;
    predefinedMessage?: PredefinedMessage;
    adhocMessage?: AdhocMessage;
}
export interface InstalledAppListOptions {
    locationId?: string | string[];
    installedAppStatus?: InstalledAppStatus | InstalledAppStatus[];
    installedAppType?: InstalledAppType | InstalledAppType[];
    appId?: string | string[];
    modeId?: string | string[];
    deviceId?: string | string[];
    max?: number;
    page?: number;
}
export interface ConfigurationListOptions {
    configurationStatus?: InstallConfigurationStatus;
    max?: number;
    page?: number;
}
export declare class InstalledAppsEndpoint extends Endpoint {
    constructor(config: EndpointClientConfig);
    /**
     * Returns a list of installed app instances matching the query options or all instances accessible by the principal
     * (i.e. user) if no options are specified.
     *
     * @param options query options, locationId, installedAppStatus, installedAppType, deviceId. These can
     * be single values or arrays.
     */
    list(options?: InstalledAppListOptions): Promise<InstalledApp[]>;
    /**
     * Returns the specified installed app definition
     * @param id UUID of the installed app
     */
    get(id?: string): Promise<InstalledApp>;
    /**
     * Returns the token info for an installed app principal
     */
    tokenInfo(): Promise<TokenInformation>;
    /**
     * Creates an installed app instance
     * @param data configuration data for the app instance
     */
    create(data: ConfigurationRequest): Promise<InstalledAppResponse>;
    /**
     * Updates the display name of an installled app instance
     * @param id UUID of the installed app
     * @param data request containing the display name
     */
    update(id: string, data: InstalledAppUpdateRequest): Promise<InstalledApp>;
    /**
     * List configurations of an installed app instance
     * @param id UUID of the installed app
     * @param options including the desired configuration status
     */
    listConfigurations(id: string, options?: ConfigurationListOptions): Promise<InstalledAppConfigItem[]>;
    /**
     * Returns a specific installed app configuration
     * @param id UUID of the installed app
     * @param configurationId UUID of the configuration
     */
    getConfiguration(id: string, configurationId: string): Promise<InstalledAppConfiguration>;
    /**
     * Returns the most recent configuration, authorized or not
     * @param id The installedAppId
     */
    getLatestConfiguration(id: string): Promise<InstalledAppConfiguration | undefined>;
    /**
     * Returns the current authorized configuration, or undefined if there is no authorized configuration
     * @param id UUID of the installed app
     */
    getAuthorizedConfiguration(id: string): Promise<InstalledAppConfiguration | undefined>;
    /**
     * Returns the current authorized configuration, or the latest configuration of any status if none are authorized
     * @param id UUID of the installed app
     */
    getCurrentConfiguration(id: string): Promise<InstalledAppConfiguration | undefined>;
    /**
     * Updates an Installed App configuration. Call implicitly operates on the latest 'STAGED' configuration.
     * @param id UUID of the installed app
     * @param data the new configuration
     */
    updateConfiguration(id: string, data: ConfigurationUpdateRequest): Promise<InstalledAppConfiguration>;
    /**
     * Allows specific configuration keys to be removed / upserted from any configuration that may already exist.
     * This operation is only supported on install configurations in status of 'STAGED'. Useful for iteratively
     * configuring an installed app.
     * @param id UUID of the installed app
     * @param configurationId UUID of the configuration
     * @param data requests containing upserts and removals of configuration items
     */
    patchConfiguration(id: string, configurationId: string, data: ConfigurationPatchRequest): Promise<InstalledAppConfiguration>;
    /**
     * Deletes an installed app instance. If the client is configured with an installedApp ID this value can be
     * omitted.
     * @param id UUID of the installed app
     */
    delete(id?: string): Promise<Status>;
    /**
     * Create events for an installed app. Note that this method is here in support of future functionality not yet
     * available in the SmartThings platform.
     * @param data object contain lists of events
     * @param id UUID of the installed app. This value does not need to be specified if the client is configured with
     * an installed app ID
     */
    createEvent(data: InstalledAppEvents, id?: string): Promise<Status>;
    /**
     * Send a message to a message group. Note that this method is here in support of future functionality not yet
     * available in the SmartThings platform.
     * @param data the message
     * @param id UUID of the installed app. This value does not need to be specified if the client is configured with
     * an installed app ID
     */
    sendMessage(data: InstalledAppMessage, id?: string): Promise<Status>;
}
//# sourceMappingURL=installedapps.d.ts.map