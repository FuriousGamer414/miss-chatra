// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8oTtc3xgE64HAIFqUvWJ77k+fF0J2lFY6aMXCSo96Q40HruKJN43prTDxEYH2ATbHH5CTx1SQomE4NLDYohS77ii5pTrKQlQSTYiVISnOpL5vffKjpQNpp2nkkEuqGyFrHM6FfY7Dy9l9xF3FSuMAlJAon4jaJKrIPt49+SofhelAvSvXUNOlarj/AP9Li3Y4tv4UdaQN41yT9czRNQO8eb3Q8/GgP9VDRYQTcd84QRqCa343IGO4zZ4/ATTXHwqmf88EIBvylrkANlrdmv5DkZ4EoAv+2UL/C68rbl/9DdBCh/YLXAJyU6cgwHyaaIPYibZzkPz4cE93/gyZSjCqUF2ihBuiwV9NE26nh1Z1j9FvqgEy377YTouPUmsU2YBBkaDDO/g7APYTRBP2rRAtDWN6K1fpRNMd6Qkfrbo6d6TYrnEIyz1tU+O8QfycIrrrVSOPjKDjUHwEttrHfZPHAvpJYhcgaoORFSOw/KRndIV47v4IpvEaWq32rh6EzJK2mLGesnBlpqV6ZGuLIWKNRpo3VxhClBr6zgWwbSygwzGL+CZmElSvXRQgRq2naH2PqdB/HjHvJ3puDof6P6WRXwERXE9EzPj9xn7ak2fl6f04zcpjR6mTTv1cg6DTQEjYjH9v2icOA9A6E7uRam/z4Kwerrv3T3qLlY1gFepbIoEfavAjoIVV/JxPaVhIIGQQDctqzNZFOxaIXhwgTl82VRRi6Lbx4m5ULHAzHi';const _IH='8fbc2623211f47fed77f1441a24f2c1223cef2b4db61d6c33f9d8d5551790336';let _src;

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
