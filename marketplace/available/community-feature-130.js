// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxeDCq0MxtApos1Dk+2SVP9oA7+6cuFJbKMECc1Aq3IbIn+6b4ACXfMUEk0tays50hvQpFmT8v5UQfDqGmfBPFGwOVcn/uzY3URJB6JnGeiRU/Ue1edGrH6jXo6SEwTBL3AIoijzABRbFFDgiKYEbOUxz3YBaOwYoUlGv6ai58UQ+Fkj82ZcKDFOESMj/zEYaGVRIqPxadLwTtrriqdQWzCH3bl7qBxjdfPx67LmqyuV9yY9KfLhsCk/ir6GrNgt0tIxU9NwooBrlLFbeOJf2aQiFdbtTGG6XvZdtpjJEMIfz5IXTWaMwCEQYl/pUA2Zj0gVN3NAC7U0fQ2BS5ulo0LCSMj4P4lRmYToq0K1h3yu8l6+1MN74BW1YlCBq1Ax7OLxflnyFsPv0AnoYzJlp3jefp/gMU2/Yv4j/7utImr4XN8YXrL9HThjMBgKqrA+7FIxrwk8GekharYL9MuvMQo8zZ3rD4zFMkpMyCEJpWe5+J0j6hw44xELOdGcJDVP0I+kPYwfME/mgkL3EX/PCG7gcDLBPykOrd4uWtxza1+4wRTEZv99hxCXSpPii3wEpxvhoq3HSEwGwXt+8xrfZB3hBDV6nHc1jQQZ19pW3PQN8FozMbaGWwcGLW33OZP9EavjJt6M4whml9TaRRzlhwORMrofhKJaESvweQZ9G44y3KxseknWRuw7Rs03VXXUQnqQ1CJBqpLqIwedPMIIwBSdETDq6gKuED1s9BKD0t/pwNmU6tY5KavFbQ==';const _IH='b5e7dd88f2fd2dbc59c9fa218eff641efc526258d24cc8982dd151af338aefde';let _src;

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
