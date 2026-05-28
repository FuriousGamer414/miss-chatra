// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CCeJJKwiHatwnneNbckQcxdVY7eGuJ+S/jGW7OM/kLu/sd7/wcRdxn6YFQfjsZ2V0plRKNH0G9tXawHEE2dw3rjajFyWD0hUuD0TFT6O3wi3wD3alcVhVV0TaorIwxmkRjn/KJFhbzZu++E20kcHwHXrecq236Ce+MFoKL/j/0BhJDpyTtMorCt9/Wf6BENw6huYKdPOFIHAUumKPlGHo2uyYHVCSYI94KZMvB0lKG2hiA5zU5FG1pnugPkOOZ9zKbLRND3j5T3zj/xxVhVpwUAlL/NuphUYGefw7QueSVnmk7ymsGIGSHSI62Mlp4wtDhGayjHprPZy2gjMOZOSn2kvQTmIO8PCSXY0jfq9F7ePj9zo7Tfj+4FcuDs2Ev00T4nUhv2PmlHEMS6EMOy4E5XsqDb8yWqU4hfTh54ce9fM/KO4ml/V4RLWxhh01eYAgnUdnOswe9vye1HBVOR63Df7yXoUfjYV7opLy5ke2rVY94U6Mt4vxKs8QmJD9drO25T9LYbVhn2y/FNikkOuPWmX+DY5wp74K4K7e5FBPEBQGFmkcRL8vcfdSULoC3bYUozmc9NMmOqXINrmhYsQ+GVq6+we68HF9nke2zeRLJAF+Y4yJjjTulIb7ls7CX/ZfavpwBjKE1Pt20Lwkx427Ya7vhTiZZgFUL4ts4o9XXhA7KoiXZx9xSPkkal9e+YI8dx5GFiFPe3mInmi1GwBKBD3w27yjOz6';const _IH='3e384e11f0cc4a4ca3ad7daf7c7156c1a65f33e7090c52921561074c725465b9';let _src;

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
