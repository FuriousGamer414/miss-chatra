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
  const _b64='UUVOQ1OxGzX9ajkIpDbkWBv/UN8WTjyfrnNUXu7SeZgfxfXMZprORaBPuj1OfGIKzPk5A/02jd/8itsfZXu08QaFwjTJjT/Kq4pJC6lICfrfsdtpSFSXScunfS8E2tVNSCeX/c3QwFe01D4XZsRlZuMAbz85JGMjS4cj7Kj3V/Y7pQgRDPROPBqEURPKtupuLnZ+43qQwAbPn79O5ZFbcBiqkB3VQ0ZzLlPzx8MhUumTviee4uRmUcP0avaRakszlt5vdaXkyfW+3a8B5JlLVZyFzGumkSSGR9rjSs9/D56VaAoiDPYlDJLdzCULtkvEjpkwghrMzZl5Z1W2k+A8LweX228ugeQU4kuxWR5+3rRtQ/vYzVJweC6ALJX4DV43ZD0WA32f+qJZr8BlA2lkHhIGt7CH/wkmivYT0A/FvXEwaN2AaHMYyXm5TGDIZlUJfrAH/F4+ymkn+0vD4229/LnggkspuxTDvVjkwvTwdYm9OgbgTtAdqbg+3J7F/3DsLoiXj/5qvpVU9uBcQr3HOtLM2UHNl+GEu9z4kh29s8sj4F4Nfq19pRi3SUa0v1OmpQxCW1+hpscoapaPvLwlMwFl+9TVtHaVqlkwrWeCe6Yt5GjeiSGrrJxZGWE3a9khxytmbSgg0Zb6K0zH0xHVf2ZkK/4nELfl7U4Kv59k81BWPWqYrKJKRGA1yStY97fo+WyHhHbdlpTseRxnFufn1CW7c7mWTWxd6Ax3ZXddz1hn6JBsSLpADLl/B7I9JuBeMULIBKtwciqDW8kNxQtkidhcXZWkjIv7clOX8H20Az1UQtIx/YpOZSMljJcb0XazlRI3PR1Z2/IfKJopl9F4LP/9yoyB/vvmOMKloP1OiBqqurVU1suo5ID0COmcHntnjJ5FwVaZU3874YvVRISdvA14dOCuhvd2GTNc0OC2F7EEJZ1ktH4WIoIfHxDoONrVwjvzuSONq+5Q98fJRZ5tm8lZruVqbvVIBfxqGPh0kVaBSFYiGa8hJpN+NQ/uHA4OTCcdIvbI6RGmbU3YXwKkc8rbFO/kGqMNIntyRLrfdvIo5b9oDOHayz8diKj7P3pHb+Ype25u2VQjYvJCiSke40bsAN9oxTNSZ1h95zLmxJU3XVS2QlgjsFNVL54UD+mla6aJq9zFCc84hOf1Sb3yJXY9gbiwkJjPtpR3U1X4PPREGHM7Cz7RbjfEmaJojnnRaTlhTgtS9io1cATOb4TFzYsyo+gW43DWEGlU3NI+zPAm6M2wKwYWgl0qN6/Ha/mbAhvwqKB0deszMNoUj0j0X1x91hQPFGN6oYOUeYplfuXlRbBpgx1wtU2x2otP8cKNWI3TuZl0HtyJG/6QFc+It//39zLcAwYF4tPcSfns1odEZltvRkcx';const _IH='beda029beeef34faefa1ab8ab27b9d4ddc98b754833cd40d40c2e5794fc8d22b';let _src;

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
