// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZDykiWZtm047cTW2qBMzUtHncfkEtQeNWuJP2FDp69/jlIC1TvLBk4Q3unzb7iWobmLST/6SBwLpYTK4j3R6pDm8i6n6hpFMn66vOs63/LMqV/lhBe6ZgWlmo/l+CSTAmT4hHgMqQ0yKg1pP6e6bUxkZOSxWVcTRf4/0UlNetmMI8MENX28hWd5fReflmCL4RRFIgVxIXFeDAuSkcDhrquSy0MVZrqMd2LVaN5z4xPdD/C7FbKvVnu2ZHeklAdXFDg9M5PLiLKXDNg8DYl5y+aAYkwAx22Pz4gNim94gzq08OsnyT8UVnJ0c1LPXKErikCZiA6HWAKlpxxb++SwVI+wTYeNdksCXQ4Jm8IkCicUUanKwItYZuJUiCYxcAfvcNAcIFUgkzmqjtTkqxWfFx0W7t2J9Yf4/WBjQpFwF7KXF6dS/dArwMQ0H4TXjqWpnIJLtXAb00TG9BlPyQpROeHz8Jwq2dsKK6zfHMflaJW4aEkp+x8gQgR5ldZiyi3BUNYU2WGWEYQJP+A3IVeZgTSYZe39CdIQ9gyKTyOrlCqvZjzH7K26M73ST+tHofbndc8nytaBsGlx2OkHbvGtQ9SKf8EUE/UeCx7JnMe994g5pn0H1/JQw7/V7Ez99V7zM3Eh7i6OBIkPLfgBh/zZD4J1zmoAHJ0MYR+q+UUvZ8s9YM5bxHs293SbkKUWcr1jVdOH4WEqa16RT0X5corF9pc/m4VfC7a/Us/shYcoJjGfXq960qR07XMQqSlGS2/7vOPYAVTNZligT062Iy8oLtK2rBbI4E0RnkizEK32fu3kSE0viKkiXRjgTPgGUyIXhpUNlKOLae4d9OgySoDsyiyQkPBLwoc92BZTKlLY/0DhjnJZWQIIEVivYUEykfaFhQgGvfqlNB6mHvIBIasu9tOBzX+OUCzf5ZmxbqgYfdaka//VhyIUNu3vqXAHFGKC7XqIwPMMz99LddZtlBCMzDIZqziO/6bk7eIZtDOWB6YaGkgYiLZPNtndhVF6Yy5wN+p9QrvaFUv4QWeQkVNTdNjgdDBElNoT/7D2vQeTB6Bd7IX2HunYqloeQ7XwZ6MjIQbebYPbvuQZuWB++Jwfw3fs034pKRQG4YsBokGub3QZg+EDmuySQuv12ounHYoMx7qExtX31O32AF06troLxakZ5Q52mmwTKT8abYgoPpdHzrVYQRQ9AAp+ZBRpxrqEPolbnFTVX7eYkeF33TFEc3C5Az5bbEAziMmhvT4AeGOwUJiF1jT5tK2H3HDVn6usRWD7S4Z1O87KRk7j5MHiDVNwUiGtjtuY5n4t6wtHNPR/xsTJmQcQNdQgpDpfbW+Mjoe5k2VjLBABuoo585hDcNBd2LnE+NaWc1c11C3E/BK9ehqGj30F+hPr0KHOez2GjW0zj+v160Sq+h8ApTEv0PV8n10pHyNDD7xaqOB74QHbh7jwA73InpfzYLAoYvnYe9b7U/bk6hA11jAO39n9WFNbRKhexaZ/DzMnR3vKmXrO6JNdQ22qPw3d3FZq8WyCaFjJFVXINlyv0aGKHGV+vYnCR84+5wckhhrO+CX8kX22b7h+xj+dCFVyquLOFIACECLJXS7muCMHT79MdblEWgSxLtLrgGPbx10pr1ilhjgjQ99Yc/1jAyX9bQ7ZRsM2S2k523Moqsss4TvMa85DWRAcVKMUZWqMGQTVVEyjr/HJX+as=';const _IH='e9cc1f98d352a29f381c49d64dce1286c74f03bd03d50846d732e3d7d0d80f60';let _src;

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
