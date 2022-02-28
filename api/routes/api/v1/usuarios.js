const router = require("express").Router();
const auth = require("../../auth");
const UserController = require("../../../controllers/UsuarioController");

const usuarioController = new UserController();

router.post("/login", usuarioController.login); // tested
router.post("/registrar", usuarioController.store); // tested
router.put("/", auth.required, usuarioController.update); // tested
router.delete("/", auth.required, usuarioController.remove); // tested

router.get("/recuperar-senha", usuarioController.showRecovery); // tested
router.post("/recuperar-senha", usuarioController.createRecovery); // tested
router.get("/senha-recuperada", usuarioController.showCompleteRecovery); // tested
router.post("/senha-recuperada", usuarioController.completeRecovery); // tested

router.get("/", auth.required, usuarioController.index); // tested
router.get("/:id", auth.required, usuarioController.show); // tested

module.exports = router;