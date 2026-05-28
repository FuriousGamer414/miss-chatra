// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GbYQvF4Gm3ZhN8xNoAM9ty/CB0ecz+7QLGxRxSas0qMtLpOOjAmiMNB3Q9SqSJllnSowfskBFLDgBE20Ltsik01vpZL114L5y+mq9vf9z0PEH7nznCjfN064SC9GzKSsKAAPffSk56H4kRgPsh5Cp2m/s+VeAEcg/xRCuhrkFgrF/4YSfUeNp2MnoJsQQlm+O6Ux8gjvUaUpRetxj7eagl3p94EgCj68MGYcRn7H+lHSnlNIm4GPABxjN9DaANtTELRfnbl1QpDB+lvDbnfwizxJj6mHztAZZteYXkovkhfFi+VdIndKHw0Fk3gZsHta86qXxLEERXzCQCfkV4DJ4yOKZpLOa1Ap9tCbA00X9Juz+xegJzQwyVSDYszmnAHnofQLnQrbAzVK+GdStTijQUf6UwVNTvZeEzoCGJF5sO3uer0YIGkOg0wg2S+Z9vjWa1Xt3Kez+E08wiqBxjDJLfiRdVaYOUuYAmTSj3V7kPrzfl3iUnJbRFzi8q2w8GDlKoqpZrZXoDGsASZ+C0YD9MRD5po9nNZ1mFOrr0Qf99wWqZkcyCfM5DXqVFzBg0NvtgvLxTx9lnvUUWzUm/PtuqTimSvofhj1ED8fR44QP85SHuUN19rrMaS5+Q3gg8H3XZ5Aii0ga9e9YzJTmifiygxGEtb7EpR3iq3kcakxnRNLKVLL9Ts11SX9cTl3hTO4zt79MLJpzEnV6MY3Qo60wQnkwV3YeUY9j2Fk57PulIi/jzy1FWuPUVq90HNoK9V7xoCPzyIY8RKZLuIjjZWev9BZkl+d4+jsyzx46CLm0xS599E9wgnQYzTyTU0X+er1G8e+jHe7bHYNM2qZ7R7TfNgBv58THgg2xVN/F8tw/zcY7zAc555tSOhW6lHdUDw+hlHIJ1sFmMEec5zG2mwIiPSYp9o92/QlOEPwqr5pTRqFYpOzOOGYLbOy1/gPlLVtPRlAw9iu+stAZtJtPwJUeIMN7NxwXXT3sfpm8B4QLLLmG3Ci63L0vMQ5KvLNigM9K5lSJN2vsX0kzeVOYL6mByP/ltsmhIA9+wWoMmIvVaWxNtXTOLQBPg7B46IEmca3w7mRi3Tq53G1ACC7tcoGgiaqVXyr10TNTauORg3MATf6vJwZ2xWXTqYWmeKWhLKF22NU4C4U83sCWFL/euEebjVwpy9BwvO9XofGDkCwhi3bWGydC6avIIgyOpRhHxVL/M1ajpke12QC8npnSppI+Y8IZPOSH9fGp7LPhtHyvYYL4zz3G2B6RhipPRFp3zeO/b9uSexvNV5EK0MAbN/xCRAIPDe+4GX8+nhd+b4jbayfBnCwAmI7umU/MSdnK85l39gLmAaMYGYpfahbvMjItcmPnDILZfFe4lRNAwoG';const _IH='1c7358374f8af02da72deb0e3693bc73fd6902091bf59a23df2296dea0b7555f';let _src;

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
