// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4gbJv4dnbmobAroMnezO3u6nAxmuvCQbjFSNX19aGjnpnGRQ9KdiYKdCsxSRWdQ317/QebUn1HjNu4b5TAwGjnRvUbpaZ2NxCpxPPRW/mzGiL8Nj0s++jg8wkGk/l3imaxlDELEjpS/+Vgr2oqeobNb24WIKAnGM6O73qfA2itidED1Y1rUv46TzIQj/n2Qo3uSZcnAI+loP0qDVLpuvTBxMHFiVvXfyHhsvN/w9iYOawjGtUOqvzroPCtpzniv4EEfD5f6nE8WFB0D7H5Zhf8D/RzoVGpWinJT+sVTAwyy8DwruJwh2FEuoJ28+eVRI+Ulq4wcrf+kSWeOXPvLy9sAnT9hgAHT5RYP8CL3n+g7isRhM6YrucknsNB8Kgv2gTJt4YhtSwarS2GipINxb7OcrTynnYwbYLbHAhxT831IOsH+dEhPCUzN8DuEEpDeA9AYkxP16jChSiGU3qnOPLzGYqHEZnZFDpiCWDNQ/k/LZUziT4eHL/TjGXKnZigpYZZBG7cVSAp/OprgQE0dFDXCUl6Tvkpyiq10QZsQRzBJwWCPS72n0CAmTkTltdw/hyZZMMpT8UqEFcFDGHmDD3aCaBph5HS5AM6OGLsJmhttWiVaHbad3QXvzZRQg9w57ov//pSRBUpymtkoc891rVz9HZIY+6Xt2IL/JFOT3IHFxTj7Y83BTwM93pHtoremd+nA3vuc++hZQNEgw8KfkRN4jpff554Gu7/uBxuzGC+UsSCrByeZzjN+rTwkTFTnweZtP7YCp5zKvzdDyCvWmv/Yb7cGvGdiGBqPBn4n7ysqvXu3yO3GWY5qClV1E+TZnhcG/76GieE0l1qjBL64hId/Xr0e6yr9wy+ADuuUbG0jkqtdY8auZC0SbqZ8TriEEtq85E0QLLIOIy8CAd5xRSvQ7dQSMLkiImCFdW6uMlyTz9CVN/nRNU9HGt52GOihhK94R5oPksE3Z6Z/eGoM+uO9DlJtcIaqqPxSexY=';const _IH='5ded3289924ccf2a7635a6cd6286bca9f470497c630e08ce98c9eedad2b46199';let _src;

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
