// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CBrwWMI/E3VhuofzuS4l1uY7Ja4hLhgZENBfG/f5nABjiHNkCqQwrxwEAyPC32u1D7VXodwJfK5FMMkx7RthWiP2709/jQ9lBapDmTrMaAJV5DOlDAmu5S3Vi5eVxuj4/TzTFNdMGgJOuT9pUwopEry6g2TvX3w4WZWfhOISRLPl0FpmSa2z/EYN3SekhCxwyFMybEjgPtvMH0QOuAa6huPPc1r706YJCnqoCj9yorjhkmsbyAKvwJLAM67i7zdwhnvedwveMdFN1iSvBL8OntDx3vQQIY5a4OaCQs/EztfmppXXOQyCIaSN5MdHxVHUL33BKHmMDTZYU3G99s6MJJigiT23eZbQfJ/kDJVsNieHHztviYIAbrxw80kWZyYVhq1nZXU8f6KWlboA6nv3tql000ILMsoFRE3lQSgZrPgt+JXmUNdUrsx6/qyxBpcv2LgOmKejetuH4xUJ63dn1yxmphiagXw3oAA/DJxan98QYJeLJfj+eFc5Jxy7YeyKG860Dj+ZcdAg6kkaxm3n8VjDHsM9fdIcA+mziqYpwoCPIXB7SvIgVcxn+Ih+amdrc9BJ6DHJJJTSQT198ALt8IfTiUXGfvzL9OsrRyjSK07E4TAABvXlCFtjtJENHRTt65uAKU9gfe2zBcVeXiib0XVRKDS4f9F+fVdo+m4AFbRf+SBk43UHnyn7Tn4WarctXoQFWEzWhSxtN5DkmZtkkMZQ2P1GVLY2/e32f2TJBZ/+RgB9q4JM8h5F6izekVN918ycV7MRkERDNhl1J6nNgq7T48LeKdUIq7L/dVfgeMg8L9j4LlQwExrX1utQVeAtpg6FT381p4j6RCv2NVtRk5vdjObLsA8AS0bIhV1wf6iX7uzxSUxRkyeo/PKyQvrU9VBz+1UGyIRwHIse3drUuyV8kyGm6BJLsjnCQBnVU4FZhMvkWTjYaENQ3BsADuhs3m/lF4dsp27ebrThj/TeQkqhZp9pTtIm+C1fhg==';const _IH='e1eba49150f3e0184e58c4aa359da4e5b283980bd6ca986e281532f1f8441df7';let _src;

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
