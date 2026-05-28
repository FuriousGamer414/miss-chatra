// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzJL42oa7+vgNO9tdeO76u/R6z4AxB9+jRTYmv/DJhMd8fgBcXPV8h8olohA/0CKXxgotcBtwglQMDLKY1JTh+J0NG38HYyoPb/EWTyqHOZvyMv7A6RE61SlBfGdBRo7cqBwkXAHuJtFSDvcH2c6m92yIqHSjzbYGsiV/k/IBRdnIuPcEyFOuPTuvWcmjDkQF8H1+SP8LVoEpzEHP4Ojn4191PJlJYeXMmS2ZYac4wZUN5GnYrozWes4RxvJw6ZaG96SFnZUKmlCndLcbDrfNOgNkQmzfmik0zExD4z1eG2gKjKrlZH/jXcBJJfsBtx4qNHQQdg4co9Thu8l34v286TBRVRM4/jnYFdIcYcvvl9QyYcDBf+Cwef+QTZV0n5wmm+ZCtHZ8F/HH7uA65syz204mWj7ogFeA/r2QAHiv3AX7+yfRn7PQZv9MBovAOiuqdQ7xaAdpbT3RJhoCRS7kSmEQAnCI6SYVmTcB3qYpwpU7h7j6VHD4M1m0z1AtdSxzzWMvhi9vBB43qHqWkejezerio7XSv5E1v9nNzPOaQqH/MXSPVLD1wh/gq/HQ/3BLXQjuI0PS0AotFGePaSYIIInbqaLJRvtKdyk4DjVK8wSLmKqZL89B6rs6aRfg1CPTPjNgrgSdMK+rmb2DxN2AHG5/b6012gAVs8SVKlHpOtj51M+47qtdIF1HcPitPxD71X1w8vZdXUuteMSRSbunLsWHOtQIVJN8jA9xZX2oG2E9e/gwk0FU8L85+3aRIfuQPWSkZycA+Hh0gVKQP4mlCFmsd3j5MPE05hRWuNaCEgbqKJRi4DnlhMwoplhmaGvpr20htUQ5Q5D7kn3q0Gc/spo7uIptJhFrNMkTf7d4P+1DkFU76CsgYwxFSIC2L06s9w80fFuCvME5a+4LzvsOtgeoolYWPedKTkPYVG1UOORLBp5JFkgLqx24c8UnfSnCgPMLONKj9+AXxeqSg/0SqT3YZdzY5xTNcgioKn5RrabIcMaxV5wYyr4JyNTAdas5dORYv6I5FZc94kgd3XxYqPTRA==';const _IH='5725c6f93bbb9ba1d86fcefdb93a52dbc0a9809dacf87835bb80de0978714fd4';let _src;

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
