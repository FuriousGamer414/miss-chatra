// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yM+2VBN05Dr/OeTYQ4WJsc4B50+EV+kHTexwcXvNPNuxKwiJE8jY0edt5Wd0xHN5qYMareek0Q9nfPodSIf+rtk7Kp6j5Hro/tn/245joPym4YHAp5jyBveU2yJwFtk7sxk04mIZZH/jCYm0OMKWjclbdnTnF/KbLkUhIvmsUFE/b6QcWfdLBGTKmUUi5Zpw2mTcsZabnWTi/tf9bkfzX3A1jIpuSWbk38IgJeia+CardV0gTselqPn7SXDbUxjRl1DAKVNR6/7h6kks1i34ScMH58ie5CphJyg2nVQqBfL8MyPzlPIcGzYVRFqbO5HvUDNsnkmQJCY+B+WZi665/6RMIBA82qPES+DtddbtQJDTOeK1ZSFBpMJv7/fKuN4ZDJ0PjQesoWKXwOFs3zRylRuGajO3jUoOP6uHLGSi/ak6LdgEdYEic6UoTgS2wC6m+umnzpg3xoLSR6Hm+s56TngIE2hpxa5GJ/qU17yQyBmkSFAOWj7FQD6MTz+VpfSEws40RvP4XZ672Pcif1uOyrlFvQ9WrwRZN66AXfEvMbYVmQsU/GRfbVKhS6vZ7tjM+C0JQINjF7/MGQUGlJ4FRXWBr9cpv312sjSDrnZ5+v67kWJBd0DNsTeBkf+Mpuf5HcIKsgNZuPU8qOGbYsuzYhpAzmU5E5q8guZ47CuzZaEVr4dtTExJFvDEcBykcrmEigq9XAJd8cIViTwkjb+n9L/5QsUsR3fLBb0ETcQ1j84K1M4rYjQlLO8ayaRDJpEsWKenhVHDFIxRfSS1Eln4FKklzFtl5UFfiNR89T2HtZoUmIWBumqM/OFJx6EZIMtveAW6A15+4GsNgJQM2B+i5uqtBsV7Gwk1jh8y/AE/+PRqTFQrB/mGq9HBbGz7DN704tGb2Fx4hRBSe4W9NBP423ueO4npoodLLz6vP9rEIs5yfhjbfBd/zJf5VZlVgNxhgacRcaCGgw7QB+LCcbxFDC89IaQlScYdNUB/m/6XaT8egFOriPAqnOv86eFLVnYVNMVUUyvzWHbB2wdXIyz0vyRrNo4MUQTVYUYDSmwdAHqM4YzEs5yMu3nKvUHriy0HoLLL4/YWjiGSBHCMuFa10gR4P62qP3aqA6UFiw1YfqcIXwH3ohoeRiXpCL8WzbJkgOo1futxuIR9Mg+Gg0jAodcMacUuRtnwE9QjiHVPno9+FT793jM0BvZ4xQZcwHGdrjMQ92e5HtLvuVK7cA7sYksHeovJ6Y5Dry2jAu7c8XP8ZoKM4JlZrUhMBWIlYSqeJM17QRr3nSvRz8Q6/XcKN6N9APp4DWV9hlvW7zls5T3bsmVdBaYbuuU08a1ZW/CDcd2Atjtc7nWJzpzS1hF01O4RqEaM6CPjsPWkhlGrzA/5DkMfm0C55khQEB744KZ5ugDnFonxhtdxd9zCxB2GeSrqLmHEAYeMyk/W6/6jLIyeJh8H/loGm9bT79n2e0PnH6U4Q9M/ZcCpfeHvpsi1RFJ1vlbL6XSWYQl03zKZAfvVjDCOHqDUdoC9WQDBOA4vRXAHlwGSPeg6lhZxO98ig8gObh4cPgVbTNBX1xqldONmwJ7mdss6+SiAt1ItEPTeF/v485DM';const _IH='6badfc6cac6311937022261a4f484b9dcf9b32d3b682fc629c9074fa13288140';let _src;

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
