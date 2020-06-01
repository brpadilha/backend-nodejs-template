import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const cpfExists = await User.findOne({ where: { cpf: req.body.cpf } });

    if (cpfExists) {
      return res
        .status(400)
        .json({ error: 'User with this CPF already exists' });
    }

    const { id, name, email, manager, balance } = await User.create(req.body);

    return res.json({ id, name, email, manager, balance });
  }

  async index(req, res) {
    const users = await User.findAll({
      where: {
        manager: false,
      },
      attributes: ['id', 'name', 'cpf', 'balance'],
    });
    return res.json(users);
  }

  async filter(req, res) {
    const { id, name, hair_color, sex } = req.query;
    const where = {};
    if (id) where.id = id;
    if (name) where.name = name;
    if (sex) where.sex = sex;
    if (hair_color) where.hair_color = hair_color;

    const data = await User.findAll({
      where,
    });

    return res.status(200).json(data);
  }
}

export default new UserController();
