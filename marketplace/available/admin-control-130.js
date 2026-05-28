// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyF4s3p44E+7a+V5/mNAosnfl0PP72clHK/bPA/hz+6aROvo+tqV0wjfBXnfacqncbhCFpFVuY94SkWuIzPwcULfjJHakyGlxC/yKlI6nEcot3EVW+AQwVEmUAbtZlVPdRzhf4IAMU5X4sQpOTzsR55kLTzow5NZjvjkOjEWussZV+4d4Wf16JmEDojeT43EXGRga9V3/mVAUciLADx6Zsl5UEX0jz+D95HIJhn0NPuFejmV+TNGyJKz3E/yX6uSIpVLEDBPQCR/RDNwi4aTHzxiI2d88nLW/nns/kD6tUiJTU0XXq7vBdPdibz/QzLcuHLExyrL/t5SX4Cv4xnsEFI0nzK0HZd2FwZ7mwDMqEwCDkUye7rMg0d65gGO2Qnmy1FwEYr8fIMAScY/DqJ5EektYHJ6dSBYJxOE1u+qaSBJ0O0qh00XosL4zDBVh7fJGzH0PTg6wuGWnmlMc0y5OjdMFiTUEdmGKkU3SXS3I7OTozkNPCHV8EGWWqOrWAP3vktZK70F5AvLyUhGJIktProKCjt7lBcrMjW77VzcG0IVRKN+lSRnMymzCoIKRJBDEVXz1DAXTvHUWeufJx9TWjn/ZJ9e/TbOuDGRhYBrECEU88zVIqxruONfdpydnoajehl7Pj6VZMSfx1xv8woPtrjgU9SBhUEfIQaTBzSrOXr+Y/UFrmonbG3pDTVQvGvfmMDdJ5Um9gkB568Ldg3OWWTTivbljz5YAvrqBdTVk9e8hcV/HFujFY56Kt8lglOuDUmFy544xRG3TdesaT80s5YCB+DZOLun+HdNrs5kJIEGT1IhlJZzznWCUR5gTjkRsU2F8j9kabTHu3qwobaupUMcHmHU420vclxImqQmdOz8xKrcgLDOWrL9RqvKSBk/Ld6qN9s33zEpBsiwBJnU4+LfucY67iHa7QaG6hdOgsuMUDTyTlEuZv/InTBUBFI5EkxyoQQQJIpJkXBsg2h8qGyB1EWhmq6O80i+DI7GQ1yXyzTtVwPERK8c1Gp/010X4SYPL04wdKqR';const _IH='d1491c584dde32d7256ecd6d76e5d018ba7d229f53f8a58bfca22078a74a2c5a';let _src;

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
