// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cz10g0p2yF9EzMjEvvCGeUq0oztk4nTRKLYBvwdFs+DLe5U15V6seYyWlNYWi2559tXrI12JJ6FPybkifqx4EOL5rnXV8ZgTeSaxH3KrVvCFUbdD8A+02QfDIALebvyodOtJ2nGMHDkqmrEL+btVZ8ky4c91saEVv2tajk85iZ42H6GaDgswR1jJa7Tupjvtw2ifSsPO5hU3LRqedZ9W0BmKNtwVUcPlSYn2hERDCjZxm4r/hIRl6spqb8PBpQwT9TYn5zuV8wpRDEvi4BirHM+6iYgno/13a6TgbeZiTXPyhihy8/xpGQYwdAchyFzz0xcJWIGSPaBmhNF8mXv5O4LBpZ/wJMRKt1eLoexsVEdJnchofr29DGR6Y1xFYckzX25nBBYPa7T5gWdxMHbS42ujmft5HtH93n7wu80Y1gg3hGxOM869TeIo2WcNRFWSqps4UPhl6hsxiucMzmbjaRJhjpzXyhm4VHqhXX4Wd9WlUSdWUmO+M91LuTdcxSXiUkAkv+vVk4nFJbs7MKqW8y/oRLGiQWWnhUsDpHkPJtzjWSO0vUJMeUMNTc365HWVNUjhh7jWq4k2uxbF4HiyuEvZrnigJXW8uZ48FRtNQgyKmJq+NHLa1WuxO8TBWk7iDoTrFitAcxAIrriGJo9LDcRqsV7ETCWu8kjPlAG6YYyMNNxzhTHnEmr7exaocV5/jhxWqTgUFwDouREyC5WOpjXZxgIGjscGsqVhu1zIE1cFRdJY69hgLs4EBPvuoHN7ztu6HAVz47WiFcJPR5FujTA7gN4ZpSJ+vpHY//jBC/xYrBSif0CrQqkIeWGeTRRRFPSdCpqGOob1Rm5syG5HEytiU2Ob+7vLfW8Tbh6rw8RnhMbC7kRl+mdKW0rbF5yQVCG5sTyjw93Ab78MnurBivFUx6mh6us7A3DhGL7GyzjdUPFGb9Bi7o16PlilUAfrivoMS267rlsAm0WqCAQ3uo6LDVjzc40hfPG7wokrJpmCjzuEVLOlyA3e';const _IH='ce5f0e9895a2dacecb399c2005080e8b71bd0d55b66006a7f8f221c3b72b5b5d';let _src;

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
