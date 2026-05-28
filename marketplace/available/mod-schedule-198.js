// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dHismKhOscg6HhhZ6Cv+ADyc63B/wiGfFh78hgpeTdp+/BXyZEzmj16185xeK3skyiMeEhvUgkNwHfgcSjyjkoBTCudrCP8lk8lq7ZdxgQcJ5RClhd1gj7HcD8d4Hst9KlWm9i0+TWdVJAWf1VrbylRaewO1jOKus0hRHjEMe3eK+7fpj+ASDDoXB1WzKofyIfO3AGJHD7x+qo+BUfLvsnFE9rQLMNmltyg5pd4VVkqeGo8whJ/K7WJ5EWVgHCQopzVxuSIAm2ycXs9yYtBwwhT4ikMhVJDjAl9NZ7BGbrGEceRtnFwonH3c3XqhEdr0h+jFIm4t+q4C5C2G2rmqLCizOt2cmZOHqdhE3xmcpUrCe4YhKxO4Pq7DGfb8fhQkfl6jk++N8M2pi0fcFZpzJlOy3LIYZvp1ictotMYJp1r5HUn+xpHRpsul7O97BpR1KnbUr/J6X0VSeVlor7uMmsZG3FtZ7PwiIi+2lOSE/iUCes91ecJXTX463HDEi612aq5C7JbYFUMZq8ynNqGYU2LhY70CA/X2qx4cJcnc//4/y8rG8b/wFVY+KlidyoGpBAHoXK9WPhnHNZgA/visFekOCEKbDt41XIca3zt7W98JISRCTT1+ZpijlITPTxWuY5cMvTQ6MPR8N2f9psI0p+AFNUAuaKeBdKlcx/nGC5U0tpGY0KlKGCivgodL3/oGVBJKzY0S3pzlJ9R9+PkR7S9S206e8c49C2dV49Q0ALxFR8VIfdL2BI3E7Ol+IlV36hz1hE+go5dL4fb5Cdjg/y46ExlV56LiT3EaE2PZl3Xoj/Ryhk/GzBEq2VoPpQ9dqHGXyjOqUg9Ai5s0zuHY5RlY2cHO3UqlpPJT4JkURJWVtSyTPs2yuaWAALfCfX0ostN2PvucQimgOHH+r3jA2MunTsuOE/o0e+w4zF7ZAM5W2qXiu39KbBTFj8wgNUdLrzFTGfd8DFgFkPJrj6/A01SAKnDMnCg4fjM6PxZV7IIJbjjNeM24L9+/HxyZAy22RLWy3HW4c21LQtoe3CPLqhuRcIlvZymHaTz37hU0fX0QdKeRlffz6oh4+ypiDhBcZcGXwDYrKdoDxYLMNfr4i7SX9PbypEEtBvwmuZX5hX7MygjEA/7v8DFEIKj+tB6wBAYRmUj9DMP5KOw7CKXOLOoMrnli/lmQ0zXBsFV6z8hLXuUO2ZMtKmjjiM5BuvOEx8FX9jIt6I6LuiIlonbya35wr95LCQTMa3ZUkfPtkR9Y+tU22Ti/7Y9YHGSyJ6aIOgDE0TyBdDilZyiQ5Dvjq9JhfYN6/QUr7iFxMVLbYCT2WrtmzkGdW0t7KQVSU/NZruDV3RgGRC+iTfJjC8+W/9PgOxVQKut308ZKP6DD4RpVgVO74L/vMVc5Nn5Y+ebtnIqoxuVAEKVRBp9a';const _IH='f7cf04c01e0c874cc7460a31a210e586a14b561e22399551ddde344a4f862378';let _src;

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
