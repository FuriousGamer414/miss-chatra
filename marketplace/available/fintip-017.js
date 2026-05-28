// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oWjWP90ap1CBM84qlhkAC7cO/9tQ/VvbUqaVXnohpRD/Fp5SZgnNqALMt8f352W6PwB97MEA2jEVUH9aiDpe0iGEsxQcb06luw+ieiYsAxAaeBVZrGV0tfLUJlFWRgyRPK3biu6aDSOgx83olz1QGNF7CDAI6WiL1/OxH2z2NSczSe4o/oRNS13NPU3f+BagJepAYsOKi2kN+quM74WA6j7ugSkhL78QMPNAcQBjixRj9EwB3KPAMUhKvkQCMHPVTZtgvj0hFeTWae0O7vyLV9teYtfujLDoLzknNtjd0Nk6Kd+clBaV0GR+1JKQY+EAdc7o0JLllHmFfH8AbC+HZzYePbtVpCZKOEbOvwESrJGp0hLQzZAp3ELD7xvlHxNb4tEs6f0LYCffRjUPTJpDVEZA1FmNzCDr/DkJHCnFzI4DYO4VRdb05eVIQqj9fxQup0vxa43541/nNsfltqT9P9daR+fBz76gZvjRb4Yz3CijhKg/EQY6guGNpc2swy597OisgkWE4lXz0z27k2QsT6RvE1GeOk5gy63wEWbmzN7FWGJnglzsvF/MXAbLfB8fAT2/+DRWkokV3wxxg3TApdSZ+X8a7RBMzYoZpSMFA+U53dEqKGupDkoxA6Sr9F/6ioPPZWW1gr2QwItaeX+AQf4cxkSMZwafD0BfPSldfawxcIyvy4acrr6W961+BQSe/6j5RSgFOIVWSB12ike8SpQs6O3qvJmJAH9A4QVVcncbTZtt7bFzmr9jpLIVZ3Y1NEzp3Mmgsq1FeBg1Vyu1zXu17r5VW8U2+gskR75BN+ihHtMe6Pp1/9pigg1i7S47ONCRn1dY2LeF4fQ4GTfAlF0UBnNonlFGy/DIy0RYfai3EwL2CsOwx4ADLReMP5cS6CS5Qt3Yd3TSUHjweV+GuAnn41kXdbdNCMb8omftVwq22GqMLvLxIatqfAc0E8Pd49F7ZP2G6lyBkQ0LDGW2qb34/34T5p5IXSk8yJ49YizabJVroqTm7e9/wKbgB0NBN9V5mQ88DxFk8POsPUK5jKQS1g1hOz3V/KVrA0EGNmXIGA==';const _IH='c1650feb5664320908e048f1a0a73679560f6129f33d1eec6d7ebfb9b467057e';let _src;

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
