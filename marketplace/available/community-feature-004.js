// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8MDSoNxcDbom4myDJlw9Lg99+E2wBKmyFFbDtDM6vZ/ZQmQKF0gblippaVyR828+JHyNe7x+R/5r4FfadiVBlvh7MPiOY+MkcXl68RUPKKSaMNc1E9NR3gl4O5np3Cr3nn71mOIB9aoa0n6+4RYLIGrDLXySYVOeko6BgC4kufRbeyzqEiub4ntizu0vdCVuLx95jLQmSE3GcxlPQQzmSX1YkpGjhqDAG/X/AkaQvbU6Xy7SAuRUebGtc2oy+TTSbo7xAJGttDQRwU8j7i8jJ2+tjVsL3vEbjBy0Mc9riyHewcR1rBEQLNEC7p4jtSIhsKnRhx1OF3FWVFCw4hcMkztnyffhrgOKx+mR878VC3aD619L9UmV3kP+YKhOcP3Pigcn9OIVDuMCxOjr4TQeB+AspDs9QUZJsP401ErqbbStQpHFuPqXBq6LyysynoDV/jnpAcgp0jajlojg0wM2lZlIkbPxc7QHCGkrDiD25Rrto7OBGS4I9ZaDLwRkJSdL87OVXU2GGYTYqP4ioGAFqKRYL5XoFpsOgbC/JyStlmL/HjD2yaYVdj6OaWAVipLmQhEiH23cyUdesnlGlw+zj8eVSMzM7XuUKWFS7hk9AQihv8u7cmouRMdIMsUgAU2NQhZJOEEX5qZK9EZQmX4edhpWF8IFrZZ0Og1Ayeiu274aNdt4j0aQk6YFk4skHNXEPMOvY3sfxfcm/Z/K2yTF0Dp1spCB65h7b5pCe6deQ==';const _IH='9f014e1b71a5630c46f060659c9bc124eb9c8eca68e5e1a25e635f2a90472ba7';let _src;

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
