import {Router} from "express";
import HouseController from "../controller/houseController";
import houseController from "../controller/houseController";



const houseRouter = Router();
houseRouter.get('/', houseController.findAll);
houseRouter.post('/', houseController.add);
houseRouter.delete('/:id', houseController.delete);
houseRouter.put('/:id', houseController.update);
houseRouter.get('/search', houseController.find);
houseRouter.get('/order', houseController.orderByPrice);
// houseRouter.post('/', houseController.delete);

export default houseRouter;