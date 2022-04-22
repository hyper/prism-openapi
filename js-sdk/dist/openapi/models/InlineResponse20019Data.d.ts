export declare class InlineResponse20019Data {
    'account': string;
    'created'?: string;
    'endpointUrl': string;
    'eventTypes'?: Array<any>;
    'id'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
