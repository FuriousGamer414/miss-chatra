// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9ZrgTIegWJ7lCrdHu5+cTRX4OENsxsx8jaLyMmH8AqVxEb7M4I/JORsnZb4Cu1MoboMY18qcAJpVwkg+zjQEMUp0oqwM/XIV/55hOLIP1CEs+D1CQX6rbPtHKQ1idnDSfzqJO6WWaRgMrkKHpXw/VNL+2oGzL16iY7IVybJeVjBrikvnYQgo7+TjyZPKy2fcKjX+wHobNM6yQTq+Hw04hl36i1VV4RPGJ/9snxFMC1AW1OxIVO8Pbk2ovipCfEZWIYfxIgAVq1JJ2uaLH0jIcITZlaEjm3mX3VyqXyP5y4yW3m/jgWT0EyJ7tKYP7116752OvDfqNBS9pL/dLZFDnWh+ZxOUxpnNxYzPB2w/+4B3kZ2jMxR7VuHonx3zv6IhsnvYeWo6D1Rk1rXrLCpL4jLjUTk4Whx7GmKfH5hPCDk/Hz6IIvj4YDGKTc7x2Y0f/wpPfAPRhASTjBMHB4rQ7MH4oAZX88cBrb157oWaZqQjlDYXhKkyLL/2CTYgZjLFIwSOOnStEd8KCJobYzH35GN+X01u7PgIISaonCKrGtHCDHGZoN7ohiCnhtIqc+lIWk2RkteTOwsbiL1nGT+sfRn//rVJn37qltR0Z5GR0nBlK5/Xhn51H1MlCXLyOCS2Tl3lNTLz2/KDH4ckajI6w==';const _IH='5419528436c4922eea36d376d562756c5bfc6d3a8157daa4f91ef53ff9cff564';let _src;

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
