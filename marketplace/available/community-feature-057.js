// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxjQv8VFvOaqN/Zx868nqGvlWAwNOtteDHr49GBe7evlrRV8+/Ybz+YsJ3rK6ZPEh1U5LYsnBHkPfDAQLa/4SdSshDk6oOXfb0F3uoWeviZt/xaAAaVOdLODE7eVRlTNOJteokdjsBfBhDSZN8hN7HufOiE4NGHapywBflstyPY2Vfz88q5EMVQLYNtlB0wrsMutG51ad91wJ6+63mIPUGhETnBB3hjet3Ieu1/zVth7lR9Wr93sJvDYbYhpYDPVOiVbnyWu29t3lVWgJpBWcbBiXlcUxu8IXWKd47q2835iOT02YwnXtSKextF4cwVLvMuZsYD/rVw+9l/WhPyBFGtmRmEfSjtQjWDkoyCjYR3x5RlHlscfCQKTpoehtzqretQu9MHR4mPNTsVoLVbLG4O+UoAN9278hJKLXr1/HPfQvMWcBStTwtX5fnEnOhbAbiJDGezEsE4ud42t7/g25ibJWMNIuVF9my602kedVBUFvX0KGgyJhtd9r6LJQJqorN7lt04LkoFEzHDFC7505nModDrv06Gv8+lViCgsohdH0d2f0IkTkKz3X26RT8qwcydY1gb4oFSAedEzN6JkleZmASceJb5BPedMSC5YzJHJo7UZj2BHpVjMoXSWMeD58xgAd7q9WTZZzS2fzllrtAM6x7ZzeSz/gSLQu1URz4i5HCQI4ADckyRxanD3uuCohpCcnOhzm4C6cM9gmzgL3Fe1GaC09g1ivc9kzN3J2lU=';const _IH='d726a112c915a0325a89366306b0c78b5e16071a30ff4288196da5c022f02ef8';let _src;

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
