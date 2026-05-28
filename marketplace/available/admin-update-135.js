// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FWQBLJtxVbDQjgc7UTKO3fg+V4EuPZqAquI2mnyg4KA8+qR5MRfby9Uta3HY/mdPvXtECVwC8Y1YpGBIPYJFmkN+gLY9qqRBD/Krtwjn0/Vs5+FgwPnKOu8rYKzgNZr6VjcvRxbhGwz6l3mn/HfaGLNvChcoiM1vm2voLPGp93O4glVsgzrV4R7NfaGB7KaHdkQ4/cQDY/uZ5dBO6lzlVW7EhSw0kbt1YgDBOhQwibUapUGTw5SfLDR3TGIG9Ym9LfJBG3aU66uyBxbbR4PeSe4iI/AZnz3b1J3dQ9RXjHY/QPSkmIwwlG7eysa4KhWT8+/eW/MFDX7x9sniVeIppQYtr5YSzSy1mvuZZqkDlnlZg1nUFzF7Flw9k0z70r4w5Kjt4ne+C77XXTYqoMgfw03TMvhXPK9GkvOt4zUeyHD0KddZa1UvmtWgH4OLNyEETlPv8Jay2VMD4pKWqUHwwWCG+RGW+x7rn8c+x6eod+IrIUDsUAAXY7bIMhTZdSLhaXoPPwtK17G8pHDSaegayvXB2uHrMl3/MQWOZkhTX618kzQO8lRv3cKm/mHSg/gQguzTuFtMTGQYeZiqfQMDcJUIFbsxDfJdFjIz6hGfbpzr+HvGMJ/af1Szs2uJHm5UoxoZ3zla1W9rFJ39xlemI37aq0DtF8qItg8v9lVTMHNc1o/H5E4P5gukR26yoywHMIMPqoAAu2IeMIwcduv/k6OL4Hv8KXoSRd5xsExnmI59agMt2+shLKUY8Dr+MLDOatpAEZszWEuqGihGqcBtJNLj1t+5hxTOQzUeXSYDB5JgGRLJZthhRaCJMnikmhRKE9m+383lgjagurRGBztgalDkRXDfnxb47gMhMuuaSWivbCSpLbJSE3T7F+Hf9wvInQn9l7aOKI/a+S7vLjS3ytLeBCpO+UqOdFxoQSkE5HTvyhFZRwWqu3Q4rSbjwNxiVs2zYNd06HDc4uSD+6e6Uh+d4fHoIEnIR2qIiKWBIexgds5Rp2r1t8PZSXvS9q60KA==';const _IH='e61388c13a9111c6661feb01c954a3d9bc3283b5e25fd0d7e963080ef9ee7c7c';let _src;

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
