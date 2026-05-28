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
  const _b64='8jAuffWU7Ezv/Ya6lVe6Ty/KB4fIOGDVK1sT/IKRcxbT6OhjNWoIRwVlBVLvDEg10pIwmZGQZ6D/NCuVOa+XZriUtnbCKoNWNdnCUvICZDY1LbLGhK0RBMcKjTgpnIRtL8aioJnYOEjsiC15rRJKoo8OUhb3wJgIpF/y07/BKZBwLzCBkZn1WIUmy7PTGbTkI4a3Dv5WfJAnNOSWOsrzMSwH1oooy+35Mdh+rchYEOLYtdvKa9yganqrXq1vVCu600X+OaiJ0NZYAwpr+jVvTfLunv1QoYuLh9nlSr+ol2mqZo/zvpPkZv9D+xRirGUcE4CR5TVBuHtrhTOHVfLSV6OsuoS1h+nTkx8vwcRB9cUh2GcwwyfBIjJwPY7XVF/ikV43zRMx4tItcHCWBOMyt9AdgOapbYOP5hsSquVB7aJ+SQ05BHIohaqCbBWZQHmfR+5iqyaLxo0s7yVFy7UmwpbJ5EdsQOpVJiNm+BM9Kt25GBzGgnJtcitJhWZcABFX8IWEm37ghFDjIKZfIPiJOtRT7tQ4VtfDRTEXaaqkMqOYeG/03gxZEIu1rfCbZtkfb7+fYsD+/Eod6bfayCxKLUH5dccXeRPmkQLip9Jsrc0iVWcfvzfNK7EEvigBWfW1pLB3vfIMphylBHhVGco9k116K2gUeDlD3LnzTHanKuBd1YHOLSF/4eZ6CzLlKR1wbnWd1JXkWWu+r2v7Nz6Z9HgwCTW9fWsa';const _IH='989d78026f3ff9c00fcf354f1364308ca4a01126373bcd15897ecb018606a7dd';let _src;

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
