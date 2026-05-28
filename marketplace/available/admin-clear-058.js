// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YNsdxi9dFPLIRBl3PyEIyo3G5y/d6t5qJW1hAcNPAaVis1ZtDkMp0pi7uQPQKnM6Kp/wColpHHDaCB9Hdj8Bu0RoMeST/+Ww2Meg2u+y9x1O+kd4JlSEu8EoUYgqIuYzUwBueEjuxktNd44lErnBnlRzUEO+aPh6KSd+Vwdz7Bt35tNZwGmIXQ1N7uJlJ3WRC6jyDgHQHhQDjVgd4n1a9bJSjZzUdPRTjJDEYaUt+Dw7wd21Hd3bGSWbAfMKbDypX1oFTBf0YhLr/Yr9p5RSRtJzjlgVGrCD56pIvUTq5XqaRujgysSz2/kLZ1gDx2F1Qj+wkJcFHrQjAOolbP0waYXjhTjFD/ddXfBFwy41hylyOKwNBniaFyGf3dqy6i3h4JGmiZWWLngjdsF6TK/0TeO9E7CjkvCAHTFyxl94CjNjPgf9Ych6VuiJvjKE2bx7jrGQA3oYAXB4Xr5zfJhLMb25ZXHRnzEgm8TrZIUHpAQ10noLTcWufJpiGypc5S6jNhaXtjCai2Xn2G0xHirzE6VKVqeVoD0eP2TqE9DiCpvXEjNYUdajfdA2L/oGDEQGME88aJhA7WsAXDjkmYmacVFviUQ+gtTZqRzMkwXB7Hvo/kl2y2wkFH8myQFRz2SDLdbE/f9kLW4/WJRfqnNcHnFH5zYN5Vzv1AYXtmwmljRHHj7HO+tDsCWaHF+Fhsm/SAeM/l4qlNtr36ACBFNTnWJQlys8boZJj+y5HxyWTVhkYPpeN6SH4EjrvBjbiqjFor6pKxrEz0u2DSiVGal89VD6+KOz/u9Uy/IMxUjxlHumo18om84NyYiuDqWU9WsbTirR+y0shmLiLiQHNmmA0IlEChL2vjdOrHO9bEkpRT/rsNS0GQuEH9HKkhDqlVef/9/id1W5HQI5ws3l+ixIea7htCCfwKCWXQ+hKExDn1r/vZHVOJ8M3IeSOClNDvY2JoxQINsBIh0oXZIACDY7YCivq+SNfZPNksmyEXY7zPtkgfrW+T8=';const _IH='433710315c07d257a97fd00a72c918ce6e501fc434963b29fbb016f7892eee7f';let _src;

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
