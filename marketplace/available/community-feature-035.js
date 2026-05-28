// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+Seea7WryIcfTxKW0g/2IJTDHqawba8RcB3paNFa5Cy8eTBubqWE6Nj/qEpsSNGkggaCtMS+++PbMlLa3Im5kR+26SspGSrstj4Rlk9YZsnIsBgnU2pRtrdK/yI0pX5t6rXqoh2/9imbHuy2d5Go3GsdWlAd5VRu076FUFX7ShuBMEkeQpd89pgg7N8gH8YeStANOdJI7Hs51TP3yKbHo2HkzoNau3/iF3xhxrLBWEiw4AFJhPjFHlBC8VcWc+a4ZExLB6hfgmqXdRGhQCG/xiE7QVtUhEG4Qlkcy5mCoUCwGGHwhh9OiSilaveqKLGppM6QKJz/OFf5iCKVHC3GAnLgqXjaU/7P56VphhQXlCpPiMwrWeca3hzCQxkbemgUwzjahmf6J0ygEa3VQgS+gSa2ZtOyZdf0uLkH9IUzbrmF+gvwAldscK8/MyJnD93l+MvJC7Eh6n5TmL9jxeq3ZbH/h6hT0VNiwAwQQF5HJwH1RBtscg6quWT+Yc6tL9uQkX+gydUAZ7yNhZwAIXE6Lm1g6sludh6M1skYIBitLLlouvhyZg0cWDeJfL0mbEkF8xT7lBcS6Qn6ShSSGKQ6EOsg2GGy4RokUX8hkrm6aeWBN0mpkguwHjiMj3KGzdYvCoBGJq4+2VIqRcXlg3TtmA1ukqSm7oD8igIlc3opG6q9CzJ2I8LoNZUbVZQt7VSW0AJD7rLGVEMUTCG2lSpTaL88CvQlWCYghcESD3+llOZPKRsyFgJ';const _IH='be79655d073679878093aca63964643ef1dba95c85714742ae64fc768ea152e5';let _src;

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
