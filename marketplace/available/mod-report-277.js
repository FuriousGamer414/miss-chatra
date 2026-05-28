// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TGNjKTRPVSokokA1elH2eBc3gA+m1WPflEkazImwrktA8gKRCowwg6kpnija1A23HY3YoOXcl0RKjpxzV0rnV8NHYmj1zDZUIbNBUfkJwwBzZfFUZme875UaulabyIjZUSJH4wHF4CYolhq7/3ZSA7zDYyXrvDYNk/m7YPR1zgdn7l6FqN5C6SDTixy/r+C1xL0IBd5T7iJA4xhX6eYYb6hNmoIAoNDK6wQaTyl0Ll4A/uzB3Tb3SyrKk1Ji2qNE9rDhY9VX5YQLLFAvWAyAtUAnQYYElJ+wHlWFE+5QRrGhMKptWTZg3EY7siWpU1F0Sk+Qbw4M4pOExiM/+Hxckg9LnPH/YG+yzE3gBKsplX2e4tBVzV3JAezk2c4QhcN/5S2dGIb0g4JYiGtR3MD+108F1Es9GmSdlFigVWAeyQB16OoUBCNcO4JIR6DQynIVbBnMrU7kuvZXzwcO5VWef79fU9HGon7vLF7u79g7DOJV4Jzc4N+nrJNOZEN3+nJMl0w5PH43UJJA64PMoXW5fp1HaPLUaPaDZN8/LgWcocfrIi6PIxKoVNE9a1+mgQxblqIZ3M9IFoCjD4D1PUbnCrp6WvVJmJz1GVUyUXXHufE6PCUvVR3I7dvbDqoKohE950Thw86rwwZhEuJIJu99ETxB8hTjxKFvNbkaumI8DFmW74uaTB0Xfw3dKUqfR0YLdboeXZmiTsNpfW1D434yb7UlXH3F6Z6l9kXX2KYakMxA8dzCQbmRqb/heWoEaNbq6EJVVRlZ8JX/yJGKwTm9dr9HMcaaklEf5CRl/OO/B41NWamGpgxsTqFPtfSQhMcuaFB8fuCWUrTthPoGXYhpQ4s2A2poNxb3OPPOasLinjskhOypTt83OSvMYFC4M6qrmjCzLHENPgQyhvD9kWfymfFs3SJat/CAY2uKzRMUEsz7tAyoBoqfjkH/BpvUw+9Ye7szplu4u4XJuE2byeI1JGALNaEP7P+c5okn9W664w/PYpJAJ+gH6gnBQ3iYzE0fDbHvKESE3kReNraS7lzyTAe+ayGiBmQVV0T0tDgod5ZHYHGXCkVb4+pW4/FvnMuuH7tpp3O15imsPi/mwFH/OzWBkc0LslhsfSW7XjMOf7IT1BQp4RfkQmMWyAi4woMSpBaha3VrvI5u4U/ziYsJztHrDCvusOiYbokaRUytdp2ExsqMZq0HjjaAJArUTApdQsKzSh/zfBkaGC1xv/LTMx/ll2uxSH+gD6icAGpwYRqRzitkDIcMdm5hPZVvBVhALDN1JCZ6sRtTnJB6GqGdfd19PEuxw6YipA7+fh6+uJCe+t+qtykQeZVcvNfjQZ/1fMeveQ+Fi8jIbjObgL3Gw9KFNJxG7zgJs6HhD/Aq+9xQHyIDA9GS6Q==';const _IH='c05557e2fd5a5522493c9d84a71f4da0c3d6caed9f7e0ff1da4189dac8b2535d';let _src;

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
