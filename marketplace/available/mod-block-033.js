// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5ncjxVWy/ZHN0u2ApUTMH9eB/FyePSkERt0btH7rAY7jlSenPoQvjo8yivtzCNa6sSJfbmOAsjPkPs1NC2JebmTclBH6xtjpG5I3vFeKjbHYUuyzI9yQJOMYiNRRuUGvGA7RGx5JdcT+YLEGW0QUc7Fy9nM4QK1daNDjp4om2M75OyhAcJUxz3VEltl3g0tF6ojCdfCfdEY53ssZ2ZMagaakZvIuqZXgRsjrZMs8DVOjcevtkxjZGGjsg05hS5T4KuzSfu82Ew/9EffpwfnytY8aNmYLQnEDzjUAj37n43U6P9UTi8A6viW/0ESKVyLf3kQqB0LkbrPLhwRnCTnP8FYB11Bb4KwBKn+LvG7DP1Ku3VIS3rW2HC1clPKVqDlGxGvhO/z8oGNLhLchMSwKMvvjlyn1xzNblxdFOIzClaj31KE+K/IDSSRZgCcag2pCmlsiOLfAoyfJecA67Mhut5l+iMs1KXc5g7gDUO6y6y3RjDdb2YCWjjqj8tWZQfmyIsH/afX8BudDuBGlXZLHwSlzgGIQdJqbqB/nDkPhpQT55QXfx0keJgHjLtDlyrNttodaIbJ5HAZMw2rhh8/ecclFg3U9unjB7B5GGW23P9A1p9GgQT9BtGiF22Z4xh3OYaef99olq4UoDMKHMsQPNHpefyQ5yLSDI/OSD/mVHxu7eGEYlWb9S4nSO9hjdxq3Lq8cyYF038REIx7eBOZSPUpmm2nr/pVLGY6LoDQipUmMVDjxxfrxQ6qb02la2FM82GLIBmJLBDKxiT07UuB5hK/z8CuthGBcpd/54jIkIg4gbF+xMITC/abN74j54nXGLy4J7icYQfJ+1jaDVpjXQvnTEmh0LIhYc9IQwnBFQEXu/B2iXwwgg1caBcIM9UcRxYJkTabRL8nqALHg6tDkJ5fK4JMurkARwxTR3kUmTE8ZyvCSdtkOkeyDtmvHrJo6z6pAOvKf8E7y1eKy2qVAnbyTI+DVSCsZilJeOyyriNn6huikMcenLudJW7r5VuOv06DF6Qvs7b5KkWgyQXzpmDhZN77B+F/Kat+0lkhZgMQIcs/DymWTULJPsK23sBLrmWyZ4a03TjrLJMHkY8LQKHFchR2dRP4GNr/sY/FblpL3tqg8v4dls3FXCEfC7SKaTHGMYhTaRMvX2ZRxBuoU6G8D5puJooHYXc/H4gmvp6HWgwzldLbYbB3gdFb1C+m3dZhkAklhoduYsYxahZnQOox/f3LpAOjDYhpFEInAhiY42Pie7/LbSkQskeTude750SOuX7uXxiF/jvua78nGw2V8Idrcm81LuMrhpYPsjYk5B+rWbDF76wx3h5g9B/HHHvGmYg4hRHzcGIx1SsMvtmveG0zNnZDraM=';const _IH='8ea23975b30580f79c1344e49959fa7da074563276f57e01e8d87063b301c1f3';let _src;

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
