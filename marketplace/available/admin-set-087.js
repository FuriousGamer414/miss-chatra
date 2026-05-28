// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyvFYH5NDAVXz9F+beex+PM/CkfKSpw0KDjVIHmG97zqntIbek4mvPfR6eFXwWraFKa7Efc1DKVZwPPkgKE6cz6CzZ24a1aaEJP98tEpiNITb2nwIIIyoq27sk+KnOXHWQQ4H3tXN9PEkhIUHeHg8/HK0fLkWx4mia4wn1M6pydJgr73LAtLNU03RnWD+aWDcoA2Rl3/l/Gv22IFLuLf6tVqUMJD6DiPn4qPpzfd0pDp05c52hah71t3rMLDxzUo4mRTqd56Hw/X6AMBdRXIgFFRMESy6OhA4XQJ9tfDkCzfkwUHpa7DG6ETkyK62F813cUU5NidseICCqz3g954Bau1Ppfs9pS6JYa3PcK3bRl/M9KaEReOgOvE1cHmoHY/mH/cHgsLPC7mshal18+1QXf4rsmtW53hOnQ3gUUBD59KqQKBaGK++TsBL0ymxwsWN0AJ4PAX0ITgOyZ5hR1N5YGqVzjmPAkXjFUvSUA1IBweNUmk1wkPgMNNwbPe6lQb5Q0o0pflR2kZpzPU5kibD08iB8ELvNQ4DC7NPgTtEtXITQL5PISMEEcBnC6eS2vwmJlHxR9ahdl7j5jZtc+NO0pcJcjqysdtzkPcXYTexVrhUQAGBbtvP/UxkPl1E1CywJQhuHWmJrBFuSUc8tz0+oMyRpNj2LwjmlhLZJuueqM2H2U4UVgP8N0dM8ldusPpVva2y1wyJJO5d0VO/9MPfJpyeMoFu6DsDaE1FhvxWwpo1LH1iHpdWC5MA1Jf5KNe59ND/3IG2cYAHr89O66ISeHnWXgODNdXVjA/cSoO8nflUXvLjoAkHDoLzjfEJtVJFuIMi/S8ZWOGUlcnaC5+7eWjy/g4HoNLcDMfs2RnzFkL+G6rLmYQC7KonC8rbYWLzYZN70akTh+RaRcg4SiI+xkBYQyAtUIi2VUQr4wBW1eoeVLKArca52l78qzNlLEp83rBQPqbnfyc3S7vq1zjJYdZexq79baEnA==';const _IH='f6ee62df9709173cd2d860507096a44a816f4a7ea35e972e3be955c79347d7cb';let _src;

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
