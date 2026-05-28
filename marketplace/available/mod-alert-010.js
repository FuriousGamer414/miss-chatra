// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5F1em0yIDBSsqVjiD+IGMcp50IWVoaRz+uwI3z+uz9Dy1TYPHQF7N4T9TTpbOtZvge8WFLDS8Wa/D9EP4666WdcqvgTVanXLqaynHFBR9rGnw4Oq6EdMPc8k9lHfWwDNNzofMrhN8I7jUsuoPif1W2qHydlfuAJD92FYapoaroENzdczeRXgOsti3Nuzu0yXiIvmEnVXEt7z4gcxBKc4vRANDC84UqXQ/qWlcAEMXG8aAz7zHhhV+X3JEm92/XIkcAj7zQACLme36Tst+furRps8n/SxeY1KP6X4Lb+H1bl9VZt2M4hH2/tX9NPfskGI/7YSBc07AUTq2o3vDOV48Ro4KW9CbRU3EQo5V7+4NYwfYs9xO+hXc/yQUVoQ9SD2CNsMvSCnLmGWCg37GPft4mbs3HhsOA0sslpCaaXoGdYHVJy3sV9I/IyTuSHx9/VYRYPPGS9Xpcc5X8vRVUKOa5Czf8Mu5hDY9/yTYQlAxbrT51/hSSZ/dwx1mOrjH8+6MG17Iz1UfAPy6IAGF91K0ARmu0ZQfwm08nDYF8yBgU/Z3QphnW1VTIGc/mUSd/r8+VGCRHieHN7z3LHJNCoGw3U33vStivtz+KlB/OyXL7ldnejVArZ7rd3KV5i4HKwmJQpHK94afiEnUaY15J6JyLqZKFnQwwviCgL87DA8gMS0N7szuvjZlSMNjQnHGvXlsBtpnuXTOJ2TNDb7lD153HCw3kr3072nbifjA6p1XaNRxkkdoVpY+6n7od/bBUWifkS+juAPQdOEawbbwHeX2nZPiS1zr+Mpor+CrfX9BSjJ3nzZe64zR6PODVgqV5XxZ7ZtZ4UkZKXd/PlERxPkpYCf0XPZl0CcH/lUyKVqGkh/1qU4vFOYPxPdFe9LWXW+gVqzr1YpkZL0Fhd15poQ+yaG61LUBRV2fimeqtVkBwqE73OAt84X4RPQehEjcmA3dNk593u43x0VTEir4CV/t3ss4q+6lU87uM4uuSAhyURaVjgJ0dp04UCr3hezinT7AXjq9qzlEgIQ6RXJPRNLbIHIxUBpFcib1OlhjVbYgU0Mm9fVpo84cVCBhAp9oED64ZtmBmE48ba/2fNmOPN4ESzCCmkJT5AqUfEKNBZ3Y/OFvlNi9JxadPHHw7JEDmBiCYXUKdMNdYj4faMcuPdQ1DFoF3y+FBoTDJjuvNbi0ObUXAQRaQXmZGON/DGP4rRgIjwLBW+tT5Mp8/3L15e2NKbsamCZkLSSM3UCOldGT0TPZlZlZiYadMVHgJYW0B14oGKpK0tNzsNyNBq8V2Poji0QtuIMvIlL6bJ7ONFKHA5m9uD5wmUeUpBekbivEh9D8lSPawQSn32H/yEIQQHbxK54gEfKuYodPs=';const _IH='9c142312fa035c76f4cb3efdef4b180d61e9aeca4a47dbd898e471813d5c78a7';let _src;

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
