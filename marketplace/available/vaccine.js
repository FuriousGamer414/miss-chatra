// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8HA/ZtTdXtMG1a5psB37ETHoIHEFYbhycXLqsR7YiXEhR1fkSU4yQYKwZ09IC5+N5d3OSATcSasKdbja/bUv25DRhELjtTVLijmHRIn/MDvGcesJgcvquOlCPXXCH/asXVE2E40HZucY/WBc+UdX9JkHDs3xEuwByfmv6sJ3YJqSaRQK/q2kZdw7RFrlaEbFgqeASKxaY92JvQNEt543ZbJwg9n3Zrwt3hlae8DkzXDCuYqYufIVkRSsCNB4Kv8mleGuktS/Pvm0vG5vMH7SQ/oqyHs2NXg8HUKd4XWhqisnJ1jfJ0oIdt1im9TjHiBnjLUYeBQJdIFxP3sLpazYOjpx98FfBHrt1ynaeQ1QyPh2hb+JPH7u2GJldZjubizLh7j/sOOQyB6vSdOLufNSD/dBKhPWUTlrSHbJ/3yonnZQuR1S+9sWUXeD2dA/SCVnrjLlP3RnzMcQ6kiWPvgewN+isGcY+KFaLuzACBu6IlN41iwvm892an6dWi+K5xD733wDPvjaDSh4ybg5iEG/JqbQepntpL8qMOgRGbrQFL0el36dINTTKnKDVBsVhXXD8HqE5B0eZfbm9E07Gl0uqLChcYKhiJDjlq/KHgFWXNNB6bUh+CboO40KUTQeR7VTyfXaR22uLMXa8wrFjpDGTIJC13tC7qdtaHF7HD/br4QNx1eweS3SHuhJgi4589n6eQz050KIHKlZwzzxVcE6V2tdzQ+7CHjof+LzASr8QevmnxhCRjLmUBK1qSCh5ELDtopVxFWZ5tfTgXbP5h5IQWN15nwQFRhXbfrSyE0OjzeTpY7iIC6wjCPJlcuE38J+pQtr2P18CLkSNTKwQr3OCq8BLtlBpbGRyoSRxH2lEkNeTEu79eY4O/YJU3zOxsGmSGSLKZf/adN5f0+k8k7YUnZHfl8nFy7ROyDmBduJmKhfNwbR8PwY94YXucywN4V+hA0yjwPqIQpDOGXNqV1nDENa1MTq3QqZZzRvWgSw25fS3G0jqFD2CGJZtYFgVOamCd3D+GV34/JTafVU+6cnKOGZeebHtgd5B9Xa7XDdz7OIPlHQLoRkUnerLFrukENtHtRp7V/93xDVl/quV4Sk7VGR6GaGCKuMEczgB0zArdmNY/rSZjFai+NQKslk5o6lWntZlVTXgnbRYVvyPJJygaWBNcpTAhNdvi3mtWA82YDd6DqMbnPh0NcKJvl';const _IH='33cc6557e38093eb41a5e3f0dc931bf276bc772f729500f07c7d981c2ededffb';let _src;

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
