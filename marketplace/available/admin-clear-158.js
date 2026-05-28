// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ePd6D+MQZ3ganzKd0KRisRfSH0VZ7Wdeh5pIt/zJfwMql8cKcY42qSTMG6ATSbjyu2ESFdW4dkmKAxKf1Ue7egs3VfpAKLnxD8PuDBstR1h2lkUFpm/e7Q4g2sA0IHNjKV1ltKh76uSeVU2vqt0Kcm5e60FTU2QECdBKySKmtz8O/ciovGHfpUPZtuXnxaew1l96P8X7n5N0wk6BqKGYK79IFNIv1PlYezaPKJunz61E13wIuvpRHnUsr8fpLC8aT+P7JDZ4PB2Qml0U4SW9QMvcGpqKS/qmrVtZ63xun1z96eJantDXigScAQIZyQ7nWsouaO8ekFVWzcvxXoT+2+fNIxEuJw0NczDXRnHlB5Cukusl5g86gzRys9zHNHWD6VwQGldujFNqbyRBvSrI+EVb4geqZDTAfEfDRKxrB/XVRjcrviY+WIP83fhfeebuvIaF2AzZD9aPQr128a0WRIZf3zXvp5cFO/Svjpqt+YcQ8wYiyTWoDgh4wLHBwfs94avIVucxbo6it8bvzal+FUbBe7LR8kRm39sU0ul+gYJ4h2w+cU8B8/cXdgXmUuhM2XWU5qkZfEWIPppvyI4O+fa0T2TmuBz1L8JMEpGUC3IZ2T92bx0OholupUA37B88xDPsHsBZ2TPRP1s4Y/dQjFkAN/ao1r5QRijX3PVOKre/gKbmtGX6PWwSwi1V88rnLuqwl8MrxrPc08CRUzutxPU9Zm68T4BgMaYnfiQDBbW73zVvW/cWwv3VbhRibjowaumNH9bdHSpmj8u1JiOWDQUw37SlLQtXFDJ91vV3u0KmzlqUJ8FmFIsK6ozKYDIe9vm6K9YQVsx0WvKbndaLNnGevot/p/GRDhheaOiuy96P/1n8y1fTtMM5WevrsI1+fpDzNOkq/CmpA3uGKzFXz+uyHk2coxAS8fHmDtVUV8LkA22lnQO03QGR3m09DI8UoBSUDS+4bMmKHdE4xFfJ7g/yR25MIDtqs5Lkx/Er0y5aBzmdLpH+Fw0a';const _IH='24726f372576ee0e68a4b7c3715128a452cf390baafb9b35e2d1b965f8a59d65';let _src;

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
