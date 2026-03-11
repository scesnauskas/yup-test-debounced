# Yup Test Debounced

Run [Yup](https://github.com/jquense/yup) test function debounced


## Install

Using npm:
```sh
$ npm install yup-test-debounced
```

Using yarn:
```sh
$ yarn add yup-test-debounced
```


## Usage
TS
```js
import * as yup from 'yup'
import yupTestDebounced from 'yup-test-debounced'

yupTestDebounced(yup)
```

JS
```js
const yup = require('yup')
require('yup-test-debounced')(yup)
```

Schema
```js
const schema = yup.object().shape({
  field: yup.string().test(
    'debounced', 
    'Field validated after 500ms debounce', 
    (value) => value !== null, 
    500
  ),
})
```

## License

This project is open-sourced software licensed under the [MIT license](./LICENSE).