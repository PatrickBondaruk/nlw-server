import express from 'express';
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController';

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const routes = express.Router();


interface Scheduleitem{
    week_day:number;
    from:string;
    to:string;
}


routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.get('/connections', connectionsController.index);

routes.post('/connections', connectionsController.create)


export default routes;

