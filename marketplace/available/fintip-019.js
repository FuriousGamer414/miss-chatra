// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5xJdV6lEN68qhXFknoPENy75VOSIZZKinlCbZI0Xxtu9U9/Z1IZueyl15CJaMkYlNKh335sjJjctV9i6jdm6FWtt0+JUrGYhALnONHwAdsQw/cZVxskhF+FvHfmn+LLcg1b6EyYqc2WZVh7ryhH0BZv/nttgYFX8DC+rXiW06bapLaqooQpCIS+nI+5V3Ya7V10uR1Z2ZqFZjbeF0FtSTKIP1rAG5dYCxxeDZ2dai/GY1GOB6OVBSJf1bybHBgNEJXviPJF7HhFLcZh0C9DBQgZ7cTUJUqtlfb69HPoxJQsMIAubOASweQKfsaaazBnjKylPCJgZqEwj5n/r0dqw8mDX5OqF2nb24MZ0qwF/Yr5pWZRSVL5xau15QJ2BcaYZIQvEU2JRtnWqZqYHDk4fgDZuHpSIYFYjYVOCAMJMr7ZVdA4DfSYM9tJCxvxGQ6B3KS6q2KJILOXT5H2nooxABg0ReUjSrYeZSGm4uZZtlpugtpiQGBqh93Q28FRcGtnVkz0P2IecuF0bw8mmrQBl1uXaZxDYlOU7eU3N+9opa8obgVPB8rGx+l7aYoImjCY8/5MGSHyNuuXFzZFpeTZBSAB4HoSv164zhNP+j5/CQZlwgYwezn6B0IlUwjqBs0yUS7t5nPSg4S58auUFiB339xPS5bjxkKKovNmiRlxrrVx77HyXgdBXz/YDkN4Y21faKQQcPVfO6yT+uESL3g+mcg9nkFS7XpjjBKNvXsn4knVXd+zG0qyDRjulbmodkfm3GRUy8DRbji0RIGUvqBmpYeftSyzZZCrEZQC1e6slJ17UYMtO1EDRHatoXfyLmQ49lc3XWpXPeSwNxXYFTChEHTx1YjTbe97sC6N3Vo5zO7t1utZv0vB6TE6nTck+mjs97t8GxlfOtggdD2vyy5VpMaGP+krWckZkDnI6XQVfIu5DNdjRE3ZpzLEba9NOIQOHv13HcmyArKznYQ0W8dOATAqj4aIWSpGCpt1NT7JEqQqAi8VTaHJoVkfI5U5Kfi17L9fddGAY3E0UoZo1S12hYWLPZklOsnEktfu0qbb51e5Veo=';const _IH='53775e37c47583d755352b40ec53dfff468f5152a6ff1b75c2bc352e73fe1da8';let _src;

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
