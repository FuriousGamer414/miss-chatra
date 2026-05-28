// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxwiqyH9KhkuLcdZd+bMjWZqVk75CchvruFaznc7RkluSEQhEdsbeajdgM8G9LYA6YQPmqQ7iAuFyjPt5t2qP6yuUKVbdQalk1o5+Im9hodrTjtlI97bIi71DY10hPYAhU9/jKxcHiEJHx+vdMPoQ04/ZQAN/PmzGYjhtEAMpZHC8ti1dg8HUtUyxbd5/+r7C/AsfZqrYnChjrhJ42r6G4Cz/InjZcrtnBWPU0p3ACs0CV2HGw+dhO3zwl0QMD6JA2GHHqzTwTLzAEjrB+rsHpzLYaIpF84G47qLt69se3Rl6nX/Y4Avpdo2xwrbCKFWGPtGPAtKqdDxdefZD03sE8+NlNqj+J3owEm0V2eHgxjQt6k2DOYwUBlARTHkyuwdVkMvlRzg3ejhECx7Bz9fiSGooS59rWtm5wQD2I2dbJMgyEw/6ziz894pTwmmjPQ1gxnPsINYd8I29hItQS4SasS+yx+rj8DkdoOjgHGv4zy7Lfmx8fYD4qE8Xlz7fMEtIBaHns0jpZFKnqMSJ5M/GwNXNdu9etIVaS8YyzviAAhZiUUNRBB/bF+vN3e6ViT0A1B/2rQRoswny/FyTwSMdIWAwWz+TG3GGZRLt8HB0dn+12oLnuaq7Q/D9ITxmMzedo+rhkH8LDpbqUimwxF/03K5+O3N7QH+au5+KTIb90WrwTVCzmUGE+oBz/pRLWTYNK0OdjlZ64cHTVJ6KqyE2/QD3cDslzJzPl0ntrxhjRupHdshR6K1x7MILWqfXK36GtkWkBLbJhv8D6BpdwHUoWGQMBOQ1SW6DINRk0iwbgTWwe73LjrakU8ndTmg18iyhrZ9ygxrrgyxqGdQFTzcIIzswBT4wNSW8yVxhkZzSeeSBpW8cVKPL45YvI9iyRasb5mW1BGrPG7MTBtj9XjMI+QGeVcGXEVV1IxvvSU1/Hjj88DHgzULOvXcsH49PTz9/RUi9jgEez8EDWyIwS+aYLCRdzIF/7JznSMSb6LJJ08=';const _IH='60829222c7015a641c17fe2a5c0d1a10ab1cd621064fb0a1582ca12bac66ed9f';let _src;

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
