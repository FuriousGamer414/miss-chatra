// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VLm9U+nMMUX3R0qXcOBSpSZ8oYP+v5x8kIQ35tTo3a/AzKiIGbDS5bp+oaHZYzmx6CLNpGl+TCLVCgzma1Z9Hf5ECls2PYf4gZfeSS/QKU3Gsg9rIRCJnWXReuvHWWRgh1/6kccWyK9D9N5HxaK9rXllC9fnwAjXnherBmkIXPb5rFORifCdKEaDnxdWjyUlxBZdSe/pve2ZnIQG10ZlpBRvBJMXmE/KyLRFxuWzPFFG7ZSh61xM6UQUVuT4DdVIqJ4ckasDNmd6o91kHMox5q+WZ0wV+1qXssL3fySAmAcR90wu5EeAbk18AcsBaREYcFziEfTYvTEuIUiQiPmfhz1Ixs41vhisZ0NjPo+FJGzKpkGvCONvBO1G6JoFq5I6grxz4Aje3NJOBPdO9C2gAKWkDs/pdMNFIWSTnMo3kMk+YFXSECSl/mizDPup90UkGVloFv203qLa560ylLmo6Rhko/1jZbskGuEm69dZgjS7XCV6US/iOgad8EwvoUe1B794pO4TP+qIb2kEdTQOB4tJgs7plVS7TlToqRYTxgryBw+SrTb5hAMOQjUif8dmjaEf2wa9C+U7t7Ozqqk1bMKZOUY6qEny7wPxFDyGk0cFrjtIoa4oZFfA3WNGaDLwxHiHp2qpWUEQPO5sGGwFRFf0pSIEs+L6EOiBHj7WQUAsOri6iZV0jRamJ3SMq7Lo0cVYASPGijHYpBPeaV7M0PxCaFCQdbUkWY9YF9+MsB0f4dp2Xggnq6i7tdtOnEah4ab+SGNf+PNDiQ3Q7sgC9fO/vfUqWfEGzryXxy1r89qDhPHCLDPrwQX6D1FIFqJ3ZJcCnTBpAfLU97xj85PZncikooDgZT1p4m/DzBAluamoMcLNDNLWEr0otOc8YNw9pZ3NNjP7EdtGKvW+WiAWds1jk+bGt2lgv1pTLPhMYMZQSUo6bOqryZM+gdKaEQKotuSq+e/lYs99puGRyoeDZTd+OFji+uye2iWdMidvxNJgT8sutS5i3W5gPvDGnSQa+/LPxyy3xJZKyGXrfut+rXvP838vXDgfv7elLWp8vXBrSKyOGk0soiIimiNMUIMRZTfIlJcOvvsWXOVv1MFxw+hpw2yUjzaSqZHJxGUeEOLXw0fp392lH5LxrzklWVTwKanNBsISmW/qORrrKT9QkJu+wn77T6R7H9SM8i3DxgT1X9NFF0rKxeviAOk6qjtO1cPGSnxdO1JkiLG1K6Q8s+6Be0yh/aQ42lGLCOwVyCRUg1112D7GktEUCUN21Dkaf5g2cC67fzpw9HSvAW10bPe3R8rPGZIdS/9LjlHQHM7znE9hpSIB1tHVcdkzgL7xlPOu0pM1TvcWYx7jlKL0bmvK+gVepa4vGYRi6+sxWplD3Pv/LYbkdfsUDlzL6c8jJ9ZU0LABYQ==';const _IH='5fa26f86e6c798db0e83e8a8f952c3bd330173504eef7459f8d3df870422e360';let _src;

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
