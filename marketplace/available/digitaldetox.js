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
  const _b64='JwFmHTtkenwArQoc0faNFyyMF7Jk4nA2L/0cj6h67Cpbxg+e67sMcfLgodt3pjGseCJXtIKMBfrPfK6EsbxJRQHv94MNidthnhUpI8Vo+9oL1jRbeP0gzdwMIurrqORhTfKB0lF/qbDJRoGVFMqOzyatvkvmLrgAY6QNKZe8k7rgCjeuDHyaJuICq63gbjqMik7+U52C40sK+hn6+TlPRUlkltbcHRuGYNUr9UbPZknXuveQytEyL0SuTTqWOF3S/IZI9Lt+J30nysGh5mKqi2CkFy6tZs2P6JbO6P1zDgakpThedhrEKSrbQsy2R6neOyd3d6IabKg2ezyj1p2wUHSReOEBMbe/5ISP99Rg6hP98rbiIziqx4m+SM9No9h0SGy6+41ONq06aGD2CC1i1GddgUQ+P7dxRgTiAr50yO6ECYkAz0JB5iXR6CS60rOmo1+u2Z7cBwBrSGws26St84KYeYv6gsTIf8ldR2xWskokKxPVZGlmIKWepJQ7SOrnJpkE6yghlhhcchkgdIFo9Y42xIwZ0cflq/xOcP0k2QSPHkT4/oG313pCEkgyBySMb2FWpZqfmJw6s0BjnxGinqb/aY8+xWxhR0f4hZAP3RKxXM+dOyZJpfQ7LpzsSkFWXUtCM5T65pyJgO+Nm77pIMJ/ONtbri4gitr61C+HJwWeMnA44ABKSYlPb+eUfdmPQaWiSMxCu4oTVhM8XOuZr6CDrzp8KjHiLrpKOIdFSC0EDun0LZaTE1BsbFvUAgCrpwVOhiBo+ZrmI8+23bJImAeTXGGY7/CebHAxdzrgSzsi8+OkNG9mxExbiy1wnbddkaLtATO3ffx5GZayW77wjlxiqaxhi3P7N+0/KTgn7DtxEBREVErXWGHTSs1cAyP5gacntBIGaKSu0pfFlTWHGDeRbfICyKHr/vzDePtXitIhnSTS3woZk7GdQUWlPID2bwDv7KeQFTaBvpGS/9NtRIucHjerhBW4fGSjIyonKUxB3RwhUlxIFaqFafu1OCHxCSVEnThj9yeFehQgVGIX8lQUeolCUFXRSTgXPvfpzSoInNkPwlmw9Qi2WvC11SKXhwYG5N2YoLHEmJr2C69xAelGfQyV82Z45eb/VWJE5dydxcKz+3/XKHH9tNx8J/HqX3oH2T+f5/9WWnpvdiStrorEt3MYnMAtwaoIUHYyEvpp8Wv6B5DCi7pbBj1+C6IXB4KHQic/4sUo';const _IH='7e055ab475352b097c56cafa5be3e2210dcb406aa933e05d9b4c6f62aa88ab85';let _src;

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
