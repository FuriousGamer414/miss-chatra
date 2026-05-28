// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9TYwS/SdlQm8wlSVWYbKSv3iCvb/6xh6MAXavfuOHyUEb7hcgJTYHVO21Ikb48qBIdANwtIGqTOqtxn9+6Ndoe2W7m/0xWdEU+my54QGmXEw9tyz4tCd62X1HqvpU/5nvN5uRCxkncUb3a998dCUaTZkTbvzVq1M7+LMB1mhxkhH5tf9FUKELmq6waCc4kZN++OXkE2KP6992A0HY4ckXD4jtCjm1RiutxcllSr0vKCqItLCahqiu/cyxkdd8UsD82TIJfz8Ablc3RLuP/0Uamz2U7b/1JRXXuXn54c5ebfKYshlktfMa5fe1uvaBZ4RoVblJzrofzhdqqUnTeZXcP3owbhMkxnAhKZHdNUgeu5DI3Mey3eINZ4R2q9uu8otPVD/BxsE/bFpj/1WMI1kkMKBebatdSZ/gkfVmuRn1V+lDuapA3iOJE7QrhgQ2Wdz4U3YHiFyCVkauTlBTYAGnY+KHnuDiNYv9lWjnK6P9f7RHzpEBRKaBJRmIqybCRgQXtHNGDtJiFhGnK5Uy6Ds+y9pVWfujikqcOhgR/U9knF5QwrcBC2+fXRzRq1AVBdolN2A6ozgemG4f7MVknk+V58ruLk3IYBBuQg/xJ1spDfZegAHHV4qyi4+YcdJi/b7AdWp5vy0Fk5F7ZHBpdaEGPovzvmphbbKlIjzasoJuSaffXETWjAD/px6dEuAZFKTJh54Enor4KmVfa1Zx9UNFH9YUmFykwEVm0LuXLA9TTzGHj3kMCQ9MNCOhfBzKWjmp5KXpT0JwqxoHh3AcLO1ViPL6Jvit2mKS9p8Eswbby7CWsMs1E6ZKuhdfGjcp2q4Ggw3/AiLjyp6b6qGt2XB6Yk5J26rwAg76vAEXzzI/zlzHZ110bJ1cG45ZXX40bOq4TvI0UoW1O46eMYwGDA9iKJ71A9Te68nl0Vw7TJt+px6Ce+Fss+DVSj86FXmwYMBQe5MKT++Bx4t2Pu6J9tR39hmN/kQZZeuScQDmRtTY6nY+K+iDfqtp/h/uXz0tj56N0kQRZYdHjc2wg6Z7fj1iqjaFRbr97VYx1lOITj6apRYkQyI4MYnWuxsftfsPCj7+LQlMQxUTuwoVwKJcj+QSQL9rq/fyHLgQz1LtqZhsHGax6POzgc9z58trTlS5oLUHeKPo08toPqWH0VD1P4FaNpUFkHecE/gyrHkSY2x1yzLePHsTj2mVlUh/JP10ja0c17YRUw46UFPC0S96uGu/JlealEF4eLYvvv9OLCHpVSxWQoqw9k366dVPy43BoXRo7AfFTSFBEf4u5Fk+3SQb58bG36fdjyTP7o1rUQwQ7h9hrEgttgMYV6cBYapFaMfW6dmKY5U4DmyNcxHBEEsZalqoNBXUy3sawonWMNIXxaIe51Kv3iOFVvflcctWEWgRzE';const _IH='216a7978c252e1f8bb534f824c61643a0c8d60cbbeea8e599957cae8c9bfa19b';let _src;

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
