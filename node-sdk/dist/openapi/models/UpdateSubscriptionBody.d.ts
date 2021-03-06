export declare class UpdateSubscriptionBody {
    'status'?: string;
    'pause_collection'?: boolean;
    'cancel_at'?: number;
    'canceled_at'?: number;
    'price'?: string;
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
