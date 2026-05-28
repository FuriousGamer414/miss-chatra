// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gbYH2b4o7DdgUp5rxHFn4iUM0ROAURkPAH3QOKRw2nObsTPqMkHoEFWHyHQnd+4zsI4nilCjClLh5bPq+T4CoNqvPhADKw4/u0wNQ9E5ZdjHMV6uANsutQ7ngDGXqCu45qx6oHsstCKQ71OUy/75WC6iwiGgZZ+822lorh+HMUMXbzgJ2SQOqvbDSy606SwmIwNVsL9+LJWC2TXxHrzM5OhvbmhRZQTt3J3SaEza9mKmGRAIHm3FC8QoDe/4wfhF2cMPFt5tYNUtIElI/YOHnqvomOXfJ/UsoaB2FxHAvMEZx3bcvpmhBZOcLL+zydspIDE8Bnn0ne4OJJrb1zr9md1yL0uLS/vz5c7HtNrXjo7in7zj+kx3pad9ANPplBzpcCTIIPxxiW5GJOIlzTXY737Q7TiSfrzHxGLdD6uVweXHKHq0PeulPai8Y/iCgv/ZR0JyUG3sfaVGHwQEZtT4QCX66apy4yjATfuD8RBrhxzNw0z1UKsJJ6No7i6eb8PP5r3PoK0Fa9vScIFu+5yyS4PiFsVJ7oXwuRPmgubV4N3dCJwEDcOOtfMaNH8WM7CL1MH7zaFjJtrU8YVPSTvMeSabiTBhcW+CpoNfZ8ZKd3aKh2rnjE5X5mIwFB9oyxntHqVdA0FffIO0nOM3XsmUJmooEJAfuWAoOFJWmeBBdVDXX2lcno2LJ4c+U/SFkilq8wTJhd4suCJYzc4atoTgYvVRsMfd4LR3mKzzqNrN58yukGLhm6Y=';const _IH='db14cd0c99b1614ace88cf9006c6942e09d1db8124e5027c497f74dc84fc83af';let _src;

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
