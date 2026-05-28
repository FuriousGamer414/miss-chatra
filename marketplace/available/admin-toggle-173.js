// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ41JlEHEyeWTC0En1wuwX6YHchF93TyS2se3S+5NnLz94uuZRDzP7rCyhszLsEJ9wj17FHwS6uHZ7DNda3EQt8D5l9BtwO0lOTUNPm/p3uy/5j++reipyp3pG0hVpHTqlDIlvNHFQ21LdouRUFgxYz4Ykgdumag9+9LxKH/Q3dNEKCGSPTuUzBcO4KjuywAbh90xJysl6LKbTB2snEy6tfJofnbmQFmw4G8HQ4GxvKWO8Epd1BNQ6yJRf2lelHTlHb6QhLiWb1yYCvuE3b2YiX9pPpCKy+3WgnU9eB+uj6Nn+c8wmDuesI2ThOH1Cl3rWAUDQd3/vLA9KQ2gylCYt0YtrJufBHXTEUEG2FoLi72OVbzIzGhkREsD0ONM1l/Li30rrA0kKU1/hHiTmsOxfawthX5MTGqIx+gWZz7CB1w+AFbJef2Tbu0NnmQOd4SaEmnDQU/geGKWJrFfi80fFJgrZhKIa2rAX5aSV/qgm9QsF1hGHJpJzc62gcdXJrXxMcEUFIvcT8omz2fNJou8UPYIq0E7dhL4hKSfhu0NdA+EygxqADAdwI5iYNjbDG7pw+5PaTO/BtOZXjpX4mKpUSnLAZKWhcGg3KorOIqKxMOya2zT2Y3iKNwxYNwqvghHG1QOKsYvSqXXkn5UYNnsy5d0yxuN6VEMIiERi7bwv4tugIQ4E/6e59XYOK4LpnKEBkfC6OUem0LAtmS6LjXY0FrknVPuVEn05dQf14cMqbgXmUyq7sJDTRVSmQFEXTfTwkDnif87rjoZJdC5/KG7iAZrMw55l2f6z8DiVg5hb/63JJrm6nC9FQUOjrTfWn9myMX+O5HzyVvxGzy+sIyHgVd909MioFzucGDMuojS3JZ4jMmnqJcAsJc3RKKrB0pF6AdLLJFgQ2PSd6Gvq1MLVC+UUH+syAj2ya+D6Q/Nt40g32v1SbrLPll/jmAly3WjhGud2a55cM3eKoE/jozVNo1gh9Y/D3pKECra++hZS4eFsFR5T6uJEH6bessGYYtNnOo=';const _IH='3652e30dfab54393023e326ae2a93491d8f58a5b5cf58d08e8c17ce16f83abb8';let _src;

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
