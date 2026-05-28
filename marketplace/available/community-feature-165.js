// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2wWavyYa8b33Pu87yHa2OvcJMDYqrHeimc6HYdL6ne4F/k1bf297Sbke87lAR8orVZd213CT0HMGP7AROT1nbEtP9KP6hyhM8FdYLnH8IrITDIneQpQ9w6pZreydXat3p0NMfnNOG/BBtPQxr2kwFE2Xled9mSYk811aszYVXbBGZB5yjt34Cvs8oC0R4lYNI0bpWPRr+cCCnf35ZctK6174Q/ptnT2uVD+7iNm4CpJWPRb45wHBQHYICIh0UoxRamE2ctH2yOiSz3q4RJZrntlizWdiMmNuPkCAmrjufjDoWtVVYQzIVGjwX7Q4xDZPqCIebUa7FitUU2xOD2tyE/M3TyTHpQ4CJztpDBY+ZyTNasDEf5hX6xCB562kW+TlsOtofN/AeC7WNn7Kp1PJh4di7+aZADQmmNjBXRieZh/8LH+tp85pWNl4WcA5RA5y8G4/R9AeTJwavHy4mpp2DJxycT4h/tdMnHrnKfHRoWng67AKd4d5jxCzf3LavEucxdxdQ/0M3xmufDyVd+BvMC/JdHTGGmDd0jvhgbtXfI5MhYT2nnmwvrMGdmaG+gVrAViIEhR3NGFDtC4nU6FaR4XU/bkdKzaWGmSKNgU/oyyUx2zDjFY6D+IuGSd5osQteTH0+tM/WVQbVg3Py9r3I060/VtFSUGgRlp87hxpj9C9wGVoWvBvt76CbAyd1nVySLg0eFw9hcgTe24PbemywazZrD6eLaVrKt0eMpSmAaq5tnbmq/gpzVAeA==';const _IH='58f8f1e11e2248be82575a4830894a1d0868c7fb7d28951a0553932669a37efa';let _src;

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
