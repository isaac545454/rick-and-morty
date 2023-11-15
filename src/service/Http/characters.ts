import { ResponseData } from '../../types/ResponseData'
import { ResultsCharacters } from '../../types/character'
import { api } from '../client'

export const characters = async (): Promise<ResponseData<ResultsCharacters>> => {
	return (await api.get('/character?page=1')).data
}
