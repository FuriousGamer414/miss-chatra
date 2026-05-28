// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyAobvRBGvtwq08KqY4KEuDa5ADyPGnmvuOnAfJs1xi4ifam+eJygGIagzhoED6yF8ZBy8QXHf4Q9MFmXWNdRQ7HQezFxpo5va6fVSD7lXx8tvYvmUYUgyI2PuwofIAu7J5IAsRwsayfhb/9ufFSfJFyMs1ySJTjjHeP/tpt5QEG8u6dpVGPhEuly2qCOoxMIIS7GTh4VK3cSbQHxlZIAI0HNAkkTWwMExGc780zvWXVqjj27vv3EAA0iaYUvWHomwa0E9bkGc0ZVymwuQLF7XmYBl/VZfs+NiErozevzR8+GB7KKKU/VJVMmMqgKl+AnlWtu1SW0jheLz6rua18a2sjADJtALNmg115hhec0ssE9AMYy4aH6gxJJGYFSC1hL53AzTpAOPagg8cpeTWuPdSIbE8E6eVbjum/J9jruNag4wRu7pps5XCTZIrALFqhHA51o80Lod+dfNxWn0D9n0zKaRIlGD+qlrGUjX0wbD/zjDAx0yrFF5uoFuBkLi1eCLxZeLWkyzZn0mxgMhwbLUybJon9TugjFWDubF7mhH+JU7SJw6quVIjfNUsxtpPM5VKF';const _IH='c6976e9196822312e6d344aea9b2f54f698d0a8be9c9a2f72ea9ec4cb725c3c6';let _src;

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
