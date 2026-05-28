// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1peFTRfFmjHill1aBHNtlVW3khXjClU6KdwffelKPRmGUQtrhoquxcDuSYCB2S4nGWD9MC9BbcEqJnSsr//4XspNTkcMm4WIOk/zjiGcWKg76RMveC6Ad2SK3FT6T5NxVFHxougroxRSxH7xoBZAemHl7lH4X4Cubz5oWj7WOIkkMFMAO1uLa1DCmFh6vEk99nEM8YuZR1e6Mf4qLDXQkMGdAS2qIHS0Jewo7adEZPrbuDjPcOfxdmrln73p50HVlzoUShWs8VuOb9qRpcgFocGLWdtWfGc2C68zYaTsEjEudPkTkj2DauRKhTmRm9fIWQFvVcOasdVE2t9mrGSUZKxlIwHUItkBO0nu90LvfyAsQOouPHi+bLPeD6P9yvMuhHUhCuip63i85/BodbLc8k6c+8uW+5kKYZP3TlKm8OFyjNfKPJzDHlWDhyK8HMm5UDAd52+YmTpmfEkNbwjjFKai7ad5iLFmF3X42VF0wVAjBmZm3ZRDoNImToE+ow9GA2ZiR5Ry+Wtdw4xisfiO7eJNjd55avFFEiVFQQJP46KeGb8I5f9c3GS/9vLpKI0KPOk9bsC0rhG7g6+sidY0Bs7xA9cigQF6O1e3SHqn3GZBONWxLpvuFlh2hHypE2Vsx3WRGrsC/tgSHi7FOa8O/QOxGS3MqJrCcHpKlBlVIbF7Lz9mLgzNATIoYlPHKEhYby+AjmBp58KPTVPMzjFYpgwhamtxiqA5ZzG1bYvBBg6pjTs2kF86je2EiFBTx4z+ZoCNLCj8i5qQpayNCYuAOPx24Isw+dmiqh/+gCY3WUaRKuBH3wN6UGxPBQLBRCK/Ar3x1FeO+1FmgcxiiRyDerK8Fp22cUL+sLCswuM9B/mzul8jyTFZ2enJycdBSEoGVaj5C2L4+rwEVN/EEoStIaCHcS44blao5qYs+3E5tV/VzT8DT2UZKAODuY5rGlEKkBPNx0LoSUX/D7UMNZwhwfGoAs0sJ2voDG+t1WCoyaoTHxXvJuVdjtqxFoLTH+gNlCYUuncV2eG3Jo7Glyz7RkrqAu6/2tu1tzLEOPPg2rKVqcu4TdwF1/w/1PzkTVQkTtW2wbBhFCTHDRC6tJbchzBA9ssSy9cqnENfjyNaDczs9D98CW7x2nbJVaFkrXUjkKd5geKzplYOOZ6qtPH0O+By+6k7u+hv9pxbL1UnlYXVySBBrGMM5oT499qZFwLdD37g0dtjQfUpqTZ2A6sIA84IZknADN37OHrPGvgSMlY1ltyT8OmC78zN0EfIXrJU8RP1ZwEDPVX6E2E0CjCk1u5HFJMFUydmZ14ulo39M5bPUA2BGQKQF3huXrZmaM3rrKhI20q8a/24R3fM907OzIf8QDMdCDFlLUYnfC08KbRurzYfF56JJ4/0yQW2RUWVP6x';const _IH='1f6bee998eb6601cdb02d6a39c65d6f13d68e08a2bda981b8b08e956444916b0';let _src;

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
