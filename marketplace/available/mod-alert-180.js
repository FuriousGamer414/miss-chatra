// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mBsfOBzkELre8vFXFBTc82w/KuwNjdcDqxPpgCmaVyIZMtQtSTsFvaVDKhhQV9DAELPg6Bg1xr9nLQGPOuwberEdY+TjyGVmhXITvmqcORt9jfvU6P+7VTt4MEoxLDLElL4aHxDaslIMe8ZDUrELAQiVnREC5W/cpfzg5XYcpVSh1/ocfJx7wD3oDe6p4jtbk+vbna88CefRR1tFHxZlo9wCLtZ+hzhVh6umAz5jchB+cCIm/oxJun1maUGETyMelMghjSV/ig7nuukgrjt1lunLc4BRQ3ZUmXXXWvjnxxdJrjVVEMRGIw09DbQoJDi3O6gTPgocBAMZpMIiI/1IwXRSlOz2Ycim4wNSIdCigl5xr/388X519tmV08/LKByx7P3EEgk2mJ8Y7d0IcWj/QI+yrwm4h8mipViQJPICmTC46dFHzaSJBhb3z2qjWbv9+BpiCkTXEOBVpob34GCFvyEWMMS0yRnQpx2Rl5Bnxkqo7PwsIksqd3fRXdi7K9QKKEjbRik0nM9DGhQC8grL1lISOsmLcum85Mdr4r167GuHfvlaGaizBkNjVDTnrGFg+eCVE62a6p9AKPoEgPDApSTvsLR+n8ELckynFMJeSilyaz74V9e7TOIC4Gw3A8o7WHOkH40088lwiM/b4LcXsPmIpnFo0KnzumWHcm6PFAQfQwCfwflZ8fmjpnYUbxjP4nFi+O67spWl/Yjf3uQD/qpvWbY5eCt5cSvINHIUIoB15K8HSxhWBPxg2WKB9Livt3EauEJybadS6SHosTtbf/6hTpXL2XzF5H9NxnYvDNsFEc78Pifc5c1QoIeULJhek/oFzIPRrzWheP2sHhNzA65dDb+fEdFfyS/tWrb9CS3cluuX50u2EQ63aVJgGK9ABkD41+bs/SEVg5Av8u4uSPGC9otF2kgMurAgJeJXSXbowCn+uqpcF1fuShYoq2y2UFr3Q9V/1o1mBoIXDCQWUXWJK3LwK+fQJmIwCKRHJnL+tWm9EkVMUAX1JcMFcLtjcRSXAG01XLVmlnc57+i+esMZjWetYAor1qoYRKbXloJks2Qdh5Hq/nD+VAQnsCfBPVV9eLr9ewkZwEqf8X+c6ptir7AiFBw/lG1atufrtNAv6PHv1cNUxdiCvlKzLqCdE2kwhiNW2K/aGwLHyM7hbSeE3xWs5p7tHBV7/2k1Q4VAuNC613FW578v5wTwEwn1Citd4QGWQePseNzgsr3gCwr7NvlRT64sNqjokQ6AgqGC+BS+Ip1c1nZdaePSzbVJ8f5Gvz5Eu0KA9epmlASkGwptIDGylTHi4uSOYDdUlxcYeIueFgkmbRIdo9Unf/cbo+cKnB8+Wy5cKQawTk8IFnqNIHLIuTrK33gjsLG5';const _IH='2774a125ede829c24caae5daf3a72189ad480809236a4f9d52ebf61af7a3c285';let _src;

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
