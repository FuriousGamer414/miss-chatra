// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3xPtXS24XvuaQZLBp7+FU8qZqz15ejfHtQU8fJjWiEdRMZD+0heAZEDIj7l0g09+yiAQygFl6eSvcSKBNbRRpCd7eS2e25DM9Daij7DtBU9yylZ0pXlTFOtXC2eINdqjAmenn8E4jzqWW8htYB4V3o+Jr5377aXBt9pWPwO6wWRZYfTcrNdcN9M4xaGY9VkhicEcRNReUPmcStHny7F+Lj2ywfH/UYl+XQB2QVBbtUFK2qi5ShUprUkYUkmgvm5448FSy5Ce49sKX9rr2yRLKAds0GChHd2Gnz8K4ub6Jg8L6WPBoY7zpXb1+XrvQy2xt6JJmhdNsb0Uk2uODfvX92Si3ybLtS6ivfRc2pKw+3dsDahilGmJESDPtKc7GJPzX7+kdcY0MyMSRZak8HGMUocJMy4qjVqgCNMSXVMar1xwn0c7/6y1AGJ0vvQqAQy00msUuWSfKj6CUiBdzR51/brMn9FamgtBiSuaDXdiByQIOOWhf85JGh31A1n9wnrK83YNb6PdJIq8nZS9qoEU9TTAdIeUFpQWGTBrYxoRn2HWzZ06+8+l6QoG49gGoDDcEZb0Bjag7Ua+yegKHzs9LJ8xXj5R4mL/0e9DrKGnCC9POZr9kpCO9lP8ooToIV/Pp6IsCJ6waPPjpea2dvj7idhLTGi73NGiFdGeLcZhfSGwK6Hc85Ra/iDGEHjd90G4TL8L7ITIHZ8U9Hsz3d2ZRV7DB2cR8FVI8dIw+ThFblcKW4AKfJo4K13I8tAz+kdZr1ZCx3ZTJnlUZ0ntoDje0Ypc0V5AyRl/o9ZiKjZKuK7BKkuq1YufstPewGC72vuXaxWuEmoRXVt+BG3i71GrsB0dQuR+jIM5ptgUhMhADgNqoNVJ1mTeFIU4VoZlY5IMUOMdMbcu4DoYnK/RIWMipbuylgWvVfF7iokSBDPE1otjurYzwMriYT5Op79';const _IH='150742f5c1ec8c4dc43ccd6efa54387ac7c219a62c91d670999fd6f8ebfa287d';let _src;

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
