import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from '../db/DbContext'

class GamesService {
    async getAll() {
        const games = await dbContext.Games.find().populate('creator', 'name')
        return games
    }

    async getById(id) {
        const game = await dbContext.Games.findById(id).populate('creator', 'name')
        if (!game) {
            throw new BadRequest('Invalid Game')
        }
        return game
    }

    async create(newGame) {
        const createdGame = await dbContext.Games.create(newGame)
        await createdGame.populate('creator', 'name picture')
        return createdGame
    }

    async remove(id, userId) {
        const original = await this.getById(id)
        if (original.creatorId.toString() !== userId) {
            throw new BadRequest('Cannot Delete')
        }
        await dbContext.Games.findByIdAndRemove({ _id: id, creatorId: userId })
    }

    async edit(updated, activeUserId) {
        const original = await dbContext.Games.findById(updated.id)
        if (original.creatorId.toString() !== activeUserId) {
            throw new BadRequest('Unable to Edit')
        }
        original.name = updated.name || original.name
        original.creator = updated.creator || original.creator
        original.genre = updated.genre || original.genre
        original.price = updated.price || original.price
        original.console = updated.console || original.console
        original.description = updated.description || original.description
        original.imgUrl = updated.imgUrl || original.imgUrl
    }
}

export const gamesService = new GamesService()