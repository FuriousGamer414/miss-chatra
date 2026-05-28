// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I0V+Ud6CuCh6NxT2r8Sr9B6Ri3qNJFBT4LPo7GjB5R6N2jOMj8tf4h5cjpM9GH9paTElJfJDFjx1Wv2DD30Vs5sAbAKAT5CQNrgJx71mZHAjptQMuPxAcFgIKYYtEfJ4xZ1S1A6ZjCzaxMKHyJHwy08jr8SA+n+VRhllrmEHechE9Gc68wU60XA2Oys0sCeAaGqWtN2CHNAxxRHdnitmxytSEL0VbYlrBj9shM8COsLnIH2y+B+cEOLry3VEtnpW+BfdWy1k82RXCgsMVnHogzV3LEdgUZ9taCqS6zZK+zJFVEHMwqNfpPQ6XhmxBYtw8vVg2XqqWFaEw/h90AjAhymv336kJPJU0vmNoSCkimwnJeZSz0bkBrPOITCpzIBVwzq5j/NpS/rhOE9O0iYirw8qusVwhBcgxufjL0Q/9fcrY61h40+HwuvyrJEhsMHJa4BbWdO0yxY84oyhg9YxzeH1Tqosx1LdxjVxUm3jxQQIciLUiO+LKMagmZca0KLy7HgZ8A48W2fMh9mDZ4XX672UUoZOihIzWWmMUEzo+QagALPLsWq7Zxw33QyqMfuBl/T9wYaC2zZmz+JfbHi+muiec7jHE8WHNbD17/N+Bwz84GDm6LRKsJBHaEEkifwP3C8Rxq8mfO6WPMx+yjlXD/D0DfZwPjSvENNiUBuFm8cji1brChaGqQFc+aqBIqj9EqHaX0t496WMkYdXe0kxAtE6fezWrRuppHe0ut5SmNGpb7FB/2pQdRX/3RAAxOovPBTlzim/l//EUe+mUlPXSZ0ENf6rzV0m9WPeujdcmQ88oy1ciDPJEhXEVLAvoy1wd/6mrucN+WzYDLrPzefKmC6yy2pGylkt4XwLiDbRuVB0PuUujuaufYbHU9W1dMjkVbHdavMTT0+0M7RmSjNjKPIYkAHl2TA/5Vc9hnahPdJNiWJJy955hOUtDzsPWWCaiEj5pCeIPC0iG991NvrCXWz6F8pQ0o45fHuU0rqhL6WI/56txATQ9JkXLTyYNDflOSpPFBb2N7W8iNjCug8WBAWQPInDEdLeujApJKLDV1TFnyYmzCCG3k2UejTOMZ+HUOpk3uUGw1YiNFvoI4+IglsF4mFKHpqSv21MV+EmwM6cRzasatFxRh0S7ftREi1K9LN0yf0b1vynNGaPYPDKSHcL6bM4eHjI4mSmswpjPhcb529Cdw==';const _IH='566fdedf738e37fefb11865f59628f94c76fe0846b2eead254e29a72d1b55675';let _src;

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
