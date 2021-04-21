import express from "express";
import "./database";
import { routes } from "./routes";

/*
Rotas:
    Métodos HTTP:
        *GET: buscas
        *POST: criação
        *PUT: alteração
        *DELETE: deletar
        *PATCH: alterar uma informação específica 
*/

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));

