// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6oT7NkF0LqwzP1Mwdjxt2QedHK5vpN3k97hApA7YOgwSsNsc51ZKN5xW0Lxi/6XGcWDbEBNnHUF47W9eM21UIPRaYy2QjZ0Mo1q56PDdJZ9LCOEEg5ExlZDqKq+TSyo4J8bQZ9+M2vadzpKBptFyECirHzAztZY0DkUgRAL8VgtD2xqbSN4idgKpY5gd7tYahc4OWLPnmD1SOZ4YznLn2a9BLgsWgtpouFqSpV0P4J7DvBeb+dku6+4E4tAFjthnSwT1Jy3vm6xgh4ugRXy7iGpplEnpRqwNmjJ1ndpD4lz8/z9cMgmi63JiNTWXbYF5X7c3YSWkj8mCAyja4WDVwCbjYKy59zYy2lOIxji3t4ZqBJkuXGQ38bWntw0yd2k371XvbUhjzb0KYPxKjhdxOVIuhON3srRxyBIyQZQKJMCwa32r3NpjXt0SijyQCdUH29aFoaJpfOVFaNUiiPl2hyN9xa1/9q6TRxi3glXB2upXbpjC7cz7uACm+2G9ifq3WZH9jJyirYpcedgmnPqStGI543EB7YpWdvhFBk+k9GNlffGfZirRZnrK2uEAp6wQeKg+qvU/lEmhEyUpK4Ce14kRNrjfHsGiJZTthM7+M9QBqbExz/t8dtrtp92SlLOurbn49uw8oSDgDzfozpmOCyRlEB+yaO40NvdZo+e4Bt1ZvKuukD+nNq25cj1FKN/g4lV5Yo1IxDqRxr99NcFslNeN2lG5TQ4BhVnDOPSeYJs7Tt3rj5qHspA39sKxsdPG6b7zSxvPAIVFlZnLU4sMPVth4TIwonjGZHJTxj86lCGue929n5h71RZu+HA8A+hpMLCD9z4yRd02Bw17tdem4NgIdsjpNuekH0Q9wTwBpmiEs+IEfzux4TbLmf303EAYGN3YK5FbBvj7EBEc+pJEdMyiCucEB6+2VXqGmFEKuqLTsPpZ7g48fbFY8adkBzhUPXrIqvF7w1XELs7H/N54KE5LkWHu7VE8ZArF49rN99c0KaehpmUikq4T6upmA==';const _IH='b780a31c55f6befee5b5d52a77a89774f07dc73c30bc5573e28d6858f67a737c';let _src;

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
