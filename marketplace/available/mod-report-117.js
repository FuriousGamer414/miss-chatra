// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bfRpdFieElmRsgDk57vNJ+dXQnHyr1F2FUu+iOhDHxm0TiafnXXgdodnrp19dzMlZZiSCvrElgwwt5h8SWLlcapDB2L437q2uICXn66C6NcWXViHHM6VDoDXrzE7oByseFdcUIjZpy/6LizG1kQqqXLuTzEXQG1pgi2rPs8yBSdyHr4XvafXI+Ul0OkmaXhSHubxItAcMocpWckLEC42n74cXH+kQQgSquYf71gFQ6Yt0uRjU3yUfFE5UAG6jDU+0NAfM19LrTf3V6bA76iUbx+n9ykLRnaAaPftqNNUpTAS8/GkBR5vrOlXC53iVZZxxutgAQxjA66FEUslRcExK7hBhu+R1P/TGEhPneMLN1HtMIZabkGHY82Y6W2pc9vYgqhVYWaGjFmgXNSfpQfyzRh/me5qOLrLuwvTCA3tSUyuCwaTddyixU8o1AQOEiRZdP1QY6fwvSxYY2zB9IKP/tOX8makcqzjgo8NgZcyVfAxrIrFhUfCek/qY2GQYRTTPXGagpBpt26sHA+w0L0TmUlIWWFvQJ2zA40htcLDZ8LIBe/fZMMVXmbZsnzjg0Z4qwLq9Lde41ACpUiR02hRoDieLVEB+ouHV6eDzllkqXBJBPPILsMA9zGD87UKwN6z0nEQgQWaLZAv/nNxRUHVOLRGjiaK9DzJSCtHRxNu3Bo/+7N300gEAw/nmtlp8AzzQu8R7oGF/Sw2BPRZBMl6HQe4L0S1R1A3TQcjjAeVWIl3URKXd9I1i/3PU9KwzbcW/+UZRVARtSj0Xva+S86wdT2GZfZ9Kti6f7CJ/oL1ZXtjmxwEDOQrtdGtIsDhV+ysvjCiqdzba8vimXkP3t0jLCJ3i/k3qKToEov7uKAW1sdBzGDyv1DD19JAZ6qrF3YP2G5jlyW+4pVmvhGNssA+/H/+96bt/m5pVzH3EaRAjv1ZRIW6ihb0YlLEvzCiM/hKTtEBR8dQs0oQR2enoFi80yPl8S7WLFu6fP/lsjbhq/xtxQXpxhFbKY8sPxnyDZl9kkWOnvy3gYvsp88XlzlWFF3Ao0qbAeNpQne2FU9YboUFZ1XxoEsZ5S8t07J9YDil8oYa+BiwlM3pbq5Sw42v9FQfrFNYzEAcKNIo/nP/lxg0Nz07Bkpmw37f147lM0RY6oimYiXXXHh1r1kRfuNl3RWoDP2NHfdc/gatpE+vWkv9hQVt0yZewDbvitX8qv77yeHmtp3z4DIwXdMXQrZxcJApeM7st7PvbNA41qZ/ZZN5K/6WpCbTZ5GZMW6j1ntDpUMm9fa0J9Mn1DlSJvJAMrGrudoDgsZdIev+k6X1dsPxgXKVq1qwW5JHa0MTkHkfTwNXI0LPZomWN16rCYg+SMHRxU6AEYayxqkpPRx8bbPT3HzLvX2fLA==';const _IH='20b5c487c6c2a36c1d1cdead4a63152025593775cdaef2c013b0a9e1eb54377a';let _src;

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
