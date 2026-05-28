// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/PV+eAvBbje6FhVj6Mh6t+BwIyjXcGWyZ27niKlh+hPiEn4wVnmmp1zqACM4wmssSQTyzHYQbqnHEP022N7brkgyKO78+B0RjXnqz44UXeqsCsODHmAFilohtPpUn1YqWxno3JE6vskvGGEuuYqhhOc7mwoday9lroBi1qHUNNOywUPFZzF1SfNbd+6ky0Kz1LKt6Dc936Cb4gPPZbfmjU2cEtLs8YXof4VSxHJqBjCsydlB9Loaf029YwqOTRULcYVwPm8o8mHJmVWYUdso8iWWSkkbDHnlbNvEwPhAobEQp7Iblb6PakK7pFsohPr54amWzB6uWo+k66L1qddGtnDVReyc6j+8S0mwBzqHETWu9R8lI5Z0rrt9+tytcVYtBPqikbhvXgzdfgVcM++7IA75D2DD75EOP9PFCPWj3vlz4p4sus4Y6mB5CmtN0u8PGZwYVu7iB3Mb1MYVBj0AFucYC2S5oK080/uABJ4RxcqKHaxih7CwIDsgqhTM/rrVCif2RMd4l2ja5ot0vMtFk1ZroU5RL9Np0B3FqfWkIyAt38+bidO7FBdzELxKlQiarwgs7R3iVYKtH+9qG6/1msSFcu8OiSB/5RrM4ZNoOccgmgT6Uzkc1sTKL0U3SHhYVWBHQDxCibcfFqlqNJzWtcmthRLEbocDpPxvdzZvSk6uDwG8Awi5YK8Chd6lmvUA72+S8PtQGvpmH4sSeKn2QcORE4LcHSX1MSnlP2QP4eGEI+Wmv0RbhS+pRbbD4gs2mrxlLvIXOwvWtqwibGsI+YLlIqGGsRebf+oTALb/QRkJ+fgUnWoML6C7dxIdzKKr6q33dBqj2cvusV0BYwDu1BKvMI3ae5XA7b24n/IXON2HSZLhuKSCawUe/HXmXGyJUWiokTCQBR8sqPGz/TnJY5PDSVyDkYIyhFdFwpNwKR1qkvCtoiN4Y01IsSNAQxicognSsvKlDrtJUjmVML5r6nj7MXGgOKalPIX4mN5Mwum7ZIMSaNwox020BrHkgdpbbAJ8WY2hEE/Cm884BUGIY8e8T0MBBvd7gL6rg3jTPuscTaLY6fLPwI38QcUAwC+pdEsvUxGzuv+4RCw5/qMasl5J6q7z2JDfQEakkl9vd8FVp3aUDgDvh8DW0M+EIG20wREB5S/POWSKPmzQgzStJJRNSQfZAUW2TEKn4Dd1GkCg0jChkZadyOd8tfuNOQWcZK5dg==';const _IH='1b965020a032a8fe3ed07556ebb4b15b596a0d82dc4ebcab99837908399b9bf8';let _src;

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
