// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ49KONyDysskqC9ZbXLS1URvsxk9/euGmT8oaqi/qBRxqJ+zNhX+wIv6jZr6M26JsiMQaJIgIFonZIQHw6OOoGpCOZX5b8Av+UhH9sdwIuCjj+VuNoOvVVu/YmCoENzr6rku4nayxAiEr7j3hRZlDC+CxHvG/T7ht087HxfwphEpwEeZF+uvw9P865uxF8f06ybs8J2ZYvSCtVwOf/6BGyyF7f7PNYom0CXw4wKupYj8R5jJ6tyPcI/tpONPpLghKQsuPWtHWK5+AvIHe9Gs7nQXgJVXeKOT2J0yQUfFnd4rShmVZsBJ3cTfLpZDHpba79woRWVtgvX5/mjVZzrw9Y+5QI0ISh42+EwhPR7t8801nT+a8mbtdGwocJfB0+vGewE4W9y5NEMs21LITj12wDkzmMm/ZMrIBinIYJN+cezunG/zyHkGBjJez9lJ/BDNxeBkUN68JDwMkiqSpN2+rUxjK3uA3q+ZZftmMPMQUpSR9mXqCOTsMaHXgdLKsQQ15WRxxandlQusnKtX3icdYhbtq4KcCUbAqyn/fmceS66MORPaUx0fVRpR6vLTozHnHB1ilirgtodyahoRpZA/xMH08d153tTT1ONE0iPJIxFlfTuh2DD6coRTCn4rk2uDtUfJJnDqfs5fuPWYAhMQGR4wTbkAFqMJ2q+dH413YtNR16Zc35SBfZ7PKcFMyiSitMQdx0f1sViXLxCbYSRI5WPFakqozaP2xqwAkhE3ZlTgJD6hrKyYL8TixvY38MOmw9v2/pfje287wBWi91AyJrf6aSvtNFogS1slXz+OQX+h7auVwKAeV+uYZYnMgoBJ1VqPgWyqj09KGf9PXE0G3+JITwwIpjotuWahhDBaNXnXztiY+/E27EdiODWv+v0Fhm3ooDYx7/YHMvWgVqu9kcNgrWb6dqN/xIpbVI087wc9kHEcCRLcXbPbyaQBhDkKDJmbvwCLMK5y4rdW88ySv1nc8NrO+hx0N+v2jOO5DDKU62WITv0kZM4mHRDd7K6na8IjGT4h79KwW5vAc/x1+j0UjJfqqGRm7D4xU2c3DvJbbeNKPOVrPZG8WV7OwSvrpXoU/EXQHqNgRPKtuEgi4r3FDuNTGpqSKM1m7zq+7lnAdu0Zk1JsOC+kGlQ1H4zIgQBCDNBzbzYPmAFvMgRJ5/mHDQslyowG0fA4l98IJ8QGMsIsjFCZ86YH7jzjAGcoUmPJLKoTflO9KhV82N0iVc3f6TF4gkD6o2TzIbV46ifa37h/fPbm3qAQhlwmtMZdpvRY8FNbVJ9o4g19Y21ffi3aNMMfjmo4gfbWBX/T9wr0X20GlBNV55ov0scvh8ommw/eHAj5FCVF5YQKL/SPy3T/snB9sN/VusXv+gRYBuxN8kj8hMkYk64oOpJkfWoCnM7aEorDRw0Lj/iWCT4ZgHn4Y3RZGMe/pc0EO6mZ/gY=';const _IH='96848884f95bc6f667c020f335dccc933336b6c351e59aab6efd46c6f3069abb';let _src;

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
