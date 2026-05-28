// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AzUxLQ1lXhF5aH9SHjCyuEkFOZSZfFuRf8CH/Dr02Z+8WCDNzl/ObfYjAQgqEV24gPup2VDNvhccZq520U8KNlWuMQkmu9gywd/z3FMnRyYY8wB6It+252CJekSSLxVCmkmimVeNtl6xeyLFGEn037wdDoWc1iiAl2Kgyf1VHJMVfURlGPDorc8/2tZm9MjfN9S2e3dN/eqrVsvlPUJa97RgkKJg6ckPnfkQLK8+pXNZ8VPoSL6zSj73+s8PUXc+oykd9I73a+e8uJjV9/f/VqxpcQp3xEd9Ik1zybhZI2cI6x7lJ5+TSGpIXwCwsVfvRjo74cN48yNdRrmEDEKW0p1yljH0LlXf+oP+V3U9m5hsDYIYw/YLKMRlmmhZwGKQOTRk9w5vosQXqzyx2F1ZmDHFWkCSTDHqLsBbUYWVX71BXiXpxJl0mIRUoscJ/IM/WJdjHH3y/yYoIltNjQDI5PZaOyvL8x/IBClHRB2wPs+apUp8uC1UkXMPF596YJua6YUf5bqW9gBpN0NDMwttZ/uL0SN16QgZZ7xFOygdGbf0nBGq/A5hbjbdrC1Hl+sK9kwaschRBecB1w8UMUJxKeGr7SmEW9KolZdMTNoyAdFbXrk0kuGQySazYZSVq/SKMZlRSNHX215jqdG7ksWPIJOKwDWcKwyMoE2/77nEsCowiSeRF13fJB4S5QawqjvXWc7tv7L2oOIXKNlmxXlEOrOkTS53zJu+OTmtK4Ts3OfvDaNIGSM=';const _IH='f685691f8783c02b94c25759743c155d0fec2881e7747e3456c82e27bc4c7a64';let _src;

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
