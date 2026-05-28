// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0aBaPCY0WTlTqp1ni+ogaZ996oTDMT6XMMJRYCL7pXAzpxBBF9/HZ3W+oHWNm4D3vV/oK9jmtluWpnRSvizMnx8pMzBgDPKWyssWwx5aelAgKENydRSuzfteHGtA5A7gmLktIiavYT/4aNMBhYmfm7ADn8Xp3kEu6h+KQhEDYL6KRz1fchhm7zpC/FhqbkQmSRBvIzMTZbmmvURd58qt6Ogz9MExkfleSdLiUaIZlQcmRV2CQBbg72rOopSb82otOITdR+u1rbgUrNKhuHr9VcVTDBuyPAlyLwYXm/cfFAX/Y1HvRuPsGhzNm7rHL0QUs3qkAUqWVAAiBv4Ql/827O9OfZMgDxHz1RNK7BS549JLnj/suwvUlA06ZuZtWH1FlfKSxQ77GjXKYgd48xmbY5ahCETs5Ze1nmyfby/VZPSMu8/Jze+dSbEBp7+HjRDBJxmZw3ZqIyQAVwBgCB8SoxrSaE046dfomNWI52y/dyWun2LtNraJ5DurwyXLx+0rcQhp29DwfFDr6gySOEzLV3Cb9aCJaTJSyMUi/xsOEcGz98mVHLSRu0qIFroqwyoeWzJmvGw1ryjPXm3pUAPG+ZWBA17i1+W6PWMw5hYNOhU6jai15gHnzpCnspIZWrS7ENbzx1DAfR3NS/Da9K4RcGe8GSuHMx12Ep2dT+fDyxXI2SXMUKx0sio1lg7DZj+OJs5Ghofg24ESsmqFcHVR0hGDxCNykPI/h17RieC4ginpa4522Ous0YxUZ6+fcyk/cSf6SFzWT09RVtu972gXPGc7NSlwYL63MhC/ERoWSI/AM6DaKOdjFKsmtYQJbrJc6Js8EpEllx/fSjVzRAv+VTHYgHIIdDAhcMqbKFaCiqJHVQ9ASUwIQIzjAybpBe2XM/3vwrbJQk6bCd1j3H8rFHYXnUWreb25eB/dqKRvXh+XkAFfNcKKNIoAx+aLMaB1xH1Po1FSQofXT4mCUFnHIedXZGRgqpAzsRPX1+r/YZAFK4deJYMzTNTGtNAJNa+RLvSuAWxsLWHf5AN2+66Wxx605Ahphwe40PSgkeofv785afQWHgEn05SfJ0NduW66EpNK0zaSsG7NL2S043WXdAvJh2X/muHacCC+zppDfo2KSnBuqMDx4wiEcZK5yeohAUj5/vmR+buAeY7RyXeePh/U3yFhxnY44cRMaNGae1lHs3XXp3iFp619/hRdehY0TY2JAHRcgW4rbOcedgzD6bBXoHW4q0Sv1kuDvKzREg3D8Fds2dIEjQH8ZtyvFMnOh292mIKpQZWZlG/WHmREZprSwgiPGoTV6s4faUMSikX92c98rRM0+ZNEW2e5gDzmfA/wq+auZw/QdVCy5Zq37GNUXq9DRIgeotB5/9qhIhZT2cUdKtkvRVPe8WIGjZ01tARaDJlQjm11sE3Yxd8jItwGZwmSUfjqjZsPWbAiO2SAD/du3VUDYtdBPSUTTS3B9p6Atqnc4h5waNgbfTUiSTrBqFdj86J86EyXSGCFek1k/0QcAtQvIqk4Y5POxzv6OI1NegmYKvQREhhK4L0gSc3B9FMTOI+u5VEAySpanaU9+dEq8JekqkttUc5hLzBqVZV81CuhDRP/hyMlQ==';const _IH='087cf3381a1ddc706dd4f26c2e8d1d96a853121cc7695a28d94baedbad641dfc';let _src;

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
