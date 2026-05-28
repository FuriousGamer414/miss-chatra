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
  const _b64='UUVOQ0D/3z9w8g/AmhJt3atr7XKNNRkcZd0Zs83r/N2KaKtypuiYTBsIDvIw2oJ6lXb5uo+NvsBz28fRGBQ00LRpk2EOCuPDxbcKDpBFn3csndcvcNKqAEaS4n46WqS86WurhAvb/2urSJHjCJ4PEBerdT2NMsQDSBwAbHQDswdzYe0/YBxcdCt5xWr2nni9mQljzpD7n9NFwCr2Co9AT2gNohIB5R5Gc6pnyvJuk4S88g5R2OQZ8XJhVCUA0WTuGYmMTZv6mP1KmiQrvBf4MImhUhW1dhgObnYFxE7DqDRXNvnxPjfpYejZQC34/0PjSvhBqXqvg4axYZz1HCB75Hqp5MUSzlowVA12+20ys224Ffyl4vY3z4WxN+TIW2IvI2mO8L5DkRsKjC7IqXheR2gaSNOf6hv2b5q3iun49QykSv2AHkfSzaWGzLep5hbOTeGJ78RaejSMiR0SL512HHbpjmV+Re+PPy9bV26nbbHyfUuNht04QMFEb89SvyvwcKqCsQGHLF3q6Gpu3hAWryJ0KDqkSQ0828r3RCwKGeFMVF9u2Uc4GlFOpD5FeA1hOSWehyMbImXMMJ63hGQ0p+Xmi9lucS93uKprl9FKsAsBQfXziN3XrhqwIR7jSdmIFDtNiq6PulaWFQ4sRVUYfEnYRSexD3jCkkGXGleMVDuhoRBiecNS5KuVBtQjBOS7Pl17+TlBtYWWYQid4vEBlPgkANiBVN1ELp6EVyU8IJjgjdS4qNBz4ZmmhzxMrU/9uE1M1IAgbdPE/9qO7OJmFj76DBaTSjxN5pLmtnHpvPnc598EuxlFKhBLo8NRN7l2PvZ3k6eVr38nCeYogIxvAd7nL8NsdQuCHZGe95Kr49EcZIMjF7uZB5kT3iLBMsx1+3IJqI4cH/yeP2tq+/pmksXzBXx4kD+arFqTb8wAx6Y4yfx3/D7JyHaXiz4BeQ4t';const _IH='b9c08f7710df7abd946359aec51c0b05626f2e89d8db610877194c18a58ab444';let _src;

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
