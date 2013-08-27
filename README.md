node-dank-cast
==============

Cast values to more specific types with default values if they can't be casted

install
-------

```bash
npm install dank-cast
```

examples
--------

```js
var cast = require('dank-cast');

cast.int('asdf', 0); // 0
cast.int('12345', 0); // 12345
cast.string(null, 'default value); //default value
cast.bool('yes'); //true
cast.float('1234.34); //1234.34
```

license
-------

MIT
