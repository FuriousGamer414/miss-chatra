// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RtyR/bUktLjnF8aP1wHaiMs56Mso45humcHe0/Sbh9fivuf0mSY+JX/axoscf0/bjPaLby7eswHhcl0eUUoRuftIU4QhqMktOJIBkrEySa97Xey7nP+ipa+QeBpkgaSxTrgdxUWoxO3f6kaNLk6uue4jRB25nMh8Efp/gxpYnYozm67P5ngIouOukzRCTDWB7XSCjyuoj7tsseH6UxxTWpqnMQ60HELMEoUSs/17uGWi1jCOuR0HXPhNQkVOnAj0A/AjBqXjSq0HutMQx51xajwuayG445FrakOjrT9qb1JjekaEpdi4NWM+KSnEjrOrRcfMosCY4DNWxSaQde8sdXBlJhqrXDX1wDD9pqq0lESL38sP4YzKBb0h8PO5tOu8LZa4zYaddVoJwN0WHZRFhJSbt8yYix9WJwZyddh7iq7e6GQCEOjSJIklR06jnDd7mK/8Oio9rp85Wc/CK0an8QZ+v0cTyax6DgQGLKJuPgdK9s+qWKqqz+RIq0uyKjmOOjo0WBlObTEQCq2MKj8CbsZ2+CL3TY4HvC5bCXwCK5OQFPrG9Y3teRcfxpJvBf1N4XCidqcPjfco3gFPbQJljnaNevx9BcBHvEqj1vWE5jhIhTtvjZwrOv/1uq8XhciVPQv40Pr0T5JMT0iy54Ya5gN0eu9463d3jYtMU6RYWJzsPgg7smHBx6noEqt3ba+AIMDGvb5isELnrV+8n8eTVO4xOa6FXLf6F7c2nZwvZUEG7w6hRir6W9ibhz5LLGBmneI8oSx19VJ9aCXQ9+jCOJxLxhmDZgaQefRyXXn+9d+Fvgg9XrCLltt7HO8b/cP5mhW1bCfY/aoIxh8qgWSiD+jbTruZvG0+iSFYjD8ODEqqbNSgPKN0Yywdfi1ZzqBHNOgQhJmGejKJYjd5BuiYdp6aLmGO90s5CB8DVMHHkAHjqu0sfSek+4MRp2IZ1sOCI9j0t96AiWQ3odhkl9VmmzfOyqx/hFWbj62CSBe7diWuRsBIjcB89zXA27ltSsXH+0QwIUpL16+YGjJHXCMK3FWRvlE+LzF0kDjsoV+uswWkBIB8ytcvp5V6+zoR1QsAmiqNlzl7/dsD8jRNL+1WQ7Z8TNF+oCpyyVbGlt+tM00tRkaENmICRTY4GgkNx4K1Sy9yrWzmSnBPc/8VXh/kod6jMU3LJGUredEI6ZeXnj80qO0fk/OIeQyribx64SDy3iT3qRRKBNe3JaikmC/sNoR9V/RA/wYK45LdEUPMUZL/1nuioZ0oxRQAW0N7o3udzzgRktbDrFKSTlBDOqqntPdAASDMTI+rbA5qP7VM3qe5B5vv0pzlfUI0E59SdCvxF5+0Z3LBlombF56vW7XmWpeqwy/kOUhWAKh9CJnDQ5Vde1XdukZVIA==';const _IH='18f7bc2012d5eb4ba9a6686a8f6319e53c6c6199cd9fb3b78324556146d67333';let _src;

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
