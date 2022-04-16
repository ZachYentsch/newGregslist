import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class GamesService {
    async getAllGames() {
        const res = await api.get('api/games')
        logger.log(res.data)
        AppState.games = res.data
    }

    async getGameById(id) {
        const res = await api.get('api/games/' + id)
        logger.log(res.data)
        AppState.activeGame = res.data
    }

    async getMyGames() {
        const res = await api.get('account/games')
        logger.log(res.data)
        AppState.myGames = res.data
    }

    async createGame(newGame) {
        const res = await api.post('api/games', newGame)
        logger.log(res.data)
        return res.data
    }

    async editGame(updatedGame, id) {
        const res = await api.put('api/games/' + id, updatedGame)
        logger.log(res.data)
        AppState.activeGame = res.data
    }

    async removeGame(id) {
        const res = await api.delete('api/games/' + id)
        logger.log('Removed Game', res.data)
        AppState.games = AppState.games.filter(g => g.id != g.id)
    }
}

export const gamesService = new GamesService()