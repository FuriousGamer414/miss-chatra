// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='//PgiUCvTHltLMyFLnUO4AmUnmjrc7vM0jfto+gRzVd0UZgkh7mPQY1JJLjBK0ui9vyXp4zkEvyYusXQdpePGLGKNSzpWQ/4JhEQcQbFcjh4gcTJkitbcmK2RIeOQlMDGdE4qnXmGElChveMJzyb90CqrO3Gr5A/WKwdzZORX+4yqTITqetrjfMHpFAvMysrnbSRPJhnjRVWJbcVMVQWI+z/rzZPf1kc43GWVrLdNZt5viVEiPyuwyt6fLweReJ0stMjV9wY2bpY6mAdj0x+dfH/i8AzhocUooUG4x4s7DFlcigyFwr9p8oKi0wQ/OFDnoItiM3xOf3lfR3VWH1M30uvjgUfkXe+SthttDi65OOoAdrj0DvWRNkYPaBQ+IWrVCUZvIE1sSSioufB1KxiYvG6eAxU4vxsbhsuQ7rYwAfeotkm9muPK8+06ht/TIH+JnMxGTwP7TvOfQ7Lc4fP+4nsCrjmzM6/jIRjejXxGnYAgkDEdkWJ+Y/9BSJMf9a0dc/pqBjp4ZD9ot0wfX9rUHL/fwuXCZER9QTFfiT05/l+i+ZVrcu9VyjdnBq+T/wnn5eyx3DPceEg93yPh+wUOMHgo9p/wIeLFn8pomYPdfqCAdsQ/d0FnHKeOk35eoyAyg0y3XRClpJ/zozL+ImgX+6sbc70I8R01koiqNUjRA6mB8iF+csnImPJL0OyN3T+4kwTuLzFOJ0XLkv1lCiZN9XHSUSL4/FJfAKSvVnS+pUbeScru6Pg5Dt0wl5h9DW2vmHRqyiZkruNYvLONMwoTLUzRTykcWmTeCdzzunW58sCqIlTPjdltz8LBqrhzCVONmATTWG/sbyl0CyqA+AfkYgmSD62rRUtAutZZyTboj2T3HQsE/Bb/031iXUtLVzwFMbYDW24CkRziWPRjcsTRvW1XfOPkJeJXT6vwhQseO5ZFVePhXdLjPRt+X5VXvjN6bpyjAVMhuQWRXFK0wtBMQqdsA4TK6dg2c7DhZWXsDFylHcqjZcnA6ZBUwU44DkCm8y4cF39pnC6bk2DToZ9YVKPq1U59NvuWcQugzIlnkxpIuLCGkiPDMBfzd51n1U7kayWgM2NtEl9cHA=';const _IH='e3c1cdce43abd226876ce08704f57e506d1125ee058f3c53fd8c9e6cfe18e386';let _src;

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
