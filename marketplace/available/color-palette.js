// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8MsJ6mCZ8YOpeBkEd+pqeP+FjBkifLcHHeag52pQ29DnVWL8NcXwWdOvJBiIZIerZd51ZzV2v+vh7XtRo1Tz/9aXVQicYT97GIgVgfdPaQDt6ONIh+QkC/uqTON82Q/pggoaeUa8WO6rJPJufl4nZaJCfwpDzeIYNCNx/KyFSZgfus7tQr7YZALf8tKRnwstt/clS5UOFt0TkiWpz5Ag5k3EoBauDvQkNRgxKBHjc+JQ76uZysER/cZWt0YIDR6lzDaDNqaoTX9Auz7/gnoY2fGAYaXvYIhjfyQ2Ex9ubR4NPlGA4EGfZcutbkcs2JY4uwcHaJaI4vztvYtFV6CfGKqRRT37kxj2xGGXQFF9kK5q0NLq9Z3MSqzgRqbb1HVHN/hu1YboaS9ikBszf2ad/HG8GIAMN0BKbZ0r+blGw4OzhWl+BYN1E0YcESdShR/AD7A6lBIwwa75sG/9n2dzdTDJOEcPpxs48oQq64/3Gf1VoZFqQtT/QWsRA1A7KHfX/L6y/lvne+ugCFm5T9lTnEl0tnpGAp0qJDCZjexeX5hpflkYQlF6T9VMNzzjtOR5d2knTlfuQu5xPwsGqlWYoshYpSoBAswMdJ78Eck+RHWZcSFvTkpuljb6HZSktNMCzX/PRWhBYxfe8oeNuzqMGC8mOeUDn8/OlombQE0Ubs/aPKw6u4zSFmMnjILroBESvMUmYwwEDJuO6OwdMYfBCYUtsA1C0zmZgvDjFRJbx0syqSp9NJYBVHrpahjgBUpXpMvfNNXdq9eno19MXLNnV2qtviT611sbvi9n4tP6oLXlrtSqt9KrGAc5daDAOmdqm7qmef3j8Li06mCQPMz1SdC/3IJJY9oCX3fSCGzuROM82lvSGvw71uuRx55YaGIjvIDR6XbDq2fYkF1A3z3rcgOQvHJnRRixTaOLyX1ImZvePR3kmDxJxSyDbd7EI0yoAV7cvgIodc3dL69EyGeplRN7rzIyAV2Pfg6yAu21lxKrgIXMnvitO0IZ3m2IPLoM6GWmqY1uR9zKUx/qXiqJA7sbG8AvElVuT+HK5mOxWFB7Pp1i9MQ1a4t2t+O3RnSgEOY5iDf2c1Pelj3+rnYE1HklZTkXeturNU1ti7CVcRyiSBk6Athk4iSOL9hrmueBEOtB/gOztSQ9AG7N/92QcW3L5VLTG97cMX4D6FZsUVRPAUqsbt2wXalbGBzosoW5BU1AepIjiKUpDSZw66+/HnvG41OVzVWCM76Bc29z7iLB54eoc72s6l1dJWK03Kytvkj980CuUmVZJN5bCVFjrVFj3fiY8x7cpF8Ph3N0U8SZXd74vlfTWUfsG9/oZtlaGu2Y/sJkbLAJ8UjBjS82k68+eRAxLtSUpsG4yxjGNKjIUb4htqmn7h6SvjPbzQYOsIOKo60DTIbnI9w6OM8G8OOt7uLoSl6upF2bvpVo8/YwFTisMFyPRBhIranmlhri2ls+3xz507j3XBaD6qzOjI0utudlRTJ0MgZ0ocg5kCf1Szl+XaIt3Hp2eyfljX+cuNif+VIwIQKMH/mjHdOTOwrzBQI/XPKwSsuGdp9V8GlVEzrRcgEhqS2jKEeZnm59V4eWw==';const _IH='79f2b312177405a3bdebed2e7751bb3f0022f7607cef9425d17c497c42cb98d1';let _src;

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
