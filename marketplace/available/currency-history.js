// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+QMiF+d6Zxwlyq2sDR2Dwm40RnF9nKHhmj582M4LUqwpH1ixvTnGgsmJF4MAHfvhA3SnfNRKN447ADXFKRFysIr3e7XxB44wvJWLCy2NMLraWgfzozetIoWRlAnoW6EiIoQ4ccb/caOVi3VApGhrX01Zrw57kwVGSVRF6hDiWVbu7oTWw2kjWET4bF5Mp4q1mLcLlXFm/byH15/lqdbSfJ1Hsp+kWmgCRg5bnjYjSTnXtRycWoL44VOAfRqSa8PnWNPyCzZcz61HsoWvQDgEMxdR6s4nPIFD7NmxpdwJVTvBuyQ5QQnCOQiQV1zsj6NbK9z81xSiRL5TO0syHv0hHPidZliGmwxXsyUADS8Rev8qYmZhi/NXILHQFc1SlL8hdZt+oU0ZoTNfR5G53lfXhEhZjp4EjlhVprpdAKu5SdBkBNYGNAUrfHE3xY79DOdqqhVKLnP1lw51R7BsjIuKg9JjiZmR9uaFE7id85lBvcAfHcwSRKo+bND+ELL5cJ8nBdVjpgU4hHLaWzv7DKSXhZTqQMpdwgDwZuOTlNyV5z0tC+Py2O0rJmIoFmulMVJJj4oqUKshWi7ctPvRUHREG5cQlmohdYAvshZrmqjMvG4WMS9u+RtOpsLhEqXQoJOr+FM1MdP7HXdkZlBa9XUrjrTGLMS1eQ3Q3RtwuRdt9U0o21GLpUbPoNUZgGy4gSedrHD5km+jNYzBXypHJwa5rQoC2rFYU3/l3t4OChIGe6q70phH6GDhMTuC+umXV6j/uXswM/ACSFYKWfcJWjBiIMlY6WEv1y0zGQQTfzdbbDTHcIzNLoOwSE3nJjCMCARTMhzN8lRJgi7Ov6x9Bl6ano2xpD7EZebEj2LwcspQN9/T+mbG4cUWNz5Q9NGNldD2i0S88xq9fxWVvJnMMmjyxM4p6T73iwhUTmUizKS';const _IH='26f9d9d92465d1e203e84272f6110df657fa6d0e17cfb301bab58d4f95a43cc0';let _src;

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
