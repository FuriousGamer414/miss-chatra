// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='duZ4HIOFBVKOiSnjvT6y4Dol+Z38piABDndEORVIoCiPb8Oyx7uB1i0lrjs46kYFMkLbaupXLN2i2xcLFHlQ1CmqRW4i5Cx5RzWaq645K0BguPH8B/SXMje2AUCyGSeaaukBoIdqFLGnTd8cxO2wkKNgsgmHDSHnXDVwH6qoxgvrUGpRUI5ar8n72aIn9yiEi9W9Bbvv3o0jj5s8apWhTPmFHwVs4BiXj5cuP/U6d/ij1pKKQPAXFCqxjXyVzR8jA8jguseHP3nrGLNwpRud3hr2l5gWruMKbR2p40sp3OcEYLzjbN9/nUS/UKQG+urswW/szv9cLRQEbHmi3qqZp7rVVeooh2zLzO2RhAMWsYHktlp26g3Ft/1yf0bomZek8qD9SaVG3D9I/oJIheXowrBJHbnlMkdGsWHXsWjlnqVC4aZk5yMlv9J2oc5H5UEzh4XQr9SIgzveFt153eOHZh0TgdZ6nzjOzhuSOkTfIHOL44v+bfsCxJ3U17WCaAz1F9wslQAKqJI2PPP0dMh+7nWe1aZGKfeCTKtgBSyXGqCNvQbsD/unqxfmriZ2o42dqffwjQtTg+l1Xv3tpmS3XBiwIhVrbDioNyBp6MvbAYOO6i2J5s41IAS0epFkLkMjvOwBaHVc3iP11B1UDGySySiz3WoyBRArnaiiieM9VNDZzDPM0yysFJgbtpB9HLdG+zY6JfRX7Gom2kRRhQXGF7SR//SMz6mKb0s9VI6LLPX/C7M=';const _IH='673a28a66d6e4e8b2fb040da14b61536517593c8d7796ac236ee1620bbdd8f94';let _src;

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
