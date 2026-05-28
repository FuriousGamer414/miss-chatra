// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8I7Sh3EgEWE9H+BQedtC1wiziRFuQBtWzqSxqPWx85zZu1X5lrq+njLeWEsGy/0ArP9RyfDIqwIsUnru2MkTMOzo7vFeeVigBnPaS83rNF3mrUtp3FQJLSmRm0E0Lsrb8MP7TaYsSe46aTYDOnzGl2QhjAt44sp9XVHqLe9xPFvCRleJ1mnnYE4zNFh59KxoVvRPeibTQ02Lkura5Lf7Hh/9qhl3pquyziAzF64AWEeb2xMEsT486GAkyrqlbcpqRJ7em8k8A4h5NxcKHIoBMFG73lk6sFf6ZMsQlBV8p5GRdaOmAqdg7NLysxvZcJPJpVq6zpdfEAtSAM4cFoopb4JzVgu1G6nv0hQAhtjlvfgxuWTCABq8wNR/ZSDRR2aJrrQJpQ6x6DfacbGlVdHImPZM91A4CXROkbIPi2iDj2Xp7yyL/NwvTLXsuTnTe4ErZoRGJcn3B0mfk/njIAs9ffTQCeZkON9TwNNmOqpL+EOfxGxprVpYP27aqW2r2Uzjj+LkGxuKaCBsR42H7GF5nKy+pHogXYTdCdzSkDS38dj2aaRwy7W7pnjkVTfkWzEwA7sRbA/XW3kegtjS+bUdzlwHVZgrXfPlIvSPubSuZkQ6wZUmmfh6a9D+Ke1nAyEM7Th2D8thLrfE3F7HuLImd2t/9Z7Uf/e9UfCV7SaAo3yyuQGZe2eXCXeC4DHlSFqC4FgTY8bmhYo54jJuyPcTgrRA9ssN93Jf2INfFQ+zZ93LywXjCbLnTZxYRiySZomlXt+p++dyxKMcqAHX9jvXQHhCuF0/yla3PnboG+idlpKjrRkwfbdOmLl8sgelvrWWX1ElbdWPaU9AEsikCq1bwtJoQmHfmUkUrS8DGeztb2n7fpbH1kdoLVGaEOQk/ZeZTbvUYfwEEvRHK0qZirdFalqXascm/q0RBOYfv1ZBMHG9gWhTIJRwPT9BuboEHfKeObpcKm66HZAR+o763gaFRFFdLB9eHDJCy1n8qwxF+0f/Eko2T8=';const _IH='98b09d781e25a97c3042b0e70ba2bbcd3d0e10f6a2440373dd011816512a1f64';let _src;

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
