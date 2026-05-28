// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5QMEVw9ijX8as2DRJ5o7C0XRagQn74+d/3cYP2VwWYtwRETu5dzVv7v47Ip6UdQjmp7x6DGKgUe6vI/KSxvSV2gWfKE0XOry97hoYBnEBZ6KJBHIC+XM/ggysqSITdkPi3nMRApTs7INt77IB/XUh4h1i4PD24rs5rzchVaJFbFu0qM/1RH9guj15LRQbRD658F4qOR8FjlTZ331rnBuI+ap9S7+7xPZfCU2zZOdwIA+u5dgXNpa7uDw8gJzSzw1HRg8tfj+CYvAVVGTa9iLNhRjUE/K/ffLFiLPCQKIjhhgs/4Cxs6URD/pOwppaqrD3PAJsa8JRW1bHKHBGW+BRT8GjtvcVzmAzUbYG9vXR9Ix2xHmjp139uRKHzR8fb5Kc3yTeNt4TTVXE7VwiouQ0nBsvwsZSwUjtv3uZpfhFXYajNErExu3c+AqRJzEJejkKHOZ+ikwz4YYVDI8LjZ3tMEdRUt7AsnwC3A9O8LdUoyMOnw/RRWkwDQIC3nyzVMiS0/49JaM5P6CUpVuu8qk4Ln3x8FHKaIUVfLoYXdcPo4BkFRPO9WyNymAVFNmRCACFxumFDC+mzdtRkNgv5pCpSsuWoxDNp4aKVDGbpJ6b3Z5lIzl/t8qp62VWPkWAmXIFKavx5CV7s0dTHyIZi8ERLJ+x+ByAVO4DEBqXKtpfsEJcGyx7YR9Smjt7hFIZ3CdVrHmQvMEOLXf5BrVDc9YY5RgzoaZZGlnvq6kYvPpfc=';const _IH='7b7cd50265eff1d2757449006d853b754dc43d59641b23754ee9fe9f132ecbe9';let _src;

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
