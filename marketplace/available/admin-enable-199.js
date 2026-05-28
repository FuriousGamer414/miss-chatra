// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='InhT/ReyJdnCGcGRayv67zSMdjcs3CAg/d4bvWsO32x6aKJBi/p22wT1RLy/7iblVImae6tFHGW+MeV+uvGa8MZyVpuVLzjhfr+NTs9JwOL7N4tQzsVXQUtLb87k6hQmRFAqauH5T4TGe5QJPz7sPexjMvywr2yMnuV+l8HXVqOwhNtRtbMiXQIMK9rat196lW0UWlFcHngRF+Ze3L0wEktBDA06UQP9ZyViuyg+NiZYIFQPL70f0G6fWgG7dcIQIh+1iPRXpWXFNQoNY8utcRt8sRz1+j3jptgq2m/uorsxxgyDU6lYv8KTFVsIR1vTNGEJ77x83q95RCHewqVDH1IiSojSzwuul7zhL8OlkPQMSxuDbZqZuyG6EmYSL3l/47j9XNOLI7XecCCWY3kOZpz3O6XWUmTszjlhluDJBYjiXyIDqEo6UNF++hw+8RxlhZLXQ5QBqfsFjat8SMEvHN/c0xHbuUjDYmOh1agaVF2CMr8jDe+KfW2UyaqlrUF9WWkr/hv5S2LX7g5Vbutw7QNu+TqXPhOIwv2Wa0/7Rqn00W9NLkoUnZK5s1ADaOuEcJx1V4CoF7O/uWhw2DaIV9Lowsg3a21N3ilEd6wx6lt/Ur4/l6bd0GfWCc1RibUCHgfMPibTDawviRY7ewnpb+g83ngbY9LJFC6/oszhINVIkEj7eyKLGvwtN0Q8/yu2B+LvYu0jynB1hE6uj9MhPRV9Xbmc0RU6jRVZ/r9zfqarK526abq/u/FeLYrFQYH6hovEJP4YQC8lIow7k5fLfMVbXRvFCfN+DGd0aEfOgOc1GbnqCuhRKXrQc0b7b3GCfyv44slzkVy9rmep0OLCx8uAGeZ2DJJ9enBT/1AEIA7p8BHJ84pv1HS+MhnAh6c44ukWOCUKF1I17QbLx82WzmDNkKWXbzAqgZZCm+3Bxj0FBIRtYS2c0YKd0V1pwlra3lRD5B0AZQMbvXrTgQM0vEZ97w6JJvRXE/Jdt0x8HKP1KP2GNUNnE4+Kyb7zJwuC3Q==';const _IH='cfd03318c4ff1c8370e5a965c3753847a7706d409051a905c2bca2ab21e5f97e';let _src;

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
