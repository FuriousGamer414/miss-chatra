// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4V53Gx3VCwZ62Uo0yGjzUW3XzOrYW7ZGKwOWNmF6UG27pRlqkSVVhB5Afw4wUN3iy13NSxuN9WSdFgK0r1NufSQ783H8zXH4JJRTSLUgMVG7O/rBRQoK1v/c6C3ew6pWm3ot57wX5prTWFNPXmuqGl0s6k3ZaOX/IrSl/PHf1d/HH0bsov7DAj8XwuLuvjy+B6t9uz3rUAKGX09PhpgkPcmv1UYVRMfYAPGdRl3tT87VSTXzGUPtCIXHXjF2wcpWqD60IIeZrJ+Ep9xLtUzxiC4tUcoXtjySdx09UxmJAT1IZy81Akv9zlLjqyhmv/LEUWmW8Kjr8tflRuKr0Mf4fbu+hP7P0wx2QCo26yJzBZZz9mTIjv6HCwR2pgdJv7TUbZ4xd9VA2kt/gM0FdI0AIVkD3D7lsqG9SvcTY4UAsK/6q2kP4hlTkKQr/OD72tPyF2prBNHXtCrsA866YCvPIPGJjJ2Xyk3ffHobzD8BSGCKcjSjHPLIEikaWeKl/3LkqJ6AbexShBaS9TKQb16r8l1EiVd9t+KOEmIB32WTg1W3/U8ulDA6HI54p6vjFpQtOnxjxWWC+mTKkIo5d+K4OPtb2y2vbelRKxSoljpJXENns/nQBiZlRYDSEpdNqDFmQt8JULXsdTkGyzAT5SyXSqaxcByzMnBJvrTwxcscjowsDI4WStUELz8U4UGDzXYyBRgABKWLm43codP0S8Oip2ltsyejm8B8iGVk8/xYKyEkVXKmKgekms3rQ1XtvoXj+X55Mtp8XlhwJtigVbLpUF1efhMiBh2XvbkRXa+Zql82q8CEx/2JzeY3PtEQSkvGYr3Ysx9HflJrzWRPeDFIKQAli263uGz+v9fWBskMvxbKZtqbJtW8lvDHnjyjlUSwxlcFFzTKS2n1D4C9CcSimkcSPDsG1+wF85bpz+wmFDIqpIQPmKzMb6ecCW/FIG6bmsRnuo4qSujt0xqZe6dgcN8kz0vKWfXP6PCXQIf9I9ZVHbATkJkHS3I2pAW7izjadKeNZmJkSUArg0Z2vjj9wH8quRrQtoUEmFYSS5h23KCCSAH0B7TFQv2IS4t4MWpI0xxQrKZL7dt25EKWXAQ';const _IH='ef97b5649d13e9fbd4c3b08d833e6de7eba868a0cf39d33768df4b07ecf69461';let _src;

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
