import { useState } from 'react'
import { useQueryCharacters } from '../../query/useQueryCharacters'
import Card from '../../components/Card'
import { Box } from '@chakra-ui/react'

export const Home = () => {
	const [page, setPage] = useState(1)
	const { data, isError, isLoading } = useQueryCharacters(page)

	return (
		<Box maxW="1200px" mx="auto" px="1rem" mb="4rem">
			{data?.results.map(item => (
				<Card key={item.id} {...item} />
			))}
		</Box>
	)
}
