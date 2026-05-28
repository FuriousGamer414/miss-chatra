// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/HJJTRgQ/MCH17v9CYRno8jfvDY8X9vmVk2bsTQypVCYsdHg6uMw0DODzpnqBTXB+gMWw4QQtrOEtuvbLyp3Q3k9mUES5FmacRvbg6L2i34TUk3anm6sxG/8MpslXu+5H98KBMlpGkrjP9YzFJD4YMqHoNb3jkI8FIbOhfX03nKClkX1Utv/YXflU/IScuGPvjCzTcmph+2GBFrgaCCBz5XJusnSw4reJQ9/GehZTI4tS+HiowQGaXk1/VANe0KPlE0aNwrMXijzdD29YeUN35n3+3rvwPaHMA5AqkZx+B1cEwZHXkmOrQGewzUEkhear5HLjS5lZJSvswij/dFg7zjNIOj9DdrtKQPEK8cJgmzdDx37bCjlf3y4Y15JtkezlVQ3V+upMJhWA2yd4lpCNT2YuoZO4BT6QQKOlm4bmMfXFHfog92w5qI17K+WfH++Fh7W5OWy4kTmgdRdOoNjTcY+gzWfk6grxm0ECIh5sjS6faD002UevoU+doLJZXWk2n60q7Nh4tTQUppNKw9bvXNIAdTmAWs+I6LkiloFolnggml31gIhnM3tlOMVOX8s92ZLfcM85ldhBbaPERsM7GojXRZJ448k6N07eTrCjtjYNWo2GYLQ05ncPFSMakvvqHT0hVO1v5e5UZQ/dAXnVQZVFUrA5VDmDrPrICvssBaCQFIcSSwgEDsViPABwz1dEFLC/H0f5ockAqBanh7TQp0xQrMHHd0RTdAV9aH1I5sUlFl4AP2yuNBIhGJckS7orh8//nh9ssCR6pqIJXWAg04l2DyBtQgPey2+Of1+7EA53YTSeB36nHFzpbfRNpaLX6K7SY1rHJLz+oRmpoH7b9GBUFCGYUQeqfY9tATZa105H75+3kBDHr2mmLhdwwjISqU4mOSRFwEJ1RGj2a2RAei+7x9fzu3ykoKTW13nkzbkka91JOEJGoaQE5WAniiiqD9ERuQLxcXIs+nyIgv2njJd9eAgCwDpgbKYW6jyNStuSYgb/v9J21g+49Meai3QkbB8xAzFnfGxpguKrbvFMLeHkTQC1dYWvaUPJ2jNyQ+6xiSLL8YlqScwfVcHjXN4ZiJ2n9wDKJxxBvYe4oyp+wUA+PRr4EqDwjL2psvEDcZxOMufoAtPC5XXblRqllIfd2uZPpf148zqveN1bdkkg/W36dwcGM7P/Tro8+uDKP5xypb5l6Rmn+7Sbi+d2GWXCru6K5qMfMXCetWHRUmp3uibE73b97mTH5wnELt/tea6F8KyX3Bngrz6xNMMoYb3I+YdVax+fp2ldVuY8U3n1Aiws+BItwDzmSxU+VzeIJ3nezL2C42z5JiSQCP4BVx5CWtZcqwtcNbbYuyoZwRvkh70dz1syxJL+LZ1TL0sw==';const _IH='5c5cd19dc0d0fb82a1e8e0c2d2a29358e317f8d7bb1df84a5764e9900db858a2';let _src;

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
