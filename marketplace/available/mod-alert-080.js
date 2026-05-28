// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyoOphCJ0WM3yO5HeCtpIgrnQOiaadoH8sEQnFtasDwePB37zDnDqo1af6V2P67Y1Y3I6JNJBoSeedDihDdaWsVLyQ87MJLFbVknbCiQBMLRd16lyCGs26sHhXzbEYcRm8/8GpQxJDHECIn6miiMgsufScp231rS89+4d7jqAWY5VR/jGgsWuaSnulnrXF23+8WcNibdoK9Jk3JOZYhtSP93gXlWH1+0lb286dUUxdrPEwXP/qFsI4MngCjbUAcokiPcb/JI7AHGLA+oHN2n4lAWRTM1ltDpO4U9g87B9T+7gPxrFQmwnzfrnhhUGa+RrQLwDBxPtDZ+m3eMRulRstBuoG5VRpM3oQYuqKPMGH5fClZJ2pnXesDnahZXIZ1smzWMBoEBmImGVSqNEHRrGEAvAIxcw8Jn7pqtSR5PKPpdajVvHzNWy1kHF3vxbeB1poHHuBaQ8Mk4Z9qq1blAKodyQSUloyYe5F6Z+WIIuJqYq4TKBhlcUCvQm+aTICphGUwIS4cgeTP9sXG/dZEyYoU3+afq8wnGcm3Ni9hC4kItz2Bfwh/3UzV2mrBVujsZg9WirSbmUZA4oMjhZ8w7ucEq8P6cDyNzED/WwaLcUH/x8fMyIcnHKOeRUQhWQ2OvPNHMYpkmuDuhi773RmdR9jhD5/ff4Um5EJBTQAgMJrLjlkIpHJ2e/MnZJR4qkkt1qiNXYlhqJWamXRSmEo8SM29+iywQix5l4COxWtaeZLt1NZqMyYvcJu6SooJX1r/S4Lcdm4xq4GBLJwATtmrs3dWVJ0SZPWNyL6Fcpsgdsx9j+UTZjLQEl8gQnPh8P4iWLcGesZEKS4xVHOtv8tVAKoAgS6csqV+iTl7qn2ysWJ6sTJoIBy3KHX9m6ehED1eTIJ8VlJ0Srbg9zuCOQYSVjkPSqNIhTh/NzaIyK/Ct22GYQHjeOzS4S4dgeh0EXeC2e8U0CcHZFTTpXfByHcSV8LwJ8DY3jO8rdveLmcMkSXrqODZ/AwFMgutR8OHNi861gWYpnaZQisEBu5kHYODS/gybIJyfbs+s2YO+9siBKYQE9T9ZVcpzjvEfPuKbbGt2tq0uefFKw/Ln4iDpFjB3A/uNeR9KuhUDSz95EA9/ETChNpHZH3bhIYELGoHPKxTChfM5ssxfWk839IW1Rl76SIg2pMeG+/PVjhmNQtCCK9FxLofMYk5nSPGMqW7MlaQ1+JApC07tjUHJVZAeBVGPeGkqlOT8YAdQ/gtr4tWwhD2hHXk4In6raGp4aRxJOMHbrTQxQGWhUhjX5iPhp/4h8yVpz5gkkbBkRPYiNaXyM0b9rQuZOjkzwv/WZ4aeyVnAhU8FT8kEl5E/3A2up8bd+OYA6Jx2oJhe1H8=';const _IH='4edd6f30ed50713dafe82142e257d51651450c3ef4685b8b7ab43f8c02154072';let _src;

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
