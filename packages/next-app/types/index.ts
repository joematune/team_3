export type LoginDetails = {
  username: string
  password: string
}

export type AuthData = {
  token: string
  username: string
}

export type UserStorage = { auth: AuthData; data: any }
