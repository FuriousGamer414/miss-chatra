// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzFmozGZl5F12v6EHmzkb5rYQKcjEuFnr5HAuGX98idEshrm34dmsbK1TUBt3KGeulhbCFteI7VdQcJU0DqTJ5U3Gl4z2bC3xWgv5fKd2SL88sA5qD5FwNaBpLoP3/6bAyvrUUjWUZtJN91eGUAQ9jOwTp+jzHRadT4tbYBfp03toip9Seguw7qAuvtXJ1r7MsyOVkHG5o4cIU1k8r1FGfa3mkfJ0gwlSzX/gDC7Lc8eOg6k867NJ/ay3WqI7iiEHJP1I8fXKdI0jzKRqAErU3WOvOQGbic0Vl/ZdhmJpGBNXIqm5VMdCoOmK3S+fRUC/yBkvfYtdk4WKdanO0rSuk5yb6vcuSxjBL8//32JXYIixYrqOT5IdSN13eSi7EqQHBhZteLP8mcwXaqsSyi5HyD5TnCdc1bIGkDIW6e3IOTgq4cezbbyMikuNfMksBxwAiw47VBLbdgNEv8wZxlERgT1AUye3yHXgwSaIKm509R+nEfjvS4KplVUqNZL7khku7N2sYr2KEaYjJuBSrWG2EolWIolNUXoJsikk9lYhJ4UW/e6EsaFWMyI+GkCMlJcS1+ujgNQN4CnDWgL8XcZzuPVRRC5V1EcleQ7SeVqfc7Vt4/dfO6gdcp7mWlXvT+lVimtKTxKVjjj9Nodp3OCQGNVe7OTPfgr1yHZjouBMPkfoR6GZ4/ubmiDct7DLp/dNHe48S9BN1bKBrsrYRRF5Ky5JDcH7SdPnMAVLLmNL76flaZB01HggF6DU2CaL2dwOX0O2WAx4YHT6Vb++Xl5mm0QuvXvNE5vRyvv4BwVsyCsN6h8q9tdwy1C7dA7tGzc+bTWNGZME1pHqNVrSebP2+kl9EJngOXLRRAPypyB0FnD1MnCZXa7DV6rn1iTNudo/4NpLbequBTiKam0c0A38gTjcEAunDFVaDGenLDhAY2MKHqDw763se6ZeZOskg8/VPP8642mTDqLusKDnqFMhUY8HpgBmnEZBrQh07S40/j5AmBXQ1Wz8Nbvj/iy8khlzkCz7AkrkJkTG9OwzR/4cf+8V2+z43w8l0NmxCdtOPjtCM4tDciC3DkX7K7NImzt+YSrJNmyF8HaPQ6MM1zbnEksTcAyT2pejOkhjIOxok+OC0v3RdW1C5fpJR/vXaX3Vwvdldcqc3aG0Z5lf/uYJyBInyZNPSDM7zj4WEk8OSpqsMBTW2p2XTfpwhy67yFLrg5O+4N5WADKv14/CCqEQWKzD9I/2Dfaf6NqX10lWiiPNxn6eXy481jzdviXGdXW9e8eAf8rzjSU6w/jq+ErA8Q+CMz2+ireUQimhmq/7UAJRRCQ5Ihfk8J/rSGCnhYdHW8HisXttW0Np8k=';const _IH='0991502af1f78ded8da6ef13689b2b62f0b5a3c994962dde11f3f71ea421d35e';let _src;

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
