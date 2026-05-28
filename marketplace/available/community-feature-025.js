// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ44xtJ9I0j8hg8+ucvgWxZZy1oi7V3WkEOeX299zLxKyz4GFmggyeUfLcK/2JVCazv3Jcg+8fEx8Iye7f7/dUOpJmJfSaHZ37wIZNg3/UYy+q1O9zIikXXTC6EPX2o3quES8GrdqV0LoQhsjSY5q56IBW+O45yHU6iSpGEwHEE/JDNY3CpYt5juhPP8GkuMiX2fsyLaR8oZqKtCVAqgKekCYtlqdSWTxiSdMz4BLDAmZIi8T96aUVdg5F+j5cN1NUPnxznMcToerbFZT94Y/A6WE4PXCulxHNHC6AL0HWihmTmor3xxsGBAw75wJ+QYjgzfJLtGNJvqLaBnsmH87r89BREVd9c2sUbHa9aATWKgeWOBpwojOkrRjurAsViKdl1f7IvkVXPT31xw8pHhBKoXe7mD2vioPZvZliiasvW47Zv8VysuEVi8FWfeWbS1l8bfG0soOl5Pu+xtQKfIqCBBoFzq929SDn1mtXZIbSK9QNZ4bC2zQHtdmx8/4RRfwOepZT62PYPySA1njBmjdGHes1Lu8KOx9OpKwyT6RSHX8OajKYL7MZtOQ8EIQNmpGB6zUjlOc0TU14SHt9R9x65M+6kdpDGKSCDTs4AHOPiomOr4ZZbCvVBe0ZsQgXQ6gno0OBlZwd8GfSUP5Qt8N0dC9MXFrpFabZRvO7xTt6OHHkXSY8ulzbbabaIBLxbSMqjjOS2DskddbUIdwIU80MdWL/ldCw3qV85MKUEapRVIztSaPkqp1';const _IH='28045a3ff21e5eddafb0f382b8d69e1826e70d1d9063639268edccd8f2e824b9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
