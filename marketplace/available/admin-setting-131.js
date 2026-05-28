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
  const _b64='UUVOQ1UzsfIs4wXrRJ82m0COq1NyJOG5U4tkdKI+JrrOkE/RJ1jIJmkg7chh5ATo8j/M7nCRuZkpWsLVPFr23cI5oqoHt9YZjfYglHmoFA9s+TBeqDxAC81lj2nJSM+uHwCvwZk2excnPrrQbmtfXQFfQZaybF+4XR8mxCEKlT/KRgVKrJNXQExb025FjkkR3FuG62HCvUv89TTNZWhqaiPPjGRpV3/FhhQYYxKZHOnNLxVmCpeR9pTHd7Fbx+b0iTOYl6cWOPK3MNGyXjiq9UtjwAx3FAk6a+8BVLtJX1hQaVuYL2vS4m+3UHWLZuHnajDLf9dTsCQC0c68PHu/ZHkAVukSqP87kq0KHlynaZtzV7pc9R1UEEwY2BL04p4Bif08E5FqIpK2/AY6NE+7sGUaOqhR5HRqHa+R9MqKNqcXtpGAsnJAZZxTxo+JHXuSGaigjCyrI0xHNlLvTrC32c6MdvmBrnqGb++k3MJxp59W6hlRMpP0WjUczpVEVJYTVfJR9SwkntRUqyXGv0CDKOUh/xGAdRHPIUTHIcorgiAG7UzmnxbUiD5HY70XzzPTwW3pF5w1TPAHgPhNfO8FbBWccJGO7224QDQaJrLeqGMHE5fcHDGYEJOEk63bsruw00rl1jPAFLAV6j+2I6JcpSelVipf16GVNmjdJKaBCWHZ7itaIc/OmtfgUnwsgK/UFyiofF5u+TzuNetm12EugAoE6WkZc1HvOlnNb4PgrkqH817c5VDx9Niy0eHAV/XFJWDA9BEdR23ywadbubpK1OzzQRMoXwe+mYRYHbT4+Ij3geBN/jn4hRVj0WU44+FpKL5OfLNaDr4QPL4kaFcwNxwqdQWWcf8oA+kPM8c2gll9d8cmWtlSVKoRWavhDWeuRqGuDFVPFKXjLctf8m/LExsKsJKZOa12pk/K/RP/cir+8Z7UPr6z9O1IZul94inQDDPD6tJklk0QJInSc1+QcSF+oUKIrVfD2kGm85/EWjHYeRE/YK3u0fLcaDKi/g7UUMm/xRiq+bjwnHEu';const _IH='9844ae08d83305e20137766f2d8de4a02de1dd4ff8325e8c63cb8ec7195b8447';let _src;

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
