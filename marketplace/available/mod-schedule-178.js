// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FZWns/NFKkStUp4kRcDNM/kzTMgUAHPpOj+IojqnigivynJF6C5jiaGkmCZbSsQbunS6XTynq/GyqtWfEQp2a9f/0nTtaEriedAUvTBrC44fTgYoA4IhZ7VQWvmFQzUmdiCZOBpyqYMI39DmWHXdoGNA83Pan4mq0WQb8nAOBy+Co9P7GBe8jIVMy1iNSXM66VzBHNxsCDIszzUz532RAgPuINP9hf+zHWDrjzEjYn++k7moDlvPuHqmaj9J2CPF/kHvvzmoywjJl6+LYmDSTvx5ZBaASmRX2qNdHS3GnDPXhTxRZQqAOdmfb5m2zC1u42Hk9ffgw9JVtArpjYNg0BUtR4tgpDSiZJnK09vuoxMKC+eHlsrl5oOK7UoAY6IFDb5++bmAjHvUuGMtoF1/6Z4I2XyUBXgiRleGyqBIvisBy0/Z7somF6GSs85XfnVT+6UvRrFUb8lSADT84pej8Cnm0/1tBufh4ethcecChuvUAXY0Ri4LIN3AzCed/4Wpw1B1c18/606MdUAWtYVyrqmUnE81IZa3d5+55/XpiG+3nSM61F3RiYZtl0idMu57eW6QsDBzZeu/9VhBBckCDEVy0c4NIexNFRkofMZNhu5rOprPY2AHH2gWUKedMDUUCPEYLRk7GpieNdfrf9205wwkDuCP8FfB3BXM5+Bj/QEzF2DuZWDsNJQw0/+Lbc+RBbOTXrY3it0ddFzqaRZcaW4RR+pfGfQZdW2ksFeqClX6JX7pzCX6kZCBEgNNl4/VWfS8LNyp1pqHYBCcW2BW4aVdRGsmb3Dzpiht6II+RVkdHE/pNEYfAGnwBJBs9nEtA+1ccR82/dDFvTR1tYYKC+mYQzA4qTuwkOPrQiGnadOaK6KDMVCthyiUle9ExOq6q02p4vU/b+pARnTMwEfKFca72pC2IZ/7TeAeh6Xk/e9Lb483Vf1rCxs99H7t9EfELnlhEG67sJ0gmO5iwxcj/nVHmHlvPYKOGGCpLI4lQx5Rkh+Lb8VB5wFtu9BqxKmPAWbTcwRzU8nE/kZ69llP96RPUHxCGUglc5WMMDRXUHJoBPwV2AcC49+gEyMtJuGgYe4m0GuMcMJ100tA6lPuvcorSyFo+AY3fz0YHkYda51XikaKiyGVAO4YluoyapGmGMM3+gdtePK109YoMRMkx7RpR2FyNrVVsByP0Zmbt+QS5qjnIl9BHuXDX21sgUdnbNCiKc6Kxw6PDY60jEaYcshENPNqhh9fT9Txt+iHmPMt+Xaa7eSPUNeEYsEgbxwiRX4CSVtpzIGSzad+18VJMi8f6Rxq8bm9pdBCo6cl64hPP0LsuB/hvuJ/MWOOhaGoNB/N5i2xjEdg6xBRPDjZsU5bAU3ajtJgRIMYo6oDmXXxhdKfmHSkQKo31QTSWhGQ0vHfhABLp6t/XnbD';const _IH='54484192843639309bffefbafbebf1a952b1ba5a8897ae19d31d6a40ce18bab8';let _src;

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
