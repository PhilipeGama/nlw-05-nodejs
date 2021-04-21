import express, { response } from "express";

import "./database";
import { routes } from "./routes";
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333,() => console.log("Server is running on port 3333"));

/**
 * GET = Buscar
 * POST = Criar
 * PUT = Alteraçãor
 * DELETE = Deletar
 * PATCH = Alterar informações especificas
 */

// app.get("/", (request, response ) => {
//   return response.send("Olá NLW 05");
// })

// app.get("/", (request, response ) => {
//   return response.json({message : "Olá NLW 05",
//   });
// });

// app.post("/",(resquest, response) => {
//   return response.json({message : "Usuário salvo com sucesso"})
// })

// app.post("/users",(resquest, response) => {
//   return response.json({message : "Usuário salvo com sucesso"})
// })



