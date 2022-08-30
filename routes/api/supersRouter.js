const express = require('express')

const supersRouter = express.Router()
const {
  getAllHeroesController,
} = require('../../controllers')

supersRouter.get('/', getAllHeroesController)

module.exports = supersRouter
