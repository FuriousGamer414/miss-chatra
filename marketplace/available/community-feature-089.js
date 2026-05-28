// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ02G0utfoOKsUNLKCXXA+nnEfGrzoVpflIdNAIvdSjdy9rIW3Ez2HOr0rxTFutj+l0VNlOAL7M/2gd26Lvq/LqgV1SKRm9vG3N3vcSJUulrmQ2BDxzP1uG/bDJQ0ZJrhZGNTEbMSW9/xn02pFSEBPKnR4hYk+N29x4hwbpZvKfcYhxrRdZoc0kVPwyAEAkv0v9xri9ikPDZPaUzQWPrSsQpdl3zDPbAgup2qH7e92RrAQNCfVPAUd/UtVIIAXO5P5NW04tsfY7eg/xkQ7KPENKe4y/Oc+3N8nUoL3mKoCzCkKgKF8YsmhaADrnK49IORR7GX+bVGVvomdk7x+V4Ex9MEXcjpHc4dvKW1KEChhQLsiLGHXXgMt5VBMF3+SIfYwqBlGAWypQhWmQz1xJMlKF/HREO1ZEj/EoglChJx7wqxtqQS3XV9C05TcBCdOyM2L6aUGDwztzhE+NJepzVvNUw8o5pB6PTv4rDBh8Oib2d+ARLcSmcjLmTav5CRF29mGRZPLF10Ehy4YMjIxKMDv/FbEzTyy53kbdpPDhYq9OTc7H6lw14/gqqZTQ/8TAK/6p2M57CC02KltQODFOmdq4RJjF9WZzHFk/qcQM7ZPutvnJZ/lD1d8CNh2jwC7vBMcL9inRwFEouSoL89p7cSCauOMTti2+Mp/2qSBsfApPNShAn55JDSYtaSKPxIcejBeIanCfse74ydEbq0sbikRQfBCvV4F80oHRXjfjBLHQxfy5o=';const _IH='f8deec4b86da7f8bfb399025c270ec623c4de0b844833fe97e4f11297047a370';let _src;

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
