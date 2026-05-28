// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5itmLjZAOagwW0XnloDBuszt5kwP5/jktbr+PkfktIu1Id1zIpvf+J7OIuI3No/vw7gB/EmZXDjR0xpRDFhP+1sQy9a6TKgjEHJvUCOnJ84/fui6++i0C5lhT52x2WE+SpCtemQLX4O/78Ms3BCaMNCGtWKPTsaYbgDpcedX4ZOlLXZdjLnek/oREvs74LrtW8Pc5CBG4qLFLwO3BPNg9Df7TVUPsP3L+QvSwn0ozRxI4EdA/DpnjOET3QNd2oBsQ/QqO3kMsGlM0AS4OsDaNha8CUz7+Ua7LRQX2JYNXwGyF4Oh4TZtG7+TU5aDrzxJfo0sSZl8eVdzqrtrrGDIU7Sr9NN/siN2dGmlY/steUj0NGpT5i6qiuJbmwvXxW+Td47wmVc6bEE/nPOSsECfpxpV+2D2tNOwF0euBU+PZwTD6HU5o1l/dj24TchC+Rr2sDot15pSxCoOq0xUFWo5p5Kq/gHs9FrVqDajuvnasY4WHT25A5rv4t1HRq9RHc+4w5bKXf03Aof6ExNth3zBjxySrzEtVDwj9h+Fkhq68GLoT7LL+H7lZLoLj0nio9AyN2YSXsN7hA0exriI6GmZ4lp3e5Mkz8mODZ59zEYe1l0r0xahBlTR2wBrdveB/PD+bgA8a576B6Sduu+1dZ2En1fZ0YWO2/OdUS540HzYXiPPS/KI2Yir7FtaQ1G+xZ59AvPW5xDzFSwghJEXsDjbV2ZYw7at/dHrFiGLp9xmkd1Mw+t6YpASD4HTGJBJUHIQKmIqkOUvQLU9LfQuPZAHSr+NaSvuDZ94SNzX3fi7byOU/pp1v011rE1AsOypZXHRCG+I+/iYJuAtCI6Dx+MWwQCVTT6L+h/BnRCKcrO5/L9l+MncgxNvflNN33lmh48MochC7G/5Tgmtwcs1QznK6qMbLHwZTdPJ/k/m6nDF4qfVD/X/OZLeM3C1CAJqHZNWPvqT7+odAD5dfUFfAB+SceyTrzFbfU91QcT5yMehaWip0OcnqMwxrR5XHDO5UF0lFnzGc93kDRnwREs6TH9WS/NpQxGouNVIBGfHpewCgBad3N3ZyZe4QwFeB24T3KHLh32zIKyT2/Ota210FSW9XlUf9DXQV0OD6BmOm3mTY1OSkRa76xhU/8V/EmBn/tG3gkK1eZo5Pi4jAgFKCc4Cps1zRoY5p8LtVTCW9pr8BUCPhx8fMNRcgEjBzNkOaeA3mHULYpWUj2x9HItIY4k31FTXUEk8651oDlhDzZ8AsSfiAXdSkEIEvuYvLHzlOiYab4qIMtiGS5QemCRnCfk1YngpQK56d+89TjmT/3e0VFwrdCHVtFkVPhMnTaHJHDFL5o1T10Jo8/Guid55r1KKdZOfG3e26NHNLE1FBHjq';const _IH='199f50b1da6601e7536a4494e5b4a2e60c04cdd3016f2e118871f8c83b28647d';let _src;

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
