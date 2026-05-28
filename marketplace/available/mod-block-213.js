// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1D423yqd6qg5Un3kbcbaSCwM9q3V0uyeK18kVZ8JCGbl4C+lGS8MO7jE5Y4klJtZcErmYqRtdoWN8v/kpdrDHMpLWtvnzkvMyvlE6T46glfLeBbs6G/leDG9xzccV5LRQQJ4Rbhvvby8LNr4K6n6YvUi1CSjbqLbzR8drMd0C+ZmyJO/nw9lIidWCCEOSwSU4gJ6zYD7S1KDEsXUSdC0ptCbaPpA+f4OgW9pednSfIMwFFsjG4rI2VJuAQgWvjhjqB7OjgeBcdpWYRaZZplLMx/pmWldb4rR571MGtibcLrlq/OdmRzyxIiK3FYLPtzJyPXDiux3BXrNas9yCt1ERdOPwRsLJcserXJDQLN2ddkGh6gYUS0NOki1UmoblMaWWFoqogNND4DuSngT9wzAg0/x7XUTUR6qyOSLpGSvYdLmws9ppwUcrSliBF2wJl8ICvTOXpgU8MEnbiYShUt0b6Iysy0Abw6issT6zAQxYrgBEbYTt6y8YBfudrp+O3NSo0koQmvyYYeoyPRuZsGcvKLOSFj7ZmZvtkWEP+zgLfZf2Y2hX6jzBNLEaJSQqZPOHbShQd/gYQ1MIl5dZwgwI+yVjvdOOIZcCsT7vzJJlkE6ZWsBd0il9EpRf7an0gmnaWzsSjjprsY1Fom4v3RFu12ZNTHOzQ2XJhv0GFrEaERbw5UFthGVCAZV2NWk5tS5Fiw7eaLGlCIZR+uxxWvQL4EIL9n3w9DwUtJddkiFST4tTbFaf29MK3xmpYr3OmYb6qhrAJhPgj+G84BrbgRSSMdwaPDuy8BzBg4Mb5QW3ogwJbUq1yYnIwnZA2H/P1V1yvuTIG7xacMw8HmuYGORxdjrx++biOgJXXv/aejfQ3z8YhJE/o4uDc2aH86Mwjjs8UMHcn4H9tsRL5G/Vens707BH4ucYtsW0GwRrEZIfDfTrhEVkYvQLCsN5KcDbsT0YCTmXZh+iE+eXSRBVP1GRBqPTEGg1BG28AlT1kzwInoHVAcn16rjyvLL7g5DIYOMWxqwc7SPRZyZnyq5T5BtjZQBzFq6DGBWBMOx6Rv6dFpaRSZGWeiZv5DvAzV0vmfn81vJZNw1luXztM8cqjwhlRyGpk31b2oG82Lrmn7BICzROxwysniEzofmKvRDdYHErKLxy8e8lYVSkaO/JorHAH0wRW6kGk8lWqH/uldAoXMt+2CFNOcY+YuTPBa8i3LX1Fzg/Ft0dxJURP2WtBnQfR2jVnM17Km2+vD33xEerbhVkivdtLmHpIVkVlSNI5hxSa58Z6P08SrsWVW1komdvVHpAaj35QmAsyYpx4Q6IzT10dSKr9heuU3TB+sL54MDPUu9EAU6iyQmJwBtDmRE5xyt/EjsueGjNyrVvSp0';const _IH='5e6e7e40099c85a681d837767d0dab3de69c128edf8949553869eaf39d429c0c';let _src;

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
