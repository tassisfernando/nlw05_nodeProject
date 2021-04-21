import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsControllers";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/*
Tipos de parâmetro
    *Route Params: parâmetros  de Rotas
        Ex: http://localhost:3333/settings/1
    *Query Params: filtros e buscas
        Ex: http://localhost:3333/settings/1?search=parametro
    *Body Params: no corpo da requisição
        Ex: json => { data: }
*/

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)

export { routes }