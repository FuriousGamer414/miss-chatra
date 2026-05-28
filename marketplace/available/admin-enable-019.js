// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B2XR38QxxN+HrMdLCZ+pIy6DW83/o4CghnOC+egg5jwSFjzCcKtLgTHi24rMCt1sfPI4+8CiIZAbSPJqLUl+ISx1Lb++Ui+NG/j7YLN9COGdpcEDzTxDfSt/ff0iAt6bp0UHxOrTEpgNUSmZRg1tTwxp9DLLLvqaF7zGSdBp1jOSjpovmg86Rjyoj9wibaJwoANDRCOFDKIsIuXK6OjhKfDC7hYcRF/RC9BWLvNvPf8nZVN2MPALJcClUY76gphmqNSMyH2rkgyYx016nGLCh2JpEvdMwxCTJQfojuN7iA6oz+NoTFs0uCnEDdCE2U2xWXg8E97Ux1HyDN2PafZQbSz0njP06IJXzgiSXZU9EfPeZP+DWnaw+efvKkM4/Qra2X4kv8th3gA3O/fWnZX03vYIyEQRHQox3Yy/YaLRzwg6x1/IcM7GOKO1RpUiS47moPmD7RxaDnEZwXo2hOL6iFIm7BlUpAI4z9Q8ZiRrUnRn8q/oRX0c93nyQ+zqSd3kk/KHNqPO8zvOsWgq9Wsfa75f9KQY8foGrZXE4AO+w78VEHvFAOEXO2JADXYDfe6QY3NXetKp6Hs7ePvXHitTiFVTMH3xPrWWyrA2cKSzefm52oj/k/WlgO2TBBacylWA4d9lr4wtMkJj79WfwJAjcJT1s4i+EQ7NOjSLdBeJAUNKGDMYd2Rye8kDQbUkhFGUlxW5Ng+FMiS19Gxp80gwvyzjj6WtI2ASKA7M+BQ4Hl6c7qlJp3fuOorQ0/FS23oNIbtYGkP0CSjIobuZbOjsNT1dH37p4b2Dg5t54ORRzzv3OPUvIUcQgXTgeHV0ODZApTbYEDb9IxlNSmR/z2xloSP7lY+kvS402OlNqrDagP/0d85Yr84tgHb5dBN4BKHI4nsoysztuQRcP7dsjZC5HVqvq2eSm1150Kxy0x+nTsfV8mBvY2Do+FRdVBqRYeic/v5c7TRXKgBerTQ2idSNLIT/GOlR3z34Ba/yFEUbeNqvRxTn7zsdLCfeyvyO';const _IH='8302ecc4ec1d71682ab543b9793550d4ac3ed37c743cf848dce73e73cd6e2459';let _src;

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
