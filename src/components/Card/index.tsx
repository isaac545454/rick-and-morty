import { Button, CardBody, CardFooter, Heading, Image, Stack, Text, Card as CardChakra, Box } from '@chakra-ui/react'
import { ResultsCharacters } from '../../types/character'
import { useRef, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

export const Card = ({ image, name, gender }: ResultsCharacters) => {
	const revealRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (revealRef.current) {
			ScrollReveal().reveal(revealRef.current, {
				duration: 1000,
				origin: 'right',
				distance: '-100px',
				easing: 'ease-in-out',
			})
		}
	}, [])

	return (
		<Box ref={revealRef} cursor="pointer">
			<CardChakra
				direction={{ base: 'column', sm: 'row' }}
				maxW="1200px"
				_hover={{ transform: 'scale(1.1)', ml: '-6rem', opacity: 1 }}
				mb="2rem"
				opacity={0.7}
				transition="transform 0.6s"
			>
				<Image objectFit="cover" maxW={{ base: '100%', sm: '200px' }} src={image} alt="Caffe Latte" />

				<Stack>
					<CardBody>
						<Heading size="md">{name}</Heading>

						<Text py="2">{gender}</Text>
					</CardBody>

					<CardFooter>
						<Button variant="solid" colorScheme="blue">
							Detalhes
						</Button>
					</CardFooter>
				</Stack>
			</CardChakra>
		</Box>
	)
}
