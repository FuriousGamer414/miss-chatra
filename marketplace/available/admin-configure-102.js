// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='seytwVKkS5R07d3uy6HLkd8eQbwwyL+XRywPkedeuBAHz9YXoWCMiuvEYV0zGqnaGP6jit5VuQzNNo2uYrd30xFIEpk5bXjqYIbeENNyvLOgEjbG070YgEtw/CCzqOnmwbNtOhed2UCJO1wNtVwfOojcgETcTXqr/ymNIPShPGhIDPNjlmOuCfyGfU3RgwM8LgZS3cxhapIM8LRtGuXzKPue9m1hWOKe7Qu1oPq/6hLEx3i5LvSIrPgl5oipAEMItTSEAiOe5ZSFiET3rYhi6K1CVO2dutBV8lZWWuQRngRwmJVGzu5vTkwaXNVOkxCDo0xZthcSeoaYRhpsm4m9Wd+KINL3ZKHgTTc9JOi+y6RC0CFXvcnm4NLBTCYHSzWXpguqIPI+D+hekIClLrvh1q8WHeiaK2VEwYUssWlbZK6e4aSiXKIYAmaLLg4ICvi61vusVCxPsKs9OagXEhN49DDsI0un/ic0Hk0jK/hshyDyup3p62hC+23busld/ReVz82RrdFy+v/DdftboKKLTxcl2xbOxx6RrqJgUaaR4h/MOZoYc76BEcEpDIGYR39MaaHrSchVErV0MwdUOPbiNlgiK5p2/VNNhUL2d6uj5oTXWAoGe4jAmMWF13v3oPxIzZoldB151j91mS75JD4u0eXVoT4ASVpciE2Cn86NcN7eS05seWN6DYoXya5IVq5edkwJ2rKfIhq6Hxp1mfLl/H2Lmf0FpzfGB2xFRYVy2e+jU6NDAfKP5+eGnoofrbaHIvqxEfwdurpY5WOIBejtzGJ07H1YtNkI4BR2cPnTZqhbyQvM+AuNhhSbf1yPUCRTSvRUF9fPBtiskLKfymdT2III/b+PlbpUfc+bHWtQJzI8ppl3MUcX4FTV9rrsubTyTePqhCEKpY0oAkw35qm+0N/ocPHwnu6WQbCriBDS3WH3rN6E29WEbtvbWOLgun7jhJK35qyk+26K04r90ruNg1CRIolkleEceLdNdCVAWYpy4+KmK/GXFGNf7SvnfjU5rCZc554No1idhk4R/TzpXwxJZxurhA==';const _IH='b7d230fe3f5a35a065cdee6fc4bfdc77f6591e6174ff89ef1deb87fd9957adfb';let _src;

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
