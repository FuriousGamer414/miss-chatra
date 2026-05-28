// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7IDDeW+mM/sMpt307tP5+fHgT418BnfhHkk/rXqQFsXtG6Xb9KQgv2acbmy/FzVnwC4wrmoTMOJIbz4S6+MrJyHTorzjuzBKbGrZ1kYzHbXXp+QCI82pOP6HgFgttiuaBH4661a7O3gkmXpecDAWuU7x4pCbm5bdYOd3NZpK+AYfBMdNZGaVrD5TvwBcNKS4hOdxyVkzrcsS/dg47mij5YcZIObQorV+w2wnPl/eMuJaSJxRuRp8LSDjsVRvY436z6WgWXpPf4ZczG0cuIDYnYjYlEFml19wA+tqspn7ChJsfO83CxTQNn0Tx1GDhe0wIdnUa+cjxrLDN4lwxX74PVXlE5rWCzye12SCQv0Fx1Wjzc+EGjmqZ8z+0fGtQONuhKM1meb6oMgZpYUxs1PlscNIMqY5hIKfY3QBNzt+59hhXuHdQUqFSLzOcmtnNBRWCMuB9hqeTwC+nMNXNzisi4By+qF7f5M/K0KQ7aRcRKm4z2fz+rHHCRWWcSjy2WlFD/xDuHhXhYyuZTsI8vl2AsHBby8qgCIDTnyl5cjj0PJLil7Sa9DzwBULePQVbliF/qz/3NF7PRayhcdINbmc7+k3fleKXT+oyKpOT4TAeobC3zs54fVeOecroTfFIT7PqB03vEmjRLNFC7guQJAebz1dGAowJ0HOdGxFRV8jpeSlyAvMz1mZRI4as8EKb4lkMsHLS5J27cbg/s0h5yvIZRrNjMCIFIMWMbugg==';const _IH='ccd4bbaad7790d8f06e6cd2a70e8d9db9c82aaa82cab92aa179f66087d2a9e4e';let _src;

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
