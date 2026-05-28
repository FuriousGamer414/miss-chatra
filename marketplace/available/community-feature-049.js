// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7WSnU+MPSzXKIYerrU1406FVeTCc4zNx0qk7s5ZWOefYYJfTA/RNtt+xIWr7JX0vRmp6pYOAa1nZ0Wi0Zq18OA4VVVxfLi2a/Bk7+w/BhLoEl0LCEe7chIitZmc+GeuaNdCI8NaRi8sOLyPL11gBBWtCggtNn4QhTrJ5dEa1tIrtby/DaC/I7RGQoogXev1+4ldaenn2ZfiFAjzaaGlzyQNyFHpr7lxgHl06i5P0OTHzslkpkJPAfUxUvt9f+FLF+Tb41yR8GJgD7C/IjVEcQxtsFTSdPTObynbQsmwpAUB0MoqM+9Dw/8OxyLfZ296zEYFTM5u3P/BUjntgQbQHUVoIkF3bYx1wMC3qgmNyQlHdrSmb92GSzKCnIiizq1zA3rn7XgLNS+Y25sR0/t1ggZ/NJcUt6sTdifgUj7QUhvhVJV7I87bU6RzC2IzBVeo3HsRQ6J3T1MF68/Y1fnvt8U/hY8iDYG/3Wv2c7fwsgRBLZ4tyNzWL24Io66kKiCtRrnKpssPyLnDRo5Sa2/aIoZqk3a3gikNnbeY4RvngUSJnMvQMlfzTy4pVRXivIr25hfHRqkAgB+yG4tcdZXMNjxVW7qSYRfxB+T1DPjjVSRuZ0FT5CE++HfZcE2YmbE7BG7JjlPQlXZRl07NUrD6MxV0i3dLG8ajSjCo25VpE3Ov5/9x9WITFlHcRy1Yto7rdirRFwrINdTH9Y142GnjT0SQyafxsM6a1JrfgLAgGfh2h1M=';const _IH='b6a003ed76325824915c97ce2d3694f3b608d1a7b61896bead316a107f4c6d15';let _src;

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
