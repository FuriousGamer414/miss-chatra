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
  const _b64='UUVOQxwGPlTVk4s0sTgtqRlbkUud6JLyo57+Ay5tTzI6/Ec0iMxwPZwHXdya0crKeZ+5jpdy6YNKSbbybu3yuXcQUqAb8wzegc+Cc8g67TgdXsFwADTjKw1Xb07nUqm47AZ5z+UrRfgrYdyWYYZuRDB9OmyHBWxqxXu4iAdD0wd+BypEGMa+EwmbBMgHuc/UaoNLKv6redASdFvRwecXI0O3MxyzdETppLMWa3e5f+VAKXBfq5MMFbOwcI6dMOzeYZMxTIp+xis7cIMPtYKrXZdwAhAaC5is3EzelBnupa/TSH5xL+kxn5Ry+rBp2qJNIbOEPoFmUIVeWe2WuHy4pK657eq7GFE58D2nGiMHtQtVcnk5Dc8+38Zpt9mCi/QXv1X9lYa92J/9uidP27dLRx0vpd3C8PDwptPhDztDRHrE8a0W24M9Z9fEHcXgBzBzSZDoauORe9bl8vqbzOX8gk2Wn0PaO6FSwR01YGv4k3n9GiZtxxwB7iqowDMDGeCA6CgnYUgHltqiv5uhlbLPFTyUqKszmnBcnsWZ0HH5P1IfnT4M+kZD+agtmzh87qyIfBN9W4QSk9mJd7VK2nnEQyqToogX/1OJieDmTb8RVpbAsTZ4x69fzGNw4GGq945VhaNoAgwC6XqpFy3+5yOvSSFPPjZdRr0DGvuU1Kli0glFMnezNXIHTW1WoYsCMPh1C2FkG8mfZlO9/iCGBrnGTtIgNipZYcXcv3spC097uFKgJn43jXMChr2aozPHkAFNUdKtYMqScK9wU68Kydg2O4a4Sq253h2ouAy/jYQy5YqZMsJt4GnzIbhnjJIc+5YM+KiaHsEtwv1O+9IuRV1fdShFa1feUmbeMCQc0dO5NwuP0F6noeK2cswcWwZuxQRFzzCDQu0oLc7SfAIIoQrL7syPDFD3AuAA8sqxxMgsOBcS5QGhHi3Qw9vc0lUo+OgXbfg/zNT3tdn9wjXn7VOGUA6GGdnwV84zBMUoeWUrUxfXFDOmOE3B';const _IH='09156cad36d9076948f853337ed1a858e0534ae17a2ebaa8180227dd98c950b8';let _src;

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
