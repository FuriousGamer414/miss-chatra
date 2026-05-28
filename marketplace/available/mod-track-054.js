// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QREE+9azQJ0VkXNh+H7LrFz+tG0U7ECzWkl2+xBEti8sKW/bqu24nP00RboMnSfTFB56J2TEbVa1YbtQ9wKwsoIZudKiMWOLqS2JWsSzN/EITG+SWV9gaDnk5ukF83L1Hkaur/ZjF+HpClI7AeWjfA3EcqACWpg7E8DmcvuZUKU5qA3yhyHslJVicmY9iMMb2g3lT29edVRXhBxAENpMrJh1i+5Mlp9tGmcxnvVikTbxRcoPW7KJ6NNi8bERZIiMuYs81HjP60ybRh7w+6j78DezbMtTvazOinrMhJGoL7h8lDiRAyrC0sd7Kp+UVY4gzkRcXNGQxLcz1fv5Dbo1GaCiLasMsO8D3HeNF7xf1BZgYD+Vrzee1vz02loz4UiCDbHyTVnqZlqXDMCA+0EEKbUbVkyuPO5yTWEhFE/UbSgJcBFL+lyZ3BAWvwWyfqiqmrqkye/qGWPm6bQ8MVFwaRD4hPmNKa84mfGRvh/DGiBm/sLBDaaDxP7xrlrPFqLR59gwGmOeHd43nh5G7ECdngBtGXIupoCBCN24DQGmuxfEUg7jauv9WM1pMVoD4aZko99iY2KXMgSGyANycE6gyyJDnLfE/B8ix8wHpNxQ0sQJK6m4Qv1MGOXW7d8FDAN+rEWuoXvtYu4Ka0HgznMdIgtrjKf0ci60hW7CCWesOtuiVrqQ5lAMMq6hhOKjtPU7v1B1ntAGKAWda2NPnPjx2zaujKjwsPgcNfO+UUXPr2AjvL1TiKlgALKIJaIJBgtZqmVOGV+6ztAPr88z9ZZUqDifmDtVnJfAc7jHwQxNX3ApssImISuc+7lLeRUbmOc/AJRZnj5AqgtXNBTMjk5nUi7W8uWrUJBrQ8TNMIiKzpxl5UFjFvqYh4600lawbART0cCKkR5SXAyDuoxM0VuLuuXPkVCoZd7mpJJtYlsBBqg66Qelqi2m2XPoxCO9KaJlLNgF7ZVBFwq1veAdJD3CWI1L+psOOpC4QeBOCQGi5YYrUxcg3iACZCWyxkVgMXXm/pJmAr9rI1ZFCglEeIL4TwOtbGGJDPBlS8yFwNC1Vwolr/koc83cGe/CHMf8rQQy8LlYXSPHw8FAOm7f2AVQc71oKaQ2GLYN6WpkjO+YHS8xN2n9vp6fIknsarsHNgwrQvX/ADHbQJYKQpdl9bHXtaZfYl3mDXTmILBx/XvWDdH1AcBy3UdvIGhLcw8QYAmqmHEGDdaTqsgy1mR4BwquRW/0iqjInyee3fKUAd9AEh+41VsfQd9IZlGArK+9wAYDZ6Cig2L6gOJ6NfDrAmlTQgw7xePdrS3WWd8HpsFtITP3gjSpjTZN5GbW+47Cjexiho4X8146vMDzTa+SoK+qX1FHdY0t8PO5uw==';const _IH='f91c4462e33489fe96225e90134e658faca2e7ec6e98d51b9c0a05e965fb10ff';let _src;

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
