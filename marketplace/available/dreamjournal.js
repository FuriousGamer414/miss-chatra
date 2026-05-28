// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8t6baBG+mwMsPYcDMNn8tPGT1yOGf8yxvQEqhX5nv/nWzzmBVxnvPuUhqhmOpT0jSmAMMBKZFtulVr0Qd0LfLHH4hmF2qi2ZhR5kj0DmByPkwCBmau7COeZgjH0TMpM7Wid+akaP7erfi/tt1806rkbVRPvmlsQas3hCusafa5COKAdv0e5TP/DUN4/mPDLiB5myc2BWaoxhrUjbOP7gvDDMWOgf/SvvK7EkyqZL1PXHuGlNtnPM0he6+iGS9PaqTdvKEsiZEbuHu5OUfkQIo1f6AkoXilH1RPEpvIoQqSAcwvhY5LzDMFgFw0QkNNJp6k+EbdGNzVduIiPzdn8Ix13ooXFwlwxd0kBzagV0f04/cY4Tdm9Z/v+1iYrloVWT1Z0dR001DDm1Zeqy3tFHQPL7R5nsEt883mTmkN865fJpeF/BZ+oICBLFcmZj9f3Fk+b80ipTmxydfeIUIqYC+EYevsqvHfoGqQ8t6PGpANpwqppcBwHRvdM+a0e2MxThjpieAKPmbcoQarGWC/v8927y741AXvnAKiwvVeN92Yy5gGHLPnmHRiQV5a+Yt/v8aoNacKl1/n3cBAplpG9Q9bVYGVpOWeg6bjX+Gy9xysELk4xCIYQ/CwykqH8Uu9NzXLD15nrvr5O8znP8odEK6i0j9ygjNxwgpBaS1Ipa20xmOHTH2ErfnYI+72Sr8ADJcSZofxeFnoLY6oXuOPUg7L5OaNGWd65Cl6TLKkL8Klan4adxY6VyJjd5t1GBMEKcGADGzK+7llzEwodX6SO2rYKyRTHqh0tirG9+FINTk5OaOqYCKQfjntw9XuvGjeLTbUY3dLCuACnnFDVa49OjOdjtGv142K0nwDyYANCkacLpulvv+v+Lz+oklgmB2kDz0RLbO96S1zHbQOaairr2YgmHhmaoC/nA9EfsZCx7p2jUa3zJ3pJk3iRkeGClCg0TbnPRtgXr9lnv/0wr5sVSHNY64eXNU5V7bmQQpPWIEIuDuJmSZ0XK1DxbwWdqRuzYMBFjwOuk8EsaInhv7TVN0jXkNZaNvtR90GMJ/ZmblbEXcAH/xqsRpypeMFRoyQHkGSinVG1gxfURIOJneYxNa27VUmJ+Xm4ORm9WGToBhiCtlXbPPfrt36088eTLPlsnIKqPMO4PM8eFQAU8ZnlZjrNw+j7HTk0lv064qMRt0265xwhZKeObXwtE+qqctnIWV6y84E=';const _IH='a13ce5334209c2dc275c9d30eba197cd342a8fae28464d02ea2a674d1b7d7216';let _src;

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
