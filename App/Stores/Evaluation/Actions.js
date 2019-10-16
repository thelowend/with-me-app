import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchTest: ['ageCategory'],
  fetchTestLoading: null,
  fetchTestSuccess: ['test'],
  fetchTestFailure: ['errorMessage'],
  sendEvaluation: ['id', 'evaluation'],
  sendEvaluationSuccess: [],
  sendEvaluationFailure: ['errorMessage'],
})

export const EvaluationTypes = Types
export default Creators
