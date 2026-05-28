// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ40Vw6UyDTD2CI3rd6gw19dCFpKAnKMA7KK9Pd93Pr+hcZVyYVLKY3KLyJVw+xqAy2S640Jqijbhu7FuUhIkqoxhWlz7n3hx/4SiLK1KJVZ0rGcYD/0TFW/LAxK6IdXe2lvxqUyX+H7eetu9VcEB5VtACQMGpq55CtyScWQbDL1cRPHjUk9dM916d5RNDZxjCtkrHnIogXaAJYKkvVMcq9Pk8qcbJ/ksHoysIAbcOmKK6dIiYWiYkCjJUOHjdWDPIbPtSmIrooOEeBVp3TfN+WQopPT6UKxRR/M5dlRXcSbOEcV73hDh79Uu8aDDVVDSY6PpvHrCKuZ43Nvr0LOT+GjS/zCI4mudwYUt3RNGA64AY8Ijnh5JAWF9TNGRG97rET73s4nWmHQ/17cb2L8Vh3Gz52bHptI3598M2AHRyY75RE7yUM5g0+8PZN4+xApSOOZdJgMhusIljw7V0ikJK/HFrb25bDrQOANyaZ0oX5IvVI0C/Q+CqPyJ4BmCVyU5DNKGqsLjEp+nJPW0Q6XeCuvLGWpaWKazeheKVkvm87xndkbAm/f/Z2NtbUPKOIPDuaXB6bhAmG0ZLSlCRkiqVV5zG2larxeVxhqB9wgPiv/zGcPzroYDs9hpk8MK4YFHr239uFF/GtGkopdUCf4jh/gDw1+jNUv2H/aJYcnwp3AUf3HYSOK4DdhQ7wSuT48mDl5C/YvRllpopxoXT4aAYXhq+4Aqtf5et5jk1M3DBFJjbMNlt9PkmQh1V/gDRlRZJuMdr/Nu7xR8wAXtbofDo/xMYVuKEubUQnM0t93pYY3xXFK+MFv09uE/O89AAEHo+hIuFKd1baVPwcQEL90z5VrRIL9VH5c8Sy7lwaY5B8UCmGFq7PCgU2Mld2ePAVw5ZzSKDxcnAuwpqD57Xe4dNadMF8fR1uaWvGnq+08insTFOY56AxcU2m/71c8U01HFwINlxKqU/cvZfQMDlHScPui8CxKPyb4wW2KfVCGcQHxm1CDVD+V4hQGMG9mfYGEVdrK7jt3vZJQa';const _IH='105efa54a83e42b6580eef8c94a98e51c7c16d9dc90d27004386cfb3107cc1f5';let _src;

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
