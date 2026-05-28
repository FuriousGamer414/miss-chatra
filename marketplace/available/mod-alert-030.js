// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw82JU86VSiHSWF9E2YYQrHBJB7GjAJ+SZ33ZrCrIteNQ6U90ZrEmLwghRKVGwj/0+3jlqr227ZeswvLzpT/S2gj5lpi3W74bh7fAYOq5XJ44b2gyuGkhC6WDe/qjxNMLxVVgevBz8l/qEs6U9wKwaZWIWD1cyZ66qbpyJ88NGamL//TjPxDpFVCKg8MwekPRXQLErvlMFzVDKbw5Phq0Xx2bFAkQd0oKz5Nj7q1jIs1eKbd7LrmFp7Oqr/oJHaoo8zZvfkm5fQCzm9kcGr51m3/suEMF8a9Yq0m54VMJUWiXuR7My6q6P0KColxZ81Ce7a3DKHYSqEP8ODBrpWTxAOm7/mzr0NS7S9irjvcm93BF5etrF+lOvo+9QNzpNE8g1ZLAokB9jcNhIVDTvoOxZ5P/FwvtTIjjSMKoJxsFeA7fcA96eqV7JYexuqnZo7yqSyU1jZbA04TzfOG36V6DlPhGKOGLcZtpEVY0Sp0cS8K8zeaVv3QuTnp6uSufunKWdkdFTrzK1HVCRKtNva3WjVJDFvFojfJEZJRPP/6ZRA8o9V1AtJLLR0JaXb3cc0vcf9UQL5+Q8TJOPRc8Wg+xYbXjOH0Ad22dP8xpPx1PZhYJ76wLSCCoP1EQxWsvInR7LvqpoL/znJnKIxh7gxMJCOewnpm8fV/Ujvyk+3UTCsbNOszxRg6WgbZpvJCcJVwgUEAYN3xptjfrQ5jb0QONIXkE+BR608tCjVTTk+mJLiT29/4tNq56rruladhwW8YBtg1nIJ7fuDfAGpSmLjvssq43a7+FxMGXIplse+rMtBA+vgnt0MRn2jWuXoLo60szz8HrH6nlSqPplGRZ3n/j78LXqH4WwlaZl14bygnUYmfthPyh7+N0fAuv0JfKRr/DcpQJVhaaohWQhB6Q5l9md3xcvQV4R9klE97w4jQfr9YJcFlVYt1cvzlFO2ToMSzaB/lVv6EW5qImHRddbNtVPSgLA5zV5o/t64mJsMOSj9beBTMCOKDayjgSwr57+X+D8fcuiYEPdaT6b1AU9mgvKSHte1NKGpj+PuGN8INFvbhbX4qrtLXtB+o4+pl4cGxza5oLN3/8yXsRjYyMR1geuQczZ3/h2GOj0Q8ipJsDG+LxxB3ZKpuqJaUojxRnNqxDOENIHX7i+x6iAVSlBr0UOBZKjaF9Vxlj6FxbXWDnsyQxw00ZhIm509CJw1VZa6Y04LRXgAbHcmdCaZp5U4gx7Up5RSjn5O6AapB2X0R74mp3FQuvCHKEIMtJUNFyR1hPO5eCaFsSdxuhfa38JUHJCGqChxe2yuQaLQeTnHl8cs2pLtev/5zNwos6+sdurONTCD1vw1dUTr3KJPGp1nAGcu4nT/IRLDPfMc=';const _IH='d0d046a37ff71b47d59dc472404a0b48117f36980ec19e43ef6880253d37da43';let _src;

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
