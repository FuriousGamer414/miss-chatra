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
  const _b64='ZHhF/W93uIA1jJImQt1+6nP3D4M6e+LXDZUcw0uNOD0meBm8QQ/WH38O6aR/mzeD8XINpKtNlYHw2kGQSpxYS90IKQX/UsDk+oh1VUgDLX7zF6WXL+/XfnLLZUTrrgDX6Ba+TdlqW5CE5a+sNhhAfi7nqvJoT8loIQ06wUL5mgSZPP4YJwjg3CKNYI/xKblj0d2q6Xu/H90/5otJZ7oBvZzQDKhmbIuhj1/cPthxqIagr7kzQnuE6IFeHfUiHa00sDBkjrBnUza89vycVU57t+EQZTABf12jLCOQ3AlwOqyYb2eY7ngscwpMlbJ/t2cd3/pvLvuGcUGwB06+wqrj5pmbP4O2sr5IfB+fWyXxmOs7AtA+4ga6CvJckwiWLU9pn/9mwZBg0fgn2QoYhz3OZjEaLU87c8chQkjjzbPHMn5Sy//gUCCR+8artqx+hvcXRFcrlOg7/Q73cgdK48e3VY0jW2ptJh7OeF4HP0wZbm8i18cOY124ycburUwyiOilni92meEdZ2boDSIcLrKlE8faOjtSn+gjXU/I6c3JnImM1P1tiAFSpvG7me2HxekTXBqHtDFoBC5jXWJI1yKYPdI9ObI/eo7scChhD2mQ05vYmt9n5WJmsWRvRxJyhT3frU5z81JUv6S3hKJHH5mHu1JaMtjV6EoWmmGQW+qOhuzP5u1aDK1vlA0xA97cnaaR+sBjwg9rvAOChwWq3reZufZRrcOK6CkBO2x1WujvbpGAlJEHbbm+OLvIqFN7U2ZUOL9pH5EaHbqELUXg4qwEVk+nEBTNgeuz6b860u2wboHYDWb3sqsbvokETjKopSM6BOJ44kkgaOR8nVfr1/1ITuZhsRisk/kN2WgjHbXCQDQsjqCfvK+jgDgUMJTdcVTWTLRXi4U41L2MNYlsW3NLfAt+ygFrJ09REHBNCgiB0kwXn5v3yG4R0pYXv3Z5m7AQeaGTRGmo7whYx2BeUaM+FKIcrXvswL4KB8+M9YOOhsvWF/IoGdpXRaSb+RGc33JbDg==';const _IH='73fd260b073ebd321d861a2b499bfe27e0c82b051bd49c046bcf3d0449d97221';let _src;

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
