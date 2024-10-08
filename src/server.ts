import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import "reflect-metadata";
import "./database/index";
 
const app = express();
app.use(express.json());
app.use(router);
 
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
  
     if (err instanceof Error) {
       return response.status(400).json({
         error: err.message,
       });
     }
 
     return response.status(500).json({
       status: "error",
       message: "Internal Server Error",
     });
   }
)

console.log("Start Server: 3000");  // imprime no console
app.listen(3000);                   // inicia o servidor na porta 3000