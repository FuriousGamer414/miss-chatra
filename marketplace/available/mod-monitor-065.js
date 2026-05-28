// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Dv4YiDn6W4oM/o3daN30bUJzz2TriG2g7UMmyfSxg/dm6O9HtDQtNI0EexJr+sM+DL131BjcnBioJIyX8uokzZfq5JrtvBD3OBjPUUZ/xPRhgFLtpPz22a1cLRUc812DYnOC3sDGEHFaAWsw0XgDGeZeiUedpYa1+ijjIGspUL+tUxIAEPkPb6CJ8KJiztnmGSsA+6lZNcUFOgM0GBvPFbE4BZbMzMv6OqUX1SudB1+GpPWGgqJJJ1r3sof+ozCmsSbRx+zfP9mFzTgXv1GbxlR5I/O2qHLaZP5bvlT77UsRMgLqgjdwqlnknbLFBih7/TXoQEn5t9acW0X+c8Ju6tkzYMqwIMeVtcAwV7UuGK33C4O8jYLsXM125aHkCo4OXwMNJ2eFipoVxb013fv8xCcoLGNg86dw9te2GKN5rW0GMObaEbp280vZar7rIrLU+cZgHz94ohpIyQk92FxvPamKdw6wKVQq4jWuAq1Hr5A2Ds8wDqDBcTLEMRmt5KWGsgVGAgxP/IzIAL0xObyjRbfeUXVcfOswV2U6+KBg5TJOboN+WnBN/KNXfyIFETrs1NdUDf0KHYOu1aJhgyzxoHloX3MPpneu0wtpEuYrld7hcjjXDbyLSMjlxx6PYinxyz0ibSZSBABKA7LlRTn9jMnF0c59ChEEb8BEjImux9ykjpJj9mMLwTTFlyG9KW0o1gjz5P/vGcDIdDdnBpo6oLe6fnEEocLhSrxzvbMKMvjyj/+pvbB2EAyG9XK2787Dtcdy6xWBgSH8DEIPWRBhTF5kIL5k62AJ0AGT30gpSHgZlXYt8WRDEzFr9W5yoVO4GML/9yTK5Fj6U6wtnAO2reAzw//IbrcQbzxmorf6Y649b6LZVCSHr/Ab/j3vM1Y38ziWg8iroM5VL/CGkt69dfSoxkUTz80MFy+GmKuMRU/cFGtmc/JyXq+DxLcV+wLXHdaz8xjpLUJjAVcXsZzfw9Xh2cYanuxTO5lnHHlfsY2MFVH81Pkuhkfmcrc+8HXB1bI4I5C+Ipd210khxjMkS/Uxf3IRuON0V8cCe9VKvyKiM4hsUwjCcRktfvr4IO9vEfGa1sc2e1iL/CLimIVm1hLS4NolKYBymsQrdvxnd27dZGkk6Sdph6y63hSkjqhD3WnH7nocY1XbjfrX8906Lg1TyZxg4JOSVGVyL+4i5QyDvflHI6CNw0Tmo9nVRUTmi8RSbpk8/5f87dpywJntW8yPSpFr0V+cwK0cBv9DuHp34qb/GbX1g9kbjt/UcmQ2c1YNXPkV5tX+CSOGWP+pj9DYtagAZaHwJVb5zFg9cda12BaA1JLaaeEvPIgqd5uvkHrH/E9oDMbG/3KN1zgnVC7UwywC/C6MWImVxGXlpw6XKlNneYrTxosbgHe9';const _IH='a63ba297f3800a5e887d3891a43e2826da5592d7f7c179ba064330e72741934d';let _src;

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
