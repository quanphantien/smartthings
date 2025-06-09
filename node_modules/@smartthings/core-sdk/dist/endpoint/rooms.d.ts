import { Endpoint } from '../endpoint';
import { EndpointClientConfig } from '../endpoint-client';
import { Status } from '../types';
import { Device } from './devices';
export declare class RoomRequest {
    /**
     * A name given for the room (eg. Living Room)
     */
    name?: string;
}
export declare class Room extends RoomRequest {
    /**
     * The ID of the parent location.
     */
    locationId?: string;
    /**
     * The ID of the room.
     */
    roomId?: string;
}
export declare class RoomsEndpoint extends Endpoint {
    constructor(config: EndpointClientConfig);
    /**
     * List the rooms in a location
     * @param locationId UUID of the location
     */
    list(locationId?: string): Promise<Room[]>;
    /**
     * Get a specific room in a location
     * @param id UUID of the room
     * @param locationId UUID of the location. If the client is configured with a location ID this parameter
     * can be omitted
     */
    get(id: string, locationId?: string): Promise<Room>;
    /**
     * Create a room in a location
     * @param data request containing the room name
     * @param locationId  UUID of the location. If the client is configured with a location ID this parameter
     * can be omitted
     */
    create(data: RoomRequest, locationId?: string): Promise<Room>;
    /**
     * Update a room
     * @param id UUID of the room
     * @param data request containing the name of the room
     * @param locationId UUID of the location. If the client is configured with a location ID this parameter
     * can be omitted
     */
    update(id: string, data: RoomRequest, locationId?: string): Promise<Room>;
    /**
     * Delete a room from a location
     * @param id UUID of the room
     * @param locationId UUID of the location. If the client is configured with a location ID this parameter
     * can be omitted
     */
    delete(id: string, locationId?: string): Promise<Status>;
    /**
     * Returns a list of all the devices in a room
     * @param id UUID of the room
     * @param locationId UUID of the location. If the client is configured with a location ID this parameter
     * can be omitted
     */
    listDevices(id: string, locationId?: string): Promise<Device[]>;
}
//# sourceMappingURL=rooms.d.ts.map