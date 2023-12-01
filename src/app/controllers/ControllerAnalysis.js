const Analysis = require("../models/Analysis");
const Occurrence = require("../models/Ocurrence");

module.exports = {
  async store(req, res) {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: "No file provided" });
      }

      const occurrence = await Occurrence.findByPk(id);

      if (!occurrence) {
        return res.status(400).json({ error: "Occurrence not found" });
      }

      const analysis = new Analysis({
        filename: file.filename,
        occurrence_id: id,
        description: description,
      });

      await analysis.save();

      return res.status(201).json(analysis);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },

  async index(req, res) {
    try {
      const analyses = await Analysis.findAll();
      return res.status(200).json(analyses);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },

  allAnalysisFromOccurrence: async (req, res) => {
    try {
      const { id } = req.params;
      const occurrence = await Occurrence.findByPk(id, {
        include: { association: "analysis" },
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

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const analysis = await Analysis.findByPk(id);
      if (!analysis) {
        return res.status(404).json({ error: "Analysis not found" });
      }
      return res.status(200).json(analysis);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const file = req.file;
      const analysis = await Analysis.findByPk(id);

      if (!analysis) {
        return res.status(404).json({ error: "Analysis not found" });
      }

      const updatedData = {
        description: description ? description : analysis.description,
        filename: file ? file.filename : analysis.filename,
      };

      await analysis.update(updatedData);

      return res.status(200).json(analysis);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const analysis = await Analysis.findByPk(id);

      if (!analysis) {
        return res.status(404).json({ error: "Analysis not found" });
      }

      await analysis.destroy();

      return res.status(200).json({ message: "Analysis deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },
};