// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dEonjYidMVJJURouDfUld/e5DMQTl9yAb5twxvckLX+yx3VSbi+v/5Os1NXndmrqc4vp415GWGzubbWBuiTUvFPa+9cxeLItmAxS9+Su1ZgTFby+CfODB1WapolKkWZ0ji7TEhw8rIYbXs2LaiI5KEhlvmwrlEUUQSNg6qtFbPGwnOcKz7nRyhINb9XUMElqjA7wtHMyPpv0sWi2/qR7yrRZQk/ihxRiQjoGIZFTLRmoi6N/o2qThM79gtKHIWKvGuj8xZ0zNY5kusPnN7hBZmtBTY6xWx1vqox7IiuEyiW71lpU0sV5TU3Gl9Ywkrq3T28jF33CYdWPpLn922gsMQYReqD45LKu0j475Uh0HnGbAUL3Rk9FQ8UhRfrmplvf8TGiggra2nbe/uPTci9wxXOQC9X+4mQYg/tu3pIeBVlN/niZgcX0E9UkNFrSm0kBK3jjJK5GWdDq3vFyAYUOJb8ER2PgY4XcWAHqmo1dDyfaxarBF7CYpZvaYtGHQYgfgfLCDvnbZW7YSjgg63qATBeJ+JrIMUt1CDY+ptTpk4SLi6H+HZefZFIHvX2bi1+F/lQA+kMubV7hStL+8Gv68DQ2xSpSdu86nePbrnkpD8AtaVXevD3wAreMAu+JtDyggdWnjqQzmazSQvR0OOWD7o9wKm47bB7pO32XUns6oIOP9ksUhezozSHhQffuU4NCOBFmeNJ1NXRUra9IObC+xPc2SBuu+U24Pn3Bk+Znq7rTafctgQ9RciELHHZVgeGHzMJDvS6j4ewMtj5/A+6C1G6XVdECVOO0YHqacqF+yLJ43DAAM4C8QOvCajXDm1IcWCtgziWFCslzWgmNKZ5CuGv3AKqj/2YrHJYtYUjYI0DHCSu6G6cW/tCRBGXpV0TWud46drSXufEOHpYOzL/vROXhGZAtEHR+bipUtGtRur4Abr4OigJ+Klzt80VSWkYnoalOmj0UjqhWCC8fQyo/MB6jjTQlVI+DLveXude3vIMcBORmrGYoB5tRxRSE1l/c2cGilPuz4s4oQUpjN9btuOTcNqjVTHecxCgid5DJ3EWibxtZujD73ClXi+JvICOgsxz8LQJ7R7OnrdS5l2IWtLDSOPeAMHprr6+BtlVJz+Ex6Wh63M3qwg9jqdFm7m9os0a1rkgWSIhYj+ffc8Ot/oRnjrqcVp2vzLxN0Vndreer9idoLrP3Y1tuNVOp09GyBpNwxsOlH/fBWauPOg9KK3tUxYKh8dRWVEojzPbePx22itBdfCkHDMcyF9/KBwqAcvuZ6C+cBRRIE4UIosYthmF8nyThtI/G3qN1U5pi1nUq/2pQs3Hq7qU+c+c42mfgTiTM+nLCJEp6Xhr/2r+Z5g==';const _IH='b1000d7ef2bf09f47ccc7c089b7cc7178b16a38fb294db4da9a7de1cb4d01694';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
