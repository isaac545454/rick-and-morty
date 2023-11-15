import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from '../page/Home'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider>
			<QueryClientProvider client={queryClient}>
				<Home />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>,
)
