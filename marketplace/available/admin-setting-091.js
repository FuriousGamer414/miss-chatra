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
  const _b64='UUVOQ6gLRD9gC3GZn9txRv+3MUZz5yV/wvFZaqTXREsDQa7XGOvq3QoBkouQJs0fRLt+6Fs+dkgPW+0pG1IvQyparffUqCFBAr0yuf5HuHRXJzRo1t2PRIrWGLi1e9/piDPW845ojVZn3bniN0Tt685hn2Gz4UbddAeDO8AWRp4osqTxScjg2PTqPFtsJJ/QLltbT48r3cxR8cgzsTMmlxqgz1f8bUkTyn7TXVWKpoIAnficMV9HrxBI1s/XPzAO1lEvVv/SWBLDLwm5AAOvXxbvI7vcKjjDrRbua74/K/ZVWWMlxURwtp7f+wHiErbcp9P8LRDM5upVLBrbqBhX6ekbVS9g1fzXq2uNlCJpT5MLtQdhdiU67WhGqaWNAdOqxl+26/t6dXkU7MLBOfopCBgVyllC5OUYKwi0NqopsFJQtKookTkDsY4/T6ONlpZh0HyK99Kv2eYOgVU5UOHuCVt616rwlTnvGpWKDo6WGVzO7NmoY7OfR1WQkgmz7mi+CHVlXwA3ijnqvLPV2UujjBxK5aA6/f290EIcTxqyskyReOIm/OmJ9Pa5lPdFHF5I89Nccm5FvrxXdm7OaW+6l3uBlbJnUNsp+BA8oH6zfs15ok/sJReitJjZvvdm/lPfwlSj6DuZyBup8aPXJPyb8RP7mEQ5Yxk0Wx3QPfAavEKiomZ5zynJv/Zq7P6M9/zFklB132APJASuKeBpj/v4P5tkEkYApIRHXqGZWLr8VdlJoRpNaK4h4ICB//puIJk1FU8OKFovMGfwa0Zab9I7ShNNr3wRD9m8snxeUUwuxDSOZ+shScsVJwj6jonU6EJb1qg7RsjP3iMQ1U3/iTktsjoUVN1VCxXoA3r/sC9i/OZ8Hbc0/XIK/BNanlzGh7+erGR/eW18flrrq3RGppQF7psT1fGNmxHH5mUk6xlVzzNukR3dVgEAcZuIUCOeCqsLi5M3IyE3wp8VUHu40w4ZZNNUvSsm3IShUa6bPG52X0Q86G9cMZ1g7wKsfgEv7QwC2piHRM2N10U=';const _IH='352fb199736662af4b34112071d7fab53992e053c49f5fadae2467c987a91eaa';let _src;

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
