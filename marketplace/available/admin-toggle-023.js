// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PQCWIz800k2jhjDfxsPjXd/WSA7H4FBxqvMHJyhAEjy5e0I6CTY1C+z6I++uMREeFRpy47TpPziUj6FFwoEhOn6CaBU1boObmSf9B54ktnycSs6yH2LmznlwMWmMHEBy4C2bZXYPvbUbospmju2bZ4uDfPF4RHZSvRpLfDwImuVS8MNmCKNxLHKmNno1MqINAudcC08PzIXXGlx6v8c9r0Uod1cXIBrUcuQDf+bBdEFnqhKBhEFRpboGvLgCckgsnpetyWiE5wuPzbqXNpxF9D+qEl2mCPbfZhz0D6Z4UPm/WkgJ/ExGcJTlRbfTXObg7xfp6TXHfwl7IzXZ+3H0X19dU5z7AbsFyc1ZEw6SzJH9izmVMVLEB02h6Yeczdnflh2XF6mY9gA4Ao/ovZA8EeM+P6QRyCIiV0yS9QaY8+Jetn3Leyae+g9/ZCFi1fdcnocvqTYq2uDwtyWipOZrIFC/6OFBRCBNXDL4p1T0PWfbO4gwITHIYUWMomMEP3wLlsdiRgYT+iFsvdrHr3kgEqDNA26lvbzqf9O2Q5AyS6IdCEPfLGfI1Q6mTQLZ74n0ih1y+vNhCBa1KBxKR4pru61qCp36HxcPnXV7IJQmkJPb5bHYTM7ZH3AmtUqQIczYOXz5yLZoQIBfGqA1LR1bQ9Ke+85Apldn9RirrdW7nAhUO4D8RnDouljVSL/B4o1CpBd+c8n7aj+0WTITlmXbYZ++SDSIiKnF80rj+uLjPr5PWd88An6xgZYoCPiTuj/yVMH5c3hJ/8oo4+MHnwZXHqhxEwfnBEX0H19fNg9uRo5NY76M4CbGZgPsEgLDkSVPj1H/oTYC50VEmHwvd1Lf/VZG78lIMYxgzd57kdSW008D7Jb0/zNe+zHGGDTqAIJxEqeL9Kqj9x8+vv7pHr5v+oSSWj5BDxjdTA9Es8WdMQkvASLUxWZVwtAYnitIcZ/6tanZLEHoi7Ts/YeE8Y+hnAnwUhFkrJ26oEy+sAPGXlJdIzuE5WNlv7Hc5ktn';const _IH='021fc54cc0912fc6f9453e7f8b598f0c9634789ab8683a146706daa314b49761';let _src;

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
