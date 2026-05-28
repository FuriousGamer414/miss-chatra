// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyP7V97zbMKs6lVcluOQx0ZBVW9IRn18zxsHYJLpjX4rPDzPjhXSUoSmWea33NB4wLRcyXw/GluMSBGCDPJ1PH5SRzZdb4jehEY19aBMicnC9EuXDfg7pd2mX0tv4tHG/Y+ec8ne8caT5sRHRujJQcpyXqEW52jLxtDJAgofnmA42ERadrI7J5b2Qev7l0PCaBhkhzMu+y5MytRAxayNMcVXLe4xZIQg1+mITxSH6Xsrpp1isZXuWS8mkw/Li6omQo/hrpkSnAD4asSqoRGp84xxld1rj5gocccS7PNz9+lJuavFrjENpSCI0whiTKJ/DReltoWpy2YL8WRJ/WK6BT8uN/oCwTfuKwfU5ZpYJT4eA1Kd/wbLUh6AOJdpVfNsPHc/XoLs8nNN+1/dBK9I0+nWlUdxmR0WvjlOElczoS0W/pRKQ9Aih/PLSsQtuYn2BpkOfSHzdbmBPaC3OT/k5H5yWjmzSFqLnsxTMKAvlCQ788l86yEtH4xbsnZMX//aZleSSXdlD25yOb8TgMY4i+3lRx2AaK/dbu+Ku7c3STobeNfFa3uqKNWJVot/W7hXxkWzmad1cN4BC/rqwK9L/z1HULKnfhY30/c8/ZbmKdvo5yJNPxtt16BlIG308eU5Eqts1Ap26edJKNx/kEgxaBrqUW3fWvXdXKl2E+zzRt8VQ9CJu6mZXOA90vksR+PJUWrcTex6pAxzyVJbb7KMq8rL3X0+QGo+y1hU2K2XcrUy15XUR1A+jw/DJflQIvVtN/sg2kh2NMfs5Ao/8QAr1DuONFemVSR0tArxl8DXWn8bj/Bq1Cj0NyRkdR8npKcPk831pjE1p5WDY8qpFzu5dwIhNuSKizMI3JqQNS5Vr5IRfKz6GJdK4s9OmcF5zGsuSvH8yfTs82yiW4kSsyYm49gbSI6PEUPmR7UhBPSbpgxne4lGzRBeQAaZ1BunJLjEc83zyNMaCGm2F/Bdp7hVFDsO1majpkONb0D35EmT6gwUO2cMn/TvLqQqJvU6mFvTg2znp3eGbj4qjY84H1AMpuqsRtgc2dYiWwkN2s4v3M2AkzI4A5Oz6UHeLsVhB3M4R1fx2eMGrsT7gWO8Anf/fVPWXFMg/NSnex1G8LHl32wRTSbB4+8WqeBJbgmYTmRN8ELAFX74kOcSrWonDZKZ+VVjtYJVzBZTyjXeNlNdWC2hEKm+YOHWu0HqzxyxDQcL6Q==';const _IH='57730a4cfa823b8fcc1f769058837a1a364274f4f7f44958a0f64450b91a632e';let _src;

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
