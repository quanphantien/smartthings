import { Authenticator } from './authenticator';
import { RESTClient, RESTClientConfig } from './rest-client';
import { AppsEndpoint } from './endpoint/apps';
import { CapabilitiesEndpoint } from './endpoint/capabilities';
import { DevicePreferencesEndpoint } from './endpoint/devicepreferences';
import { DeviceProfilesEndpoint } from './endpoint/deviceprofiles';
import { ChannelsEndpoint } from './endpoint/channels';
import { DevicesEndpoint } from './endpoint/devices';
import { DriversEndpoint } from './endpoint/drivers';
import { HistoryEndpoint } from './endpoint/history';
import { HubdevicesEndpoint } from './endpoint/hubdevices';
import { InstalledAppsEndpoint } from './endpoint/installedapps';
import { InvitesSchemaAppEndpoint } from './endpoint/invites-schemaApp';
import { ModesEndpoint } from './endpoint/modes';
import { LocationsEndpoint } from './endpoint/locations';
import { NotificationsEndpoint } from './endpoint/notifications';
import { OrganizationsEndpoint } from './endpoint/organizations';
import { PresentationEndpoint } from './endpoint/presentation';
import { RoomsEndpoint } from './endpoint/rooms';
import { RulesEndpoint } from './endpoint/rules';
import { ScenesEndpoint } from './endpoint/scenes';
import { SubscriptionsEndpoint } from './endpoint/subscriptions';
import { SchedulesEndpoint } from './endpoint/schedules';
import { SchemaEndpoint } from './endpoint/schema';
import { ServicesEndpoint } from './endpoint/services';
import { VirtualDevicesEndpoint } from './endpoint/virtualdevices';
import { SmartThingsURLProvider, HttpClientHeaders } from './endpoint-client';
export declare class SmartThingsClient extends RESTClient {
    readonly apps: AppsEndpoint;
    readonly capabilities: CapabilitiesEndpoint;
    readonly channels: ChannelsEndpoint;
    readonly devicePreferences: DevicePreferencesEndpoint;
    readonly deviceProfiles: DeviceProfilesEndpoint;
    readonly devices: DevicesEndpoint;
    readonly drivers: DriversEndpoint;
    readonly history: HistoryEndpoint;
    readonly hubdevices: HubdevicesEndpoint;
    readonly installedApps: InstalledAppsEndpoint;
    readonly invitesSchema: InvitesSchemaAppEndpoint;
    readonly locations: LocationsEndpoint;
    readonly modes: ModesEndpoint;
    readonly notifications: NotificationsEndpoint;
    readonly organizations: OrganizationsEndpoint;
    readonly presentation: PresentationEndpoint;
    readonly rooms: RoomsEndpoint;
    readonly rules: RulesEndpoint;
    readonly scenes: ScenesEndpoint;
    readonly subscriptions: SubscriptionsEndpoint;
    readonly schedules: SchedulesEndpoint;
    readonly schema: SchemaEndpoint;
    readonly services: ServicesEndpoint;
    readonly virtualDevices: VirtualDevicesEndpoint;
    constructor(authenticator: Authenticator, config?: RESTClientConfig);
    setLocation(id: string): SmartThingsClient;
    /**
     * @param headers http headers to be merged with existing client headers
     */
    clone(headers?: HttpClientHeaders): SmartThingsClient;
}
export declare class SmartThingsOAuthClient {
    private clientId;
    private clientSecret;
    private redirectUri;
    private authURL;
    constructor(clientId: string, clientSecret: string, redirectUri: string, urlProvider?: SmartThingsURLProvider);
    redeemCode(authCode: string): Promise<any>;
}
//# sourceMappingURL=st-client.d.ts.map