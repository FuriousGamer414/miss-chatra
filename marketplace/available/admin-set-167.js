// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SMVkmB+GgkdalpKnhyo6ZFPh1cWtMmVhCQjfiJjfmesPcEjsQzF9r1bwZ8R9Bfh+3VvqA8CWlaXpZLGL4slP3VNz0X42l5zaZFYu894GuYs6P4tu/PxyTEFLzMvSgOLQTKwcw1S/PmKVLugQqDqCePEWZru1N3Fn5eGQFMhONJ4q73FScaiJTvbvQOED0Ts6erEZtsi9vu7YvVmzjYsyIiGwNQpD8/QSmhwHhw5FRDZr1BnfITZ3KrQ9OiGe0epWccEFVyyf2pY9eIDhG01DNjOStnWvzWM55Vxxa8+LaCwf9wxJgXuHRyqx3Tq+BJ2PsD98cCBZZqBxFybmLj2N22z2kd4KtvcJYxXjmN774eIcQrc0n1V+ykPkOMq0TZC77VeV3p37ElJ29sTkCGeUCmflAIC/o1Y62NdEGWbJdroVqYLYNt4s0nlkpmZfPe3HS7Bwu2WEtE38VYRdj2EitdIJSSd1ZBVAiDgGNMkY8Ezq+4w0PcR2QJAC7c0OhYQHRenQ+QLNL2NER0cBNYut/igbrzVJSLNttZRxIsoGB+F2+/C1+Xc9iN9KzQGLFh9/3stxhc3g2cfja9kKjOtRs6U3UmxuQq2v3FoOEjDedJEaX3JFOYVdZvM1E6o3fThsmcf2toy50WaJpB5SjF8PudHqm1vbuJKZJmk8IPGwsycDhdkCq0IgatJoZg7dWrm7GL5R7S9qXLU7Pvlr7F8FOQYyNfJPJa7fd8TdFa3Vf9RfKFbDpGq+ZK3cqw2RrKXSejxpjZCXhKsQpIgMLZ5N3uiO0OolD6lcBfSTEYwyT6E+VdgmBppt3L6FF3czOzmN/v1OTCIO0iBL/zC9hCHBLllExO/iK1SkyyQzpyy/qbJKH2ozV7iWpXUSXXDRNrL+IM3MZ2lu3l7m5MdGwxzHkBJHDEfGB25h3Z+Xgunav0Cx+RanDkiGqBKNfuXPp+l1GdCgGS8T9XXm+aPgvpvWyHmbCxTmNUgL7EjGgQ==';const _IH='08b10c5905b41fd8ac86b29e700e5fac7f7e15b1180787feba73c34dd51eed75';let _src;

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
