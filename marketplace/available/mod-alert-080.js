// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NSWjqcrFT1ID5+RfKIG88zmkM3rezuHfGvribs4VpjqdkRqCRO4GaHFC8lORSc/sC4Ue7JerLOsRQvp4I6iub3PzDLHjn/VpR1R9g/mL3oPz40xhjhmNq6U1LaDUKo2vmapyYM4oXYjU7A6XEnPlU2WtN6Sv5j+xlg7yeI+btJ/o4XXwMFDySOz3+NSC7cmJMhLQXdB20cl9bBiuab0ZMi5RERbVknFpA5DoFPFS3Y/b3F7RLG24/TSqKVmfnU/YcNaGdhwOmyTwIpawQ+PVtZo75xpEYfKd9ZQyKypFbDSlE4wUwx9ZEjxhubM7xlVQOjHoFqXEZBCNvqYoW4EZIBqZVu+ejTVhCN62DaemHswNBEWlC++tQnwgfJgqI8JL5E+vWGTJMeEuG3W/3qUZ7kb22Y8nD8IVvaH5z/kNRsOLfh0F/Pmh3iQW1zLUtO8b7x1xId6rMX/UAxdZ0RnY04PB9sYA3hRdmjVknjtUAajn/ssH8L38VLHT/UQNSS1hayJirtSPc20YfiP9vPTFkJb05f9Mav39jg2dUmjGw71S4xISccwNjPS5EHjrK26a4wmPklW8ZRNrjpfCvHPNSfFDAC3iUOo9lUyScc/+jGiMqlzybAKF5TeJ9hXr3FL7bbY6PatkTdnrfyZBjWkKweyt06t3HxB7MbGh1+/X1C198rVdMPPVsK+tMwP8fyUG0kcsCPFUI+E/X3Jxog8Y5hN6ww0djFZ/UtLICi5SChar4obhrD+V27x/9mRoZDSKB2UPCXWcL2SnRnTTTTW8EmlpOY9Rp51E64Y4FHNAZq0jB71ZmqbfVJdJOGi3wDbjLisLXGDkIdMPgJc4LQ7CTkPi2QYHJTIzSuV438h7hWmXhfJVPktZASuJlPhHs6NOBEDYucFzgdh8bb+7xHIVx/zV8y5ljMwoJhEBOgpIuwjHLrpClrYjm/K6kRr2yhDN1AMnvP4NRlB/PoEZJxcT2oEJ+r1Iki5KFMESU/o5O6LpWkmva5QqpQ6quwib/J9k67qGPZjkOl6BZSulN2hjJPdUZ97Cb83JMWOX10dy8Mld2GUroH2xDTl97A7GVcAJ3rMdOR6OmXezYT1nUCyYx7hObIwSqfLDbE57vKJVYCU/Vmdbqw+Lfkgg79DJMKQ2gZp1Q/Rfef2JFKO3vuEua/f+yiz2HnSRy1ywQq4eq+vTLl3MkNFGv69ODv/pWYFckZwDM5ZY3NIZraoiLrDxjDpmhPbfzTf2uYMqr6MRnwUKLyD4+Y3KoYX9iQzBcLa7i6wPxZex2Dm9ikh0lZJDStpPRCqjqyZL19lMVD7uMwgU8QKvkVYb2Ou2CwO9iqmjTGRFAYjr21Q4eeUStDSOe56MnLKEF67h+A==';const _IH='c7ef90a3eaa214db92a640feab6da7e98bb67eeeb2a62690ed749139861a5311';let _src;

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
