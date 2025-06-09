import { Endpoint } from '../endpoint';
import { EndpointClientConfig } from '../endpoint-client';
import { Status } from '../types';
export interface ModeRequest {
    /**
     * A name provided by the User. Unique per location, updatable.
     */
    label?: string;
}
export interface Mode extends ModeRequest {
    /**
     *
     * Globally unique id for the mode.
     */
    id: string;
    /**
     * A name provided when the mode was created. The name is unique per location, and can not be updated.
     */
    name?: string;
}
export declare class ModesEndpoint extends Endpoint {
    constructor(config: EndpointClientConfig);
    /**
     * Returns a list of the modes defined for a location
     * @param locationId UUID of the location. If the client is configured with a locationId this parameter is
     * not necessary.
     */
    list(locationId?: string): Promise<Mode[]>;
    /**
     * Returns a specific mode
     * @param id UUID of the mode
     * @param locationId UUID of the location. If the client is configured with a locationId this parameter is
     * not necessary.
     */
    get(id: string, locationId?: string): Promise<Mode>;
    /**
     * Returns the currently active mode of a location
     * @param locationId UUID of the location. If the client is configured with a locationId this parameter is
     * not necessary.
     */
    getCurrent(locationId?: string): Promise<Mode>;
    /**
     * Sets the currently active mode of a location
     * @param id UUID of the mode
     * @param locationId UUID of the location. If the client is configured with a locationId this parameter is
     * not necessary.
     */
    setCurrent(id: string, locationId?: string): Promise<Mode>;
    /**
     * Create a new mode in a location
     * @param data definition specifying the name of the new mode
     * @param locationId UUID of the location. If the client is configured with a locationId this parameter is
     * not necessary.
     */
    create(data: ModeRequest, locationId?: string): Promise<Mode>;
    /**
     * Updates the name of a mode
     * @param id UUID of the mode
     * @param data definition specifying the new mode name
     * @param locationId UUID of the location. If the client is configured with a locationId this parameter is
     * not necessary.
     */
    update(id: string, data: ModeRequest, locationId?: string): Promise<Mode>;
    /**
     * Delete a mode
     * @param id UUID of the mode
     * @param locationId UUID of the location. If the client is configured with a locationId this parameter is
     * not necessary.
     */
    delete(id: string, locationId?: string): Promise<Status>;
}
//# sourceMappingURL=modes.d.ts.map