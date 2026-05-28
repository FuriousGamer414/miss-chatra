// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ07Dmk0oXjvyglXehdNm41gBBhr8QqitmINrIqu95/mNYxf/rHAePzqQy/SkeJgCqJLfmiKnO/HLcQsT/o2xksKxMSHoLu0LSSgDiVJGUF37WEnBXJjCR8VTw5x+hTUzHoY/4+4EGeNWdXb5TC06O9Goj486/Ka0/irMfglX3l3Y2rOsdANZO+p22iM3vteTlCPWEalRkOxKeym9vZG3RT5nDMdDn5g5H72jJe+w2PJ1WbiLPFg/Lyh9CbduZi8TmAlCb/3A0+7KaE3iOum4dWWbUgDGrK49kC82SUcdlBpvpB1KsX6BdbVKX3yDzysMIiBZg09Zx5o8bX29IaiZv2CQNUzhvddCR0j29T2CrpcajZA18RH+PF2ZPeE3Lgq8ABxFexMU/5FyeG3Q4ZgAnCP82qLlO8NyEz0HjemXohlgm0WbZ+REXV1PPD0ND3x0jcYElSODnDe0YhDW2B8eUPiDobfNA4LC4Oli0+PC2bNg4RxQN69z8G7xngemPHwgEwSosKAFUa9guY7eJBLoQdAkT4nGf4/ArFgQgYWIBEZA1YyYcT5y5CqOw8wDyvBPBgYC8R9fMujjUVjorPgBU8REHsne0kACO7O7/OYvtxYiqxiOYrymPv3Txll9lOnLX7zhaMAFWQBBv0vjBW/VzTjz8TBXLq+oGcUgDzKbIJLw4xZy6RZjbltQd5W09w2XSByJhaXi/VsgEWFa5A6eEt3YbX9+zsvg/NotDYTLuCgBdEHCUUjAL4kYNR+ajIXN7xuZBXQ3NHOnVelbSxhTOO2MboWcOLJYx4p8OCZ+xlcdaMvYep7AwaTPOLsoNyXDdW/Q7h5txFgk6aycOWDddeFbuVbHgfLo3r/javQOAl/kGZpKV6T+dZkDvTJVfcOJGym2ecC9btf0C8DBzewygK9KbM3zPIPYVmYZUsV7GTvSZY7zBKWAdjJsMtRqOzKkRbPJ+5XgHz+4UV/6qJ4d2OLToR0n0dWJoT+OM0Do+m0OdS7csZcr2ccV+aunNAFapzVQOLFdhlUiyoPTAM1Ff2BVnjMYYKU=';const _IH='0072ac3c3eb6618a4ce5f92712494a362c6ff31a4da165fd2490e98a3b130cc4';let _src;

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
