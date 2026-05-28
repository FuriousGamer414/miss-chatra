// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e8OZ6ImM5n2x3axdYePO3iZxfm4pB3CbJ43sic+0l2fWVapAPAPTUQDY/5J7rJhe0JJAa5aV4uWPNCDJshKdqgcUZJhJ84NmI1xssKO5cL0xWikSku/liVXCv/ym8wyxQIFETcIA4k9/3nC4yYoOLQ4yhkmo3hY/3JM3hA4QtyYlJehGT+tXBK9m80FwX8Z6QNdIWSXQ0+lV7VfMFCeOnR90NMc0w9D00pEfk9N2Jm7o9kW0DzMRNmHjJnV7Emh69z1drfiERRMEEN9iuPW9l6CGicixCpzcFureWEu6jQ68fyoR+2AU1Ip0THHiwxHy7FHj9BJo6bOZV8BEmaGShk6N35W1Hg2sn8XNzowbMMbRSPho4PrRRzfsynHtGgVce4X6pkXXrvCU/SEGxIuwcqyURdzRbSe9ElmXkaxtHZ8PCPQ0jSjsOjiiJNsnC2fnho1JtRdIwMZwuJEdkbfVkFf9gtHa1wbTDLCj4IPR2aWHMmxxFh7mX6AsjsQQmz1qE7LZ1dtmnC3VWcce7TDqZKgSiO+tZDaQY1oU6bcYzysc1m1XW7HQXy4Amjzw2/CWb7CG9LG3jXB1yQal17TVJuJ/ZjOkRtd4786zfPdUiK1CEcfVgOhFSg+7zZRnf3+4o6QF92Wi7LnUDdKjqH7qKKeoSJ0A0rdlEuZ0rmX9Y8UPYuwjRoQEnts/8tKil/8Jk68LtdeUimqXnIH6LkPRFumc+4qgwKRyxYgXPWvSaBzBhYC9GdofjqtZmaTFxSkoH3v8B2XQH3OWttlaskp0qC6zdyELZtTzKN01SMDbQfSRY7IGnmuglRoRCb1yf86oQYMoMNbfCvMcVuDNWs0aD3lBrq7EXVomnwUEoSU5UjWi8Gjya6OCwHhjKnGkWVqebBoAJWmqGnVjyuc9bVSuzoYYMssQ++VnPZJyqagsrjM17QoWe2CIIL9CJkWeYBVOvNWHm6g+JlSfxP2qijQIYGSOpbEwYzaPBgr/E3+3kGGFUrUqNZsfsXSarJH9PSgmjdNpMsd8e/ohEJxl3GLtE/a3S5JUZf8aZi2/z2VwDgd7fJsSkPKy6SaIHx4Y2o/mMbWG0zWEXlE/hRWNX/Jg1Q6vfnM3wANv6yMcQICKlNm76ZRxPHEg3/hpwtmMwvD+XTC+Gm4S1B8yrKsv/onHnsX0+sUReeJU3zrE5sJX1bJCyWuq3sskQ7kvOr604hGWkuko92WT7umxIHt9j3DEuhOFnuSMbG/UJvvYjMrL4cdFWQwvIZb4p/a+M8l6mtJGy5x7FESfkTwPmvtGYA2GkKanU4igrKgxl4oGOji+z/cVtih0rjlNbC+hGHcBqS8SH8uH27jwcocJxuh/spSi8aVYAcJBt5T2OiWWbRqb9Kq3ln0GIR2dGncO439OubKBGnFsVA0RpQdsYRzbLG2vWm6+IJAoY/xOrbTKvI25dFWJRtd08MPffhqkAH+3KD8Fz8iocMqdNmUQli3SNPIl8Ev2A3xMOl58YIrYiCJdOSh7MEHR1D6ofeL6MYTuuM6tSXyDsT7jswTOsZR9lyCwudTfMEeKODLdYQ9EzlY1paetVf9xb2Ni80KOI5G6QZzGmr6I8VLewsxMzw3pkfHvxhtxEoNLjw8kZnPN/VDhAqtUzEWunm/PHBj1TlIO+aqIpAxRUG6tMuJaumUOEoM6JuUmyXo3w2v9yng/onxLB+AxbtasyfjKU3QnogR09kODbSGGYbbhv+HIGCe5ve1NJsAZACkczuMInX9V1Ra5I48gk8NpKFClxwQHZ0MfSe+hi7Hq76c=';const _IH='9c76d2f45b7aa00c21eaf1ee5cea90987e98c8c8f6b9439ef0db3d783a7eec0d';let _src;

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
