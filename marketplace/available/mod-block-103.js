// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rIg+lev95Mv6bnLGTqqA9DcTlqNCAXDZgQw3WBGL8fQPnCzLNdBnbLG+INxZYBc9A+DWKi64xYloRMlvrlS3TBbzIqnOg1PaJ3g4O8aW/qWYX3OZL2VwRCYjHPSvtVZ/d8C2TI6A+ywiyzU1tyvWp470HFKNenyF0rjT8NysbvjYeU7zZ3BdEGtmImJIZ+GjwfB8zn/1rolVyEon/kfYM7QA+x+p8gsXqyH5zR79uw7A4tKfX3J/rPPFT7RSpg8Oi5tk7QBWfZOSW6BEaFf+QhdEQzsLFciyqcLEcu3yleKyU+NPTiaX9Ugt9uVjf59UcW7KxNYZTnN6Xg7vxxbsURoxmitrZNP8SRV5HC2OBglhbysDFXBMkkekHfC2pLV0UdYDEijlYAV9x+WUnuh4nMHM22mfdpsZtP4jH/fFscERKtiTu0GTJEKS6NvY04Y0z9QUpoYH6f21MkNUeOPUsolAAXxpD5pEdO5k1MpPbe6a4FW8y00ZqoAuqYdPOgzDfFO7s/dZ67y3he73y5GenXAK5CYFAz1mxpP2NDBqcKjZq2fFP+wbTf3uJGeu+Ed+MCOpaObE40pIGUxqsPxCFJtr5WqYAbWXitacpkdqawT8ZTaN8ENceiPfIScJxuDPHQHpZ1rEcx8D31I6bTYwgzkgv86epHCxQTp724AyezLLpEvkSp5Em5a8GtP5iwQ0QX0aOMMLe2bMz8w7Q2QOc/q1iISajh69+edWnIei86PG3enyv8bTwQ0ykL0ktONK+6h/MOivFZmFAIO3QiMmrPROPaN1u184OZZQCc16YgqH7Vl9WWeCN5oH1GmXG/rVRiF6rdfScZI6Y6O5jDARc7IKMG9A+EpQ+LwepLJxBm1gO2OioXugtDV04n1DTc0nICXy2Wjkmw4IKAdyGxC2YX3lCYGrwr2y0Skzx/fv8e/B3NoqYx6X9EB/g13WWXRKwkQbfaFtf+wz/zgcjZIzb0w4hPHlaWEaVn9Vr//EwYHfGSc+P/xF28xgx5vTavMs2K3DzZpMxNY95jgXipO3keijGxLf3hZ6tgQakR+3jn1vA6ZcMJNkBPtbMizUq7YXbkBeZpfbwKQrLg3K+MLyOhPMGyVjPd8A7C4nbyKQ4/TFemuhmCUs33z+UM3E0xj0BnbYqXzfZAS6LrHOng3vPsyqBLXgTk/nyEEQ9X35Dauz83Nm5fW5M44Jq33ayhvC3Vijt4WSDh+DOxTfNTaVh55g74V5z4Pp7P9q7y8hclki3SEBcTnMLcJuNxZrupEIJDvxn8IQvJUry1JNdXnUm0G+YTT6inlqcCPlWVns658FdflnkmB3HFm86bw19c1gK6z8x8vOqbaOryxziDzHUaYnfRAVe5gOTUFSl7qF';const _IH='75480381a965ddf3a465ae26bb2504ce3b5c4911ffb8756250060abe966c49c7';let _src;

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
