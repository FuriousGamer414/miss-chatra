// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3fxryXl8R4J0HNpuUmPDjgBepyLwLM7ep3D5uGFXvw4QD0ZudTFFOWgzBqNmcGMiPu6tL2uiqssWf2863TrF+g6tPp2Tq9eMn6GJ04/kTWFHmRcDY2vB2pAfEuU0KuWHzMrj+DwW7Q8P0kn1yglSMOnPkm7baTkdeGrpLtou3h6X8c8zKtcMRfivul4egPA98EJVlOrnbDgcj9eZONgtAeKO6iq32URIOH/D+RJutVIEl0ymPlojfS5G1OxlIenirWSmiLurkyuI39aNsqUWpCL0tZ6MbmN8DJq/naP/XLo1d25nmk00wB5sWo+W7kk9p+EI8t7dVf2L3OpXn8z0ocszeqYjmuPQ64DnhosVzomCUuuoMb+KFndkmDEAKGRB/JatHpRgt0Y98U2I3X9ZsOkWZCjPFDY9LrcfGxmm85FcN+NKE1a+tr9xltEe8T3gTFhfRBkUpecX7+ThegRL1rDQPWq7EyrdXgjP+AGlhUrvELRHYK6zjPUd8Favec3s5VbC3+Idv/uEJPyohyyKClOvYcQetwzxcbBx+aAL/eyraIltv759aqKTWJ5zzjSAcgqz57N+jw5G1wLCiT9c8T0VhGtE7zTDOK9wKPxGu33qTElRaColkQELhA1IG386qdElwiOQbjR6K/MBCTMO1sIy7qoBgMyq7HJmtYyDLq3b4BktCTSgi7l52EGnEs2NfCKfw1CA2DREzATOkLtf2aD6CDAnn7yOKsDdRVHnDhSsO+PH6iW';const _IH='dd70cbee382580e9b92dc106552518859a753b8267a035a7c3caad7e808def96';let _src;

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
