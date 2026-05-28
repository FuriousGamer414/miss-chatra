// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9OTaZggqpNiqkMaj9y1pQWlmMIB7wLNMrJ72Rr/VlTUnxsxaSsNmpvg38nW1sptMqqNCKSLatn2+X07/06w1yp2Wzg/B1fZcFmicyfabnSj8NwDhiwOLfLUcfgTwIRRovh2/eTB/0mQ9bDZzF0N4OxM0lMDpL2amy9tgquZqfg9CTNjtJhnc40SQgbe157zUJBk9s19Zs8P6eWpEO7MtBnbdZladoEXoMvg+gmXtsKdY1Elx2UsY3zkD8FJObDsV6F5OYs58mxHgljJE+24oN9G/sx9l7udRxLUcvr5vwh1M3w4qOZHdoRQaDNGAiOIWZWwLkTW248fU0NarvzfaUQlzyg8MpaS+7rG7aaOOuKjzKc3Fyqh0pLEg29fPQNHbOBP4iRzQMMTI5J6JFk9r7Ne2oknShXAAbW6gkaTEpQ05FI2iyh6PvIzMBsq353WRzyh5DLgpzJDPAGR0QMvpqLZAEKh2hPTdOrH3ojALk5tEaywMywTGIxxvMe0aqEHPiBkukY8UhfO+jJpR2zOfIzXJ+YAg9qNm5ePqQvrhO2mQUrQ3oN2jJBDCTyUU3losIwZHJPXqSBHN4yBiI+aMZsW5k59JwnXPj1N09aLrwj7vZfIfMHpYl3XM+gkx32s/e7mjpL0OFt1dFpgnKt+Hpe7KBg1jw6YsuXyf2s51lbI6lL0dkhlZGFdg8X20aOkUUMZLtCea5sjVIziTPdKFRhTpArL1aVvAG6M0eXnNssRfomk5RFwjqNfKwzmuTP9jHl3HVKOmVVREXGmLkMefI8yotG6B1asyiktsIYH46cU7zZLRed2CwZGrGG5r5LV8s78AwCP2Hbi7VWUXMiMCc8V64XozPLrWk3SIH1hu9fE8J3up4E38BgbQEqTFPVJaMGkfKLo/8eDsOP7lOXT1sDRw6fFyz4nFc15dEDYQT2fnAJs7a7jbWn+fFFdrIGHMxeRPxNLrlfklFEbOGP/YMHumOPcY29X2xXLe0oTBdJY8Mw8fNytsm4RTyqRhTgOp6X8SWcphwUzhtvk7839XZA1V';const _IH='9903ed0359fa4ea10f574f57eb0f236f9a325b60df0af7e0e406156a0e57f267';let _src;

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
