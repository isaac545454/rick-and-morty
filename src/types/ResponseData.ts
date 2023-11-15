export interface Info {
	count: number
	pages: number
	next: string
	prev?: null
}

export type ResponseData<Results> = {
	info: Info
	results: Results
}
