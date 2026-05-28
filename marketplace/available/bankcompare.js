// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Gl2m/IQaZHf7qZr6+Ey3RemaWzTHt9uJpdXEeIAUgTxVvTsqVa3sUtDGWnb0thuesjETMfmYbzh2LJkf5ycFPKIQWlVGVevYFaj1TrfPLV2GeV1li5M9G1TMrP3ToN3R0icoKeVaBWl0pYIKTbVh8qUDsymzLOidg1vLNDvSxiZDrGB0BPNtCBLjDelLPi2o/+swyh3INzPq7hB9DLUtQdZi8/Vfx7VoxqcEQV7dkoZ1zRUmTOLv4iQLL/3no46i6A8gQjDrB9ooLWFeNUb/AxqYN3lSrBz+7DKyvMdVzmW/SaTsgXfyE8adPBRNMSgk9iUE+yh+cs0b+FJWi+obrg88chAH+qSoKK6Q5PnXZtgMh0R02ovhn82bs4KOLAfCwgzCDRPk/uS+1JsbeJekruAnt1XbTkFJpCB9Z/DH/ygRPXWnjT1DlECgLwe7dMpGWqrMQ9xck7K1FCExd/MIL4GoYLGTtPkZNtbUrZj0LwpNr7cPFk8TK0Ky/yb6+2ahnIZAeZnOxGynv5yrw0TWavDEGe+Ii0THDj3exut0UrimIZCsnknOd4QrjUgEzcIS1iE3ten4AIRtFxEybIpWjD+ufjDAYNiqV11iUqJnMS/TNJAIxplNFzAmh0xNmuK1v3VCqZi1uEZbivFMil7o2YSlRDBNqzvsYxnzgwKVVO99STX6Xso8N44S32qfKbldWD8qOo/9k+0YFjnzFaahcVRD9igO6NqgCykL4EHB/cHlwgjruDbgI6WsBy/qmR5sd8CTYMzneayPmUVF9ehalPxIHFF9GRPnOna6DxApIJNPZL/sK26lQOdCWua6VdMdINPNqsINEUJ4Nx0KXTCOknpH/9GaRg5MesLGDqVF1WPU6pGPeBOVArvmPkABInj1GR880k9twC2tlKUuIenRXYKvLGygt+A+4/W5SVDN9L5FAvZvN2iL/2/Rq+ZDP6yWHhuVn6hLwgXByWDaj3JeP3fi3i8NTik5AnhpvctKlBFV8O/uQJx5tkN64uof2SKvylfZHkpkrERqHVEqCMmi5/abU61z8R7xrmqWmARyxzE4p08aoMVZnHwFeMWmmyr6VZcCQ1oZdgyiPDTISIwx5OdF3Xymgna8vcrk6+2ikiNPm4z9BQUahPSe4pSFPQg7VssQB13qj7zgitA7ADbg/aXzXhMFzPYcatsMMwHWUAysTBnqwmch4Q1pG4xqIlktCTSYCM=';const _IH='5fd1c3761027bb05f38368c2bb70d256bff2464148e44c2f1d764c2f7043c2d0';let _src;

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
