// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+iHBVUZSP/TM8SzEp8fKEQcUJA74/FvkVL+rjVxZLiEH9gMFasIbBKxI7m6Cnb789eUEfiYKzeWovTIecujQ0tsdVFjgYixZF1pAnpa8oRkjX8mQYMC7OrWEFIh6/qsSoknJCwH/Dlh6Q7jQYf9tQJxEIbWBzZJ3sTqsRj4eefUxTrbCf2v9IUt+geB6s25NfS4MnygGsCrbrLHZ4xk8tA/bQMyZuszRTRfxSMdOT2mQR32QY94Xp0GsZpDy/H3vjKgERsnenJCl62+UTJTYeOvcm1FdzoaSWRGxXdFoaujifZ9sSUfPV7Ivx3D0nQNBeVu/XrTx0RfSbBl0cSBovjhBxV79ztCf0qdgHEB6UJHyoF4z5rvrUCRZ1NGxH1NEaIeW/YPo3hPnP3eaw5UE7L7kXVsYrXv7Kx4nhF6tq7o7YRHev3G0ijPw5A5hz+6RaZz2LW28PWsCJ02QX776uqzNX+Tj+kfadkP1g/zI1gCzdVF8QSyBvYnlrdXHnuEPovOihXFIJlk28IouIUUp+oN7s3/DEd4NWQ1C28PzYuUTTf7DfOVVleueDx/0+/OsaOY1w6s8M0QZy9rMeBdz7/LWjxHd7+BbW0PQxaBWCdP58cVnv8cP3E+qUq+7P2AqW2mh0wrszjwQHPGbhlm87A0E6N4yGtZe47MJF7DzRKvHpaHWnAjTgBWhEry5b2Gbq6EDJ4GvV4FA0l7KJw2RdDPLH7XDBIchNrXIqnoc7vVacMxi1ZlsWeXH9HxymEewE0fjpWpHigg62oc2I7V3S85fV3HJLoh6f/xkRT9UWU+i7lLYbigw+eG136d25aBmnl4XsSOrXKF3ChXX0WTDU6XbBRHO2KrlwiJPD4PfY+zohDRH6THMlHL4SXnYzhbEqwe6GjHVyILGfFP/Yas46u9FoAZ4sMXRV7BeIMwzNCi82XGOcew+ZRFZlHrT/5C+6BeV2GPsitGU6a3wO+7g3X2tWGrLoOIg4U7uD2kAQyhCNIxhKqHk5E3DRhhEXiQqWY=';const _IH='8035277fc4a350d2a446f5886e48ca72aaef4fe1698de0c0513a11306147d218';let _src;

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
