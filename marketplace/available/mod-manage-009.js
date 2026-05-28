// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6BXR8wBvWb01svq4qJ98ct6J/j+v5tuPgPNGoTxz2agAPAJTuH7K1OmcZWLNTkzS0ejkjyiG47ZJrw8Lt1WqOUIyAXZKEGW0B4+6f9/kZxD0tEtB3JcJHZcDDDLPnf9Nabv0BJ1NtY9DOaM9ED9bTgVInFjlWX/a1WJl2N5Nq6KWR8bszPrgGjbvUz4IgRmZT5TKJnmmrm8cCSVWV8RSCFjHT5H50M/LX9HmBOJ0GShg2S1WH6T+e3m/HKdPKYefZWHmKk/K7w5uwQ+DJDIhZUXB15IKIGBD5v5wkeHUEnHo7u75GXrD7lDUfYT9WEswy4b54giyIdhKe8JJYw4HJL+MEwmcNocEPYbsg+ndvNqy3Qghq/O1Dky2+mxVe38wZQKMiWXhImpGsf48cHaLB7RH6n2WbURDaMACu3mjCM9+SXPpWHrBCbnHGAFLO+2j/tgSR5xmYx1DZlT7MALluuP6+9Dpfh+g3wgGVcVlZKi7Z/bcQnEI0UMnseXzmpz1tK1yfsSGV3kALTvNy2TkVAa+VVjERlBrQERqKlW96ZMYkXH7uAcZBIHy9UQ85au8aHXyV1MLNKwTYwU5pWdqFb/5YSYj4Z9lrBFl/uz9syLrNGwOyWcnDyft0kAlb9d+H4bruZVoa72/6OcAKF8tEr82+qcEyM0//KeX8nPvAynNyzO82e0pTeIjkpUJ+76F27GOJgV7lRrqeq6dnAY8J1dWkQpT5IDw/KIUWdwo2PUCjFcshT4yWcR4kUATD9qWWUxu6Uu0e0NFkWSLxH7NE+rA/SxZvVuwe7IID5GgyyFNP25bEa7b5CycCFcTjf3GSjxXJSQQ3IBUStOtnqiuz8O2nopa9Ek0O5A5TrfCBLzpfUox2J905uGQdvtxXXHILnVsFDo+IigViSJq2m+Ql5fHdT3MdPo29+tlBgNpSoj93x2s7GonPLYTcmyD9jCO4JYmS7j+bETmtxJMczrduxHjygYDg+7oQT41sEdoyxo8mdrFMXB/Wmcsf+ec90UqugcXPQDtRLeAYmCRnoinOaecJpFyELoLrvIbPP/L/EfO76Mr7HasG/lbR6A6/4zsQiVZyaKj2+8kUQZssm8kVEJJV1t0OXpez5x42pVT21UZsZNo94K6aZtKxZTHP+zLS9lgXVW6lvEYue1noDgOGCh5OPPBkrZngQNMtOHVd6p3X/2DRCbnX3kwBEhtPveutknfNX8VZhJlJ23ou8UyqkNkavjyuc4W5K95Mx0x2YlzPO7sY16nRtKzAd6j+Vcpk9Rn57bCYV8BjRBAipe+rkAvgtB6anPpxCNgZtq1b20wlUF/POuu/YBWGd0vUwKraXbavRx00YBJm7XCEbt4w4ypzCwgg/Ut/RNPernew==';const _IH='d1320aacf33becc808e0f9e36514f5351f34233dfa724845e01e72ec284b9e59';let _src;

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
