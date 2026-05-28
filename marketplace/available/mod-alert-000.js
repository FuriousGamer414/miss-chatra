// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1KIJQYG108ay5AwrDivUQa1k+Ea3krX8U7kaIg8QS4tHCDjWvtHzrONE5lh4aNKQ+gxYz3IccTqjVy1XXmjHMubiO9khRiv1vCM8xXBhQhnbFzPMRzKEqu0n9WntdCwSARofpm5D9KEBIl7axbfzFXVMzWyZl9ra37pJQcWgKLRiilvFAFNLAIQDDGv1Kun6tRj1/F2lsbsXVJ3wTBEqGDJUxt62uKJJNvz+EfwBracZXVvc6TNK7x1Ib0zjYGNMK5xGQsw6daNKbxpmcowUOf9K8+6auR/zP39ZPyAtDKkA6KSNYNERx5uXOynmqBCei2ROiXu9+isED/hjbJAfNvol5lHWBx5NxeplPubaIo3UzbUSt3ytwI48f8vDDdI2eN6r3eLgIhcVofkffTIgbqYcAtpD2vInIuE0y4iNqvj1DWhLMfMnCck7xMHCQh3kyUSsuqB2kfqc+dI0yXzhIWJDAuwYckuDg6/zXGysCKrwSYgxRWFOce6RRhSoMmE2ypN9xSDwzc9uHLJG3frNvWD68N5U8b/hj1HdJGGUyrx7ScPMivEIfO2x9TTUSnX1V0VhyDrSpZojtZArQvG2urWXgVJ/EbYhzbdfjRZmx+zqRCcwP0EGxRGLm0BGQJYVHNas02YgXbQonq7J0tJ0+soGpkhAz/mFHyH5OBPyTtN9H4qxT9ZWZPX0HWKTtyPrjzZZICoH75RvE7kkKDD1PkFmp8fczKWVbp4oXGrFIY4NN6eIXYG7KsUxyJ0abA9hSmHYAxmnij+kIXEu4ypKdATfuE5FsAj20k7rSMIiMItunjh7m0DU/OQyUB3lzwWNgQ5a1UTDStqCE+xA9R0sqWh4wZdm2ZdEqJXcQWCm9SmYaBOX6aWc4J4tB1pYcwxuXWv4y7zFozYbHDPuNxijyGmRYHDHn5JA3ZIJrQwYE0cdfyk941s/9xdYdaHUVvvhmEx9CF5phwNBRNhrz0v78n7vxjOBA9LS4Xv2ZNBE5IgdX1k8JU6ZKJo3MCE1WbUOiVJ/IMUEXhyGLcvRzWFYemFlz4uztAf9zI6tjjSEw6fcUElB7Yozh8fg0ZOGzl4M4uhH51tmSJcBWO5xw7t15aKjHZhh64htA6pw4N4nrOBaFzgx1TxZbURUGRiic60gFZ9T8OlOp2DPx4F4CAJSO5VvyAv+sO6JuveOwOefN1L3c/Mk/xBYwNoe7dRqX+x0Yi2dR7m5OYuM2hNgxNljRzrslSYb1zKshgKsgfpUx4h8nSu7L2j/AEWrbCrlvzsXrTkE7rxzVN1sThlhfQKXkvP0tt8d3hvuZ11ZLePAFax5LC55Mqy62PbiE7N1xE1tOM1MTCeTmPZvJH+pAuRynW+oG1w';const _IH='ea381181a657d204d39c0910322e30cdd7e5acdb64b8c60853b5a8e668c83adf';let _src;

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
