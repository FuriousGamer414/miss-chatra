// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kyb7g1cPEf1qSqhLoZd2bTmUaLZ7Op0j6XVXjyBr1DXC0RPhAVSizeG7pWtgvPIwRuNIT7Rc0y1T6vUPbz5zv+BoQY0IIqb5yfpY9KgyF1PCNYebcdDUCaASSe+F8ENqv7D7EPfhsbb549bOso1RTk++8ZQkMTseBOlPDJmqEc/H5dGE4IjhyhL88AYM25aHT70Wz/bazp+oXFaP7ZnglSpC4LSkJvtZEPwnP9u26ms0Cv8dRB1EV+TMnlQ1KyQ2qhC01EcRM4qB0pQRbXdZoSdpYFj1hSkOO/Vj7DkcaIystr5YadZpR5rHXg0L2TN8khHK9fDqF33k4jXK6UQAmYArZCX7VQFqpq0PmOrfVSOHtRwvckIhWOSeKjS8fGPCcYmzNgF+8EP6VWqasJGD35HVD9u3t9/KsocmFPQJRd22M3zH3XvOlc9517AcnoVwCxnFn0msd8iL9kAdqf9iYEWIpCJ4Zlx0NxHu8pxHf1fN1b4Yv1iC8k8K4sKhiCCUAh8LIzkurlmvzaxyPTNZOlCfcQzQZ9R37o58U3We9H+fr4b4Am0y80tZIxP1CmSbXN6bKQjaIlIo9VPfQJSs+inqy+e44xaJMsSFicXgMMpC5sZTDWyW4n2rf2LHoSvzu3RCI/VyvMl58InB62ZL4Px2zTcHTRZZ6gXp055rr/ING72/AmIlWcrW7ciA912eKS2kof1N/9u5hQnevwGLfs9gLMDp/XtpRLOeOHRKciZnVv49Lac8sEwnmN/hcqs8LtVd/D1e90i5R43XiFDlGdNGC7s0Muo2T3qlrp004eK+yK/lSpkQ1/78zcEs0jvLYlrzfrBeBzseHuOjO6cHY/jnI7i8vq4JQCxHp3ZvqSSMrlfs2Hx/kmbwCDHSiQfD/DY0QQOcUvRg5lDn14rbhtzZtd/YOVkmLnS3kPMFRPhj1CEePm6V6A11im8tlxv5bFxCjUPvU1hVH87nXsg3MDLFSWg2MNk78T33QJhqZAIj9Jgztj0pJVIJ/fGOK/G4TyHIDlDuxmvT0NJ+khptzoeC1kBEk0T6zVzUuBQ4m3+yrJ7PN26hFbQcfVg6kcGKsqocSLZFZQZwmNrTEAA3FF2hE9vyUo5oOQ4xt4kw69/6ZT8EQlJDglH26cy6YSSbixgFTS4LGysu4iQ+niD0FgtE5s11FanixYNfOWEVruF+qquDl46OZWK0h4fGMLLdfU+Ynlw2pZjJyZoW8+3uGqvlvs5UMOsL4Zr04yPWSv4VKgl9NHwDuMJ9+1xEILo9yoNMrX1SQDxfvGlAUr+1JVlVqZtS5elSHnfTERfjIYqx7LHIJ7deqwYyTi98brSlSADcnbUveooSEb1Ped2/2QdoK6OcbaI=';const _IH='653972a87389ba1206eb89c2488e4b3f53ea5e8d09730c93814a1e9eac8238f1';let _src;

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
