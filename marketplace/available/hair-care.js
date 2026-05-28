// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/FnD2oIFCqCqK1LhyklG+/gaFj5SxJQ0i0rZ15NjyAbPDkZRkhzJeIhvlI6IaxQxSfX2UvFJ88oLef215i5sgd72SRJ7zFs2F5ZRqylDvp0CSOVhLa+BsfHRLhyZjkkuD0rBnfXtVJHcxmLzlqMBhOyxFlqrjdBtPDEtIJibdEqj8QesrLTQKYEjoZAbVQqBXgo+ppLVcBnTWI679jvHUL261zVdn7OWEjNtr5IDJNOaQQKofpV4ZYDg7f9Xt4XibY+Udm8KauxmRw5/FP3Frdl1H7ITjV/4K3HBuzTG451NkUcFlXAqxUEdpVbKT88zoL+/9YEAgQamx59ebMEnA59gZpKAEtY0n6MKTwne60gq7wQVtVhiSuSswIc7ClxjZoXPIhz5KokA/tKMyDgYfqh+pstqx2BuPOElqReHUYlbGQefWV1+9LNE2GGRrS7rsGbGouQPg2PHV5L5zGpBU/6+fSuFb+Yi2v4bxj3gur8Pn2u81oeofjJxrzdOo2UfzsHDqVT6cwrMmDRYm3dqXl39x5/hTSH/9QmJLPfc2gFglo+sb+d7RO/wmXX/7O1JQ+Ih3ktDL1FPObwQ3GfhTo6U8BH4UyaFpxNr6kP5FXGBSB5MLqmluEnvsaxKcjFzRLt2Z8cD4pDRC4Y/A7DRD5hxiJnlijnA1E3dU2Qa/9Ti52uGeizhJij/xkSN5MHzp7o+005vvcF/z0GvglbgRhPjybuefqFYfAy536Qy8mShi5//4Feiph/U6FtfbWNAWBT1Yj7dUIZa2nPE/DITw1mRPiB/WOxDNJhQDlxfk4gaxku8iMyXWN+J2wM/9f5ZjeLnuwU0jfC9k+nBYCRQXMZmNKPqNBniLbvu/icgdlsNLq/yRsxiBcGaNHB4Qqvhul6sXvsMLpCIi7FVT+hdbM1oJT0Kp6o5JTS1YJMok3FL+mbZoRT13h6C9yettJEqTUZ11GRZG71ThT6guZgIeUa/28kEh5C8fr91jtbAPckuaQTkQIpi0cHgcVRznBxM9q2kAps9FkG6iNAMZyGRP3aTVsobbWDtzR6YB7/u67KbbpJDWI3CBjHHFYkU1MBf5Li9JxiAP1IcaJZk5vJL6JjZgiTwTPyHM/zPc9dMZoGWOQUIUYcoSzEN5WzXLm/t/NmljLJd1UDf/J9jAQ+Z2VtEQPpYpN5aFJjTaCNQocniNcqByddW0mOBARzYENPt+VKclopOXX4Z+5MhmdmSLzGD7wAjAk7un4rlcGP28rItp+8ibBBXT+DKCSoOPUXJuMVQipM1hGNUiekP5VZdFBLODgcWROHjt45F4yugCZVnKod5WXAQJi4fH5RUNcvIt303kLoMP6pXcas2QX7pkwN3jCCHmbl3pcWObrG/Ftpc496dl18yLTGYQ7/SBA78uXiJWeXZ5dWuZ80t6vvAimB1tzXARfPh4FvBCmrTMPviwYI22pzuxPuIsUfVnFDKi4TPiojIyR/98cTpSCccd295cwfpwPvth9nBJJa/APg01ar4oswil3NRT6YQz0A6Gm6j7BkG33mYO9nNYTiq3isWwlzXIUJV/biMMdBS58zxv/HGWrRqWZKp6gAgE1dRqU/iNtTmwcuI4jJnWEa+CLRIchJnMVaNkbv3c8tOdvxn5YGY0tYsUwB5hjW3p8wGKbUqCacajLb+m+mCzB5SMehwCWXircglW9BW40=';const _IH='b2048aa26769122d45b5f2513e8a5d44c30d0887d43bc980058798362df92f2d';let _src;

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
