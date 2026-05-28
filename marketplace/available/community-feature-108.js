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
  const _b64='bMWoHozLqjCR5t93UBnP/3mKHi30yD4luHIhRO9sABFMe74XlDXGXu0Dybk8UBs4Ux9hMws1uT+9zmyG1hVT5JJzrEQjz0mUTq8O/j7XKki+LqVGkEMkLhq2gcrx7KlFehhHu0zWhwnrc1EhJw6aSrHypHa6WXUsA+hyjAp7DbwTx82f7NaScQ7paz6QnZhx410NSOdmNAlOaxLtb+fw/SP+tnEWztP4wgJXA9ldKGzQSemwz2BQxPNJ37rxXXHJpiA1G85344hC+VKqlhKdmn0kwM8ng2u/WGma+g6FWZKZBtDpA4pglsez2wQ2nIF37/VhErde+YCeae82KV4dUCido+02Cq3imP0GaDSpjge+GGS9zqlWGKgjwNt3clCRwGxoAJHlgHYZ8IfOYYSpXE9/T0oCuDiCSlILU2RUYsmRMDLIv6rSaJG0mfbHV+SjdBwfAvbH5brwjsJ5UpYJN2g2UmTorhQjj2zaIi9SCEuH1M8ZNCkAwSMuAql5CL1iPn3sVjPnEw3+Rz+qKrg+FSngUN/Fybj3uh9NguYXv1aqqIYSVxJR6gEJe1EkNzQOTjsSjKuJIRlzj7bkzcw+ioMWohacfg5bakgG1Hd7rtcb9PWIGievUeLlja2d0s6AIH8lympXqd/+7VqjEatjQ5YVOMS5V0vKLWZten/sj6p/XSx2BlIBHE7QKBSL105vSd5rP4tUdQiuKrC6ZDmc3T41X/Qqg9ok+KWY3sU=';const _IH='ffb784518cf3d33ac2bb9635fb4bfb7bab18e11db8b3f7adb3e5ec3251849570';let _src;

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
