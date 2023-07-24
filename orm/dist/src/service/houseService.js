"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const House_1 = require("../entity/House");
const data_source_1 = require("../data-source");
class HouseService {
    constructor() {
        this.getAll = async () => {
            let house = await this.houseRepository.find();
            return house;
        };
        this.add = async (house) => {
            return await this.houseRepository.save(house);
        };
        this.delete = async (id) => {
            return await this.houseRepository.delete(id);
        };
        this.update = async (id, data) => {
            return await this.houseRepository.update(id, data);
        };
        this.find = async (name) => {
            return await this.houseRepository.find({ where: name });
        };
        this.orderByPrice = async () => {
            return this.houseRepository.find({
                order: { age: "ASC" }
            });
        };
        this.houseRepository = data_source_1.AppDataSource.getRepository(House_1.House);
    }
}
exports.default = new HouseService();
//# sourceMappingURL=houseService.js.map