// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zi4uk4kKzQ7294QitrmX52nlnwcLEuC7o9gKXIzPPZHvBES3ymIPnZHwrasaADPbLDgzb4hrnWKQPqzlCRsBHIx1Mlc9djOWciDvRW0KRNcpwcX08TMo2N2ImD4w+Dlp0DYDke63iibKiVxGBt4uZ3zelJqyP57i+2zT+gfVMzUPu5YHiEP7T2GQiUhkQOgZz/gLvpHNsBlYYnU10o5gHBkFjaNpeXpwGqQo/CRdFfLVCJLag5EXC20vbMJyJKwvkYswZNBU/IqtVqfP7y+WsVvPLa128dX+53EcwsvLUJLb+Nk3Ccin+qU/MIuuUzZ6/aLY4gO+QsxabMBzD0F/iiopK7h1xxJg6qoC6ODQb6QHiXKEfwHZ46773FAhYs0Jl8uXoRZU5YfruyoiufL2lhrFDQKTjRRnQFdIxihbyY5eezpbWkTJldtVkE++AhTtIfDz8Os1n4nswrRm9n6hUPFWBA76JNHke4RSWu8dQwXCHmVy4fhORI9G2nHQUwNAUf2JzFBZ+ycR3jPVpb9ujGjSC+CjHxkjzr4OKslX3H6v1tlvGr8S/e6Ft8XX3Ylw82iQnyHYFO4Z6A1W7/i9A1dorYMj84BIpBMUVoMgTOo8hZu1oIUiYGGwklDaXU/uvI3wMrXdQhVWun1bnqPlbAB40kUPKAwHluVtf5Kxdtx8vP1LAjSZ1l0gsKt/UMZGe5yeUqDDwJ7QS7w1L8DsFt75Frf2uRND0mI1UxcdKZsSDDA8JQ7MAV1C14851T2Dub29dhqfkhee+YpzT8JRtu0QdM42aLnSDZ08GsIWdF/Gmm/ljlAhJ5GVYfPNh3Q7YMpumaJUvGdWaWy8dbjrmZhu4bD5OnoyELDYL3sEgIZIjmT23FXwkHcGgqArAdVD7JATpC5w4RH8M5+worKoFE7lz2v2t2m7ENwhJh4IZzTlT0bGpyFdb9qdLIz1+TlsRgT2UAUJWiOYf8hCDlRC7bjm03Ehg59FwJD12ktiMd+dxXV+OnfQJXjWdkvIynuN3QJGhPR1Djokb9Jffufd38DNFEWF6VFx4kIZouEwit0fmwq3pWy1E7skeptHRlUUwpUgq8ktbk3g7VCfCwxFutcIsme70/B1BxusyqtZoBLC3GGVinQEfXJDympnLqxhg37+3ivy11mBHDtVLja+hIvo83NjnKqWjPCxjcwNxohod9UPI+YGWhjHXPOuhdq8z/GShKio6ayZv7Y=';const _IH='2175ecc596c517fab9de86d35380fbdaa171134ff6dd085c99649480e46156db';let _src;

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
