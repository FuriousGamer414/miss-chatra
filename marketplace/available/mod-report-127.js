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
  const _b64='9AX0IZ1vR9glL2wFcdObBFzHSx3CSjTqyM+QWngZS+Z6nXLjKmjHftHYeDMhMzC7grvG4KIr+KlwPDxuoa2uLtKVW3d4AiI5tQtDx1UQ8X4ZomHazXzLF11bBwrGyleqfY/VII51ZnjbPSCTRBLIs52w8W+UGkyz0baSnmsfRI2GupY/8dqVes8y9viR2+Rzri78RTHPhQ0ew8tB1FwO9GCCpdt2cT3dCUq0op0tG2X9ZTb+fD4xsIwWl0uDoIfCIE7+ujSHgv8APXWj8UQpz/BhGhnCJBMRc+yrsjnbP/iiLchakMxl6/H1FSlZcApkLI93ejxevYjTR7NpJPzslzy4EkvMAehUDfBnEPrWu/aGGH/6U9EcqsAfusg06NTNJUYADvnaunhPaHPxHi780SObjqXTQtHtW4CZgnzKQd7GXLc4SZLNstla5Wrj0z2ckUv6NCxGyiggxBBCBnPga1afeF/zsjqzDcHJTfB0yPjSuaxkgQqfOGKiz5v0UvLKQO+AUN1wwUnIg60NhY/X+NZW4GSdQk6Rav0QnKI9E/56uhuN4rtxnasRM/NrTGEigv/ILB8sgYb7ZmHt1x5REvj7DJvoChaSMHOYKFM1wPFSsZ5rFqq8wTs/vPC5rerYGCGJSh0rA/pvXVPAcbOATnKLGsph9VTSXPIbo2eteOYFy3snH+2pLxoU39I9FfQ4KSXCvZQCr/lLaxA4vJRLQ5kmpAvVoziL+tFMW8mxKv9n1D+CeaCo+O1fSNrMx65twQmOhnVf/2GKBBB94eIh/hQAqWWzU9Ga/BXEIfO7J3niifiEjp3t/3H3A43Y1qQ20twtS13w4GDy70razZtXdNzL6HDlN0QQFCI+U2R7WQ6NkvPwSb9OL53B8ixbRFvm/WsMOrV99KW1pYRrqCHivVNsZFkINkGFga9hJBZzbolvxvtnHdtfNsULgApSFNy8kDB7+4i7r6norw/RD3OSlI809QlBJ7fDeY7CyXHuWZBTTCFff0bO6eD5zmxfVspvvOaJ8dbPyj/O789q0N5FbcTxD8+DUR/12UGsoWCIIuhbZPMdV6KOpYQNbsAmdVpxyQKKN20XJC+PYkN0UEJvzj5/gJ7YppbDzpje1SRj4F3M48i9nYZRIXQoxIdU8Z4cio21IIdxdElTMWJE/kkrQNHEsmzQ34IFzVgc04IQxc3jjBRGelbHAcI+6VeD0uLunkdHVUugurLQabVmKUIEBgG53+91ZfWO2jbW3FQfSbG3FVMyyQxB/KhFEvzNVuckvdlM1GW0Ejdb9Br6iJpRMR4WBig0zYfz7Nf5NfpNisaZoIXanwGbkENUbNvhNqVGQy/6ABWkXDK1BGZwOFI/boJkfanmtelsTxv2EZ6DHXbPyV/L2qWbxg==';const _IH='d72b0ee95aef2ca6653881aba1d4fd4bb97e216b049724caaadecbcbf80ce4ea';let _src;

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
