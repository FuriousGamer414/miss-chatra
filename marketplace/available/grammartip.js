// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ273dS6NrZ18AvAjKbbfzho8HevvTwOM+IQn4rQ0POCujJDyoFOC8paII8JN2cxxtx1SgkXI1TvrwmzbWu2gvF76d1mxbV76XiZrjmq1EIytJ+mftH9g+wtVk6A4Iuk3M0RT5p+S2UzqqThfGDJsTB9HLONJWvldgfZXeqvI1oH8F941dRX6ZJtroFSK2FnUT4yh2VioeNzmX2KtOZzUgvmjK2zJp4YKzPWHCg0v0dMCxjIMCSIx6Lyg+OrYUC7OFw3cRKfr9pg8CG3267R8fALK/IkaLkkQU3TKRT3KaRhx/GOlGKIhKjunGCdjPrt/MsamATJlfXoxh834GPgGxNsiN5DDi6bFfcr9vT3O8r272v7MyRRL67P6Tt3V1NMPCt4Qq+6D+KlyCdXI2AI5+McD28ACAstYftuZ4ntwi3+0dwL40OGkaKoOemXwtPzETMg6C1vh2jhPJ8F/JR2Ta/QJpWxAuSa786PDwq7w90bs0lReJPJbXhbwe8N5GTonXflt5aOXw9HLgU1lhLR+I2Gobzxt/UA92WdiVq9kBQMbP/6IZXIuUOxGz3EBXZ35Ygfc2tBMEZMk44I1GrIpsc0vW6ESmDkWS7Hl4DUyZ26JAR0hFkh39qz7TXc3r6yKOUV+YEYbpZylHPHHzg+tSR1HJR8B1tXJpglYmphaGs2IgS9E/HP2cWwCdG8DHcJOLPTe/JSxeKVkLIoKIvVgsEj2CHRuujZJw/KIVmHVhq/Z2nO5jih58glCMshW8u344yqAkBkRNMevUMBI7FdSzGwjrjwAUTVIijceRppbpielb++sucIR0OWtOCPqQZvs4HQ4tdZ3/Y98mQRoMee+yi23ZGsuxp484ZHZ0rlzKuQouT5uLWdvnW6K2Gls5hEYoLKKBAljjg5BmdZEAeDxH2lW1z8nEasPYdxDOpykPYKb7RAbjvwH3CIjLHXu6e0m/cpDim+oQfxy2Lk3HWlJ6gl0df+4ZomCR8V7PfNORKwdJFezFQqGS2/WZ7X3TYSU1kIw5D2073tj+js1nKhYxfswQGtm8HiVg7/fmE9csaUE4mofSIY7EKZetJ+JUtZy0zPN0Q6sRF9Ptbq5N97PbFdSGKjNPvsIRrrPd5f0Mhetk4VL4b27kIbYPe2m/BjwxaDsSe6+f+IfugEXrig09ripiddVSr2MCzBlK9S0v3eGJIaQfFdXTowZc3jIdNacXgnBVLLngcOA';const _IH='27a5007d4c365a1ed3a5b1e61060000a890a6f4de525a9637d2e3b9353fb3759';let _src;

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
