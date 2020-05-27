'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {
  async index(req, res) {
    try {
      const { page = 1 } = req.query
      const user = await User.paginate({}, { page, limit: 10 })
      if (user.length === 0) {
        return res.status(200).json({ message: 'Nenhum usuário criado' })
      }
      return res.json(user)
    } catch (e) {
      return res.status(500).json({ message: 'Falha ao listar os usuários' })
    }
  },
  async create(req, res) {
    try {
      const { email } = req.body
      if (await User.findOne({ email })) {
        return res.status(400).json({ message: 'Usuário já cadastrado' })
      }
      const user = await User.create(req.body)
      return res.status(201).json(user)
    } catch (e) {
      return res.status(500).json({ message: 'Falha ao criar usuário' })
    }
  },
  async show(req, res) {
    try {
      const user = await User.findById(req.params.id)
      return res.status(200).json(user)
    } catch (e) {
      return res.status(404).json({ message: 'Usuário não encontrado' })
    }
  },
  async update(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      return res.status(200).json(user)
    } catch (e) {
      return res.status(500).json({ message: 'Falha ao atualizar o registro' })
    }
  },
  async destroy(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id, req.body)
      return res.status(200).json({ message: 'Usuário removido' })
    } catch (e) {
      return res.status(500).json({ message: 'Falha ao ao remover usuário' })
    }
  },
}
