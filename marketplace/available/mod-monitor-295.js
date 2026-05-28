// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyn0MWJluQ8GytNhDOyjRFJnXXnceGHyhzTw/lJTW1U9SyKpM0J0qFOQYgjSH7QStDxkEwL9goHd6jPvLYmqg0suzCFbUC4fYwJcajcvi1RbNkkmY5CRZCootUtqhkgf2ybnQKJ5tR1jA+foe0HXbgtgnY68SFe2gkV/WxSLlFaE8euJ2GZQr3m728l0hV/xOo5HC353PIDbtI4mfAwSf7Kbxay4GWwV6gh5LmCFsUzwWsSdrr0+vRGytiNtz+y3FYvv1fpL0js8lgyZAhqrrvFCSc2gwuSCqQF7iny5zYy1vWLZb1KzXyZF8NSZkTISRKEn6Fb+p6ig5suqrrVJe/ejZ1keCvL2u/4b7EneumlLmaaUd3a9Jh8OlEhxMPoKbcjPXtxlklBNQMr6u/kVAVO7GUb/EpqvySRxa+LMZVYIwVfLbbzYNc/HfWpgMGPVBV4GLGXZfKbR4hCl13tlNJz9qFEi3MfVWLy6AvaoIs9blRUwa5bJJB2+1S4FWAf7WHY3C0gqZM8v+NQI8pxZ40c65JIMpDh7E+D3FG4EHJCy6UhKXd2i/u3+oTK0oDA/QvzwAS+1bahx6gL+ej6DC/Y8bj4t344Zvgfo1lU5TrLUbWSumaY1DNX6YPgqHKrGBr15L1MajMPjNJLsjEvQJtIIF01KNfY1jKO515DTQq6bjJ0ElhN6CiBxpnAheNbwDjQrdZN2kBA/gbrc0YTNY/kFfxGxOrXyCRe9qIew3zxgEm0Lf+TMGe6f2/MGEgGCEY6EzFcmE9p3LxAGl/3ATEvQyjyDtUGc7E0rB0489NcQQTL/w3jBe4DxZX7z708pjsKQNu0lGpALi8mMj0sshjzeViC3hkAEDZhnTE/pf5m/uBtBY9RP75HAXxqjXYxsI33WY+NyZ5jLEbO/CQoBwdBPGc3r03AyqyOTu4bA+SDwEMZlkZdPm4Itmrhm60hpHm0ysM+6eEAYlaIsiFPxFvO5zdK0QHSW7D35qKqF68UajxzUpGrs71yoielkoWe5pegEf7cmnKlpA7Y1iA6X6GMnDrwRNL1ZixuLjxQTKKe9Qd5VWVnDwxG3i9IpobYPqJDU1lUg/tLjoY8GQQwulynZ9xBxcA184PnMZDfvwu0BsxJj1CGLhfwEGJrizYHFS89toUR6DGbRqXmemC8PAjSAhJiWv/ElnbYvQ87wEm4r+zqG4RIsNgYrrMkktBxUgFoTZSf84oHuPfUW9GtE0ZJ26ab3zWNO/mlh2YzMv/48FSc5InzO0IO5wlFBBKh2FAwrBE9W578Zzt044x9QGUZDeTJgVZknMk4wFhe8pqjia02YdpON7X43epRxn0F8cCrtMWFe+eKkYej+05NXVnM+8NuI689Cs4V+Gk3anJ4MRZxyPTz1QJimIwsCzroCR3aE';const _IH='5f6a5247eab35c27338cc86bd4da6406115c80640f92ecf66569b582c8973248';let _src;

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
