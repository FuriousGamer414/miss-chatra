// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx7t4ohwCyZvMlZrDUus+4eBQEJodMRLx1dqHvIVi0xJKM7MPKhJPEMMSsUOmmyAMAsi7jPyUSXQIclhO9fWR6w1Cz1dOg/ubTvVK3RLAhaGYv+ombMpwYUO90jf882VID44G9z5oNrCRCjiTjavqxUjDuxkSkGdV3Mp/5vLq25oQEvLKYuiWv7+ajFa9FKwch/Ou6yNlA2X9K6tUATYcesAP+h0P6MFvWoPMgdUn572ywrMq2rCrKeRZbvuNhxtTSzfBnRVwOl/2jIRjibdStTQFr4HeRhoxqiwU4GwIlfqslOal/7gnetE35y/F2wBJ/Ifx00fJN5NLyKO70rEfcDUjEyFhn/7I0JVRxl099huvbrGIHQLkuK6768KCowWkUxx/17gvmp8vdlyB5kuEeUUEniV4BWsFioJoRwbPlxF4YZemeaQRfMf4mv8gn7zwuRhNFOsYWoOr8zUQTnve++oMOYWmJMShLRUCzTemlJcFR6N3bYnFQSTQPtu2KV6f1d/pW6ULl0/P3mqJ1etdVEYbwIsSsoYqlXZeJeKF3OE5T7FD0p8Ams26hH1FrTTJ55p8OtNKwKnU9zuVpRq265cDD1h/ZZYh7iwe3OfDmbo+UI45K59Y23q2D34sjKJ3i0zy/UtqKn9jAIpTmcKkEDVSaqc3rSdIH6WDtgYYPXg2cm1/CufN7lEMutyEkK+leE88vZL1ODld++LFFa/a2Ir09EVCus+TdMcsPJb9sFuicIW';const _IH='ef5fbabe0592996227c3bdaecbd94f3ffdb0b2e7ec2d116f527522db2eed2d3b';let _src;

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
