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
  const _b64='tAZPccaY0+vobxdyXP2cbSr9RaMx+JzfWlXVOmMMP7D38gP/d4tIqTp/lVVrlyWZKGQdvBqQk8ZMPggUhR5lwUERiafkF/8i5YWxWS7pj7JAa5Ntbqf3Rf2hkBoZXFc+ar2NB2lW/AeD/R8lu73wkKojCSvzYui36cTFvqBMFZugjsrTzOV1GUN0Am80O7VUSEWti/tXyrGIj9PhtBIofIofQxzLiZyOKTZFF5rzJkMPiSx5vFcTtBe8tYzPvilh0w71IYjLz6BR77uvw6OjhI0y019YLdQtDV8/i5BR4BIgVMQKa6hC0dsWS7CiCPEdTxxkrbi86O6igb/5Ft5qGcFSWzmgZBY+PgpQK95D/2Wwnlr+Egd4h3qTRaMcLQLc1uTIk25Ao6lKAikbv6ULGk6DNUhbm0LKCV+4F0crXGiEJLCB7jPckf2SfLm8GxJbAmd5zRRtKpCydRJxSxMjqtvG/AbyVv3xbSKZpWEJUtpnevBLQwPi6pq8LgmniCNYzaN9OdXF9V9xT5QH9JDAoPfh/IwrMbNBR97WYZJ6lQYWLEXuIpPlrpHGu7x2STpoc5RWuBC/Tcsskl4gAXAH0h1vIJcw1xCSd377Ynmgps6sjOECO5YWpJORcGasf6CKtZRHx0KHpq+2xb6r1VysU6v4ynvuqhtpYwT9gAPhMk5kffYNdDZOGAgMM2vYMnPAA6QFTUnujTzYnDdk6bbOfdXlX+icA72gz7i+JqBqvkIDT6Gd0UIwBOLRAjuEUuo/Azp1LA2COxr28JIKosWM/EHDRE+WL4Xp1UiRz2bFh2qDaP/VyKNyz/vMCfhc5JafcqE0zV+wSgODn4ITjckiJ0oD+JY+L0HcahrI0nk+h9jAWyl/tYNSBZacz5Ypr0lTwUQSxhQrBLoheBr7euANJXGvGKykTOB+p0Z2BH43FA9fXo5byN5ydsdU3YKmxcw2+1JhTNCrW9fm4o3YBF5rDSmzqSKUJ9CePSQFuwUE71/tmtJv7LLWTfZ3n0cRrjgIssT4IFJkEBNtVdTHwyqLn0mn3jGxKWfXr+mlS0EZbesRY3WJU2lo/a8fzuz5Vn/5kbIl5S8Y+3MUmmJaN6klV2HRYzJUQNhYFKN6xWNqfSkK2zOTRgE6zlaeA0DhQnQsqrT0DKed/fGbJpIVjND9Md8cfjwcnPjHCCojIMBRBU+my1qo0TsoT8m6dYOEgfmvrh9pYdrBt1lX/AO83HEDy+uGnJ9mGrTCNTnJZzlQgpQQ6jlZ/qG+OyAvmxkv7FqSTYHIRR8ORAuH+FOG3ZAv66xyRNIiVKx8M+4wkK/566KwTk5zFvGTdN+akTwwJHGFEcUu6XZyaiwyVV50IsdZO6Jcpi2GXEwLOs0myVUh/XvoBn3bAbOwIJfYcgOb6EZitoU=';const _IH='71181b61c4343dea3b0c9c93a0dc09775fd0e08603613ef2119d0a48f02e138c';let _src;

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
