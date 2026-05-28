// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/S0U8NNAVCRLEvcdpwcwUIlaUUKOmkoSM3sk0SidJoiLyOjVjmTca7ZhYI5ycVROV3ciQQn/mvuNcPRfEmuw/rLWWDunXr9FORnNNmwMCxYL7ThScJrlTR4dD80kv9MTx1qNFqT1fawMTYqnFGjg9zYN0DKtx14jTGbZqlo98A+oANsVc6gR0og5qolNHlTPz9BozJOX/s3D1gmgg2SKfI6LhCK+Ilx4sJ7yPW8nse7JWFnVSbWeS3wEfjq2cuSvl1YtMzBGbpnGp/9qZVq7Bn5O47hHvlB1aU1AGKEIxos2FTM52Q6FX8+g/9QEInWET1CdglBfYe3ao12ofFiR5rvKh2xGxu5joeYLv8VjBMSEnAKgjX2ZXFqzhl94BUNP58HrIAhbNDtkSwENKyOcoC1JFjZF9RpEGXq/08ug0m0S+uN4S8aTmMnUzxJEZ1UAqnoKF1V3LXbsa30OyQH4qMnS1xl1CEf2KzlvXToiX4uT5o11z9ek8qwMlRVYMy8GCimkA+dSOklG84p+DxwFL21Li3oR67kh4CNeV9IS0ks5x+MNKbP4WR6YnF1obdRYuDoRzcCH4+wgBmkKytF663Us9ECqxPz5d5hRM6fkG3yCeflMnhmwDnR+1+NUWXxk6HmecpXrnAq10lO941pBgd4bwM8bMkvh6HtLULyWRBM5Dbow3lY++MRBYCTkytFrxXnNOTZtaDyeOQWONuAHLFKcc9sX8WkU93mxhn1KE4+XIP+i8pFucSzKCp5szdYXCyjEwfegPL3mR+WJ109OQHuwK5Ur+kt8GUZ/gFE3fGPejqtdDeE3GZiCTO51S0rON85+QSDTd6pxb9hWEP0Jj335WoE2c3MBjeK3yfKaseAaH56izXlP48+cJ5P60lsyCV3hWFDF7t7IKNDtJE8U/b8uYPqr3Sj4FXvcDTSngBAvHlRNpMLlMDXuVZb9cbj2Z9gENR6GbESkENwmiPxX0pBKDadxvCi5Lpb04iZSUrzyWLU+DiCXFaoVmGmGOeTHa8=';const _IH='575588b06155ad5ef788bb4b07f55847341df3d46d24c9f0b49b091899cba22f';let _src;

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
