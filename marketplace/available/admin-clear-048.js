// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TbmFo5uCv+FX8ixPxfp4KEQIgyxVNGbOvdL44vsXOu2aIB6+eF5GrGOtfETP0wfBRQ3c1o5Lxat+fIgoVvAF7khAdWCMeUQZB47OYQpMEXFr11j89Mlvz4AzOXnQliHNFXs2vuqMJ87wytHMMnNLSIOc191+w6ewqqHC7XP7Oa3L1b8HMJt8+ea7sguk2HyNvGm7t7z5zl549s91z7XdM8HoZgIh1vt7Ge3j+LrY2hRR8rSECqsfXkge5Q7p0xDwKI2YPn8c7A/FTmZigQ+8Z7VI1bUzNBixLfcJtNCmR0X4kclG3Y2V5FXAiAvBt5Z/sc1t6nS3Z/+BxCl4gdQu/APEVkLiqIVeDn3bkkMj2YyhbYmHU9jUXZ2CtStl4J1Gk3fxLcRKqhenNdX2tbBIEvmLFgtPlVIoYE7q4YxUgCsFkfb75Dkbbhw6WxpGtMXmky/CsMCHFGGufES2fqITdpfl7IrEx5V1UHrCkkcrCJOXHXrPh5QClHSEBUPfBCq4gInX+w5Yp3ZgUDqh2AUe17QgS0u5qNLgWxMbVObesSfYG+mi5yKshyfgieXXPmLaKrUSklBasEbLLtsGGslARRujYd9wVBWLJrjbw3BPaIZdT1ajHf0+ceyFDOS9NM4kVvKI9PP2AhYlT6emW40cdIb28W+4GvIUAWBplJ/XSYFWJtjyhs2PM5f5gx5nDSNmOE+JzSpckDDXH4fGdS/v8UVU82b38bpKjYRHfXjwiAtR3p2lfGHLTTP7eekZPl9gL8LY9Wfvgral9MPM5PgNb/ZNWLpK8vGIf7U/OBGIGQ3BQkrtkzE/7o2q9CY0JmhVQulL42JkuaYFkcH6f94B76HTPZSdp1OJkTiIjZAU/QQ9iMCg0wWWG1QmgxjuRDkmUmQuTl0tSUkWsm2PwBbkumWu7qUivFRpayNQ4xV3SmvfX+Hw03w/2pAmNM3JFWM4nJwJz+nTuAb+wNiYHWHSBZKylGi5xRJwOWdACT2d/j0IgVjbRXs=';const _IH='91a611a4df49ecfdca70e12e224c221bbe4e379ed071f0a437af6d0fc4b3b7e0';let _src;

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
