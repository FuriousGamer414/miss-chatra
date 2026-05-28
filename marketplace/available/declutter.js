// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zaXxD6G5U7mojB7tSZoF2qt9A/e/tDrMk3MGK1PUBDLzH7H5K+fQ9rOTYa1DIgjzWQexIeAcRFKcMDDnWL2nUSJfucemb7fEryAtQRiE6ALB/k9BLg9YjF2OcTmS+HhtETMmDg+kci65mg+iU3OGWG+3o8H1vBp9wfH6t2p/0Yb1cwT7krgXhN5XCr9jP6Mfbs3SU5u3YRrGeVFKeG/yL9Mk+CSLOCHTpGjg8TUHMXd1WrxJvcKjg1NYfepOLuPp8npbM2o3b3oa0hCn/iImhUuzGZfm8jSek4HhdKu3Dj/iBiX/AMYKRU+H8rYmYIVijaPVj4YTLNsTipTXI1gB/mnctym6/goyGPhVsj69epymlZJv7+E7WMRTPpxjlAQmJY55ZpYdEvCHhBJS4O7u7MNk+QjYmHCFu0Zv3wMs0ph+/y9IbMkQ7tb1sQGTpPVfNs051j+u6qWFJRDuCv+IqQuKb3JvXGbInPiTxd5aFpO2LtakbwV9Tv+xYYsHE0VdXBYNjx3FZghD/6pOZeyeclQrV+4nGVGMz1A9JXXyz0yj5QlrL3i4yELKQ89A1gySXt7sK2Wpj29zQ/iNi1tissaZiOUR86dfEioECYdV9ZHwqdpepC9XIfMY0pHhsmCMhU0aWZE4MbMyrjw0pffEROmQpEzUbvtSFHi+QypRM3BOD/1KDRw3hekKkmmoTRECS+kV3SaHzyy1wHIyAOS9kDIkprwjJhBOKjECxC5AO/yjroB++T86d1lTpoOmmywmnvvCwtIYBfxOoWmsu0vhpC65D/GWl69CQbSetthHe6fsFjfit3sRWTP1lssGRnMwq6/kh5dswCchKLIIbu+2figk5IqPxp7/mVEhTZR+AsjEuixvFpEC0Eoj1n6ORswrq0+HEMj+BSeGl4iX/bWrDXTfJvfpY5DkGoRCdUv+ko8sZJpcLEPAKxVlCydu99IuneQWK509zeviiSmf8L9J4O1FekxYE3vpojnfrzbV/u0yUMvObf4lb2i4G0ijPTDwqcbNQplLAUI6KVk/CoAtVIHCTVEFaMlaXNvBxQ1+HUp7NuqCe5lcE3V9Nv9ZyJubLa4a2NIk83xAtcFdRK2j8DpCt7czqwuhQTHo0zvauFe9aIn5x/MG9U8MjCWAXNVp13GDGI7pzzXtVqXk4X4VZW+3lRe1ejwJ2u5uvRG1zv1/HMXFSG1swloI+1kqaLX8/hpLtjGe/i4=';const _IH='ba35d187317bf829148101278b7af831e0e571e8ce9e1930274e200f22be0e60';let _src;

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
