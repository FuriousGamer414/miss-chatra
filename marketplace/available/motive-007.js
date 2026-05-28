// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9PFsm5QuhfWw3uerTSA6oPxTyLKw/3D+68UgQ3rEbFxnVKacHsxuW1+RTECwvZ/UH3a95hu7bR8sN9ru7maMwBkhijQIZP0Chhr+ayIIzyxLCNsh8RAMFkYxozy5svfj2zAR9HCX3WsAFFEwKm0D+wxGTlwDLcgWOGfCI3dtaDhkBwIEyKejIzFrFcvtYmW+PksP2mmsis4hEfhQmfu8smjbEIP1Be9lU3BQeSih7J0zilBlJ1Ul42d/oQI3i9FRlVBEU1PPadlpdes/6xmAv4+LIwg+zNaH9kjA7+w58n+KtTiD2jHUlCpx6TxOrWBc+GyRoJ8HTqYNNx7SgxzreWISU6zD1vWgMURM8U9i3ygFzknOouv5Ekg2fN8/KoVCGTMHjR+hj3lCNIxDh7A3sPvkWDkidhzWqSEf21ykirrtGhVsh7+grCwYUqUBHRws+OIz6KJ3mb2seaIW6RzfaZRc6Z0s8ZRksC5+WhOkrXCG7fg7ydufep7mBAsTD2oVFivsoFhLhyQDP0MCshD8cLBKJJD13NVdjSi48i1hE4WzWKGuLb8cxErwoJTm5YANILqSvGIL1/moXnE3j4HXMWN9hHmnaW+QsSujM4fUiae271GvO3o1vzDEULO746+nyuAHpVZ7IW+0/lQywhxRbAEdwwTUqg/5MWT0BxISG9Z0BtpDuujEd1jhsVTOXmxFpQhNF7kyttYfVhus3m2Ov+PbGSYBoJsaUmUPpJf3cedfWoAW0LdVE0+/87vKm27i6JvyFc5E9PhDE4F3uvE3OO0LOWoVoCVJ3Rg091B/HIYFNT8P82mr+n1x1AMCY9Ft3uQ2FIEahTQf2Pw9thiAsbNY5go2rRRnBhkawWN2XsqLrd8Fxvp0PdHh9VdjM2I/OpP6NbZbKk1KanitfDljKhgPnaxX2HJkF073XjpQK7ObdRjXDpYmxRaGYraHu8CqhTX+7u/DKHqCFh2pIe1IHyIW3sp0aMaU8fruSklfaogb9nlATq7F5DEYo2W+h8RluaB2Fr9yLL8lJo77bBC';const _IH='144146f686b7c388d9e6b54b45605b55821a3cf131a3f875c2304254f25cf54b';let _src;

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
