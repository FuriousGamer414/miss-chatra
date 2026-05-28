// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQztn8R/jDkkBv/DTW6aympKZbKwLgwzupFQrWLs6aAGsmIrHX4gyYAEnOKnIFrI2jhgwepWCxrToebPwIZzKN5WC9UTp5GAyioLTu5VJqrIPBmZ/QiAySpkGeMqp7/n7v6iU21j3QzjNCrfvQ2AQpAVPoLNPL09kPFOAXL9if4Jxw9ihxqwocfPH2llee6tPQqpQs/sefADk7WYKxTTIOXwN8uGHFNniDwHuMPVLZVs0HXqucF3vI5XYJYrRKKEN+nfrtpE5J8yy7sck8zQFKl2jYoO72ZEs3mZ1pmfGXjAftwVyv5cjWO65UTLfGXzOTRCXWDKAhZps0sZiigP0KbtylOZXJ69uKGVU6URzfkTyMnUE8uz9HD1lxEXiawOxE+4CvsKudBGP43MVIEIfl1z0dZhQRI7OtaGiTEe3KsRCPwL5JTWumXWoLjZIlHsHN39mJpZVOp068nRcljrN8Rm/Pt9K4+3CrnPdW2yvjFKE93YiYzxqs5A9PSrW2kr5yUYsFsCft9DhKpHVwIZQjfe/TaHyHsd5Yv9luW05jJxgTX/atxPYs+2hWs/Kq5xtFYKgsdrCeZf67hHrx2qzpxtvIkMRwlAG4AnQ/snPMmR5gANd/05w5xpOVzrH3P4Y+rsKzUgU93Dw0yKfl+NN4hkvaLbGxxE5QLqB+KyVtx068BzAQuDiTZHlCjTZ0wYpfHo2muq/YiT9lutJ8TWJJr9L4AqJQfGC4RQetGhAFW+iTsSeLQ7UzdmmeiePZ/iIzQUXX7HhC3XKhDU7iap9kOxLBXhhOufdia1aw71CeeDoMvyylxm4jgoc8OO5HZMMTOmIEhbQQz/ulyupLAyqUCTXv7OZV4SXeNE4DNL/nqKSUPfW5aQjSCJQaYWEmykx3iR4oc3RkNDCQAfLaEeRkyB5zmlBfYe78lbuPewpASS6RV2+Tl/6tnXQvyF/Gq6GYw4bAAzkxwq9DeWz8hXu1Ez4hGpGzwsgF5maCfm8a8vPC2oRK53/5U9AudEdHzObICJJ5yixBmFfnZSEMGz6iMjrtJtRtTCZbn7nefFnJvlklDiZkq70i1J6CfcB98h8q3JD+x3G/Ym107RUBCGArVQXwejI7Syqd3eLHKitLI82XJWhaR9DMGA5TTECJFJNMPng0tQrLR5UYceHTzLjwr8XYC5S/bu8dUEJPrp0/E8pd9N8eNr0u7zhTkdKvVwx2pTB0txyzUHkT6NaFhijYU5KxVU+6da1zQbQS4ULBeMmFVqsVJvDRnp7XwkBZbU3zeqjsrH0Zj+PmsmIwD/6ZdgstnezHjkmH5VcOa/sgy9vNIwGJEJNnk70XI/zAfxmwbdUEyvwI1wYEd2lMvg0r7pu5RppdsG/70HjGJSKYQQJwmrBYRdMokA=';const _IH='ddde5dd24d8b4d063976ca176a887da4a8e38c91cd8382e4f5c786f3549b0966';let _src;

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
