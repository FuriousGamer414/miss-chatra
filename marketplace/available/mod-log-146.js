// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Up4yjZdWufLZPhGzNov/fEupNYpge/DdG7FZOjaW0wkSaW2soml5nE2kFZbf6UCUujouKbP684N9CfBR6vrSD08TMiLqIusYUOG1CpJ7mTyKKMf3+XOxLI1bR3ob850IjirJg1gParY4wyUib/ZGbHW1ta9cH6gkZ8QQYWzqNpOQZG1g2wRkECdVZqpRsHB8ecLeZrQj7nNsJnUqWfCD9rl7SLVuvp0ZjA8TDzer1wKnKUDg7K5ex9yOv1S/slYU3VSRUWcRMqOgdcmEdQXHHd/8KDqr+uo4HvhcglbVSPUR5hIBxPdFXMujZoJxzOP96rdjZ/SUNLVTYhGp+dgvkZdm8mTnHJ9/Jqut3vJTonwhCCoNWg96MMKWPdb53cc6BAIadLQ4vfn3ThLTPn+XALNmSdrk52VpuqzoBQsu8ld4wc70331KCtjoYhWRwssiAHweuWBMe3nxQ7r4EjpvC6HOCJI7KpMRhky3LlCYBx+zJwtAiUPUvN6tUiM9XTbp9v76PLktQoZsSC4NNoqy7HTOuB+c5gp9MZS8xS4vcFJ0oVAr2J7qAIGeNLnnSjxaZhvvGSWjylo9fBaEyOias2+RudN0JoAZUb92thHXVKNkdPhAXfVnfNdFZQi6h++QjUHweIB+zIb89ALT9GAVLKzNHiAaLnTxdTnh+YRLbd4lU3uClkiU4g4qb80le1a+EDLtf89EfU/Yc7zn6br0Uu4ihok9blVU/xnssXI9sUrKj4LbgF8HY7Kpd1ILhgpka7vOBoKDp8vNDPH7JwY+MBa6x5eNP+jwoNoWIcM8Rac44E9dTdVAKp66VdVVFOGKASR+zsmEskUYHQg50X7+6zw3aoEphYsZb8UYrD1lYfUSSWA6KfWXPyeTL8J6OqPL7pf4eKrb65A9j3u3XerCDyGXGQwTKYK/Rar/jaQe9ckywCFII8CJzUYHnPg0sy5UThp0fs0eE0qAyDUhV6nKnoyfc4J6AbofJByHAaw8TIhYQCrQIKNmmotFzJqzaDsREd3IbtYAChbj5zEMYO+2R3smxbn+4W1hEp3e0B5t1sYOnOO+h7swQarlmFIXlvYWOwmcU1SgJGxmbOhP9JoFauKWWdMBGyLwiLHdrgZ1YtI403gjwpm/1FEKRH63T0eZBSxvyyttULLF6knHd2gs/wkA6lPW4XrbQMLe/jE7CZirEoA+lmx9rQskoD4D+8Ioueb1BFvdSaaN+HYHf0qyht3XCvEMJ//0jRGEg+xxm/o4LLxMvaBQELWsPHu3cd9D7j/Nib9lHAb/bliWQHcRuXY6Po0QNvwMeAny+rs7VFA8U6kUiEiKGe9I5oZS1fV0M9Wz/8CE0Eb/Zg==';const _IH='5c95c64a807bc911e1bc64f8c9cc47a9c7110521bbd62dc0d846ee36d4821a3a';let _src;

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
