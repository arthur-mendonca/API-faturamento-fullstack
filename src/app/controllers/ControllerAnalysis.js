const Analysis = require("../models/Analysis");
const Occurrence = require("../models/Ocurrence");

module.exports = {
  async store(req, res) {
    try {
      const { id } = req.params;
      // const { description } = req.body;
      const file = req.file;

      // await req.files.file[0];

      console.log(req.body, "req.body+++++++++++");
      console.log(file, "FILE+++++++++++");

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
        description: "descrição",
      });

      await analysis.save();

      return res.status(201).json(analysis);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },
};
