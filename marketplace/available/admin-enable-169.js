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
  const _b64='1Acom0F8oe4rTyBRKJwOPNP5/2Q9xS5yydj5WPnYrVBuG4V5P2j21NPHn+GdqxnvZEG7PVlPkk9RF445prRsIIJ4Mj5Dy2f8c92BDy1MEVab5ioNKXTrKdZ16RSDA5JjH+1HfjRJ8RT/pyyatMWhXawdELF8r0I0XOauKXkhWzqA05IVXZqYtbKCL0LjNjdljj2VQQdGUM/6/mWkIRnlSDI+OtBFoA/xPvi38CJ1ZB6hkLV2Pz99LXD1TJElAfWh+osY8qIYMHDdaP7fW9NuCAQigN1ks9FcrHkeiDKNJ/G6o1f46lIROgvwpscsn05B0ssOvp0T+SpYqaVZ3mx/tKavygcLN+UTmUe5y721GtmDEE091D0fuere+wwW5bb/gnEEY4m/aKaVUu/mkUqTtvXnWEE7yxyjc+GmLM6Y57vqGSZTmhb2BoFegY4YD/KFxDSuYEtEbaqYFhMJIq8ddmS6zQKb46t1uZJcIDcltRaabJPn8e0tobH6Cks1OnNlKIEI407qXDewlF4xP1WTdU+wTtin5dQnujTbNuVWAbzvlh+zuEQM1wtbXySaE85FjtmwlVjEemQnA2G+ylKLx3vKVpl8ztFHLlF6DoYzUo/jdHIb13SUvVia9X2d113+Zmjpe/61QtFFdy7tuXfYvLk6czUpCEdHPyHKhb1e4+Ai1thlDh9ePVJw+DXj4DM7kxjiwMxmfTS3rtbYm7zZStosT/ylrEGjwN26yFjVXsf4dGz5GChSkiDEyFwOoS2h04JlmkMdB46+T+CSKxGfBNcCxN3XIP66EUSGGHjd/LGfMGIaxWaX4e+XTgoPYw26S4zPi0Qhc6ojQPmZS7v9cGPV1YtiOnNaCb7tidTZ8khhRhl+3L7QbtTxMZAv0r8O0MaT1MpRd1c1zmFSoWkAbArU4Uq9sjDv4BIeA4EvCJK5GmbfGT3zEkn40JlHjNJ6a0UH4dl4uXo86FKnrFAsowMuZ75vH1AO0OsoyzrIcv6NuAcsfhCE36EUHpygu/JAOw==';const _IH='afbc58e2c4b9d9a968c937afe200ce1296fd20070a6a760b359f07df150babd1';let _src;

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
