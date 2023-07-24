import {Request, Response} from "express";
import houseService from "../service/houseService";
import HouseService from "../service/houseService";
class HouseController {
    private houseService;

    constructor() {
        this.houseService = houseService;
    }

    findAll = async (req: Request, res: Response) => {
        let listHouse = await this.houseService.getAll();
        res.json(listHouse);
    }
    add = async (req: Request, res: Response) => {
        let listHouse = await this.houseService.add(req.body);
        res.json(listHouse);
    }
    delete =async (req: Request, res: Response) => {
        await this.houseService.delete(req.params.id);
        res.json('xoá thành công');
    }
    update = async (req: Request, res: Response) => {
        let result = await this.houseService.update(req.params.id, req.body);
        res.json(result)
    }
    find = async (req,res)=>{
        let result = await  this.houseService.find(req.query);
        res.json(result)
    }
    orderByPrice = async (req,res)=>{
        let result = await  this.houseService.orderByPrice();
        res.json(result)
    }
}
export default new HouseController();




