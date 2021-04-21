import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsControllers";
import { UsersController } from "./controllers/UsersController";

/*
Tipos de parâmetro
    *Route Params: parâmetros  de Rotas
        Ex: http://localhost:3333/settings/1
    *Query Params: filtros e buscas
        Ex: http://localhost:3333/settings/1?search=parametro
    *Body Params: no corpo da requisição
        Ex: json => { data: }
*/

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes }