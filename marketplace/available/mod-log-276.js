// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4ZaJjLxvXOsIInR5sThbNbtUhF4dy2GZ1RlPVuBknQph3Yqb+7O1Zc/4NKg1d2zYPsGRgDuTCHy7tQgGkoJNgKaEU/r7D/uflI+7E22CnoUIQWYG7ulHbqG3jUU5VKbZIiv5+0jXm7K7PexOumMGSog5QVn/6eO5rAexpBqmABylEyYqVBEtsL5Qw5DaGLvUbZeK95yAB+O23y3G2h7qcbE9vQuiOR1P/LC1zoQL8NsNWMkC4xcdRKxENzKlB0fb/xeK7VTbCedKcTa1CPc7IGUPfv3Lc8vh+Y8DrCclLVXq5ATGrQI0zrywO3bQtqz51a+pDf3D1JsU/i3nzEVWQLf52zOm0Y69/ElLhTTX/GvwuTP9a4dYCPzBWQCz9JFBYR/DodHG/eQYgu0tzx1H/89Vqev1bgTq37hBVHWsgdTMQykD0mCbP79s45VMK0/A0E2Fw3zuhPvL6/+3RAo7S6m9kecR/3dKioPVxAPbDiXHy0/vi+SuAYZ4kwG27YoetaMe5f4luMPDuH799VNQuYoZue/r3D9bWsigQtUZQrpy0C1g0LgMCYC3hRaiJTjvo+2ihBEtRo0FZ6z1UrnH6mne3qLCezTLN+xljAqFzShjhQTVEkc2c7kUp3x1z3kBVouAhSYRCpuEhfZ/HXtJfWANPt555X95OYfMMswDHMm6ajixma7ojl1Jrke68HsHekmBahDMnFIXz176K0rEISbyA6kqiWRSXPQFYDLoFVCK6joaNp7GQNSdjgUj4AIn3eXbAyDtAkIdlrg0ZVsVf2R9nogI83MLohKjHoyyxw1lsOXVpDmZ69wsXKpxqBPKatKyIaMdJbjhNf+WkVsnYflD+JJ4BaS0YjQLEXxm/KYCbkyNxieeFolW8GDACw9Qh8ccCKVkreJz3n641cK/ovBpVGwt9HvOQ5sCoOjN9SS+NN98yFfZV45MPomVpFf+8lhvzwtA01yxzzTRU+/FSDjX2sWamEHejt3gK1fTY7wfsOSpMymb2uFJjudYBbsBw4Jp86TNp9Tws4U0BkhdOFeZmjV7NpiqD8cz8GO48wj4abJCn7yuRiMw6fAFWETLsHyaIzVIfnUsTfAaUO71J+9+U30lNPN3eiFq49GETcKxl6XUpYeyPA9uM2EXCU32Sonqt0mkbU1IT2ihizvbTq1NiraM7oiOq+GHtkEroeyu3Euc8if2HLeS2lraBwk/DP7TBi29xMi3KDfMdXrdxegArH0Mtxg2zJNEo8b5P3E8fIWyb0evX8VM1pKGRcATR74cEJQAjuD60fgDAZAvW6SakS3PWbTODyvKn0xAIp+mpnnfzDLGMEp6yKPEEK43llRygH7A4mDAMA==';const _IH='ed9c4cec3ddd1fe969e61f32247a4376efa91fda8a7052c3bc2763146b8640bc';let _src;

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
