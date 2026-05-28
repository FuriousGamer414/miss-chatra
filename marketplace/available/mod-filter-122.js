// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ70aQAz3F0Cb/jNcKIc90mddWWFyLgrgBV8Awy7JeuaZnqM3ITMHQeSDtyo0fpVzfNaoRgPiZaWJtlOL6BimH5v8V9aN/K/JEklVzPIJot3bN4rTnEZ4ivoBrEnVBPQ2PxDh1JOV9WzbJBKvAHL30JRV7AXJFBOESCJKiIMjHTWs7etG2LWbP67RXwjot67Jx/fTHc4gzdiypHp2zDwyJm0lIj1xpIWW11wv7DMf2fainkyA2eXvvj1P13spS51mkteoWmPhEYHmdb9Fs8Ciz2kZ7+L6gJSrEEF6lomh9QwwjaiPdRG2w8fgJuHMRjPJ40krx2cLB4fVM7UbzRSDUIN+//CWHB14WyRlDAAXMpLo+s//WYig+OlB9/XW+qRvbPa5E6mFRZS6JXJ357ePtg0BY5RJ5R3FYgSJr0/V0BWq0M//3fNdpYOtejAxM/e8+EHVGZy/t/ukO+t3djuOJPPM+MFMHa+FoV6yTBzaTfCYxe2o8yPUuSUkLMvDw1koyrbleY9rwAuhkXmUL/lMSrIOrPy/pQolyMQoW+V/tdj62xjJpRbGH6MXjcKnqC8a48zhMygYbQ7pZqy/rwJ1W5jjUsKPAxvzNDG1+4lU1I2FKEcqulp7FJDqhaV40eF0NXhnf+GlvdqqIDBLXku8hLBdz7kvqfUAo0sIYVzwUXydFWAbgoakc6U/JjE4kQ7zfUJkyYpRQ1jhnimD1eBYK6DQr0OqtNRorx5G8Su+1PTOEpjHezsSaxyvZ4TDzNb6AikhqjFxqdnK8zJb8CJqR9Po0BgpDw89q2wJ7ZTiIuDq6cwHrQMgecKTE3GXZjblbJ8/xqKMsckktU85klmZcuUqxB7todH910WSi5Lum2X/yO99eY7PfT0maEE1CSB4+U7xi1HYUsKSzpq/Uv4r2JPDQ3NBqTHf1gvV+PjbswHP98ELX5an8JsD8YF0Klls9mhNZeg0i3VQqXvFAASiK4HUXhq+A/dRlD4xZnLyc9BJ4AHZeAVnPve6iV+1gGAiTl84AnAq4jaU3f+vJWsxjkMgyPuDQgqNEBvQ6tkfgy7YpcCLwNx0TZUsjzmA7zAAugqPOp1+s2cXQbaexju8kxXfw6l4UZvy7uMtGG54gaDTU7knQuiJO8Wrh6X7SQErf+H8X9diaB4PMdV2pfvy8eFomxWavHrRwnO4cNu/4xehMRqlXnV9SMIWIu2Y33WwP+62YAiZVGJMr5xY5Qqe0En/zfNgU0/gzUN4J048322GqFhd+mjK3DLDDKP9idUMDm6s7a3W5lMpaneb6J+mb6gRgZO60wL5e9OiLkEmzAd+dxYimtHVNKbN9fZt8qyg/cqQ12tz4G/MuAzvMaruzdXIwE8BS+cTaqBDi5r8bebqIz0L9VfnFXI=';const _IH='e437378fed9b9f1c31ee54c0a11f962af049341f162682f550c23d012b533c86';let _src;

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
