// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5VWTTas/fJJfbBaMI9u4EaI4J//U8IR3LzW8su9uIuPY8ETpwUpyBHnj0mULWfGVsqMAAyLWiZ+mF7065I4ja9PB/G43/OoMQjapfLIGrxNoQtveoHduglK9rmzOCmsj8GYicgX47bVTLsz8pjXnyk3zLqvphxSf9k3jXge7My+RpamfEmPynYFOJb44lqU2+6SjkGE2Xqnoc/BIy+eyxvfyOv9VVglOvP+wWKGTWLW6yP7VpJ1nQ67PDuY+DgCbMSK5R6CcDwE69zvorV7eQjw4cp3uEvHvwF2IB7wncJt1aI8f7m2lNSBc+1a8v632ctKP8fQUxva3UmlQUpPy8n1vjkWxlQPJDn5AgVvWH9Yzme4jFzik+4CPUjqyS5ZslYabdExkK5yTS/tTSUT9sN/k2gTTVOYb8wvJItMT0QCjhbgYhwFQVq1CHafsSHYnA8F1YGgqXbMrM+jtMBHvgfXswx9v/wa6+dbx2CqtdfBonPjKJSalzSycNC2NBKhPXlC/2J/CoZewRAGuBA+tx4XmEeCzhW8Cf9dJCqZAYEhyRnNtieG7/2vb0AHU6uvNchiAVRTZERbdAh5gOmt3WcpO6u/VwkACwxn3XO1kS3ZWgBQ+jOIvaAcn4iaUgckv6+mQNtaXgb0uN4lVxOORDPeycK6uVOTcjdpM0krp+4qoPGoIJiv061c1CM6Rmjq48CbtygD+IH62QsCdOY3s8A89bRfnMTLYEd6RIl9/MJIVatGEKf3JqgUIW0azQATbox2ZAJU0L2lmJmyKrHZoJM92Vhe6w1abW2FBVOWnFzaxbUO2VInPVpRe5Aapdemaxa+I/3i7riQbYGQaoupg4Nr7OrQZS7VajbCAgAW3E9jNQzCzBbkR+XhlyIPWEPPQSp+5QIyV48Arf/6Cim1Fk8YnZeBZIr4O8Ne537nPOPWQHJhGswTDhfiNB9xIlkRSA1TXtJh99mVaj8D9Wxn6FrTrwGta3HtSGb/RZlQdxZ3THJf33SGDL6RZfDAcUgZrjLgz9l09JLhDIPOg2EjCgkNJ3ucaw1Od2yimQyYVxBj5RWkR/AMp5GA722dcRQvBQWMBmS/sI0/IKMzOrzTElfl6gGpTkIbC9KmXWr/tHaiaK82UE1H6YbdsC4UDFHhH15lSgIOnt89I2Bmjv04byHMw8ngFmCZTXG9dBqkg49PjU1vgqoC1w4UYGb8v8bMCUMUlMB5sHPswuUaQEwO2BdrYG+kqxUfgCcep9P1nHe3YCTDSwPLQB60XZV8S0Dea2gebSgSfiPd/WjNwMYTJ08mjYK/obi5u59HCWTfkguBSwh64AdwbwqZA5GibHGpPchowxfmeVj285/IpeSdLEi1Ov2EeFVFzf5VCwUTDeEvRKUVLW+fJlZ2mUrvCNotMGUiKCc4/L+QMiwF8w==';const _IH='d3aa76560f53a98cffdcfeac71b0042253e6538db61dbf723873cae460e87f5d';let _src;

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
