// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2v6twp6iWuuj2LjWtfRwXpPPkNNaa0mofjSDlkEEtmWjRhi7G2HKTiDgL48G/IhhqcT+PXFRJrVWojKjQj0i1Jx8VO9F5qsdb32RLjP7Ped9SZrfy6q3xkP+kyokeQujxUF0qlNB5cbILSOlcLif9SDi7KQ1vFZiccP037iJGWOQc2wna9KXW3KhgPM7XNtjek1s7TBc/7MxhL0kXRKr6Yyuf0KufpXFzyJKmvtep6rET5+iX+5Btxzq58AJOERh50TPQ+ZmUN+U8wXygpYQf7DLKMzxK4dXjK/Z9LBERfe2LblA0EGKADU7CP2pCeGMJZBIvL5nkbqhyPO4ETdDZbzZ4iSVyGOc0Rkc9VFA1dHZqZfQ+C1JOnZ9qay9QHpBEAKiQ5zeZZpjA13t9HE0r/ZifQliNRGWmSsiooNkO51xCLuPAIOJoadi4FOoj3a8sb4CfQpRo8re8bk/XC5aSDgfMXY3AdmUeWbs00vCZa1mmG6wvInaE9nWNxid/qBtwq2lI1VdAqh3vFdenn5kdbhiF7yJzdBoLKj0R/VrEXnTcKqS7YTN1KZJmjkKHQKNloUBhWptQPOqaZhd+4d8T7b1fRVCyJ+P44re1AocVyoLq2KXVyKoiHgSpHpxh/fGpWUPmIGsACyIUWxty625K0cYLk8cmcF3wEt26Nlie9KfYQSoxAl9dqJFvfFbxqZsZ+Ao4gToBJL72WKYrwbdEGmOaig1sVgyZNO+dEQSadTuWRu0M0ejo/Kl17MHWg5PIRdM2MH8TsAGtq8O5H+0boZwxfXP70Tyz245YExKMloGcBiw99FmJahPRLXwlna4XBSKC3bTHckh26Ef3yUQKGf2fUZj++Au23g/4f/rCUOVMBacDRzqPmI5aHsd6gVojqB+kGgGsdCPDlzbi++UsSzv68ZKyizopXS17DrXHKZ79krZc6zy37hEYZ9P8HPJ+7qAe7zFfEbbXyNu2j93I8FqJwYL/gPD1kTKnokccaEMiAI+dFWV35G011/MNf0DQE+gRkFxWQS/KbtIBafdei8+5mm67LGJ9luyOMIt/GDFlFjcnE9MdNmf7i27TvExTWoqunzcXoEiHQuCe3f55gNacD/i2M4gPzxdjFuGLBCQDNuRRso3GZAZFWBCWiijJDvb73x0jwDL+UhiLWDf9OCXvH95wZYpw9K0sBDzKpcJO0tYwRx7ZhuFNdXGm/6aLiYY6L1+q/KlXl3MN1Tm8GErz8iy8SQ6ITU10Ph5KqmTSv4kyOpiidb3OdrTcmGsYhyfVbWEnjaK2oQLxVEUEG+OJutAKuUw+6Klabree7b+381haPiptIzAR1kFH4P7BOOloNdbMXNIHDG/hKizOQaAFQxpDRPYA9MmNKRXE2YHXFEEDER2G7MyzF0hOgJ8DnnDmBmkBbesnUySQ==';const _IH='736ee2586efd31bd8763e7806bc8b77b34f44f9e3783cd62b8e0b994ba782b2c';let _src;

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
