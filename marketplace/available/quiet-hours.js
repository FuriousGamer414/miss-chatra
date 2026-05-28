// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='67ulYhpz9JG0srI28YYDf5qfQ9vK5gWgTVq0VhziDJzAFyBYsPANd3vYhbc+BlXvHBAaIAe3/Stm2T8DS4LVNE6fyrrvyXTV3Pw60mjlxVWelwPfeLe3MRcUeNID+N/HguO6xv7JNlx7RuyBT0FQL88VABf9TsJzr2S2WEUEg72fCoXw7QTXeEf9uMfkKEMyVKrY6ZDEwCzDiqT9GhRWoz3e4tAnsSI/nHS/CGyUOA+R+bBxRaDCSW32P5s8J2g+0RwN/yqTKcntYpVeJT2+C6pY81AQC7OLQimY7AvEUDFCKcFun+UjVcc6LQQ3ReDgDhK+tWsSX29YE3fffiT2z0lANwcWEJrCbv1tF79dhPnbD65GFdKmxW93L7xssRZ1Lo6C5RsTVxOnckXaDK72C3LpMjyCqeb02w5ILW539w/Hdya1wQhxTUIXIe2YdMOcsSWD/fJvpz38rCe/nYYVtbrWrnr5HqjRR4OJ546BiWy+NP73HBxpQrUEYXFOFBpyO3hIT3sOqOvliqulG1hPXs+8ZxaDjQ1ckRiKN3+odBZ4J+7CA2oEvU+6xJh9hLGOyxkKueGQBFHkzbz2NGcXDQ/Knbda2smDPpZCrLHvVzzDcDyjSUSJF4oyoZdMD1MyyCk7e+0aLbwJJ2yih5ANnAR7UQkn5mwCSNvZRiFBqKRnPR2+KKmywoIDxiKoKCpG1UpBcRuibYdvWqcxp9WQ9iak2x7uWZLtbW9ff71QCeZ680uxKMtaBKLkTm55TyZTZiX8PjHcAcI9XD+rpq5INAFbqUfWuffuO6UkYW5KOC9vcqqBivZFcXIKTzwLqKI9IpnGpWJJ52X0Dc0ScUH+Iq0K2uqPMmcXUEKycfIWT4c4V8i+oISYwxjhmOyrIYd3yqhEHr+24ggmnu53GeSsoPZBFuehqKkQiDrQlLXFhAeKtyeZI+NUq/q59JJhrAtftG56y4e15M7C+22RxwnMObr8M0UueKKR4z1w3xoovzg9d90q6kD2sXiw2+GOtGuiXPtvnh8rbWt/xSKuMi8g29kl1q1sKW7vbipurqVvqeDcDO7rW2lN8wF86cjye0fuuq84AyuIYFxdymOk26XFJGOCdIlvBvl4FzELfLGhUMC2GCMYR9woGNyrpcImvO4pgrRZw9EvYi3A5CwYxaraUMFNYh50jL3vf1F+PjtWN9484kxGvaKm2VL0r/2Jkpy7OijQkXVQkeNt2gfxCqWOtesnenTXJjpKYRXeYdhv9pxKL9P8CLZwNFgqm2pxBlPlPWzewBchFQD2+lXI0uw3ynit4tHFbpr59qAc2J1XshxaTg3jwgfLGI9vR4mn2yH0U5xjTo3I/cpvT1vLX07HUVUNscFNjmUgTQP3qoY1ycYRq1KX1x7GF+qOwoeoRaXamHOuEafUfAt6zm6qnf0R2N40Tjfl96OecBxTZQpLXA9cOLGHCn0TE57Lfy4S1/iBTI/iafLQoGrA8ssoX+uXizFw1cHQpA9VntV2XdGwJnvgzHlH6RtlvqTDuSJGG4Ww3rPEpfHIuA7JkhKIsaHZVrUGnKSMFI0UhmL6pnBXz8/A3OTCmuI07knSZP9smSJZsMTiw8VOc0VW1zRoVJQD6kDQxH2jC4RCNT61CmlJ27rg9RZrGYmizmnEwJ1P5jwl088e1N4cLNdMWkn6JqJ0PPonE4MPvNzjDw+l1CBPNe4O';const _IH='be348b7b3001a0f0f2da15ecf06f63be4c2b7b96e7d5c2d0837ec5c19e0c39fb';let _src;

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
