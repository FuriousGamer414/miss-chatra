// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sd9PJdh12r3Fm9sfWHFRjl2M0m4nw2qk0NDrqXXhC1Lhw29TZvTQvDRdF8WvEnK3rlzZLzBKqwY5HDw0viotCh3NQLAnNOOqfsuW9rT4vk0xRCOLAnoFAIG/7+MD287o4TjdLGQ5EMvfEemVJ2XOZyDviemkKr3dEVzKrY8ztlBENKqk+1tuMYzQhisHzJ8kFJ6op9SKt+QQUl4ZPgsTjXOvo6YOBuKmpJ1wGA/eb2gKH+Al0u9PGjxeX6F2uqBh7zPAkFH/bp9wWr0F9Wjnc9xnHtI8vt97z6scI3d7CwYKfKEWa+xW+b8FbBVMzwwpvMUoCqQMqtcqwiBRhs8mZjFtK4SmaKNoHXKWNoI3mZtMjpdUsStiVwFFV49x/KgeCefr7OY1zCSzeI6EMlch9XU0ER+lv/WwmWorForGr3fhBO4pbWbDk7FDqciqjHsSWrYJZXhaf+ivok1ebyXItnHPuVCm6gZ+vHhzMGYxLu7cU83sw8jg8sADWrKHScwr2FeauwemvYUTqa7lcfuHYe3Vuh7gHo2yx4saQUyIL9NfyOUPCt27vy2NnbgT9LIsIKIPOE4CxslUHKSM2ML2ItEnXD4fjzLSkdv6Cc0m03t6thF/2I+aDxUNn7sVy5PdxwMSrNuvgz8afYY7/rZA2TM7zuziThSGCqFaU/piglxZFeTaoK4Q9N4sEJMohxHmWdNWxDo7T3GmlsfYJlOok/0S6bn7j7znEKH+Za2+lAVm/3M=';const _IH='981749900bee010277d2f8361735a2855b3ab7919196be116a57a4eee14cc7d1';let _src;

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
