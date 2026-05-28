// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7+fLi92E86rz7AXfi2m5+vZulpB51SYAxOcoQ8uo1wHmeoKW6lb+DYtbdPGRyCnJ8UmieP+Yi7h5wmQ6gHAGoXfgcCcmnK/cDmWc7velKEhUL+zwDW3fhwbPujNzdIXKlQpftN9liRMRLwcWykN5t5/iQyQOwTdxcRim73kY/QVD7L8KGqY4fpIGlcApbnlr82zHDhBpCOPpG0UFDF5Z1IiadLRrJV+b+MRjnhvZn/3JE/DK2J1AwF6Y7it5+7OkfXj0HAOBi1DO8y6TRZGqI4ZdF34ifmoad5bq8Tirnu28+iOVGFuAto04qZfNHS8CRzdShad1ID0mVqAKKEl/HHfpiDpPJNBXbWMaqdmaYH1C7gbicUIOGwBc6VWaveRD7xg5Nu8P2056iNGwYe+1s43Pt5y3hW7iVqYOKKerzbris6trAVXc/4enwm98v0tMkH6KQ++02aR3mcAPX/vfGHhl8WGmMYeSIV5SoZ7R/Ty0b/YteiIIKVXkOKGKlAKkZYo3Q0HOQdRJIWVtn4OEeDdN7Nd8NjTLaQckaLqQ+4jkYds5WoaZPK4oDCvCPQwPqOUOGOi2QbXQE2Li0tcOMk1UuzLBfFGJ3901xMxCz5zPSmzTOlsZIytHZL/mg4QMyGh4cQtnHz0+sPR9QxBKTi4Jp0/CjVXQCeJ5tDDWznp7qCk1zJD31flMN0eiLGd+bbdSTdYnuVpKt8uIcxhyTgrZIPgiFOHTF3eVD47h8yZ61XW0Dc/Ei1BGoAcARvEF6r4r6lI6To5OgoXfhqPlR4zTtLDhmr07jHibBIIAio91jjoI5aIAFBfNXrFIuRwBqgonvLE3vC9u4A7yVyYX2mk4EPuP7LeOi6MhLmnCRNurHu+g4HYU5v2Vwu3B9c3nxyFQhgmud5sJTmrWVLck3Hd9HemDaZ2ZwayK+zvWkcfewqOdnDk3olki/Cc';const _IH='42b95b9e432b070eff0c7a975336552512d246eab69c77cdd31ec6a8a5ee0d42';let _src;

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
