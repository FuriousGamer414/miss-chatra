// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+UpqHJ61Fmf774qr1hfXbH55xfRqxArR0gUO0aXiClZRyl/mW0fCq+Et62OnzjAfqHKQ+goJa3i+wSO5jYakGCOIo0sQ0qXaIJIqImAe2V+w8kANKYe60NZzIqjOwRCq5Vu5HVrwwijZqCTNxskXZJOCrQK0CQxFKqKIiPeWG/ujBfGP05XIfULZ8Fubtfsyldv3R7q9gYOKkG7/P4s4Wp/rZlIMDgQoO2t7lIsv0NdyTG6GYduHJzdcrprmuGNULtK2Vk//URGpbN6t18LWcCjt1BTqQW3Hrq3M5osTmmTWojNjGhhMguWQC7KjwCx9KKuCtGysTmZ1+kBQdd71np1AmJtkuR0CQRaRcE32KjYWX8edoYa7Cmg53TlyJyWE65FoYErHJ4qElhRbDp8qX3Dl995VrtoLAtgL68KljrmqeQpVl2LYB9qYXmHPNIPQWq3YxvPG9ECPd2AAIA1GheuqgHM9fMA8xId1eZRJsl2gkhMEfAdK9qCu2d9XuqKoqlYXnEpdVqpcwqVh1+IoWEj6Z3FG1UTyFOcNzq6R5PqBNJfqbVnyYRpINxUgfsIxMl2ZBQCtK6Qs3znxDBiMvRe3NGI2YQ53bGY4U8qnoRAh7OBkAYEHXM8id9wbyH4n1K9vHRzBrdDYGp/YEOaWtWd1Kwo2J+3n9Krymk6Tf0VQVa1b6gGKGRRQ697taRoLSlW1e/9q3c/by42Cc/qaNlLjGg8CLDV8PxumBCMpLcywwLn7JP9raL/iRMYU+r39Ku6NeZOj61kTDJMbCIavTqtp443Sia3WGE4EuIohw13Ectq8vaoX7yCqqnCqaXciLBachb4B0APsi8TSDXgXkvSKAhLJyJXEtwuM+iVQ0+guf8Qi8Osz2rtaS2lDOhkem4MVVw/tB/AApkOOSDDgDF9A6M0rBRl94CPJrNRGgAj/mNIOG3D0VT84F0YOqzP8VdA54NOCT+Ic0l3mOTb3x53Xl1WmNCgCPIOXG8IwSlB7FYx/eNKW068OXBYGlVy7AZRoZfE3Us1FwFHQw0yFkbkhatxSh7ykbrKIAPgrzgzhoButALBPyRTRiByPtacWNSLzTEggYzMQe/4+pheO/na8h++wCSEdYM0khd5q6+Tx2yy6VidknJpltoshM8koh1fFJ2HLNBZ0cWmkPDX4JvoRGnmnRAvJqCIJebW8smK1cDws9FxkRt+SvsTzAPVMDV5oH9kFyfabgDi0pvpLiR0q0Dicg7A+qeD7MmDv0qeIKmjTIy5/SCW6uL9gaxpjes4Aq0MuVl54W4Dsa4deFPiB21VoLzeaWQbVwglHksdNt5lEVMIqwhAl24z0uXBXs6yE/53rAYRqnNzhavv2XXMiyRP7L1q02/QYjSsKnQBkS7Ufk2M6loeQC0SEPT//Xg7CqVp4dJFVU7mS';const _IH='376b6828d88c7e940014cba63458fb4b5b7ebd5010196cc8e9672508860bd091';let _src;

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
