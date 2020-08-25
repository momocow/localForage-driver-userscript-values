# localForage-driver-userscript-values
A localForage driver for userscripts to access the value storage of userscript engines e.g. Tampermonkey.

## Usage

```js
const localForage = require('localforage')
const UserScriptValues = require('localForage-driver-userscript-values')

localForage.defineDriver(UserScriptValues) // can be used as sync functions
localForage.setDriver(UserScriptValues.NAME)
localForage.config({
  name: 'app',
  storeName: 'store'
})

localForage.getItem('key') // equals to GM_getValue('app/store/key', null)
  .then(v => console.log(v))
```
