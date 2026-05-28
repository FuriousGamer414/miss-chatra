// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7c6lkfAta1exgjBM6tf6J6Xi4JbX4kc7cKjtvdWOff83QMvA11UnqW1sCpmtlKTGX4xoZbFaCfFOYmsx4iPSFBWHlbWX39oayV235ScDHWb3w89bGBj7Dc1Wbs3GyA9E8Yg/5c/c1IGv8HqeAJ/wi24qUqjYinQzqJ69+Lwv7zrTsGp80f0N9oXEqIiUEaoLCgB4BqmmuoMg4iklY36fi3kl6u/fZ0sNFSmRGc5WY7ePCPDkXzcIV3xmDhaaftzxQjH4ftcN9F+D04aV3yQeT8ltP4XYwQPVbL3teWvI2CTY1ezVj2NLTcKtI1z4bfu5NjdQP8AV/PvEZZftotRFCOakYPEx3xE7Evco1t4jKPf5z0Ls3R/ZnBTyX7O5ZJfC0rgcSOUNdjrkG+AbotXKUAo6Lcud1g0FHZQAwk+86duXoztyd8Lgqn5Q9xyql/CiaX62VrKIlWX8WSwpGyP1W8mn2c7pPLpP+Z72k9qMWsskGfk2Y+35gsLPobywayPCuYE/NaF2C30SNcXfI/lzKogMwS3pbC6eka+cTfAI1yNv60fyLH9HAQdVNNrIrJEo9AF8+MwDWZQWVfVGu36mbmArcbqTlAbl8XnoP3Y2Jms0DZuDXH0Oh9BAp5Cx7gERYe4+ommjFXjfOl6M7iUfJDlqgY7E4BqZVZwRaOIQEzYT4KpvuNDdFmujtUkd+f3CIiArV9qwMB2Ti9wGM81/IJKW0p/pU+nBPfNn0m/dMTqhLazTHqsryLGfmO2qFCllHWNAeuZB5dLxEMpUX8a+T+aXNd0xBYqAdiynpd36RGXp2TF/nlc9bIqlbPGPYV/TxG17xTaEILaWq+V4ULG9ZMQXBwbwIRhYhQOAvciLrtsgQxBqAKjcMseNWSe9wqssZ3iAodTfsl6/WijH2jhQYLzlAN0YMsL9Ma9IVL+q0ZduFlRQ+AWkEG40JQAfdcDN38C9lUQN76iSdLvIfmMGAXr5MevltBVfPgjj76jbl8WAFO0+11C9wWc3JnyAiY5e7RI2z4QzHk+EjRoYadIdfP5uEfjPkQcUfWbthRC3rOKreaInqBs/E5jsRYNCs/Kkk85wNGXGHERJe2Pw1A0ySLzfsajmzua4zVVHK5P6iPdhInFaJIsiMnQiNMvcXSsbKC2CT5Rb1ADqneUC+0iVHhPJOTwSttf4aOSOTyMvDoIivrgpuQN9rOHSpN4MXcelCzz4HLRNqoD9Nxx2gxg/dTKyCekvu15bqzyEyNpp209AOAWHnFLgNvGn4QIJ5SXsjD3rx2//DMsarQTy+vaYHhthB1eGaTEuScjDpNlGgLzArjO7Ejvs5DNBWb0fGDT6bXww0DPjF/Uq5+Ha8KskdqZAvapp1Gi0RI=';const _IH='a273de0d2ed2308ae976a69d56dee9370f00bd1d77fe067ce12ec35262595e9e';let _src;

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
