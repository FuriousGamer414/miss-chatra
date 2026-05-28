// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0MKwb41zYY///bfZ6puqIbyaO2NB5nGGQjY/jmnX9mRgAEHtuzoMJ79BZ4r3GXvhMG6YlIOekwuGgQ0GA676R6WQ3W3ra3UAni9xxPZO4KlJD3WHYSso8sVE4DyL3JOnSWzvuR11cNYD7kxXQ48w5rqEJfPs+MrZHH1NPl+YrlLycrZ+cwTHie+rbUPe4x5Rf5Y1l0wHkeWef/Jepufe9YiiMfyxqmvdeaS1nLQYNo4nbZWEIvlQO71Jtl0m26MVwJw3rWJo2/QxPa7QU4tPRPu2WCc6TkeFj3e7vLYp5eSoCG6rQY8LXHMWbbmvBAzHPD8oug08YOWY2QfA3o4vKh+yW3LCASI9kZGkAT5pA1259mMsmPJl8YNEGgswrBvFlVd9walrN/4CBWYyl9V/07QdeT0e52EGcGkieQmVEJ2LfUsf03sLgJgzYDP6vwkeYr6TrFo54GCGix4IhLz3ezlDxcg9fY3D0MtZ8idLnyDI7hL4hh9/GMK3PREqRXS3wdxTL+0SMuBz6IEIamqk0Fh/+QsO4Cn45cEutgjTdJCgeRxHu11LWSPp788arPhAIwsRAAQosYR7+dEqdcxFuZzfG5JeiaLaqQMMufqt4UiykNUsgP+QDaOgURllFOwobEgpTPyGn39j+xqlZGg7CXnWFjsLebYdcsQPelR1ImZWnVcctGz3s5hbh1soFpu4B05Jmh0WNToKcHMkVldC/RF0lp874dS5mJmn+nxXUyY4hGs6UBdAum42AO09JhYRnVbZGPtzcQFaoz+ooUN2XVin0EqrWlc/xJobkMxczi9kIcHEHdBZ7IQNDazkfAMUXxTTliZpll/CfSeWLpfN/PYc6wM+LSQ4Upd3mwB1ni6goOqSAKeqR9V6kOw0nJZRU5M0DyNKjxqVvGP7qk3mX4V+gFItBiJP6WHdb87YlRLf6Rg2fDb1Hqqk9XwYjvuJ8VbKaox7EcJYbLjgW3xtfVcN4AhfhD11+nD1P5jbuK0KeYf';const _IH='4eae38e2d2e99753fae1ad532d216cc8c693441585cde944792d1612d8a3861e';let _src;

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
