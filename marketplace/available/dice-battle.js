// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzw5gGyvblLV+o7iRbbZ+xwCu258kAINi4ECFuri/qyPyKB/0DlBcv7N5TI+5FiJ2XvVVLC2wjCeBxge63IZxCJV8vKlcrnCP9F+ZD/uyxtoYqb98WdKxM0r/ImtVVpKDrbBtiGjYQbnyuOmNgCPgpcTqH96p3S2I6xuUZmVxDIqRrHxWmlieECTngUZ4KeyW21+gs6b28OGhY29jwfrSobOo5TN2TqXrqZUQnzmWcE/ieQhGiLQIblgjOZvObD6Gj0oCTqMxR76olLd6GJUCoqOhf/CPp4yH0cuiNFfhNwFB/k7cXK9Uv+m1Js6OtnO7qvOldK1RQ918UqdGZ2xCkl8BaLA8kZA90r8Hqel8O7aIQ298Vhfil7etc+X6AopGmI0ajjG8BizB/F0fvCTsg2B3mp8BILCP0QTNaqkcqI9SNeF6g7G2V/EG2RxdnI050PhTVlyOb/waa34VheketuDHd+xfqw6hMKWZvZvSvBY7XLPX6U8HV/J9118+vzw8rBooguQEkAcq6X6ZVcm+g2h0xapByk25IRpQaxYbZ+rYPFUS0BAeCp4LZaJUUAm2OXOWYwLDI8jmUJrLtSlOtItpNof9S7OEKhmrW6b+1tlXZEEytah5+nwi9ZKzdc3F+J7V982fWdpaVQMoNw2sNrVR5OJD5YnER2M4YqDkkGvYH93zOBD2UaNZ4JdI57FlBCuedQtv09wjkIELvuhHE9ENFpIm+zgLQh6zE3nanKOuZBPU0SOT2mnJl3O62NC4aUl+0uYa/WwEXFwIVlunSs96N4w8LA4wx8sllJRGDES8Q229DH4vk+kBj43TU1HZCCpzFKMFuLFf7TXHIBKt0mcVuX+zF9OPfdZWdXeDlK8ujMyduB1JmV1b8L/ro8MKwo7jQg96Ya7gsjWLW91QKCgvSuKT48W8GEMxPt3Rb5EKpHK3fgeLx5FOh7rknvKWojBTiXYNB6G7GkBhjnVw5ZNgq4rRe+xpvkizpX0IEQFK87jVrpuB452TiZOx1kjBo5R1eri9tr5GLo45TKDUCqs+7NN7RtLB7K9OwWYQe9XIm9dHMvheJFeCDx0gMAf+maOo+s7TmKIv006UP7H';const _IH='5bb9c0162fab27113c3c59adc64d8ffe4c2c3ac942a4443ac73e146b1907d5ce';let _src;

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
