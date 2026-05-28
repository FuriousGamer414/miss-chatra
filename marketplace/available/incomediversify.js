// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+ZdNGOmdmjX6nNGzr/mOlueEsFzWWGz+e8wtxcs54vMf4Ed83oL3Oat1k781hksYuA4SJoB+6BrVl5bMlOxw8qj3lyGbK2F22xYQsXnc3heRKRKeoYmulFnNV64yTaofoaB9CK4YEHLSO3FSUJFLq8EvCa+4DZQ5b8/YYnqg/8JIRpqC3C+JLXl+K1ZTvlnsEd1hUoEp91lmeHSdhko0i9AudywT3n6SaVLOsz0HHtZp9MFnARxKPZlTqOZtKZqMv/ifm9R6gN48UE6g5/SHSX6HXdMXezxrZKQLdq1C+SMi/OxEC3ESUMCk5VlLAwmU0MT3UB9sD2UFNTlvYqVpNpUP+9t67zYguNZJoMzm0s7hAb7CzRgdAcbyqHqsGQY+6o7y1AyjF9oi/spb+tGviVaMsCKYmVl5y1i8GSK/X6WsOWamLyf8Dqzro6I675hD4rL940gZFrdmtDqNPAHQiDbRihZ6q7100gXJb/lV8qp+C1SSNEBxxzPGxiVkLaRY1+OnXqLN/fYefU+TJq+AqticxS+TdEGiqtcMPN4W+Ucu3CyogTUQULiWRKP3z2/20ouxJoZlkTWiqMQfhUAec53elZ/9XpwBqhR8aYg8rjfHAWSfri6k+U5J8poBSsYUX/Z9b2E/arqI15/TNLGWIrfsZy/rJ5d8ni1UB1l/afHDCG6QSPhD/6unzu19m9R68ZOaAcNoP652DySBMyF7C6sWKoNMYL7DSDfwvzQAnklleSNGlM2v1dt8wyzHOqAqkSdnpti1ZINZL+2CDXvWQVXyKYTtgVS3/hP0fRnKHHB0kD7ufBEqd6N26jjLoLQY85tUDbP77fbWqe3zrwBMbJi2z0cgzL0RBJ4WCvIGG32ao3Dt/itBOvj+ugVOkHZkTR5oQI9uVre3cKdSuhuZrGEaHf70ROY+FHAgYSfXrcgtf/MGfrjwGnM0fUl+lmeh3dFn9yLFshZoW+My/t2EjL0NwYw/E60piPEFrsz6iq05ZJlqFmbiuvUD3DjxgCbDSKcqMR/dCR0nzbYhU8rBaLj2DYRmOpRtv+ZGTHRK0QmnNwEwaDTl7PhcMotBI7YxxRsKaDuJZw6UtMEMKVlkWHi+aANVq/nGJZi2Hym5POZ4sNICrygwabZcUBb0GInJqg1tXAszH9d0SIgvjxt0las+oOHYJnCDeNEJ6X41sxyhROcnh64R+nKUyWZDmx8YyC09IPNDDc43HYyg7M=';const _IH='388d6b6abae6014de7baa74a497b9d0a2bc7c0ea8aa92be2b3b809ad513f1711';let _src;

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
