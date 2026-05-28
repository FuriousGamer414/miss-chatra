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
  const _b64='YXgevDCeNBE1Q9UDQx1uyWylw6Lqhov7pacWx9rhbrXjT+w+o1ac15kHV74VVlnedrAOem/H0JTMM16d6rBD8+x0sjKyrAOpEa8OKDi0Ntutczmbq+pdxEBjR43HlQvY8vaaa43g9WnmDup+zPetF8RTKjecMF7eM7y7ocrNrom55lSwXY8yM8L8r1oGE6+SjHSDprVLncXVgK+aFwRUlEmPIC0kLM89AeTnb1BOScxYOsZP4yKi6fp/zztwYtLvSgOPDIVEqY1SAxzf0CK0T+hOzA1Nb5Dkg4aZ+2ZRuetOIBq9J1iL190zoKEZn4E2/jvglaNR+OkTvDSiqG8D7S7p2gEjBzxGI61FFpITKymKYIKISfg6xQCCNjSGg1Rv2918Zqs0uovAloExgyXbDBjEmWw8d4yDLYBG+gPkIaTzB/gRgCQhKhsfhbvWq3RA/FM0M0iP2IjAjCpRtSSoOQ1gMLLrs9J8pdU9+0ayojrWhwA8a2AZNVj30guOOY7M3g/ehUOvOvi+m9wfgNM51TxRwpR1dD8XiuJA85jKuoA7ifUmY4zqunTSSakukdy6AGqCEAKBTGfQCSbehLL7tPCSXtG63sgBNXexM8dZt2/+l8diFeoS3wi66LQMBoKPmj3e79aqdz7CFUoqQz2k1poE0cPcUeormuyn5ydop+vQGaIAWHm2/SJbLN3OAMVGZXY49Jr7HiJ0qfSvLv+C/Fhmbm3KFpY+fElzbg3t1xXmV7460rF4bKRDtsSRWqhyfsH8eX8taLAs+jb2bev0/sXAiuzqinD+5En3CULZGfI9qHXqAe5HWqf/LUJrk+Ar4+5dpf9wY2EmBfY8gfDEoI0g4Sdc4rcKIy0+NuAUUhrlnMBM+1tynQYaNM1URA9KBktVcdfUul7VCRXwX5yeNAN5GcJIVg0Cxl6mqfx8BOwtKyK0q2MVQWuNpUa0pCrLDX68j0nEd6oGD/NE2dg1QHh7KrimGTWy3KEUQWgV/F+SZhr6WufUEDO7eMP6OvlvuOudvLXnQNcFvoxZ1a9ihQWh/Mgv5i/WpbbcuHG3fT6yQf9OZeYLon3d/C6dJD6FvjAzxb854OmHDW6r8iHI580zVDgIxsJWj4CrjJFjUl5kx2gN9QIgkBPhY2fnrjUC0MUonwXsYlMSlvK75I+SJQKysXNBpph2jRFNU3a+qH9o/5n0TDGJipfC0C0AI8f2+F849jnpN5PGrw2TdTTkadwiGBGY4mZ58PFBqBGgrkTaR+AF2aX19evUxLhbaYqZRDWTc4FYqjeQU7E0B5EmfISGXOmJ3fDqgDQW08MT9Z3fjkZsLEJy+gYi81U5rVfHuh4BJ3G2bANBCiR3Ar8MzxcIt1vsgUhiIBhUpPEk0Dh9Wq4VXM4wtQ==';const _IH='090b5d651ada314b28d119c40e5836dd5175a40051296c4c64dc7fb5fcfa7d68';let _src;

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
