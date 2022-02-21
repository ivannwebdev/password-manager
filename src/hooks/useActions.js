import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import AllActionCreators from 'store/allActionCreators/allActionCreators'

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(AllActionCreators, dispatch)
}
