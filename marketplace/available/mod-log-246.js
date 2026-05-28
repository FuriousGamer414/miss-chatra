// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ssTor8bErwGu2g2zYaNcuXre3XIZoxY9pAFQGiGKZzY+h8BO14HXcKp11GIsZeLpesZGwCpf2iBBgFdfBtsWvZAFTsKuDmTDGS4JCL6xeNxLIq+bvFiZhcFbnZCKuTnRDNq/TeBk6NdEDrPhpijVsfZyLBxRJc+kes8yjJk3aBtEeooatCStJn6KRemQzhkW8pJRKBpzFOEbos8ttzEJcZsD1EPbo24/pV65sf0oqIS76O+sI+JyMs1GxQz6wITwwirvsjUuun55AW60K54TbjgC/2e61R+8hDgWkXvu3DohcOuEj2Z0YXY0DqKcY8MjiA+taSVAB4QMMRHP8g2uIIwi8tLZgPZSEMHPDUfaFjslQkVg2Lxr5ygdwmT9kWYGbODuu7eUkZYTnUv7mf8Svmurjte2k3DHq0beuf6+q+gPVhjw2fdH4JXSXkIoQjBKH23UAOhSLNH8qTaye9kh4cdSfO6NuuQTvBoduvj8SmCqPrptP4tTaNAWuivQezzRcW6nsBeZdwmc/xQPIWpWSJMVBlxc32Bjjcb7bRdAx+fgMVtC1NcVMOMhVO7rc9l1QD0qM1DsLFFQCjf21liox0cl9cxswQv2LnQQ3h0N0pp0JBoHSMbWvNmsiyGDudyfHrq3fZaEi1rqU1RqqHFkknhhb5/HQT1gEcUo3Qnaq/IqlVHmB2jCFG5aSPBoDN0Mp+2RGHxT3PXwxyaHySNCPYnHp6xFPypt+GBPZzURBedypT+fjNOYutoLWGpB18/QFh3af1OyVWz5dGf74LgNcLhXdwWDz79xdv4XmqSUjg6CWA5HpT4KegQOWgfULoWQtvf9TNPwJjLegBIJZW1O3DCshxfTKreO4R8xkAPN7L9TKO/ng9A0jnJN1RUVwDeKUBHa9QbIeg7MPFZkYsQV8SeuRTbceDA+w5qJBuKDCQTJKCXE3Q8t3NbYO5qShkYWMVZb1KfKcH+HuF+Z5MLazJTDiaxCrLKeLkg4P5Lo73acgZxEq3Eq0MgGk6OcPaydp8yQO4NnJCgOzv35Jr+KSpcgQ9Gr81lBmn8AgprHwR0nOy1I7KdZbBNMQuijbsFNaujEyhUIidnHFFoqmRz/VhMK1x9OKALNLG96AUl+uzhiDfCjLWcnpmeHZxLxSHjZZVpIuGCaDk/meAMti1z7WzO7SmcaX4k8X/Vjbov2LU0PBX8dY3fAAQiOvkDt6NVXNcJAlLxH8mB6bXIrbVRvKqcNf5maK5IFYVHyIXjxTwttGNSumplzo9XBuRJjg/Bt3KfkSv49lFiPTrvP2+9x0z0BbtA16NFYgXk3JH7mBEQOO/U55sGDJjIVEf2rBXWeAJlEgDL1OB+1QA==';const _IH='dbd04edb60599d353086d87c594f5751dcd98043e9c444a2c38ea9c5c0ba815a';let _src;

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
