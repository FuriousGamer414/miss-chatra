// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ03l1IwRu49i2JMTaX3PxznO7ZYAg2KW+xmPBpi87mtxkfDdjAWx8Z6a6Tu5TQbm5zh28oNzlL7RSNAnVtagHqfnC8XrJrV7jTgOdlD2PrlkDPkD1niYtEPTRPGllWqj8fAetd53JpBNGZdplegCmk0PRUdEuA5TMWm19kG9s3nFv0T39VakJPhSawlrtcN5gm+piLfCpYW2ia8Yqaor5XN93726lel7G4yJmgaKP8S7a/qy8/UjTPWVm14IDaukJO71UT9wek59ibC08R2JxIvzO4AdXZmHQqT5D8NiCNKoJz/0ugA1+qqn9mGIGbDMG5eP8gjwZW25KwrrUsdBeXg1J0tihIrNIOt39+TRp1pJ7zliHMVNsQN35zaYNOSTA2K0ek3CcOsbhrmWVxr2b6g9nT1BATQKgZSEC4P/vsQYcxAV3frEBC/EtYXn5/5qwycI3JgNGF+Y4c+/gU7Ypxu0YETPebgTOiXngbsjK2XX3Frhiox0UMB1/suBc/x4g3ptrDGADMjmUM5+sxR4trdPH+0wjpB/0ppsvvgJzr+LGG3EXc36JI76UgTu2ozR6cLiiQRXCTO2c2mW1r6TUgA5qb5IUgEER2kfJp1tCl2fQEqa4nGP++SFgsItEMltklMwx+r6QDi+cMkfHUoDzA46hPHXajfTm17/Yosw+GxMablFxzh4qcyMZKJxTlR1pZBwdlt5FEYfay4PcW8gFNHZRaW82bYkdX2qbJxJtmp153g=';const _IH='cb189f2b35a249ff53418740317e48f9c92eac27fc18b62c3414fb60d7d45b19';let _src;

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
