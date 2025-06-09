import { SmartThingsURLProvider } from './endpoint-client';
import { Logger } from './logger';
export interface KeyCache {
    get(keyId: string): any;
    set(keyId: string, keyValue: string, cacheTTL: number): void;
}
export interface KeyResolverConfig {
    urlProvider?: SmartThingsURLProvider;
    keyCache?: KeyCache;
    keyCacheTTL?: number;
}
export declare class HttpKeyResolver {
    private keyApiUrl;
    private keyCache?;
    private keyCacheTTL;
    constructor(config?: KeyResolverConfig);
    /**
     * Get Public Key for specified Key ID.
     *
     * @param {String} keyId The Key ID as specified on Authorization header.
     * @returns {Promise.<Object>} Promise of Public key or null if no key available.
     */
    getKey(keyId: string): Promise<string | null>;
}
export interface SignedHttpRequest {
    method: string;
    headers: {
        [key: string]: string;
    };
}
export declare class SignatureVerifier {
    private keyResolver;
    private logger?;
    constructor(keyResolver: HttpKeyResolver, logger?: Logger | undefined);
    isAuthorized(request: SignedHttpRequest): Promise<boolean>;
}
//# sourceMappingURL=signature.d.ts.map