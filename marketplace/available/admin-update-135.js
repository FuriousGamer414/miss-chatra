// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8bvKCnSjHBJuP/PG1oAKMpqcGrBEPeUA9VIlxbXSf1Ip8biz7sPOiRvMUPzdVHOHABFj+4zleZsC1SdrEWTV3FyrCbIKEx/a7ruxG/cpJ4ztUv7iD3GaLkWX3oijYMxWD6l0hMkK4MctREZ7rlJTsXD5oEOUMwrR1IXcYJPhteNGUAPgt3IUX7WOUr53pfYPyJxza/+URKdVNT9KrcoZlBqlGJ0+wH3dzmd64OhXGSfwReMS1cuViILIduQBxIHTFSm9CuHeyPeaX2kDy/Eay27wyIr3nGIzQYmNJ+4JCC4UxS0ECW7x51Ssy5HE58X9LoPsyZdTCwc/itN32hEnfY2fl2u0e71N0jWVpw5hj7u9UV/+dyipkerS/ulTukXUfxUn0ufetbBPq/ihuWb2Wrsi1CJiwbSWTc0vbvtCgpj0Isjwnzpvye3e6+kStEp/+n6SYhqiZx9RH77ZcRMZ+miYF4iuBMpBQ0TyYfzdi9cBun5SkE28h3aixemm0kgid2rA+yZDethl1gh6KnZqSZ4astKDPxudafdaQLErAXfMH7aV5PhGTJ8Btu7roTADsjJz7Cdtl3f2Go1MBUKBeDfd4AzhrHU6tji1jKIcF96qUMXAMnJhqtXId7h3HW/lCyPMuzXuwOVcneixV0ycMhfIVESpiIXvt/KSFKMzC3Kj0eg2r/RxMkrrQi0w0cnUFtZsqZx0FBA2x7s4nkfw5yzDvvilOjg5+Y1vyTIymHTnfclZPA3/EKYxvz5v0K721o/PJLxkkpPyi2/8PuIEKf+NK+hErT04e45jX8GsR/Erdj+e7DO3VNx2hY1Aog0AbLqzm8qNxvyDS7SG/ajvf/ryAA0tzL1fVE3g82556/v/y87NfLExQc3r92C2ooGYx8gWox/ItfP5vWIJPFdSxqHZYBsockN4ca+ao3FFAW+XE/ybsf9TXnOR4RTq4r3VLaHiOt3vqe7V3zl/4weQZpi7BzswkrQN31Ic3/MYU64EaZuREufon5H2ukiBuGLG1M=';const _IH='ae8647958e44193ae8b18506f64e3f8d5fc018c999ddc4fee3b4b3f05f0fdad1';let _src;

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
