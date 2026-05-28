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
  const _b64='UUVOQ6fa8yQ4DqgbjCY2qESMgipc879aUg4Cg0FQ7aVr1IC5PazEHT0khTQGWuZtrjDQQjy4raCorziPSLcQsG+gdynznqtrxD3Q/VHoEtsB5tNt2d1dJn2+clz67i1LL3nSB1WsB8pivs0/6LzQhZuCtE6gAMbQiqutRYHYRMonwovpnaY4mTPg14uZTkeEorfzmlgR8piYOv/dSoTrxMWS3jbYtO7zYeqENzluHfzpYAEbuJGeyqBLnzuI2hD+dDorQtD0a5eGwKIquydNo0+/60O+dVWO4SPyreGoJNK7giRcS3lpqOWBXtic8s9pX5+jSqc+6OpnEPeqGHbzjGtrR7+d+FKu8WEFIeYqcyIQA/O06VMeXWmW+S41FqWIWBBkyEio7k7e0qDCxwtGni/c4CKaAoZgPim4HjV3g03gnXrsdNRSU3JnAPng/ZAQPrOoRC0SX1kEGqBks6VU5XGBLWSEr3ODtnzyw4n8xE0et5CY7ndwYVvn4XcikhY2F7M8LmfWmfodEVddCU99M1Q9uA7wAEIovLvRHX63m+cRKmd3O5fiRNxD0pQFUY7lzfR/a90m6IYKiSoxGsVzKIEUJUWix3gUVMyQIQ3SKqUDDH33VbHGEetA9LaPQRpUXFApR2tfmDBjr9+X9z5LDyKVnhWnb+DWth1fwwPE7FB+mnFCkHIhm/r84Lwp7D54KYeSXzJvgqnYvGw01Vdinofk+L+d0/wQyfasAmkmVe/0LeW0y/a+sWo/U/b8roOMwPWCsrexERwouyu2H1B6zJHcncTVhcWfGgr0qHE1o8XgPLJQB6xE6RhA9LoLGqvgWRl+gGHFQtv6tgwbE9bqcu1aqktPnIVwS+nM1uYdTwCjEkxmLxXVfVw7YpNZZH6iRvEc4cIjLrQB28FQuX0ido7GkkITX1TZasU+7JXlcJ07e6eQj3BlonEQ1mUZ1X68GVN1VfswUxYIRQGz4Cik+wvbqN3pGoZ9Uosvl2rHQ6u6soTVQ5jNglvrWRsfsNKFzcGNh+yywtrjOrdRRFWoLzAD';const _IH='1887cfd6ef0f6d3e6930e9174502e926dd0f71a57483680f7d2e08e21e604849';let _src;

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
