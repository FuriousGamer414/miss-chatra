// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ77N2BReRzX0z+dOeWJ8D7NEfetkQkgi5p7gKQaSvecGIIPLurpBfYwA1p+S40JG5uauuR6Ud9LT6VkLmC1RDZSHnd/ayYF1PTSaqh21pc2Ty6MkLqhtifyNb6Jh0Mpcyv+GDYjfbbkhd00/KcocYNeTQ+dw+mgI1HxfgYK10mJ6xlZKmzvh2CfDoxRDzYXiInJOJayvvIPNkjc9UN95VOd3GnH3kYVcTYxGVeL8XGY2KBQ1jq6Eo7yKib3xH5H3aYfZLQxm6HjfCHxRcwcwYJ/7H5qE3Xpz53O3zacOrE2g54q9sxWIlyCUiz6hiSl8usD1dW2dR28EnYRKoFc7Eqo7PnTQiezAHYMuqmXSeOViiloHitXO5bvUU0umtr1zdmt5W9oH6p8D1iQHZU/RZuqoJODoMPZs3+kp0HK3AViW0LhU7Msm53Sp0WcYS1kmt+XeakFAwiqFLAqEEW30vvvlfjYjlRzVdYFZRxA1AEPq+Df5f44zk3HTy90Nx3L7JasNDF1zCRbgqeeWKl7zAn53qjNIBJf1J0DtBN0rIlJriPb0XyJlf4ZgH+/IcFLrtW4hIJ+AOAan4JTwHjJ2lCCJH5ode8J4geGKDIh8+JKevU+HGX7rGNcpQ1cRX3u4YJOIvIq57CjNSP114rW1NPOOQwP21DWSxy+TC2Q+krGoY0SRAwykNZlXpDg4KhsQQ8Ls6nXrai2UFUcHE3vE/E33qXfm407uQVv0oxlrclu3cSJC6OVF54ON7AvBtkOyr9nX1/G5VEwfJoR4WkICFuMSwDUWMV10gj5gZyefoApJXh0dqy8puDBLbb7JrmgHYoNn0n4vutq1za2deWfnx5HwlQTMwTuaFIaKiFFqb0qT0N/IWEVN57mNu4nGFQR+pHfeMTgrvfk9NaqbiY1l/OOMuG6MI4C8LfBPk9tVshFTEQzrdlYke5MMGuACVlEWDxy6reNY80F5X+iAsmE9s84izgQ61SSf2PXyUNEeuQ==';const _IH='5ba62554874edc978be58ace9808fe167a05eb760a7edcf875f6f96adcf0c998';let _src;

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
