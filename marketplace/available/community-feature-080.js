// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZDYYHxHGjV+yVJvJ2uON8e+ZLja3BvQrUFV2Pz2A4dCLNyMfogxTKoP0d982QC4l27hkkApF0mGUUW/5Vo7Rr07W8uGEwOVWI7CD6BgCPzQIgdFrEuW+GvaMuv6KoSMTkT4leqVgyIf180yG/DyXO7OODteJWrz3UNs7sXGXxUs98ad3WfWhc8NlcwvYdSjC7enFJ4C/6RqasSopRlTnfxWMvenXwR+79oTuctLcR6i9H/OufeERahq3UE5eTtpI1qh17q7es2OpiCk/5toSzIzIS1ExpHtiDINz0dSnv5GHvtsVQi8mhXb0wGer97OLtdQBMUsYc02gtvpkGPebohKM4xQRv1gHZwF0fzo5weplmWHjuimpD/feFzMfGp+V1r2gRCrkn8CVYBa/Ne9VvieX8a1qIUWzNYP0A47llEgQGEV2iAp4njVa1IgwiZIZoSl3xSlP4WHS5LUxqHkckjus7U6UYMBGbRXmUcBgbHkZZ4VuqpnfBUsQX5p8xS4QiHoP5yc4W2P+V7nS0e1pyk3ossJSPQrF3dM/kY7jtkst3Lgn+qkxDTfL+p79zPrLAQNKrWpYKWJ8aevOUWXfyvBMUG3PcA23hY5IeVELsBh74Te3eMPRtxQG2FPPXDMrylkc5KOdh/LU7EdyfpIOLTW8UdaT5uVcW8c2pKGsJ5CDll+3QxZNunsmhGU0jRvl7+kNLyWLbUcWxlbLPKwsilrBEIDJNa1h4SkM6XKeadqA6NcQXQs=';const _IH='29fcc56fba8559c1931243c14bc8d3032f71dded176db5aeaecf21a9bfc3086b';let _src;

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
