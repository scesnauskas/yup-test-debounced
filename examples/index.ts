/* eslint-disable no-console */
import * as yup from 'yup'
import testDebounced from '../src'

testDebounced(yup)

const schema = yup.object({
  field: yup.object().testDebounced(
    'field',
    'Validated after 500ms debounce',
    (value) => {
      return value !== null
    },
    500
  ),
})

schema
  .validate({
    field: null,
  })
  .catch((e) => console.error(e.errors))
