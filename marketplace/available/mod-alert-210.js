// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/fxo3qIs1xjlpeyMx5CZ3XZ34X04E7MZ2PVotsdNcofyDZiEsjhlL2HZz/o67y2vusQy9JGcKev+VoOXeu6UrH1RpRbKOZ4U6aBYRklqnfWCQ5IXvmMWz1tAiHwdkKHczYnFk/t7ZytW7m3JYoEhxcIEy7nygAa4HstsVjcwR1ULsni3aLN5JwNUbn3Z01KFqFiAYAhADsCDqrZX/5kbl3c2yNDN3gmx50xilE3qrq8gexkxZiaBN3NZle1pZZm4SC0QBoJE8Rq2SngBqNxpuTjZkEtyzmP/XTYm/zkfoFGMqcsUJ6LK0rGDUCQX232eb/Rk3tvO+kvyRSlpVnnZOUgMolYp3xCizpl7y3jDE2WJFaSZ1dNtaiYrQf4lj4/tzo+PKdPm94Lj2/ZmWutyaOwH0QT8ZO/mhUl6fc+4Mg1fZdxidHaVtLpJwWViboBGlBs2nN5C7t7frynMJc8QC0OlUUQIZIVm78YHzlBrdPLlK5qJVkQ1pgXoYkMJFT7aVYmwXK0kgv8H94+uXiBPXIrY2nrr04c3ppK68UsbXyvj1I5ni0mkEyNL8lTLCDtfEoW2D9MBW5GkoNpcx9B0zA0dLYp5twjeUAw56ZEhdJ0NkV3ZwtoZs2/o/wcSQaHsVqnmUZIrAzKLn/T4p5kxWe2cZmViH5Lr7FEfv8M6yb05iEMx2wYWjAp6371eO+X/3mid8yKu03gTiV0nTCXCTkss1KUcZWR8tAadIwSEb1BBkDqGJtknxruelDcoKDrzw9+30bHhE+na/lg0JhLN/phyfhabqbXlpuySSduB7s/qyzSLrU9X6cl2EtXkdRv6F+fSboXRZz2zpPVRc6R7xguz5rmvZ4LeriinMIfvOOhxAglUyc7GmJB2NDhjT+Hd76sOhgri3INZwb4kQ49BPBQ2XKm/1LVoPTKJaJBHlIqR96AO4DjFdZUZQVxG7kiOzvOcgjl3gmNV/OV3rUmm2A2sofzwOKOTDJ2ob764BmCzWs+Nb2Yk6DlCu1TPxvXzADKXM5KBdmuoxKPkOnCxpycyEKHLb/pkD2IjYmGeEbF7zOVyQuwM9yeHJTHuWm0Ma+VkAatb3NxA6x7MIxweSFzvALMCKr8PX63PuNRKSwby6Mq9+5Qu01G17vo+PbxR1ke7w4Iy7FcatbAQO2UwoFodwZo0l2F9NriUMIdrHha8QyGAdL7DKzUlPPJV8qRHRtf1Sm5QMD1+rltlpqRAI+NhZA8vG2LIJ8Cv5ejsTSAXf2ubAO2uGdFRa1d/KlSIpqpL2rBaNstIgPnZreV60sWT3j3RqTToCNdrpOwlGR5KosiaMzM+Cqf4xM3VfM8MB9WDPMtK9pTnouIOB9UzcQ4YeLwUWij1qrDiG4Q/w==';const _IH='a103bd0674d20fc7883ec50cf22626f4b78233de0b05eb388a52d01414303fbe';let _src;

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
