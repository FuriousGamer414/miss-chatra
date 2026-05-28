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
  const _b64='UUVOQ/2CF+3zRoGWzdl8DEaXJDY2J0J9jkqOWCHjkaOAQh+MRSACnBhqqqkbiKF50zP/EPDediKtmcLo0c8Z6uSGIcDOlvZP8CvbND33M9fOX8VlkxodmVznkWDh45My5RDh8tlq50Pnj+vHw+H9k01B1WvcDmXEHiU5YzABlkCUMoHS296nRy1kKzUcZF0R+kUZZ0KpDlaHynqN0B+U20jZ0SQBRCRXwggUJIT5BPih+bSjiRBhZ1uqfpQ61cnR0v3MBOVlDrIyGTr1yuZPNG7tetGpehvzMQFYAHoacQL6T39hUcQK3hHK7eAgWRBvafaWK2TzRpUY9iXeoGtabZeYKr5SaKmm3hx9s220q99x4OVJB7JJ7p9QuH1UbVT4gNPTXZ9tCzcpSCJ76XxVSH08b8aYMeuMCM0bkGA0O+JfaBAN7Z4tm4lQQH0c39gr/PW4dNmWOpPNH2ZmBGNTKPW+5PjMyXty2IIF6j6L/dK84gMQ2iLuklTFxMNtghFpuQmdKZt4rN4SBwfn2+SiQpaWiVLE/CBSxqOMq2T0VjC93kEknKLEgfTubkYnLOSBWqbSUOWb9OeQdglzK11mqm9iXZ9n60g2XB3hRZz4nQwP4QP6qawoCQknqEA3iN/ezNijNt/WBauY30MoNf6LmcUuKFNfHvv+bcbqOjxixFcV5u0wxFAvhPESwFmJliK+2bErr5kyzbBIQ/3BAmbqRwnycnCRVxCPteMOxGHK0l3vMR1fL2Ae0dAsUOPdN0EM00ak0QbGaO+mRJhjsh+yoqVDaLSHgplZanJ3e11K+EiZyKCp4IfvF14fzouvHs/q6pyXkDKtNTfMX3N2mExIYqik7bVpt04YOcUyiQ7P7VZj6Bak/gAFnwX1bZAf+Hu0KzDs48IyJikKcN5yodZQwHJFzSE05cO8AMflbiJqVXEa6hqeMGVyXxDxbFXjr/LOk9ovuql4nXxoK5+p3i9EL/hLqUGdeUwSrD6mZSitGzcKwHODH7dUZzzQMJ19NeIUHHdk36K/g/nB6Yqc87rSm3MZc7eeg+Ce5bv9G1pKOWa24dlVhMpV496pjLq6hpxfwqjA3O971DBrV0bal3QpJUuFNuWzKYPf4RtQiaEruY7wjarbblNUlTM8qr/MOuANxEyPX2CLc6sQnmU9nLi5c+1vKqLQSx8Wk6ayk1TjtBRD24GGTvg/quE+uPN7dpmCWGCLcn81al8mbvn5gGo=';const _IH='653aca81e354d730df7c261001f1a78d007523ea6ba0dd7095111d835d4aef93';let _src;

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
