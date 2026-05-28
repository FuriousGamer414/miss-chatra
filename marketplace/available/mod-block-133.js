// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8D2jbI7qai0je+vWdLUiPKtU/ZAFFZm3Qt7xPtCJMXbVscM6/9wuMiurNOHcVnWFncluQT3Sw2vJcNkCBkL+ALIyuWj83sG72VA3v2lIwZe1OGxlRqh3hbclMdQ46NbAOXhTI/wpHZhba5WDbIRs3j5LwrVdtTXHj7Mf3o7TGwvGmQNqeR7RUo8Yj5Bv2tTMzO9H/ZXnQOKyJA7c+Ew1CCF56gTo3Z33HeDFMHMsoq8eY04pFN65i5vPMBheXYi2F0eKWId403OfF5MM+yqkqcOLq2b2VOtBqeXxyvH091aoTr88Q9gf512NNz6IaVMs6PY68tt3v+jVmpOlGhO4jVwXy4zt02EPVLgyuONwcGX9748hqvi6piYkhzNa3McIDvuUf54XWY4bLo3QGx850mkFnw/UWghZ3l0iqjBQr0jkXbcG3JLY/19TLnEm8S3LNIeRaJt1LA7lAzeJlqJJEtefEpJYxrR4WfTazVjqJQuDhqx8xbKjlcNEkC1vubIO4NV1Jrf9TQbzQNsBKXFpSw3TdbuQQEUwNqMTIEufAcZ1QnxPeUPEEKS8vWBpdHfZasgcJa+OkST5dha+Fo286EOPQd/znauRYTtGPQrblWA30THbHJ9EhDl5NyRKzzEFWnJjsrK1ghnIgPhrwDYwyLeiM491VI1b56scRG5oHiNruj1My66HuV+56/wpmGleggwLlyCuxj4YldvUi8QIbfKcmaEOcLNacV8dlhuZFicCKnob6kcIho+14abh/t2lqnUBpYluxV34KPV6pMwAXbWqbIycugTAXzwSGDc1D64oVTquBbosODwLpmki9drOYmPe1JZS85zUT05Qu4Md9VTJ+W0o6JAv2oHkOraGUJ+fkyJW7+9qZe1f+pEkKszWtQVLwihBcLAHqerGSgiy2UkGOfJhMqaG5w8pamWxn0ajKPdB0HgFPovT9rLDojorI6yl/KW75YIdEXgRSF0MGr9OEMhZnUiBJ9tBt+A9xzpjGBeGcWMszBFhKG+8Vtp08ufYsgFUDBHm0U4I9jjkYzkkxuSLo5HKpDNftFHdIELVx7rHhLJHof91xWyCnbBWU5nDyKYmodlcshdC1xcEGQqbighw74vizm4Cl9RFJEZzSb8qHOjxVcNr9LaYbtDnEais7o/CIjgHtjSqImVfFLdYTF4O9MxhLpWrHyPEWT/n4XEl01Io6mPbV8EZFvB4AbP+kc4FI+fF+jz8PtTnu9Zv+ru87RIBYDTqOLYHOh0GlwI5a5sWqTVbKU+IE0HSkYGm9yN/9OxV4bu+v9kW7p0I56MyGKSKKnFWA249yVfL/QMdN5QjfNnr8XOHWLjROswHfdma3axC5JFfXGxyEz7+a+b7/CvFC7vZnu7kg==';const _IH='2df384b5f0de3082d2c982c86ea8051280dd041a155853c115eceb52ac406264';let _src;

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
