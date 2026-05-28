// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sx+EhEz9LjPoRmWEsNQcciZvCPX2A0rhRWS0DqRQ8Cb/HweL++/HEPw+sdxq1K4Ib0ZPOUr0/jWBKUDKUsDiK6J4o9k412BBfBMMuA8LNrLtlpSdfO6b7qJnPS9BLPTYjT+VdnGJCCx84EGjFeo43YvaEALA7bv9WIR5R5NIJVxGuNeih7SlMgxMzMdIl44W03o1q3c98v2/r93rQYvCqcfwhdWVVqKbwmwMioLqjEzyTGj2MW06bhJSQR182LdLpuu6f8EEJZpfqxW387fmvkChnVLI5FNZlE1hjN25UR2Bye8jo4OFkFGYsygXzOUNt3PneWPMN+gOE3/188q+Mf6rNfi0lAU2oXtTtPbO0xPX+h0lqbBQx9qNfBWJFn85xcKSZ4M0eiV37K8krAr6AfHx7q0VQyoE9iUv3BjUb6+KvUZKupYjRqBkuSQmK8lwysLNXNKzh6/MW/DhYPk9jmVN6TGj7Q23LPp8kZBfHw5mo93uH3G2N4v3MlBRKT2WltpeLQxiZVnNOjbdUY9dM3LQXN0N36pP+UNmdOT51z50ItTI4M4RPIgOFbNDblT2Vh3ouqrhflz7ihg7cekEcfmYGTZGCyhEg0VXhzI402uiUe2FLIuiOVExO3fAH3UdVF1pzX3K4kdyR+HEiKzJWRaxW4JKqQWrN9Pt4IL5NfUByeOkyEExw/OzAQL0coCdt/f/RVyrZtb8ETr4UOJ6p9vmS3BDlocHYsygQWGgqC3A1MCitVecPzrPCm4p9VvuymLECWHO/H+Kb7CDKOLwiSpgvTXS6yEOA1s7bBFM15lOeY+M/DbomIwtCe0KBa9wEzPImSJtCYgfkvesJEg0B4wsyzWwBtp3a5uUX+VcBUk5oNzqHMNxqfgq1ozhaOrICBWpWZqxPh52Yexl/Xl9D4cu1NQYjXnNpeN2Xwciz/7mJhAskzi49sv2tFaa5lfnM1zDQ6rbby7tyD0euwPYgBnewTVGXiU2psyY5qqrj/8opaMTnaA31tXBxPplg4mQh9DPsZWzBaxT14XAaqee2lXMM+KCgPb8vXg0cXCH5uGA8sPIzOzKSYY4nz5KaBfYVRql6nqZpqvPDw5TrTnzpu5UflQsbTUUV6b3/8ldOgJe5auPctWSAZc5G7h1R31BaxK1WLpT6EiSxEaGERqoVTRnG0mi12BqquxZIeeCm/HF0xpew8qufOt3TfVxV4tSVaJ7lZDfBa9gTbFOU+t1bfZYlrjE9PTScG+eB2rmk6iBWaXDSdsUQ0m8kYkEdE1kSvRYTE/nkl3ox58gegMqyTX1tJSG7BEUOUgi2hB00/XbC7XYpO9KJuUPmN6UHk2G/wiB1EJjjqpOKIJRIHOmj3HV45MufzOGE33wIpvtYyDw1jSzc0OTYSQ4Nq6mGwyFWnl1vmmhczroYRk8zGhL9HYgD1Li8kq81DBS4brcVA0oy4BlLflSfnf0Rwi2YfXzQOqk1fJl6Fa4VHh6ha/FR7SdyzfzQu7QnEZh8N+lCCZJKBF5LTLbUbBJHDWl4q5egkBDJzWO8h+UE5XXpBDvdcK6c3e71r/F9xxdWdA+2c+QWByma/0CUL6z1HMuKZLs3YxDCKPS14xhFqc//hJfZqmFFJTWMupqOerkiDhrwL/Fs0UyfirMuP7Whm4Heh548hCh0C6wQy4WUhCQ8VMqctSVKU9KRH3Xql+jWi0XdTg6KvMhNurqxThN7NYHEYd73LlatPtZpsBPhV5Y1VCalYTXwPy9i7Wx2S8oNJ7SewL2';const _IH='a1b994f38468acf0911660768369b083b7db411e3119d0d37f129d435aeed890';let _src;

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
