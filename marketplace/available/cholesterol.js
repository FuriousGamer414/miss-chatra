// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8GFoh+Ingzj0+sH/e2xgXdB0gyfIZmkeSWgguuDt6mQAHmyBms8no7XZFPNMlkjTrd52Zr2X06kH+a9oQ0eJQ4APno5cUbOc94sB2kcSC0qRvNf3OStqIvHMFpy7lTeFma65sC20VRuPWixBIvlfeNkg6L/KgX4qg1zN7ihIRrtg2c156uAjD5m4C7kcc+x1OC5l60uLDKCddJHceotcZr24rwFp2KnkjjcTiSeMkQtiBYezb/t7UmLrzgL2MX8XbNx53qsq0BpC7wBThAF0r4B4AnUdYmfIxcBWBxKs5eu3zvW2dgM6XHhTexyW5hjqKyMhk5R5/OpBEaw5/FI0TkAmmLWD/5llg8KCP7n7vT9O8GY6bSmtacqOM8HbRqXq1U7eTYi/T3oCnyhiJj6NTdb34VdGUCA7AH0j6rgQBZZbIzXvXG+bdNrA8cL4HB5ccoUtS9k1GeSj+wFosZBwrmieZA/3PvfTB3C0rTBLbEtS5e430rXanbeDysTSU33revoh7zXDFkpkJGAJ0rA5imU8LC1kKxuc1CBtTRZCsmSEKhWoDpndNyYPgI0v6KdfOikhm/QEIJiBI2VDqZOrPTDu3lyPZbFxfPFDPTp4Y3AlyhoKWJjwkkyTi9lMw0vdS4PhY0C7Cy/6ZSxWlVqw5lhq3CuvSxyhSjZZ7bb0xd2WPhGQsJjBwc1L+srz3CE+7sBd/XNAeiV9TRQ4uLhKitwDLHBIdVKGMgFh9rikMq+zvGZjsYWsJu+Zea6fGYLuihY3xnk+NmaEyFZdgJ0hlD+7Hg2rh5XwHfpEYOKvp115vvKEdQRw0jNyHKTiBZjcIanuyMI0sLJaW87cx8Xxbikb86rk/I6fomGMpiNEQhJFVlTP1Ww656SAjb0v/fn/Y2hptFnRhvPeruzk6F1ClAARpzmYR+hxEoQ7x5u267Km9ohPMghTIoDzuPzTf6R3UARUOaWYILyfs9j0VCSnz/7eQ+W01lsd5ECD7AGTHp+kqCwDiWyKNQX/3lUj8K1Vf/1izCMIBGPrf6EWOrFe6D9qApaDvYg6WbJp6W81WaUu1xNpRxP61UdEJ1/VM8SCfepVG4NHl9PNtWnKxlc8Nf/K6md9aGS31Xg/54/+zT8shVmMjbg8ZvTKQUNO1fUCWNtYZit8QzuOHwiB2b093fhgt3y28wQZjrQeJdb4WT88HjmN3+uj6buM9USxruQTb3U0beEOBC8KkN7';const _IH='ecc2e5b4a2e9361f1e686df9466c6586315f9d4368786b8e0475965ff767f341';let _src;

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
