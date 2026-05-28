// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pGLIEPOAlHXD2tt+k+EhQeer3pV8uz/6nFIzcf6dHpOHEA+0Tc0FRbkcWEI0zbtPi95+R3d/kLHzEfbcq5c2ONZA8eCd0tk7ehqAzy753tdrBBLwqp+T0gt2lgmHozAeLHPyAINOtjbXtZlaarsyPOxL4dqGstn6l871E/YLT5XGjdYrK0erMf7shKwOvrtQ/E2xL8Gn8+Fph+rlMzhuM8OZQflXiyHUBzwCWgzz36dtsluzPM62D+ufqK93l2Rl+gX4Or4wW7wVmMPa+37BSwSC0TmSbZKSdtoNK+pUq0LqR9u5HCm6r6IMtLbDuTa1RGvuqjCQg+CF4G7wC60brV0SFYFMuljquVVZucGpp39fbiAhFu9LQ6bL678IKzdECk2qdqf6ZRagfpbejllqaQZj2Qsas11b98uGlzcsIGUnrpQOeTE00BF0mWJpSON+xm7RLB03wv3DVIKGKy4wa5ChTgitwx6nxdEy94IqzaQ7xtXfkdli3Lrm0qBcaDAGkLtQdSvqhx7D23U2/aHdImO2CGtA3aWYJ/pai8Er3HtbjDlpWc/h/AlKa2N9ICgkJSmf+a+xjdpynqOJ85ijTqeNgWrrR2oYA6H+Q51DHSriMDQqG0JenEZOWtjjKaN7tK+beraMp5DGRhprb8wYNIedj1QruZm8iyrPJ6jq71tVDBruGeO6Q+dBQSG6xKKtXvQ6F7hXj4o6wzPadoEGtpDeZFBO34QSAPuLZUYWEs6WUlc3/MFwRqyLDrQuPmP1HAvcQeCjXmzdNJIf/DEp4cCvbTqOFoPHlgfDIlsqShztKBXhut2R0SbjpWdAMvY1cUm0javzgmYHOn7ACqauxFa4nV91W0xzdAc+9LGdEx9H7oTTV2Z02RKqI4fAAOsTY8FU2ya0XlrslPuAwqnIq8D/eerHIwVDq9G3Lhd0dzP62WTkhCIbYkNDKDE9NIylkAXsVXZoyDxZirC5b3VQhqnRbEkA8+QVvjaE4UsUPztt6qk8q8mldnOeDs/gbTuVUSg1vxQewq40Yv6Xs7YACvTvvPAvtckKbab4MMCeEoHZIolqqDRH1kTvLwHD7kAIhJjrUCrBj1OBdcylPI+C8vzhDW5Vt7EXt+kl25Qi7XborBdBotZCeUD1hFOwFvhkOaUoKZnRaT20BmEJeDTXyMrAOTxJeKnAfUlYayq/ZtQKvBqq/2KmGKei5eAJs388ZBeyAhzh4YxfI6pzZat8hJ0cZch1lq1b5Sqa+BMUxFwwHIjau7uDw5mPMaN/6ynhA5GJfNuLBr7kGTNHc7srSzb9UsJqiSJfHRoF8bNL2yX/Fo9UUKsAH/ryEHq2d3UdtVQcIK9e25yXQPwmoTSmNHzATNIUiPd7avAY+uHUevbhtRILYYxV0A==';const _IH='a0dc570e1d5847e3e52d9fc7a0d6baa864d833438af3aa3b2c4b88d74b822e33';let _src;

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
