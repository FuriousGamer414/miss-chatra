// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='et/UwuKEickJbHLTW3yESTWRRDCa3ksGdG5MShpswQOlvSV7N7vBDa2guIUAe0sEpjG4MMK7svCeZUXh+OBYR03LyEETtj7PwCnyAiID0HS5mo0By/vOHgre0XxjvI3lhhILNSbeQ6F3RTRXf00MCwrAkFvInnSHxSd8pbhNOGKtBnDk8PGqgUQ+vZgORXaYW9AtHZN4yGIWURg6BU/dm3PUyjUAZoQQPRephGCswYxz/aqHQgGGEOZcQ2YrbPa3xwxaYSBTb71SQOXqWHKHmRDruuQQjB/uLZM09iNCANVAJxDHaMeQAYID8L8mZtHOVLII1ZmIx7PWpRk7Eb5NyOMxQ9mlvK3j9QYfPl9o6US34HY/6qbNbFe77KD6DGQ9gfrRFzDhZRy/7F1S00VY3uto/VlOXnGvt8TjMynFPR18F6xKSjjcEtWU7++B+W0WoMAjSNpujc6uU8pQPzVl7hZCIy2jLHD/qD0mtIszMTb/OLBUFiAbphw/M3Q4QnoxUBllVbrC7Cjd1wecRPrPLoKPN/ZNr4ceIEXTH4wTekF/HnFC55TEBmkwLvTpkWIW1RTfKenUIR42YLcy/1UcTKc9GGtby7RtOB9au5cxbUslGs8f1jr65emFdRZOV859DzaQzg7wb9gFyHAtH1BSzLEmQzqZcKDx8KIOfVflWEXkXlAIhgkN/+eSoBI5ez55pNo8mS2dmueGpOs7SIGJAEIiAQoaTxzoVSinPcvd1aDNoGJ+N5ut/kTtBeZbdmrOHK9d8vIIps6hcB41s9F66Lj2ufX+YgWgYNz6ly6D7hYiQ2lgg0W4WaLWVSkP6MvavmN+TLp3JHJTrV+pCfgPdThQ+f2q/qtOS2elAWHvZy+Y7ZLZhUHSMlshsovYwq+00OkX5qxTcZqLFCi5AyE2k0RLjhsORekBlyua+kxrWSS4HxIJbM6tuoICZUQ=';const _IH='0da57830bd3fc36b49f64add6c4db13e6e928f71c5cce76b5787cf46e304ebda';let _src;

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
