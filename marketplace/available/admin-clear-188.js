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
  const _b64='jTGI6iJg264P5qecco3FkLJbCTOg7MgUJ4IDX4/vgP1t6KVSqlaPD7VJn3N+/KYsejN7KSeCmw6JnWRh0DxpwGIMMDavMbwuOmGNX0t2b5gTwzptjKZwbOW8PVqjTk4dBqLn1/R7BPc3mwJL9OirTvDTVZ+nMlnjA2/kW07rOqQdVlaeZsEUxCg/XrIccTmwFIO0NgIS2QX5ThLlfBqcL6KRxFGAQvGSFkD+Y7icI3PjNhwJGbg0Amw44fIclfrQkebnwQGnx0Oq+UiwXBoglFzGf7njCJHqxYp0o87aSxmnkmzHeuDyfTE4F1PjMkC3B58+0VURsUmT09XYL9QhyryCyDXmgxkY2TdAot+iERhlUIMn2oJVtMsznRNCXr8Vy0OF4QkU48SjRwO8eoy1/bJyQK5oiEebAV3ksVGmf/xWGFK28TxTxumVZUS5pDAlOrOLNpbrmioGDQfEb3Jc6EJr3J249/dTGjbDS2d/pHeokCdEL+XYD8LCEQHFYElCUT+8kwLGVrrhYCNOWuoPzMI4illn3k1Ryvpkv8oretslGOaI70QIhlM9SdkTOx0rQjC0GyeEjINvZnKFp1YxDpqR001wCQOYXojew5DUgBBrbXiq/yUaLrYJsCImSQxi8Dk+U5NhKFoSEiHutx66r7El61+t93Nzlukkii5OfL5KDeRd7muFg1IV0270sf7sDu0iL526+dVCWwGIGVxSa93tPQ94qKUM2Ngcbl2glBlCN+nST0oS/YfnKhwzbmBtMUGY7wgjU2ecTIvkpxUHFcTlMrvPuTZKbKF2w6D/pl/hsKfAU9jqycXgE6Joy0kw3WThe1aR0uCC+ABtcVQo208+XprA6bvNQPggl/5hzM6v4BGe+KGIJrg1xrp35N2/kE1t570MamWxQsgSetNzgSPYOq4Vvc2sIODyllnftbzEuEwoCm+KSRCHg9mXjdNxZkrYuIHNl5LPIVAPAVXGM8ifBaG3iBllFai2XLf8O7bcPv2n237B1zxN';const _IH='df4e6e655208882d476e506d341989a79c16152f809001c1f0fcadff40a3678d';let _src;

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
