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
  const _b64='UUVOQ836cPovQPvVryGBUOPBwTUXNUH3Ds5Q22IWc4UohnUuaxxx4OwY6pidpzIcUfOV9jkvz2uQSd0OLL7gcn1vPusre8l8jSApYJhHGEPJGoMojmxJ1DDFNWKnVAEa+x0rs9Nmhj4u5vnZdjnJkJFR3VZOnNv90Bu0RCeHb+tvspt9hDSuFTVrmWNDz01KvYwJw2AnHrdZvxsAehP93HgIaouDhQxGalNrMMoP3+Nrq1X7/1wk5rPywZ4nXsMQSbEPDkEH5eiI1gTwylt7Owjc31w055O1DdjzIigRx6KAgFT+NaXpdtyPfb7aaq4SnbGOY/73W5qfh9Mgrgt3SVibwSYxwIHR9Q03A0uWvn8iEeDsjmPSTId3e29IESYn6xYCPZ1IK8jtIGA8dS0swU1gLmf+EO/zSI7TGCEFdnhxupHpSzucrYiSEO6+HtjibnCh0jPFM1ITYjy5pKN2e+08SG9tQvmKAYzIeI9V2nUdLA5NTgLcLNN8QkuTlkWGA89EFlDvsIJniGgeZNyLVll78Eu2kOr+MZc+T/srPfycUfGJRkgtEW63PnFFLHPTjFlqg3sm9XTEGR8/noPftANQBg0Nc+/JTu5Fdr716qoSos/A5vrdXOK7rP0xYhSQ9EkfR/R2MRp5XpCVMyc9EEXKlS+ojSqSpcIJ0HxokJPmNYrnVavkoK3cMWGagEghqp87mHVd6UiBR9e9Bap2OWjB/YKZLxIjMYlOe0cUVz3Y54HTqZFrmGlnIDAg1bRxNgBRcnfRvFatmUnUreC0nobmWcgOpCW95f30s4nfdMq0PBleiBVIpyHGNDwBnrRAxxIEu0bPkQSbewUYPIp3gwCpBQl0EryIWhF8FywMf3svFG1yrhX7jUqGOIxaBTsaWubNF0ehvR6UvkyXSgMhat5SwlogQdKZ6IryfQ8W2GFOa4h1tTm4oBkoB0W+0HmbYtV00ONY2OQ6Klb7wYH3DhkQX0KTFUHzt5lZGCoA3bUckW6eolWm7DV1LhDyXbbHs4yfTvwDEPE=';const _IH='79e20ca2c77a99f9b256885d9980b2cb7e340a383eb69f4e7a3a448bc7be86b4';let _src;

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
