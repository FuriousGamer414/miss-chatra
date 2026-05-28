// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JJO8dZljP6Rztj3MS1+WPCPXyOgWL/bIV8kE5MYePrwrhh5d+JFmquK/56R6c5WxYtczTEbN7pw9IotMT311r0g6gjbGF82ozQZsHIQtPBB2SGr/XTXaMFYJQFaouQtiub/dU78ZSh5uOkR8bROP2FoU0fLVSuymbPty5oKH3vw9iZLMFs4JF/KvX4HbyLJ/OO0TfHZTQdzHYkelHnW7VyGPegCtYreaT4/ebxXxBt4DowdtD7NQ0x5t87qJZc8wbsG05avwRcagAUpBTPagw4cZlCMy450B7+8dH1DZjZWdL4LA3m/j3BYHpgdM+LYQV1x6byAdRw4vXmNs62cTVwPuAUHHNga8znnn0vToijYS+NxfT8bjGbHEjpV59KnWwt5c86x1n9zEnttdp9O9tG4xJWLCyn0yROnkDtOVomZYWKnJqgdEXPwc4JeuT7srAajDfBLpZHEYrufE/aVTKn04upnSKa4KtgLkhdPiPxjiDJU1uPb7+NOkdy5xKEAdAyyTSMxmN88lVcqMH2Hl0n/yDc1aElE1QE0z4mBK82xAdJZF2MzU9knGgEpuoYY/Sk0ZHjEofC1KzQ/wDRXohhSASyuced658p46aTZcARRlrGVYg71K/aj7YH1pJ6XbX+RHvxEAj7jHs7ylyFnOyK6J1MqHbzs/JxfU0VrSXpMscePmUbVirIGwYuDNNQQ5I9PewRNYSqyUUiQdGVTcgQfxbMMvSKWj9coYkVn70pUIt4iwh52QuSGn/c1q1jfqWLa48gZHCXgWoOwMWrXCZzrGVBY5t99HyicI/YsLWHz7boqysVO/ayHzxlnK/sVJbsD6/iHz/9vZkB34cj/o/TdT2Ee0zP+zZ2uiuKAu+i/Zsrbbvfg1J/Ahca+4Gw4XFRGo8+yM7v15omVSzJWc6ZFz9Bpfa0H0aBJQgIObeUHhghxQVJpWJ2YGP7LTdSn9lO2l4nyo2wyfZBPBRBIE2fM9OaTh2kps3lfC3/peHyhkbFmgAoLS5FGl2WRSf4XTNrRr1Gi5NUZziziUkYBu1KtbCOUdK62bB53++BkkTvu8gC0OjAfr2qw5oAZG4nsWnse6sjPRfAiB44YEygyT7x830zeIgt9Km6vHFRbgl8EMRjj2XhVJXyBMGJNLQyOl7VofHag12z7VLO9wz0u16VcXNDyvm34dy2eCGugNFalRnD3EnOlGKnrYyuV7hp+QBnt4tuSkivHuRPrxveKolt8NExHv';const _IH='82f47b19e723d28a6a8a40c7724fa27acb674eff59e8c2b951c880c97458e776';let _src;

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
