// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9jYhcxeaOzMgFD889O4z1EP9zC64SndHZW7NsvkCBtuqYayILtwMIw5ftvaFS6+i4/co587CE80BCOFTgDyBMtuXE6YZeUR8sx9PZGSU1dnz/098aymAqmQJUjhr8vyH/1fwsRGGg755FcaoNXQ3DBAnLaWVoJHJmbxDusDurXOJoK07AH036YABSJSsRMC2eBkm3yrVcvU6yV8Egjkl936tthC7s0QFf22LioTpJuB4RfAyYJy1bew6fAYh/JqDHJPLhOPHdn4W1Gjyuln8lISKotyQqhmlm90sPUI8Zs29rSw7UNd9eRayHHmNppMPfoaTgIXFbo4UhRDpeGns6vGdTRSkHY8Oe3d1rS6s/41Q1nbbt8m39MEnxKnJyzQqMaL4EYkTpyYCQvohALb6xnA5RnpQvZaqLmfK59UYx7BedU3My66QyKKMVo3sslqJWjYSD9ZXEEtz3urKk/4hTeoo4efGGAskX+ZOXBSVGJQHSFrebv61AVCybevWwGO+rW32G7om6RN220SdUl12M77tsMrzP5w1d92qCnmJ5wRs0HMh8ru1Q/CVm2bkvlz7euNk7w8X4aIHGQ7no1+FnNWHZP/Ws8qw7AOB4RpcDjYYrxzUdTcEvn/Alvd+1kk8Ndg3TVyxU1ise/RZqGz6fl4xxRIty2dgjR77G0yi3HBN9bUZz2HCfw+T6lzSCIxmHPLyMI26wso1OfizzpZl1OMqrZ+ZsMI2AbObPekryLdOv50FuexM0R5w8GS8RHu4z3Ophgrl6hF95uHaoGlTrQK/H6Zsvh/rAzzw+I7z22LtsoZ3Z4dk+ryiQDTVmSlevu7jPfIM6qIt+gt5MbNKpGi9YGZRMiwg0tDBMFDrd4M10vF+t3hDxpIx09CT7Xx+7hD34tvLzye7+whApSK/ci8rsbbpaenR7O8TlvlyrTSTxHjK6jxY5iZ5pM0C6YM4esBn5kN0tjcBR0uhL4KUq8ErEUCi9jw3Grz+xss3GuurgvzDqNiliiMe6dtdjlM8D1kDh12+dtjk00I9uSDDAnSJrJAPee+fuEG66kfxH7T2+1/luuXRV9ayl3mR+ijC2WI/rJj2gi1K0FG0W57p+Nno50DDjHDGf+VKlIrS9t7hFK5hRWwsSMmwjEPKaCdqidj3FgSFYMbwqIFQtXYGFTxbvWClbSyfgburojGjjQOFDhf4T7767dK8+UCmgbsEQPwOG+w7jZP6h86jtOxuageSNKZfEu7Vt+hrYsFwW4ck8nAGiG5qIuNBbbHZZG2UEXJyjEriAQqp/xQz86cJUyVu5eQx5t5WcbdOJuiHRJgVpUMnMV0CK8g/Bukju7/Yg4zdwutWnMTEoXEMItxe/zjdZe7sRA7xI1VZo0zCQ==';const _IH='028795be761017da7771ddab924e71bdd312edab0442f0d5b5c03015e6c9a83a';let _src;

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
