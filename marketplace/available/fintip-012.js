// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iCjdfmOoJ3eB+RtqtCI03c3du4v0yRAYj2XloAJ4+PRxhWhmEX9nT53zz7GkGQXVCFd9/kn+4TBAQ1R3UeJdapE2KCyJNfzXgPYy3dE4Z3r3l491t37Jm46CuMXdlzKFtcSP8aKNTEJcPWkaRTE0Qm9SqH9Gdf/zLSD05rJRkUc6kg5ouLARuE/ijusVz1iFQF0fIpawycbPqzueGQV9vcMYnzvaxIsBaiAA8wi1yVscqu6fhhoV0AyrD75qLRiUrYvtlrr0eFEISMOuYYxJkxPpELy/F47i7Ly+eBwZLOHnPyJIdHWYc9aLhZS6Gy9Caqak+W8hu1hRLad3XOtiTaOP8PuUKlbe+ZRf0EtPuwwExVWKlup2iABdyn/k5LZHFskXbE1Bq8Zi5taWgERdS3SS4TVJjVXxQ0ZlQjKLCneRG1hTTN/aUbpR08RXOHmBMi/Mx3Ahzq/Dw9LUrzO7/pTJAFvo1Q9D07EkNNrSZ1fqSTA7g/uE9ues5XMU3pSK/JXnAWokfRU4lzynUSmdrWH7x1iFhxkOm2XHZMOm2wM0kkKmBfoJxmj+Zq28QZ2l6JDbwbVDhPNX7BD3LeWPbj0us5cFGz3t02Ju8ghXYQL3GUzjf7w5y8BGCux3GiWFZXrJwfns2zwoTFP67W9BcULbfdykHEl65XooPPxAR5BFsIeMb163QPomNLdyR2AVJwKIE9f8AVOQmyyKzILLd8mR1wXUnJmY+blaED72ryFgJ43W7hv999Vu5CGObNipnghkcXGlO78cVhVb0UeJ4cuVKEMV01OQ+jKbosmUKy9k2g26StW83q0DiLAeVkrLUZwBWKqEhSMoblMFQKP1c1lhwHpGJ8fcORW50kzTD/i1y38uHUmihIKKEMC+OfUImmbdq5ASXBhXQQX2bq+MTAkmqWHrS9+2VBxDvhWIQP1t5kKYlR3pLuqGtfLbF+Onpd/EhzhR62tiOajtXMi5rXuW74LsgUZ0gTWi0pqVmNPbpqI2sqymje3+Bvk+YTrM2KAVfA4P9BQIsitqVASuFBn87M0H7Ae5a5Davx77lCd8QQ==';const _IH='01891b8c8917af85048500fa908b27b9fd6d1b04e22d781effeba4bc273e6ca3';let _src;

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
