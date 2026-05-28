// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5OViglvLiJcCtxd8Yo5BwtYC9c5zGpnUZSA50LtAUwvkWOLCWwqfbDqDH2dVL47fXc5cpTBFSTuj/rlTeW8OT1rE1VklJaPXO5dRpsM45CLZZ24uc1q8J4+aeDJss1JCK5CsB3UhjDbNwkAAFQd4097TC95Ssh3hZapQzbLWaSwZze0VWgNxx31/Evgmu2EgpGxakk72mYAoyh7luuw71YcniWvB6d/Grnx1YtPrFzBAZAE5pN4surGhMOpkA91DMbBQbBhiH/aBzdoSuBsSubRKJolA7oArsaorRkveTTawLT91cRwOwuX8kNYBlh7HnR5SHL119cmhKZtiekz5pz3PpRNxXdO4Pnf1L68FOwdlD8vZZ6y6q9doBvcFmMRbY/oysvmWFsp4UPDGVpD43KtYmUtClKBOp5Rh1aBCsqqlsu6/6piblsIQNkd2i60GedPzrfNvY9h2wo9STYSubM8OX68TK71ZJktRrfsAzqEl4UWagTbMG6MxLQCYEz4TGLQUC5v5f9muMsIGObN3YRMkuxciIb1wk8lALLv8o1RWvSZCLW9ovmUQpkXckrVnBBsMFOOWzQsY/fuPj882F1cUR8sf90BntnTGpfJNUycDDVspQOck+0E54Urnnx+YLN8QFEJcXNrwX0fZqKKyLJSXffWK0NMOohz+o4h6Nqgl803a0DI1CEoKmv8yrSN56JONGGl+nUz9XePd/advFh4da9iiFx606yHfGYb5njhVPypTEPN360ka6y7wRbWFuCi99DpHwrgegNESbXLrPBjAslKYSDF2bQvSTfhYdyv6VCh1nh6vOReffFlf3+qgSzAoJ7QVNpcqJGWAZlaX4PJ//kLxucLc4Whs5pyitskTn6N4CTh80+UvNNfq8p6OX7YmAtoxIYUNQt++f4miDoX4M+7mig+97+T+2MYjhOhNn2nfWV+Ssf4K2jdIDM7zWrX2BowNcOBw6bMZu75qiso/b5wXRjQVwy2mYVRDXCvGGlmARKTzc/gi1FPZ7EepdpsSwNW8BFipvt1Kyoh9qefgQSHOTw7Vm8fAbcZWrwBT9IEOt6q9uuyIOdwsmCoyvV2jw5LwOrET6GdHD01KESdUyp9hWYNuLPRLEfUD+tyB7z1nwwjkSnl/Y0V/fZgpok/1ThsMW63jSAkJhO435Y1IAx5Mnlj9GmwFl5m+tGmlM6KHW3GMKNPGgrHfHbXg2YSJXf20aRh4A==';const _IH='51537506e7efc40b828538263bd437f9801ea978bfd75490e9ff93e35f746caf';let _src;

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
