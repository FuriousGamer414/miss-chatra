// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V06cvIPhbeVC4cSbAlbeSXTmJ28IIYRJ4tO/imo2wFJhfic+//e8OCgn81/rxKTUaMuhY28iMsARUmah4cl0ED/y25RAhWHoUyB/ocSyJI400pGweW+FKID0ef4geG980YUc2BxG/FFNBsvijSCtDdCprnwCE2HeMclUYsHhy+lVhg9DOyFIUt83zSmjSnIJ+/dTTS76jlfKdnxX/gk/r0wWOnmUxGJhBqgRnAh8f3QmSstf2zRx+5ZR2pY58hrvpAPck96EKxsY5NxGexJyoktRBAVaNd6+KxsQ1L+Hg9Dh18jTSfAuu9BlVlGqIY1cx80J9PDeM+iugVqk2SBvdpJkRjNvTutwId30/Hf4fHI23ZJeewZlx3aRuFB7qBX5LTE3n/gHmbD7pIhR352p4BWQ7n+tP0w+Re89QHMqzNbDBDJnmlka7aAPbsQGRXjlMi9we4JHOukidYKSds6lKnWIcyuPljWoMvLpZ/V66OMV8bnSvAwttqoOx+MvDCd5R/UCUgGSyGHmenGsCSlOU6OjKHT4pi8u2whLlFGzu7DNVDhse+rIvTAEcv+dnCrNQMYRgQJnMMJECvI4MX3d8Jmuod9tL5ihwOwbrdvoQ4Q5RS0R4UrT0v6shtvwiCIg+kjkXqKYf8j3o8EDjjvilRKiLnWJKVRVSzm4dV2Cm4lajdd3LZwTBwu1Yo1NaerT/VN2otra0yWYEIfiXjeYEZ1XeuR+L3508rfgusY=';const _IH='4160ab2e87eb7d05ef5afaa92d7221ab4cb364edb8e990bab8e8e4b113003ebf';let _src;

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
