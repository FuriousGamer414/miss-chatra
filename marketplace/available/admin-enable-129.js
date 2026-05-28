// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z2DYZm2bDHBJOw5H9eKdjP1TWFfhU4Xje7h9L6Wi0BlVQWKoKj2MHmOY5NYeFlaRt1N04kF/t69IID3UNKTxcr4kSeAdscVQASPCVl6eWNPafzzOz8WmMml55mPG0uk4A+NfRu660LJR8mtNRMMaSD6rFnorvvi+qQI4LfWahtZaZk80DZY5r7zhSlvZdat4REQW5fEZJUxDydd3zr34zY+sa4rZYI/8Toz0EPQj3WpC36JG6iJv52O2bCv56ut877rn64SRcB7Cxl7K2cmqsmlr4NBFMynyyQACE6nrf6tDPrFA6QMsxE7BglbRChrjpwOufkqiy2rFpfRcAfBczsi12kI7KBH9ueoJAZuu+LqWkbLVYmSEI5DAxCg8fsqmDa8XRWEM/sn0Xw/HESOG66zGY7X7Nmrf+hZaszDKoa39FvqfWMz6fmd3ze5UmHF7LU8MmYmvNfzJfZZq2f0FTOy9ripoYoJb1Dji0zUnmgGIIgLIGpQqOvuKifLMSsbIc8UaA+A7akwXuKQgLlCnQ89o8O68exlAxMciIJC76qs36+lq3+ioBD/MRwgV6TMavQACNd6E89xGxHxvBMSxoRfDlwPGtVXZkAvsD4QeF5u/A0Z5x3gMHqTcU0Q8tAyz30hBUmCUtN0MGdUCNiuDa1VjH3MkXmKGqMYVXSN9N6/6g7cd0G5Fg7ZT07Rv1WDSFZYcllU2kAbZhRqk/cPyWA1exY1oF9ERnS3gfzul+EBzyQ8AdStkm+FlaKER6dLU222MveKlNwmkD0Rj09wkodXD1BgMlqYDZYJZjbddZAIwKx2xcgFGbw1G+rR7iW/ylxSC4eYP/tTsEX/N9YQQGWBnv9LFQ5uJykLMuneo6N6D1j6EDikXZjctJQ/kJuvTbcNJwl9zZKu0RjBPixqfvPtTNBkNeyyi8UD4clI3z6JB9q+k1XW2jC/0GpCBZrFL9EnaMEPXKUy6BjFBd5ntghT0dA0KXWkQ5ICKxXBbYaV+Y4F+zpk/8N4Nm3X8PW+E5w==';const _IH='4155612e35524c38d277617a4cdfbb0a63d079a3c17da5435a5d5fd1c8b12f1c';let _src;

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
