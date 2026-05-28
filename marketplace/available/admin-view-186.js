// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tZgxRlzjbV2hPxZqQqy2TYvtj5O3Ov5WXeQsQA4/a61iFVbHDf9QqYPsWdTZvhoalYHrCIa15Yx20Ocb50Ccmz/u/tMF16YN6gMJIYcAO08YydAXnNCdcgg+kcgEb6sp+hgQ53BLm+IP/jLNEH0KJOpkQeRgmGN2yX7IeLrzG5p10eB1uhCROJ2Ml+JX1MFO+XZ0HJEIlb3NY1DMPNQ+rboJpKfTSjBMh0uYnrIvwlyeeH4Deo8se3MKyhtKWgoQOAeqV1Tv1cV2i+ZPPLsdvJAEWsMjUhAj2ZHjrtdnS/9tKIJ6lYxFbpSVj0JILuw2YlNLUAaEvz2oV0XwSkkTPTxftIcGVvoIse64l6gm9XMiqKML+GfKlkX8/lJANHNKt+WC6WQ/lWlagpZ7b/bbTA5FvzSLV7823Z2mXHEx7kBHDwavS9+3PzfdByAEdudNHxZ8DIZuIXiUXK4SxXiTt6Gi63f2WseUuiVp12DE24c7LukABy43a4KVKmwrUPx8EoihjH8s45I8gdmtAFTs6tBhNPcIW1Fr1wK3QT7l3o6itLdNHllJSu2s+4z9oIE5I1V2sTNEWz2s9o1pIAcD2GW0gCOSkXReDyYtOgxVhmWagVXgGoChNKk9RULWjwS66agfYRUL/GnTjBxjQDTp/jhBX+D62zGwhz7yuQ92vYAp4G9HUZZ6u7SQs3MOM+GQbNXBIE1t4i5PTOen1xUnydX3qdMqNni82Bec0jrA+GIHHu7HTQAIme2hbZdsTmNcyOGgWGaPNRAEIzZn4j4HU4c+Mzpem4HkocuMy7e6hkt96gNYb0cOvA4G4f8T1Aym012V3sNg221VrXRChE7IG+vmG38pZ1w1tzUWxz1erzqNKvU5InLuhiLTZ7/F+E/7KCjoObfU0ph3nvkLm8aCJG03J/SyOKWy6uaEZxvdJy+SJ027E058nTDsjRwB5lhTH+TdWYq45xw98nkm3uiVvVYq7EVKnIrcKIAerYQdhUsTQxk=';const _IH='fd27cf9064fa002dce540f2af71a2639968a34f832bb938dcbd4590b800524d9';let _src;

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
