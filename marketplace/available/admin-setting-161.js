// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzv+s0EmcdfkM5o4gyMmiUTn7S67giyrn/4pAvZ0LxU4boCYpshWUQKpJhMv7GF1veGqGzTnT+6iYARgGzSYYJoIqD/QtrXHFiCwZ2mDCaGSsGP3EQF2uIp2HsWYHaNdfWBsAMwDsWEaWaVWrUkplnt2WXpO52hLZ7SVQIAC6vrUb33or0PzKOKEn5MWXhaG8ulq7isDzhKJU9MzF/u0QPrSnh6gYdjD80l1YOihWePhRdarz56iCMgiA8PvLEyDnbPfovZBHrNH81d+UyOcGemLDoHvwRSAckTM67eYXA8JhG9SjIsRf5I+/IVfXlEPzn1CIbgTv+hZdzBm+HF0qRlNrl02YVVQ26Mi3hSCwQ+6R1AtOxuF3GaXbkJgfJ9GmB03AN7jUYaHB1Zwd9KarHDwLYl1Al59wbj6+9C8xBEOL/EW4/yraPqmhOPaKG26kZzomQodL8XfHZHGroIjd4oBLa1o6vegLqVHAa3gQb9efRsgMAdZYMcoRXxuPR9CMK1xgVokHk3ZYFXxwBWHi+BPyL0xGUksj0xOYUc61oIvkJ6hlZ94tAUObdrv07U/iivW4z/zxkI3G7Sv6JMjMHPmCLkULhe5wPgu2J8aM6t8CBuQFOvLFfhxskvH3xSCNNxnu5okOE1eCKZhPjljg51cJQHce5BXYjvR0mDcZnzHWRWyGW8W6MJJmBfEFGcjIs1ljmfDQA/i8ScRUdNhUKH9oGiLARiGTPad7+xrOy3QbkoyXV18MJMDiNiugkBOi3SQF/M6pk1vxDI8+v4uF1pyx8Awccvsehaw9bPGOk9ll+i/QCTbvphDuioihtbztx22tOJg0l1piEOrlfpxjSZy3wBr/oSCyuBpDSsiahXxxaCLEhJxRFecBYahPhyOQP8TZcgtmuiNyRMrhe9ct+3OHBFwwhOBJr6Q9AZr3AA5Ky/NFA0Xk7kV+5IkFBfYZ7K00pBgc6AW7rvPhzjJFjje/rZt6OiM/2B0ssFW82boO5KdtYD5flXkzlyHetgTue6aBu6+T5if';const _IH='30d7d725e2e79d56a54f8270c9e403348666d4fd3bc185cb99afe286daa03d6a';let _src;

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
