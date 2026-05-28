// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B8OPVgkYhiJhUNFeFHeQ8awtNlkVAaBHSZu3KaVAY7PclkHoOBRZ2lfjgqzgDSZ7VTbx//7niKRwdWYafaRL4d7RdNt3dQVe0Asw7U8H++5p1wuvAKcnjMV3LS+l+o8Kuj+83I88AdyBnY5sY1N5tXvlwuaaasJVLjQLytD8aHC+Qum0RbTBdB6kDk1P+oXT1BZAGCsolFVlcbftdlGL+v06mm7Ttnzj+gOnmQRv9MHOv/a2JC7Q459mAffTfWxO1dZOsktP1Ukd+Ve+RQxA9olj237lNKl/ED/QAabdLwD2e63f/xXoRepjUNaaK4l0TiBZCW6b7Bf5tdtG/UtjITE+iYmUhytmA5ixmDXSc3N0fx7TC7XUcDhuqwTCNFF4Ubkx4KzDNEwENTyWwegZF0uA+iYLR3d8HTx2NIMJNJBMr1Lnp02mezbUl1Y6V4U/HdzECIMCF+a9iX9rautIc//G7O0E+25NqBNsiGSz24o99su5StfWISJBB9vwykFdT3CX+HCWtCjdJz3gHmrPCokBCP3rTm+s27z5aNaUuJcCDw37EUAzl/wq8qv5QmAVP1Fb0xwg53CiYKG0zw3b/5ZKvrlfwNjluwbkgK7GKvQCGjBxmoRbAzhrSLtKPjqLln+FtrHtuaT2M/YxM0rHiKdyfAFgMOrd1AZUGRl8HMibLNdarJ/Xr4caYy+jwLTvoEUW4+iXl2Jod7A+Ddh5j/yVkfcA03u3dSI2srWIbJNQ4tzSvpOegnNyM2P5aXfy6/f3U3RDHa77FXRo2dcaz9dO0od1YQZfAu5dESxncvGWPlkGsybUnqPOmfiQ41KErBUecZDeYfaE9TNsZW+WPoR/BNeL7Hxrd7m42iZlVUiyVpzS0b8EUB81NmF8yzwHTcwx4daJeXpRCqdk1D43ZKMKp3qOL8TcFuLMQ5u6pQkpiuU2ATwRJtsfCI+wVXKxPxXQf0DnDdTCi092DC9ezFRtE7MJs86arJ290QSj1iKdO19Ai+YKcyU+URASMMRqhdHI87DVBgmfAXyk7KchXQ8OlGca6tC3B7x3jqNKO3mbtRRIKcjA/OlPwkwM1gdp8zSayv1E8PK6qL8Xdn6Lr1y7J9pAv4EFsQmiCJbxRkssmzM9uW24Io3zNfDjxAhhcQo+/4Q2jbmkppkgroeiPrpafaVTtrY8Mquqk32HvA0W1nm8Gr6P1GXiR36tfZXVMzSvdhzwm4wvKFG2ROYYPaUQd2BI3AY5drv5qPCkD2el+hDjgd0x5D8GKcxIy49XFJ0T8lKzoopOsMnjJbzToUibXoqkQKcQwtD5DcjUMxz3gzM5lreXnzjPdUfUTGlDE+FAlE/Xra4WWMze1pGPuPnyLBLVntTnsaKErcwh';const _IH='bbc63ff6200ec78481e42e41f0c73d375af4ffe7c9a2395eef4b79e9c017c36c';let _src;

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
