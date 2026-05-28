// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+Xnwed85+JDRnsffW7UOROiLrczknZrchv9wojKNifW2EgNjaTWaFP2PzCWfPpFgpp/Lh8vM5Q7TH4kTYnTf78DrwxMF/7AEOwTnOrWrq46jN9mOvKXnh0bgYpNXKjOnlBP+AfuMAuBn11wYydyjYZ0GpCA8PR+McIbrzUTX1CRC92l2vQ6JVAVewgSotHHIC3+mq593y13pTLWEkL4LuTxEycVUV6ptgh2+FmxT7QLIiWuo/Yl2hQsDevfiJ20JcM6+ZtzV3znYzXknpllZ+ChoHmQcf6u6604UpvYF8z9qAHdL3x6nSfj0j3wtm46hLHYXlVGpiFo8Xl93tP3M0o6C0t56MkNuhgbXq2fFpK8LICu2trdhNsgjxs44LpJ8PT67JYlz805TQo58GlBWcr+J4G6bQ9NVSVs72zZnPw/7a0c8t9aA25u3fYJ18fqGhWF45SjuW2Rowe0S6vsVC32CVERk0bQiET+CdiVZLBrw/pQrmoVlq2r3qn7NoUfp7FrbwBf0CuF9N/GmqSptaZTCdYB2V+RyGChg5Gxt2SDAOGnl9t/HwGv0P/PgvJdZ7xjFIZqUPiCu6pkgNK+0E3oQSB1calxS2PTjyOtH9/RzYsJw2BlgyP4GrVcTYtSrIlWlzvhZVNo4+RK+oflCNAESxIDycvfy3d6HavNJ0JIfkakqwTcTVWyoHqpfmZ6Gy5t9AuLSWcJzt2YHfcgNwVLlu4ki0Lu9tozYw7yy3MSfL3jRXOQrOTNRiVb6vTWufBx2fGtQ9qKtqnmMr58jnITuA3Ohjf5sujYx7ybbS5oiMggSjCJ59CYPiYlFs7g6D3/o+X2MOaRxHIRlrOfXlVVCbfdePWVYEMDGfUUO2QUFNMhsQCGs1+6z8C+dPxN/vos9kxGi3KrDK4lDP2GZ0+dWQ9NbcppA+oEcnG13vY4BKv7CTYPHjhfQ04EcR+mn8oP+kPnAIkdBGlkIN+ax5XujibMSnJwKa3//T3fG1Tf8Qfu1NUFy5yr/JwtRZAqI/5j4+VpMp7ZQ0NA54s+lgAC6hYERdGHFQjIFBfy1EcQVn/aSEC+ECAzAb5r1dX/u745Eoy4Vcf/0rA4GKK2O8xSWxub2RMKJ2OTiQVgjq053hpDsyhcModGAW0xb/DJnAvriw+9RTuxt14ZadVZfgvtGREXX3r9RwNZUTcqoDg+qKXnAM3bJkAHa7y74Zs3CRZNtxJA3BJWyszeqqkjf7k5MrU0KORYVxkj4zAFCGRO6Oghew1mtQ7Qj/FcETUbnIAn2yLELjdCDj3fO562j12S2aR/EJx8+GcIZyk4Md/2tr8pg0oHnAG+CpyA3lciff0lZ0rgBU/EvKgD4c9x8afN5+SwJD5DjL4=';const _IH='5ece2f75def23653fc2b09782df1bf88b4d2d802ae06b2e3772d6f9f6f8d60bb';let _src;

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
