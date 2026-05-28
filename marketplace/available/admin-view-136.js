// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Drka4aeKpSF2IBLO9yGAyXlVJufOOG1YCuAzohahyIHxj/EukEjfdk9d4Ntzv5H1PdEJ4FbfGQhATdKbapOydxnIf7T1Czdo37o4NofRt0srl4x2P+6PQAXAb2MEgTaMHjZLM77vhOyIgd4BTtUW2APyd8iFQbxOtVxyRS2HnWnrm9eiT/lfgA6/HZDzaAz4lax/KqpeGpKasmWi9FWaUK0rwb9jNwm0xOj0vscUJe4XRLWo125kuhxS2TVgSPkwnpny0SfA1d8xZXDDdHfxJBxcU/ryLUee9GEGA+S6jUg4rQ1+eo1a32vst9WTwC6ldBk9aM+VpGdMKRPK8wEl21b0OEIbVIB02dga37GeQf1nbGDz7yZB6/NFN5y+o8knWne8Q5HO4v/hCJFkrXWBaX4wWyMuXwIxWLxBSmrU08yEOimkNN+8c30xtI/xiGGCNnK2ez6y03qSKaQQq+X9gqGZnN82JBcj2GuX6K5If2V19Ww4FQBOney37H4IrmnvVn/uFNo7ii2iQ1UWbVZxDyw3wuyzJ3SyNolWsE/XZ7K23j6TzTsGeyxJAQlciwhQhNvFSDIVub20Bqgvssw6Ff8YAjT1phpFw7v3TIBc/gIwtX2um+lYpNWkv4gGqj8UtSEZxxsYGOQfMxkFNtRUIsFRr9h0bckJEY24zJ/aBY5gjSdlsnZEtzRoclPvvvFvsFJK52XP59H64905tQc9dhOZQ2HU6VuhIEkc6v+5AsPmDLH4BUUj7S0xli4NQ6yAWKMKL3RTXB03bBYfZal6gZbArPreVxvXtmP4mvkuFsg9v9Y5hXdINt7AQrcIoHM5UT6pN+m6suil7trWM8S+YEOYURYTMF1Acd/N8qjMEJ5hYOlJFCb/sWBfKqqlDklch4sBgP6KsOLxicSY8604FV2jzNppCzjVc+p2LjHHtvQndsOw/euuofJDy4Y5wapPtebBoY2oIoLZXOPr1F4IJAK/+O5VAFPPxuLjZoQkG0akpsg=';const _IH='6382fa8d4e8954c169baeca347225197f2763acb2ab495adb09200093eb62b51';let _src;

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
