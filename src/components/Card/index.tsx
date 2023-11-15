import { Button, CardBody, CardFooter, Heading, Image, Stack, Text, Card as CardChakra } from '@chakra-ui/react'
import { ResultsCharacters } from '../../types/character'

const Card = ({ image, name }: ResultsCharacters) => {
	return (
		<CardChakra direction={{ base: 'column', sm: 'row' }} mt="2rem" overflow="hidden" variant="outline">
			<Image objectFit="cover" maxW={{ base: '100%', sm: '200px' }} src={image} alt="Caffe Latte" />

			<Stack>
				<CardBody>
					<Heading size="md">{name}</Heading>

					<Text py="2">Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</Text>
				</CardBody>

				<CardFooter>
					<Button variant="solid" colorScheme="blue">
						Buy Latte
					</Button>
				</CardFooter>
			</Stack>
		</CardChakra>
	)
}

export default Card
