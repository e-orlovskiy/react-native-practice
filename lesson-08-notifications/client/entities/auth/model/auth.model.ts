export interface IAuthResponse {
	access_token: string
	// на самом деле тут больше чем один access_token
}

export interface ILoginRequest {
	email: string
	password: string
}
