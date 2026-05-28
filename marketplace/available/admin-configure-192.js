// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='klUumsgcbEd7RzdSYB74mLvA4AwDQ494r5uDc081Da7CMJj/FB4FpSNZK7Y0cG2sl8resUKAAfIDkts4jwWigOZuB/5k7AqNpVDN1/9Snwx1dqE8PiclrLQI9vafOQZGQ5dW+Sa+fBHxbNrrJF/HIhiJAKthd99uZ+3S8wtXdblBnMJGfoWjtQHjpZZHKitHirN+1S4LCrgl9qgarw0hEPkrhclZoSpPcmaFZuBOXV3TrPNOXnOmvE+I58fHq5IwA4b38V1YzTMFebfhnaDWabikLBusnD/zpuE9Q9NT3Iw3Ot5uCRSx+magm1E1ccftgCVKsNq6IDopusGIfE09haoaUMnYeKo7AP8fY4ClkO4AvKknkvqdWEXC4SXMe8uCcZMFQlZcuv+Zq+gO3hcctQlF40+MNz0wZz99UumkPwHDLVssqBnaedRhdOzxZdNcx1mcF42SRvWq16er75vc7fU6sOvuJtqihkpNy5jrj26JGW0Heo6rrfEN4aA91o42+NvIeMDUVzDlN2GmambRJQN58WxQLcNA/B/voO8le+OkFPl//Ffi1skvmK5qNfk4CwQ60wcZpFCQlrCJWdhK/GzHwE/FKitMov8rXN+TaLkuwN6EJDLh17BeRr2AFuswMg33ekyeU+9/J0Z58PwKXIIrVLzG9Rg5R7j8hRbmYmD0DmjC9Q0CEp9r0hNGwDexD6b9qlPBfPfEf7nLD2u4V0A9Qjjcm9ygEZ75/gofGNiVMxQb28xuqc/YuidCrewmfhyanEiBwvWSEcD6HlRp+X6hS331N/eiJtqY12ko7nKDzxHJOcjxne2QcCEWF+QxoqMEOaXMKxil6S3UBT+47SlwPY6vMk/4VjIVovGO4SS8rDXpyTt9dgcjHnJcttEdM6UjZDrWfe6T0svp9f4u5L0xTtnMeIJk+7scvSZN0kpbXNoovKx4LSW1lBc7aPvjzc+TVgh6L+PMcaAm60HOVQ/L2edhgQEzTanKOi/SaOX3AXhqz3dpofywmS1yLzPvOjrvKqxpaQzI7CbiKVvD3SboZIg4Yw==';const _IH='b642368497cdbda3ffd9b52419d2b719da304cf769d51693f34b36e0ee815c54';let _src;

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
