import { useQuery } from '@tanstack/react-query'
import { characters } from '../service/Http/characters'
import { ResultsCharacters } from '../types/character'
import { ResponseData } from '../types/ResponseData'

export const useQueryCharacters = (page: number) => {
	return useQuery<ResponseData<ResultsCharacters>>({
		queryKey: ['characters', page],
		queryFn: () => characters(page),
	})
}
