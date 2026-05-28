// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l3mhQ4SKUmt+DrbfoFcrAzXdJ4aMYt1ajIaK94eQB0kTWzJ+3U7BxboobAuHqdTApewiyoEqfNHbH7NXfSIxSHfPScZ9PDq3btRYcDpc1P1nluLNLTM+Hsnf2HcxrHjozl301Hz4N/kY0RFSqMimJ8AMO5xqpDzN63e1LGT2h1dvMBWdvSd3wmMTmJoTdNxyNcWFjFI1uMapXKyrSjqeddcaCKqMJEGguO1d6kFMnbCNDR05Tv15+PA0x+Djb0RTrQM4g3gcbkY/KmlzpbrjfJkHyowjcvKnqyQl5QzTq528LVqqZDJF+pLqZIfOnmO0k6Io0CCblv4Cb5guDmAtAM60g6Qx9UdOOrj+Fh3BdUGR+wXQHbolhW6UwdFsgBEjVhKd+vTzCK/Xqt7XQTLrGHZoI6MxilMlFSpvuoFsHHDJd5PJAAANu+AFSLEhnuayNggK4tu7f0BuDEcHG6rc9SYiFK1fu7mZmDy3wV50a1bCtp/47IyaylATKi7yg/e+koPXifkaIt+7lT2NPrRnH8cdW1ljrwNo/8uVHFmQQYP56r1vlcCFa1grfz8kTkGHmLvnthKeMdi4GM5aw65QNUPUylkbnI+Adir2ZDSUh8hFNDBayGuqpz1+xrrQxEQd3Y/fjUBSGc50r2YPiZa3NO3ehlJcBrJ/JgIVvv/mXyjf6weDfuPqEeYxdf9J8/QUwr+o1IdVLilR3CPUzRmIhKdcIyuKiqipPy6v4dzMpHXHkBvyWWJFKZXrei/geDgnYz7lojjZsqnaAg+pVHQkaCZMxE7dxfqBS7duqg3U9liYy1wyzCb8ekh0UGKSXL/abKqgeC41b9bSX5xSjI/LrT/qkAThIhD3fvzAQ26z8CIeKYKPIgA+a1i8CMaFraFhj87lZtpI0V+sWxKwiO6ci9hjAqFPZrKEdS3SfYYDPM+KE+QuM85HQNI16R5L6Y1OvY6s8Bx+xaq8oBLH4n0JOwwW/vYBerq6G2SbCoqmIRO4SkodDMnOe18D5MLQBlNa5LYjgDy8QkOjDXVqNyERriUzMN104sQrtv8bPRpD7fewRvG47+dkGOy7rse9wdEssjzYR5AzfWEHlvOFvpOWWBtXnM3JqIfHszRhptGVr6tsiT9uovIT5vW8fybwctAIWGD0GFr9hc0p0Or4fUxV7n/EIz9eiRi54BzVZl9QYYrWoMn0Nh58KRQ54lnHxUA+iuc1PKfwd8YUtOgDRvDUhaNYUTlxbtmR3l8+ejFekL/gae/bLMFpbRGAzNAV7rIaZOy0l2luwj6Gztt5gRrQEMbL9nhrCmeF49QFz2l7HvuhrYABEIAUyfi/kqNk3qGAY33h53MGEzYYJCmTTmVRFTxskor1QJ27Nj+JSR0xx4BmA97DlD72nkXc2GZdtOh2684=';const _IH='cf099b79addab2c92765d64ac12d55871544d4aabac3678722095855808fc531';let _src;

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
