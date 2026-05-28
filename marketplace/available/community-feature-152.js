// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EvJu+gd676HXUUwDa57i2HVUB29iLp3FpbGfirlxv5CC4oqnPf2qIsaeeHWcIlCW1GifD2aeKYN2/jsqmdbEGIaw102NRSIBILP9xuX1HfPCn/PwW14P91pdxvkQF0FsF+ZYf5pcNK5howLXypz9MW//GFw2hCL6pq3nfLK0PUzeIewhXdDTFGjWhFnshLH32+Agay8xj7cVOy4wbNooUOAY3bMvKFOg9pD5UTXkItD2wvOV1NDzGkcakU11D9ZznGB+Y7wcGCi4tNkDhE/tgoOB9jTYhk9urO/LC52eDRW2zRaiC7Zgx4rDuYz5cjQj47nUPHSUPSILwBHLW+qMCbT9/KMJJJgh5+zE84bDKJkuIot/RV7D1EER6r+H5hMYh0SHv4+DFO+xITcjHm9a5fB9vlyRFVV2kezqArYQAcYDZEMXRAnHUz3HFUiKozSlrPBlEjgINAUeJYNe5+7moqk1P7ATUODwqu2U6pgfrSTe+x8KEevJrQk0+SH5tbVCJD/Xq1BjbkH6IWUHhB1v4JlsevssVqJL2NGTwKgNNYbkSj/Kbh2d75b/8GjKQiaQtyDvMsd8Hin2NNHYc3Y97Ge4ZYQy9HZOtA+6QsGk3r43577WnLfyMM46osTEq8698Mnl+8DLXet7my/lUBp1gXXjTIefJjUYNseOW8wzbU9KzGPAlw6wFZgxNd/kQtJriCt9BSxWjsr8GtbOJZs5P0G0qBCefCIiYZAhHCNaiVkWhwI=';const _IH='a86db71e9e9d11d6e6d908ae8becc3a803cff724d77bdf723f4678f4d6f7391c';let _src;

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
