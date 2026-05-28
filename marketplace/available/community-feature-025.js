// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8aiFG+ZL55vb0Y/enYjMQWcK6tUfNsDUHlmNE+G+/0wPkchjXP93DzMEO3j3jyqljVEsEXAMxiVFmzwCsaQ9lG3sjfJj54rZoAPqEcmm71yqIRtxzNFLQVyefCGunEnM7DewqfHwulCUoAfD4spqbd6tRnRy1mF8zu9nsTViQazm1VZgYeIgRfaqgUXtDb9ioJVEgUWMnUuFot19+52K5ItWpU+jDMSR2iPj8oOIQOdL2i5T0nIyZ4F1fQlBbVpfnWBWNRD+wFYp/R4e/V2EzJcXBK5uJIz46FOao38y/nEaBsu9MxUY/vEjh6NOX6KCutKU/qPK+CXXwL4rPR1w1exhlEvRq+Yq6TxLQfl673avAQKAFCnCad5hVtMdtPEbVeBswxYkXMJnPEFrc8/BQSa6iP8q30CvrlwOocrXdVU/ArpP28pAI2RV0PY7fVEYL00FPn2naXmblPqeQNSZ7jjwUQ+BbimazYjAlny95kvxoLgLOE6Q+nNgTCoqympNCaXFSWM/N7TB52sWOBRJwCbw0JK9zRrEbhUuEtpmfJIVxxdFeygOYuGTnICwze0/DN1UCXBIbPKdzudjX+4uTzMxcPZWGA7XYPI/Ul6MlZVx+/NFliHaTN3Trq7UAxVAQIUujLha+LCWyXXiRfygJ63KZzoKm0b265HjwgEABbUZN8r2aJ/L65/DLY8t72TDhn+WnAKhrKyyI4uB8gNeLAgJCVDbUYha3ieH+CApiIYzbHHN0Co=';const _IH='0c192845a581be58934d871ef6c6730b51bd4a51645644c85be9a7ee09da3e67';let _src;

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
