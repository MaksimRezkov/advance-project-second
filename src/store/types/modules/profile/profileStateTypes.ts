export interface IProfileSchema {
  profileData: {
    id: number
    firstname: string
    lastname: string
    age: number
    country: string
    city: string
    avatar: string
  } | null
  isLoading: boolean
  error: string | null
}
