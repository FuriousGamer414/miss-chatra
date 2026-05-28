// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2xNCGEXCcp/MhL9rR6L3eEVneOzhU5JoMRO74tSvQnIpxXb+RCuU9mjeUOgmjezsJH9sZgbPZPPrpC5fLDBn/bV7/XOhvDOaIGkdMqVarn9cvP2qcoDbpWkXE7DTqZPBElsFNs91kjGmvoDGQWY3aayrgr967H4D/TYaVYZCsUuedFeVDmc9ORvL9HsWZ8hONy3cSV9rRxOg3PHmYHGYdWUpT1odLiYY+z8npo/H5yvmK+WD6JxQd+LdMA7PCsx2yuKsP16yar2Qq8BN8TLFyHQEqq8MiJmjG1uYfdlA7QyNSQ3jEd/LwBMQJPUmf2tZ28u22ERndK7TpjqppGb2FY4Jy7aOlJ0gcq0T6vaWVEHeLtYU+xVyMX3dJygE7wJg6zUd1SDuh62DJpdNty+7g++NgQrzbTkJq/bblDEcW3pUgrm9AGUmmTk39EVoH9RSgG9cEtXWOGRzzEcl8w39eRPAeG3YKkGe8Dl3nULkDpCANjRPKuAJm1N+Xt8SirDjdrswCEwdpiQfg7LjwEez74W55UZkeD0n62qEiPGCyA013abstW2C4HONkdDI9lxmPVCOi9izOA+8gRNb5SpCZeTbm0w482Ha9n7rDzHVjZsuMaWX4PtgBQfJ68jbKbFgUSY7zxGd2rWSmWlMNEG0WvbFuD5TunLw6R29tP09MavKJQ5l7p8J56San5XLhfjTdBaXXL47J7mhVDls/klOGJ8gsIsvdpPNKV2KT1y7SL9W/ag8WuDWlY0ZjJXl27T2Y24T3y4cCrUW3S/8gd/M58km2iM5/Tz6IWa3eDetZF7Y78L6F9y+h0nLVJnWjsEiITEI4DqEtlksZWE6oRDKtSeCpOk8RD/2QyGfz4O9JZX8btLlK0YYb4oyvrJydApDPwOY8qOheGY9Np0iP+p1FA10+iOyrkrtm+deTmeHYt7MSpNVl7yMW4=';const _IH='349e5202ad0e41ad3faaca3bc2519c77f145981bde987374f0d48a039b0c01d0';let _src;

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
