const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Gadget = sequelize.define("Gadget", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM(
      "Available",
      "Deployed",
      "Destroyed",
      "Decommissioned"
    ),
    defaultValue: "Available",
  },
  decommissionedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

Gadget.sync().then(() => console.log("Gadget table is created")).catch((err)=> console.log("error while creating this tableName",err));


module.exports = Gadget;

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Gadget = sequelize.define("Gadget", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM(
      "Available",
      "Deployed",
      "Destroyed",
      "Decommissioned"
    ),
    defaultValue: "Available",
  },
  decommissionedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

Gadget.sync()
  .then(() => console.log("Gadget table is created"))
  .catch((err) => console.log("error while creating this tableName", err));

module.exports = Gadget;
