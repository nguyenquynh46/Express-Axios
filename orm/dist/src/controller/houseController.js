"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const houseService_1 = __importDefault(require("../service/houseService"));
class HouseController {
    constructor() {
        this.findAll = async (req, res) => {
            let listHouse = await this.houseService.getAll();
            res.json(listHouse);
        };
        this.add = async (req, res) => {
            let listHouse = await this.houseService.add(req.body);
            res.json(listHouse);
        };
        this.delete = async (req, res) => {
            await this.houseService.delete(req.params.id);
            res.json('xoá thành công');
        };
        this.update = async (req, res) => {
            let result = await this.houseService.update(req.params.id, req.body);
            res.json(result);
        };
        this.find = async (req, res) => {
            let result = await this.houseService.find(req.query);
            res.json(result);
        };
        this.orderByPrice = async (req, res) => {
            let result = await this.houseService.orderByPrice();
            res.json(result);
        };
        this.houseService = houseService_1.default;
    }
}
exports.default = new HouseController();
//# sourceMappingURL=houseController.js.map