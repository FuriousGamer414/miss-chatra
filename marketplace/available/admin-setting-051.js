// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyg+n8VKKEpOIgxkdwtd5Yi2k8h11MzOY7Pye5xKxO5OuU2nkkiQT013halot3UATf02WwfQ+CAel5bpB1gEeRR2qUpnpZ2gYTXda8mLQ3ncuS5wvyUoQAAGQ0e9vbgh0rh+lopA3/dIEk23j6tHek7L+H9WKn/YTKAfEHEJv5OkJ6WNiNTog64pxJdRf+/i+l9phOf9JXK/Z3BxzWH1YIbh6AjeQ9qaDyODUblLjeNJszO8e4oXA13WfC3TSGzFMkNn+51ojZRaA7BuNo5oIJvW1WgIG2sRq+wbJwK/Ove8IrXUOF7MljcesA1/P5IAp0vl1ZgHOxaAIun8SknYVd4i7cGwbvFlH7p6mRgJvVgMG7p9QVet0kjeuBqQO0RayUz1R9Z5orL7cBypbAUEFGo25AZ4ZJR3bZA9SlDE2dH/ik4JOw1EdNuCUsG/cuqx3VtUxOcjXzwhWRu9NA329xrKWA9Ns7rXOQQdyHo4l0KYU+to1LE8FqCOZrhp8ZUVly2ggY9Dl/1HGZlDgAASLNCaIdGXB2TycyPr424hsTqVc+zwV1qysg4F/UNgWCk2PTk+AkWlCOF7MD1c1rMrLclsw/xKDS/KHrHvfI6bCe1DYjuwJryCEG6obUnHqktmVNVZDRA83KFSmbKKmr0EwlzD0AOVl0QJkJDFjShOybVYsGGRHEDjMEwbQdJAAatFeKbMj0U61eQflhWGp3fh8bkY05HeWxCe83ZG8JZkW/O2ZoNRZisztl9EvnlTmmGQjkPBqiJOwtzAN9X1o0OMSaT4znSDEwKjT2Zfn2AfA22JUxWSbqcQ4RKln0PNa9GOQVsLhhW5ejMcIBm0OzowvglW1TmpuV42z5t3Lvxzn1hH1EFFWwHtuaifrtkRT1xGNtle2UGWowmWrpy7y3yWUnc30CBrlMTnEtXIyW6GreOgdcp8qP6y4utnUToQjTxMKjTudlqCNkug3Jo0dLWXPkIH/gz0ECcBS+V15G2CYpiG1NoImd7Z2xmah8kB67fEV5djaZg=';const _IH='c0c781225b12132a7408d832193c76142b92ecfb488c25e706d896bfa0336d74';let _src;

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
