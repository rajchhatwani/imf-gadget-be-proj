const express = require("express");
const router = express.Router();
const {
  getGadgets,
  addGadget,
  updateGadget,
  deleteGadget,
  selfDestructGadget,
  deleteGadgetForMe,
} = require("../controllers/gadgetController");

router.get("/", getGadgets);
router.post("/", addGadget);
router.patch("/:id", updateGadget);
router.delete("/:id", deleteGadget);
router.post("/:id/self-destruct", selfDestructGadget);
router.delete("/deleteAdmin/:id", deleteGadgetForMe);

module.exports = router;
