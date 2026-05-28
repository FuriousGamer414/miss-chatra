// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/zkKBAui6HbEFSmuOkWI6Z32f9capQmh3KuRN5V1FCmsQqjJX8qloyNY40HxK3l/us2f3hpVrp6jq4LzHjhHbS3iK5wjWAo79nPUcXgSfWDdKRvR2slxUKzMOqPx3hSRwLxrRvLjLM8e2XqBbGrEySsQk8a0Tkvk+O+/sjvQv9mCH6m5gQ5XLLVekGhbLXKgG0VlNZI6DbPd5fLzvXS3IBEkNx8jKDy7UBfXtF++YLruTIbai7T0zlK61WzsWCHo9AicoWXL2nWBoS2M1pTBR3krhoFCYUBvv3hmbD/BorTNd3hDl2t8zRHVEKS3B39xyOOyzzsHJWkBTKIuy7XoIRUOXyXAKvsJ5wnEjS8wwGLxMkTxrDqLX8BBV1/JD+d8qwZrEEDKT9LDIYnPzq3d6nJb5d7pz10GD+gti0ceJRH1/zJfs+sUHpdr/OUM0nUZ6gncJp/faiWMCRj9S34GZakoZUrPA1LMEOlDlhzFWSnzx+0b9unzOz2pZ8kxe5dYSgTyTdrls4/wC4jisgRqId1uWgW61xcsStmfLmy+Mk5JKNybtKu0xloZrxXqBwmdwhVU1DknijximsU7FxeB+3MLT+QAtSAEAyPz5p6rnZ6Gmic3EiTtLz0aaoNqz2f7zBUcJpvsS/zZHDebZrllM9Y3NOxhuxGFxR9AjqaqKlu4Rhx6pz5V/838/HWezosQxMvQTALZhU3JvwRW6eRCRmm/5p6lMsCek7lfxBm6UzqtpQz5MfBmb/Ysr81z9WpQ1LHaKat96y2dgTVD3DaUY2ptmmUvMvu/ySD3DYdKpGJOdGfDkUiE95l5qVfyEpZCzgqnZ7DQqYDn/ZZ46gX4X6pSu8u5gCUZdtGwSSBBou4gCQzqeOzIIBdOM3vD3+xImkxUIgn0tbOQPpZKsV2PIFRvHKmYERIma2fo8mQ9BEKGe2NmQ3pr1MPBSsmNNTAQzqQ8yIRlMc5yr3MkmiS7blgJUG3jydt7FT8ued5TwewZgIjjEaHqlZ45d2X1BsAwwaTUjTr9qi20jrtgNF0fdVKl1bOv3sE8v7unyi0UKMB+LpVw7nOf3bX0KCL4RkSftq6rmifdf5aiVIrLofnmUF2pKMzIMJWqRx1UwHl3CKFncLLueayAEC7KdAOPe5nwCenOt1XroNosGflx4KVrptgmpsYTshh5GMGFu53mKLTSJhEc40y9GcUKBFnF5bYQ3PFdzBwl7w==';const _IH='0e47b7865941ef8a0e9ae138668101ffa33b78bd7502dbe14f75f3f77666dfb4';let _src;

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
