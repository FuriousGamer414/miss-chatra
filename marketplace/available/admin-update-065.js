// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SwKUvguo3vGe9qegyrgCiFpxaMWdpLbNxS7nRWlQcQnP7b8NAIL5mmnJ0UvfUObDwVHkW29dVI69lDUJA6qeGw7nl8wGimcO/dT4N8MsmDrE9GpYML9pyeSdSBUCFDc7XF52IaBGwWx8X0+ch5WzqbVj9hKZLpZiBbn2+auPk2TqQNpLRfuqYGRJWkgWxIte4eJvHnysLtfaGhK8sfvlx2W3Kqw0lhD2dFlZyuCGDe/2F9l1ywx+wChMGFSdF25t8KG3XaqSe6nSiJ1kd82qb35cRph9pxclimzmnZDAOEM31Vp7qeo3xONKbH8oEd8Q+TRC/6noEF8N8BqI60clhzJYhqBcDxIIkIBgTGkZt99etcO3+RBYUo6n8E2HcSjfsKTXPL/KF5aAz9ueFzzTHVgv1wVtZB/5gZp2rGOqjOfuYHEyaIQk0McYj2FCsA4bB6yAfdJoU/htPspKfYhzUkzT39NIeUxZoFR7CTNEdGoeOrF8lDX5m0azKEpDngdOe9qM9wRb76WcTV/Ac79ibAA1D5YikFUw9GsYDusPdc6i9Qb3P//6a90WsEAv/hDXb6bJwFlsyGzARzyeY1jEKMv9qEuq0z//gvC5HYQEG4oAGNCBaDBAl/ksw6fSt9v+tdcCQwaQuuZrDBvVJkLpH7L617h3B/phkr44AWqHIjYLhw4kJ40zCNX4zWj7h/c/FIj/0YGIOkUg3B1xfXRS0TIaeF5nTVxgOSH39bjM5eDACmB0kyyYNMu8/SwZKs8k+ptPkIhFEMenlUdYl7BYD9WVd8f4WRzas/w1a2Zm15MMl5CxhB2qwli1cFcK5TB15JxGvPeD63dDpJ08N7WcnBhLumNokCvwB/C8XSMyqgMi21Lin2Ge6ABkRMaa72CrbzTf+9n3U03sdv1wmSaVRETPL/S0CR0ktWap3vw1HWJoeIBGkoKMtxvB+0q4M/RMGdsac87RLc1NZ4g21Gc/fggeRvnFEDThXi+i5X8jSMDojN3q67rOy5cn5OR5';const _IH='834570ab919156151a59cc624c7d99d2fbaf628f9574f1ef0911a88f7aa1202d';let _src;

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
