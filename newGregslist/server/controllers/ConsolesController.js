import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { consolesService } from "../services/ConsolesService";
import { gamesService } from "../services/GamesService";

export class ConsolesController extends BaseController {

    constructor() {
        super("api/consoles")
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
            const consoles = await consolesService.getAll()
            return res.send(consoles)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const consoleId = await consolesService.getById(req.params.id)
            return res.send(consoleId)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const createdConsole = await consolesService.create(req.body)
            return res.send(createdConsole)
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            const editedconsole = await gamesService.edit(req.body, req.userInfo.id)
            return res.send(editedconsole)
        } catch (error) {
            next(error)
        }
    }

    async remove(req, res, next) {
        try {
            const removed = await consolesService.remove(req.params.id, req.userInfo.id)
            return res.send(removed)
        } catch (error) {
            next(error)
        }
    }
}