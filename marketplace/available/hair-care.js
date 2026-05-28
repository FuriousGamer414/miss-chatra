// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9eDNPDlK6NcRe9vX5cmM6lXPr/MyhcsnlHt52mLdI0DWgRzryzdLC63u7gX19u9/Gupb1Rvvvex29aM7M12wBRavqQjMZSrlHjdAyCM5payWWvGWlTStfY45M//JfdC0gyfUSGMlI7dKg4VWxsm4NYxgS1PJs/V6dkriFVy3x2rabqleBOlKtpcrrlko05vt+PDVWcPGR+LRSvn0XuIqCGaaIP3iAct9DqFI3VOAT9h/6huu3cbBsT0d1NNKQJxf/l8QH26vVPB0DlFdvLm/N8AQPXTqDhDdmlfs5RmzkMFTAABKi5O8bchNhEV3ZvLWt30lzIBR7u2axwb4RH3WXhVr8xl/ySqc4W/v8Q57w1zkWSYXxju1cHNaS9Gi7AgY+RvQJWRjJHD4sW1sIkabJacj2DShDH4c5zjqv0Blpy9AiV1lWYgBXLZHJBiVwZZRAHIHFkhpYNortJfOVV6DMcdtXTghs1QkOPRxQDCFDZmkO2zvCd4TXc73SsPH0GmLUws4aiB5LTONVdbMcWpzRXIBDRvOSLvOr1B9dPMiEktOuluxrTIfPI5tN1xGqgSr0jVXBNpe7jH01va4NDeCDGbvQwyZJd1vI9p1MS4h0kIO1VG4C0h8UP0FEwca/9S/uxG5/gCJUw3p2jnYtcO4HrbLFciCc7//X41s5UyFmwS/yiUrmB9xtN1CKLyWsmRqzpGjg9X0RvB5++7RwvB3If13nObkFuhl2lUYdyZZV644dhM5/G6TJkQ4mOcQFl9KwMvHBokWTRkvDTESeTNkCkbysDW2OziCfwByOdlgoxIX4KuqzYxBbwh61et1sjlOBrLFXW09uo0eTHfbkc0Wj5c6/2XwMmiu3JLV+MGwYinCo9gyX4+N15r1EPiphCPep+WwbFrlXlk3QXRkkwYdHHlDBan6I5l+q8dZ9Bf2tpXqTTpnXrvhDCuBCY1Rvo6TINsjj2rfEakoZ28a0Q8lEgmC9vGrX8gkeQIZM3TRqyHi0k7sXxZ4Ig5GEi/7Uk3Vrhcxv7nIPcEaZTKaXO9dSaiI2GvW7uVHiyRWXO2MJxy8ieUtpZo7rBoNrqkXPwojgMo9r4yJU9TMU84j49u1SjWqFlLkMc46RHroT6Ea5USfKWaEo0lzxUn3sslzG153N7WUEppZi29pOuniemSwjyhsQgLIvfCr1hCQmvTryAVUuhFDjy98Xzq8+xoqz0N8rxyCWavDkatBDLxTPqd9Z+H/U4bX5k19td8ucYA/9hKqhiiPLAWMBLKLHIWdUY0MwCfnYb8j/IW6E+vFEBvR2abM0vA9xZ0u6qXPDNWXi40NiJ5QQ8X3nP/Eb3eIHzmdT1A/oUdS7aOg7nts5oxalvV0Zge0h/Efgevk4faBKuGwGHWXt8ubF00CVeigI32yDcqqY1skbV5YbkWNGka6GRQLrB8f8+/uNpn5Fp8R6nNMUfCQhM5EdF0sXAk8396bLhiArqt8wN84c6du+aWSDCZ72shawZpEsLGwuW4J3GNb7U1BcDI6Fsvghg6ubioPr8Am8mYkzRgJvjbaPwKPQBak8XSSrsPVsyELPvD5+OsSfAG3ShxiqX+nYZNQuOgWkW15kTPivyJvKmw2oVobMMHbBypQyBAsurmW7hCWU6hixjD5O+ABaZk08F6h0yfd9rHevQ//G/8TZaaW/i5Xgtwd8GaXlEI1yYwqBQ==';const _IH='ee1771c9f3d983cbcad29cbce753704068855a48d2c2ec1522c12f9acf697d81';let _src;

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
