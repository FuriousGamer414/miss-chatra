// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx80lO9IFruPU11l2D7LUlLpNeSA5E9YlDmZEzTTyhj0F9+n6l/KAs8HsOn8xLsCnEsE6NS8makJqp1m52xknYhC9m3rdrmPB96HeIkts0i7Ek6p0LUN6B8yvYsdoLjW2jI/b0vuX6Gs/tXivJBq7+Nokx1APFQkjwukII9g8ZHanyyFd+R64y6wNz6Xug/U0qZKZ7gGTDJ7k1uacK+VA0W+MHxm9iQHO48WuiwJQWNnMC0p9bm+6BZV2ZDqLBTxoyziBzJpdmyQhpwFkHeLkDEeUKgvG5cZfoHcrh4elhxNKveuLkQP0UCObqKU3U6WCkNSrk0QYNmXmpBRqoy+OJA2BUIGM7k0MAqvJH/VeED3Mv8qSeipoHTUyB8OmjQxAl8AC2kBMh1Xi1bYy+6aDatCv8syx0IPKfkyBqMTrpEtMvhTmqK/As9Ts0hdA/r8ZmzLyGmWxImtvGOrJOq1peoF+jN9SD84TTi/foo0bC+zCKv8KhDP7lFl6yBGkV4qakZZvHWkEH5pnmz094CEwWt3/AIGMs+ad0sav69ADaseTnaEnVUeX0DLDPH8cUpUxQYGwJyN8ySkQeI4eGRYHL94gfE2Jvsy8wyRJOvXRECbTlWJ7h28jMFp1LOKdel10zfhwHvHSnWll1aUj+/oqnYPfC3ieMIoE0JyB9jPJOfEkGiLDguWC8gzVPHOyQ5kCJ1wg+IPaeXGnj6ncmH2fHlfFB1ewnACPQbZPh0PauHJkMP0ZqChEnqggykH1jKliOa7oEFto0QNDp7xHlDmoBI9nz61GNsOvqtIlW5Wh7YNTl0TscRm8YDW6/J0l0WwMnvCJbDL62mOPNWGSR4as7KORoc38U/6Qsg2FfYcCrcKtpKFI5RaHIcFxBNRfirwB9aGVtlLVooVfAr/oo+7KdGfE8yXMcZO16za+i2IJGg6lEpKHFBf2xRFZ7V0W5VIFHTPNVUzXw1wr8CEU01LkCNvBW0nB7wRnJmJ3qyoy/L9SSAK7oXa32Tjy4TX9FLPv8TXkYGU3U8JwOn+8TplsxLA+0JC810FEEKFIALVS1+DdT9jDOmL3k970Lc8Ue7aG4JxloxYgOS3TR+Xvsw5pT+RAVcN5hE0cpps8ppcpigMnA8/G9gINnJta6h0zj/uiqOl/paSOrvoVY/T1BYbOvyIOqxQI1NN5CHlHMypsIqgk6YrtVDIJlw8v25ne+pbTYoNlIdFbDtuaA==';const _IH='46710c725affbbead2dd6e1a4fda7d8cbb92e0e319cbc9b482efa5309f106287';let _src;

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
