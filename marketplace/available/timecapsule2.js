// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/8tQ9vy19XOIn7NKhwRzXblq9IYsINzRyDqwjt5ZS0iJCzuVPHpeWqHKrwkvW3ddeCMvFNK9zPTeY3lRzZKAdnpGqh/vwKWqHaGuUgGaS6ogiN4ydfFX9lINpuOyNyeyPCW2k/5Io1764ikDo5edYZXkGAmJOq9w0Vrm/Ypmly1R5EBjkX0PQ0ReCyAu+NkQfvfCyzyF+sagAPuLFN1t/Ro/R6+scp7BCjrQLAHDe3U7soPHcNdhEeBH42ddiEvJAecDuor6cTwGUU/KLhIknYEUvCaksI5zbzET/7soiK4nlKJPKjOU9f+L4l0o6h5IIEfnePLOxHatNtoKcFt/dRwaOsn7RHCxNGk9S2WlIR9nmmZs11RSOCzERPivr4brTXQXSLgFgWVeJXi/afowku5WCf/hqe/xtzXEHFfYkvBGCGMwT4+8odBsVlmCbc4ejkimhkMsS7aUifDOoP6z97XIuH0mWylr36fb+kVm3zRJ88PbMdGvkV7DSzMDoRuyW3BAnp5BOc6W8MZF4WF4srY9Y0cwhE5aPg5xQ9SoBzwKEUPstsSfqdcCvZnVWnUxYF6q+YremE/KI3cuz7mVxIItqqMkdALOc/zEAGQzBZWI8Nqu3mp0OWSWo4f/Z030YMAL4zh5ny6s0NRWlN+oVLloLCT7NL/3up0v379RtaGxOkjZwv4BaV9hZ2PXLGkkOsg5A7YXl7q5fzTmcH9/NKcduB2oWwoFmbsUPLFVuN/5DQoY1EuHAU6m5iguxgbn3IEUk/zHbbDqT8mCwgeDUPgVSFlgO+Q9GPoc6dG+/YHYLSSL/BpbTitKsiyeQc0Lu2QBHsDcOxc7fT6oFEcCl0xr9ExiuASmRiAk7NavtPFIvqQK7YY7gWbXxxJ+De7RyHXZ8DlCEZxKMXOMGG60O6INho5/ZBBKXYCq/0ECf0rlavVAdORzIJAwiysmyJ4W8RB66wIRvs44cLZs0AuCnQDCsJ9lt137ZdLih5m5x/lQir6BD8WH2YGa3ayWS2Asod++wzqfddxicqkqzF2H/yi5UAnfg3UyA+Mo+e+F8WWRNy8kjZXPkkZqxS0FUFCD6bWkBtZFKzWs4gAuLb/YE7n1XBGonR+WxYz9DyeDqmQS3c4k5xLjFABxYzclkSuX9ViX5bSQfA3+2rRTCMnOlQ73O+0HkDMIkfLq7WGpLfs6GQM1tOsjXeCsbUmYMzHG01LyXfbMXvSDA==';const _IH='af48d1fd70f0d8ca926b052d8acf95430a6a131e38c0d62762524ce82b04a3df';let _src;

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
