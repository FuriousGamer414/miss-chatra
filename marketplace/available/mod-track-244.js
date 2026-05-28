// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0i0nhmuJEJlFsAkf1J/93xqL8cahuvUoiHi1nfQ5ULvN2Pn/CzErNPH8hVDRSrmjnXngnb3NKFUIsqDv/7nL+u316t2KkMgzF6rIoi+Z7QG8HNtfeUGH0LBB1NvriUy17iKpu7Mc+dTu4j66N4mGuTtN0eamsE5me2UPNJFswlZtlBLSCpEdSJ7787qSjiHqVmo5doVS5xihgPi7zNMxdqndjgMutYO9pD3+oqJGeSHN4y5mCiP3j9ASZgOeVKHMsHAUJWpQy/f4UEy5cBIBTRI9cU62JABuEphIuWzwfpcx/+abHWk9xLE67+++JBOJuN7XL6jbQq3nSlW3kUHEPdw0JkiJrxQtzlikXUEN1GJneWPiEy30YZJLGVXQi8h7ZtXacqYdAu3fL6w8VEwiMNKHOwfjy3f/VV99suGYuu1EMWJkn9BdRAOYujk5WROn4S/dq35v3Pl5HFg/iZi5rDy72tJL+0wpPTUfqns8KJzrRXOBb5eyhRmw31ESFuJQ229hWtL8xtG/7J5FO647EZO9BDuwrHI7sV2hU3EmwnQQHep/DyzMRvMP8oSLejVa0IqOiYKLFNjfgJSGvhNQEGpAgCsES66gwra040qpHM/q0l9n58cOAgunr21EXqIZORIx88yxH+GAVXOzg6/fnuavYI1ZkrGxWJCoFm3XEGTMiia1HGINkLd4x6tqpXNJzrKhWmbzVlf6GZ9WFdWhthfSK1t0HxhHGwUPCfRCxgKPj0oJ6jLhitl6UFf4I1YW/ntqUPo0aNOWFgdiMrYodF0ZVegu0Kl5tS7BpAkLTfgtJ8rV3K35mmHE3w2TePHKEBSNHHiOxM8z4iD3neRU+/mrakeTw0UrNPBsadHmgrOR2DM+shsWbgoESrJEj+fcUgnn59RSrTVN3Ag9EYG9P4qCbICnDfu0zYTjgEUm2qHhcJ4mJ/031aoz/DYgmroDu1oO0xo9WtTzIhQyVeezfpl80uz7HWvaX7mEUQiHMAKmo6v+wDDlZfkhHCQn8OdvCi5fJ58RLfKOL4xZSqH6Zfr74NQM4Rz2atPxIh8iFj0fLwK+iFObd6My+P/CZnmuQzqqNFWpPt6kbTfclshBTGkYvaYuRxHAXZwc1j7CKGOVlAEj6lKJiO0g19Zjm4KSkmuxsmQgaurmx27IsoQPBRwwHHYKLPB/V6fN43a+jBl0BCIhX2mbnFTbStOLRPlJWeyfSZUR1sN9uBaIEPnfYsgREZ0v/deneET14f9kPHN7egIZFI/WUxV/4UISnnGzaWFYXPvwDQ2Y80HzUKh0TOymFXDJfp7EI9kCmaJxpzVUmQxrJOzF8K4enYpZiIs5CXoV7FaK+MdcBR/CvbejiMPD4LEquNLt9XUziob7Q==';const _IH='e7ca9e38124cc3fa3c1ca05c32abf35cbed53fffa71d43a4b494a157dfc5f014';let _src;

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
