// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0DLGprK6s/rYeq13JjFDuR9dRtaMkUAtzRHN8FcWyXtXlTU4lQQhMMrfqaCK+kDfmctIPdT8642FDc0NWqQmUFLBUJpkxeRizaoTIBz1Y/DMvB6SdTcsEuzrpK/QlmjQbLn/oTZcYoIf8nHtr6LLwoFpGEToX9eLcsRSOOIzdUx4N8u90JuLGLiqm0ZMmG4sPY9v75qDFbawBjUflUEj0Z8u18YuQr+e3iF+ldGMuUys97IZFr4tviTjbfiKkFV6EoYzqPJPcnucIWC+OvaktGrjZm/qJRtppq8BkD60hk8GNUZHzt649/ydRr4VuR4lcxXWomQa007a7GHqbz0AssnZNSY0b2Cu17gi6El1h9/9gL1pwBe5bQNfZFL432X3U5vrwgzdWkzVORfqPdfNxnSCExAQi9Zkf+o9QuqDHDykb4AL23q3VCSHh0rmveq6/tWdkFF97Xy2b0qsmOJyvhEtITw2jAIPiFI/lxx/GtfQdMtIwKka5UYonPrrkBQkvWqcHVoItJ9LfKgedRPiTzo9ukiTjwdIvs+XeA/qkcjFBuC7tLta/45KCLptCRkK7p5X2GJc1TjBk/K8frlojLm7k5oO5Rx7yTneDX+qUfFAAllgwwCfRKUpd45jOINa2UBsdCriR/GLE6h8TdKxRaIFX6osbLrcg==';const _IH='7d7d90d7319d6ffee64d9ca54c589f8ac6eca6afe2d9664c01dcf0b572c88461';let _src;

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
