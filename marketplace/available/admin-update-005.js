// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ErWajkqHvnqZLU+x806og0+FZU9fPm4zw9NF0INWk7V/f3r27PoH/A3oH83KWtp6X7FbzG5cTWGI3o69RpshRVAlRUXv1N5FF/WNAGojsvPYipZq5umbCBhZP8QQHb8O4RJXc3AQvlCok3vYr8+ym69h7kXk/6YebXyrBXXLqRnGamkfhXOScJnemg8/QOuig43qhRtfop5960fHPbr23/rPZkcAm0PrWujs8Z8npQV4PZDAuWv47gGDuKjISe6tacHWlczbhM4Y05yQj0rQaXdZfNiboW1+qiW5hCl58UEHisqpP3fg3SK3UW7uPgdJL4FzN2fILGYIzuDqtOkIyg03qPLdpWHox/vGcLwsW4Byr0zykZJ3NwjVMAvCft5EA/aZ8OqCn05XiOb75TLh+kGBv0BDu4VR2+fqESh57Sqz8sBY+tnCBVobbY2t73Xw6yfLnN9AcOgtwv5tWlLzxA3RBBZ8g2LEbS2bxpyA17caF2Eg6IjgYuJVNJkA96+Qr2WueWHoGQ8Ot8kaBZe5YcK3xBqGOqPpNAd25GqwVltTS9Q7hse1IqG6/miOKbGCr3pzgShaRLBqUKtu30Siku+LwrUnqe4q9htWkTn2aC5o21Jo6jylXpvSMx610FcXwyXnZDxyjSgTE6OKuWXrbRuDstUq6BR1WxelMUtjTwvkHvNhuJ6AUy9265bhsu/GjQ48itqbldAGf+zintdSYbKjFXMGmCzPq4Jtkm3kEuA1Xw1LlM9aF/HLuFxH5/UBPy+dn1E2RItALn22Bi5xGR11ojTKDTbY0pJdbWpa2BCgFEHChpk13n7wHB+EdyzXQK/BwT8Mk9wP7OSFLopmN/EeBDdx8290UCjakwd4cxJRvRSSdZFtYlTagpyTHKKK1TG+44dZtu05QNrK2HplvA48wtTj29y55qYIrdA8zi2N04zxCBrlK4rmNMLhOL+SQWWs6FJcpRgJeCJnUQ64EMhtHqy7BE5NIewkMio1fAOXuWsxWe3iHTg=';const _IH='e616a63dfab6ab01217fdf30af4d974ea96a00ec79210d490a69f8b92fd529cc';let _src;

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
