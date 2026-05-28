// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ63qZjggqBQhZWmnCfcuNWR8g+MBzxgXn2FcOkgItkWzbAwiK5umRJgC9ir7Qw4jh+rJzlmzT1sJ2heghmhKNrRvsSyWUfXma2vOgvOtcUARonD84dPp8qY2bluQbWF7JpeZa9CYHLm1i3XrCkffieuG5QSWlh42Ec2ruE70Tye2gqbz43KpTbRIAiAlCINOdJ1dE5w1jjKC2gSAz72UrvhXRllIOhaMSSiAjqGPNbCV014Bvvuy1N4G3OgxtsyMp0ar3v/AXh48z7yMzz0WgVx0HTlSaVRot26T6qWi9xGILRMBF5bWR4yerpI1btzzLkpXTV1Gs5dfMg9tbOV/f2dcgXp8ky6laBwlxadXmENrRz4ogY48xcIOFx/+aLdIGk4Lq2bjNDk14cahI8F9f12PofLd7eE303p/JtZh2O7x+Jn2OXfklFyDoZ+KXgJ4mREY9Yu4ka6Xbf461sEUYFUwoaAdZii5qsWsUscIdcc7GdKbfK6rvVErogMJ/kNljquZGnuu5+9kB2uWomIpAbmGfc/239q+faywfAS5hPwSoO14qYWc0Srd5hMAfuqU3VYgK3e8jmtUuriRdt7wtD0lshYt9khA9u4LWKpbqDHAybejZFTgaagdsO9ux3CpTPOBRCMdrxaiXHVSaPWyMeM+AHPU2iaKjdFURYqwa7iCUO6dOLF/BN5Z5RaWIpcrVOywVkNja7GXDpQ1BB+xfFja3QYESENLXlmLL9hqU2JG4zRBMowiu1WWYNqdGhlEmW9+PnwjIslPdHbPfcz3FpplYxFZilN7Y5ZYYw1fX57BZ6x4oMZzDVsQDK5esJyri+gBqUcKy10Icj1PV+XTMkKHxmrJmPjwOiA7dtLjEHnMXlNhFj2bgsE6UI3iE1orUSHZKYdP21nekGjo4qHVZ9qQaOIrnLXaWcpkV0soP7hLaZBogs/29N7hqfCYnk5clIXT2SWZVwmF13B5jeHwPaegVZ1ovZ4Ljsl5Y2PiW0D2WiZghHMjce8R/5Uxgj6SLoRJgcfzoktwO9UNtGIiMFEI94PIGT5r9juVWV2kllyoLMQBdbhzUYyxWuKyeOuG0REKUwiKqnKn/K5j2l2etJnQ2oiZFJE77WY3Gwv5297XARTl1inDyPcnih8AYzmtZ2YtBkzc5bVvwGjIwSX2x/0nQDPZVgN3La+TMxRa5gFB1Iwjo7RKbxN7lgQXfIFuKFapu+IG6jIVxPWE7c7ZzRrl7eePZuoJY570nmKzAhQZizYda3CM+oAfNCfAjftnV97pC29rDyW5g7Mp7u9z4p6hlEeFeD/s7I+dmiXOKwMwXtANBkT+TOAVPNydD+GBwAuOgA1WRp+/9LFt851mjufClMyD4nhJOm9rC0+Kbx+tltS6bCsyLKIygPwC5yrgjPjFFqHe8O8=';const _IH='1a07289c38c1a7668ad20a7607639845a8132141db05ac9eb0113ad674e30f29';let _src;

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
