pacemakerJS
===========

passphrase generation tool

helps protect website for editing

use this to generate a hash to put into a auth file

Run this in CLI as `node pacemaker.js -c`

it will ask for passphrase and output a hash

this is also a lib file so you can use it in your auth file as...

`var passphrase = '9a8s7d98a79s87dasd'`  pregenerated passphrase

`var pacemaker = require("pacemaker")`  require lib

`pacemaker.check('passphrase is working',passphrase)` checking passphrase

if passphrase matches string results are `true` else results are `false`

By Bradley Matusiak bmatusiak@gmail.com - GNU Public Licences