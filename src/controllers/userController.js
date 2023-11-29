const User = require("../models/User");

module.exports = {
  //GET
  async index(req, res) {
    const users = await User.findAll();

    if ((users == null) | (users == ""))
      return res.status(404).json({ message: "User not found" });

    return res.status(200).send({ users });
  },

  //POST
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    return res.status(201).send(user);
  },

  async update(req, res) {
    const { name, email, password } = req.body;
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).send({ message: "User not found" });
    const updatedUser = await User.update(
      { name, email, password },
      { where: { id } }
    );
    return res.status(200).send({
      message: "User updated",
      data: updatedUser,
    });
  },

  async delete(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).send({ message: "User not found" });
    await User.destroy({ where: { id } });
    return res.status(204).send({
      message: "User deleted",
    });
  },
};
