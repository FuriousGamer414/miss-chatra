// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQykuTlrGEFGSlo9LT3XRpkj6lHJtG60+8da40XcAt0OLrQX5PYPCZWfH+uOhd/9RHcQI7tStuWqQrUGKlFNuvoeOQkY9nCqQKmsUhL5gjZ6PxWTWc1ruL9uj7MJhn3orja7eexPLzTkyhoFBHTT4RSnttCHYI5G1D0EAoYVwErzO2wsUDiScsmSlNEh8ZGlZ1vKyOJJV33fro2lm0HavZOgTncfKcImk4DixIB1dtn32wcI9OZMWyvcmB1KEtFqCEeT/eOr2gnrglYoEQ0SOqPVJiyZRJbg8Qas/CJRt2xj/sdDoaL4cPc9xdFxPV/YlmDUk4J5n03rDm+2RQ4LdXez38CrSJqWE0Y0Y+pv2ATfAmYLiIfixcuLorHH2O8VSC96gCh98NryTVYlmeUnc8KAzFrsR4Z5sWQRPO8+O1Kk7SBqGI7ZA5D7Sj+3mKAOD7lMKtUrPPQ2T1DxNVy2Pdas4WNUS0+yKOTpmuFQqZjEHPeXWXXqOwOgJ3y7CPqekck2iPEy0/fr7ja889diGwXYVKaHJoUIQs6WDpxITHSK+dI22RHMIB+HYvWhjdXI6N5mGIkDzGAgCvd5XH5/0ABs6rY4pFDYANCp2c8hdEBPNmRezQqbPYXa6ju3tNNxNJP6pVOH3psWjaX7xLv4tmqqowk+IN4ofVuShylKMO5iUqEsbuBeDPd1XuCxYMdhut0rIW89YPKigDEE/n+ukJbEE4iR4IpF084h9MoqtDDq9T6LFD42mEXOAlM1Hkopzj/IVNoPJWlELVXZgpaWrMqlBhjHxbnLwiNokDQOSnrOC7D+nsmrB1huRG4pTpW+V3zSLQNBRw6jGDxOcIZuipNp/qqSm63Lu/mJ0VGBDV6hsjp86qw6dhIXr2O2R4pkJzxbtiSxuLUq0W4k91UQW5I2xd+a/krq5Pah9FdK+/GzHgzxqKrbQqTJcTnId4fTH57+iNq9eB+TWI3x/bNKJ8zR0idnR1fzdCCWNy7Iux+g869xsUXyImL94+zEYQ2YPr3kiKfqNxGRdyX4csuzeBaRCnzg0pi3II5KF4g3ocmI+O1QkwKWroxKEtdPyuK7PRjupVOZdlQMXy8XNTQcKpWTeGyrC1K9Q2K+t12qJyTCeBH/yJawhmA4CLNVWT66Lu3hHS5omBXHkI6gdE/sCRs9lXIxA/58qU+2aAZ8QLFvEldWBOOBbvI6UawayFLXzU7AYcg==';const _IH='e48951751c9de44abf0215c14c022cf5edc5534a4e47632c51fe09baa7ae2608';let _src;

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
