//By Bradley Matusiak bmatusiak@gmail.com - GNU Public Licences  - 2012

var hashType = 'sha1';

var isCreate = (process.argv[2] ? true : false);
var crypto = require('crypto');
var shasum = crypto.createHash(hashType);

if(isCreate){
    var rl = require('readline');
    var i = rl.createInterface(process.stdin, process.stdout, null);
    i.question("Please Enter you passphrase: ", function(answer) {
      // TODO: Log the answer in a database
      console.log("generating passgrase");
    
      showHash(makeHash(answer));
      i.close();
      process.stdin.destroy();
    });
}
function showHash(hash){
    console.log("---------------------"+hashType+"------------------------");
    console.log(hash);
    console.log("-------------------------------------------------");
}
function makeHash(string){
    shasum.update(string);
    return shasum.digest('hex');   
}
