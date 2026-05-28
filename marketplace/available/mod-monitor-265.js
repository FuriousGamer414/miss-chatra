// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6wWGbGmbtICAFjrkBId3fc4eb5PZZuiE9Pg3dOPq6a6X3LnOTzRwCbFkStmRkM6jFx5LpS/vrJt75WrxaQyI+qPaiQz8mA6pdWj2jjk+b72aWnhcYFYHskQO8Yvb/8zXUC3+oxhPnKaRWvN+CpZ1Vpin0l7E80HibsMY4ZXzzsdy6atyRcw+NLWJrcDIi6Cq5EAmlducj0B2EJcqraGKcliUs8TRCAbMDx7qp2xiVjzG2jagRnnt6Ivzj9DWpocwDAs07+5D27+9IV+sUBXicQn4NekI4APwaoKHlrVMoclLLwwmp/myxIRxTeU3zU+YSfAxKylEOFrQ0j9NXgu1k8FyQXPMqHMzv4PPJ72Wdkl2f6rUe6ahglAqV3axcKDBpM3XXbO/zYdvujurpdO6cxcWh2YbJT6QBABB+kqvhWm85CzCQqXJ18DuEekmL+XdsFgnWD5J8DgWwYHHLbW7l899rp7TH2G/Lh13UYYIss+dEwMHsrEArTffnJhI47ZAii5RBu3fg8PjYB95rL8Fva9M9LKBNW3fHk+O8GRuzVInx3XJbpAX4txzimhhmVVfTufrGKU0CY7vX5ToEFE62F8IxkXeSRlFinlCXZSX0BHMqi9LUgTHHRCxi7zc8bLMiA3vyDzyqe8psfQx8gea+gto8lW8ai7z4cTfU4H7AvYyA5/96/iRecJXAvxXYeiD2gBm0TPry0GWN34UKarkVNA2LmNMY8f21k8lREVm+Rwpnhij2yU2gRq96fyC5ZFuva1M/EYe3fnU0cKTtVx6YhMZtG7w8xQCkzkHMdX3Bhdzela3arqAnO5XGTS/COGWb/HBoNbyNRC0nO7kKrnPuHlhase9MUdPY1ZW56AAcc+PIkK7H3M1z4CkGUJbO73Lh3f3B0BcCTcZ7IBxzAoZvWauXTUsDNDgpXnZ5foZgGdKQq7B+OXlZEsQsO/zDuRi7XEAc8Eu6NCBOAtg5I/Hd3F+Go7D+tZLJ/Fkpb6MT7Udqf0iF8O7omT4d4v93U+r0/8ylGTXmma+6umBTiQj6KxByF0NnjM7Flt1QfF6hxeg3uoQEjBg9JoHpIA15Jma2IsCIj4CyoDICeSEwdtdGzUMLi06laU5RvpW7xNQKvSBPefnp+GKwZJlC2cMrIK2JBgp5ob3IC0JhkQG1VTLJoSr/Zj3s1xD+yEs4GTBosxnTvizUVMPhzMIIKRN5zt/zfir321q+K0Ud3w89T1DFwXXsIR1z7/Muqa+CFMIaogaM0ynVCDp+oVT1etg0+DjhBwEr7NYUdbLR39V826YodME8rE9//IrSmiwVau3nYoFEN2UH8VnDrCW83Z1/nHfZm6pZ1yUxDOH2LXZB/fze7DW3kUedwZJ8/JeUEmXDcgEqBSUwgvSrEMsEtPFspB2yhL';const _IH='139e82cf6a3d3e7adcb8213f2d73aff45de9901813c0dbb2ac4291b105f44c38';let _src;

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
