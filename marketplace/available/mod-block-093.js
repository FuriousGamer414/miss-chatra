// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8TE0v4fEnhEJ/L713lO4Q3NgiO9exJxpA+I1dds0CSmrieALiZ5fo7lMW6mX9elrGUsBcKPCZTbG+t4ZcHnRGkiW3v0g64CsHgV1Qdt47rWr+70NTWkEgfbmk5+lTbXLBo9GqsB/7kTAxmBBvoc9dmesd3PLFWjLJKIASEQk0YMmjQRoUQP2C3D8xDTd4KTP4rke6Rnx8mk3C3HSA2CACv4YZgbNFsefSNAFnQiv8tOF18K217Co2tA7Dmw2+n2iD5y0sAiIl8Ntc9+98CvpHihY/RnFvUOH1UHmluPQtGsIxG9DfQdeVdio7AKVr3Y8AbO6rIMVb7/8AttZ6bfYc5c5AkBD/NLdfcquO5/4c8atKU3I9m09RtWZcz4za3bB5YL8m2+NjQLeZUdHlLmWDWnbBaC3m8g4So9clGev4Ev4wPTmnN3JbZArBoJsJTEMIq7Z1SHTxMuZvHyHwJ0E3tvANOlhRqP4T/aPwzjq6odNWehGb/4myj62I7UAvVQBkCmMvj7mB5BdaIl7HH6x0UYTeFsQ/AzyLhMRe35KXmy8tkt0xddGzhi6vy8WVFqzhXrxDH3yS/pxP2NqVWDvzUBDBLYU8E8VOAOWJjlRQzjEB8+2xTMY1hJtE4lSvpA2d/bmaTIPAN1nZUCNEYfcY9JRtKBoMF7jxJzSzTMxmhSPdlb8HTW7MuBwT80Os5GeU7Plx49lQouOm4rskXldpBd/MP4CANR7WBi/ENZuwshiuYvgDjlqS/zyIHT7SeCnSNLE3TT0k/B+d26P8a7flAxVBkoGPsZKVjmHDqLNlkle7m4AJ+Q/SmSx3LooDJ3KRTsuOC+LYyHG6UEtC0SURZVfITEo1O4lV2U9lc6Kmivu/rQoPZ4pHYOCxlW046cE7yEuK5niLRPxQK1gY80Jcff5+l3kz/qbbI2NZlGTJxgFpU5rzdzg0gJIXZn59e5fq0QK2Mz6i+SwXmIKpoQgXf5B/POQLkQhjcVclMLZ6f0I6m7tA5R9gvo+HulKZuP6H3EPLOfuMOGqAhWjO/Rm4TYoBjK+El3QzB+DeHLav2bIWlzMgBkH9YhkXd+1j7qM3EQ0KThZb65y7ayw7k+UCuq2hDjNdsl7jdrfMTb560jeHEWCsnB4ior4fy/MWONSTnkBmMW/kJSawj7gBnqhqvO4nIpV1p/gRrBVGNFLn1+Jtw8Ez7ygpa0aVeg8saio1dJB47mYVce1YZMckL2ZC+9JqLWJ545dDOIs/aZaFKANsMx5Kd63g0ul2CzKzPJJVafq6X+YIAJlSkOIEVCC1EUaPBr2QLIdhNKTGntbtdY4blSd9EMppNzkDkawsPt1F3JY0/5rJyaGDTrRz3bmiHNkgfKA1NUzn0=';const _IH='1f99c0f68de3cae0133e6a874bb20eb867a24ac74d61ae7dd70f72f2e13b504c';let _src;

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
