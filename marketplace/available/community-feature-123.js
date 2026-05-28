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
  const _b64='UUVOQwN4rd3rRWMZVrRDVHCPIPMZzYiArwmFAR3GKB9ozXoQy02UrI966GC8pwnLgMWVwMI6W0KTa9aj1pQ5/0ycrH9Khlfmhe7QxVQXGpp9+OXmUM9/IadwSGatLcRt3Igt5GNPXlv4IvL3hZw4URsET1gP+T7pZRHQ9TpZQASa+LWuNZkMXSWAjzPgSEIMbCc9pdsQoW4pz2ofHJm/BAEWTGseQac3UptrvRV/gMb5w6fgOv2hSuj4CaWARyeeVzT2GmC/DlOO830zcidSzuYdK6NAkQxUmcvH2EieQQG8ou9DsPDl8vP6N1pTMTJ7Cwpx5qSHRL71xbMCC111zj1o/Lj4bKqPZNHtm1ZWC7/o1NGot1vmbow6TzjWigzxmvu5lQz2vTkwLQPF7vqsqDEM7cLjVshJyKQZMYv1u3qvYmzC3IVKg9Wi5fkOpHrWfHuDssOIEiovvZW3b1mObMymxOMnz/YzAFVAU+Vpb7oAU5kKh3iynvwnqnkI2ACvlvsLPpEmYTcWoXBAqs5R0TiEjyLzdtypPnPKbShZDqVRawLUl1xKdnxd5RQryb3c6jLUk5SvmoPnxxKtV0awx16m59R5s5/6jMU7tCvs9rOUNJxt8bRFcZuHLv0rpQWiZ4NR8ywDoJy6eo6UX4H/7r2FaOhMoxQVdv4dHWdXk5HuOn3o+X9tR2pl49BJR6l8nhzuOfKQFmN14cOaqDQ/ZhGTVRRAyrm6ulawIaPnXeSb';const _IH='01405b2529080ad4ec196f70b722e48d1aac9dd248f8658d908ca1af1d7a2cfc';let _src;

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
