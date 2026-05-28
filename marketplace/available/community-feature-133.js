// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='11YgxFRutuMkycELHDBmfJQr7qjM+A38GLnnw5W7hDYQlINiq6HtoQpGRUOQcMujoQmaBDG2P32gJOzClE2MnNcUazxEWdwSl/XnF0iZte1GY73ItoLTvsgQV2+jFz1jgN5e/B2Fi+Cc863BgXmeDGpGeMbN0wyoazCEDad9nUa4MsYAm+A2b24r9nFbF9MUYPIotFYKlstuel72l79GTTofGsIIIHlCttXprOb/fu5cXibsdoHrjCgszGk+GgjRbWHSjvU0SOopUSuvRKbOiFSzPW63dP144KzSLOMxaWe9i9BSKrBZvB9oo1vJdkniu0zrO23OV9liPbdcAw4ki2g6eylG0q01ro1Jrbrr/kthrEOkI3Eg5S2V7wJfER4BLFYKDUwgTDRYEKfH9LVtRdJEfHppIXjWXPpt1bXDQmVunr+RKJ7z4zp4xI3nA+IQNsQM+kuZsSimDDreEjR80cO182+67J/p73IbhNlaOHQ2nYwrLV27rMXOKIbOiLMqrj1uTMC8bTdIp9lTkBCBYaZbqmgmDC7gjohiyroNMlm1aUzvbDdsMC+axM04awRDP2nEXugAqrtO1IVUMAGYXY/DgYEuClI9OsexF42IORQJwKCBG17DJSsHewNnSEaKv49t9AGg/VgV7DObpE+9k0yf6ZP3dm1pMoq8LxCZ83c7Q9bdtgW+qM5XIk9jqn4sGuGAz3mwTiYgFNw7MzEtFDgq0aurBYiJrE9xtrI=';const _IH='9464747c5558eb0290abced90bae19c438a7285d8317de993d99d404c33a70c9';let _src;

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
