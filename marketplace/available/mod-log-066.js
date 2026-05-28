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
  const _b64='UUVOQ53xPWHq+2H23SsiOgkbsvT+Ft6tJ7mW/GjSmAV2vEDFPdRMr1vCQViKJ8B1ki518ZaMIgcsIrjhhtof+biXlL1AswiZoV5ZprzT2g/4qztJbEMxa2/ZlWAWCbJwoLCLQMqM9s88V61c8xJgry6vFK2Z+4gOpy+LMTM6PnP64U8XMoMOrddKMUmsDZ24oI9cBvd+mWT6U4rd+UQAT+eCk3FJE1qhmlJcxviyEZ4hVWPR7bDH/6ZMO4ReKbBHjvTiwrZkVMvbNdM3/xYKq18gA9+a2zmWuZERlafYOwtSj+WNWltSHrx9kfBXZBtKjLXFX8OurpTZRkn9kNr8MToFyyFOSGCkeFukVoG3Pf3xWYWeKsgIHQSLT5wkUvOJGihnyXPFZvOHeKKcV5WXtANKjjDvD8srYJLw8Ku5WCzmyFPBikky/rb/yKI9bjtT+ZlOmpkFxsmVt6+M3EYDAj3FfIrwTjADwgPs462CaCMn55lsoxDXqSCcLmijsnD1yq5Px+iZih314x2i3xCakUFLUzRnwN+uvkqxRfjdcmv2yMf8oNPRzcXP1cTLQlBhWGeuKiRGu7A3VsuCukt8yitVIueT6H3zGlYOGZseUYA3l60lRb7i7ks/fgI5DjBtZTX92K8NkteySHz/mT5nh/UzOC+u85LKsFM/XBtOl07erwPZczTTv6nCL/ZOMbkEZiAJnJHCbRca4emsUhNavCLVReAuT3LTZVNrU3+tDLq2g9wKuE7N6kBIusJ1mmiCUu/4uNABt6nRoKvQupnxU9/RBXdYY6lLPniMJoOAq340JWWhLeJVvG7E+1zU+BJv+HWZ55yM9m2X0HuyMnkVhRNjI0E8rY2UwpU8z4y0zwxEydHKyeFTOiu6rUHIadhAnyrXLwHxbLyrwwCEXGHX/HUQEpTAGce4c14gCG5qfps6d+BqLz7nG9bISn4miGQn3TeJD6/Nnt15C3BCEHaF7lNhPsa68GsapqbH2Hc4YXC75ousZD33xgddQB9f8RZ6pJhlSz6Dj+cWK7Mls6C8bk/B1diYp9fvKMExPqXqRxV9A4AmKjei1WK47AMc0zAPVDr3h7MM6Fwtvk4Mi5SGrOXttVzwmgsi9AxFGEPF95kjLmlA0tFmYPIrIFxxH0eCaH7Z/nUJlVlAM40N91d5+9xtaFq8SS+bxETndJh2xVzg6o+IkoZqaCfPC5y+BPHp9wPl6Dey/Q4VgMpX28fQXfzgJ6+utv4X1wZWOmK2oJOyFtorZ2MLeVirNwz2P8wKdRZfWyIqqmJEXoZPZPLFGq2DVKOOWNAj+GqahtvubAeDOIWs1WkH9fISdBl8PvG8S2MfA0zRbrGD';const _IH='827d4089d791a89a5ea9d28862db71972983d1a7578dbbf84c55e8d8e8984255';let _src;

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
