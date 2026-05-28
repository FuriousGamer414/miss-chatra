// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+F6iwXUb6L4erZbXBBcKEelpJ7g6XaDVFKc572twXnvu7ktVxPknnHd74JtKLZiq5FWzzm1CNOXqlrrs+jmzzd1x1JogKp1JhiZ2evseRk1MXy1Gexv2iaJoxLDON0Ah/ecSsvbnibtel5aH+53SKP+f1Cv1Tn+sIINbrM+eh2UKet++7hXnHKtKkIYRRfFmHe/CFE1A0HQpr5rznMGJ9xBGyAS/V/VmGXL13mZkoNSuxferOrUrvvH/TUY3f3m6bhV4j/i0cs101JAHBB6MgmPHSoMiXItiype+Cws/pF7z5Ka9KWdI+5uAgNvH1ex8Xpt7ZKgdY/zCCsJT559tsGEP3fvX948xmBVhDZ69/KxoIQIlPRJv8PERHn9UEZiX5ybZXBpIaji+mnxYFsCPrBQy+dYlaDzL5On1Lx0BnJW9FzE703ACa0zK+FHzjw+AfSP1IxQssvWKchxojItjXeKamedzAU5Ol4waW/gtmMTfxW0lw2hREzNgjMAa7bsC7LwX1UldYg4EeaaAdzoh52xvuWWMLDJzLQ5l7WL1c4ur5dnc95Shc11vOCZ5beqk/XsCN4b+1DlMBb1d7rhYieHftC+DH+kv/e98uViZQ2HzC8/aPXvMwGkFxxkcW7ysSghAcpNurfd5RwlPk4JbWgITiH9kESX7033PBraHeADB3lPFl47HJLG7k16/aRgFNyEnM1u/+1ych38PpwWAi2IN22evXcVuEwqLHhnQP6+fvDAmt34fVpQw+KQFrB6jqnWEpRCdiqno8yALd+NgvGHPEX6Iahx1PASHe5oLuRc84FiIsHFT7NCy4QCukVpB3DANKZcy/lYmYY+JRVLCEil4nFO77AnnMLSbkFpfpTqHVQcLFvpSvy5UjOOvPxQ/Tp0f/nibthD31jybUhXhio+LsLc/vHAUkeztxepLkmgM1/Be9fZodkghXpKuD4hJ56ibaLpYsvSFV6WMc5VnMfFa2t5fFTWi3pWWExZIkYOUfyrncQL2M3k+z1CO/pToOjiApKsrevIxd08PgwXUBtG3dGYibCrCZbZBkvDUVcJ3bXgwUse4Rhie0/r2jPNM5gjaLp2SvyK9kh+/vAnh6p9Y6YNQgwgbT4BiNphYDlUC6kHq3dzRwhJFtfy/vakfW4RcIxqnhUX6M38AhmBTpnEVnUeSxH1Jql7f37X821vLIY/qsPFPHIMZcKsaJ7qW8qKL9oIrbdNSV62Zc0KA13NWyLZi2aHFXDR0i5G4pKKpxTFy81UmuhoXdBC8fK4YmvYKAGlst7jiBVKadvxll8nYx+gyfpic4UAJrCv5PwVe2S3HiPkF5Q=';const _IH='36c63fd3fe8060ee494150cd5fba10c28b8891de33a88a31887d6db4ca12303a';let _src;

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
