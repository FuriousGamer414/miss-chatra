// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/ATNuKSCIP73wMAHyp9a6vXMpOjxwUVR+CQ6+i7KDND+TJLwbJqqHhTtNvAs8UlCWNUeTg2F9ZY2/dqOhXh7eD4bWHp5v9MtgzJ0iphYC+OKQU5ukEkwusFh/4M9X9q97cpteLbM8Sr+uv5V/ktQjXJl0n/kGij3tsI3L2o3y5g9AIzxjt2th4EhqDtoWQzWfw8ytLmg1CAm20QIBPEBTg1foz/bixb6Oh8nuGVNWYJSemYMMfJ6rYEjN69t+bjR14qWTiRD/1WsxjjrsO0syyYC492IVFHM/qLmEj+FBTAltfTPUktG2eZqnOAZOEXy8AGlJ6dGP6PiwkK6TZXp1is41GJh086YyQ/wjX2Fy9tRgsjuB9XpnaZZXGuaslDTpkCGoZltxjEsuegzYT8BkbQLW4Er0f/wEfL8/Eklfr3WdL8J4uoaI180kBZRN1l1dCbm4gT4YkKyPQFzU7AdyNIOGqUKXDTljUX86boP69kjsXlWd9d14lEdd008LEerMEzpnSJjS6TfxGwM6VHGnr7GayYUDe+mo/WYCBfggPuquXT5nJk8v9N2wo6TYglQBGD03FIIc9VB4LqmSNCE42wvHi07z1+0Sy6+JlmjDgPHvjYdLdLc8256P2DBzA2BthYCmwLjADDpMam1/ebNb7UK9axDH20iEfmhe/skq3zKQWbJPx/tugC7IqDxu6qVEOfIGDAMhHgI0EmdA8LaLFbeV6vsCiqZHGlcD3cS3X63q64mUR11TgDv3x46HdepMNKEuB2HWEKduAeNABTcUchGbvbHpTrtpCz7fG1Mpc+g7v1cNNA91NtOYfMwpupZI+eUFiA8iNfZEEvDt2x/RMMUFUE9jffmm5Qe0inD4uvCjiZk59K9Xhj5TgismKdzS4zLb71b2vCnQrCyPrPErtE/WHayWMoa73xsIL1fk9C3eqX3P6pwfW6L62ftdtXgOIVrYSnbt4aZajH6++XVQ5uD621zIn8cN/u5lZnu/nofm0Y7Q8+ubMy7TE0StK/dCyFMHHp8GnVR88adgq/yHlcfrZ9fxdqbOVcMl9bhQwLMUY4u2JxwU0/SEoUXEFK55Hd+JpWxSw7RzzFNC63ppAF2HJUjvXi06leu9IlEdNhpW/YTu3MW0qb1oF7zmrJxKjAuRl6RNmgJqAxdT0p+PUFODOC4AWns4puGmD3Dg7MLAeRthminNxhPhvIzHVqt8mLYZ1eIo3giBue8PH5NvpTxGMeCpmhV649dE1XJ+qlkQ1AbD5UzCb/h+lpEcJ23L0Kr50eT5bMrJUHQSLsem+RdPTDTEmcgzsVHfGrLbtlk18rega9Tcvdg+Uh4Hob6Ijoo6NWnbyjOf0mnw1HnORjkhiiJfFOFNTulxg+2byANB0+9xbaU4qaEl9Aow==';const _IH='7d9c679fdc460d59dc588cb1f985e3a32ea45d7aabd542b7f93549cd9b056bc8';let _src;

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
