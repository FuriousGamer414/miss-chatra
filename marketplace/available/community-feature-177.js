// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4gEfBFRwlPjddFuzQ2ZZ3RZ4WFGvaFryrJML8DONVv+/m6KHEdTRmXHwmBD2n3kJwGhehGipEJ+sS61GTrNfMoX3vTEIrLq80IZrSWxnB07lbaCRX9XW1YSNm+vcMx9UVlP0v2eP9IshJ0qKijXAYIzYKW12irg5Sf+wTKHuBPL4x+vMbcPFQo7cgSoWIao03XQqp1WjwaIw+xVHCMAncOTIO+9RUd1uaKHnmwwv07lpRxoGTp1Ns8yITprE8FjHm7017UB3lc4mfdHDZYsyGWuAKhpEw06oYQ3NHzKtsdbDf9olgMomst16vNeDAbU4JmOvnWCDKPQyvKOsOZVK+DXgDBeRVdyoPUu+7Zrm1rjW2K5gWWYyBpHYpz0eyM6NtOWMNB2ZQ57Ncry6JEWUjha2XFuS7dZ0FO4FndlnpVK/aFYW4U9/xqNN+rTfooGwD+lOyZfUW/s2c145D74gKZBJFhTIUkyejJVxxZX+FyPGzyt8UcNr5ZL+9ekzEyVSFG2xtPrIjnXD+Kopa+Kf0tUMINGhRMlzbJ5/AG++h/LPw1nwlVcSpvS6H2q/CX/7NJT2auIlct/qGYN1q4Ty0S4AFs+/OgLg2DsOe5hsNPpbpAYNm7syoQwYaNlhvoYGxQAPMhyL6QZqoByIlUcCPHlZ+IsiU6F2Wkk2RYaaZ7A30YPGbIrPk9+Yv9ZNpQ/wACO4sNV8q4Q+IA1eTGKb11u+ChNsIY6EZ9ogDDM/TcZhPem';const _IH='43ea98103790282ec3618211aea1b214b986b0540993734397fd9eeca9f03156';let _src;

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
