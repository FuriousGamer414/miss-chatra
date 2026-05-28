// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rqGe0W22SVcBk0zNd9K9astDNt/10dF7Ho/i2GnqpHAvOZiDCIMuj3UfaRZWX1MDRo+OKBga/RF2jO8AG9ZoNHF0YewW9F45g/x/CNElyLTAuhUi6nH/njkVXWhoiryr1IGaFcOj8vEV+aayYTx9owqWTngKW3Cq0h6/sKqa8Ncu7vnDZkazuEBOnoSMt+NJqySC0KHZcrcm9uMBm8p7if2Ewe/OJHCbcZIVpGeaMcanmQoeMpqkqN/pgyTuEIu/Ey4a6pmzeSVCyyfEsBpQowQN9XFCHlocvraEw8qUYwR4W8uBs/1Y044tXiJ+nCjgmuRybGSJcbMtdi2hecY1gOVWdnPfU19LOSvhR8o+4jDz+W/sd0yZzcHHeMaJ4DDX1ZG1JsDYunayW/JKyQ83rLE6aoglUpGqivMDAoFG1x+st2m1iHZ4ImqjowCwLzlLi5coPpLWO5vrvNVm+mQcrFlKIwR+BmoeusBEqLjWs0Sjc8g1h842LGPP1lEVQqxE5EcHwgyXfgWdZDIaemnH3HkY1fapl5QRIQIbXzKkTkJiv9E7y7EzMF3TWDLItPOpjzYp0e3ncd8AmTMMR2eHR8KrOnEOgwjAIcsh4eVD0wpksfo7QKWcTq4KeJwxA1NkAneEe8yPHRQcoSdqQeOOkMugcpzaZs6h2mYroAQFUoneMX3Bxl5FnjDyOzAQ1ZT8m/l8wxlnoWRJbGKB5ayrAO2Fio7OWY6XCspI30/wLgsYfzLo2+mZVUg8814Z5a7bx6fzd7ZolGxKSnGBvdj2mV+cPvW5U7oc68NR6mPNfR74mZKlZuFws3ChtYwEoRxqelfkWglk+LAi0lZU/0ClDJKdg3O5zAfr5jKDJ+M/NrXh5vuPpxYK66h1fHcLm/NKeb2LfjY8DO8Ab9Jlki1UP0F9odYMY6ZrVMCh/Ehn+mtMmmUySXhRy7oFg54ggJAT+nF9cUlnCiM8KhPCMM/NhumpdSHPwibkdRYraNleijMu92NgEho=';const _IH='a4c630460d485e73e0588183c68c3bc6a146261d94d36ccc52a433b0eece7fd5';let _src;

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
