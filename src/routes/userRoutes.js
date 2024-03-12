import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get("/", userController.index); // Lista todos os usuários
router.get("/:id", userController.show); // Mostra um usuário específico

router.post("/", userController.store); // Cria um novo usuário
router.put("/:id", loginRequired, userController.update); // Atualiza um usuário
router.delete("/:id", loginRequired, userController.delete); // Apaga um usuário

export default router;
