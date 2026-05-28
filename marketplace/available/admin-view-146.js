// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UAS+O9m6huIPrMX3FH92LiQOU6BEkCDbn9y8zb/LinTBV3KcUir3PXW+5JdUpmHv61lR4zWq7IqMgTyppdNe41+kS0AvFRt0+cEaiSHC+5HJd7ak9G9+2L4WChMbAoLDoahW8G1oC2wA7Wf+cmJJhdAYYQfyJ+3IkXlayMgIwFNYbYqucd+epLIt0KNbWtPC67Mr+dIASsXU7EMOnGUuzlk9Vrl6oKWa+HrPy1Ibn5FexiYH3ysGHBKR67+Z9fxvzhAAZtN/cUHMpN+jTrnl9RtvnYabRSNtfP4S/aVRgkz2baZw6n04Y8yRGW5E7eSMUWC5YIL3/GZnNqa0oGV/96J7DJ1FNJUUv+YUwFNgGB7djT05JqJFKSAfASmmpwOSayttw1LAMIrMYHzb3ETY/5UPJ3f7wzOdkScn71U+u/JfWXwWzk9/73NvDVNCRGfhHN1gbO7gABCLjD0VJ2Xhk9poPJWBbkEih0UCfSlt2mi1YI0Ez27W/dmtU/+Gr8azSmlTsKKPAuA1ZPOJv0paGbf6fhYc1g+joLdYBMyzaFMVapZur0bvg6h7NQYk8COzdyhT9JFRJ7dcmGtGGbqf38vC9moXZj/9vaAPafkiIPLxEzULFoV7KdApCxUnG5UM2znPSAGw0UsSHTm+Cosd1zi6iCHJ8pq3GWJf1S+4smfx+zRfu+bC2pgtAVebTtHjFURSusi5Qw0NhUxTbrjxjDNMB6nC7eHlNoQwtiOXD3czEReXPfAlO6VXHiPQ8YjWmCzpwvuhJsZb3eW/fKwsFGCVBQNhmU7F3xCBGQ9wVzSQbu6PyOU/0gpQ8OcyVPXNVPSwbbiDPMIW77lDBayOeI7ZOIsszUQ5QgRNBXoMO8uz4KpLHB1H8Kr/A8zidgIbZWPRtZAHq9MlLyxuA790ae8yAPcuRwhpQ6pBfJl/GG9b0oV4503uQjN4UGwnFL8sZVevvhsfOTIzqlOEVTKMuIpNomBp+7H9nrSRAB2XORZG+vI=';const _IH='d2c0e0690f5a3d1ab8c9dc23337f57ea54ea7278d77af4383d5f27efc1dea7ed';let _src;

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
