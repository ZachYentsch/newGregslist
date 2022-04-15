import { Auth0Provider } from "@bcwdev/auth0provider"
import BaseController from "../utils/BaseController"
import { gamesService } from "../services/GamesService"
import e from "express"

export class GamesController extends BaseController {

    constructor() {
        super("api/games")
        this.router
            .get('', this.getAll)
            .get('/:id', this.getById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.remove)
    }

    async getAll(req, res, next) {
        try {
            const games = await gamesService.getAll()
            return res.send(games)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const gamesId = await gamesService.getById(req.params.id)
            return res.send(gamesId)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const createdGame = await gamesService.create(req.body)
            return res.send(createdGame)
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            const editedGame = await gamesService.edit(req.body, req.userInfo.id)
            return res.send(editedGame)
        } catch (error) {
            next(error)
        }
    }

    async remove(req, res, next) {
        try {
            const removed = await gamesService.remove(req.params.id, req.userInfo.id)
            return res.send(removed)
        } catch (error) {
            next(error)
        }
    }
}