// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyI3V6InkYA3Gam7BwdKSGNR91OpbDRYeCZP91vvK9l4IZHg+sSum8QcIRV27GQAzJwc7CDhFYJ0AyDMGLYtmOm1SjrdYKkH2Hse3gO0zt+0/5+urBze/pvXGPkPZJt4EEyINQQ0+XySr9V38hH4UQzLge8Hihv2clG/Q3PRyVImWsdAulRwH9M3Gjzgqslek4LTO77iEZT3EdA70wkzLjM7nbSIi/06XShp83HSTUH7iAyhwQF2iqRweDmFKJxVjzar/UlcJS8EDi03GnzYDErxP7YZoZljFDEh9uvK10JeAuRWVFy1CKxhXvar4CmjqxonAU174zTEMJF6qKGrad/jRxkzLyRNpnUqzytUy7X2Tfz5HV/u4XdnAs4qRJC831LjvaLfniGwcXEzx71V1yuO/lZVZORefhb+Cu4M93cV8zRb5vQVs027iYJSK8UDwv31ef3xogtl69P+NQ80DBMZLggUEVNUsSbWELIvyWVpTQtWIrTjXLRkleOWAfS92CWXcfvai7mri21Fx+0tuuEooFXHQDtWEp8vLCQmAe4N+ZxZ8aud+mz5t22wtOMChahpicUoDITBE3dIAkCrdXmbDy76Ij61IdqDCKqbHOaKxpaaBaZt52oicEcsAM8qiJgLMI7e4nn8rglToaDSaTAOQceQtZxP11h0oTMTcBHb6WidEtAFE3aZT4bCuZRG79ogi7irycbtdYpfcEQMtgmNnv3kM4Uc6/UdH1rKpCtApgFjxsWTMw7DDa3zIHVtBdWQobOFUAwY82AvPUbOm8SUKmnalxrBzvqH12qjNUUVRvcPdpQucW21O/TObTUQ+cbqQHr02kgbPOiwedSyi+mVPxcdXBJHOzWu0vyO+rgvevYs1OjLtIqKuPMwgGI6wU8pqoZnvI1TKWrPgLz4UeUYh5o6iNhPNDG/zweUDIyhmxBWQkQNQEtB2T3owHBUi7I=';const _IH='45f90e985b03f940ab7ee863eee38fdb07ecc64ff1c1d484f8ba2207a85008ec';let _src;

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
