import { Authenticator } from './authenticator';
import { EndpointClientConfig, HttpClientHeaders, SmartThingsURLProvider, WarningFromHeader } from './endpoint-client';
import { Logger } from './logger';
export interface RESTClientConfig {
    logger?: Logger;
    loggingId?: string;
    version?: string;
    headers?: HttpClientHeaders;
    urlProvider?: SmartThingsURLProvider;
    locationId?: string;
    installedAppId?: string;
    warningLogger?: (warnings: WarningFromHeader[] | string) => void | Promise<void>;
}
export declare class RESTClient {
    protected static defaultHeaders: HttpClientHeaders;
    config: EndpointClientConfig;
    constructor(authenticator: Authenticator, config?: RESTClientConfig);
}
//# sourceMappingURL=rest-client.d.ts.map