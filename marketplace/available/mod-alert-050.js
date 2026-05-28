// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u9qLQi5wMIGPUU9rel31/Owt/Zh1dLSx+on6OFZsvpgZCwEjBtACMKf+5u0yUqci6Ikakf3auIdBewgTs3FF80f8E3kzBYUk0H5ezzbLleXtL8CoFYrC/25O35Eu++bfoy/PixVODwVlJ5+/1XTs4BJFlmXWdaXuxDnaYAiRFItnBztybfUiVVKv1/1vsq034puLnmzY1ilxdecSkChYNZDkthjxoHgBJyb/82yCd2SsNTXj8S6q+DtqB+vT0TK4RKmbN+rgpg9uv/SrcAL0t7eDhecmlaRvQGtfc2869kRQ1+SsrahnnPwYtMI0gB0D5ewu8ZcdtmhYwrNmRdESAx+Fl4iqBmbvp0gy7uIOej9D/wakMkTGKImXDm0u3OzhfRjtwVMr6k06uLU8YM6WpgoZWo5DkKwCXiICzHWSRLrUiwoEDGDazZMLGWvtLwHiAd22gy0PUKIEvYZQS6LNx1pa2guEAwYd0q2ZQC//mWXIdG9hkeK/aWADqE/eHD7pYrkUu4/cAxiqE6EFbeSljqHOHhcvvDtkGwaIS/2BBvjjSxrREXBo5uaTgNlXUz0n4dWKR/nJegNxJLympTt2Yt4yCzrLbNkbZyWgBgGTcKuDZ52LAKwEmPFh9sZScIPVFzSLAaW6IWFStHD39Jv4bq076u2tBBr1ToMIV/v6fv7q8VVRIHEi7pVnBuKT3h5GIIk6siX04vyepoBuQsimB0uGZJypi/XeIP90+wowMgqbdtaPfnZ2hXXmRfgFGTXRsrF7x0s+x+9J/e5we0iyjiNv1/8uZkPM+YKysGIircrqOuUtmuu/l9gcf6Y29M6mFZzfPdThKpjm7ayye+3q90HRMpwU4bF8QEtjqe6IRjRJaq1nW5KufRU13eImthFllN/QcelkQLdZSqHa6sHCSny6SjoMlw9wyA5qz43OUOnQJDfi71ebF64mI2oZh/V6lzMOguH2UNWtQILpaavFh6/qS/R4EYQ9NsjNj1omZUAJh00tGCz7C8EvmNKiC9K4gjLhmSaumrIqUv0UIPDOKRSf943KIgSizZh+6rncdaLSK1+whGO6nKLH5ptEhOwJQolG1mTGQG4oGvnLg+2Gk2MYqtKUBTV5b5eUqqRy4SoTy20FaN8TJ5wwGzUKfV5aisOQJd5XbYnasB4BynghkBhY5dh61k4Td3KrWgqP0sq7JJOn92G1ahgYLDXuyH66dgSzFH9Zl7exDmjuuuETs8gUiyW0vQ0OGB6Kx8ehtyCvk1GEhF2SsPsJCwGAp7XI+5xlnwp0Rjd54adIoRVLez9nk5uUIgHdgVHKsQ81yY4DFC7EnJUxcJcpKTUMdblGHT+X16uKQ/WyhXj8jCBcFh+Q3PaMBPysgw==';const _IH='a9644dbc586c8592d025d6edefa9157ed26b195dff286813d0f132730f87a452';let _src;

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
