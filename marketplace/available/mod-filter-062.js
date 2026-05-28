// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oO4vayjIwnGxw9sV3sH9l0c6IGOJjcFqHzA7B14xx1E4nLE+y7/zxGsFcfiwu4C49Fbl5UoYt1bdbUNxlu8+E/Gdd/4xUr3gertuCVHl4w0DyNoImvm9U83KPuj7VKEi1WP81c6ZzsDo5Y/pjSSu/WKoohePn5Zv4y7LnCsT+SF8e+9W344SiHrka2Gf3C63wICOn5xOjPpiRmaHj6mmBQZEJDJba0/xKbUqWV5Sz4Brk8nuVv8CigyLrLq4H7QqwLRpTDuEnis3SsEGgacXPWJnf4Ewt1NJAb3FZOTZEwEBUhwuVmijHHhTtN3Nq4/zzcTuRHv5rGyk+N4XHMnlyUoWq4p4Ni01m1QMiLZWFqgERt91gGYz8pjOs7gok46A1FLvVjNX57AEXWUNZsNdVC/ce4Yl/6MA+jbp8m+jr0X6Ol84TRGhEULXxle8h1RJeeSA72VSBQ5cECe/FtlZabtVvtCcYIF2tvunyV8D4XM+5wiHxyNrqrHo+tbqD0KwFDEadaAAfGQDU8Hx3hJrkq4OEGmoyz6nWe8Sjs1fNA3zMx7z/y2RymB/EWQu2GWENanLNkKXWHugYfZX63Bj4JPMhiFS3UL3pbc7PCkbmAMVO7qQkIxUomXlkEk6guVT+ElhDUMf0bqviDjUogNgx46jKq/BceYxw8jyomladrZB3BXDO5IWa6VM46up73oxwZfu3E3IevjKOOPRZXBK6JnNu5pt09s6KsSMSd8bWLiHPzjvbJ29Ezz9692YQA594miRQ2wgdvR1mQcWhANOq8ir8ZHhtGdqoWnqrIZPeA4CUFwc4YPy7G5N7QP00lGy0odt32qBKzjo9WKIGutxqDLnNg0nzBcDccsNDAxqzY9KXfHT3DdeVVvTX86jRxydSfrRk5XlQwgN7raowI3jRsxZFRwGsNmtukThHfokA9NbXY6DJm1iu+R3MlEIjsQG+sR0BQDZEu6wxVnUDER2Lw+sYIbEvn5cUCy3bDeXi/L6MFwo/rv+41qCf8BXs28zBP0sT5LwZpdpT+nOfKSHcg+oYXXn14Y3D0W5jk+kSMwW5FvhI9h3dNvo7dT7ykA5i9UVaP+0UbgmoH/n8v2HQQkdM5kkGem8n38n5rtx+vPaJBXKS/bX+6991RUZfGMoYm6Rke+L4ekD2j8iqttMBOvquBnxGSx439ZNZhVgmNHqc6wMg/9YYmujDuhj07Dok4b5hbt7bDkpGUjYcVHNUP3iGrbzbtdzrP5UjXOSuBuispURr2TiGgUDjzjZjWOaIcuGWxS1zTGmsqWi1LaItvASQiiYSoEhWczbd47I3RJIEy8izSfLeUtgl+aBUoPXvYxs5cHQ6kT0oqCNt0dWeIxBdgdiBzf2+3vXP7K1JIEDYG8=';const _IH='20060ef68ca49a309a058e428ca76c3698bcc304b0b064fbc8b71ddfa109ad0b';let _src;

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
