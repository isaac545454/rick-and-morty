import { ResponseData } from '../../types/ResponseData'
import { ResultsCharacters } from '../../types/character'
import { api } from '../client'

export const characters = async (page: number): Promise<ResponseData<ResultsCharacters>> => {
	return (await api.get(`/character?page=${page}`)).data
}
