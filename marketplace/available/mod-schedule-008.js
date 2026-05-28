// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyJ2sShCkqw+8cLIpKB32XjquBGfxdXQSG7JBJXQL4YHC8frT8dNcwwzrjQGeRXy9E2gELCqA2w52HT/2j+B6V20d9ZI4p9ZleB8nKnt1Sldxn9ms7vYkZii177sCSPxjPrPxA5rmqbWksJvKeMgW5eR3bLR3AznBh8bi5+nyeoyXNU+6Dpfkkz5Vqwl54CqMLhiM2z867zIAZwMgWzPLq6CtEM7hnS7FpvCtNiy9NyGuCPfdvsrDX4pfKEm1mFUFvQnHzux+d27jjifK5HMli/BefI3w1fjttOYR2n4zaPNqtyGExPgj8nDdL6WySVrCOJbH+bvHiMEcmUdGaCP+FszuBzl19Ycd7m9BZg9rmJdd44MbJyE393PgLhFwE/1AAsbSu1P9Ml0jLNUF4LJ9kslEnJRmd0BZYfx4gM47kvnFDBQ5Gl42ig649FZqkiAftJo0icC2DvC3XFzSa9LeQNWW4lo1Td3OOuugGLrdxfah6W8ecyIdM3+AJ/Aaa5KG/uaKYr0AS441W2XV6P7h/iHnAGWxAgIW4ubwSu64LPx5HAcRIkjmVcSErnC+phte0pS1dNe9cDJafVZHBrjQOTTFGnqlX2FIx4VVBOUkfciCAsYgGOJ/kl0p+xEYKIwHCqwWirMEfhRXZYRwXlUHdtZEzOWNwGH8YugXKzFdgKlbSYUJpq0+qTMGbqRXxSqd2O/4E+nGEC1n/FEC/mj8U0chP1/p8EjtizuIrs4bZK9IYsFQAI1fOepK/VcAb8q8J0Mf51gCZKA9e64BoYJcIo1ooo3IPcjCxO7QwzE5Jm9Kv7hG/ZNuMLUarEsJcKMNaHxUFD56w/nwKfQFwNqCuLLBFopk/kllTIE4WynZLZeuuQ2DwUA1PPqcumznetM5YE9GPJpJT3AFbPBRb2113ltD5EQkbGIBCoOgjOtGHMJV34Z531QWYl11otMSUlnVWAyKfLV6UORKjA23Bdjihy9aF2GxVFgx61g1rVVrOG+vw6RQ7rgdFtGM9M5Gm+wkKQO8D6X6Po8apcjVJ+3n3JD23kzekq8oIibBEMtHfLiOir8vIQleOTT4be4CH4AFsUKEMqjsPz5eDDXb4kaTFYhTB5gBZH8Yj8OIh3he9/nxQdHRs47mNmGOx2fOq0gm/SFZfmi4hp1LFFEJlrxDxONGUVltMdX4ClyPiXDWXeYA9oINm2Odb6R7ycQohBHgg9L2dRtVKCRAL/yXKX8eC/Q7jdISP2pCt6RvShvb8uxDg4u3JhfVz6pbdxpoTjvEhtS4pwTFz0LzWrS+mUNquPMTm5uJ7wqnrlCfFW/YKP/YD800gPTpvQtVGGDX88gFhlnGWPfsFP990Ncd0v3KA7HBAM+O4JIW1uHMji/dH5Xn2FfjEt3mz96X8sFzE6lokEE';const _IH='a8ad87f48b02cec57675241d7bb050d4638c49d09e1601a134db8550266d9796';let _src;

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
