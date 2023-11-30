const Occurrence = require("../models/Ocurrence");
const Evidence = require("../models/Evidence");

module.exports = {
  async store(req, res) {
    try {
      const { id } = req.params;
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: "No file provided" });
      }

      const occurrence = await Occurrence.findByPk(id);

      if (!occurrence) {
        return res.status(400).json({ error: "Occurrence not found" });
      }

      const evidence = await Evidence.create({
        filename: file.filename,
        occurrence_id: id,
      });

      return res.status(201).json(evidence);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error.message });
    }
  },

  allEvidencesFromOccurrence: async (req, res) => {
    try {
      const { id } = req.params;
      const occurrence = await Occurrence.findByPk(id, {
        include: { association: "evidences" },
      });
      if (!occurrence) {
        return res.status(404).json({ error: "Occurrence not found" });
      }

      return res.status(200).json(occurrence);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const evidence = await Evidence.findByPk(id);
      if (!evidence) {
        return res.status(404).json({ error: "Evidence not found" });
      }
      return res.status(200).json(evidence);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  getAll: async (req, res) => {
    try {
      const evidences = await Evidence.findAll();

      return res.status(200).json(evidences);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { filename } = req.body;
      const file = req.file;

      const evidence = await Evidence.findByPk(id);
      if (!evidence) {
        return res.status(404).json({ error: "Evidence not found" });
      }

      const updatedFilename = file ? file.filename : filename;
      await evidence.update({ filename: updatedFilename });

      return res.status(200).json(evidence);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const evidence = await Evidence.findByPk(id);
      if (!evidence) {
        return res.status(404).json({ error: "Evidence not found" });
      }
      await evidence.destroy();
      return res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};
