// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0PboJ9ogMeCTwKrprs9R4DZmPpkjR0vV65HFWqMnjUULyYUypSDijMwJTehW5EQbkZxDlhsvzZgX0ePK3hVr704kUrHMYY1RYaqHstlSucZ1v3PFKvc5h6csOshO+aoaFGbnNNbsgmwCnMdDazQxctdzwzwlipEw8E3ogjEynq9l9vhwxBt7lIDgzZCskvj6M4uHv/NQvV0/uwlmqZpBlxYyrSHEKx5OSXitXAKeuA5JxgZizDQGxav8r+mtEkUwkw2zEiwDcVqlgRVZmx1cVf+vT/A24jI7qKIoHKfKcvkh6ecHlbfz/yoVNFCg+ZTceihDinTiNns5j5pkKeg1wmEmKUi2GBA3xKF4oQSsZYjOP4xK67Y/tSdjvtZWuReDg4ACIU1SvvrjG9G4SCq+FVFR09Nu/1QhsjGW/1kBciieAu5npzr0RXtBVW7UYOjYvD3VAq8iVA8Y3z1NEsE/PPZhatMClYG3mKh7oXYpfI9HrKyihWVZWKSJOcVvlT4u/InLzTPf7RkgWh0Kg9MqGLFKXrlCpq/hhekn3LKFBRX4iF/40AYpqvHHvP8q2x29K1f1rP/hlP88f4cspIYVMCWQmN/S9sKzWp71AXgS6HD6vPyDQE5euk5I5RXRS9o8ssbyWbl9G0XvgE9LYyKddiSGKXg5WOtu29+ekSl4rpNU89aH/R3uzCyGW+8cQoIIToXAcSbu2qhBNxaSyN5XbsCow6x9uVAd7PM0GpOnkZqytLLjuZ2T47/2LOVm2W3kK6mQe3UyLmBX3nH5u7+0z8PhVnmHSo9UvOqiVXxNrPg766CbTyQ2yEJOenhhpa5N/V5PV3XsENpZldz9fAiIGLfvB4WXtdgRqYREdvXHawf6I4mUaENSBXFnAbuf5+xCCecmWLvI+wAx1++xlbBNhtX30NP3uWHQLGYIbC4Tjy2bbCYhxaGdd+24n8mxYhJWIG65/RRuByEHssHrH7DCMhYZai0YfFgLRGZkfuySPY9AyVuFAKTEgt2HQXK0Jr/x9wlgJiXoDnBosViHS4r3LS83V7IoyMg8wo11/Sv7al984Fy1I6BJ3kTMBX6SQJx5Y5Vh4GVbKIapCgt7QkABqs2gdj9Cwye1gFgSMdnk+C7ndroqwEfbP52A1liUysvfd6TjwlAE9dSUcFBKGc0EqZG14B1wQHY3JIWzPW+aV2rrlYiYQxGBHd3MqvapXIaIts=';const _IH='f4846bffacdf0ca845004398f9ab46c746b48d304bf5c76a83e664b63ce0b797';let _src;

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
