"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get("/", _UserController2.default.index); // Lista todos os usuários
router.get("/:id", _UserController2.default.show); // Mostra um usuário específico

router.post("/", _UserController2.default.store); // Cria um novo usuário
router.put("/:id", _loginRequired2.default, _UserController2.default.update); // Atualiza um usuário
router.delete("/:id", _loginRequired2.default, _UserController2.default.delete); // Apaga um usuário

exports. default = router;
