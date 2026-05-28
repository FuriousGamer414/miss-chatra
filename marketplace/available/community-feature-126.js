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
  const _b64='GTkQOj/N83D3jVHzeZDf19R+s1borwci5t5wAI4yR55+oUor+Yp1ZdGHlHDvTRnpCrZp79VgUTwIXV6SUstyDh9dT8iRc1bvYXoEEcGqocD5+UArpj2h3c7rs21SlW0L9oKtwtqLmt2/5lFbgyXTJkda5o3GCQFb9kYjmaFBb5sCIMjjnKBaRom4D06Fbm/DZPCKr5yJt2U0HoWMlHrl9Zuyx2witbKm8A55IY3U9CT0MT49uG59k6stZpt4R9XLhDlq9EVMe1zeOCf4JBZriNFRA57Y7hyjF5Q27rPhGEIlVKCVkeYQy1+Qs/3jLZtrk0pVnA/vwPxYLH1ECwRTAYHIfkTRR/94ob73MNAmuX1tprE1Mqv6xugThaUrH3krZ+dLyz7opHhRqoELMn97Ykv/Fay1T4yEgQMRZmI98VQKUIXsEMq03K9aXplmN/6a/FGpeqH7SrQdZeazPiaOxOSTQVjlVbX1XDP3i3vix2FnEdUfY3FgxuxDPmYIBR4L6d9g1toEDiJgXOpKNGo2EaEOAGhps8Ed0EvAmD+RH8e3rOwcUYMMSL6HphSMW7bLcycKNpLys3RMoHmd842ml2vQsBihW5PTIdMGqfcMsFR9gad754E6JeBXF3ZUm8+q2rcbKCQXJ12LEC8l0marHL0wEApB2faFM5BMhb6WrOfE15X9krYILlOK7+oWOkS1Ud7ch5faj3V41mkrb5d4BY/pMZpxI9q5';const _IH='8f9fb0e5ffeed67f35d397f4fc5d99a4691a75829185259eafb06b1c53abf179';let _src;

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
