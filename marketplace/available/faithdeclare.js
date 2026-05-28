// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yzWraJC26GY7u6YfF3gt/HT0PaUK6A6+17wP3dxHETMshMncO427Q9J4KkcD2zkHx5AZUy9AI6PxKj3bxaZiPiPFDgv4qjM1xdEE4X6kJHK1OlNwRde0Rr9q+Gvy+tyHd/nW+pixmYSQjBpNfSEyKySHECxoe2LA35duA39/Z53OrUUabTtBSH6DRCd5/5BnJ/Pi4jh3X7T1M/HOw6UypDLcL3KlCOPxoWeCs5xiFGCsGIjKt5Z6pY2ZRZtU/kfvbBCQ40KC4dNTjZ90rGanwPJyHvdOpOKkd+gYiw3t3o6R0+S7UkdAmcSfG0doNsXEefbIp9LYqi3djkhwfA75tnezaoqOO1E2qFZu5Y7qYzEafuvnEGlA8OUb/uQoMYj1cMhrV8++eCq6A7PD1bOoX8OiUq6gqBQs9FeNCtT8Ah5z7X4rSixdjh2B2tv1St5Y1kkCcrftklo3vMa4xX6irepv4pl77uG24elB9pQzbtC3mOyl/TWXKF4InUOa+V8MUbB3WyjBJ/XP1+UKNchl/gqTkPKDt2y4tHiKQxKYjzwgZzGjokHM8JcYcqln3+4dWBFJsZmRbQpj2t3esQlvTu9t90758AFSUobO3aIxMKj8clQHFJ5bZRNiX4bPnVPNLYV6o5PpacSF08GsKwL4+OSzncKhAYgh2D1fQJk9enFTVwqxViw4hk6/1knm4ASFTAHzHLlcjfxLFUiuKkwfb/DSQVEvMlmuDBVGbpaguv0Q92XJCLgVtausJpHCUSMfGxWcHPmUBaSpv/yIvTTtK0hY7jEYkFURX5DijubpvV4HDJpG49727etAgoo4yD2fUsu1fhmkQJY4gS5iVWn8/mn0CLA/xGtKGeCpIgUHWS8J/kt8FXCBYHs998whwFJtxZlunVtuoBTSG9Vqi8u316CTT5i+EIocHvjef5vMnOJvqivVRHlqiii6B8LvEJxnUQZFFyPp3uX7o4evQ7CVkO9pzwqoH0FWYjfb+5hWS7TugyfcBbmqs+ue9o7W/Ra9SDSC0q/Vd1Seb+bW/jyJo2qI6a1JN4hYQmCnvpZqln9U3LQCRzJcw6lUmC0UfzboyqDC3zTJHG8UEWi5puiBCCjISwXRqjIGKVprCGd0ojw5tfu6iyhMCVDZk51HqbyHUmFNa92vf4bXsFKOVRXyiURUbb06aurUunyA+wqUf2T7HLdetjXPi5+G+thcWRvyqGlgvXc+';const _IH='7832a0f2aec0859aa0c5965263f7f34da5d04bd6a588e18daed20537c23eba72';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
