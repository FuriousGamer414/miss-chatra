// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2i6xDNftPKcA34d/ooS6nBiHL88dKBJR9aslK12KKnDBB5eqyuoXQvaLGCXTmttPl5DSgPoOnzvwWEknqv8NF5NKuRsJVGIHzmjYBggw7eOwxZe5bzzgihjspLhq4hNGsNfF0Ig/gz+jYsMBtJWG5htUk2D+XOb6Yg4m+jUMioFYDG5i3V4ZFq1MUCWluJbzrUq1H/FBjVaYeXVvwTYm+jK0PsnO7CDjE0eq985rUt4Be8HQfXYNCGkyvHAc82jLAZNyvFOKWqVHFbKgVzdVLphm2lyraupfb2uhFDVJHEUbGTJMee20FQ+P0w8BTGAmErLmS8fYKR6QOA5gZJuqe2NRIPRJU+V07rK8AApmDM/6bWA0ThpPkbFdJ96Od4UfSj0PmLpgOibfLXMPQPM7yq9xA8LscQ2Vqp4S+NZvGnU/LEYpek6o8oVPKCVS/gD01Z4QNafnMRb1UGXibu/rHtuAON+tDcYacD0JAkD9WtJ6w8SD0YHqd8ZgNjLrtbdusw9AXe4XC5AoBwaCMOETnm4F+SceuSgTQmSsdmhAl77NGvo5NnQ/l7ByJy4n8pZowdBQMBBFDjhc4mS4S2P8s6lQMhZn+ZAUWD4rjhLOnU1pS2XRPfL/V4csE+Pysy+KrQdXqfGO45OhUwS2D1dzt1A9y+9WD23oM3B5eWSJoREHIz5zayJqbqLpV0H8+L158BPR6wP7OqPqO/RV/g9k5iavXOFpwDYCLJFOC9KMYCSW1zewlBNUcLMtmSXg+4K2/D/xy2im8afXe7mlC3aDvvWp//oonOPFDw0pvYtDi3txno3IQle3bt0y1ITRphDO/szl9Uk8OLL+qET7sr1USlk672MNnvacPhJJ4qZ4CpPYo4jZVkIt83nmGI3IRjm5+lfYBzdI8ZFVdigKjwvGhGRgcFM3SgIhOPeuyqy38RR7YCeE9rHslyOiYspd271b2NUNoEQluAn1MDaPl2pI97ayur+NhXW6Y07beZNHGMsjcVeRSGg';const _IH='e120b7ab5baa1ee892ca189bfee2b51b0a15420bb07a9412aa79bf8367c44f20';let _src;

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
