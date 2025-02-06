const Gadget = require("../models/gadget");
const generateCode = require("../utils/generateCode");

exports.getGadgets = async (req, res) => {
  try {
    console.log("GET API hit");
    const gadgets = await Gadget.findAll();
    const gadgetsWithProbability = gadgets.map((gadget) => ({
      ...gadget.dataValues,
      successProbability: `${Math.floor(Math.random() * 100)}%`,
    }));
    res.json(gadgetsWithProbability);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addGadget = async (req, res) => {
  try {
    console.log("POST API hit");
    const { name } = req.body;
    const newGadget = await Gadget.create({ name });
    res.status(201).json(newGadget);
  } catch (error) {
    res.status(400).json({ error: "Failed to add gadget" });
  }
};

exports.updateGadget = async (req, res) => {
  try {
    console.log("UPDATE API hit");
    const { id } = req.params;
    const updated = await Gadget.update(req.body, { where: { id } });
    if (updated[0]) return res.json({ message: "Gadget updated" });
    res.status(404).json({ error: "Gadget not found" });
  } catch (error) {
    res.status(400).json({ error: "Update failed" });
  }
};

exports.deleteGadget = async (req, res) => {
  try {
    console.log("DELETE API hit");
    const { id } = req.params;
    const gadget = await Gadget.findByPk(id);
    if (!gadget) return res.status(404).json({ error: "Gadget not found" });

    gadget.status = "Decommissioned";
    gadget.decommissionedAt = new Date();
    await gadget.save();

    res.json({ message: "Gadget decommissioned" });
  } catch (error) {
    res.status(400).json({ error: "Deletion failed" });
  }
};

exports.selfDestructGadget = async (req, res) => {
  try {
    console.log("SELF-DESTRUCT API hit");
    const { id } = req.params;
    const confirmationCode = generateCode();
    res.json({ message: `Enter this code to confirm: ${confirmationCode}` });
  } catch (error) {
    res.status(400).json({ error: "Self-destruct failed" });
  }
};
