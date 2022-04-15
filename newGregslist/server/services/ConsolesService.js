import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";

class ConsolesService {
    async getAll() {
        const consoles = await dbContext.Consoles.find().populate('creator', 'name')
        return consoles
    }
    async getById(id) {
        const console = await dbContext.Consoles.findById(id).populate('creator', 'name')
        if (!console) {
            throw new BadRequest('Invalid Console')
        }
        return console
    }

    async create(newConsole) {
        const createdConsole = await dbContext.Consoles.create(newConsole)
        await createdConsole.populate('creator', 'name picture')
        return createdConsole
    }
    async remove(id, userId) {
        const original = await this.getById(id)
        if (original.creatorId.toString() !== userId) {
            throw new BadRequest('Cannot Delete')
        }
        await dbContext.Consoles.findByIdAndRemove({ _id: id, creatorId: userId })
    }

    async edit(updated, activeUserId) {
        const original = await dbContext.Consoles.findById(updated.id)
        if (original.creatorId.toString() !== activeUserId) {
            throw new BadRequest('Unable to Edit')
        }
        original.name = updated.name || original.name
        original.maker = updated.maker || original.maker
        original.price = updated.price || original.price
        original.imgUrl = updated.imgUrl || original.imgUrl
    }
}

export const consolesService = new ConsolesService()