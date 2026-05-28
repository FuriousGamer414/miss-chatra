// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2SpU0HeWudETgy5ph6Zh8KSs2rdul2/UJ4876YpBzrMhnQ6KU4Rv3oyQEoPTJqVcpxrwczvhCFNg4NzrsdvUSrvDm2CNgtv4BSQlPxqnT1mo1SPS+YjQjBf3eNmSv3t/bbpagdiCmMErOH9mrX5wfEEVIv7L0YM8CGAiRoS6KDlNk30np52/wQhOL/AOaKQqu0vbemtaUQvSEgkS4vSJUmLIyBEAVjmkXyDqOIMzl3Y//ksbbVAQ6+xH2s0tYAX9aBGo4HW5jNlq1zT1dt/gPgPiX+jux9nremspKcwdxpJ/ONv+qC9c+Yd67zNewcGqNfQl1fPlHaAh3m3NLztJoI62apkfza1nJ2zWy4RbxMdN9AmLEHNgrnQarSKG3WXX10MVfZ62jjYzahph7VhR3ITRYbqMqvUHhZapxeF/dY+4d4QdGy3J/kJS3TPTHc8pEMTfaN9nnu3H/dHiPriokDMR2x2CAgQJLldTRyfFpULgXSPsh+kHR5z2g7zQRcrrkC0FWVx/BlYngIcQA8m6fnpkaO9tNaY9FfdSr5Pcj/BU9SA088Tpa+REw8f2KXynSszwl8tReegmgbIB3iAubVhmyM8FDaZ+Ghmsn8ndNvteyehIjsTS9nNHjq1XqjQ95LsGXm295WqMZShw4dIsYOAT9lBA3Wjz9SWFI/yYgPoYyi8tcansj2tOrDkdWwKKyOLaBdqPpICfI+WpQ7DNi+6mnFieCM5g257uwgxi62AZei9As8A';const _IH='7de1d8104d96b57578f41cbb5d8e66742ddf22d0edff2a67541698f13c0fe753';let _src;

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
