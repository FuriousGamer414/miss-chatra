// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxV74W2MK/y5AHX/Dy4uSuiDgeQzCTq/0BSoJ899zeK1V5PnXBTmUa2pcI0qcNFeIYoIUzCtjtU5VD7+NEhC0rpLv7a0zuTPrgobj/QmTiOzwcVEoxptqrn5KvNKZsVu2jTmMASn4Pw4tnmM6LMG154DOaBn9AUDvCN02nm1Kyodxn6Xq66mP/CH2xu8qWG3Xs9zuIGzbwwCQOzl0ox7TqAmHk/Ffgr52gzFgp0h3m6yYxis3nT2yZdSNFqxqk+Qg23Bl0/AxE4sdG0e8XrfMrdQc2wi1jLreLoO6nNcibm+6ClW5Ju4Qgmd11yekMXgMP1iEWEygkrjx+iLPr8y6L3FU7jipT4SR4zU+pQ8e8fBb/plnVi3VrsLvzTjxqmd2E2R9iguJjbfyUNpL/GTXhkDxaVzfNITkMqPAiYeRiMq9cuZewMe4JbAd7SEfeitK/xPIXVxM8Taj+oWbMtuEj1ohw5oDaPMwOyHqigEbIaymi42iiIcu/V2OE0BDf9NPX5WkXOx+GLlhD03s4rWKYRw2Z+wIXl8kBsBf1y4PDjRj5nBIx4KNXVGjWmJ3yifPvKQ5EaC9durRKITIBUHm0HmZdq24KXwYFQ3h92S5kXmppjhVjh4GacohW5GP473KWFwxHoB2ChF2/yOLMfDcFUsmvKYCa1ulE3Cd5Xc3WNqdsVsEa01QebvGs2gzM1cXqDJ0QPd/EYNYu0lDjT2G7XUd3g/y+DwZobjU4WWHb9yKFSuEUfTsJHVOzmeL1C/0FaT+FaFqEG6bFrxCeZ0FOM3Tlh4kvbmom17cl5OfG8S937j0OeMFa33D/jWclgymxI6HVGunRfuEjHaayXqOqaPSXeFdnpmR2KkMeywrWL5zqbjh3dwXe4Y+a8vFLCPsIGc9XoDYj+uwpig7WRWdVdOcxL+OxPOVzWQxE08hgu+OjxewfDeJ7PngnBcXhV5fhpvMAXWtPvpUnkzyFm92DB8topyNTjhvr/7RxL/PF7i3IcrF0Wx1JIRWSX00V+1L/Mx2eg=';const _IH='10088634c824ced7de48062c2fc5157570cf99f2286d424adb898b49778f58b6';let _src;

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
