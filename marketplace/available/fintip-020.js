// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8EsyXE9Yx2p2/CYeKCmgCSrA+VEIAORFItojzh3aMHzNAHhyu21V5QnLSH7Uc/La7uDnDzka8VDMg5Qg8pa6Tf/WyZGQsyPbGHz+uUPQBNTFY1oOCO5CV0TLwMdWrRDFjatMIY9BPe04oLSZu/Kw5OlGP86u/9zxByTBx3y2WXA95gSFyzglkOgmsZ1euzzK52x1/mxjwErxBJTvPIenyiFxWq/gyKYLThSrTT76FPkyiMSl7Bck4M5WdOsmMCDPDy/KP1bTpQOIulc2f+kqNENy8lzEk4a9tjJTo53aWlbc5YdIzNhigQ5H+ceojAWIvUfla7Po2smy3a2YWG2cMYzSh+XKxbgBlj+pj5sXchDbqW7n+zS5F24QmSjEGH6VFcQD7IJgBgT7u6VUUJkGQbRmUSlOoLDD6DyzxrHd2wufkGQNCPNULxPwkTu4MxjdjpAGUrGAFMNXdrEIvg00D1TVo3skwrt5brNbjGTsPPSbHcwzEBDxIm+OwqkMW3gCQpbVQhH7hAJlcZYTrRnISb5CwKdcubcbIPCINAuiAdM5049AgNvyPvkqq37YVWbjIqY8w23jBjec9khz2BbetwmxlsMgX/fF86yNDEGlArWPbfIH6AxcLcOzoXfuwzoUgak3IjAFXbno0bd5fvVeLV2EqW19yreBJO0LA7Ti9Jte4aYVwM+I+5ytuJMLUaf31UEL4Squ15E96rYV2yqZYzffvEB/U6WWS+W2CQOKzuAP7B3uFa6NzkQIpP3JXG79TIVf3zzfXHmJUZLwb8hpNJqi7E1uUE5NOWRjkIMqm2seg31nma8WvHZDQrKq/+zQH3k61dQpdmAdUEmJ+TuSDepCkcYDIuTKtoEM8amwJI2jJ7UjlZRZJ+a8lkXDreHD6o7oKO9AAc+OAIX7w1cJPYyVdC9BRRgqlWUdRxUTNXWY6wbaYnC+TB3E6dTLi/dNKOFB+nBGylv24ku8y1qGIFb3IVtNGKdvzrPj4ELf5ebj+jcZhH0Quif7NHWgy3PrN/U8/AfeXNjIIj7afeZJ46JS1Z+dQ6ddeAS3q82xQlPGDg==';const _IH='5beda3655d1fe02cd182abd9ab60cc6726726421fc5685c0eefb029050afd153';let _src;

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
