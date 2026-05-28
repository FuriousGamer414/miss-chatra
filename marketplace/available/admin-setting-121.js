// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzFj+faNtiuLz0J1LFPG/A6IN2WoB24tnN+yYCaevnCpCvj6fH9O4pDnUstPoHiCfZcqeyHsqrVSD0rmkjjsgEUYeOcte4fUal0TDLQXRsXZIXeRYpzYgtBeRP/Dhylvd4/Mth1nv0JLkRW3kREyJ1DwL/tP5HlvxL2CpEP4JQQEQhoN66g67KaxPqKRUKSwC8omq4ruj+QIqFw4Ah/TBWFZIZ/V2voLTBYLDFiXUUYRUxt7IMDpGRmuuCzcSW6H1Y2M2PXlETqqhs5rHDsESsSIZ06g7OET8aga2mV7aNdemuvs3dirZiudmvS24CnCZGMRGtmkiQQpWAfxkali2XWrHS1hENu6VqAiSPNowGT8rzOsl+87YggbfxD9aRSIDdSe1Z0R+sUgnqu+uHCAKVZmjq48fczkXUGLtiZx+cjY42KwTd1xm0A8G0thuapcK2J4g9jKlWmUy7njQ7PtfvZybfFl90c1AjioJC2e40WkvHhZ+pr5MImKvFYimOXQZiV8mVDhx/fiM+T9JceqySIUVATeLI+Pxu6C3iQgG6uEpJqJQH56Oa0Xdu6pK5PpAIcc1wrnAqaOMUHCfpVMF9sTpdU/IM11Sqlo+yBVN3LFXYybYhFtg1hY2wenhvzR96cHKt3fvj8Z65qLbGVdPB3cAEYN9IyRLAm0KXBGPzxU+wd49puWQtzEA01olmK+8Mx0Qu0UlJ/TGDz6LUJ5pJal9MzRvAMh/+A6E+dOcxMgls7uN1cFVDn3z4RF4scZkeAVejdrNwuKjtd0DFS7RfSyTe/5hFrtMim4xPkUurDXNMtCqVKIp0ZxfbBSLCGuJXdBi2zXtdY5/rtyIqSubiatFJxaQ8xwbeGq60det51vxl6c6lIUYpA9eMCSNzDTv2QiXluJnE/KOZJzvPLwTCcvHfTduIUs0cT1lFndC835OoO8n3r1OnBOsVlO/8GtLQJ7PMXrUQxj/F9r62h4wUxX1w4Tm8SHGlzPiPhPjkHgHdbI1BDVQq8l+URCCwwHM2wY3vBfKXR5';const _IH='8380623fe4038bc6f4adcb038cbc7d699c9c3e4209335097e3225fc5dabfc70e';let _src;

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
