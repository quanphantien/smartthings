import { Endpoint } from '../endpoint';
import { EndpointClientConfig } from '../endpoint-client';
import { LocaleReference, Status } from '../types';
import { CapabilityReference, PreferenceType } from './devices';
export interface DeviceComponentRequest {
    id?: string;
    capabilities?: CapabilityReference[];
    categories?: string[];
}
export interface DeviceComponent extends DeviceComponentRequest {
    /**
     * UTF-8 label for the component. This value is generated and dependent on the locale of the request
     */
    label?: string;
}
export declare enum DeviceProfileStatus {
    DEVELOPMENT = "DEVELOPMENT",
    PUBLISHED = "PUBLISHED"
}
export interface DeviceProfilePreferenceDefinition {
    minimum?: number;
    maximum?: number;
    minLength?: number;
    maxLength?: number;
    default: any;
    stringType?: 'text' | 'password' | 'paragraph';
    options?: {
        [key: string]: string;
    };
}
export interface DeviceProfilePreferenceCore {
    title: string;
    description?: string;
    required?: boolean;
    preferenceType: PreferenceType;
}
export interface DeviceProfilePreferenceRequest extends DeviceProfilePreferenceCore {
    explicit?: boolean;
    definition: DeviceProfilePreferenceDefinition;
    preferenceId?: string;
}
export interface DeviceProfileUpdateRequest {
    /**
     * must have between 1 and 20 components
     */
    components?: DeviceComponentRequest[];
    metadata?: {
        [key: string]: string;
    };
    preferences?: DeviceProfilePreferenceRequest[];
}
export interface DeviceProfileCreateRequest extends DeviceProfileUpdateRequest {
    name?: string;
}
export type DeviceProfileRequest = DeviceProfileCreateRequest;
export interface DeviceProfilePreference extends DeviceProfilePreferenceCore {
    id?: string;
}
export interface DeviceProfile extends DeviceProfileCreateRequest {
    id: string;
    name: string;
    components: DeviceComponent[];
    metadata?: {
        [key: string]: string;
    };
    status: DeviceProfileStatus;
}
export interface ComponentTranslations {
    /**
     * Short UTF-8 text used when displaying the component.
     */
    label: string;
    /**
     * UTF-8 text describing the component.
     */
    description?: string;
}
export interface DeviceProfileTranslations {
    tag: string;
    /**
     * A map of component ID to it's translations.
     */
    components?: {
        [key: string]: ComponentTranslations;
    };
}
export declare class DeviceProfilesEndpoint extends Endpoint {
    constructor(config: EndpointClientConfig);
    /**
     * List all the device profiles belonging to the principal (i.e. user)
     */
    list(): Promise<DeviceProfile[]>;
    /**
     * Get the definition of a specific device profile
     * @param id UUID of the device profile
     */
    get(id: string): Promise<DeviceProfile>;
    /**
     * Delete a device profile
     * @param id UUID of the device profile
     */
    delete(id: string): Promise<Status>;
    /**
     * Create a device profile
     * @param data device profile definition
     */
    create(data: DeviceProfileCreateRequest): Promise<DeviceProfile>;
    /**
     * Update a device profile
     * @param id UUID of the device profile
     * @param data the new device profile definition
     */
    update(id: string, data: DeviceProfileUpdateRequest): Promise<DeviceProfile>;
    /**
     * Update the status of a device profile
     * @param id UUID of the device profile
     * @param deviceProfileStatus new device profile status
     */
    updateStatus(id: string, deviceProfileStatus: DeviceProfileStatus): Promise<DeviceProfile>;
    /**
     * Returns a list of the locales supported by the device profile
     * @param id UUID of the device profile
     */
    listLocales(id: string): Promise<LocaleReference[]>;
    /**
     * Retrieve the translations for the specified locale
     * @param id UUID of the device profile
     * @param tag locale tag, e.g. 'en', 'es', or 'ko'
     */
    getTranslations(id: string, tag: string): Promise<DeviceProfileTranslations>;
    /**
     * Create or update the translations for a device profile
     * @param id UUID of the device profile
     * @param data translations
     */
    upsertTranslations(id: string, data: DeviceProfileTranslations): Promise<DeviceProfileTranslations>;
    /**
     * Retrieve the translations for the specified locale
     * @param id UUID of the device profile
     * @param tag locale tag, e.g. 'en', 'es', or 'ko'
     */
    deleteTranslations(id: string, tag: string): Promise<Status>;
}
//# sourceMappingURL=deviceprofiles.d.ts.map