import {House} from "../entity/House";
import {AppDataSource} from "../data-source";

import {Request, Response} from "express";

class HouseService {
    private houseRepository;

    constructor() {
        this.houseRepository = AppDataSource.getRepository(House);
    }

    getAll = async () => {
        let house= await this.houseRepository.find();
        return house;
    }


    add = async (house) => {
        return await this.houseRepository.save(house)

    }
    delete = async (id) => {
        return await this.houseRepository.delete(id)
    }
    update = async (id, data) => {
        return await this.houseRepository.update(id, data)
    }
    find = async (name) => {
        return await this.houseRepository.find({where: name})
    }
    orderByPrice = async () => {
        return this.houseRepository.find({
            order: {age: "ASC"}
        });
    }
}

export default new HouseService()