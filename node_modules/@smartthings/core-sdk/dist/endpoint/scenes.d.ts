import { Endpoint } from '../endpoint';
import { EndpointClientConfig } from '../endpoint-client';
import { Status } from '../types';
export interface SceneSummary {
    /**
     * The unique identifier of the Scene
     */
    sceneId?: string;
    /**
     * The user-defined name of the Scene
     */
    sceneName?: string;
    /**
     * The name of the icon
     */
    sceneIcon?: string;
    /**
     * The color of the icon
     */
    sceneColor?: string;
    /**
     * Location of the Scene
     */
    locationId?: string;
    /**
     * The unique identifier of the user that created the scene
     */
    createdBy?: string;
    /**
     * The date the scene was created
     */
    createdDate?: Date;
    /**
     * The date the scene was last updated
     */
    lastUpdatedDate?: Date;
    /**
     * The date the scene was last executed
     */
    lastExecutedDate?: Date;
    /**
     * Whether or not this scene can be edited by the logged in user using the version of the app that made the request
     */
    editable?: boolean;
    apiVersion?: string;
}
export interface SceneListOptions {
    locationId?: string[];
    max?: number;
    page?: number;
}
export declare class ScenesEndpoint extends Endpoint {
    constructor(config: EndpointClientConfig);
    /**
     * Returns a list of scenes filterd by the specified options. If a location ID is included in the options or the
     * client has been configured with a location ID, then only the scenes in that location are returned. If there is
     * no locationId configured or specified, then the scenes in all locations accessible to the principal are returned.
     * @param options optional filtering options accepting the location Id
     */
    list(options?: SceneListOptions): Promise<SceneSummary[]>;
    /**
     * Get a specific scene
     * @param id UUID of the scene
     */
    get(id: string): Promise<SceneSummary>;
    /**
     * Execute the actions specified in a scene
     * @param id
     */
    execute(id: string): Promise<Status>;
}
//# sourceMappingURL=scenes.d.ts.map