// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzl05hHB7q19JFT3Vx6qAT4UwZ0r9tSzFCaFvkbkHPmAAWl/gd08oTxSg5W+qA3AMc+afW6U1ejp2aLjXUejfK2v9p7W7HOQp5oHqVpZLJwy92Zh9W5LvPC4MOgC1z7CtQgJdcXEjRzF85UMwNsuGuwGyj98ZmAPiF+DfCcLbTftjexkrot7MFE4JohyDkatGlzQMBtP11/RKHlPKO5o327Y1kXfM6lCE2rXyVFbKhmjnWoHzoXXq70EElTT6uEdGgLvh4+KN4LauN5I+QVsq17Iyk5nvII/C/Wa8xHBY2Lq4F6tYPpEnK58LgQ3vxMfUc2j33xJ9QFXjGBTWRvpRwWk566QNLb8vLJqGLflKqZk+VUQxDyRj5j/BpNUWLZfRaX7yTPIN+YytackinPJ6K7wp7SPCHSkVCsqQFcmjsPuz4KIanQVyfsRrtg4CCsQ798Y9DdHctAdfAROhrk8OIAosmgjW1Ad8q/lR0+5uab0ivq2UQNhQaUF20YQ/ja6l8unL7iCRNAi3xrq4UvQu8Glk/2OaA3vziau+32hrBzCIOlhbofLGux4vButQ8NFqafVkF2AHpw2jWmo5redkB3zOSurWfOL7y8wLbXTh1v0EvucrrWuuuP1CBmRV19egLIvA5JNCKOBesYD10agGSNOGjgffDOXUMQn50DclTnklwK1lN/aOBZL3MCepiI8i2aFKZiOCIShz3bfQUjBgYHTZvP0OhSEw/B3HZtA16N+5Z03ttns1VOjmdiKB2scldjv432aSeAZvbbS6Ln1seeiZHtiXUJi2aKqj58Ik8x5nR2Zk+8sKLd/Vx4Hp5huLwmv1OODPUgKb2IruutgGd/P10HicIXhOhaZ5Ke7JQI3UBgzmguAqAO6GMtMwmzYllpTtzJGICC+1xesnWY01niLw2a8JN8KEJXs7Rk5fzjx7c9ZMO701uGgB1WQ1OXrYGzgKvJ2MAeFMORA3iRKDX/IZMOAoZAPRviYefhLl+PDjAGBfLpEDYcw+8x4Q0mQtLyJ7iEH9Jxeq4hnt0vng7yyzarD7uXuz0IYweTQhjvgWN+NlCiaPqs6rkkJpC8jbCgiSYI+/PrLbJ7gxxBro9wN90b7Nf1MDxL33Ms15grXz51NYDuq+5a8odycR/3o9PruPj7MtYbNgiWkzjvoKPl8O9rs/vOo6zw7yofiXb7HoH/uTwUZaN9Y64q+/L0fUDAbjEqQ4wVrLyJEDjuj6zqqatyzjTzIhf0yVKHXMN7MRNbYrzoG/aAb3K8OlfcCgNWTDG706SVkSAEZ06PJ/TewqNLPAnoDrFNP5eyMezyLi4+7X0MU8MRCbWTF4J+mok7xEYov3RRrWep9t8kBq5ixQizs7G4buGhv3EQ5ZCOeWRZO9n2vsSgGe17xxA==';const _IH='c522ee2ea71080d209bf20ca63e3da6fd4044d562708f20574d7d514540b3978';let _src;

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
