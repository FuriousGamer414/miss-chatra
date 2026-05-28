// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yPU+cqYmS1EqmUrn1Tlaf2IZfEWQyA30AH22sb6KG+eJKMwecvLAOwwGFezYmgSmyCh2lWguqDK/0G/nzMHkPl4u6M9JuSVHWqIsl+arN+0iTVKVBi7SlE0OqWbE3B4kghy0mdaX41gl0dmuwYHja19H8U6a/VPg41fGhl/nHNw0AdDyqAsuEDYvck2okBjnNKqtf8p+Z+R+/XnV40B+0ohLmEadNGIrJ/bKGCyHCXdLP0naxlnIwgOwp2x3pXqr2wJWcGXdf2HkY2Hpp64Nf1Q+MAOmczNRyVyybMbOUcx3aEQxdyy8ZevQPbzS0Q56RGOzYEMcWMxpbf7S2Lf7xMnkYMpCjlWIYgiy3H9FXJYhqQNV5NTi0IBpqGu/zbK+VTO4t2OTWrJrnknRxvAzv/SwJPePHsd+nw5lpJJsus3sN1o0EcvhXcQD7vBzKQJnAdrDKTYqEqj2V3GmkdDa5LnzpTZh1db7/7yLrJKZv8994rhXpxjo1CdTjLtD6BDhwvUrMXIcjIf6ZvPElrOfdWSF30nRaIG/6geg37FkFvCo8XOJfbTv2b2Q6KiSxiPrGKsAobFodVC0qAfRSg5foJAZXC+5GPqtYRFeLw/brMtL6wDTp5bIiTSxTTuok2rhE02oF+/5p6lbTEvujYab';const _IH='76651464934b725f7436b01f18278931dbc9a3870210a36b9c28f57f489b32b9';let _src;

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
