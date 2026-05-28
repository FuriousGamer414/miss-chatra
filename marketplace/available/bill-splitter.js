// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2Vd7Y8VrA2r8nP9PmycHXNJ72r6JEwr2zxkr/tqf5pFomDEV479E+qKyzlaD/is4+3GX9z9URnpZl5o59o3yix1im176mgwaRuhb/YPm8rzwuxCKWKkhjHhlzjCzRXppqetGyyDCeLN7ICHPK6hvof5oX/gKAR8lgFTw0KsSaf5on4In9Kp1dKTk1Fqjhf+gNO+fN8kroF+jceaA6xZOzVv2INEDOD9/SP0GiJFFvTB7VfEFx8F/ExQJKwFwZPbPlqR7Lp2wPgc1OT99PPNVevf9mCAEQ6Ej8JJyWj9YNzPzjyO+ARwsOkmmDUD/N+xRzJVyOk6kWzQzYSp4exw7UBb0vzndWgyO4PY+aDKrasgMQizui+NrO0DPYIWZvdmiDGV7SnUi/6SnjHT472SBGVsvkv7mdG6CdHdOfMvaNYWb21LjZTO1H4Pyb2EphFP/NwFe99uvw/Ja7qBr2Qa3c6/keBqEdG/GjtUh/XdEw8PdqHIP0mVaPHr/L92JmnWyD7lVfnDrWkT0icWYusHwuwVuP10BbccvQRitNmeqdFZ3IOiPzxxCzrmzR0Izazay32vYEEviK2lthPaHpHjCD59A6idlhF3OPXvcVfvwRarNULyxCHrNOkk8RSXTtMZdDh6pRPpPexFBmu2G30UdXyueFFyuLFlnUjjlwjYCUBvQHhXzokfeNVzm+B1z3HjxafzOQ3KCwDMRNO9IeiaSJ8ZwtK9yHrHEskrmAWRHinSKIumtVTb2WbkPeLbnPhExCpZHAcad6ppfnwVTpjKJbzVpfpXIiaftHfT3YpTRZlTjucRrfXp0Y9lb6Qvs8juYvZDuGZzYqt3wMTPMNdjT/8Ow7QazJJeb9Vf3WIN60EN3kSLrHzIIN3PiKwxA7HYoi84P7KyHh6n4Fcvfg9b16qnZp9v3UiRpMVNTXAz56BzVqeFvyuXl0FA020Hg8JT8vnULrw5FkzwFetEzsjMtITJT0CL5CebO1QVG79q6MchG97SfLOlBdJXNuO4lAwH9vsWpQ6Pyus3npeIvQUyHaitSDw/xCLYKfii1YM3iZTWjv/wSO2D+FJte9hnuyioS4K6l7u7x16uXcyiUv5u5E3hewSbHwpS4P6lF0w7752my4K8nnYyaNft9hCweb0g07yXk1zbXnv8KLRJwt/jAQqX5sTcyISCFMoy4PVOFV6QXCWO+yHcrIQn5KXnck6YyhqPBaQ5zKAiTJAFtZIea8odWykwtHNkbrmO2kwmdX8pGO3PTZ1y/54q9+XTcQihWKhW8jYncBcR64gY0YAX4TuWnnR9QvcMi3ajHeFjGH3KE+bA9XXeCKDbQQTccpRxaqx/kUHS2uNbT/0yfmMi9bFVTPckr1PYF2EgUyE+bu9GOaKwwxbENeVCSn24m2CW83rzrXnTqdklNMeWOdJ/13ptFMqfZs1MNVZIvL1LpUdVvW8dA9FQQURg72cT8yJCj1xZaryWme64QHNxyByC2MRjkTfirUsOB91CFIhGm0Zud8LjaVW19jBTPZfbtbwY/J1GGWApxcZMtOeFapm+1i5cQZQ9LsYt9cboBvQMreJHHxLZ2tgjwBulBgrxDOA/Rx0tcw8igyj1k08orQLckdZxXuxkq9lQuXmELgc7WEWZodyICfagSso23RS1kALOma/7soxXPZuOTRD+nI7cXh984Rb6/iXVEO0TNpdbngzOMNU/mhcbTmCvgt9gb4XGsoc8qr8=';const _IH='1034f43c8a14d1579d87ba3b65e963d257808bf70ef8f9cf12870f93b363686c';let _src;

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
