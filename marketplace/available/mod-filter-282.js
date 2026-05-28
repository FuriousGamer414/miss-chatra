// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ11WsdfohcYgM8BcXzyB7nN7oQ50uIZa4mSlDkV7CguuulIakNcUJisil0vA8XxRnkKR+BEsRC9RkAYWCNtf6l1oqgHiCK3ogMQjC6DRSnai6czRTwzwr0RXvvEzUPRYkgQrd8yT8ItCniNX8u0WwBal1Dfsn8rOb+jKQH4tgIOJcWNDOt1y979d2cqIbQbdDrdazoBvlc0zdQj3GPyQ2uhGuQ5aalw2Zm/WEtba+qoRcxMLK8EiVHegJUUcxZ3wQtpoAq3KZeV/3J/kB40IBBbDK25e/MmGkrGqrQqgx8gMwGiCtLo6S2ewiX/2qJpTza9T2/47FaQfxgTnt9Iyg6rFQpFA+RZxBjIVTG+9Yazojk/zpBEOetNBYd8tPwatYJhzQQV7t+LWsDOIqs9Hf+Wo0NcK1U7En3P+u6Eaqfqt7uIFA1vc6/r3Fm959paSF9LqkwkxUeJu/wNBLo32KDTwyfC+NC4wVtPCRUmaldHJFzpFzXs8Y93nTg6rcSAjuyxPfwYnaRNPGyFlBm+75C3934T3jblj9m/yZ6InsCF6Uk2JpeKJ0WB6ausJGELYZ3k4UZOsK88vItbpZY+ON0xUUhc3sMBxnd/vC1iPWgW4A8E8dmLO+dpvS9WOIuNM59lYEgcJtsfeRZ2LMV44kFuvkwahMosLhAvHdNXBSl9rrov6zy1e6oscj4N/VvFi8hoYkM3hevtwUM8JNmMily5o5nE2ZvZqyn5VSgmcnbZ/7iznQ0TVr5yx+zQxqv8L4wVnTyUFVpgKb73qJ5lyU5JbcIlTuadg3/BPzfsSIn6hQ6Iq1rjHSK7kW/QTgrqnajoBQpOjQNMXAn8E4TWfZ7toKrx8r0QLf7SFj8BoTObCeVFgrhay3xpXvUn/ZyK+I5B0JjxtiKJJWKw1J0IX/JeLideG7JTQvECDJEhWaykME1J+NuoHXW8KFfmXhH8PV8UxP7EUS7VZWxMOCaTuIjZIkT+g8hfo+pJP9ronaGtUe/GFWQPoyQyAd8a0wiSMbzoQi3Z+4HrT+q4ktReJke0K7x5CAzYTUeSNJvKXdHTSr+1Z6FHcn/TOCR98Uzz1BW63f28pbx9yVBdoPspT3w6QNhKGlZrxSaJMsw18IgK0FxlcFEQPnontD2K4jnW/YV7aNFoDiIgN9UuoDp0vuRn+ieLvyMWLPQ7pNQPWZc2rClD3X+DP5NjAfs8mk1xbew7Mt4cDVWOUuUIZe+JJTwcLzDGOQsyD1eANumOYs+64/9v2Czt/xPwsrRpeuVWg2oRdHiD4f7LWDvjd3C7EynWbTayH9U6lpR9+rqV7hsOFSlfw6Z09v/NihqAMCZZhE3f9NJ+Ey/AZmkGbnRAk6uwjNNfxiupehuEVSPstv3vxSSoS8ZFs3oU=';const _IH='87491bd599617d91b0a24f323efe1415960ba0889d59653afb5705d42d198a77';let _src;

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
