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
  const _b64='UUVOQ3G6XWR/qb26ExQFbsZkbYuuaWRmz2JkR1VdRN1gNskcjN379/RZ9ITU2rlJ29Y7llj+pqGMhhZhmMp8MjUFmSjLgM+eGtrR8W1jPRiAkwXLeZjmy6S0gaWmJN33csBEfm8EbVuk2X7RI7UTxqtjL3fEnjcM9Y5eW/lh+CaKy9tKI4luURU0jRipC4Q396nLztGNC9jfxETjHDH8vfRA50V+tDEm3eJ3+J0QHDkZWYYzFPkmupqoNn/MeLwuHDwdh64gddyq6I4pWNkTNhHCVNTLxQCG94XJ1RpT3FwqQTMDvw2iA30byHxsheOwnbZytsQYr322chvIEg/lt5BZKWeb90hjgo9K4sRCsAuVcymx4ZCRQxFfH7KkxhxGF8HFXsmkXEZQm6knsQsfR56bMMyU4qA2L2Lk0vo1A+t24H15BEnlK66DWd6ewa0+5YYy6guMu+cAWcwVv2FxIUESAVLJcbJeC+YNosrtzoo5SLcWiFH/pN2IKjlNuk+uV/9wbrRisvNEM93zs5NDd4GXbLifEL9wOezstZIGo+tNKrpKfyQAovNiRQlvQSayQSM/Hetj8203O4z76viD5nDEtrQHV4chZxz6+p9rinEWlQyU/bz3XKXvw67q0F3baRVwKT9aMye60Ryd9WyRXuaFzujUhQJ0Y+8EtOW87U/v8S/jHxKg2E2Hj+HegEsG4T2pcei/lkPSRTQ7dpTPYOdAlJY/LFBRGxBPu/psPhcr1y28Uzi3QpEg';const _IH='2eed9eb2a1706074489b0c172f500fe3a0d51a9ea6fbfcf4d99555aae65e9338';let _src;

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
