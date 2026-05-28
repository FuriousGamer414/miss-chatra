// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxXaaOzaWapT4dkenluKYYieu8S7yePpAANjsq0VFWr743BMfZ5hGTmQyTiLxPDZBc+R47W7+xBdKEPlL+OzRTwTwq/l7AL/olwn3NdjHa/GowU5iMM8Lu959J3L2K57EAmoZ8ZSm+4HX+W2a7MV2kzHrpScD4M7vYtsjoJJv8ZVs8HkdbjMkS5SLW+Zbs0sJ4Im9tMxM60tQhz1je1R/mYMc+qG4+5p9eKClzAxpFP3Fu900Rkj9BSpByHKJnBvhXCIf2xkurjDQBcDrUP/RhqJlVrD+T33ruCP5/VshUE/A02JKryxIfnxdpvr1q0MJr6GuiTINgbl4rIPRicvrT1/DgH7tYccHcDmqn+VXX1B1bjouPhxnbLfuO/FfASYNijDM/aZ6pFye4vMxUnUxDSyRyXgKxyaBSmJUV3iVnKUNYIDH4uhIURmTFkhaArzgUrTFBa1DXor5sAqP2DCuq7Y/PcF7r3XJk9yhQo0meMkCQAupi13HtGMg19pSPIVHJ7GPaRAk1C++/LFa+gTVF0MCbQ9p2tfi9xo+AfAiDqj7mvdC9OukZ+ui6MHyKAi+XPOxYiE4BJLb+JZGrHy/nTIFcTddrWSfVjiOtYoYiU3od/zz8c2hhgRM4oEXFuxE+r9xWHIsTJWBBHqxRFts5hYbIwmLjMfZsGKNutgjz09+6CQQmUYjczu5AtBJq4Sd5Gmdee4mmzafuz5nYYRDGZ+tYJZozCv+lLlVABuEkSt2aHJH7yVI/99PxjZ2SCXCIboFQwMGNe+Lq39jWZdswjPfezBhDbXfbjfPJN/jXUGsLwJ6xoFQoEYQs9ysmFKAg4aRIJQOxfz+eRXYx2+TzmQcNG84vi4dLMTGEPtYxAFN+r9Rdf+RKT2b0BnGNH8McsPmgkKNasa7DEqEU5TtA3DNIEzxIia1CPo9QFIqu/aCfjCIfspELMOfwxr6BAvbdq/eg55rnqLhqvzjq6AB181Cpfp1TcslSwzuLbD/FwCNNMHlylIytRRz7WRAycelG4AUxQZIyh3A13hxvw0yFnhVLLf5TBMWzciOXKPnM6RkHZYdd3JpykPauZvggdzFRWfNrLDuSaYk0q1HMC+RrKpKuV0L/zJzntMEiKV+sHKiLHu0ZpP3uNYamH3oEdzm8r94UL8vWVWaph8tVp8aOSPNEnXEDYj6uKBfPDsvbzwAKMZQi1B9Hb2oMp5EV39vT6D2m1vukTCIwf0E5tarrP5BFDETckrIVdygbVeeH5sgtoN863PV2nI+A/G0oU7dp/HLMK7mKLH7o4mkT7ihNmL39GD4+oJ6tt4eJWEq6CkrnlUBkJM639TQxpGGYLBqketGj7n';const _IH='7dc6c7066cc803a9725f4f2f4f7c2e42a68569ebc4e0921b954da59216f978fa';let _src;

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
