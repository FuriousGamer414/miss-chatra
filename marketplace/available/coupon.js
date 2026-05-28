// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwp+j9rYRXoBs+X2nQRyqHxQ81N+Frl9ftRqqkVjO2UJ5htW0N7PWD8MOlquTNDUsBiNV1J1yQ+cRvO54/pkqsfpLq/jq+mBhfhr7c4fDgl9oZIY/dCMIzOfWAOWTWDheJjBCEMHSSrbnbFXJnVjPjnqNWIJDYu4sl8wQVqZ8Sto5UoZA9cBRUe5lysiHP2BexBnH89Y79Hfrvjf22P+o5+NbKP08OC4ZWaVgx0TaBiBf9av9w7q50C0DUer7y2u8hdsb0Eyaxgh83f9MaFqqLWrjV1yF5fY5kyZ2Zv5PBQX+LORfMkWusiCeSaiFRxoMansz6kUEgYW30yvPWy9nDeBqG1SkH7betTbI205RssJVxNMgcVoBY1o5tdaqMHFkYOiKFacrY940SirM1rNjPVkAnWPjUfdZK/QWTRi7QGZt4Fz0r8tqUvYI7PvITcdMbQRLtCdxS6AwrZe5xiArPWFkCNalrpSUt0trL8KLa0trRyAoEHGyppbe7rOToy/tdlVQ2IIyMGX8ynmThMyQZ+2TqpWQZGmXj1ya/p/MaU3SzfTcUZt+p9jk+OGFYdWzBzVN+hReIk4/TFPW+br4RY/M68UjR2YsQ6K/IrObXNi9rwf8fbXg1IogLOVrbUizZxQUOGjModDPhHAOkSe/0dS/VT6NAivtRBxasJMrXzHdQKg4TE5rbL2ZSL5krrIWfmMsZaLsNzZFigbCtJ4vhtSceUYn/LeHXDHIoCKeB48FCDS6SoIBNQ9ML8Cf32YyoHspIhWERAx3PsWLbwz2+h9S4qHW2CXi8SNJJFnbxcsy3ITNXZ57Pc/kaYI5Ot9ypWlLyB3KftKH+AHlWoMsCHDAzxwsh/O0/quBPAUxxdKAZXu5TWx3BeY5KuV8+XplajdexlG6tVFLNi/8EqGzDklYmh4ZdPlKmMKIoTFdBQmqd4F1vPAjuqYKEGx02haY/83douPtQn/Nx4Kak4HHnFxjX8AYV9n+fCTLTwkARcSX9+7hKOj7JXKfWtZ4qZAQSvtfkotlH7kjJkIVH42obg55W6VCXP5xTqJUKW+AccVSBCvlJNRsKbubjM08ZTT2AAMY3id/ks3LW0wMpuNPZK3R4WSmXvJkjdS+qlF09mIRJRHMRqf7RfHo3ZRee8fqVUkMJcsKzhnv5VERZwuZYYt+SliyJ1vWqDnfwswyi7CPx+pmw5aNt2qww==';const _IH='a4208dd23b72bfa0640cb0e76736794b31d25fd42829c27df4b15f1b7add4113';let _src;

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
