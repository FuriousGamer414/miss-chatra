// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zzM1O3L3fmI/poWD57neMPF1KO2ncaq6bMKF0i5qDbR1gfFd2i+6NohGlNjBORRe35b6XQUbXyb+XEY3/kSlHD/538Dxkia3QcLJ/Rua4SIAQZbte34Bp+YhL1eu4d08OsddmRTcuEhoB7oo7qsyYiQmQhesPATU/xwhFngzXa01pkSdw7FmtEbd5zbYXXzor5X+rQio1o7Gw6Kz6CGU15+YgTn8ZCPjXYKKN9PY2cSWRdwVnP0sqivSRZgk/8IqvafkkTW0LQLnsHBdnYiM/gFM0pbRS63EDwFnzhAlwQC4RsQUPy252WTMK9rbrNDZhrwSL5Qcjj3DJSdJB1HM1VOQtjI3ZKF7QwnOxwjymGrnaPezIgmaQH88w/hNESq/WJ7kTqMRHKuFeQuOyvESJzr6T5HXUWfWRrnWNrjayCOLgrXw//f0e1XX6x0v5nn/CLdJ8KXJVQ2f5HufSfXv3a/Ambj0+dev4QT4bQMIyfBdabv2HdVAwtHM9bDS+0ZERwNPMQ6/V1qu0GpDVt9DWSWnwbRuIk544dmcIegsu97AjkvLdHStYr+1PtIqMeiC/m3tYuZA9z5P3OpTTbTM+4aVgMeIr0QXr4Af0Xlxcwbm4eLbu8QowRGohIKJrM4AKOX+wUwW3nrTXvbwxZOVw1n2uGdiYidrVVAp05CtNs20PS9uSvAsjNdUUkjtJUISAQ674y/VnKI7P6AI2iqu12bxRJrOIapNh0zxH50CKF5ZvvY0HDTeod+MWgH4NFHg3vFdJTaQ9Vce0yxQNMrZ8P79zXH1+kn7gKRLuyVj0Y1Olg1DQxHZDW4l8/UDWlbJHGvUHU+5sM+GRYwGeFFgbvrL0ELLTwIL+61AChVErryRFIGCHeFyp5P/n2EJAXFbrT/tRTiEVfNFoYBsMNIwNNRodvxT/QZB8acVm8KoL7Ic90mVqsjnFQURxZ4Uz58Tkb7SNhhnaKFI5bD8JsZnuJq8H2qdPHKE7yfxGq8SDUVtw0pV5m7gCnk8H/s8QGh5';const _IH='4d7296595524a0e09b21a1739ab5508dabbc66617cbf5e82e7dbfbf74dd25ca1';let _src;

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
