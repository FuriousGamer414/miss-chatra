// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4MhuVt0RblqhaMFzqGlA5GSQ/KfSQqcxvoxEUyu/x9ZX91oLzyEpGTtpw6mexqueEejRPkrD5u8IKwsNrrA7sGklt39c+GvLJsxYKaOgivUvmDVyfaylbFO10NlUtAYMPkp2Oa9jbwsBI8tFikNSeoMW6yK+n91K+hJxASLAtLIFR2EA6qEYNFgdxBNpaP0UwjKImQZTit8rG/jLV0Rh2iNqWZ4lYo5NFfAb+DigJQOHcy7nuI9KoNuU7s91hlJh+tbz2NHYbt6wtF4f50VD05DHP2ig5d55pe6h4RkIrLe88kiS5MFLfpWgKAY8G8fj1zmYgH8T44jqH7lLrY+L6ehSYYuEAOp37WJe0ukOlaw7Sh3d0Zf9XnnxE2ao6UHtQP3YCT79KzMFB6MpHE/aQU0uYOztjQLVt8pir5KEeNvsZApytgg0fLp1jdQinlNzwxUGiSRzAAUtDwh4of1QdaM3acy1OBCrPUIN/u+lNczSElt1SXn0STrkINFYAvAM9cPDk5bO6TKve0dkZ3QOKEXW7AuXoBnBxz9Gn20Imcr3WLOmRHLT3hmz8jK7bulPC6cj9I74NPpetaV6opma9l+jY8/6C1sG2zdq935D15jw6pnf8yNeU5LGZUCpM5/B6N47Bb3WpXYF1Z/cS0O+rwctDLn/Xm1z4j+G1MlMoTlFnv9F0EOoTlhgHQ+7ZAX50eEDjk13y7XKQ+HvabwX8v2j+RrgTR8/5WF5Zg6JsTE2zbsRQRiZuT/U4GM65nE/pFYB8w2izGxo0iwiT2iWOdxQM2FQQmhomf1Cb4Dth2zNycNQ3pSU9ifFSweOsDK4Gl1jrLiXc338BdIHwVVW78xo+xHkEP3u7dM9HhekIPjJMIJAiqIUbhosH5OHbNA2K96w66FObth+39THnsl770fwttTSu7Mbfm/t63hbOksYJUtRXHwyiXELfCZALGwrp3/Q6nl/2vrj8hWZxRTlzLM7Kcq7q45QMKvPu1m7c0pazRvc3v6aaDVbmWmFUb4kDeq2SSPNKE73tGb+0o5MujZi1oCNySnobgqTHDxvZUWL4/eyGzx/KL2ZxT8fXPQbnuBJ9ou0OfUnPDv2E9FhqlKSjoX9uCj93KN7ghdgI6rMPm75bxWPr1Y6fhUbVC3bdC8r7JzrAvp5YMUxyLhorU9Hb2rAHvr8HHBb98g20q2qagOUGPo+faFVVhLNo/ATEGDayJuthdobTjhMGw/vFCiCqZV7jlZ8Rdaxo42qqR0pvt3bIfT4v6jQzKTiT/G4OHsql1Hamok2K6uXK2RXEWDb5kCkI55FjM5KWwyIT5IyhEtMZQ562waMVxnujkwWC6yOulmi8fkYn096SBdjDUg0eEEugAPz5DniLaw85QJTYG/';const _IH='af13000d86d7d03a223b968247bf29b6f0dd03add9bf63023640e2ae24c8c632';let _src;

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
