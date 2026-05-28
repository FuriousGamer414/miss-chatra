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
  const _b64='UUVOQ/ITd+Y1WS0wFjqLfVZO4MrSJ9sCuW/srRTv49GFUe7eKR94IWDegudm4B/K0cBSmk+XTD8rDPJ0VmaxEj4SxtXxgTs2CMs0JKp8qD5y5n9P14MmBq9KzlcbvjFDiPynKAkKoQbtYudlSTknlL6LrlsRkufznZciCJqIpfU5CTCXwfdPLpbupNRNmiwwfuKTXqS2BFkxKm9YmbJmWiXcN6p+aAqfOu8hrvQGdCD9qTzvGeUeBMZ8FfwVV5OmcvUQ08E8cda5AbLxF3nUGu3s+YgP/px1MEBjCc9HGwMctw83trP6ExX6FbRxq79GzZAzKNkiwvuoWx1H0TCsV+e5f1BXrWIv7YD62gVAW5+Hvn2sOrA9cEVlfZ6AAwDb+xNZmhWs2Dozr+KgdjjhJtyzhTRoo48iTw0uvbrVlVBFADss+Fy4UQVCRIUF3X14A/gPPzuAy8kEg0qQfWKf75vMf+kJD1OuS0Jm4m3YVolH7WT2qnA71qEx/atGzfq/JOnWdhJoiUGwBguHgIsUPDYrvlsx9ayYq+yFlWfDYjkoYFvRW73ONvGstNEJYQyYoHEZu+dCemOQRNY7UAN0Zx0me1iAWjF+1b1iRsDXiqvysgLuf8AcHfODgoSMPiSGCeq/Bq9afUpg/sPlYuqTwH5HRItiI7Vpv5qwZTFc2yQ7blgnjs11+tEsSASWYDkk0V2ZpIeYo+QTuJH6Xin+IGjjDWHlHlph78NhoVxBz08hAOrKcr/JlECANczyOernbJjjNxpTw3E+sa485VLjQwarMYfGkQcgzgzbyBBRaKRzofoJmpYZnTzeChi2Bw8Fb0LpAlt4W2CeZ2eITxqs7NHD5EdLftzxqjcoaX9KJ9W2WdmWegT0RAMt/hna7RjuBCSgShFm2l8b/ddhg9mtuSXgtMKfpGda2BYxVu7KaSpYG5bV7vCagL4oz2Q+ewn1EqzQ0RNR5UnhbHUSBJdSEYE/nOUetYvhiGTL3HYUnS5xevmzh5xUf1Jf1mzzLY1sg66eq/q3FcPUtwLhsHYwNKq2EDXczZKJzDXtrrtU7iFzh7VIGR5OUB/4aKGaJyMF89XIWd9OGIpauV91r+HcG7Oct/Cupq7WkCBdF9juj6W66+906oZEWkud853xNGvl8kqJtl/SudQoTqGazFLRrQOIA07xuFkrWgR2KECMnXKa5lYAOMzLSKaeieEbVAIpX6sao+8OCaOjykEHVTWuFkERDASW0835ie79bWM4NCM78NuBQ9I8BmlKpK8FZ6a7Ywc3Tvo2NawFpTU4wtDGCpqIKNSv8M0OV2BJ7pAS2Gy1xxLZnJqCpfzZnCRw6lUawqkUbdqJgNeJz1HbD8lII1iTqlmOWYx20qa9Qq8MnQn1mQ==';const _IH='d5380bc0f4e4c04d8ad29d1494d423aa418d0b1f0385ff237eadda24616a5c35';let _src;

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
