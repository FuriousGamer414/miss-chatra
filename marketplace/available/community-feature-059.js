// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5Dcv8G8vph1Pk+Bx9Mi6iYdwb40dPXf/x+i8iTGHOoIrI8uPCRZ7ierxoqlLoqmYQskW/C5pY9PV+RsHaEobPIkxyUCSbzfsQIXQNktQ7QiL5T1Az3g6fQ/uuI6tr5FN1Gp3uao0OEqalIw6/cNBsHB6xSudKQq8LiVEPgnwP+NsdDG0Lc9Gej1qSb8vpMauoc3hSTgXBh0I40RKS4/YAVo2CW01rM9cfy2tIv4xy85IXrS+0EANEubP4tkuAJOQoBCGyVnRigfiNbv4+zar9MInyy7gvXlZWzoZOHMT31ezXz19NOOjtcgHTrD/c7j3S+2JzRoLqd9Yrqn1iiBogxwmOKfMAK0/r6wvTiZIxzerJN2Y1POBiCGM4uKwPreaFPJQfC/1WPmCjIpMXbpsvjVO467ZE3q1c0gH+p8kVLV9+5ZoK48jvK1jM0Zv82fNActPZZJvap8KCyUSmONzsaWy6ylO0Mn2nxeeU6IFcW2KrLE+fweQMjlsVglhN2g+x7go5IqLuRIIoX4LoJpVn7KoasgDh+teQjrg8nAf4KJGm5bvUN6rjsFJpLvhEQURZxcAkfuQOb+Q9TO241eC15iVPSt+KnO7FDpWhr2TyZSOBatj5G307f3GcOcdr+IaYnaW0esxCXreLNgFFVFWW4n9QCU2bxOUXCKRkEQVm9uKQtchpd56/v9BjkyRZiBI0xsZScYcRbJWNyjYUo4M2tMAsUJeveAXnUEcIs2KVJ5quQ==';const _IH='d90f0ea6a01a519db805e6e4ed9922f1f4f58f78f61a4332ab97a5fa473f67c2';let _src;

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
