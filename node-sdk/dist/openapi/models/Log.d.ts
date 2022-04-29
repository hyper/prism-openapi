export declare class Log {
    'id': string;
    'created': Date;
    'test': boolean;
    'object': string;
    'api_key': string;
    'body'?: any;
    'headers'?: any;
    'ip': string;
    'method': LogMethodEnum;
    'origin'?: string;
    'query': any;
    'url': string;
    'success': boolean;
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
export declare type LogMethodEnum = "POST" | "PATCH" | "DELETE";
