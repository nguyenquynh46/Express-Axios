import { Request, Response } from "express";
declare class HouseController {
    private houseService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    find: (req: any, res: any) => Promise<void>;
    orderByPrice: (req: any, res: any) => Promise<void>;
}
declare const _default: HouseController;
export default _default;
