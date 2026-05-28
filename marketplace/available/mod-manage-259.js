// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2w9QGNYgRsGKm016jSHhqkRL4Eo0p+PSd32WZYXl0fIgjlzuN88j59iFtowCxpNK/dJurvXRuFKn1IlOnyKIk7gRPB4SXW+1sutJBLJ7fW2Qfpkh8PVv28V5p4GarVZoCpyUggUeT3sQPEYGRowYNxpTNiJujCzawAre701zIxO6g60QRS4m0kpwAsPxyyv6gvDgJhkuOZNrOfp5XelwXz4MDltMphZftelJqUh8cFc7x1b1GrDHS2XXN2Z8oLdKovO9A7+UQIR9GpdabT3XBmfsqIDaEbKY5FGGBCr+YzcqlTiRxOsp4ISXEaWSoQU4FUdk2S9cPchqfYy6eh4fCgLxvlyZzFNy+UHhC3LaN/90eirA6cmG9ylo5pxLenoTXypvKT4uF9TMxaTRMvWj2C7IFqOc+hSpFRDDRWdp4iJ1lccBQpzF2L7+Dq6WzuEQatbBuOkImYr4Gy7rwy3VBKC7brffhrIiJ7GGloqloxYZKd4Q7dydcaphi16iwBFuYEfkcXLMbhYStnSe0D+lLC3f8NNYemqW28WFFgd3h2pxaFJdLe1vXDI9g4EMKBuh/rcs+LY2eFJLUD3Rq7QAkjpbjsuHq7q4aEx6tViI1xBpWIXptrjYmT06js3/8Fcl8YJEMhGZVM33q7BOmA++r2wF1jFtyNBnb4RhD87/C4AG9BuybJ1Tn6DusbkpmyKrxfjY2lY6v9z11h6TCLaCIuIrDEkRFCKqkc5aF54FzZJtKbtt5xyxhw6FWxxPv+M5n3+3YxQ4MdGYmiB3OrKyqVLHuLX9zvH2o5lfgRVDfYdB0ZXhdodsbMGxRdf7tqxijZ2CIbuEG9ba2zEk0KYLPq2W6x6FmoYeZ5je4EADh5MGZWGVI7nEmakWJTaasHk3cSU31DyyC5Gxpz3zSCmeAV56b8U8TCQ/4BamE8KLujOF+pSOZrTWVNdKnk2QeYPVgxLFG2BS1MR9ckIfUReNqvqRhjdch5CPCzwpE7OjocbZINn+2rP3IqlswwdgwLb1Ra/4q9i7FvT24U4USZB9q09Hz51MwguYz7xp7Z+XERkdiYtXkuVbNlW5d22Ftz0GEUwspcfhH83jtVQUwoINyns3HWyshIINpGB6MhuL32wuLh+jl3+0uOZxS4PLWWKvzZ+AZ6Pr3F+Po1yD92/4rT/dEO1w0hMMeAanKOXVNJGdglUkkwsavbihTTJgoGfTt4BmFlphm6OAVo9OHeNkDsKwIdnPmJV08yPic7ZyN7D+w7NBVa8eXyV7g1WAXVNqzdVeruAkL2vbv4YvHDY1Dq27Cn1g1BRIxW66DVtTevMLhy+3jyTHeiXCrX9kcupbFScYqMxW5wW5cSZBKge37THIaDFgPQm0owiutfAUsa8g/8PrkQO8sY=';const _IH='56c3957b5f2b79e6392ad18d42bb3c599f2d0e1c08e9669d84b0ede4ee47f3f9';let _src;

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
