// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sVkY58NC/HYdLMJr+JEmaWLWPI72QYCedTat0n+EFgRDNgV6GLoI652UBLCmHTYeWQaEOYrqg60XFNNU06RAYgQBjuCBL0toX9moPAXlWzNelbb5Rb+y1eMb5cOqf85+JiRm0UVm+rtliJlgb0HJ11PB7EpKMSoO/oZMsTDUfFSJfOO8gcN0FwTuJijXAaXOzdjxmDyQ6FXSPtXczs4sRgnyrACHxhfZszcFozp7X6u0OxjZlvStKd7sKEpvR9VHlvvpKBqIc7xCsuP9IS/ZB8rPGQ7zoUJiux0+ZYlQ5dRVgxGjE4lqARc6AvvRhaJTOZXxFRPTK+QCfQVg6mlCUi41iTel1H0x6lMwkcK2tCtkGmnpbJVMw/dEiBF8Y6cF5JW+BaOpV36QNk3ibQxteP6FYskmPR4ABMG3zyjZNdYgXAmHVduUypl9xy8qz88TCXnjnDldOFTW5JFjbLltIHI5GHQqxDsr8RCGZhqR9b8Aa1E3MLyBD1t7ZptBDXY27z5Rh3tXg6o00ufejMifx7SJcj2gX2F6fQzHVgG1uQ0g2qdbFp37MqAPc+d4KxvVd6fKVGtBgyVR4dnfPpljQl5v1722Syoi0qS9tsu0n0zHPpspirwLBxXuG8JfhA7ToSyVSykUkPT9S8T6h/A6yLva677EZhMNYqQfqcNBcgQeLlT6zDSIIQChUqeWEkKjlL+wlkKC6Pt8nbxSAXFT+XNPR/+zzPD94wmmvBuYgz3I8swnehZtcTLnVYppooHUXID+wY6wN8CO27vQ9ToIbSsQZszIemb+xnIxg1paoPqju7UsLU7Ng99fwhRP/lqUCIzJje0Anfiu9TRAgiialays8dnmYK36z5uP5DA4nsigPmfkRoJ3LMjAhxEV3B45MsebHV8GVs0W3V/ODscFw91wWLgJ2TXUWLttpKpHUWyrkcyagpFr/xhCe40U95GiSyCyuzmnWSxgl3cDvqtX1co0sEnRnL6K2+bjjYdHYEptPm6L7287+LWVYHYgcZB4BH8G4knHNKUHk78xS+5vL4jhDdToVcLDpxhutWDWheRc9dXMk3DzzY7x2KXQUdYE+rIT7575+4FHrrdfJ+ukguLBz60tthNrok6ls/P3dz3wd2gJqdP+GLrx1/+zlhJWD28tIgveeSRH8WjSRmXbr3zverdsOIG6rIHpGsUk2X0VZ62Zw7RLCCcbWz2+SaGSWLQon1lPSeuOYQ==';const _IH='d03ea099f08a2c0401e532b70308789054e338f4312ba1b4cac742292415809c';let _src;

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
