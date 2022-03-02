const router = require("express").Router();
const lojaValidation = require("../../../controllers/validacoes/lojaValidation");
const auth = require("../../auth");
const LojaController = require("../../../controllers/LojaController");

const lojaController = new LojaController();

router.get("/", lojaController.index); // tested
router.get("/:id", lojaController.show); // tested

router.post("/", auth.required, lojaController.store); // tested
router.put("/:id", auth.required, lojaValidation, lojaController.update);
router.delete("/:id", auth.required, lojaValidation, lojaController.remove);

module.exports = router;