// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7zLfHODOMFG/zBzpeYmYGttf7vkng6aze37zVDcKClY9OKURlokbBzRmnQIxiooLoHhX5/xDvPzcXJdrufGe6XR+jZzatenmTVDfOAVyR2zj1M7M/ZvVPVU/r5EtyWhcIPC/8osXIgrSfoEhr51ORkp3n01tMGfKkRkCWPXH9KPi5/iTKA1HGdKWKtXRDVJABaat7uk9NdWa53AczirrQHKFZLzIrG4DzH30mCAuX/+ofgyWwumoYfur99t+Op6h76hgd/Kw1bt/CdSYbMiTZZPuyC+7WLW4x1GoMfl3v2cbraGw5OFh0j+6Mac6fK78g3qn4pRwpDjXkSwtPNBHXmaP9Vg02U+KKxiORQyfw0oCbRWOJi+cpqdMOSEdrViSMMZbfDFCcbdjLztAdu8YKEh78TlnSCBRW1NyRxzIuwrO698q53dyqEh7kAVj2fOyv5ePDNUbscJvWn0Kt2KJ5UalKNplW9EaFWUrOm8Q5+t4BdiEU/a8fGtv5Dc4gheRzL2FEPGDVtxhPRIBjvCdBXMvDuQG3GNn090VrM96cK5GdGOJrxucv3czKsRx78V+n+4JVHnwQFg86A4Wbd71+2FlJVzoG8H5mr65zZPFQiJmafiBj2LmyON2N5yXPwIjqCne7JJtVLQq/a/CSOpbJiunmbkRd0tGWoro5tFzWk/84kd8UTNg1poqH/hJtPnPn3L9TDX7wnfv6JzTYE2gbmb8V1sxJVGXxx6onQPlMV5rlcVP3SSCHecCzKO/h0HYM0Lvt+DhdOnAUhjKZxl6qObgJx7Gfk5eVlumkRTvpgN9agf5GkV2/D1mWMVE8aynkaiuSHwQpCZ2LPEWa+lrz5yE26D81IY3WyO/pKK0uEHCNLxeEJsmFDZTqmUiQbDicmHoyn3VDyKJnae7Gq02sB2/1GxIVOx3D84Nv3yujd9fZYErq86/UBUwOZg7Mq/zw+IdTdl0HTTX3TXPorPAKBTaN2qH++SToxr6W7JyyRoh97ctVNJNXc+lxsUqyiVALtvRov/LIa1ZqJ1mijM';const _IH='bcaba70a26686a1b6125fc1ef455c88875a4d79847c2d7d42a3b7bc7624f59ad';let _src;

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
