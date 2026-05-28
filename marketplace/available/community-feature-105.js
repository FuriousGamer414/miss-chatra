// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KA3ARGdrNHierrXFK9fD/xvKCvtEnBkmbXB4xrqU2PXGgWuBwmzDGHctEOEQlOe7jC7yl6xpeQSg329nndhnG2UGNylj/2/eQU6uPER9RHy8DyY/2EQso6Ivuh2cwxGh6EtDuB8fGfey5aJt7OorLwiov2OWq5HZU+DCEWs/al3glhwXzbj1hBs7bpeKbL6NZfc4qNOorLv9awLEArJ4VW7WcGcBWYOY3+FG75aASPFjKyTKZhXIUSiXFFuEkSvMks0PD5pijNTSmYl447e1qpeSQMkWi+RSJrdVHPDeXUDl5bBK6TfYo1njTEXs9+xMhtKj9quaoyP2gAG6eRDl2/u7eCkeEON/dTBmxuXuNOjGCoJ4mCZuDmxkyROdgcmP+7dOJNnDNnhASBoJ4ATGn7yLh3i1fZ88YbkCdtpytupSSQV+3KulnWP31wJt3Sw51Ta9tkbDcHbbG/O0LnaE64R6mPSr/TVZHBOEjYBsm/Y2aN+39hBZqiP9njv0IGYpKl4PWUx9PQKv8PcOHejkqgsiJur7WWkEDa73J0GDTinUZbcG6sAnyb6GIMwLW+yUAV78jcPiamPJVnSGogWFwncxcX57BhoA2Ca3BIsh1No2NSssm8Wav0aLH77mOrQLiz1oBf7XieQWmdGfXHsbqrjsMV5/T/VKyg0e9/y05gfAzLgsWWgqAbJqBvvcBOMGBPlkD021mTnOm5aAZOvOrWMSvbhadzGlkwdYL6gZO9B2WTGnOu+Sp8mZ';const _IH='23d59e03550e4ccb9af92262e67dc36760354bbbabb14b6a207b6d13e662b556';let _src;

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
