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
  const _b64='UUVOQ5eY5oIYhkq+/4Mv7pz9KSGmt8CwzMPF2d2woLAJy2va/vQiLcrbxfBz3dkzbTWuPsWGwDlOcAVb7Otyh2C4EY6CFtDTx/6+HAL+6XDtLY0zOMUTZ7bp2aZFQ7CEj5nn9AFyz9jLhc/whAd7jzMYohbQaK1H3qGDqEDe8XTj6gKpc2tDpiODuOVkG4VpIplNR3QmSOEYTr7fuBPuBrrLUOgf3mQBDTjNYAdwVWm8gX7u6GkH0I83jM32BG7G0ufA0d+YEq6sp+V6xGLofhu5ZG2ZafcxXlPRf17/ZxF/1rujf1ZMWx7Fj1qSPsgcjS8281PooZ2pVyOuQXLkknyPEW3ghjJ+ydwmgEc3Ym/IckhjsvQvTyrtdpcYOA+pIOvQWx5H0Zt4vbocwhJflmBzbEXwmf55DByPdVrgHmtzMH6Uyt3PkMTs4PwApesuFhm2bjJzb2AxouWSymaaAn86TaCRdCp+5t193SGxQKsPftZNqYGZ33Y5NiINVs0f53C7juaxj5jn3Y/Kh1GRKJZ+6pPZyUpCGSoRAtTqxdV09WRh+gjE5ge/Wc75lT/I10F1EO8sRCoMOxyzr8kyIVuCzq91OqMaI/VrSS3R8O7oQtEYvfKvlZzLnEMNBwgrWgowBZFU56PKfN3YYhCfrVPmxzlVnyACPHl1dWz+jXHZaAph+xMaLMA9tM7IVMMiCnCJU0xQ24MaZAvH5bdtuGn5Emo2c8fhbA/ag38x8zdfhrY5YSsuwA8o669uP1lh/OjmF+MO+L0i6LgO7PX3CWPslJxsvwU24pd7miOUop3vfmOq+J5m8RhAyKoC0eECTaDSwO2sttl+1ANFNVJJ4LPInY4za8wCZQ0xiP8mqvUDOBLrzfx/3SVHAyA2bSXGEgPmAFpm8DixhpoygqCzopYholmcynkqfqWykU2g8NxsdmR0VqAGLYresR41isBfyV05DLxT/iLe3U3BLqrYyqnWYUyAJQ+nHRNyEHO6zW+aa0rbJ3ZnzjqHy4XtJqEPo3pexrRm89/EZI0NmpsvhJqVOY3ixoIYqcRlo7G5q32srxsFag==';const _IH='e66c02159ad0cbce87b35834ef1cfe45d73406050442aaf97fcb0490c803ea9e';let _src;

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
