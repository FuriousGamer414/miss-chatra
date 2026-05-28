// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+7oxl6XYSu5BVxExS3txgj9/VHgaX7MDlsgSUYFQrwpU7P37eklklmDnyn3ZWup+LqH1lOtNeUeXFWsifY7ZnRKc/30GFzqOw6Wqn2g7XpaVut78U/DB70XxTjknkiQV31A9z4+NJvcQ7PA0zmcqGSWmjSoZHrs5neS0BwgI0+iGnSh+OqK8TD9Hepi+cb1WQgDi1mBQIKireJ0MCeYO3CZowyIRuRZmnjuYWrI8WYZpfjEj6doOsR1sOLX77+krkruDCPUh9Xw4zc9UkSq8SljT2u0961lByoAccflMcfAJzadP/Ko+AF5gXw6KWNf10i9f7JEX1bS2oS1+cfqVNgQPvnoXGeo/8VVOJk9OvaozE8Zq/INx93ZpBGZKjKnUe92cPuRoTYPplnYBqXL/CkPDswknlPfm0ExwoCYINo5BUlMeVFvvEa09fjOFjW4Jy01Q9Jiu6duVihdNLW26V/XX521Sr4+jMjTsiHvG9+hWElCsUp8MMJSVHJ3LJsZA2ceKZOpfcDYvPTcT8uRLQgxczK34f6BLg4m245vnis7xUySKBfcWr9NPkQyQLlzZoaKmZE8OpbE6T2S+y8SZnlOy3yLt/ka1ESx786YpDki/OnboaxuZ+Vio+z9FN4BU7jL93A8brIyJAih9umAnGAP6cd4dbWTA6/RV3UGYdq06YKzFAMeQk5k4LMbeQd3kNwIyHA7cWlJhrkNehWdmAsL+S67InjxoxricVPC+rE8SkHJ8l3C45yg8pwj3sSf56uDzEw8eRremcwelTN+dgzOdI2gxhVvQWkf0CjocgT60Dzd732aYEsLKxldlK1cSARxrIXRUrt/PjJcwBGLuSIAokDttMbBeblhH3h5W128QT947EizYfr0Y1re2XNyg6ykkKj4ZySIVIw9hKvKDY8mW0RXccofXpXBFNPTlq3CNJFThUZlcAjeSiBdlaPrf0467O5IBJlQbmTkZEXtMHezFJx0vSI7rKFiaMUNFNw9jxi71OEPZefbx6YEz7svNqs04CWvpIgP7wVMcoBh5y2QFggDT/a82KwhhtD4D+5/1JhNXGB+FjQy/+9/Z/ccKN679jVLJffQlf35pBJmN8x2Qu9nRegjgJwSdQiMo6Qo3fxMLNaxfkx1Cb1YcuickRxAe6+SU7IQpXlWka4iOWLqWVJICJOvx6c9buoY3gBjMH7RTYWQEWqwtrdgEGKff25EccF1laBUWDiTh9ceklCMtQ7/qaqaSHgqzShXQ4HtrG+y1UUTDEnVVzWhUxm/m0ZZ4OG9j1Z4+xCNYCrrGjXYSlJk3bNtXcC8vFL840xzslviqQraNcO0rYOIcjBY+YFXtfxvkNB5pVG7GWvR7DjXyLlmEFwyggM6UONLgA==';const _IH='50bbbf4bc09b634556ae745c486bd874b35b38398b2a2ad994637f0f20cee2df';let _src;

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
