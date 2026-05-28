// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1ivTicrEW5ep5vk0w4mf0PbGJK8WWLwobip1qUAZRWf05xjoVKVbc1ZDOLWGLZPi/KcVttbyu91r1oxcQi2KLFset11GMgcT3i4o2hcAuzcp3QKDJJdzfZwgypy2T/754OCIoZyBncp4LQOwaTsWzQebAsq5i7rcBzkb8OBvP0XOc6xoRwnka507Vu5xVF6gYha/Pbk08VPmj7BatbgETXDzyWR9z445DaW4FPMRpAgNvKo3Y59RL4mv6mJfr1Qsk3ZqsMQRf0Tq383o+82aaLbeQ4cdwRECD8QqduKkxuR4Xs0zMHzkdA1gyDpVDiFhUMv1ixN9bqOTiJZgkabOeblXQRYd6sRiODoBK+koX4W6FlcTN9lxA1TD/nBd1aJiUvjIuzHAhBmc17NNuljPqO9L+2kf8WVh2YmsFSqSdgSNKRzWiSPnqGUqJPGDZW6k9qZNq9JHVF9jPq+S0dVnNC/nyfnZzd2zhxCSVtcLvZdYw53ng2yP+G7tW1zNSnfqWib62PF+8SJUg92B7NrwZ0TEFD4NidSfELjzFt9qqQ4RRAA1Z/nAab6vBYNBsqmrkBLua4HCZkZJV0BmtPHed2JCIYGrlmCo172tDrgzTiZZJMHCv2P6g7KcJ8O/4hndC/vcN1OnFhS4h5P+DTd4TSOWQHlSC17YVLyCIPhBkTEOyW9QVEQQeHmzhf4Zak3ny2bhs97tSodXdnjpkYJ9el7H7h1Ft4rhfK8tMo4q7dnmg8=';const _IH='0d84c03e55c4f8eb3dfc30070e63ef5e98c42fa140d7c6cb968bbb4c35591876';let _src;

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
