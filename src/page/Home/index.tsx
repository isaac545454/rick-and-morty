import { useQueryCharacters } from '../../query/useQueryCharacters'
import { ResponseData } from '../../types/ResponseData'
import { ResultsCharacters } from '../../types/character'

export const Home = () => {
	const { data, isError, isLoading } = useQueryCharacters()
	console.log(data)

	return <div>aaaaaaaaa</div>
}
