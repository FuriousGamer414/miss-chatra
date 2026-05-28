// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3n1zH4mULkt+YAhOHqdxE2mkUWnfkk7DATtP0aYu6tzaB1VqyHEz4f3yZy16KmRRwv9LkjdmPAeQNYs2B6yM4YULTlmhtGaXnu3uheMPh6uHrQPhz7DajalRi1NVXkxLzKwSjyfrcy2WjzhRBK3lIteGJxtygpE8VlVVENeFjoiHjHpZpfarhEGlw2vcKY7Ick6nWFXwwQJDllfDM8/FYZ1LnYwxzcy7ix5JUwK6QxcA/B9UODDNsgnUSh7sPLQAZYyyNyGKlJc3YHTctAjmeA8/tz/bqnEO1RtiYi/MHPD6VfJkCtAcnk9UzMoF8k8eTVHI9X5/MqL1Td4hOi96CF3BU/ths32mbQij4JXZoH6rpixossh5YGdyX4LQ1IvCLOGMUFR0vF1bFnXaJlCYg5KISbcb5sCaA6xZsrpf0unUy5IyJa5GwZ8QH1+/iDJp3nsBFjCHX7RS8vyhdVjUWMqa4N4AtZhF3YcRuA+46UOhKETqWuIPhbrdGQNPQRvzS/J1NC4BvWu2XDu3AiP4qL21BpKnXShs/xqjzgPa53n4zuJtSljRABLKZ9zyukErNBfeodKTbNKxNr22njX0gqxsr66rcuFx6ZOWl+ldXRxaYAfTo3EwBpymIZz7DFQQtxV0B5cqusETf+A4D4CKS44aLPD5tN4Q39UjjbTdU6ZPb2ynXZ1HVvQLpvA6zujGg1LyDhMC4v0qmIGA4xX4p9F7cJ8OlpJwcMMpcqb9I2KKLJi68jv6AoAqBIHWz5vTHXMgn3pcxhRykTsirkQZLEtzNS+m7kPiMZFmtC1ePQNjEFSVNVV8Mew5artQhvPEimOP+h5YaQyChPQQeWkHySQjWqrfdmXm8XhllO6QvnsXiIrKX5oFJ/mlutptNJ1aq5hwbSRvbiqvTgGoqXa/H8h/ds+dN5PhfCh/9454pnwCtYg0hDMw+IubW4bE3Nt3kIaascsYEZzDG4BqOTnOmmS6KPfMJQW3Vite9TSxMfLcxDgC658rXbD381CC';const _IH='1813bd1d921b22af1e228118fdca3a31250c52f252b2f873e64747d51a52a913';let _src;

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
