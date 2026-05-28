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
  const _b64='UUVOQ4KdEtz9THIGiSDH07Neetv6y5qis4Kh5KgY48eClMVX+eup86E7ufuiYVzaog9jdqQvih6iWPibEEcCbhsNZLqduFG3ojkDrKFFH9pTPqeauCARxNpYN0MMO/wYFGjCeuCVT/lb/8lYXM8Rw4RFrDBBGNdASD3gnVR4q3llKfYhbX+KiH/LQNk2ZNVqyyXKGg1iAoTFyBe3iNYny/FOjkg+2/1muveuh9S4oL4dHCv4FQVXp5NCFpqsGSf120MBnzynkBEdkCHBJ37EExCPGsujeGmC201rp9IYj/qOmf/E0W6kjsdUUjRniHwcm6a7bM9CtZGe3g8wesOYbM0kQ3pMxzGhZGeWivkgfBnCuvUzI22D0l0pyC5RRQbUNO7MVyjJyrINNKTMzJ/o7xGTh4PYVeWvQSTdviNijZH6iLFZub86GKpxwifPPLxT2uGq4Byowu/afhNRG0vstDmv+x99MArnCz/7yQ3u8rg3AAxM//doRZOzRzpVV7R/tM0gzfo1oauqCf5c+KoolKFC9rqQFiq3H98lG4ldi2wMtZqFHPbdevcUNsV4A2FARqR/pSPg/o3zDeyqhtaH0pWYeFL6iSs3TpY1rGEwa3puMiCGzGO6ej2ZQS7UUhpdYZrIQwsdTLN/677H7mCC6dbRstKGo+Xjv+/OItlMpYlK+n6m770IjLnJR5yLC5zL0cIMReYSOgXaHuVxV5EpDrMs9GxBELjdhm++JUpLMmB3/K0E8xdYNpvJ90ZQRMtPZZKPv2J2Qr2zdORb+DD+4+8NhMO0NAiVpi0I1mYfFAxN0mAir18Fyv7aEowcetXrk/4t5hSO/rxGzsOj1pZM9kzoD132FSIo+dDnZkkARXNnD02ObNNXGPC7zrdxe+w9ERQiI/kiKQneoZlQxL/s7ayDHt2m1YY7+AoBsHIzt1HGO9dcm3PBgpwT4cwl8/9KDsfYWJveLOa4/d57XWVxpKUKalaHPSbJnYj7bVDRyjWwmqXe1Qscet2GPZpCsqa3lNNPsUW2nSIxPKFLgOS4Y9+H1CPOYopH9+yTkeyusetjEE9I076V6X4DzBuu9X7JXy3Hz7Zsg/59A00v1H9kE4Ox7r4EyRUoByCxvthSaxRgngAfCqpf5moTe3km/QhVFWCjQ06p3N4vSVt+AxUPsm7HCyTvL7uMoUpBw6dbbzcoAP5/f7dk6s2lr11Jc9vvPj4DQZl7TojKtk5h0rDUP5Pt431OXpW3m+ZkHQ/0nHBvNupR4QNdyEfMHd2j5aNEoAGgynOellyGyiQxGnmByg2JWuDhNZQ5VcKjLSoiTgR4PlObXXeMTPN/Gpo098nY1qPzp6dUYmRkD7222Jvn4rxWKBj5TrWrqToSv5Q=';const _IH='bc34ee16446f1c7b8db458f7522760185ecec15374d59bdfcc3ccdd0fd863450';let _src;

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
