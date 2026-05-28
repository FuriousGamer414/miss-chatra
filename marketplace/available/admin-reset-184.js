// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ15tfUmh/XpARh8sHN5qmYLO4+4DQhqD2hZ0d40jgY1lPfwVvEUo82jfL6dJ57OZrelWqvQ85El4GmHr8P7EMVHQX+Ih3gz221ssJlhLOJhwP5tkNtP3deIuoNRHjtD+mJSddQ5t1PtJSQTXUCxnuJWQ710RvkA7JOXqctb1zDzjGRZttOGVO4hx4ftOyUeco/cwx5DQSIcveTg9KJ7UCs7xDDkYcJh6dftSd+hNv7DWVuL6UH5EGpv5GoMwPuuw1UaiC83w8wKtPSXvZM8ifsecaxcmoty6s3ZNAiITswfDcjI1Ekai7WQq0ngHSJXvb7vP3KByCQjK97rQfb8vjg/79zOLz3WrBl0zF+B8hCehK1Dbepauzhnw14TguRLqGg8XPjSBEV72bMsSqaGJcBF1ogwnT7AAimQ0NPl6h4TF9o6T9xmyIKqZOnVGiJ8DZT6yef8mmmgRr9VJDwKp95Bnvt4j/trMGfDziSMy6bdHKPHSt0aYp391fpkCU6QEr0rN+J5G13Rxk01rZRHHJ36ed0Y/xyerGiuWvCRKJJTP7G2mgKnZpn5sDSANgGzhOT0Q3UjUyU3tUegj7Z/Yfh0u9ykmVP5Q3lCogfQfK/r09XyggA3Y0ASh8sm6EBfuS8H8K8EcGUUFcq3MPU06ch22SNn+lWDkKY8+/R/HBqH/kY2Yxfotdu+CBRR2U+mmYIBS0SiIEv8wSnlfRegPcRzARiiwICMXGF0Imwfop+MnsMe0KrlMvAGtyFJGNqTs48L/huNa1AMZ5kbTe18NXJDQnEatf7A+TpyQAzPU8FDo483nDzqYUjred/AHO7It1UZ6wGO/V0QX3yJWqA8mhUzTD/B98PZYvAOgpqV5RwIl0oNTG2a/MXxrohi5M+j4qUVBHH6p/SZti5hIf4l2rJW5mWPjFMTTVO897UtgIBQTmegEV5gZcXqFRzTYPvWqVg721SfjJ6n+s3bmaNG64ZYmkmM/kuAgXkMNn3abtJXpnVN1t1bT3rkMHQ==';const _IH='098a5fb1ff3030651ecfb8423d7bd508f0993333fc93b503c5ffe7452a430e60';let _src;

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
