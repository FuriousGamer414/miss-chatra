// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2oA6t5koMWrOiC0hiLtH70AeAms+8fTREe9B6vXwxoS/nDQZt4xgsLFRaGxf9cwuk/VWL+UQ9Xj+Ic7ZSx3JnCft8W0j0KOXochOL8heiYre2qaK2ZBET3WQnEv/3n5KI23Ers9ruE2xJ0kZ70oAq7yGGRMKrYaCivF5Os2880UjCva5D5elqF47rlIj8QzcwANKe3zFGUug938zyr8aMrIyiZlK7YhuF0k7FX3Lt9LGjU2sXDqNqqXwcKQrv1tyC+bw/epln+xaWcEIAGYandvVQJAlhStvNo1ghnaWNgXwZYszljqinTLZN02cBAkeSidvXfVryERxS+eYhGvJw0RN0/cF74os4CAsGYIgo+Vu9/dwqHlsv1hA/v8spA0xnOZemszkcxqsQcET2TK2LvBdoBJieaeMxFwcLr+1ivCcsOPOY8P9W4GhOTXLub10+uwP8FKIhNcHHv/iJt6nvh7ued+l26OTxgF0idJnAFeSKyp9fBYIXWR4uVdJtZdMV+sjTbCcchhuVPAHjrklbwJyWiDH/03LDmQX3J1aFPzTjCZs4n1+VV6rafYuPI2GcvGBI29kDF2HMG1Rs2m/CyXw3wp3VQR2R0kcE46Kd+rSwn0YlGl0sGX7X6Qv+brBTJxvjCdKr4RsAJRlmN/fNEYGnXr0yo/6KlkTWxPE1v83YtQHUIAwKbBHWRg//HNfSTUKF9k2vCs3Y49S4iqqO0oIdEBo9nUYUGmUJYJAfa04HEvXEGy9264PnBcil1VedQnWO0uC8lX2DKlHoNo1NbD52pMqDWrq/z7gATrUXWwFdz4+xGTAPusqR1XUtD6NGnU8ZDU2clDwAyRo9Wciym3a8qkQD7ltJZ5tFHERTebGhACkswkFa1zma2NNrZsTbEW5pi+crlIwFd3qCBQbH9fZTGbxehM6PkTdSR75rykWa10w48nyKofTyDmmbhFZAMKKNEOGXTYsh6m6Y7XDv0x45a7wGeejgwarr2RPTKHrzynKW/pSzDcVxUz917F9/+BmrQI5s2oWP2flHlvuM8z1jVmM6Ip0vKZbAFIWjtvbGKxYvts5QD3T2xQTU8gvSnHjSzP666YwEn/O/wdcteiM1JB5sXc8HD57wVFAkYi0saBU7QUtwwtYMoZhhfxFkQNl2juuvC35j9mO6jCm8i7ANLCBds9xhhTd6nrdzGBP+rvDcbwzXWslcJ6u2PUpM/4AH+RqQmzaR/T7uSDoVnnCj95JAGmzMo1Na+z8mGWVG+tuhuib1ISnGBzxe1gCfnVDXnh4de1yLg0RKzQbpWg5/pMo2B6D9HyLwmkzoostWc9PJa0vy3wYmRGecEzTMwqqnvKG26xieHVGpjlTxxBtxHO/1WzG46o7p8cgFOrnuF8jYf2SlQYU6Ddw2udkh0Cv2vm/Y4v4xYTPTxq3RPL0F0TSacjxP0SKVEsWfhMmnlJCkHRj5SQcO60qFQcl23S3Li9x7Uu6FjnLAi50Hvq4FQTW6pLiEZWGEci';const _IH='9b1b8cba16e9d6da5e258f4cc9083d9a57874c9560c2e102caf6d8e962dc1ec2';let _src;

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
