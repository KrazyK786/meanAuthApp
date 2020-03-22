export interface Data {
  success: boolean,
  token: string,
  msg: string,
  user: {
    id: number,
    name: string,
    username: string,
    email: string
  }
}
