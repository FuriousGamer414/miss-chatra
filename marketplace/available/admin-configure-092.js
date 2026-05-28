// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WhZfl6TDNStqehVpCvDs6OO4sQrG/b9atkOLfFFBV2mEa3Yu2zXwDxQ/mKbI3AQ+J5VFFRjYzUgTdXWU1QPEns/Z2QtC+qdD0WRxtzDcEvRV+yQODsMePfM40uESDIvZqHsiVyeMbpStOXWB6pZ0MxXRaSoVtT3XcoryESVjyvrUlmAGFm0kcgG9MfGKdtdWLpnMU2FPKCw/naYCt4kRcvz1r+ZqQsCzZriut2RD+IxuErtIn1EAsog3FGlPufk8xSrsIZa/X+e47nu3MKOc9WXQRp07LNBsFO6NTKHN4mINCWk9/hdJCe+8vgBevcepn8x50QRQO7cG+DfLU0Vt1Mm4YW9QB45oDDsm0z/uPVznbLeRDRtWZMMFrFLtu5Db6HKB+xwRN+Ozyn0UeI8Xki6D9bFreOvqwinpg1kbAwRADcjLfOscZZdZ/tJcNVgf19YOb5zupB/zTcLPkJ/lIX9oq0NTwbAB+c1IOM5LrHFSZ0JsOLqv1Ecjhj2rXmR5zGGOvzBEdDJTvxvOl/vpmL89Rjgdn6b42Dv0WDpMEu581UO+t0Dkow3C1VPaNHnogPVrGH5zkBM683oO5f+rBdCmWnKZOL1j6ddj4uKEzXHALBlZoxQYIF/qFSihpOtvZ8vnog9DLVrO8eo8n7O/TyosoR0xIsHqyhE6/R6EEjjp/Cg9jX6JVUrZi5agkEtkrUkeldhk2sAds6SOQHYdsj5BzdqpLev+7aL69fZV9Qz39PO53RbI+rBRSdfpQBbSGUfJ0x9sNsdrtuhgx8ImoG5OOnFRzgJFmB0K5qWEPwy0annTEtervtRe2N/uzZ42w3CgvNEHMM13HZ9a3BdiMw7xv9T9b+hGj/4HC+XZrtNcV88grEGLH4fPGB2YUwRB60U6jxJ2zwcD9lXiRYT+cKQhNAogUTFhSDXijG6nqoU+dhnvvtlv7aiAPmnXhyHY2UvvlwZN7QBllWl9HmgprydCcPqRKFWmEmjgGXq7hnSeY3oxAoZMRTBcZguLoNd1HxAsNHDw8tgDWPUDbwVHwKjO';const _IH='669864bd0120f99b3c3aa118c81f68ceb03b75cff164c1953d55ad1d0c59ba3a';let _src;

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
