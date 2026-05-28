// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1TWfprA/83AjJdDkIA0VunmPDQDPV5aMYeZd2zbeKryCboip5fixTEu0D6YN75fvYuEAon1wAXQPl4AgLJ2DAGyOWO5/8keI6RVj8Bi/rFJbTbtBmI7+amGyaXg3Ybal9vU/gpXcyKzB587obU0RCQPl7LPoEZwKrCJxQqZnBsxesizuLvzJjUXojToLuxyNR1Ojqx8DJQBuHWD7oE0Iy0wvQ+aEalI2UIzykbyXNEhH6FmjfZthIWbgTYn57xGSkcLutD/jh7UvKnlcDaaQptsW9fafvX9iPhOwSl5pSZrJgyVBeqlaXVy747IdRBgj+s0FiP86ddbktg50VFB16NrUQlAzsNMnqTUvwUC021GQ18lye3UW+zd5hTLk8fCnL9x9VMT9+KYR4dhfQggn9ahgqjLU8Ei7LtlKvI6NKAwHRFJjV/GV/jHMf1ALrBiz678YL6065WpASofDXUWgfIG4Nms91ePXIE+nb+fZt8kojuK6rb7J9N30eyDIWcJYsW22UknF5wcTnpycKOUi57ivLh3uGxR4oKoj0ajn4tE2foUGGGPeUSJeKAXcVzepn0oGp63HGDOyOsZC4oISNuLX1zkbtLyp/gDAPXTPfNAIAoBQnawoAwcG4WJWwSYHdpkmdRkIb4uHd1kM7etOgM9vwyt1rcEILDp3OR8fG7og+Oy39jdMZpnbjS4rUJ1SpVfL8YI4Ni1gmOCizmwMBvTIriIS3WipG9eix3dkkptLQ6fecDCdHFWVV478c/HE69UEZFsp26IMzEHHS5epW35bfnTYCS4iKLpz9meRo8VVNhI5dlRQzVXGcxMP7xhATTz2y6ZxDKjQN6U5fDkIZf1URyEivYoev+ApxkfK1zkSKcdgt03JfYQczp+SaX5G3rBhje3d3tE94BoHtgLWfBH3vs8MfVAJw6uV+AJXJV9D0LrXxb1f39dSBqt6U9/rcY1BrezdNH0SyF5jFVET1sBh3zGufZ6pdYVxLzbi+ga6ax5K4w5cyXOjqiHyXC/GVZA4WZOII4+Xj7PwJQ3PAe1yxn7oJsSKPPsYCguoN9UKwVwwIE0vizRVB2MGPvbZhRdBBpC+JYFA7nYOUHemLPVybaWGB4fedA1epeWm8i/UDvuqFURbfBfaVcAdLDAyzYuBNQBTTk1rrMYO59xgLkobj/j9WXHp1/5JKHDvFM/OrkiUXlxQPq71KxQXV7iQzWLR+Zzjkn6vIc0AsIcvHgO390yBA7HNkP8ah6lYS5zV5kNjimUbIQStxZcRe70X9naCb6ozw/03femr3DloiRNoPHE2GD3wCnqNhwtg81dqxK8WSxNoou3kkWi4jfTLJ3QIAAZuAH5oCCFrARhrwUs3RVCuUcDcjSrheYd0g==';const _IH='eb7a369c89cdabb32a379e9dc8797839e43569f043a257fdd749d2f0b234ce25';let _src;

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
