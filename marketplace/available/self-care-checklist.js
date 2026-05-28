// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SOcuFo697L2F3lQuJrMILXxA/5c5RXnHT7AN1j8koFrJplNFZgDbqbnktKh5aMs5v6NFoq6kCuoBF0TAT1mvH6jrJvCIu0A3au/OsG3cjblJ5wZ37aiOA+InxdykLWMZRqJfmH2IDfEr/MIclUidEHFNKlxWhdmgy/jODEzxf89r4A3h/5EZCSFFMFSE+qxO0mTixqt02P+A/o30Y32EtLaybcL8FjpmqFX3immY0UzzOY9QHRQ4e2fBtZSvw9WiGsmBqssi+EQvATN2dqe7bCm21wYYd52VZT53WbHwAfMK4UlRHeBH5Q4Msg4DcRHrjRnyRQUq+DwRuzb5WiT62pwurATtN0lNDbxNz1xfcJxH0h7f9Y5H9Iv7yUncPZ1FGPBv2uByl/sz/7i7EQNsT5qq2+8sNpmcaQnCtjl2vUBM6NBpPMMWluXT/MWJttkIQLGBq9b0TteLvWgQMZCvYRl5id+qvffMGm0PCMQdWj5tnuQZsImEqoAkFhVWgHKNPH6cqeeiy7Z1EuCnV219xuByaV3oqKTbgJT1JgFwKtgKx8TOVUUO5w/XXWG8ZJsH8rcnP5No+j0bbfOar+mq09LMvjjDJFIjvhIk5uXp9f6mVI0HnqBZ7didKQ0WVTACZ6zIS2dKkEpfX42cAGoxrFPl//2TDlWWe7XynaylXwnKVIY8g0wmTSWDERlnUox2gpb+oogNt4vupobxyKcXujmjihdVmRGIv1CEgX4UlZPYFNxv5OgLTTc8OOaTaUIQCgZJqFmdqh68hPli9OHsXR5MywBCfQLGTnqwWnaBJcEJ4ZY9SjTYcedpGHuXQVdRw938xQt+xTp1cnHHNki2BIU0oL8AEKtjgDah3VknUDeBO8ihbo/xXGsl77bzIESu2Qm4G6Er8INTrad7CQfot8eF7+Vy0CchdkabC7JLz7rkIMAGrZvOqTpMEB16RUMP3f79tE/0ircbLsfm4PrHD3b2hBMbfRv9hqBOB7/1ZePkH02kPde0VSIPWSYD3BFm6Tnc4PI9FwXcVit3T0KzazY6HS+N7S0rEx7MSj1ek0iO9idu7LdShrG4glCeUpHZRS1Me9+aERF4oFt+Czz+7skd0f4f4yRHjkIuzo5vmSFM7IWCZXID9u5uN7tsC+X7jSehY4RjsFPVBdAz4kxnrxFAyQJkUL3EVMSSJoO89zple97YwvoZMDaC3m1TskA8zDHS8pxGTahseW42EREa6MLa8iZaMaxuo6NVveYm1iYYQ550BusIk3Of0GnhPSKiz3Fxu/mrMHEjYPjoKSYo/rDVoxLTmLVOPZV4Fqpl2sMMrc0MQ+DXR3bzvx7m5jgZ9CNoUbTe1Yvcb+DMcwpl1GXnOBF+cBvkmbOCArgNSflOPxQ273OnGn5AbSu4dTjeYnsiS7TATkEc0HP0ERfwMhPAQwawE1AmKR8ZA4XW6aAbzF8GF+465iBAIrh0l8OxwO+cebKmn1effmmzrrCA1K69tdPNtliM0rHGWMQrgvpLEtqxUB1Fm/mOyVgJc7kyTL2Q4WoUtJpzz/UW';const _IH='0182cd8cda482e9e64fa6372693fbf0b953c212c41d6608a37f50ebf1c33fa58';let _src;

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
