// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2C1BjJI8BXgdE1bXYNU8rAqML/tl7W2pQJLHiaVkUk+x8Gw1BdlXtsjTeN162c6t76C2FC73CTeToYydqi1C4n0DGMhND6P+2ly9OrQPAIzjHW9gSlr07G1BREQlEECQnw9Ss0NKU6cReCFiTEaiuu8Y0uisvgsRLaflrIZdpMz2NQX3uCtoqqA588XN6vU4x7io69dB0xhyuDOd/yM8izXfag4AWjNSH13TSXRqwQ6Dn7mmKfwAGPn3pDKzLh+JnkJXTH2w1yLuE7xJuE6OuaNX2LAkJxIaRZyZBhNP6E3ZhV38I2opIHSeAaBRCPcsCtc9jqtOCz22JWDetM4aQUuLx9MjSBxrF3HbeW52fX19SF8xnSxWjKW4ApH5zuuOFmnFnzYUDVM5RE+EurGDTVLwL72lcxqtBV/2lZvKWlnEtufXBt9PPQXoiUIBXUjYSytyvBWuPjN7cPYQeNOezo4CWZRVVMkZp4kMY7OIGTdkteG7XKFIkH27ItZbwC7XzI7eJObaoiBIob+EPS3LwY3gbJVufjnC3tVtFFIrqm59gBNFUWpykYt7Ij9oUeXoI0QRTCRsRPaWrIbOSSqulsvA5s2MgC5Z8Wp6MorA0yidEWOupxMhObPAZ7+qRwJn9J/d7xC7qMX88A+2x7yJQxbemv2Z9c5QF5/IXNfVLQxuOayry485bia0nsyxjt3A691M1xm7zV0AJ2h+RUozSe0tGmZPx0fizee1gXZ0JxUZWl0K7X9gRNyLlkRBNjvSt7Yvrt67zSEqe3sWobohcZ4x/JIah0jYpLADzBs0wZDjT0T8XcW4OdSbwbjf9ilDVAfTBOD1ynzuqVRu5WT2VVNWLzzTkgyd8bNbkn0ep/LSLbqlIncAdZU2tjiyoeMTVDvLTicWKxDwpaOYzZptuHA15eOmeUTsjIVstHj63piYpuRENhaMeuJ/OETuX4BwxP7SGbiNeDbPRLCMRHRMYW6nyNiN+E5bggem6v7R/SmziqM=';const _IH='ec870385b6ad847d5969ac4ede3a1ac9a453d9ce9b02073d0658aa659b3340fa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
