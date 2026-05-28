// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5Ssx7KNt2iPGaVN7hm9NzwkTT00WqcyA2yV3klkl6+HuCPECNKZA1lOzV9TpCbVt2lNJRsTpPGv1NpYt4g5fiG+pL6yg83jh4hHDB5airirQBdqat4OAkkMRfEZ6G3hTUL458iDZnp0CNH8abjr35NvIvwOeJNMb/a3mCaElyB8mzc9+hC3ouChFLL4o1NZOly0uHzzDXHCyZlJytU7JTs7hw7Ru6M8FnljbafWAenb5p7SqfG7FHVgULpVopYjoXe1YZJXYWSUDqgz8BTvxB0T6OfzyY3UT03fhtSls/hHs3SubcMn/AYEzPzfnncJzOZej/iXZaVDp5XMtaunwKEvg380TE7J64exFDJF226T05BM6QF5FzEx4i2grGDBWD5J4KtB8lf8o7qUyP2ywy6ag3RZNqhwmDsElCBNLrplPT3D30sAobn0F7YNzLYIYNjDSYW6BxMilJdil3jOXFtnM4LopLvnHVipiUUELDp5nu2ODNdVR7Cg57HtxGS4dx9yujrzOxayCR/pWq90on35FqIiN0n05P5sEtB/PaXZDDWh8QQpzACwaRhXHcvDEAnddRaHROVFHuxP3f4BKgCV21EWXfCzp/SeCfHYkyzS7rJxyROtX4cPdGRu8xL+B67+kuMQRDsfWoON3XJBrpGWwzQ5NO2U3T90Tn8mCZozjdfF8+KnYl5Wrbz/TFgyY/0QDbFxxcX4Zc34eSSQGbjtgtFLOxQZ1+ppFBC4gxy+5S03PYHzZDetCGJITe46XBIAHM4LcMTHGersPtiZdKvRQbFnf60KNxOza1TvqxrVXHiLsFKSZnu/AgpxzgVXFJMKxd3F6/BJ10HEO9A/m5owN/CsIkI1AZRzOIhYwab5iqpehw4naXdmeTTXwEvQaTj/289WN20/WczGIb2Kw/DwJ1Drbm9s/hHQMInNAh8wXFXzzAv2xpvJeVgDK+3kqNENc8L8XdWy89lEjYCuvb9pscMsTZrAFcNI43kLarPnY42jwc+PY385y+rvH/oEA2JsBFzuRzcddhOJHn+xFZsIla1U7G5A3WNUeoWjdbEyeEAJczaJApH4CaYlwpZRT6R04J2OuUxcO0mnbscZj5D6jeFwksPz38rTBEDwQKPalZluRmwEhJdw39Dn/1AYoXBtjksEzn2U7cBNc9RseDnCKuMnC70Mnq3GYbvh4Z1KE49+Q4XVH69AdyHQtL4uMq74cmcqVnNv/7zgG6h7';const _IH='c8af1be6d09753f6e23597b2f43ec1f302937d256cb6c2e3b98c2743b87f1eef';let _src;

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
