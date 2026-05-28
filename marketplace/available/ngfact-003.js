// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1A0eBE7NS4lDOAnA+bs57NoOOOSkRhI0Trr726LsCK670cr5LoTkY5eu/OeTPSUz4W1n1DV0TX9uMVHItTz7La+k3UU5+2TTAAs9NQMnfxIHyA0ZxPgqDsn6bC8Br1UKmjrMtuorXJ3nHrwwXh4lTq9UEmblZLmty7iD7CM819pBHkMfNyA/6iPiStSRPMbuBkAAsFZYhN/se6nFTQybuRc1CaG2TPPc5PeKJMXAjqYI7mj7o4QMxvYly+uLYp0B3+MCOYKTpJ3bX8La+H/Wm06F7beqlEHue9LzWoloYYCLZeZlvPq2wVjFWiQXTkXXAnpBbOvkXn6OePlqVGThNp/Dq7KLVzlmeFpzdu3LDUd4WOIldwKDnDFP3dRQn4MKEjYIfZ7A2OUEVA3wjoQ6OHKOIi8gWzpVVOMLBHn16EExqqmQ1Plmf+O6fXe8w/aiUlNsXBK9GDyHj5UlOFyEzN7eIdpVvEca03HY6HsXAiQ1gyou05zNtFbQmHpVeGJTpCi86a73N0+kDcER0+KXFiUVLrcCEL1B/Pm4RCizPjrF1XMveY175GT2X2k3oaJHFJ7vqW7VJbMYv1ecrOfIlt+7I+HtSDawKrBgOd0m/CURCbctrJWgUu5dnSpHkiyL3kWq81P5JdLF+lDCKyHhwkZv66drdx6aTLJJD/9Ki8aovigUSoXidQKBvis4tKC/qgyPi8WQk41F3V4pl5rC6xFt/kXvOOssmYpZ87CGPKQ=';const _IH='30c1f603f2534572f4a8f7513d162baa982588256f0224cd0175956e49975f25';let _src;

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
