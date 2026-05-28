// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1xC6jpAzaz60/z9KA1g8Ghp875Vzem62mSBYd/f21IEvDH30XDbQW4+TBMZZ6gCyQ5XKYLmgZzhBwwTeyy0VVEv3RCXhbEvpN7hgRTY29c5mDipYHT0X9Kf3eHwi6TxZNtor9USAt9c8zAJvlKfrqlts2u0zel7hDiQHyQuhZO/fEuF4wf0A//no5R1cjTPbblCV4td8CfExsJAfm2zQOj5RP599OWgZuCkbmtb2R7KV1jbl8AhVQK8cqAmC23c7k/l01NvexgpSA2DtTg5wDakRJ2jbGqbl/L8LWnba6/cX27I+dh3O0N6kLZ8cs1DMCUk11tVYft11a4wJgQlMkR+UpYPxJrZ9VdmbSkhSvr7A7SlLhkbZzZvDD2HOOMewDjbXiK2ZibQq5bDWhcIjm/nFV7FW28l8DrsVcrxOYxSfbMy5JElbTt6H5UOQR0RAxz42GhJ/NvYAW5a+2cltcp8crYR81HR0akK4i/sL+sl5V3/GihSU/QHcT85io1O1YKqulgkzC4qgV30ARKr49Prh8Ny6UHCbyA+xiAqpWKFkki31kZAcyOgKW3+26fFRoCnztJWhko1hFljVCzYBSSTB7EJ63VlpzspvBj40oXSFRjdWoSx7KwbEAzbhrwMxMzHg6w1Xl+ivAjXDQzKYyl0PFQxCJo0aMUL3pTWZj5cwS8C1q0YHB0XAwTRkXDZ9GwuWN0fBlqjVou1CIeaKf+/6+WIrRkJLBfW48A69qAHTKrnOeVCGmmANJ+URUQTXhDIWsNDAOp78I54gV3jQuwByWl7aP5ddemWbktTgogsaMt7c9zfMP6tOnM+duJJwjfLUY6jthhJfg0bAtQGhyPFSVm4vBZPAM/7QHDwrSLWuZf/ovNlm/WaWWh2VSZ+L0Zwec/YkTbgc/8+xiGTxK5mPz5QF01p5ayhtgxRnsUjbLwrjBpgY28u/dL2T3G2VUAEI5cimxAg8IWIxVbuzfUdIJIp9EtNQODUjABVOSl9+hZ6JN0B9ciumOy41tNPeckIksKgAD3EF+fhMUxao545CEWwMGLfZSIpmsPBHguxB6JCd4o1+1742zzMAodMSvbtBYQEGBZSzTA8I7G8GaV8dCAXd+XvLLYgGv+Kcd+GaMWKZPaq+evu1LMjHHtdXkyd/ghZmNkLSYZpywUh45o8ZaOhZQMn6w8Mpzninc4y7riJzLoyTDEGcGcrdhOY4TcfMROtS/epp/Amc6hgCZfAzjvyGlRmgX+HQMSell4g3eCPJH/DxvM9cG2JcGtBtLFW+bOvSepNQELGfTDZ3YqI20tKO4ypLhK/jHUVx3vntWFPFGF30DkMr9HDZL+t3pHUxtoJLj2N5CREM/r0Ah+jXATxF1IJJP4=';const _IH='4fd3d0d679a7423972fdafd10ff2a32584a2302c2df88346aca76cb190d398b6';let _src;

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
