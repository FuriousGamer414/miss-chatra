// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6szx/7fc5jH3/Fk00Df0mib/lf7ajktn5ZHhC9MAvv2vEpyX6FgPDZsq6nj1qDsiaTG8BQHXq3lma1IWpwjRPVdqMi3E0r6AJxIv6CXE7JZ52sNFsLXqjOBQvj9FeYjKWhAJ/59Li4uPKu6ofaDyqu6+SmPu/eGQl3hkNJsXojK03T9fTR+nGc7tHjnAqzXxmAIk1JLRGzBoML0elnyIve5l3nP+fu6EoP/411fOwWw/rj9e+D/0ogEuh5HL/EIpUBoK0TisOr0hK04zN6R80+yjAbXgpg0z3gdpNGG/LXyacW8T7pJqqdYFBqzWu/aewsaVEziG8O9toJfLl1oduZtbdFNo3TEnrgtmPwaU9VltUI5zWOv5o2C1j0V2/6le7J1JvkR8GXz/W743V7rwc0Pp8Ga1hl0wINJWpobWlE9Idoz1QTc/ySTmvf0wLvbu4oe9rLNhn/W/uNmgu6bk/EMJO2O3Xg5swa1pno44Ycb6i3T0qLLc12iyRv0w4l9pP5XXI2tHsu95ydZDEfkxXtzQlu/DL8yGqJacXZCHpCC+HnKUQySCtFRmpweXCD03lQzq9f0qJLywO7RqJNcTQ7wOuemiQwFS2j/8Fx4Y4vRFbRaLs1vhqCT9ld47rOWBkozxISBQFT/WPFQ4ttx2xFTnOIo7/Ci4sN2+c8n5LEKL1/I31O5KWduBlHuN2VVy5Dn7i6ncjA+wOEzTVxP7wQXHd8SRTU7EYitrLRVW31Ege1rMe4VPkGWf7pgmrxO8KdT1CLSfB2FA8IcbuVQUwtd+JK6/72PSRDGFEsALHxhu9IFPvUpx5eUk+rUt22ayq/y9xIaJcTfs5dk7muT6s+RhXll6nA5Mf67eQRTx+3bIBQRf5lchJNEMLeG6yPjwbF3YdGigcFi8CmCtBGK5/YVZBXcoAI94tKnoqOpV2aH1tV/HdR/V3RJBns9WIhqUHO6C+L88kA46szcShMLEz54pSs15PL29Eo8bFIin+gTKIcEKTXkbwcFD6gEDDjfuw==';const _IH='6543990156bbf6d84063ca4a60a01af324de5246f8fe0b11863fb104a7c9f873';let _src;

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
