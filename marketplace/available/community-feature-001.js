// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+zVtpbtviFM+KpoaM5deLQI3Tu2xdA04DrCEJAfwnxLXVsftavynGLv8zFTN/gSbrCKS/kfPhPiVuQxwrU1P1Jm8ZWfxO7Z9IC3L9sLQnBlU0VV3ySBUjQnEjxFWvQVh2FgkRmfle36MmPpoPrUgvR11gpHbHP3PiW+B0FtaeYagJ9Pb9aX3Q0PmfMcnQouFbIz/GkAXu1YEjVst1IG22vlkODq+zyck7E07y78G0NcZMxpcpKE9mR5WH5fqk5in7VhAUmXedqmfCY15Fej0Ihvgwl7Mf6YB2NOIAy4qsJFYg4fmb0Kpi8bKotB3Yl6aAJKDeMLGhgd8sOhgkdonhR4QN2Y2z8HaPalZEF+kTUwBcggQDQSO/uo4mdT8rRUQnEpOVVAKrfcnpokJB3klUF8GejupPX+IAsmmvl4eiIrevyQj0PsRyEWlkOhWk/GZanCom09GM94WMv3LI5blLk6EzEs6jLcnJu0sJqnGV6UAgSudpNdV/DGN5jYoY58mI0KSTZ1TSelec9RXT6C1kdqqRYulTnYRjS3v/q5h6LUhrARgBHBRQU2cENBlal2T0K8b5zKLW49Du09PrwRV32lRlHmm+Q1rq5nYRgmQEYgTMHY4krdKQKXDziYGtgoNAJVrnTPT4th5i362+TUD6/GQBwE16VgGbqhWiLY11q3gnT7XGq0JJzKtp5azSRBqCE7ugazT7lRuBWcHxyzTeU=';const _IH='3aeb38f943159c5b3d56f2546973423444add912efb8819413041cdc5ffb0aef';let _src;

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
