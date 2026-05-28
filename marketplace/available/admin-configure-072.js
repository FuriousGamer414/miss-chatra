// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyExsT6sLTxP72pzaiV6iW8tKkd1jweYNO0foj9540GcWBbXB2n3WqK6RzicIhZwEgoUJHK69Y2yVSwTy2wl0tmo9ICP9uA6uny6h2FSfiFFq1pHJXYimZWwQvjnAIGgRr5FcnG9rokyFbPccDQU5SmiL7kiit8Ptt7OMrtSnth1mnIZBCAOgz5KOaZ0Eui2jnlUoMEUbPvjEVJ1AnXcNiG9San6YI/CmwDkiWrza+A/O+nFHw2hG/PLr69eajujmptz9rJN/tq1vpzIzrfhOxQjt99522xG2BO3FWSeCAkNIcni/fowa8spcyHZ9VTVcf4Nk5anxOJrUobzmjtlJIue0YfewWTz+9qhsFMOw9HZryc7gsUFI8m1FsnnrfHqXPRLX/EBExUDNXipKOvJKO6fx9CystS62g327gCPFG0oYlmvg5AgGP2KrKuDCweyhf7dVUZBC7lZ6ewJEBl8lCzGGReO9TTgU0PeBQYDfwZO7ww4NqYUZoMHBnjuIkkp0r98ygGC6TbtSkHbP7z+dcdPD6gjeQa1nJT5Da7RjzDTeNIqkK/1Sl3xIs4ZNvcWcgx5jLGeg5msIcA9nFjDrkkTsw9Ea/3tG0iDuym5WKQYaMSjY1/MRR//hXR7cFu0DjcipPFLvKwoV8MXOqOrsjwwnTRpsEnIlUBo3CNF4P6oBIkLdEj/LwwYCtCRMfhfovHg9keQVY/+YUuu7cJMNv4adU54pNxJL4sD0nXozXeZAutpGZV+ptm8b4MffXSZq8BfnoOypItH9kAUFT0AeB6DusaCQmoSfOid9Mh4NadmG2oqxej+vUDvB4IUGxilAmV95eYyS4kbcQICMH25QynWoF1JZslQq/0irpLEdvS5Tr5048NcQhIyekIAe2V63dyJI/G3z66rKbEPE2pE2G8++YWF2m14fzFLw8aopsooXvYp/AToMn24V3ekELZMCCrRGliGQ+JDv7FWlYGrhOYHS5id9ViS4/+2nRpHbBGpPbDhS/0HIIgYW9caxIVVVJ5cnScRCi1pEZ42QqtbGUmMpQ==';const _IH='d72ee0af932006fe6de71d3610cef75228d48a40553679d36c5e25da56986a7f';let _src;

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
