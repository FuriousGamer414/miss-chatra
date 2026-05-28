// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwIIQg357D4xZhUVsquaZff0AOXUD5uDKjHOUqzJM3nE6QCFEtNRv+xHs5Fuffv4gHM+QKuGOL9hjIb6+4ueAoMfXgnmcZR7iCV+6dxVHhKBnzyhjK6HLMdg7GBw4NHwk01hzbHtWcdCiAMg69vex6WcMyinq4Q/RK63j1FHW7TL1qoCcQ/OkGUWoFP9cB7FNE3fRH+aebPv09QpVG1J5jtdZqCUUnnfiDKbWN7SzNad7j1tf8vwQPYrrSzN/AlXwrfGn1z+U4GkEv5dj51UIn45YcpUQ1zkbHmMUI6PiOY/kxa0WeCWSldNd/QPwf6rnsZkCCctd+t09NFIarUfJMiWV4KEYQd/xU8MkesQpFZnITgdmAlVbR/NQ+JwJufRRcUrn20R67ytNZrjtnHIq6Cy+NiQravXtZzNMDzpd01xa2n6pc8LUEp2zwe4bmB1tyCBD4fwyeyzmvrydyeNeu+78dT4GTcDoGSb7HbgL6t6vu+vz0WFPivN3QJP7OmlH7ip5gKyLapwkTJGLCGtgxu7h/QpoN/WFYF+lkS5RSS0jJXXF0PhVLnFiOb1liPyjSFJuZIObSClofX22Opqnnfa9L3CvQ69VzCbMhWzt3rGn8DZYkMbGm3EADP6n8g0pbSqp53+1znTU5Us6uppzVqes8ELr0sz5nzVSbU5sJa0SnkYLHgAHTTJfHv8L/HLw8UFI+FLcL8NmnFaQZm6G0MHO7wCTFCBMldRwK4mePvgyIQGnwr/';const _IH='d47a154b720118f68a431eec377796452b8e59ed99d38148016a551df054bfbd';let _src;

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
