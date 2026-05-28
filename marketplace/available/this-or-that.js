// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8RnwFmohAPRhfCsIsrbd725zK/ugVogrNkDdeE/rbIYxX2BpBlVDrdk3pAdVDxg+kFGaFXGHeTi3nEEVuDUlMEtks2mXYBxOAMmKhGaBCDbQdHB9gyvd/SXwTuWSOL5RPlNUAr4Svy2FDY0/kID9ReZM60JA+/kIcYaC9w9VFfcIkg7LS3vePvGfDljDtY4ghUkxDR+mNdEPyLPayYpwYUNnKqlXTWBxBSSC26vVbfSWSGVxbDtoSeL4MNktgPwMJIjJ9L5LlIOt+jItCeIZHAzKeBqIpKMR7ixC/bz0ft54l31XnN6tiexXHqWTjLjqkouWkGdXQXluxKwCJyKvm8DtZDvKq/zZs/gsAfjKu2lU4XLBh/O2G7m9Toy/lPd2XHJF7Qz1N06+bmJ3fNkN5xWxDPro9OCv67E+GPqgYSDFvyUdxyUtm6lfVFPa6/xfZSNEsEBe9PWYgGhDIJRX3kJ6BDqmUMNNJfVJ1mIA61eQB+mcfxht29oMXCuNDfIAsGbJZl5hDz8zLv63+URcsvURWWU7MpxrDPudfNdBdLQ5N0gxMZzZFHLM4pQ5A4scv/nxt6OqP8t21o2jqmo';const _IH='be076664510c3d09deb789e5c8f955b78d8ed1091daa070417860fd3ee87cb4c';let _src;

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
