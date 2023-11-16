import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const Skeleton = ({ repetition }: { repetition: number }) => {
	return (
		<>
			{React.Children.toArray(
				Array.from({ length: repetition }, _ => (
					<Box padding="6" boxShadow="lg" bg="white" mb="2rem">
						<SkeletonCircle size="10" />
						<SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
					</Box>
				)),
			)}
		</>
	)
}

export default Skeleton
