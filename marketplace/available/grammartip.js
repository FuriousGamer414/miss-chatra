// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RjGmcOKs0vpANWpQHnAS4Z4lqHbxRn3vKo5iKl3QYQMYC51NDoVGNVboZUlmKiW0cWO/W6gPO68X/Hik/wQYBkJ8u+5I+dQsqUVhZ4k394K3ZlvhnTobCjhnajX575a3qFHdujO1qxfnmOa/OlyXMjwkOdLRJQ1RwictXPQkaIetGQ7u0pA+1j7OS3gniR108KJ7lEDZkVcHh6CnVOWGQzwnT3y9QdXfYXjOMgEzM6054tYMZvBjjqwC8FGmTDGgVtTNeIuexI7Jsx9VWUsV6NGWTpkrIe4LrwcyLGza4qcuecS/KmwaAxMyoHTy2Iq/MMueiOddopGUn5SCSwbYwzE6lGQpElrUu6H+m07rS8ruT1JKGc2sqC8nQd0KdoKGaWcoTbuXKZSGM0uMvLB77DEyRsAxiuA+GZXyrBKtDPCHtYKLL/ldrDRVlWLht/rAUVNABGa5/hxm57IvBM4iY64wRxXD0GuCjnmRiCUEr5DmOFJ44UqCdR7oiwYgk36fLll8Gw6ZQxMP9g6nnkax9bcTs4m8Bow+PCgRQE+hLX8/R0ouejF/A7S43jNHIWv7gxudksu+srJrwe+K6r0mceMMmA9y5ByiLfUmKNPD8Xo23Am3NrVdpQmPdjj0Ns3xNaHwYnlbCS83dpcdP5AQH2AW3Q2KyJwm12XE/cdFBcQRgSyY5qjyUAw/J5hrxo07paPmc0na9ydQOCyA1XPR5cunSjiqDT5OogidLUfGIZY+NypL1iMMgKCGQ37BfIrAY/nrGforVMQrDOWErpQ51okZkgRqIGVK47TZEU889OoT6uqpnM+owvWL19YTdtrWDCX6JeHgUdp49QhQzAYJkI6QWWU9DvSVjjWVLRB0j82+jTKGDlCuCjHQsb8a+VsdND+mi+J4fTvHqJ/6kRw9S+1ly7wDt6KSaLn3EVERTOJhzzbLRYS/pwaUVv/cxqy4ON0ZwNdWZKU9IStgfQGX6SuEn8N6lmtT+2/gYBTE4kvAnXpwtWp2cpcsl/2Ot8WOTGk+SM3v+QhbfRLdNRokKxqUMF4HM8qMWu+FH1Abp2f2V0Ejp/JoX1eM2kzKRmCeaVErX5UBzLa2spvswnPsfjwV2lDh0aoIJRzgkb/Whm1NTbkcXWZ9G2hI4OPWk3SM3mEc0ICjUptWW4vUlZ65Hq39A5YWyeWasU8+vAIrXJW7D7AmtiSGNJoZUo+seMZGNg6sMBf1frQ=';const _IH='640dc57fd60a79c52ad78e7d7567dd0eec1dea29f726cc6ba125f94184190f25';let _src;

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
