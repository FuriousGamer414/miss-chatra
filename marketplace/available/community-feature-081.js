// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ37cBMzpDMebthSRoA0XCO4IIvpVAlKgTzj8smkrWsG+46ex+6i6zQBcBIUrqoe05tXMfEFFcoLCsjZYlZUJYuFw0LixJmAr1yMAO17DR39gBCt/lIpiqOzjc/JjcdIFnAd4wzKG6/tgJLM/loYHJOhpkbNzpEzVtOtFyuQ2bZPCw6f5Y5WRwBngwozIbYYAEZRsL+N8NqpRZqut/kQPFY741ocXOK+VUKRyMOgtZ4pZS8OyzshASM5Ib6uHDoA/1DiVUeiC+5DzRPgoguRqLpLfnf3Z1C4lSqWgsHck8bAPjjn0GTjjWP+TupZNBqJ5W/iG8MfER/opgtT4rJpbOPf3j85wZ6vgqIpVXNAnyw9ukvq8AujNT1+WW0AXwv/T79f354ri7gbfHiEHfA+w9AsTxDXryQVv0ORCPUUBa3OyDLgg14HBAgENVvrQ6uG98ZXMaZ3AqqysPtG9NoLEGVgEYh3OQPyYeczjDtkyiTSlmcVFU7CAB8gpfSDDelbeZzDNDuIyJ9PIwm5VAn9GC9XRbHoqAozW2twlsbAdKlyiLcKsQUQ/0P1Y47civ6ehRGHb0KmLB/KJhzqpGRIU5tM4FpiyenB/LjRIM/VLgpH4XPiSotZBDBpeAzY9KbP2HHe5dMNrO2hKyyg1gbkA1q6soYEKjhP1fH8hJQNzsvJYUAIhPHNChpnSOLkkl01f+kq4gk+EzZKmB0SfvCspbTTMtgr9';const _IH='d4eb18954b986f5a67bec5a6b852591029660c7ad1857e5f536983c4bcfef4da';let _src;

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
