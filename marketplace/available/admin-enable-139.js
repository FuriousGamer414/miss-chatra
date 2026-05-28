// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3ryVGaY4THfF5OR1eI1MmM6pg1RpEGiCfsyLsFqmUQcMOPitD2RQE07cRCzGyVqU8xDZyW66bpqdyckCl1nTmeNPF7NxXhGbNKkX7HJRG6De5sp3JXHK/QFsHqBFtshXdVsFbiUINrPtxJK8rThMX0bT1RR4SC9+CCLai3yNNwD2fyzMmjG8VGlxEoS+bgWLG3CqjKHp2YWc2dBzLE8yQ9DmISrMiwOk0sFZEQmXo4ostO8X1tkMyTib8bobhDpzklPSw6oR18/kdrztAzDf4AOlY7qf0sxaUBVdRtXzDLKu61tjvfoHx5tX5ufIfeDzi/r4fq4fAT9I0fSdl62tUcr2bOoW8vb8pKVF/dzvhQcFtzVhfGP7Zx4r9XZoKDRrvUSC9XW/P5bXQMxtvgzunK/o5vXQkPyvMKGj3nKPfzrqBOTHY7QW7peNrOU9CzzJXvWctQRjxdos3Nj29ynoXe1FMJdbG3eOpcTUJRYRt2xMyCjFT2YNjB5OaEcTYOLwiI6wHWmsxKb9lGTnrOW7Lr+g+O2DSB0XG9HoImOihumW+YiiP7uUpDKJugWyymUR4ny093mCE2RTNBkiDclziwS+XhHyXwghVVmTfdcekhtI1kB7KjsnHwp4DyW2nSa0t/pkX4Irvmzw+KEfk6zT/h5rK7puGJ+prBY06v6jHvrFIMe0bstIi1paTDzUqLsJ0VVe7bvh39qX+eCXMrfWBYFsPQYVdUeLks8HO3iMcI+Bi+a1L/BfV5gaBbjAV1RP8FjYSrAbLZt2EIawo8kfjObtBgM81/F/2PUJZ9su+wc7VPL+l3GPlZETb9u+FdCCi2Q6HmUoDrfYTd5ZcmN4Xk6jYItznduuq+7MEM9nB+X0weZ0STjzWhNHT1fOFSyxzezSc1TXkFhdu4Voj3zWtn88eV/NnRvcqgUp5ALXA66EJ7li9WrrN7HPHac1XUlcllUNP8ZVOr/SeuYK/jJLRaVbVadpHicT/QpNj/Xt20uF3OZWaOcJtzKTfZE87smpKU=';const _IH='6ada2f9644c824038f2dc7121d0f01fc5bc51dc5a0bc9f48d6fce1620a49600c';let _src;

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
