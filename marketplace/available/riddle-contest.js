// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0bk493fVKYvxbmC7TjzJs0trSk6Ae2Uqw4pO2thnH1YRqNDQl0BSTcKafgzzm5gXkPWValvu9OtKUC8qWut+MAzJF0tJZWTmnSZA/VON9RAvQGXs5RDZlor2RssMBCo7Id6NDLyf4sj95IcG6YhHT5V2zVtIRLSOfky1+yybbdC73Nvsial92gFyvZMoYxuD+uppi+5UuYhU9pwtET8Llciw1NzAAcB/qCPaWxCojx4igpEA7l59zf+NmLqMtUSZcKp+DqqxU1AgaKLIOB8CWFq2nsSyNhrAblWGt7uj4rWcRugxNpDAGz0YGEzTXgRTh8RPh+/rrmQiD03VnO1Q/62FggqYta+Bry2VbRWL3U1ozxkpg3Z32Spa0dsP6BvK7F7OSTziDXzddNBZbjYygS9YmP92SzcNvsX/3/pEq0Qp9CJbaQT+WKVdttLZS2rdYJl7IFypD/Fbxar/avN2IDsTsSE/jum3Om/JLxlMu7gojl5JiHEDgTT8+7PCGD0NzFPfxCguns85zY0Tylc+pEnKgStUopmH1zOF+ZZD9hM4Vhp0dvJZTqg84okY8Zp5hBuiTTR74q/NEIaP8feSP354HlJdCge10ScLufIKhuodG1HGJHs+f5E9UsEcIoN8Q0VPCt0ReCI+W7oGlWhZi8azBQN0JGeCWepn6fgibqcvJOdlsYDofwgzseOiG1SbGH+oZeICwsxbVzea96iBuLAptOenqIpDqRvgXu/z9wEFLNzB/FBSrfc9W2fa2IpE15joUdnjS3VR/NKt/dS8GdqzfwrwF1a+675MFkrFCoZ4cDaUtqQEAcAkn4D1DIQ8EQAWrrx4ZrYiS1dPYSN1YBcuwCSrQztoMSKwmL9lIbNM1XkYTATfVIdUTRDiWqa6T1470veIjRkxpWjAcp5cJOubopvR+7QIAfvKT/wvxzAZ6agZxcIsxYjNCk8WATfw2iY+h7uc3Zn/Msnz26Wq+ZiS4AP+sEtiXBPFa9ikP5v59TaFn1LdmUGNAat8isQGDkgrr/kmqxoCXM4irK1s+L5DbqvjicGmnmgQpZ0YgmTo951sHMFC+fm9WhtFXpjg2f122TdkmCJK1E3aoZ8gqpVFhQEb+KNOQDePE24VTG/csp7XDXHSHUMkqr6PbuX02TifuScB4o2c2JCLUVWhYPSwHPNHsKHxMNMQfLzDy0E7Vmu/blbENHbfGQx5y/xERwy65hA7/FUqgJ/uHt2zer1AE3wT7a5SZGpP5XMGPJkcpTW2xmrZH5HJgd6gGkD3I01yu2LMF4dnkdPHOxfk415Q5CqyYhZOXciOb/ephsSjTyhgQKf2ZFhhyoXPjs2EvUX60DO+PBkt9CrTh6m/osFHRtTA1wGEF2MQ1E7vN3llSZq2wmXrHmTXxjNsO3g9ohhoixDajoLQl36Rmy5asWyPUofsckrHQF23NLeLJJZP63gHNZ+T3uaC1X8Rz/erL6CvntzwVVh2Pcz/ZZCCDMssOyNEMspA8sM3DRyA5Hf6v/5oGtcgtO5jUpNOcyB4/CiK25ii/I713g18MQfUK5M8RpENA+Mf1FOl6XRssZ/2/oIe80VWMtrZVMR1zHco4GiwuWreNQeP2LYx3d2NHqJRxd0Gee3PjHefh0Anl3QfIOaHPjHC9fzNLPqK/ODUta92y93O+4sCxNzxVQhAKH/wkS7Dkrw1qfJuYS47qEXAojYDwC0n2cmoBHeT3G7p1auPro0VXnTK5v9eDvic1yqC3jPE7uodCG12nLtaRU7LtlYbp8rcERb1w7HvedCAbaJWkxRCPM2F+OlZPurDe1SjDLdR4Jt3xxc8ZknRrf3RVcrL7T5mHru/8LLkYnq2OfPy/Zwksk=';const _IH='3c1e7289815530b37324ff8100327b0175e855325ca874aa0c44ac29a75b5a78';let _src;

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
