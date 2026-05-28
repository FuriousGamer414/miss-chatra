// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oGK0OSDgTfSrTn6zFD2GfUxGWl2Iyoc05ADD8Ax0LkFq5qpbgJKnFMgqEJ50e6EeW4JWal3XL7djDCcWQ3Lq6IMgsQLuQdLPGQc45Jlc48FBwgpK+0rLstbnMonntf2swk321CZktat8nf9qoKqdYmeHER+xo7X9yb77ycdTMTvaUeskpWb2/mb/nDGU/elgdCW+lbsa844tBCmw7izErYiv4GbqI9yHbi7sTl1x1LuHPebH+b3OZdQub6Uc0yKRE5egbdU4UaWrIgcoRzNm+CRNOLw0iPZgOOJszew0otV3B1hN/iGEwownoAJ660sOUIf9hbV1VJLUlsnIgFO2a1nh1tyXBhlS0/8vZ3m/K5Yi4PcoTDku4PenbHfXnmOKbdANxSVgsCeLiX18iDJlCvgi4ZHgVleGFrU9XfkfSqMV4nrHWyMGLKufiQTIEtbyV6Rt/ymN7tySEvwXPyRY3n2Lat/y6Mp/Bjvc09l2QYoOXMe6e+zipkl0cu1WDI83zqwoKdfFjK4NyOC3qIx3Yc8JAuXmKOQcAfnDX4okzhV0rbZr2b43AWbDBV4sWhrm1+ONESKSnPABWkydHvKgsYIjB6YMWD8XYiAIdMEE62mid/Qf6mmcwIBWOUtMGd1G+1UwS+rtainQSua3fGmjjXB2kHVzn6y1UM3vTEF919dUoPhv5t7NownB9FSihsCr0ubfvVuCNiyyAMCvCTG5EZIHbvBT+peoiis4XDD5exj+7/mpL/WhNEbkfAO10QHzGstFRPdr79G35r0kVAcVcbusPWHQ9JSCjlokhJ9hoJ06dylW/+oaLfFyV8VLKWzltGsdv7iHFmBK2yILVLEJ/T9BvfFRh0Z91M0j3kfPKvWUxMyphyLsas1ffEwJKuT957RfUgYG3Or2NnhSqAuDXuaToT5uchQigzNyWz/SG13LtJcBkPPEXlYQOZK6hdSL1Rkcrz2h2XIq0ykDPpaAg6Yo/9GVxX5t2gq4zYyMGX8/uHHyG9nv58LausUBVLWfa7Gdeybi7GYrY+/kh0szLiFAdxd1QhOxcPhWReOs1roEbl0tL31J5Gq1OYVAEnzisf6dUpaBc7AK1CtTlQUFI4IWQhzP+9OjFDN7NNq8u/55FUK3m4CdZsdqOYlcrQssUzT4VpVDjcsgKFucshyPLaDYhXchirv3R8jtc6iWW61tdiBBgB7Y95X8w0nc9dVdJ/eb2RVHe8o5kMTgI9WKj1vdQN7e3OwDV51HzILGlC+O58uketAM2Rsx1W8jHAmhacw0mQsRHP2CPPTojns6r61EMyQHe6JBvbDmOIi8L9pXcGdLUtCT0TDWU5nX12HclQN+s3WEBProEKJi00r6K2/n3L0Kvd1sDsDLw93GCkPJO5deRyEjL7HUfZWiGvoOBj2JhVK88QP0eeUKK86ntNTyogMiTFDoIc9jJzEA6OB2KLCtCYhXgmo/lLSdiP4ZmvQWlXiM/J6wEvxMhbYLbu9/NTlqHX+xmeN63vvBADi6gzvH3UZ9SsL2qOkP+z2yxK7gD/FQGTPAY9KW5P4KZ/XElTFAQuWr+mzYN9/Bz/AYKobuiqCM8cusDVWRO7bYe1wS2YEoKh6PW8vJw1I7DiMAgwsfelgxU/m8paxGfcXcqM0dqPly3wKereHdztnmd6JNAQAgsC/vmIqeNpLWQOuDRnoQN5PQPiRYx7BuaFd7WyiGvbmzB4n33w==';const _IH='46d342a5b9813f7250537a0eadbc7e48fd73ddccd101fb02486af5c7c90d50d5';let _src;

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
