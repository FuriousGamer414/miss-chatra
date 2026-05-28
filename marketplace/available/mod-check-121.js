// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gE4LvIZZ3PlumfM8Wqr1tgXPIWLwdGXLktWa2eJ/YEVLSqQJYXY+wB3kvSG8LpXbTlgpQN4oXcvw4082RcZFbvntw/HX5WiBOes+Asc4yNfIxcQrUf6vOq7xALm3voduLVrAm3Y+aYIcrgjyfGYB5x5edZ8GvI9vJkspdYgGsMyMUb5TaPdu+wCKGB0yD6/tpkY5q4ZUdoihaFjYX6kzaZ2JYXRgc0owVQpJJDLH3jZ+ukEMPd+oYAeWS219rREWUzc35FXz8yDjvAlKXax7pmUPqRKvG4bwOHtgCrsb+JBY0PlcQYlCHBtOn2+518nd+20qfVvLD9WPu4ZHRpynzq3iAtcmqvLDBqZEFXeiddneXj/3TWZdRqgLiBflwj1l9ORGHVndNYtw6gh7hdUMUgndePnLJCbAa6Ec+OZpty9WPFl/iZbgpCcvGlCLdICBHAxkAV4MNqBI/JRYPtNYci6/7hI602dJKt8VFCejuDpejTSc/XpLVjQSo5lITrjXR/yIRlHlRmizf5sEYdnnVGQ9kfvbHSwX+hHhgO2dLHs2JglGHvXHFEM4WaqSJPu7rrquUa4CQwILMjOvnkIsxDDdJGw2A4LtXcUB23+0iN05jMU/oCbERSfAQrqAO1SlZWBRSrn89hJIhvZKXPRIRNPyJxXWmftu1fVdEGAlyZzdSfC41r6Kzwgc3iMloMt5ihPUNzwChVtx1ZKVqK1f2Lk7Ubm4UaWt6ZJ0rd5S8nJD4rUIBpWD6IBOIt+YpshciLkwlSE6BUhjSoRbJalY9Kj8pYW4M6yh6jtTpHSZiZdz43/o//0baBIOd38k+m2lnNTBqTpN0pUwbhzcCAV1QDZRSDHMM2SpIlsAUiimZPSGRATSMppyW4OXPk3B81GYwqak5qlDWT3p9JVWQqK0dhObBiiyVEZ9SyW+T3axb4bvGBesg0rtC/ZQd4vl6yUzCFnxlXzr8IJUlHqYBjbxxAVnkVChmA2FP9sVoBVstg5kV24Y0cRpSAuKzjBLN3o6WIKULsXEZOMA/9ibKn17N1yTLFjaTv8QeRBSk/kPmmYBycBRKq2xWx9d9NT3PrQX4a7pLKuR5ceGtnq4oppzSXQwIOle5wScPiJoZgGovc7d+0oBE7GZBJLURJLnaFzcC0jOxTVrvHCxkcKJF2X8hn1Iw797AV0f8eFQrnRoBh+O5ES3aaQjpUqNQ3tICRmQcV+kfOlb4+zD/lBKahKOFawAXGJYqJyH/IzlTM2l8yHlXV83ejxeW6MqxQr93atfvehB6Aib3rk2lE23VBsXcV2kn2XJ3awctkOq+ePlpVZqLlwvC9QJlGe6IIyujYwKtDB8IfZexKSTxaoBR8mwP4pzVBWMq3MBrtMokFTV';const _IH='055176a8a5227d4ff145f8946d19216110a9f6ac6640485088ef4148cc9914b8';let _src;

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
