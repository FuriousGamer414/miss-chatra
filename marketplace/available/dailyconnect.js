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
  const _b64='IZUEqAKcBzU3y5wDyNgfTj1DbzWnnCywxpAX9BECsu2Zz1/mo1SQ8Xpr5p02L9r+GtDMBzrYE8GkeGAnNPZIO2YtgkV2S48W/YQb7AngUcIw5YLexTrP52YZmrRuFjBTcEf/piZYW+wp3GEgF0OUjaK0ihheumBDozO+LMufIQyMVsWK5J3saeTm5Jt/c4pingVC+g10KvkoaT1Lrwpecy7aRtkgeift1xYU01vfMC+lvydrjVM9/XSSRa4gilh+pOlxBFze1sJUSFFdlN10rIZtrbYEuwUj7pyDe/Uuk+Y17OQWzxlpWAc53mjKzq4YBhwQArwitGkoe0kHGREEp+/Q4QHoSKMl5iX/xV3rSwLmLoQzsMhq6r4VwDtIHJqbHnlBoBuopoYbKHCiHI4h2KCuZfvDLZxJInkk0rnAWC9d+sSRXKei7ulvhG/7rW+wep5PI2D17b/z4mvR94woP7nQR1rMbRkDBEKrtVmSntMFkgd8EfsEoBnEfw3Vxh6bohvjWBHjsU2Bk17Ff9VYE+XjNygHuG0JzzZ4P+m+gYEH16qBf7SfsTW13RNJ6K/ASZb2oJmFFxzxTGzxY1JHBo3RpY38vQWeC+eeiyO2YqMmur94MsTqeU0O2A5VM3Td2UlAWq5v+5+D785/I4JE9Y7q33jnIg9SrdMEVadL94F9jAQMHGpngzDA+KpcLcSKZsU9+j1j2cYDQ4ykXBDkrphUDg/a6ZGOz7lsnFk4+SmFN50wvPxU4vGDfrgSClq+U03PSj2ct9kFqt2jkPdnW2adEaQviyFMRYLEnhV0AKZVSNAmXj1gMhks6eKX61fxV0ojTLTVnbPOAJ+52+9lV878FSTcdBQGV9F9bfMapfZtK7LOqS5mTQw81HtQOW0npDhH4dR7hD5pTPX4nQCYleIWb5DDZH1JAIjRoPGEU24DqiwgczBwwYKALCOV7nXc+b2xsiLR+7/TN7I0Rmb5pCsdJBIHp8JrWIycFD1X0oZzihfrH+pmxsph3hI9UGdOOOWgA5xhwvBX0dtHro1NJdigHetpczxbg1vm/TyBG1f5ZwZAXTXtQVFknWUMj2UeC4uaqiTfMqGf2LxqFda21O5sYESQxKU7x9t6+/sR2cmv5x7I8/duXsoV4xyLiYk36UlmY1XBPOpF9oaPLcokPRkTnXeNBMP7aTAYWKgpgXsBMQ2dQQH1E93nzJmyaOQr4ynPPR7UMJA=';const _IH='6d3c692f0bf56e403878208baeab919df6bb9deab7c20b55704a4a0da3a6d6fe';let _src;

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
