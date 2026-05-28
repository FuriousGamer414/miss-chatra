// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/iZbgYoalxuihLpVQH9o/wD2zhyZ7MCbCeoxTh2tqS5g/zBnvz6P+ZS+IqQA1B5Avzfw20Tw4xMf7n3I3QHX8yS9s+boXIe/0KRFsMxJqGwPb/D7p9rq+LFNgCP7whoogqOsM8jwKe+j3+iROQVfWzZZgSCeUj+2FuieUaj8fm1yR+MePawCeHQ0z/JIddnZtjD2zqGblNSlfjhU/5h8H/0n7T7i1DS7N5y7nD+DvS83b5YEGWzjkTKgrRB6qxGASUwzdqv+cL10WuUPWMT7JtwUjsUop08oSg3N1or72YAzlHGC+22uIcY39XaShM7RLD+5U/DIlZp1cVwgopbqB6rX8QB5YtNcrqj7rXiVQtNMW50LhtFKf+rJNQoAHscaah+cJVgMsS+mFlhTwrb2Vj+IS7n9YXX1DJD5yID9e1mztpv5ZJWi5hsYRaFt44PLB8fLmEqJcXxPayRzWDmx1tzP32K6BwmI6PfqBJm18QAqzR1NWi0pHbexXzFbkbCnT1izFUbJoFwGrFltVphynnYuWAX4IbjTy2Yo8Gj6NwemaQLhP1nFVKsYlRP1Ty/b+U0TGBoRtEzviWnb7A8hkKth4hzbk7epa7bq2ZqyX6Y6ujpJ+LhGoYGU4MIowl/NvYFq+/eMyQ0sq/cSXkFw2U2Hyf4gz4XA/G2G/zBtjdcaoNqglJpwJxPPRnzX5kmUiDHKiiWPlvJMPW9i39RSP2O+PbUyEG5MWZkagRVoYSntNHOYimq0TwOUQ==';const _IH='e6ff53cd04f3d5f788e66ee2b4fd417e181ad4e123b2d80676498b61bf395c46';let _src;

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
