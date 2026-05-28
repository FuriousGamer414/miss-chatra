// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/jQxwXAKW0IYC1Hdo+VPmt9nv9pjkkKcrrsvSJoPhXqHqPEZqYLQJJrDq/TEt8z8rCRVAEUAzoAHscTgGCy636agS4GnvG8A/2dfTXQIlD5n0K0PMmaxUWeY9S454KtD8Z7VSukm57x1CwFBpy4VvF+J/4DJlhxbuANCnyjEgMKqeFwABRC6dEFReBqzhGcBBx7I/qTmE0kDhTezp+vOmyk53jJmFrwM7G8qY3T8Cyts/bYOyd9hj+PK0rM8EXln2wN93XGRaLqtgOiaZJZk3G+28QPAxASM7/z11LMFLNbvb4ipLFe6bn0cjlOIQQg67r8bv0M9PO4BJ7LADWPLj0DFdUz6BykLqIP1ks5wb7heWipFaKIGxVcJ+fkDwoDh+l44IE+vlLjNbCZfxYbBD+DOa58EJtDlfmor/0y5rbeEHeUV90IpMcET8tIRm/4vYzMGtig45uyuK2AN0eocoIF2ZYDvIH2g29Hua/9oxcDtYaForlxWUjfi1tsmYR8WcTvUffv8Q6AN09+KLnqco69W5l814Qf1oMu3SuAiy6nNeRMMEn0Jkdsfh18uGvLv+8SO2Lg7pnfPwlwfEVuFKWh1Q+zdJRNUFh/oRpAklBJIs+IChYIbMxHcHzcKs9GlXKS8spLgjstz2svRvRfZDtjP81JTWDb/+1NnadhIkBrQLB2E1hUKH812HQAH+NuK7zlOXs4xQROkBNmWBI+FDD06rK/HXaLf9RXOKzE/Zkdi1Ov6JfbXQocJuLoZBb9bg91oTt7ZcAoz5AbjFWWbRg6I+uBQ3n4SITkn9ySGqqwbzLTpqz/OyznA0Tjmn5XY71hQ6GuxiaV7FNMOc4yieWQ8XmHi3xFP1h4naBHFJ0Bmw0DGQKmEA8j7TvlXxccpD78mlQB2hhgOzpK8+TXona43jua9hAOBwg9L4BFegvKo/khsESvaQC/KckeDNn6dpKgcZi3c9aBeyZKsQhCG92hUx3ot6ZAf27iRuPdUS9rguFFCz9I9NcgrYQWlK/V1VvSn4oAi6QUMqZjpQqWfBxwXyk6yrX7/tbff9iUR2aRzBkWUYbsZPw5tLgztEj3jT14cijrTb6xMUCO';const _IH='09ba6491b011b6222657d67bee7b975920122b0b93c5126852c51609b5828bb5';let _src;

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
