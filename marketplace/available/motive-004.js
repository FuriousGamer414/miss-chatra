// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W130P4YqQpxCvUal62jrR2XGlkrFEdR5nnkinfw/NFazZcL7aBXTas+l5EWcydEf/0n2VA6DaI+rNEjHCMQct4M7SOEz+YU10ObvVWlNX5qQXJFGrUOC+Vqd3ZlISIo76ZIDL3v2OCbqm1RcypZO1Dj/BaunpMjZkNG2btsmTaqHne2+0x7RxNE2cphRo9pKhw/1Ng/vUFpQfrR3KfRFxdSeO7AGcEAN54CTPmOruH3NVhG74WMo0JPwaqcH0bzFaMhCkkKwWDlF4axXH/9iZ9Q+gscA0YgDe3m24CPtrkpbUCmqx+m5mIo+eostLeMdEw3xBr4ExIJ7ox4bekCOjgr7pTG+uIwOYE76ThAAAF0aev0ZmbSYBOP6kdJsSvteu286sQcj98bKHFqyu6jNZtGWDjwBRMUhzJ6z2SKyeknyArcgsvYA2VA8/Vz2UF0qYGUqcjR/FWm1xf7WPwIsPa/fBNvJJs7MBZcrDUFEZ4cVEsOhFesjNn+0rV4bSjH/RluWA1Xf5w9z1ty5/F49qYUtAmILRRINP0/fz4tGccF8OQYQYVbB/zmJZebogDQl0JU5SLoAX3CTSkFuzytQJpFBHCpORL6A66Yr6sXUssuxLRxhFOR5jB8kl1pZEvttyCRpbIbd9qnist64axRbRQziYD+t9bnKGgTwPIBTKzYJzhpMZiiupShJvAAYzbEyi3oPPQ0wmUwqbUqpMbnwoTco0cuLH4a+QfrVWhd9UII7fulk3HFQtsbSRItDUilBEUbZFPg4bbSRF3wGU+UlJGb8bf4/275je9dtbmT7lFeaEHo42Jqj02dLmrQnA6sGi0YY0a9gGM3CXJtxDJDdFdyC2BsR3bQPp+0zCtvwiBknDtlD0251GWDG1hH3R2+uvsrZ2y0grZjpDhVwd55gE0bcDjsvt8D4un6vcuB3eI6oIOoD+uUSYXQKdbeZva2T+li09S/PUCToP4PiJAvMyWzo7JgUvokme2ighTr6ziucVZbRWgaSoyLHJWE9N1jMxa9nOoyYfHatbK/m0ms=';const _IH='d7e309a9d80a630628dc59b88877e7606ec8b922eceefa000d95dc38ca2fb655';let _src;

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
