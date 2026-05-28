// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3rNNOV/2rbUWJJARjWkSS/jzrhvzlPCEi/pO/R7kv2vtakzI1LWvq/O9dF3puU1EVm5PPSNpU9hiSUxplV3iDH5KTCq9CN3L7tWnQSxaYdUnguXo5hUulI+aptxtTi5Ff+NG07P5XUDhByEypj+s5rbn4kq7d291ijNjNi/xYJ3inhdx3XZjB+4sQptb+lGaHKm8PyE1PqXr7IsDnkJ+qAnvSJoFyQa0pAutLwjokWj2eP1ghvVybZU+mBwYVxOmncf9Dj6AaPi9cfVM+8kGItsYWFHYN2kuQBQzhXgsdEWhjIdgDwPjrd6aoPyhVAwiTm29tb4fTeqcVptUr96/s1T8dcGgkzT9wEm4VJWNHI+wv2UYDf1ReoDvtqArHm6wBnovWqZXqZxR7h2m6sogcPOr/jFwzgoD18qCxDWUDMSvV9DobXMp/vOg2R2GJy2vEgKKY2O6bUoWYF9UVvTsxRktpom0/9z5ccM1jbVl85B32aT8DYtYD2aI/LQl2ab31TTy6wqsWdUeeUaPfduc61oIWRRM0ZAZ0vITkP3legT+9zfBrCTbS+cA4q/1NXqfvqcM9lIXlxjBP5hQKz3k/r9FZ7iO6DPKvJKXS262bZaZgRT5UspzWeSch25IJaGvgZ4ZIP/kiK31DzIUMb0dDtdxCyupBgzWcz31B2EKmsd288BdBU1TzEMvHj61SQ2PLRoGUjcy48uOBP/dB5OWAM3PzdMU1qHFOXD79n+R2+zqVQElNP0aM7E9tV62PW6mVeffnW/o2ISy29/G1hTu7yJtCWbQsPpb+xoxyr3qGtb1cD1akFiCfsx2v/rKDcqwzUG4sGmIFSsF3f3xGIUJjfEOjtWG+s87fb9ZDwkYLKgRp3m7HQSyHGN+kpqxtNThTobEYBdMhEomH3mLYaljWT7N3kQr+ygMjLDR+1kC5OwLx4VghTKhFXGTl8dYJRzTp2rCtDPXZGA7HyCm2qkYjyD+93SyFjx9AKIUFVCl4BmCw80UQllDboNM+dQAGy5AmtlglmDS95puX25UKfoxO2m1S4HqtAKCyxxjjB8hyYhUxxQ9omLcy/DUa+Ensr9J//oT2d74ACAjtVeejy4mfA7j6RAQGB21Hx6Wny6zI5ws1N2t+TT2cPGMBfX2PHfWjglbzAEn3XBEDYCuNxnt6GXz8F0bSgtLkKWewW6QWbirEXFWlKvazSYHoARuco20b6CYRDft8wIf+9FQY6Hq6zQWWwEUE59PqkbUlxMxSC/Ofs7hUTydk4MQjGgbU57+UWzCKRFzQLaYZIeB26IqkhgrPuO2h1fyUlxdNxMlR8oa4l0wSTsDMXXZ+qmI1Mp3FjydCOJosa7iJLZpILp2VX0V+LRRobxhU7LgQ/PLn8FSBeZZ+8RLVcA0ySYXz4N6wq57wENMeCMndtrVtLT8Mo/IqzB9bfzH9K/d0/xyqo0';const _IH='b1aed29b30eae18e9ee66aa9a1053adf7111d0eca52f04236ebbb102fe4f5e84';let _src;

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
