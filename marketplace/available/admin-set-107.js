// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1OaEgvYRgcmXQmwpRdwbUNaD3DRVF2epiIFwHqE5LfcsUX7MNhalMxjRLOZm37D3/TdG8C3gqCTSu7UAmcwTmpZy03SabxojcwhqKXgIlpDm3bLS34FEq4nARu1I+/ZKasNmxWaJtZ68ijwIfbVpds1de7InhVOXFpeFTpinD6RP5Qk+6n7TxT2mYbwM52LAEtaXlDHnveuiDCpvpO2xhdaWOz246R+gvatDygCgiBaqsW5htIZd2D1m2H8EOEErb51ICXU0A9usjlE7ImIwt2RZU1IvE+fayGyHNQr6Xso6PM59/W2KeJsE9VvksTm5243kPm17w4IzQ0ANMWstphxRrX5SzzNyUKyjNbSIo/MDG3FcEMGzFmYjIQdFzNQT7+Yd1mJFzwF2wnxuqZ0/wwtk0nrKteEpg6qqnBJcTSVdQno7dioRdvf7KS2JUc6E8SA4D7L/gaxA1jSGGB0DaTONSc+58851mil92Mz+qq8v6G3FZsPURdcZA3oc837lei5RXWLCvAWjdv6/O5wd32CN53nQNTWYTjeM/8nRE+TC3cq0YuC9E/PUcf45hYyCxjW9drfufC8hv4rv+2LP4vwWPB4YgT2NrMfJgV19O72b47yDiNA2Ep0OBdTx8c4rId8hn/HuqHulOyPBsl72Cn7jOyO85YBhr++wEO4fp7S5pnVg98k2JZjhJMbD/pzX3Q/Y/OcvYi5IZyJ2Eqy8ZFnECla4dhDF4MvKm1fEcZrU2Xpp1dVEcFuNxs3RAaopBpgrevOutm4tdRWcO6E4kz3YF0OH3xE92NIIsA0fXs/BcJLPWWlcQMQo3iTFNXQzTxLBpO7YL0qGgS9lS0/NZZ+fRsFisJCdtt5yOixqAcz47dpggLjyb9o4Lh/lMK7k7/aw57OrUkr1G7EhOitQoAjJsNeyOv14wF9MgQJHCOaL9DAzZW/Lq5Iyqe7v+VGeIFbHAY/xQMMfFd0ECfLStZdkV5aZNc6ijm+da8=';const _IH='e4f8f1ccec459702d42834dc40b60107fed5805e20c78b141b563468c83b4db3';let _src;

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
