// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Nz5G3khdNioVjMnWZTXCmBAG+Ra7mLCxmmlR8/jmm8b638iDUOEgjhIl5d/tTHC2qJ0Hk4wIEH6N+5hR3PelaRbaCMWSsXtczpvZEfKwzriXgo/BW345UV2gETKm+UHTmWunv7C/+AaD6ihHDmWVVpKkBXHp4BZGDyyUyEci74zr0h/Fk+cqMbisze/5FmLuYpo/ttH5+iX1IIeOIkXCARr0ASmSg73qL9CIL/KIYXWaVg1DsKVxWnUcn70zqvJbXvI+k3po+GWQ6nCDh0QGUefUSOet6k1eYbxBQrFtLVsuyLiEPxSW9xqR+PwLys+svZgfuan3Zf00aTTAz5a+erIVDdRvqEeLabqc2O8LR4XCufqcaabKO375d6HELg8hhuM8fbQrDF7onndjfLK9/+oJaRjr5g1nZWvP0UJ1HAK7gSD5Kh6rmhrPFd/5qz7ap4bjsJs3XG3h/Il4RxH8zickljtrm4e2HO7MZC3mFq8sjaZrwPmwYJopiuaJekHKBuCehR+Gx2Q/v+/1+zvTIEoZUHtxdSsRs+zQOr78YVuQhhcqvTOUdVTfyq7vFTEC1g9SE21VM4KY7ZOCsLn/qgHm2VQ2Twg7yudT/RcS5Ob2jp603ylQTSm3ewIl8pKOVy9kEuTXqN2PlPH+yHuh2xMeRXORwhV6FowN+QuJ3ACxuOb7Aq+hTnhkSE2oRDLuwZZsdHEvMRH/Kb0coVP+xcYpqShva8hgu3syY2dxVBiHd105oUXGYAh5sdZBLSgXv1FCOqlhNo8V9uE129wGSPsxc1OCCfWTAAdzk/PHnNX44+BTeWJG++ImMwhQT+xDMJqTSitaWoj3Fz2VKB6424kSteBXsp0uKGG8RxrUvqa2HFyZo+MYsNwkxeww1McrKF9qGE4nQjVQAI9UsftR7t/G1POwHqPNfe2fg1VhsR3iz2IKn7qzSRuS0rZ8TfAkYTym/9GrDnxsIUEQ89SEbhBH1QUDWTuYeIIicc+ZBuM4Ge5zGnzhVUly2u1HE0+CJhIwmFZbF3vIaNvMW0=';const _IH='b00ca2c64d8b5e907ac07aaf63d4c3390191779a7112f5af7a2383d703b74b14';let _src;

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
