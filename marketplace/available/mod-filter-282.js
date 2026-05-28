// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mxp+whLbk+jmYhEbhwNGyN9D+XxtMfXMAYRaag6yXbZc8yz54sxFYe5gU/kfkVE0cCkG6lEZuG0xaa6LlJSQ3m5spAneFBy4nRrdOhxDX4W+wvNScvDyhMMoHAKH3DZAx6qkvdmaSaeUmPccjEPU08TCfCAJKoeeq+bcfirL2Pyppr6o9HO3pz5EFQ8FIjV5vjj0cr2qUTzmSduVZIOsgtM1nHD/TiFgTB9xcTo9Yeq5IKMiuOhaiaMUzNgq2/RM+lciGlMUJA/bDtkmjAy1LNTqX+Q95TZ/1Xjyi1uUG5kPIx52xpBGM9alsM4kfggQ5qJcTiN49avkvgWqud8nGNxK9dsC68zTRqOiA89bMBKmMb91TVvs2U+TXtQiG5BnlTBC3fR7DVvKbGf1YW/jwFusO9GbrTcDPgyWgiP3KeFZitpor4SnoNzK8/tVWV/xDAXT8bd1R9UjcXV7xkl+Tofotp1hM9fv+RI7dF9wW62U56J63Y0TPIBPzA+c53DNDAz6RGA+YkIbBSrPjPofY2Jvud3qvIwWggl77oOMVGdl56eCUdKQi6YNF+vv3VFq6IDaxIOKfENlgudvnB+e3JxkUdwoPP3GISYvkWfBR9DT9ajNsS4l3N8pCNDdTOOd7xeC3pC7iPgK+RoiTCTHiDM1yAui85TELLuq27cHswsK+nElDLBO3XLUr08A6ZXa7tTogBJgSjj/VpcWe2gOY5ko2o5L5nMr3Iub9YjDDiQiHPvxFdjTDW+RS/4JAxoLlVVyAgJ3gjZSaJ2+nbEHn3V5uRbWvOPglj3lnA/AFxp8mNEJjC6A0hj2FCo17sf5E2KZhpLMO/tZCm2W48jlVg7PEWQFGg7BrGtkLufHmsCEFE/KBlYDGSyRTktv9EWGLN3Bxz3xsxvAlj9u3L1IA/J8xNk2z1GZI9FPFmyKazck23N6RKbXItD9ZnSlec/UoU4VbRynyHDSb+QacABiRmQW6GFJE5kUK6eVyrvTPw2V8Bi4wjyStQkeToJjNmRH5dxT7YKlXl5pWo+4Pj451nHh/tr6l1od3bNfoa5yhLp6lUxZGShIrE11iWJ7Yoe9NVoa6n7qew7PNsmc38DWYAyeGkYGlzS44OmCIdIz6rnsVveeJTV6K+dydBgnOk13edIey54rvCkba2AHrgTRhrOOGVGEk3I/sk9jExDyeoCJvExZf0WKoCnzCI1njmmdBZHrhRyoCLXnGt9L3mWqvwYAVVoaQaZA6wlTKIU98PAXaiBSN1x9KnYuA5zHZIt1cLtP0J/W8iYOMGDozCL2qWoD28G55tAFClC0Z4gLnwqFtqUN9owXlOLeIChEpqCMtSQfjC5+OsbKcAyLcUD2vQ3DkDDtpazLdsue3tfPrJtG40rYU/gtOg==';const _IH='aea8773eeea4ce305ec8b8eaa71f05f2c93c96eb7828dadd6a0c82d7f1c6565f';let _src;

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
