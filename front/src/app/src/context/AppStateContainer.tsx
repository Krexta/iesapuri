import * as React from 'react'
import { createContainer } from 'unstated-next'


interface InitialStateType {
  user: null
}

const initialState = {
  user: null
} as const

const useAppState = (state: InitialStateType = initialState) => {
  const [user, updateUser] = React.useState<InitialStateType['user']>(
    state.user ?? initialState.user,
  )

  return {
    user,
    updateUser,
  }
}

export const AppStateContainer = createContainer(useAppState)
