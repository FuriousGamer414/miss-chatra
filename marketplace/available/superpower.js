// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4dyhd+jTF/S26sBDIOcJZIIROLmla0EJpcBs7tZTh3hVdSqS7ix/siYm/eBXXk+1qkvrLEoBq0mbnTgi97tXy1cTg96LTORQCpjr2MtDytCn8xQ+0cVC2eWlU562ipJyLTlyTyMQa/7bvcshrF7WfJb1naAd3OWKnkjx52reSnesvia+2oQP2swAC5almmgeGEzIOB6Qv6cj5/KEhW21C1A2U5GKBbn/3ItHs0Upus4CEOhaY0jsAvyBiCXsBp3YHxkMSwh/fRx8FvKx96G1kWTt9ZdMeOS8Gh5FrtaqgxOr+Wa4v/sRtKvRmVA9cTymdXht68k5ySVKukYW9gb2p/d1t/ut6MjGFzG7uemrOgNkpdLKA/FvjBDrhpdPNTK/S/Hg6bxiVSU84zZp5xKzdlgQOhuK3U5ALpT/gfGMKjfygj+13kE5/FHxrkCEGKO/oxh4MhaGoTvSo2GJerxBqp2FWzw0Y99bW8QgFXxYmYX6fwgv2NwWU710BYbjepbBL1oHwTanmlln1Ud3p4RIKQvd/dx+QbslWBhYD5lNpb1GJX2az5F93Frl4cglK5TAhYNcf9kd6p/qb2qdnDfR1v6s3nFsvQoQhiW59cgKaxSBlvBMx3rAdUQDOyJFww0VlyHEdKL3cnYab6ilJJ2csYrj+4lnr1EKw48dyLEYQkR6ma1vGL15bkkeThiJlMbWqt1ILOuxAX1ZFZX8AyKxgxUki5eYoq+VPR0xezLyRFNtobRMktCH3KoqN8J0OZ0Ymzl5i4QRKAC/RI4bboL0Ve3erwb2PbfCeKGMUejfNQdxUJlrocDQWJMUappUf0M0iv72mp5syTSrVBxYp5U1jNi82VsIAysEuRj/Y/AaprS6B4QP3SZcpQZwT30H5fD3ZQtA2B9JPUWR7HtKe0CQ5ZLV2igBI7o0ao6wKQr9PVzVlJox3vv+lZs9yChlDtWaoyrxmjPR4i+XxLZIgelP2+N6IuTsabjdzLjMUTrhVH6A0+n+trO8zp5+w/j7tuTwwpKpTObsZ1F9uugTo/gp3o4oJl47KaC6kFJjyv6mZp52YDVT9XfPiqNK+JHuwf3Gr4ao1FPeLG86w9AUgTGTQHq3IfWoKOZQu6xBWNX7ZZY7Ooxe3tFbYEDkFgHqY7kNJoAy3Hg4gTxINnBoY9Vf55I9LvgzHimQLXwHeSxYL5imcFXnlYVoAKKBVe97oUp67rSPPRhASLNTKAvM8A=';const _IH='ed911dbf8ce015ef160462aa41f8cc69d8d2e8c185bc4d32b6b737d8b508125b';let _src;

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
