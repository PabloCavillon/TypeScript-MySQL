"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const server = server_1.default.init(3000);
server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
});
