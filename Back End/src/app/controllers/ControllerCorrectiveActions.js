const CorrectiveAction = require("../models/CorrectiveActions");
const Occurrence = require("../models/Ocurrence");

module.exports = {
  async create(req, res) {
    const { name } = req.body;
    const { id } = req.params;

    try {
      const occurrence = await Occurrence.findByPk(id);
      if (!occurrence) {
        return res.status(404).json({ error: "Occurrence not found" });
      }

      const correctiveAction = await CorrectiveAction.create({
        occurrence_id: id,
        name,
      });

      return res.status(201).json(correctiveAction);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async index(req, res) {
    try {
      const correctiveActions = await CorrectiveAction.findAll();
      return res.status(200).json(correctiveActions);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async allCorrectiveActionsFromOccurrence(req, res) {
    try {
      const { id } = req.params;
      const occurrence = await Occurrence.findByPk(id, {
        include: { association: "corrective_action" },
      });
      if (!occurrence) {
        return res.status(404).json({ error: "Occurrence not found" });
      }
      return res.status(200).json(occurrence);
    } catch (error) {
      console.log(error);
    }
  },

  async getOne(req, res) {
    try {
      const correctiveAction = await CorrectiveAction.findByPk(req.params.id);
      if (!correctiveAction) {
        return res.status(404).json({ error: "Corrective action not found" });
      }
      return res.status(200).json(correctiveAction);
    } catch (error) {
      console.log(error);
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const correctiveAction = await CorrectiveAction.findByPk(id);
      if (!correctiveAction) {
        return res.status(404).json({ error: "Corrective action not found" });
      }

      correctiveAction.name = name;
      await correctiveAction.save();

      return res.status(200).json(correctiveAction);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const correctiveAction = await CorrectiveAction.findByPk(id);
      if (!correctiveAction) {
        return res.status(404).json({ error: "Corrective action not found" });
      }

      await correctiveAction.destroy();

      return res.status(204).json({ message: "Corrective action deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};