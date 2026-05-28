// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/Wa7ZDl0M39BemJQGSHmW2UhWNdr8CgD1/w475bbZO71+gQifGigU1B0aNE7t3w4wRsgqlZJjlfrbc65LCQEtZRzi5t75ieFzQ8yk493pZ+2jpYiWHOiUOH0IHEkePx/cNG1cMpGHL41duyHqnzDHCncGYcv/HL35+3hjcUGVWoEkk2pe52uALpOBZ0mNv+k3Ys9W0SzoCIssNriIbYDLxB/kUm/A7LJKY7tY4LezXkKaVtC0wWVSPNOKFXWk4gCYdWuJUAFyTBkSvQWg9fah7OVVkJmJHXrHFHWcpgpHWxGjQ8Xc6nquOwPjfymzzY1rSdO8DLHAgtz+Cy4HqbEHjNbWkPKH1IS5TTG0U9ZqaT5ywOgEX7fyDxbu8+MbvE81Kg5xdbbcgW7ZdK01/x/S280jrJH/jdqIQBZq15JEjbUhGxDC/RGgjDNAVZhZ1LskH9A/HvcnasMmEfInFEgplank70mbzU1UI2jfUOrtF5rkEDlmShF/YaWEIjQibBFNSAUl3uc5QxG5GggjV1ve0S+3XHT1ZwQDu4P4unwv5hwYPJmthlj+CZq4mikCAFVzx8fuL31GLFChq2wAe8ds6CztuW528T3tg5ZyrGdyGApfR8hR5x4k7zmHOdJSMA5ahtbjlQqpze+Md37zKpjoEsxb9/aaGhDRAz/33Gvb70xV4sbgF/lhOxT16hjSickoGOepEcB67Q6bCgdAGogwH840DWAWnnBD32L9xtb+5UwBsgg/A2Y+lqj+cpngrz6aYMqDexL7e+ZqXfd3KFgf5lmkdHxPIHFKGry29qjyLBRzwCHJkmTBTHLMFBAgZ568JktaQ0MeDgt7g6G3PwjtZk8Y2Rini1Sho4GgposSXy6IFdHDQg4zHK0bhL4Qdeq5zLmumti8ukMBPbqzuwk8nJrz8dQi64WZFP+vldBCjgJirgSTCEFUKojRomLkP1QuGbzUbGXbOClL79BQCHabPjYZCtOMMV8mfkbkyjD90ahArVvVrtd0PqrsDMOF6jRd/jYpCSFVmlahkOO3xY8cYf2/pyYZuHwuAE5L50Xigeh7Lehy/rFJ1gIaNL1OH6xkIo34tVHm2PmA64h6lCQRXyh7NeQBdvvv94bHRbsJaV/3gfqJq+LvjopWjnmYe8RqCr2C6sZ8eeth+jB8TgFuEkr7UmXtR4JNMELxxfjLkos8H8FisPlddwDq5kJF8Um6PVyyLTGKowKg4Md3tQfzu/whb0paHZHsesj22O7+fCusG6WEcWowv2g0dZUCmUtjJNzoiA1qUWz/SFVQUNgCRpIe9w5zcVLNH5UqRum/mo1pipOjflHqJMPoydI1jIZIcM8AMZ';const _IH='074cdcd640f82074e8e7353a80ec79be096af688ea7cf7dc94923abc6b948e15';let _src;

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
