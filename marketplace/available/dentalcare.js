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
  const _b64='vdjueUfidME4/AIoCIAc8AX61xSvbvSob8f8ei+RuWkrc3tmVYhvOU2+Kkz2vv/5TOCTbyMVRWtxogB/sZ9CBK4c3rRhoYiLmNyXHd/GQ0nfYXyu1uQcKIpi4xJp7yUKpj4nL4/xAVFNHrPVf8sq8J3PCSVcyTMGZsfLRav6G/MdtKfvFVFiGTiSPEhpfZgGJbI+HhcBQrg5rhlx4pQPfei0dsGZPbZJaxWoorScvAMuOVcfySG/wFD0s0W511yrFDJbdFut0iFF+1kNmoZyqavXieAlogRDcu0PGP13PfUj5t+KGDlA9ma3WA1aw1hQtFr3I9eeKAugL/Luuo60RSTgEGdhz/CNDJaw10Az/nmT355b3qwDcMiu27BnUHT1nL06jvUKVn4uE7UHv9cOgzk3Lv+u2gAbtHD9wJlYjf0hhOrYQ7zGSqglJYu86+1cfM+t4xL5YS13bsS+Vq2jJ9XVB2JLZ1JRRcdmNTLMHJAHwwryvVIwzZ4hBqylkH6qet8nrbplvH5uF62kMBT0U2hEXxA6P+j3N7HFqULNMr781USyRSQ2xzGsrYT93RlgwrHCgKDX35RB+JHEfyFfKrqemB7fY9IE8KdSWAe+k3K7eyBp1F2VUIe2f0btbAU/mzl1xEhU+7zemjMxtI0znQ14AJ9BVfrmuZYI+DmYc4ERwXDn5dc2y2CcpVgKPWxNSjraPX/GGYjWKmrXmnic8VZFw8tf0Xcvh5cc0J6ES9yjW7F7ftufu2vreFc+2np3rYGbbzvQMYoybzELHD8p+FYC8Zj4o2oKlYZjvUeNEnEJ0KbYV/E/qAElN3Y9ebWue6lfph2bU1XKWCLlfE2uXVKnTiCoxc/QEAppwsCXiXtbYBWyzlyNJcp1RukV+KCVbd90OQ+Is+cvV6tcfThLfAVGs6rOv0UcI7Afuv06RpduXknYyAQKbdinyswLODGXMNzi8+MWqyoqt/70AaPzk80AB7+rrlScxyf/CLVP3dEwsdtRrhpl98d2jqPnmK6UqVfJi/FtThgFSXisoKa3XwMBq1lIjuoTCYIXhNbhvDcfa2yCHa24CN6sQOqxZLpNI7y/3JN3qwCIxoOHI4dhS73o0yy8S+ypWf50sFJLp7xqMWP19W1J+RxNcnGsW/VqTxZ0DRH8y40vT24PJtBK4kdtaJmsJYIoUNgFX7OjqTrSVOu/Y8sYm042YHupnEJ3mWIq';const _IH='5282d5ba4096fc51185b112d859c70356b6d743e8af989c48c08d42de02637f5';let _src;

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
