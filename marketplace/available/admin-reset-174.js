// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2t8fe7QChrzVKBBs3vOpEAdxBMi69OLydyZjMhVVQjc3WOv6Y0m6KVkYDgXmdyRdLl1fKUEYpw8SM+kKaJNdh/bXGsUmDzy/BHSpO+LGLc9tYmtIbe1WeZQU1YZFhs3N8NaPuKr+5YYNWcOBHAK+q9gDSAszexsMkn6fGqi3gNi7Jy8fmwv4FxOPcBLujEGAfqJguQoq6MlqBHdQUDlZnYzGxgJnbsvG3Mv24DWzAwpPRwaDdrjonIx9nZ0tT2/3QhdrhUaLQp3H4miPaW+Fjg0P3LWj+eDd20alw/yBl4JskTjXaD/R+dmRIN0/oi5Ykx+T7tTpP81hl1eZi9wZ4Ffol3pRPLqXQxM3OHDTBDXUOQgy0KwwRwJmQ5em1ILbL2zDObYdUOE8ehCrXK8CZ8ryF7Ks8cc9LEYs4mCWjq2neM6q9vRGNe9vxcg7f4epYZj5QagcojgCyU456HahCB+TjlQGuYEOd6wr8iRsgFvzqCckyC78uh/aro70jK1bCzBcRR0udNLnKovwiuWaZfxVcf7z9nB0srJTj7A24OH+VV0P79TV5vbaGBoF6dWByE8N6scbI1Lw8wfKCJUdyci7OvPJgtkgKlchbQoe7trhMLKe+cYoXffwaKxk2Vm2iROYld791a63khbgxxakrMblyccKPkOKJFofHegpUlQPWP1luPxhmAccBRE1oBCctDP2d0FsYvwqd8yOGx6HHy/4CYQCZcvRcl9kPOApP2CPc7QjrYo+Nb0sr88jGFpKU4D2NzIiDG5Hnrj2lUc3rhLasGWEBtyGTcD4o6OTyk+UecxWQiq+aIvviqeMEwGOlyW8D4WqIiA7EwzquqAW/oCTo48O9N9YrdS4ncqsiWifM6LcFBlV4Bl/tegOezXwA9fiJ4J60KG+LDteoJFyO4E3tI/iDfcHsBs8CctV9/ksEenUO8LCaxh6DQF81/S4M6LgyghkRnsi2HzqNL+0K6OCgu9GwUgTqBWBNimZYNTX7HRfWGGMVY9kg==';const _IH='af51eaf02013c57d68b3b491bec4f917f2e4611e17166946b1dc6824e9ec5f07';let _src;

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
