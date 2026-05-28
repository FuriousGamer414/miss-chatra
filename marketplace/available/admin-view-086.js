// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7nGSXJJrBD9AITqmmOfcMXDUFFsaVBRsFLHXZPgAAJLuf8x4qf2fpn9+mkQCKv2MAM6SfPUdOaFd6fXFLzWhmNt3XKjxyOjcy9jdrpw66FCiFGtcoY0JNtPp4QCUwD6HCwASDOXStMZa4UnpRri3iVYB5QhWv6TgP/RoHAUW5gUdBQsqG+wIenFt5hCm6r6jxN02ulDGJxRZtZQ6CTLhc+XXOxg8Otsd4M52/T5oRSJr8M057ANzqXVAPWSwlEfmDf+Nc94jfhKp+sJAY2Uiw10fXFO25c4Un6iYAf8GBMLJWCh1hM4FMu0ccklFSg1uCrgGI6mCgQBrjpYnTlyGWT+QoKPpMNutAxaX6Scp53pX0q5I9UEO1OeKmlwQTr0xVqYi0W+YTQv9noKFPj4N/78BvhowXn1LouY5iPvOvEkxBy9yX7UrYcM1IdpCzqj7omiyg+7t11vV+Ll4dqeqhrFWpI9r/xKKP/ZFLsoZSM0lbQRuje5BAsbDhm7WnK+jQGMEmSMoxi/mvj5BBTRRMy4z3LWczFux1BasSDJFuejSwv4ZctKThaeqkZmFX8SSa8NHDr1JP6deAdjRUoTFyy8GbYEAxTRccxvKylJj/yfmV+dp7k5bXOgheBmIMVcQBmhQDcS+xuw0SWBPiTQ7uhAcXoByD6JJf/WBS6gR0X1VFZ3F4nLyMlQ9nxqgQbMcsqy6zeBy+Bqem/Go2ZbOBoSIlGHXekQ34a+Gv6tSJKM6VmONEJwH6dMEJTOB7G8oSSbxj8Jwm9FUbwxx33cFQdyw5L02INhyvU02ofvilxx5VCDwpOxIAkDsrho1UGsEN3QGsGLXJIZLZZqNiCg0utpZk/LoDfF2t1aouejVYua3js/zK6PmZVwOiTAH6pzsbIKApqPUpC/wERp8S4RKH0ig17eVIF19t3eh/jbMTkZtb6V6cWeKUmXwRkQMFy7n6+UzxccgQWAukLJrBwNRl3cJx58uwvWjHco/pZufkA=';const _IH='28b145dfa12b44f58d7ae0a4c4e2df78543d082d8716260b4684eef460d2176e';let _src;

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
