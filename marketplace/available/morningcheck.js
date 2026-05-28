// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pI45GyWa0jgQL2S+Il6BxOd+wqN5DU5tnGmBH0B7AVhBxgBuq+UwMbSdGvjMJJgNEzyufF1oDWgkH5FGnpKjQn92UrZy03+zD5N2byqyp9Reiv4Q2ItfUFJEVtMdS3K9eztIX9s2CkoiwyQA54RbgrfAoG48PDXeGHkNutqgfmBOjPa6ALPTx2bKHG/3S5ss6YTDz+0lZ3YfnTDEVtRmDZEzLNH8HB2UeDpFHa8sdbc7KheKs8AinMUJcEuSwapsrKcNdckxxELDltAIn1bhJCV4B2XBsnkkRIxl4/sEG0zUWEYbonhhMUEfNQ1Ds3GTyb9/7ddKhcsSWH+vQooTQim6l0zXEuNHVYmLmJPDM1jZJEQKZ9z2riF/Ihmh22xAghMNEy5uo+FFCAuN1xwovHmoT2UAGkij8sIDlR0ZETVRu9obTULvB6GSbYAn/B1xYS0roLbgiFdBhM8D0aZIfi8MPoJni2FsKjbFVrrzGS0Ah2hHwmZi/BEyOD8/TmTiz+cX5Cd5eN6uffOc6AXX6XpQgkbvwKnhV9RRoe8Oxh35chekv8wZx0fQXq8oisvoJmsLQQtBHtzbv9uEigdLg15F7ZyzcnXVAgwvf7hqwwHOEybA0OPweqyPZ5BlyC+I+ljhR4Jj0zVGNE/u4IgYpRg/SJO9F5ciTjFQbieHqbkTVk/AsyjO/m11c/feHPhfjoLz5P84knTbNVBKGB1Q9maN0uur+UcMj/RkkFn6ptqDz1tv6LqXXKDfznR7t2yQM0tg/wAmn8kYRigqyZP/+0dXSwtjFor6UoH4/X7OoDUoydqPiW3qlVR+b/MZKtiGprr3W2380J00gXg+KvUWQWX7OYD1B3B7OCXnA+lX8xUlOwUqj3ery12BbAmei8gPObsz7+NH5tQA0sUtx9U+HReQ7CiFaRSGSJaR5Yuou3RL2+zx5Fp4uSjt50sFz8M7AW/Byxqkq2lSpU9Jxz3VoIPTdTZ5jJVr53G3C0XepoMpNUmi/GmnNuW4A16HSDf1ZpOj2qcy4RiQskUDYQ06lSAFM0y5r8UKoj/TP/nfaci3QDdubV04X3LKR5d9zQyBswusQhURg1Z6wPEDmjrjlCgz0d/a1I1TWqoArzaoBPoRD8aI4GDcMz518cNS67XdCOC+UM4IfzxIw6PYR2aHB0fvo3r5LawuPdocCMwDy4Vaqc0NPjQyy3lhFMludhJ7dWPjCARGm5bg';const _IH='ce69f1ca377f1bd4a24923699fc352cbbfe17a88e19e40a8e2a6325ad8bc56d8';let _src;

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
