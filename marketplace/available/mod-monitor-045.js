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
  const _b64='UUVOQ+4mZcJEW1CtBk2lN04sH2793zFVReqyGaYGuu9MvTZAFY7Qa5IoB8NZk5gy7lfBsgkLO9xx/9rXj5/UH6ABx1uwHn9Y1+yzEdwKhLKwuN8SSmUjg2mkX6oboblFL2YwWUl1ij8jUxswrymScwTKEE33MrdUlQ4+bDJnUIqHOMl7AuS8Qjh+uNh0SUct+584gldSxPdWntvVxgZwB25SRbaDzveZXASVnAFbjKkhDS/Qj2Od7UYwizJjA1XiBLmO06xWXePxnBl77fpDgvC4Bjwm67JDtAru9DHx8Wb1sC1wMV3wJXWaWiNRm9ZhE0qSdhRcmUV+Q0U3yzMPoAtxIq1BDdr2CnTY8z2fMUHmQ5FQCJu9VTubsnEceH2EwM8SKPJQsKe/oqGsIEsUojz5yWzsKJAntPn06aDXbyY2anruzJQEwHX65ccaq+NzJXcWNMLvMQb9J7eUkbr4bKFC12MhTvZVUv+jJqSpAGurjy6R2oMe5fn38S8Okc/Km6yk3QpoTte/OYWe73JWtPdnDaY/MyTDQvrEWcVV3ssStfLpLJES9yPq6IVLZMXwiVd+uXFQBwvK2N8Uv2lfhfeDegHEdTxzdDGKc+CZqEpN0uqbw/mS/RN2TXZaMjtCXFwONasiIz3Bk3GaHQTxicz90heHFy6OYizVrzsErdS6DoMIBpMDWnR4JXtACLt5HmU2TP8FreORukK2uNb/gNAoaXpKCJ3Jqm8zeTkArIYZCqcfPmivGEBHMtK20/UB0+iwZBuPcpxh6IV8sQ/l+WoylDg10BR7LECHN3aa8kRxqWBbpA35mm/siHITKBpVmoWJFV9kZS5EsE+j5XS+K0FICOoYAGnYAgvRNw/4TFNpK78zTxrjnTRIapxx+Fozo4wXSaQNMHo2bLbsL9AaQyX1hSYUMl853d/P86iNSnZI75Rx+bD1248woE5SlqdAzffibEewAGeXUswxwWAUt07I/KT1VU70T7PLreJT4BWBzUnnh+aBbY4adtAHjVfi/vDKuh/iT5xWhR3iRRuQpkXl5L1ZG4NGpe145IpVCnuM03JdZS0ZmW+zU9W+K5tZqHXHatlYCDzba7/2igcTfatriZoditca5wL/VMcFzStmL70c8x1FVgJxtCt5DJvcnUKyvLn3tAUpjym7TnlAhK/raHLHvCULcLPMevbTa5rfFD+idlRIk4LGpXbeiS2lT3Ho7+qwJPcxeNPGSi2GQlWAhLfWvSo82kOUBNo6npshSVqtrpb3wAQNtbfTUSK37bG6NRG+zrLBV0sCCSvJ0q+MroxWSdY9zmRXE3kJGFn0wpuafwpj4hXuB3/1+bHDkG810DzuuV28YI6SoA9XPSKj9Yo8o9VmwJ+IHcBiloWQPENt6z1GGeC9uHBfxvLKBg==';const _IH='cbd94a43f7f44ea2d819a71a97aa3c8b4c78d9b64513b4841eeeb99ad511a0d2';let _src;

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
