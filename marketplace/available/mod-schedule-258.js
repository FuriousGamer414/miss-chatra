// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NSn00mgGI64FjKmApgzq8ZrmJAINIvqVrChdWsiTarwmpeXS9U2fHlIj/x/KNk95s/zl8rcbECvgPLklzmrUv8SCYii7uApwRFxSrVx2D7mPvAyc4FrBc36JXktNx6tKA4CnwS4TWI+RcW+8B/W3kUXsQp2tyucIL9/DJyVE9i+yFc1ct0hvLMaAP1DdeitPijVqlyGWPMOmEC1zoTaHGEllbm85V+0jybtBM3h75hx1jfn01LYmDZAVD+4/r0VTRMC8pb5y9Z2qIoMkg5suzCz5az+UQza0ohx2ZpyO9OUmboL6zNvLyJeqOqh5IEPI1SycLufpO2FZmJqvvcs06x+HLvuykHLaq4ijcFNPw4QwX/UtiGQhLEsnGX5wW9a6zFumr2H1WpEOun+8FZCJOzAhyiPIQeLmCpeKCfSIOSKl+2M1lgstsbM7PUqLtbCV11TeIjnpqhztkHQVRKGaPeyVTVYAUQMjt9s04iXhKhx/jYshAmc5iB3MsXzPcdL3FX7kc764OhsrLtgcQr+Q8Eq/2SpWIcV43ia7MqLhfA6NdlTjaq14Z1yDM+pQSlIZX2+QLSSGyxD75l/lu6Rfed/+NFbi7puYZddDf0Y+FQTFEarHxh3PbT8ZQMxrTqd5YTb7Nwss3IJN7aBUiNdKMR+9CsS6tiusKyc2c1W2Eofat86xUkjJKXO/j32hHGcNtH1l4F7efTbjQfNKXTCHjd6nhZA2fH5cYNAEXDGvoe/s02qeDpdxBzI1rpPtqLkWVbOxz+gtYWWNhXkJHEo/mpBfpoWQqlMPVCltTyu4hnTr+2NgZUovH+qwzKVpZcagO2rO9lOB6yj5t/V8HlHL0GNkATlTzApI2itJ/ZCKmTG4mLXcUqj/gBDEI8kFS2R9PhslLXJy8p67u7gG2zJh21YX01/ZTwDqG9F7lGUGd7W+Lh30Us6XoMhDW5zJfk3hRZv+lgN9braamj69wPsLPsn+T45SdL3YQ2aAtfJkVFqDORQ8n6aS0hLVaguv0MYbc+T195Pfkrw7vrzkwxH0O236takTGQ5v1Wz6odv4ITGtU16FcPsqR7o/pKSY87yHsuMIS7GYgp/uNZZcmNVyY921/IAleiob5G4uAHwTe1GTscjgV6UUT0YzHcog+nQGtwZrJBZuWpIcaXuyHoZTdLHhSMdH46D1c8s0uKYvxUXX/KMo6g8GKw41FRuIbPvyGV7JDywFkii5fpvmgYefGz6ZmviqZqffEiZyrKO8Rxibk20l1oRe49IThR5hEqMcPZlnJdtQBSxa87fcn+I7mEfk7wmggK4Y9JMvRjoQ1Jke2b9o+OI2qkUZ/e2rBof9xGEGHGkRsRzMtn+/xHY9YT0SgyOqfWbfqquFeVMZ6fZF2ISpLAJ2ygmECHwPDaGZFuhJnJC/iOPxSn2r';const _IH='e69a02295ad19f460d2ef2589e80e21d2f8b1acd5118069a0bf475f6f83eedaf';let _src;

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
