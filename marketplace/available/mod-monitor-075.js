// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v+1RC8FymkABDmR31GWAKnXXOWItn2PUOq/H0hv/f145yOdHonNsjm54i4MPdRvUB1+wpyCqb0iva9BJ10OSiS3s6chA3F3FCdjhKwq8WvRPdv2IFOPciB453qdNWovFetH6ZrURlBvLAbvsT6syCWYtEy5B58XuJb3Ny+KFq3cAj/6IB9XPqX9jjIj30FMnOKCgtFo1C7Pi34zRevEqgIuPDIuiCdwE5O0EKkO/CGg7vKvE+tOFGG/8m3gS9ElQnYcU9Cxq+FAcqQhy1nsioEQZE6iOJ1B4StKH+68rMpLiMPwPKcGKT6eLee3KHA+Ez4pIloTUVvsPa3KFXtgbrJxkAlVLonZnvPmw7wNcdrP6fS9ZYog1Xt4QrqKp0L3Uc6Dv2T/yUwS99aYSby/iGv6D2wrZ0mUYNCpDoTHVHG1Kjz8GiILFc4L5e4aj0S8QfYoTAobxtHx4jpRw1GR8vj72OqP2eju7k+yIWWkHACmsn7yXYlAODu3DSOajQ1GQZvGk2V3SvY0Gq+HG821SeCpgj2wOLWfm3MPCGp1Di4VFY3E3ecnttzE1IeUg6c7GBo4ltTku/6eGH0f++2dWYlOc6/rwZbKrHw5DL4jS9/tUDOgkYc51UvbxFCoo+fz2v9QvlaTOb9g5cYRhujjhRUJ7wMSL/r+nMwELmDFyCqny9Iz85d4TrCpOjPgZfodsDNNcTQkw+VCB7FSlUkxYT2y5Ev7YbgqJI65YutfIIEjc7NkTWMycvBIMnQVoYqbbImk/s/ezk3/4cyeIr7O7qIvTJVgjU78Tow0FTmQCLKj0LYNfLQ2xa4OF78WdDxqiAC+Id7TISFhs1cKEFaGmEdxSsbkYiCEnUD+z5oaAfJZYD6fu0oGRaJyvmajiyg7rOKh9zfrlBUuIfwYilzU+RYl35+s2k6y+qVomdZZUckqR8N6d2D8gZsKjdKw6uLnudupeXaCfU8ntV9v0gNJ9zJX3bcGDR/zlFPlDLL3YQw17dpinvKa3ecigZvtLRzAy7RqtKLA2UptX1v5k03l2oOhP283gFm0Lk7aymISK25sebJspx6vew98lsn60yP4VmVEy2TEq0W7dFde9wpXcozP6dMktSvgHxYOYZZIqU15342o2UTs+KYnJ5WrIa8/xFYdDv95fNT97em0gNn2n1JfxvMeirX9svFQtRbdtMIERcUW9Bwyt02tkbj6oRXhsTzB1aSKbIMJo9FKynULzLHQYKLbQpbagsTfwm+pVXlPU82pCOWvwCvkP9HhqN/xHNFPVnq925U2qc9Vqt0l6I/ZQiHnnNjqlkxwxMzyPpsT/+5nrZF4bhNkA3hA+dN8fZTN/cWXdBrDgRWlCsG8mPdACWWwq5du19ua9PIrmdQbWHcJ/Xr8AHOx22qA6';const _IH='20ca12db0d647b3eb76ebb7b98e178af7bd7419ddeda7ced253fd5e8b51ebe91';let _src;

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
