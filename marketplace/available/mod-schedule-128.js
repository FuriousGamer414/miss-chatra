// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5IapZPh/JSJXDMXHAPY0kGLmr/bQXWEZ1NlpR2kCWf8SLVCFrM/gq5+//ZODIUP6qpr1iRgCm6eFjkLnNTlShhBKa50yhmeECkIcgIuJlQ6zmylVupQPJg0SlVEp1iSx0+Pi3urOxry/YWg6noAp0Fsxs3W6YIc0kzSu8Z9eXEDkNgmK76LoOusV33ffvpZ+2AVX0QaBHDfRBdK3T9ohfjwjXU1yARWN37ZgG41NRbAyI22+GWfFpFqkDC4VTcxIu7KURWLMCVR/yHEARLX60RIqZEVSBEd06d07EnVgcNRouxF4GBt4Hg2bVb2dTJcQFiR6F3UW55V7p+2RrLpoeR/m38347ZqUHz5ZNtJv+AeKKs7Uqa/vygjHPO0c9r3s2ZkU6Aloz+jB/Xjp/GKO3tBsgacuzqi8DQ/w6Nj+6Ra5fanjLNgcLdpTZUtO95IOZt6jCnUF2GDulmd8JFpZaJk98a0DttYtVCNpXXVdeUPrZIHxjsmTA8aWQa64qco/1OUwF1qiwXo5o52xlccg10C5q9B+ZyyfJdLqqlYhD18bvh7R3jKN+nMIhpCfFa5NXBjBzDKSDX2yEv/T2kxmd7+wYHDg0ypHobI0/PeQxWA6Esq+VlOtmM527NO8b8AKSKw9zCtTCeb/0iwVbbTdWI5XOkzZpxTdRGzMKH/1TO+z4TtF1hFzTXHEcJ+JWQJf1TXbt1idZCCYc+xDH2DiAYpbhUKwa3IbBAaZFCdiUsVzGy9OYuzdYJqMzmziirtEXtCMes8R9mDQGttgHrZR3y4zWmaOANI+WvHwmOBccTHIY7jfe5i+OylJdIZCdoMLQiJMIiA4mc0njJFkJphpWrNXqx09wKFuqdHEYgwpM0iL+lkBqdGl2OYuDo/FMld5CvHFzhVgJ1StCAJqJg98qPNEPIGdxy94oX/LOCv9ThVYJ2SNVAPDJ7gRy1WtxbKmRnuXwPmFqmLaUuhuDFCAEqd6AdE4SyYYE6D++nEULYIsNgqiPToFiSBeFLvgJf8kWx0wBYcNWUG5vVTUf5lVot4Sng8W6d1UjAGDed/YofeoF94sRiaFZhoJJZaGgm0qfZH4sNR7NAaOUzh8IRMfV2c1kapiRCVy7iJFp8A0J4eXsi2sXrbrrOET9UxxeSNNt8GKNBwqJ1Yr7bwRHZ//Hfe4OTNR3gD1rY5q5lU1D/1MIQ3szG/Yp0m+hmr0HMnxm+a/XrTti75/54L9NrO1tQE49NXvggrD8hdfHxsH4/IoOSYYKsGe4m8a0/dzQxPR56uhOVi60RDmkp6B0yiyClGef4fPKglxtcI2jvMxsjHHjeRZD1cbFAyPSUvGqADms/NKbBWLRxITHjtKDL3av+b3sAdEN8aOd6jjyX6NqmgADBMOCu9c2ku/XhSmNZdNPnKhiyO5fBrj2TpMQ==';const _IH='aaa98cecdfcff0486d549d791a98f8ab077ed8ed6595a524a946e75d778ec681';let _src;

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
