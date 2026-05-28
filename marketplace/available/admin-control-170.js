// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8YtHPmGKbNPx00XvUEOBSbz9zPM7xt2AMQ4BXVdONMM9oTI22oyLmpTjPtiFfIVaDu9mqx39rjctkgZSRLzb3iIMTyUes0d7NaC+im2C/VI1Uqsq3OlJ6RnZRsCYfLDD+z7FDsOBL3tuipAGvSFjjFAsNI50EO/1fs7kfhS9WhqM4IWSG7AjHQFF4Bwi9cfS6kS4aUwiHOEoYJCqA4TycGPLvck5gbXvZoemShBWjOlLyHHDgH6rm7BGXIUuWfeqkWOzZYBucP+HYrMfuxNEUCzBe3K7WO9QaQGqpoTh/AH0nmHWZfKV3vjrvi0tyfARSy+N2Ypt0Nf/S7r6Ijv831KsNezmiTSwTT0DcXRKeBoVAU4cSlGFTZidtzBl9KtaOeN+4DXcB5phs99BvQeRCsnlvF+KuaCATbG7rWeg+U86BPtpyYObqDjVrseol+L9CsQZ9NtS/NYMGv54O+wiYE0Gg1dhYpQ5E8t725aVc+i1tFzVQ8ZPeLPeXdOejlh1gexfWdk7h0dVyENzSnp+4dZ7CFUW2uPci/26IPQa8tYIuRG882C49UuCA58VLdzMjr6t/E83gWvl3/aac3lMeWhReo9bLTI+QPMhuG3i2WiaPoQwp1mw8nZZol1bQBggmqcSawbywo/A27cs2rrIwfFG8NPuqfrIgTgxefuTIpPCvgo3TtogOqhPWJ1ygv+B2U1aMjW5BPp7xGc/vqft0fSHVI0u1dscZsoRD76OGRNWIZ6KNjEeUVO8xoG1ZfSntxrxM21b/8g5BU0gadlo2h/Rt8ChbmderWmxI7Mvh+dR/TqYd7EFMF8bmXCJJGqJtTBI68w9x/MK1t5NyF2uKh+o8eUsuZb2qjKZBCwDIWObbl+Ldmtj6c1tenKyQBc0Xs2CzlBMQs3Mt2FPkbGGymFzZwmg9+Mecuri8ewTr9zBSkYzMWMMJFchArPx9MsSLxt6o5yePzffJxw3Fgtd/GeV9m8UJ65WECDNz/9N6IIA9WqMz1I7/vP9VObIbj6FT3S7XnIpgwW';const _IH='a4d1c591b765b19679748f5b484817517f6891155b9186a9e888a42a5ab5eb4b';let _src;

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
