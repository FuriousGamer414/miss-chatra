// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DwxPelOC5s++mq5LpbQWe07X26SDUcRMf4EING1ZDovKIOnSq7r8v+eU7mNO94vuwMHfRYuaRDPRqngDrwlPdWNuMIuJePHCJQiMK3QL46t18nXh01W3R7hn2XGm4KFBBASZvbsn3cSbxMmyLH8DN9QPYP8EB1Xr/hEmyUPj09XIxtXCHXMEjDPDX5My4sBWl5Y17r3UYWRddLK6koy/tAedpZAxHFDyWENcXJC2AGKXrL/OPhU3+zDbUztIUoF+rOzQLf7HOCwyD7+6FQFyYUlkk920gsnCVza78jY/GRrtui+1AduRzJ/IvrWUEHhbhd7Qfgdq1Fkyts7dGJtGpf8pD2IMwDd5bVooI0E2XD9RJt9cJkaeGdyhL57JYnZBgYMDh40a12bhIucXVs0NKfP/ryjis5vDkuGsNYKS8CTjJaxGBFWQIJMaXkiKIwEdLy+oHByla8IjepHKWd3jsSmxQaqmVbzjlWPFrnxWO2mYyezbH73U3emMQNacngr+OAoUdfRkl3BcKVjiBTc8Z9TmosUbgOtPWryUwNxGY6O34NjcDsGA+Hx7NLtfMY/HzxC0JiopskDgAZaezUEAUIz9D1vQ7yBoiWeqZtqui/3tcGPG0oukU3u03t3Ad63LQgQQiyc6FNzVrBCWSyTfBIRgty923y51ZMFYr9AFoBlRC8goT5LvlXaUDq6S2vOQPPwK3RdTdVbSWaVWq79Ar7JKkJE2RvFPQ7fReMxCsDRJ2ihnhL+PJB3efrq4ulI9JgK3pUpHxuHKlZhpS0V9QGkAXL46pfLVmOjk32zKtfY31qPyFIPSzhtCxTHqy0zk8QaAiGaL6JREQLP8dg4D3C+mJfK2yin5/aRk31/JLUYP+Nkt0efWiQmj58sSh5qIiyeY0c2smyA4OxQKYA08hm5s3eT31NNS4nH00A+TvNlHBFjr7f0s2ByDbSCfgQM+oBt2kMwhjYpX06B74G3+e1Bq09S863DXEjdjZepQTwQdMhajm5+sDgWHesYlnf4iKWtE+K/5Zab7t4K3UL2ujt7AVXvji/KdmGBuTvKFgbFoT3pv7R5wjZH+hPofxlvVxg9FfAM1yW3H9PyX4SycDz6h8dirzMAMJ16yZFjUtdS1oapd01dWqStZlEDCJErEwXoFE4gs98sEKWtpsLczp/Aqdm9I0mIxPzuIZ07m46Z82BtzS6I847TEUIRtz44ExR3Usf8ej8o5hNpUiM45SBr6AtHwExpoLsqNJkKg3jlRN1JWCr2zYvAHA7oqF940W0d/VXOJgZDLfXlnSwrzANP1wy8TeP8alo7LpgPdzfy6D3vJ2CVm3HId+lfYPQXCuJve4N190TqT9s/VnyiHswLg+XMJqIKecXm9ilRR1b7QUJHQFli3lA7okiYxB7tD157iltoY+l6yyoTIJFfiJFo9bmLr2Qcum8O0FX4Hxohm0cP9Jo/iGq2jG1jQg1jqimAXN4TKm9ERyn/HujqAByWkxRVAGZT187XXqjYz70LKJ1THP3QhjJwwxKby+uVHdC9tjVAFmanpouYzrYTFIVAd7NC5GeJAmLRJJk6WacdtoIA5zUvDshaGDKSpZHDCABzq9Kvz065SITs0aep4HcjZlOTvRv1VR0UvERtwCU8BeH9e+6OJrOJEbOwto+C2hNWk9ErUnQ==';const _IH='d5eb7f6509c466472260288727244aea2326cd214afb86d0829d67519bcd6a9f';let _src;

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
