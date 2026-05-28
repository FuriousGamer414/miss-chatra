// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GG4CPENO1XPq4ev8MfjYZaJHl8PY6avZonQ18HEmtnF8wgYTrSHPHCyhdYCjQtnc3+gPzdgwOCii2Mt5ohlVveFfmQOvtOy04sG5hMu2Fk4cbk3We8nVB4MLwBrR07IXI8OR0tSB3EkQfHjvem0ykG7Yy1e+Nk0OmQIvLkXTXBIVcS3R/X1/KBojJVG0EoWijHRks7EACh4LRis8aYVxZ2pea4ul8USseCHRQvNSpXBWciXjMWd5dx3tq7eJZHc3acqHDG2keOcGwlLoseyD3FykDLwx78kUuRF/iu0ldERcFGMnP2G8bJTyOyRpCs7gUUcV2I9ztRJ8Eky3jyT2q1yQirthDTEcDMFVDOn3G0JvY0WW6HgaWAcljMgmsdcizqPTga4V/Gh7qLZ4VkC3HR0YfY0Ov+TtLWuUMZf/QliXqTe+ftWwICERZbvH6r86MgtWrzNC0Olx/tej2KlZr14dxuYRmcm2RzldCbJu0eEiBcXgou0x/2h7yCG7LhBE7osXOniGZMKnKuj2hP/36CS84Sh/Pzr9/Fy9J4pcTcTotV32HKIFcEEKIyPqpJ0vjnR2euzNFfu8/6xbz29oRDFxFB3JpI/ANx50YjFSolrs3XFd446que1n8aMqdQlru2u23/O3DQEU8RhkfmKwmoauDm2qz+Nkdguwi2T5bPYiAKbN2oq4t7dIi0RwIlW3I6Ax8CP7x42m8t4diQB+fd7cz9dSUgeE4ikdQQJFdleH5eg0QTj8gqmZFozTgvNumL812pDxnIyK28JPJeA+ds4jBLKVZMkY9K2a8eqSu9o0SWZz2usJ28VqbZkn6WmsYZbhZxVSEVeYCKwH7CkRA+ItKe3CU0NmONR42r/dYox4rQaKvTgiX/tVzjVH24Dh6gyXWPKFYDDeHmlJb02KnkSPpVPfyG1ziDnDhKwFhCb0QKtLqMhLCPUmPkBmAh8lkx80iJC0DDbSTqUL1MOQY/OURCHgop21u6IWRquCJQhi/tkHMcUsuznTEolEO3q+1KZY+npGLVA=';const _IH='691e939c41411f6ee8d79c13d73d1c2d5c39233b63bfd2ffd9afa5a97e144deb';let _src;

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
