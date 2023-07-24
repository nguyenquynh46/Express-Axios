declare class HouseService {
    private houseRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (house: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
    find: (name: any) => Promise<any>;
    orderByPrice: () => Promise<any>;
}
declare const _default: HouseService;
export default _default;
