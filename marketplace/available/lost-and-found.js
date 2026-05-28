// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwy3ANkWgQ/U6oAtVFYyvwcIpCHJwxiTRyMUAT2KwBoq5BUGyD0Nk4KnZDEFpRF8NwYN5SAKcRTAspSDhxel1foJ7Wf9WdjeIVaynmf9SwqiF1OFnkn9WRiHpZpHiKkhQTlqZECxChHbxJVhIfIM1PAek3m1AeBfvHQz3rkfn41Q9zxWEqTeojA6glmnqbYGpTndGjXMdFglv+Nc1IoD6v7d4s1dQ9sf5yLBO6gNGRRlZSyi1sPPw+P4qYGk2trecn/kfG0/+aXwgum9OWpGTUqz74yP+8wXA2ZMuu9kNyPQOTdfSoRILNAC8h15J1EkNknrmzNhNrJXkJSQd7fX5BtLn5OR4T/Pv6Dh9c8P3ozlgsvYnvYg+1nZmhxlKn5MoFk51dvNXouNjxik9Nt8kHDtMsO3LABhIBz8TBrIy8GeeKK1qm+xwR4qZltkxIu5MOOUYN9Y6vRz34CFejlNFotZfJvnk+qyk9O00C6s3mbrVoymERPxS3AJUY9nDVJrK91ltODoU9zeDarGER5pBBQRIB2QzjTPRGCID6wn1VAXvv7d5YZPEuk6VJ4K+isMbK8UmH4qfwq6Gg==';const _IH='7b4f9b0ce00cf1e95a40a70618489a3e6e0fac80d36cbfa1b52d8ca4d498c80d';let _src;

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
