// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QFrXwj3XdGZmLPzGrdReZxiITcgeWakhacxzjBALd60xc2Reil3ENGpBg/5tneacuiTLMmdsetysdfdUyIOWYtm11xPl55dxT2gsEVtcnnEPmISpAyuPe6MxQdnPgRlYbcdtVgIcpHEW+XoY+eayBBePx2eIMYqzJ5zNp4O08OQSt/D5/jd0X+Olgd+eeF5490Bq/jn2L5xyRt6lLdiOkigMfPahzvwG+C7IEYuPAjtXZOK8l50Bzof1dF3zXbKTbH/unIoLYWT0708rBRWXiGX5/r6ObjKD0H/tdNw79bQBzMB95xs73F81GiL32u9PsAu0QhOY9e+Re+s9Sr/hwltmTNScafLKysrFdOw8wO0Fg4hfPfXsb9vnHPzpBU9kvQmfRkeUjf9tHp/MDRNatkTFYItuTlEWP0b+dAVhhKIlx2iGmOo7nI9o5P92WdYOh/lQ+w/PQCJ8BqB/7YlGjEw+rO/vHS1Dfsx95LDPzoiDY0yC1KbGsrMVGi1pNuvI/WPsOCXmJv6A+mYjGorOQjenos+SWd1CsaUAu9Yrkd0G5z5CsYfVT6t9qllMfcsx4gBX/xfykYwQtHu0nqYRJNRRz5rnDqyU/fjW9Nh0/vGpWY4QxE2KIxxn5wAjOSwng1cubUxobhxv4K+jwxsPRs6S1tei+ja5P0Z/QYwPHrIJ+2/ouejKWBku+TcQ6fkAGGmC0PmU0zhpEofFmKz2YIF5QIX+Nd5Ha2HB7vhcdN0+vo+u3XFCfD9D9xxB54iWyTJu/ZKNwB7HhCJ0CA9MiOpA8oNBemLN/RtK4/BsvT/aQepPgiTDGNlz00WsrH8EW2FEy/pOC6SAImlm08T76nBD+MHAnSVaKOHYELCSKO7TkB9zi0sV+4wZUFYo1NneBZTh3vnLTAOxtKPYsnUhGSR7GAJg+q3rX9sDazQfStHLhNqNs9u2hIRZB/vnGsgkiTVUx2l2tKu79ivuKl3AnYlQYrA4oH8hcu9h1p4JvYOqIeWQ/m6PymBqOVEZYO65vzsenNL4Lcknwa5MvcM6gTmNEBVQXArgR2voxDBdM964EsMI7LW+5OFUt6BqH28cIVyfcSXq1Ran6ElfGwdQkMyk8S2bBIZVUHt+Xl/friLBNmMR02o9WINHWhoxC0VA3MNix2DxyC2GfkpXOp2ag+T5zDkm0/T81S0lMwhLGO9lPOANl2K/aUbkIc1ZuihJM5tPq/8K6A==';const _IH='7004839a5396c52f2b3f5f8f14c147d5893015d89cce78944383a227ac4360dd';let _src;

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
