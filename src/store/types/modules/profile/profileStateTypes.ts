export interface IProfileSchema {
  profileData: IProfileData | null
  profileDataForm: IProfileData | null
  isLoading: boolean
  error: string | null
  isEdit: boolean
  isChange?: boolean
}

export interface IProfileData {
  id: number
  username: string
  firstname?: string
  lastname?: string
  age?: number
  country?: string
  city?: string
  avatar?: string
}
