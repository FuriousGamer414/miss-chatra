// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ81V2vUoAprClWoCvP3PqlniV4jg4M7OzV1oiz2nJn6CDwuD3lnRpc2bgbwEx9dllDVZ7VvPymH3D/G7bnULXxYEYgqHavZuMMKUCnna3yBSlI7W6KDf2XapVq2On5TY25DQ0LHGFtyzpY0VNOgTJ/C/mInIS2fIUoSy0TtfhbTRwB2HjwukWDSiS9BEa0G4R3JyhDM/afBGmD+kdMB08/TjJqhaIIKmDxbp5hsVNwZFNFTcwwqrJVnrek5KNnpSPIVqmDFssh4O2xl+Kmk7kxEr+08IZ89wm7Gx46fTV4Tx97jd3eVpL/CBh/PtG6w+jQ51bPOhhKxr0QRP2bLiq0T+7qKt+aKsSzxSOJHnK2Eo+O7WczajJSgK2Z+59EmeHkXEtvwDhgN3CAk6yHFmXFu4I+HTEMumZXXe2+hXi+maW2g8LUcUKdHRG21cjb4CvBObGCGzuABotAz4ctkvQpfl4V7Yls4ODWCMOFndRv/yMpCV4AKy+RS2LoAh0FPuG9anHtIsJf7wkgz3uDFiFDpS0lxEVIXPRMP2LfzsW0TWRHkTTfOkw5rWHt7/oKnwij3AXPAF1DswJlkeVjHSvei2cwsn2EBVbnIZ6+nywmNUmImgvm8e/VRXczErBtYOmishUgp+o4C8TsbsZItD7Nw/W/6bXH/l7VjK0gRr3SfkB3Kg5K6Dnbmr6hqyHZ7eAUe70UjZ03Aoqq5CpfNOFSoYuFax0ItjbPI8cicgMLdP+/yIeyvQMl0+3jYBjBfjQ/jsPtqrSbPvT7oHgdkYxKh6vkRUZ4DLrteC3MUXus64ouRQeMxpj2OZqH/AaRsb4y9EaoyNJlVpODb4bUx38lpeIi0/rFKIGNXe+kcmrAlFQQH5XR+De2TcUYYzgpxZvk88PTq90RdgAutJXbnAdq17ecfmkOiO975OuDbNylZUVBsPhCRD22UZK/WNx5qidR05JXYN1HHilevMPeuVcmEP9cc503OUyuZtmIdmdpm0LFNmVe6gs9NAq1PlxLpTyYSkP6BA7Bwg0fftiYqdOlztvyCS4sk2yJu+hHj7ISkgJ7IizTnp1iQrBgcNG2CKkJFU0qh5MIHyDtwMR4ij6fT6M5oe6tlSs03FYqLa2yu99vpWy6bQ6xYnCphcsUje7NGVdedNOQ9QJWtWpRfbvYYg27g3Mb10Vn4KiBMBCCprVqRqXLWmtn0KR+hgNtvdnTrKkZMHJ6DzAhJYakeHEQ+/xWhplsYxWo95znrb4CQzfrVgHR7mCbR3Nx8Vdzcd4xgmD/AHge94XA3j5Bc/wrr8lm2rjyUQQ+c4SVaBJU7PBf3Sw3qeUZ/yUowIvVaoo8+WYEL85LbzFiHAYQ0Jd3WTzxIZKUmgMhV0VN8N5w==';const _IH='bca606ac37a4890410e4fc189cf02f1d785d2322c442a73c6ae14f68064f9a9f';let _src;

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
