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
  const _b64='UUVOQ/4qmJR5V6VL0T7FZEBRwXiXwIUoIYL6et6L7+BMuFQOlC8H39FNB9t+UYC5k4WCuVRFzryTWAoIK6g1CxFYmtw2J/T9kERFvnaOF2Y65rIbD7zenGrV2hiRSUZaryvmszVjuhDNj/puRkgkiwnNwKb0S5y4xBC/iYeDIO0i8C6f0nyTRNf6BDlhAgxM+Rn5/GCLW/Rk9auy9C8OsgzMfYtRn03ohNqQvL1gGIpDEQoj420lsCivjZQ3xsa+Nzf4uqlrVT6Ph8VwfH2il3LMns/rRA5fSuIixaIhRmxnxitYkyE/nfRkSN7ouSE9QXoG2lQRfaBXdbtvCRnzzXrP0kMjzWiRxQSSffXstsPiZbJTZG4mggo41PkJMN7zwdXspq7w55lJcDTdL9XQGet+Sb+QfPizfs3pZJ35YtYwPG1xwd5Qgu2JwFInh0gM/2l/ELMgOY0hMYi/idFVte9aKy4bo2S5VbACU5IUwmorm2F52EUxYaxXgh0Ji4tlgJynRKEBFJjQfevb1jJykJZ7boc3e8p92OXj+4SmDyO7ath56KDuEbNcBCOumlwsC5YoCYBk6tzEZVSl+SRGDPg0LqfMEraEiP3sAS0QI4n8Sa5YC4Rwb/fXIofB+JhwsouXBlzjABguZ47itwI/v1nlmLHzIyFFxOxlLZdOywGDEURtq7o7r9kARbIsougNKgrwiIkvjcM7H1GZ2LSPef35c+BKn+Ca';const _IH='070b590b9152f749c93b6ee8e95bea1a1ae19d91bff38be7090e73010b1e83fe';let _src;

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
