import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class GamesService {
    async getAllGames() {
        const res = await api.get('api/games')
        logger.log(res.data)
        AppState.games
    }

    async getGameById(id) {

    }

    async getMyGames() {

    }

    async createGame() {

    }

    async editGame() {

    }

    async removeGame() {

    }
}

export const gamesService = new GamesService()