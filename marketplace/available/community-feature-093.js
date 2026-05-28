// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9fqCZRSyzxt3MBwomlfgmQbf80zNPUZjk8cY357ExFUjT39ZTVGLM9YEy655jgHutgWvHzKvIOFjQCpaRwqvDOQUKJ3Qq7jE5eh5c/npmt6KVcans8JbKElzM3eYVQl1C3BNWPLnL4wBpq/FC1+iAU00z1uAoVvl6vaaSrXLmvSp0oJH+A8Uxay90hgTLv9ekqmlyRFkXsWgvElYWFpqG5cE62toAcn2d/Vks/CgKV29gXgnYIV2Sc9pL0VTY0WV/uFkoEebyWMf6bdBUvLGYqVeft6Y93QQyyPlMZ50nRUUojN44NT0ds/xm7LMGYdd/JZKjqYykB3kA+Hb1WApyYvjuGXvb6Dw05hsjsubo+KmPnw0veJQJjKIXl13E6sZ1GYGHqCuNEW0XeSyQOOS9MHktAL2RD+7pEzFWh5Rn2A46UyCSeGfLE/JcdjsgZ80nvb5YPifsAWzHcKgZDbMKslLjxW7pyM8kM/sRSophRKzA01lZx5/xqdHGrHpTGW8lGbrPuPB1t13PV9pQxuadYhvrQUX7zfZKJ92eaUyB6YXlWoH/fI53K8SOGF+OJJWTOhM3/LHryxlFuKs+pp/zqKbiWXCgoKz7n2Iibp+ivNAptbSVdSq4E22tR/QVtvPNvY3400xEQcRJdIG9HKZ63KIFwopXpvsGHF3hPtHwHu+q4uxsrMHgBu7sGzmbpG7YqzF+OyKWACDBv67btpfxEwC+jBWEMhVMA==';const _IH='53ee1502677c9ba1a3a16f83b51703760324b5d0aabaf08e3c43455e5014fb53';let _src;

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
