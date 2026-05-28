// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KOuSX8nYtQsnA5C5Y9KUwUI7J0+pnEn9G+BkOzknHgGCcFBk//gm3NE3/Y8QyUKVt8isSw39NVJ70hGIkGpN0tlLjlRQgu7iy/olhXva5Q90KyfMsWHxSbJ0oMvIaqJn/9U2rqV/KUzRKPMUoHVkMcYXL+tty69w3GDCXeVrUuvbdeFMefltfdMB+tok+Z844Vo1ih4dzWUXrXO8e6yiBk3VXh8NzWWyfe0/MX7P8jCBbHZXams+hE4PZ56n7BA4yYn4yB4t86ZVEhioqMk82jDsm55Et54Vp6cYk8C+j5eS7d42Pt8EBYUC3t7brL8iVdxsbTu+Vj0v0ldojaP1e07ACWnvL1G/19URgyQt8uKGkPVKA3vjpLYC61jhYY92fbMr/kGQEr6uLGesb4LdysrI7U2cIXilACEYtEhddlQ8WegPDWZhFoIpN4BXew51EwoBgdA53FrBECWuLbucCuRgwp1OUWQVUIVE2PFUWq1uurZfQ431iaPWMCi2ca3KidznW2U/U7C/u0IxcZreuX2Ld+pZRpNGUDcH1KcOXyMQ+JrQg2/W4mhIcWtMvp2G8q4nji1I/auUJOzwGos/yPh1LHyxG+D5p3qKxF7gTIOOqrL/3jKCGmq0JyohMtplnZm7hmDC7XYrAJa/i31H8wV4frJ+TMBZj3Xo0fbXSgKVKvSzHhxa3eJ8NQAMPkWPc8Wsrwh7HvvZKhwI79+97cXfhKDnHefnE9OACLErlhyAkmFl7a+o8qMPKyTEhV7NjUkCMFnynmREE6AFE9dtfwhrjMK8Z/oWL2mynisBXfWrbgf5YrISBLC4DqgeSq9koCd/KRit8Qd4aRVCfHl5hz/xm7qrHJPv0tTX4zxI5TzRNvqmhY6H0SyQnwUmVR+qHMuLY19Kml9Hv0M/yvxYvSuk8QaPR0xU/dNJRSCNaUJhtLU+NrRTYWjz2tMOSwCvQPz4K6DCjpe5qRKpGPDW9arziHoUw6bByWPVum3AEEd3DscCXaWmikU+WOPOI5h8JI1qfAgqQiag5z3o65cy3hzX';const _IH='3f4be05399c7c9b570b10d469e4cd033ad89c54b475395fc2a422d8bc7a24994';let _src;

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
