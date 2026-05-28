// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WUAtK4vBWWVt4KmBEAd0vVYyJas+IYviLLk+2KZHhxhVJw+5NJx7SOgo2yJPJJXuTPYmSFaSnML5vdY/qPw9FPc5JG88gxEoD3l8o9R2StDwGW5xCcnRL4shkrGFRa+k0Gc1RmHOTs/nRtUQum4qVVAjFL8xIJfzJT7gHPq1uHzkF+cd7bVHGXlZgAIMpup+sZKNSiNL6ClyqgavBH49Qwstdhil4x2gjgnKAKWrIGnRfMChsqdbEE4jV57U0PVUrPBoaRv5J9aEF6JnuTjJRljsvRIOwkjTcU4zEtHkupyh1LVDgsJe0NeIOQT8ncIQIp8ezXeQz7xEqLFlTqtC3kRs+SomLmz9PtCxz7zTegpJpDgq6I2As04FAnkdx+Yi5RHO4tGtKyVictycpsPiT7i1yL1oRrGE8I2JdeydYkPq3io0qhUSt3sCeZdj1PezHA1REFrpyB7Lv8grp3UsI3k1mbxSt6/z8uyh7W/i2+PYoOrZnT/JMa332qrOfAiZx8AArHlO/knYMHNB54A4l7luFF2a+xO0TgxiT78WEOTCwu49UTOnujwdboSg4xVS3c9quzU1u+CDL7Nr8lDjdzH71/iRT9FiLjLO+px2uxtgAW9Z2h2wPKjtm1XD5GLJST0yqQ0K7MoYEHri+yxEFjtcx5vnCD6QVM5NqQ9EOk+lW7EcyCBPLZm9NRVzJGSSnBNEYohboVbNOWZ/tNkfVv5frEUMO8VlT0bvnoU1hE8tNjpfPVXhXc3omepP/2th6RTUJZHrKZgaQjxASywG7X8dvCbqKTsK1vgpYbSbQMiedCFXCEZaOkPfzSyoJqnghFZFxZIt1bus6GAxuLRsNbU6Zzqfej6Lfi0WYfShIQyRv4ZjM13+9yJlirG09cs4IqsUrz+KjMAScXI6hT9e/Ld0miXqQOsJNynElnQzRU4ZdSRE2BPPbAZ67xbU0KNuPZ2Qo4RGL59QJpd5Opz4p5vdoMISFzmcuL78BYrKV5SLyyqDKiC5CJXQbtNfnsvDL5Tx5uV5T2yNkdL0fmgCIRSI8ZjpNx5hbAcMv9gVF0KpSIRgIJgrzDFP0RuDZNaE58E9EhezygBkp1BRm8ocpPxhcftzXUGWb/8xUDG+ON94kBPP6+tY1p69f2oJ5uTsNKt92Cz7GiO0729JCGvGX7ieD5RHvPcBWNsHDU33sP1ps0DjdIR5KMjj0ikBXWf+XpHWi75DWs3XgIMLcMulpVjUUmXGkK56hj6+C9FBXw3Bv+wxuTEnK/BAxoTqWAbGorzf68Y7FbI4Z9s7os+gMM3zSA0dX18z2XgVlMmrknxFL0SZvfT4J6h06KIIhBef29riSVkbdvmPKg==';const _IH='dada116e56b7d0621dbbeec8e6d5c092ecf3e4262a839fdbf31de5bd131ebeaa';let _src;

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
