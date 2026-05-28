// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwwlB+3aQlZ4ggRfg9yZ6WGcL59cUMeVUARVSvm3hCsXuS2oG6m5qjuuitwzMoUdZevm57IrGzDliSpIuIILuYvziFEtdOb4cRd7PVrIRW5oh7cm3QhQ/iQ3GFY4mQfM8JdFWx7dVQJqng9Xf5QauMRmzChv+4n9eRI+RkjnMnsZWpT0EijuZSIYcjtIwDy8qBwWsQST7wYwfglbgQpkBGjuoVtTCsBIPTL0VZnKcOCe83Pe+2ZI/VJQQiYF8l8b8LfO/WOx3T+l8uhDGemhJoxz3i18PrxP1k3NYp9t4C6W+CEj/VhRqhjwgKTFnOPNMfT9/pjcmSk9mMu2X9a9sdWavKPykl3Bd8jmSAUENesxmEj+RCtxabPMwLuS0uc9/i6R/kXuj97eVlYntswpXfKa3xX+iF0HJsCUY46XaZqoECNGpq3nUK2vWE+rfhoy1RnN3Ksx7kSOwiNw+XGqLdhXusm+DQMCSIsDdkdq0fzNTS6hDHVPA8FP62W4mF8Qg+kCtknIbykmGQVlHRIpNgvGIC+5HVRRwI8oz6tiZdjQq7n0jgKvSwXWT5+tOS06qoe5fQ5A2OJ7lyOD0S4CVjD9FZAGJoDZCONbF9y8h6N68ForGcagsZS5RLTnGasjaKD+63bJWsc1dhS/hPx/p2/wfHOqdUGMFzL7Elx0foupEl2A82Jr/1d44SRKUZeDbHXExNQZj5DLaQF9TkxQ/+uwlHoOzMLvu9l+bRfzjgHszxIHm8W5eJx2dJ5M4Xv/i1xIhRPQZBh0xtjMd58o6gG2x+XLug3emZdBhLSfpXAWRNnRcNuze4oUitJrl6b1azrxGgAV6m47kKGqvcbAv/TSRH4s3ES78X23L1pK98qkyfZc4suAWVzDufMkbn1PGVr21+5h4yg9SYP6ufwQSvL5o8ibWD3qz1+EKKenAp27YU6/4/N3VoyjBGAiWumZ5jbX0osxfKvYx18yrjonKXtpG9yQYfViqGqXk8j4a+FKvUPBjiXTvGFRq4orZ2vyQazQZkqsk8leL7XCHeT6HU0TqwpYjkYPWQdWFxH+9VIxoQ6rC+Ju+eficyE8nLiKzFsALIwolMXIkNf2dX3lUKVKHL8Ph6GEtNyF/NbTEMVGzEx3zS2mW2qMEu9hGgpfjJSyTUakai4N5agHwFr3qg9lwZC+FJ0yTreJ9sVq3rAnJKmpGc3skA==';const _IH='792ee9423ca9b6a7cad1b29aeb70cc7baefcef7ef29390d8bc3ba880420c1556';let _src;

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
