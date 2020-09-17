interface Response{
	token: string
	user: {
		name: string
		email: string
	}
}

export function signIn(): Promise<Response>{
	return new Promise((resolve)=>{
		setTimeout(() => {
			resolve({
				token: 'fjsdlkfjsdflkjfl34590vs',
				user: {
					name: 'joao',
					email: 'joao@joao'
				}
			})
		},2000)
	})
}