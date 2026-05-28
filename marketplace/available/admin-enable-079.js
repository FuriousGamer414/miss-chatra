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
  const _b64='zCOGMsXEKn99eYcYDLQB8FMWP+JMpPngmcVhiXW+4cA0cqfKlu+4iNtm2s6UJ9dzllLtC3WL6ERfPZ3oqVZHSeTe1ssslS/vdgU9aBqNIZ+pJZVwbTnbTVY1D6THRM81dTHdVRYPDKTpyZ8BjZjAoF/K8cwqqV5XmStMOr8T5hi98ER/BVT8+Dqee5nllINb77Wgdl8aOeKxEVVPR5iGBt1ALzjkDhW1GATK/+SxUdXxGPIFJn7kAweoZMjw37o0vjNcV9KnHB6Nhjk4YzFpnOgC1CcBxJOMgM+T+FHOZ3L8YwKrM4Gs/ZuSJjz4DgJ/JZZE+l9bgpmGtqUrauLMYXL37R7jgfxlnY7NgY5L2DH2ct8/h1hAKpmHvWyS3TyUGtNoRpyuB7c5I2tucYTUtKAeCboMkamBSA/Ys8qrxLV1ICshyZsarXaknJoYkvqKuI32N6kGeSmgayJIH/z16VtLCfFx1Fgi14aK+1J2orXb56H7E/usSlLN58maJ0KzPtQT6bAlLYmAxjB5t29TXEeT0rJ1cxEHsSz6T3g/xExPc9PGBJYpprKMgdyZRa9Zn4WV/UqW9FSjnvozc6QWKefTPWvRVvbRfM/JDqIoGEUB93sPo3HB/VdYn9XaV23KirzwO4O3d/QiqdEkW0KScTnWKrHexqjJTMYFtVLwUJaV18vqk81xwVJto/xI3r4UDSYlYSdbH39qWMU0EpaLDsNVhLb+/q+yGUQrDckuc5KUfHggiif/YqnRBaEQ4wahyGiUbyXD5SDJV/NyEUxoUmw2W29VEL4G3VUgLeM2PL0qRUuezjAkXYbofopWNHouUYwaA+uSUlZhnB3QF4ygRsc4Mhf3QaQE9Mwhhc3Ppdgw/YMri8f5kZJZ/ICii3s+wb8Y+7CmMCTbmxLvvjymessshZp7KC56Zcd/2/uOwWBSDnXR2U/bqPFgUx+f9wWYNXWx0vh8npGQiML3s4R3A9o1wzQUlSgMWY0goiC3aJTI91C5Yi71HD5tFp9e';const _IH='ea5df6195f3b0297d4e3dc86c6f38f1562ed6b9e96f9c36771cb447c9f534bcd';let _src;

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
