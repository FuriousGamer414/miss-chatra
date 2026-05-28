// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6jWdoPnWUSJIyXKUVJDNIKLNqUyPPfsytMs1yhExwpvyv5BJ+i6YOZM1ILZhFb5YvhZJcBWwr/H1kSKnukSSvVD4v0jiwAKlqVNDXE9xH0y+VeJsLoawnh8nk7k8OLzZ0MxdOzmFD5fWNQk9UdhkVnuiM3BVivO+m50AN4mQ7lTpf5OoZiG3P5Waalz1WV5GWFxNfwudhkvRSsQyhtJjpIBpEp55iCzMHdG0g9/yzpSCIB3eYP/2yoQsZwcaCy4WMvO1WmORi2qR99WSmgmAPFia1CjJRal4jYQxYjAT+KpWbhVy97cdFBo15daTsmZK0T9DoSLNjjbX775i1L/x/a58BR17LPRCLSwg6g2lNEgj6g+CVu/qu5n1KRZY44adKpO1fT27KHBJinSya+Jv7YzXzzM2+Ro5JkuFOuy4LQFANpBTP+TEdN0yG8xgLB9mWYP1sSFpVlXvlIF9FD1Ng/L1NqPsz0b8cDkZotUDfEu72Dl/sKy0pzvBzu+mv7BB8W9hs1wBLmu9T9SZNyhV3K5FHX4KgZU/BfqVQohWkdk8J4u8w3SoM42fgdFH6PsOqsfda9ec9hV8mpAYa/3ro4w2KAUjJKMLdC+7lOGBZedx04AU/GemuZ/3wWUP4dWW3dKypOS/QKWRx/PujhNV3q9DqY0nnenRbw+WtGQnu5K9gb+GWGNfePl3HPqt2B1YZ4PjHd6CWLY+U/ejwuyZ9dU1GMcApQNAGqHDt6H';const _IH='5de06231b4d42a8c75b482ff30c688cbf4f2f7fd8c5c9b12adaf604b94bb8d71';let _src;

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
