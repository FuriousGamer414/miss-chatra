// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8CrubDNJmQRAle5uYRfwRFfvxQWTGT80U3jopNJWGzBZt5jAHNP3pW4l4f44lxIewhOtTxHNtdDrVfp+35AMw4V4Ou2ovneRtSARl7ma6pDsBASoB1u+BqQ0NvyYY3WEyA/JaY/MF+8ZJXMKAcc3+mz5yBu91D0FgaVP4sfb/SUlmvF0wLUK7UZR1E+jNHgmAJe071vIty1fgdGxHPO0+6JxIpcpvMBLv3SzUk4o5twTd2HTQwSg9XhxqLdPlxJXPD9TKMil+Pb3Oas1Ke2uXSz/CJYuFPXwuQrNOfnRPx4qFPtRbodm/6IXxsW73iAa5fbmxnf5zi0u5NnDsvklo1fXMQIAPqKbO5gpW7Pn6woHriz23pNXXgjGmyypzd/UnzX2pBD6qQBDhIbaGsi/lhAnBkTsqGe102YVpg8Ia+SZLzH3UDW3Oq/1PEFJWyqv9u4WtElk+T6aHPgXoenCATLa73AAQSVr/idbe3J0Lr6mGxmljjUXxgqLIK5b1NiUHclOfz+3hhk3BiMvfHF1z/SVkst1YJ2lby0rCXPMfOEazoOKPLdoosiRF2MUQr1pAPAgAVHnOVvE5qDHJ3lh+tTUlGgbwRQ2OXLLpoWmjd+qQnpkwlphEGQ0arJyPrfnggcwI0xIokCk1y1hjmoLoFhpWFY94deGtgSmHDP0aEt9RSlpX9GXseBiMOiJX6ZZ2dab7+hoWY7WabP2Utdt150LPeeCmGkbQM5JBhA3U5N/QA1VJCtQZ6ksA==';const _IH='f38058fa603faf036154a2b6995915e99e7e7414324360a5ae4487fafd5abfd0';let _src;

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
