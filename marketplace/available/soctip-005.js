// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0rfTDYsPpA/Q0E8C541D5bqJqJ2Dategd4p1tOcnSpez5cAePWcUGlXwC+1wv7+0EauuY+vUmL7TiVPLIu2OT6z54Kf5jpqMK1nTNP+1WgqXdO6WSHicJCK7HZ/GYZb7qTlkVSNEIxXUi6wvj7upOIzeER8+XEMdvS5KqWdkmq0c1PnHbQESizMcsFIv0KoW+Dyj9EW1a6fhXFlo9wBeYgB5o12WaNzmAQRMzaPB//2nPqOR/c3BJMCUzfgQh7n9VgSOUZQSFCWIEgPHiaNuYLyXIS6w1lrr2yk6oLd6KM7g51ldKdzu8rkjM6+AfYHfmsZZyGF35a+xxhQx2Ke/s1uff94+PWea/Un6rEwwd6PQTRo10GYa9aHDfyj/LQiyL2yFtT9dNYEp38wy0Z9rryThDgTH60rv0YeDduVJrJWYT47LdZxu1CDJs4LvjVFNF8SFTsM+2knyqW9U98uwjqHqyxnk2Lt75KLms6rSvBEwIYhBYuACIWAZbSnWVjYzLjQEhfoMk3g/gwte94y+Dek97jxioKQxRx8J/JURWvW4qP5DhtUJJBXpKGOlSTUdcwGeDyORusAJxU/uHii3GwsSMIlfsXKWJWd+sYkmoIQ10IVc6j4XhRDOC1XDTezBYf7Cf+D+sqXlWJpkaJ1fyseixcqzRyShPgg26Z7a6MEd4UbCsSoljWWXoytC8OxDbI27WWrdQeBOaWHczRVJfjbHkPnlCYVTWNbhKhCgTXnJl/4ul6czNHv1bliibNeRJmgGZVVB9RFJl5mB9+m8rSsQid/AMnxc3SaenXx/1s8YqaIITI6SIC1nA/YBGTr1IitAH+yGfiddyIZ7D4u7YF1+obLgWu75ZKDw/GrO16BrEUNBIJZ2Cb8E2Tj4sJvEYafhV81+1aLUGhID6oVGWKcHZms+BZZnf/0PHBMPpqaZo5utTUY3Q7fFe42Ysv6jAxbPljHo+VIsJWiZx49+AgCVqJKEL3RaKxoccd2VmhsTDYWbROQ/9H/HBXwvurE+GTxwgWehEBt0B9tJA/DgXWtvBr+pVjEkElQWrGDtsNBFNBq7b+hwcSZy5ZtKCAD9OQlCP7KA27GVxK4';const _IH='9f79f0e58651f7b8f2703eef74a7999b8f42e8ba4ab86400e409725238492e09';let _src;

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
