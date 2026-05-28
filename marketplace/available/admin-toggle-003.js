// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qmE5rTAIXx6E7Oha15ciE6pwDMYHFmfxx0FaMnIhk9kZdMUxh6CIkKzKCGizpehSN/BDsnTZGhm+ipa15eTaWX0ZcpQmR+BaVvTIJOJbz2zyXCirMJE5i/Yaj6VTP5Cco6CyDrXhcovi55ylGwQWdlvDsZZTncdbvvNUQ04Myn6lJzJXr1SzuaF4VGGSTGWklbJyTFmPLeH2aBvlQnVX6zYC2CKdVSJgvK/g249gnAS/rsFT3lsmgXybGndkl6WXb/vnkSE9xc8Hq7msazcQDf7whNqw1hJWu6M4bPNwib42H6NF0Uo43FDiy+KfzGjyCRlKxWLmu7OTGoRhnMFrZO2SKihgcmPNkw/DoTdWd8TeaXEfoAMvXkSMmOCSUCC02uaO2VvMJHTRuX+EwX0J0omnrDGUHcEYx5ZQ2RK0aGX5suIS2YP1FqDlcAl31PSkJkrUpjW/fogaguKUUQJgDyqM5BjttuqsaZSQMWAIFzBOFgcEDLUmn9YNJGJGd6eKU6mit1At8yCsmMcG2s4d6OD8iMHB9g84/fXEHUZcol9WzRoFfjGygSY+qqrN/nqCO9jKgeE6g/+oVxkDCRZ2+ifWIrw00Vc5KMzGSqXErYGNcTw4QvnqKMy2UzaCuvk39S4by6OorKtpDKVYdnA3USki3DTLEi08XbGtolNwM/KoHLnvg/cpTZhRsMQRX2sZCvrDzKxwz86zWZHsQsccy5M7u95aTLYAriymtj0QpXXujJ8y4JXN3UJXVLr53X1zACg4VhvJ8mEZOw/L8tzdUUGQ5/JlB8D95Y8auWkyNBfWnJd+DKBFUxzDTGQ7aRPJ8kVCWtoYUciMJqVXrfmgQuUB3sMSZgvw5foZQNZs5J8IMQab9nTdDwbI2lLd7UvmVy1oL+yy8oJfS3QQZ1x8nksDRm8rlCCxT3g3Gu4SiCEljSKXv1dar7baHlBmhWKmr83rz7ngnbb8od0eWTq1IkwZyNtTXdF13t+owHluAUcROIFZfGZm2vo=';const _IH='69ea7686dc4ce7dadf5b913df5dc7efcbe18c4c95be28d5edee56a5685066e62';let _src;

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
