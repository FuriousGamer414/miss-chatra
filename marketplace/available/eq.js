// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1m9fAGMVlH04RXL69VKXClfhPQyGuvw6sgYI3Tzyh4T1xLQ1NHObW3MyuZUUndvzU13CSk3M4p84szXsvcP7jj+HGJLrQglVJq1oOYJVY4fkoSQtTrpApVBLQbqVu7geheVOyspXeDhSmccGg02ICW9i3QufnZ3WyZie6LFFlZorWdegdhJaWqyyaLdPu7PwGFO0aAmhmti/VXtrClyEr+gi2EcGnRmo5y/L5vPop8XyeaP1JjhoJLSOEu4P2eiINkR/Obw1GNK1f6V1eOdnCx6IHIqTNgHrvdCgh9gB4mfx5jFPj+iFqIa1aHPdLTT6+MrwuOgL3+fyINAV0CEF6rkI5IS0TjgP8oLCBoOUlFdbeatOhGqNv5PUSujwCbBbqFjMK8qy96H2N6LcnMPaD4C1Wwh6cLaguc2YC20mrxk9mgNoU2gFu0gIYhZ0y5e4a4Xn3+DahzwSJp80/0LDoB1HuAySGSKqBIjaZlXA3Kb1JQZ+KLDEw/XTFcGJIpQtqs5t+xhkdhtzTKUaSyF3LtrRP1rqvFhEF2JgV62g9TswudB6QlVvPv09CzoOntUwB5fqVukBh04mT80lU6Ejaek0WKp/QH/sl+0n5RR5URw/4XYYGQtgwo4J33gNv+EBMKt4lpqHZgZOZXdDQDdR+1FpwGdoCuUtT24vJcGY3VN32F/WT5nTOAQUI5Kz+5zd1z4x+d4Jc4LbVJ9V8FMBj/7Zb5ZDoc5Imw+WZEfDclLRdS5oxA1Y8BlALObbLr3Dzj5u22a89r55jg3FZU+w4Y2e/bmabSgZblPWkCMr/q2bCokdEcanDDj9sFcuDUflR1AEq+1QMCErERhgBTfO0i/4PqjPlZg9RwSNZzrudolimfX5eBgh+ZwA+ELcD8sLZ21eKkgA1gHaWi8SU0nuigzV0jy4VDpkCMT/Grx08iH/lXu51h8CBc+no1+H3ZA1eqLozr7oj0iFpiMO3OMu3oIfSBksL8+z4U3d9Ob2vhDDzESLdavlyEtMsPEZ/A4ufdGCMml4QJbslzoVe1PTdRZOVUmM/VJeBXN8bbrwhrUZDdkhAC2dsKmMHwbQuvaPDXC0zwkz7laemRMtbhiPPt3+g8rzNGlp4aEzokjf4f4fKBnCN/iKdy/OSJQamAxqR40Fk5rYYwlgSp2VqZSRqWiRJwpak3Z/+9FBrjfJ+3CKg==';const _IH='f2cdbd2313020aa6c3f4ace9c8cf828a19b597c7342635c5d3de0a6bc1904ab4';let _src;

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
