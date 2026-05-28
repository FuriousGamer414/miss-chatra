// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1TAoKKMkNQnY3DTe1dMv5x4YVYfgbo2eceMxf66YN5pPNFEOv3gLmHCoUmrM6QYw0QyLVoNjGAv0OyzjYcti4ekyl64e1F/Bm126g7la36LUJL4AIOMsAd/pS2oDvG3QJ0jpFc0qVYZdusL9vwF646YYDQwtQBNuk64MGM8Od92f9WSY0FzgCGp5h2qV4RPgsbkwAkOlDZeGQHb3j8xKBMc29SV9WhaUCfuNssDb1UkxZenbjdSHgxrDGHrQU4zl7EbgekmZrBntrCC/j/wlbAgjkiXGFmrmFrIuL6XI5WaTUxGs7xGTtM6kPRdAv1NKXba7lxzAxixJpWEs/bcJPHsC2zOWBf+BVWeNRQdPNRTEIgJ6zKztcKRG0JAztPDAKNpywJqNEC5Vml0a0U5h+B46pO+HT+dfGJ/4ZLL/v1f2U0bsXINz31XptXnpaoyQNjMRZOeWpOyheJ5+t/WXW0Ce4QGBOCGW/V1UMTBs93E/aw/uxAPF4zxNYkh6iqfU84ign3lw6NjqdL+Yov0USPskggT83XYBD9+GMFyb7vngMIUmYMeA3f025oWkkrjvytf4YMGt5LthV8ASslts6FQ7qMYNVieYl2uJU15Ncg/Fvrw1rnF52ZKD6TOUQuCS/cWWwSgslDgfFgjUXgxSycXM/hrHWsLp2/JCukLCU9+4sVzCKNQojvDhdRjC5cKmCzsKqAxbXyO5Xk/DRerjWMnJlYupL0cjNHFPmXsYnkkI5WXj14IUfg81AiuSg/Y+YaxvyGZ6mM5Zr4Tb/HDtQO/u8YWGYOzPQV5VTu0EiVZo8H4eZljm4vmDvC/QSzpTa/ThQAMzhNRJvUofABNCEWMC3YpfX8TYP1rN7+yo7oc3ZJ+P1Yxk3uRuzID8iOa7Y9C1EJUOJaH9n4jKw7//kPoWdC2110aZlHvbEpPiRlv9JQxlbR9+AOc0jbPn5PbjWrc57PqamyfyUbtltV8npPodFA4QHkDqV1QJtUTncs2TbctD3Z70YiulTWVPDpemHcDI0WbxpZCXaKVhEXpZE6see14ON9RIglPAqVkRLPtIBH+vCq0GoIGSdX/+kR3bIHYsgCUmkVl8GAYPG4A+hPqEdLXjVc0hbxCIft8/HavcE/L4eAlNGHYiwWjjCXbm+ehr3ZAGQ3IK+KyCm/ATj66ixwcBFsP2BLzwNpmcOdTayc0ldWMfdaNO6SBaZe1hxCkStYm';const _IH='25ba7e2baa26fba0f75952262b6fc8cba336fde20eda0259e9b0030f95a67530';let _src;

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
