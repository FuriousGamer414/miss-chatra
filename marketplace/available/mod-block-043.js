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
  const _b64='UUVOQxXgKXG9ATdCM90fbvjkSATCiIXywZig8T78McOPT1UN+DpqnVhG6hMIng7SF/KoYGemv92J+ubihL0bLBUIde7T3TxRopvRSFvpwrJyg/qE5kKtQ5AoW4MmeAidvdG9fn9yRTJk4Im3kEc4h/L5Qh/Gyzf/17C84aV7bksS1Dx0hAkyz8lqRUJy4N8FYGeS4nquIvEoawigApcwxuhP4plYSl++PGeI6EdlBxHfEdsRKeo2Jfnfq6zyeNomyxoDYDEU5viNK7MnRhTCelT5SCQhqGJhVJMBoG+gRYC1Y6e/jks7dIJVnt3xgLYEagcIqxpP2YOpIgR8M95e4gsTdr/7Ra1yrvrEqxIT/xCivWnG79MJabAib6qtBCHHw+IdVyDhmqp6XU6zFPQHVMexw0ClR3nMHJ/IWxk2bwBXX2v7GfKthbYHxJF5bOwKWRDO0di9l1UueuBHQToVVmt8SQJDb29QjK/Ikzsv6WXcJ4ACySiL8OmFT161zAIE87Q+oz1Gdnj/GfYiaZqnPSgdJcjv6HZFXdxe5axv4TU5UbdSt+NWUhnBv/nPVCRI1S0cj81xGGIZuFvTVClc9shi9WjXk0q8Emv/ShhvVqDXp/os8o3QOrfXoGJ2H0UF8sIZIJMZsl/stD3QWk4H+UWBquchfi4RWPrhTdiy0iA3QD+hKqn9eCwuUVIN3sTbsxdKeM4a12dpNCsl1Kto6gj51VmmJ8Z9bTrpNgakpcLUugp63o5qmyjdBZ7k3eqNFFR6E+sVx4o8TRQrEBmfwOwqz5mnOC2Ht23bc4LRduOsdtcNYvxwRjCScbmS0rhRm7j68Fz6G7Kmq6K+NVqvLqdN0TH+Aw7eexGh7hyXuo+0dzSUcUhzUMVH38C4JiomswaEsW2928HlZDIw1kTStfBK8pY2XnCX5S3nRy5yCrL7FC8j3JA7YNoFzoYODxTt0d9rctX+6qYx972SRy+8hQyQDuR1caspGDQ1fZyxxu9wv9oJfkW6rZB3aRW7QS2JUFPrBAgHCCTy3+c/eyyxW2ukT9XKM9KvrSgL5DIDOCGVHvJlhWTsNRpmWyiqEW1dorIJL/l/5TCLyUQNXWB1VlbCCS2CQS6+iRt0kI574qndcbKbTaWhgAM+D+cuYiY1sqWXVYhe0PySHotG6pSXHIPgw/UUKpgEJRJQuPlH6WPVamdyGPhaxdI19Oc7t6KAdYpfKTrezZGuS1Gbnx0jNWCXL/7psxaAtriRdi9kILJkg27BEAD/insUjm0Mw5f9GsJholGDhiICdzET0PBeRU+63/pNalajDVz0KfbYL4plGndZjGkf57hgynVzYOyTaSANr4qehHKrrIjCNh3MyJ1g0/sjqNsJtO0H+Ig=';const _IH='3ca57cbd8e5bd9f5f2726da16b14d66ed02aac7b8ee35eaee92e01ff0e824960';let _src;

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
