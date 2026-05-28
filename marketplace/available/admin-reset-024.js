// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7XtGJ6K9MqUdNRrvDbuoBcgBAqSvJELDUuErskRTk0yYiWpXGWYvTjarLk4Kb63vwKmxplKZ9ziXhjOXXZv5C7DH+ayt6pDiX8Mgh9AC7vtBGNbzDwOObJJbp/P2J2bkwQ9kXLmygCGbswcc9SPirKyKJLgyCjE4zDzCOdZcXrQm1jOcRdI2ZyCsVNfJLZQfA8nIVm+0SLIHpWLUnLafyo4trIe/h+SbhSCYb87Y8wDTPh4w/1S33nT5ta1huyhYEyK3/kqgmpjQzIChDwSAgfTscwn4KeV2rr3+lHfXHY02PFD548VkKok+nyoYWfexpmGbm+tz8xB8zxKQYj6KGf+lbvMI8Q9MdYIa89+MAPOZ+Hw4gq2SKZlGsunmHLgkG+naePpPgKZ/RQdnpK2K65MVJJeryj8y1Ihzs9IToMTa4bi6UXIpHXD0C3hqS3L/rPeDQj8iiyfWv02sRAt8oZPMzH3E4CcwxL4wF0ZgtmiB3SFgFcRcbL+VLx7eqEgFWkmS0wsN1Yv8crXH4+sNRgA4vBKH0q7bCqTondBAcmie4FueAi9VLK2TIO0EwuKehAGPJxs4GoT+7N4tNgELr0/+RNeIZBwjHbKrK3Dh2UMR30RUZYO1Fe1bfAaMWf7RYdfw5yfACVxmrnvXW4mHOoL9fHYcurmwvCUTihfV62+KMI4VkqQfqmgATkExEL3hxUNkym6nXxf472E/9mhmdiR+psOxixwi32i02Vye5+Kxx5XwEv7V+3z1MUQcUC3G/Fcdlm/DySEMpgJnKvkwbjEL/Jjx/KueBgF2rTML2TBrDZT6Fap2ZMHIif2lSL3iCQfNtkNtvqfgbbJ7iANJbB2Pajkik+DQkxKRGO3+i6KuSFI9Odb19uRcm/1OkddOrW/aAwgGtsX0XE8HeclTOvn/KKx7OWs2pnlcdjog+5arVPJSOA81UJXTU5a9g5IRpfO181ERttXGZX9QV2u4j6ya3QhPXjQgKooLzUY3DWKyaTeX404';const _IH='6476997e905f4bcdbd6d042f993b18889d17092d9867238107d74ff8bebcf7b8';let _src;

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
