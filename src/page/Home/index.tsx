import { Suspense, lazy, useState } from 'react'
import { useQueryCharacters } from '../../query/useQueryCharacters'
import { Box, Spinner } from '@chakra-ui/react'
import Skeleton from '../../components/Skeleton'
const CardLazy = lazy(() => import('../../components/Card').then(module => ({ default: module.Card })))

export const Home = () => {
	const [page, setPage] = useState(1)
	const { data, isError, isLoading } = useQueryCharacters(page)

	if (isLoading) return <Spinner size="xl" color="red" />

	return (
		<Box bg="#B0C4DE" pt="4rem">
			<Box maxW="1200px" mx="auto" px="1rem" pb="4rem">
				<Suspense fallback={<Skeleton repetition={6} />}>
					{data?.results.map(item => (
						<CardLazy {...item} key={item.id} />
					))}
				</Suspense>
			</Box>
		</Box>
	)
}
