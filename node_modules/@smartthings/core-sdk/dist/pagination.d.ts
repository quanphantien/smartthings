import { EndpointClient } from './endpoint-client';
import { Links } from './types';
export interface PagedResult<T> {
    items: T[];
    _links?: Links;
}
export declare class PaginatedListIterator<T> implements AsyncIterator<T> {
    private client;
    private page;
    private index;
    constructor(client: EndpointClient, page: PagedResult<T>);
    next(): Promise<IteratorResult<T>>;
}
export declare class PaginatedList<T> {
    private page;
    private client;
    items: Array<T>;
    constructor(page: PagedResult<T>, client: EndpointClient);
    [Symbol.asyncIterator](): PaginatedListIterator<T>;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): Promise<boolean>;
    previous(): Promise<boolean>;
}
//# sourceMappingURL=pagination.d.ts.map