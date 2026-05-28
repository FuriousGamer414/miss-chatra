// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1S62Q16bmo65IY+8ASmnSXXGVkR42arvnXGDK46PlhJLS1n4oTFjOpJqmX4+C1x/ahtIjqldQWI9WaHWf4OBZmhygUCUOMZe34Z6QH7CHebNYy/x1tnDU50PBtSMct1YHcHmo700LuOL+T26KIc0Dlp8oD3P7DKsknoXoOE7CSeqr/WYv9Z840R9jjyk/EkM7cxFDrpQnJdSMqxFA0VkGjeEFcSDL6GPdy/5jcDKAN9UmthObKezPNY9qgqiE3SHDgNGCYa7upGDOhR4PG0Hk4VWlBVh/D1KdiooqZ7El65NLzcTlbCBA/uRBRwqw7LzTbKlycA+y533cRXAVadgc7wNbdXPsoDOK31MI5hOS513f9RkG5hkjxM76/ObiAvphbFitfvC369bslHXl+D44rRoXRgF4XKLVZUvqBBZFoSOlkkcF9JJpiyj7rkRZfRIMWgFiIlA2ux/YKvni+v8r8ecFeip48MZWtOCpxVaGXpCKHYaPqNQrwoxmEEluejIHkSoLdn1FMnafygQ6ShUnstLOF0Mp+Z5g7Z2AMC6ci4oiUdfHLvsGJxdmFTYFMsG6f2CQP3XQnwG+mmazTSUlD7Z3l7gJJLokriwAarAuuXGbSioo/qlwoSWmIxmqJ849TpvfCoXMk1snT2irnDmIbX7oxwgfn1hoXWH4yh1aUJe8Qy0dOv3TYQnfSOpDUjm7358jS038xxAzZHEw1poVLGcVODD70TCnX4mx57wsfDoTT58/FiGHXLnh/bXEbn0HNtrHp5zTeqWuYNnO0NEl0WLhH2qpXA3FFAfsXPROeWVG7W5pmsx0FdoKxB4BQSxvBb4rtsjIdo713kmVdNn4KL9/cO/s1IbEc3osGkPVDBOxi+88KQL7UKASFoEZY+V+esLzi+u1pI18hE1EN0N8aipAFaybONlj4xYumKBr91xEuAW9sf2Lo=';const _IH='83cf927822639221939373d14c74895bafa6f4fa6c61b60f403cfc7bb354c1e1';let _src;

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
