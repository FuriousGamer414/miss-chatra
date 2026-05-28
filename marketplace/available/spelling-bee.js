// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwnutgYK4j3Ri6I5FQUp9cWV/iWm/Om6Tb5L5PSwnloGvH0MCqmRd4EGg+fUO+HjT/xWysE6E2NOFU7sTIE7+XkPiRgtjHycOkEl8QkQKWoJNjXEsNZU4DGI/gT62UZY+WXcVTjuGDUT88CGtAs+98LiW/N3ysponFXAyTPno82wjBoV8XvxPjWQeulNwK0/C4OmMqBJAffuZ+NARGCKF4Y7T5fBFwRq7F+eXcmH1Iv4QJu1n4Ai5WgjS5iF6uYcaKKXd1NxtD8WCqPIMLYR4hI+0RWZ0bpgFTMcIEKoaA/txa39yupUWDS5nJepzmamKeTMACJsXIc65xItUVb1C8vH1WJTCcqXQeRvF2s6X8PRVf19je9HCgL9mh4atzNbknwQXZ2uJzDNfyPQLFNHxthjHyY8jiU2KK8bbcMhhYjR0fpnxPN4RY526tH9V28UJqNK098PeGLKNekyUojsqPvOmq1SB9wqX0pVIyynFvmL13xkwJLiIuSvpPafKVktQLwhtDLsu1IDpSPsqKIegeg3EAwhjImvvZL/KuQ0Lz3FqE71U8ylGClo3nqjdb1DIQcAYM/AraNlq0fC2yeOBi/bvIx5hOp8mROSGzqeRY0RQs+Fv7usUq+dUiqVzvmAY3+yTpCsxPP610FdoONNtA3dONI/ubl6xLBgTC4C2HFaNVD7DUYCrEdVdraItUwIylVlqo8pfJYuQPdPKP/gM75Vjd0raWfgrzNymRVPA3BhhVCXpH737vWDjrOWlC6gZy4MfmudrMi4t5syj04uGU3P/J9fzZqESLt/oMqoVwX8E7bODZ8ZzQ9tOJJq6g15gJ8C7l+lxa6JW/THCqHsH1WzhJDeQ8FDasrl0j99/UXfIZadENmx2DAIA7CC9T3on5rU2XbJgAWpbhICJcIae8u6iZVvx4mKz0UbhpRkfCjgghy+73paTEnHB3rbN7z8UN8Y8n5okUX6tnF36wI9F674iDTDmn/AuEAiYAjfcvhoknYGLVSq1mA1NKlmGoZr4lNKYk37+pTh1EPiTVZ76RllQkLOFc2u5GR/u/WRcGSIC008njHYD9QwgI5uWk39pQru+419r9pEd8Q+B7jESW1xO0RY0Ymo65YXgxuzF91oWMJV/Y/HpdbEQ2uwT1/9215LArdzZteKfnnnGhI+Xz6Lr3bLnbWI9lF+AyDHP4WGjxDoYa4Hem0RiseFeJZ1gkCcgwAdRHIoqKxnFNxOdvbKLcj935z6bqkRjd7PLNhrmNTY2TvEA+y8G1eKMI6FfGnzJDySfru1ldoGJAzuwhujd+eJ65p/JYiG/3Y8vJpajsUJIyTKxsmhPs1quWlLmdadAYkIBj9Wh//5NqPJiqFBRmaivAulJxewZqZi+LCJtCLASnu1YESQvFGh99z5xEMGRvTlIHxFdGX5jcxupCEI7LtiWk4iWIwoFOSOFtbror9kmyzjqwzvJX5V/70UNiRSSlC5No0I6mUlu21x8clfMDEqiamCrdV+5yY/a7FZtmzvQtrHlXouGchVwL9Zb3oZxLkEDBF8eF1tce1IcuJzr2IMpw6gH9yh2nInstCQq5NOFc9MslnC2hIlmF2wsashjPSIKqfhGfQutHReU7lbCP76ltTJEUZ/31/W9WsKApT7yOTyDS7Ats7XmW5lArO6yp4cBCi4GVO0Tds/3gec+euz27GUkLcYupZ3OPQ5i13pOUE0lO8UX0mELpz4j1uHyoLtTU8lJktQVF2ksklePVVfNnQSLCQDE8RWLpG2KFPrtRjxGW6tBZUeJMBntP5WfooS8LTklPyu02aenefKzr3DFdeUWHAZOI52';const _IH='603a2d12337e10321d35911bfb9cbfb6bf48b411fb4d66be1459275699ede3f1';let _src;

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
