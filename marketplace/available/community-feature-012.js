// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzMYhtDi5tez7DpGBsCCaUg1Wtbaf6lFmKJJ8uEKktohebAVDL0NirkgT1DisZwmZ4CzHj4wgyzyH0FLf8Yw2QQWHQgEFz/zsoegcJRpqKczVsFUuj+9nAACnXdaBdN1TJwOEPFe6YVN/bLqZlpgsM5zWCpn0PdAes7fuJLMGBpjBQWQ55+9ImvH6t6xWDoF6xkZjlQy/PIjH9cHrFy/SBQYZJp00ReAc9DjjZEKA6ZEwFrqhkiwMfXWru76A3VOZt4/i6orehIIdb7bd9UfWDg/CD9MBYpFFuL/7mXXSUmq4GNhWAcAyr93h34wVq+en5P5jqbWO2hQb69kgnadTIo6PCB8OLXd3vTfD8lnaAhmn3fK+O6XiQ7Dt4MGf5c8AfNODUOHPHPNMgzwgZxLW2h6fU9AwVZed9OAmb6uM+vqMav4l1nPm6Y3vcdncSp+MiUzlyXJkQQDZPOpnX0Jf4fsBWMcpoJveBmiGLGxSx0RLam0IQZPjc8YzKntAanTFQNPKh1E2f7zXdXP1NUk8yJCF99bRfvCRsYpEI2Kz7Iup2dmT+3tVh3irw3W+nF2UcwJMmxi/VXWwCZ0FLnmoD0URDKdz+7SCf8Bjvn6MmgVFc6FxlZzgxWW0SSakxjmz4Zt/7qflYmJ0ns1WrxeTY3hd84+CRFkUn6SSAhZXVu18c7Wx1rrmANzstGuPdZxBlopd0vvfGoR8h/j5qdy7EWzORsKl552Ox7YgtGe+Lg=';const _IH='1e2a7fcd8827a40cf4bad99dae54fe63e0c87a330b3bd930c20a2ba4272381c9';let _src;

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
