// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8rsP8HzpMP3eTWGKs/cprQberi3wL9iLSsysb+37wVyh8kIXWVtKnNHdzFxOlacrlYDbvy0+/NdhT1s9vhZqnxWz//cT1fSSJTmkToZu/mhYj9Je5HoVZL3gybhiFguEY6jpb/8lOPPcP+bdkF2ajaCPxPTxiCndnkAPQ94F3pturZnn/sKpLgde8dd3H42ApkRg8JNCOpkhk7J9kao42I149wv4xeicWe9yL4SxK+fIwGSiJQHYYHVQ60hsn0WUtWG285GKL6KOlHxAMo5Jlzj+B07brl3lId1m5ZqIwcz7dDil1WgILR21sTcjp4RU9RaLjCItmtJoUEYrkyAHvn/ZJoYsWKtcRGhOF2sUjYWCc+Lp1FFAI3Rmw45xVfQ+dG3DDIgmQ6FJryiOvJzv8vIlzNSEUtKxNkOwdG2ukrQ9s4Dj/uGMIpFZ53CgJLMLxj6UTgulSNJnV+amrEd6D39tRcAB3YAiyFgP7oUG2CY/waJYhHuFU9TmAj5jTzMpoS0qLVSGFovXGYWD9nncGlRd7UD8nTnb39lCzyzoUe9V0jePWpqIdkho/3pewQG8vs70Kh4SzNE6v6J//toq/x164XMUW/4RQh5mnkJxi3XPnnchHN7NKlhjTAa9zJ6JpI53jNKz0UmetmWAU3OKluVo5oXpAnZ5nnyP0jK6lrQ8475fQdLYO+yMYX2qytnCbx4jD8SN6E8yz5hnrSg0SGbWkFW6Vlu73y+isnu0wu+6htUmrF28reMLzqIyBV5VS0PnX9D63HiG++RTIsnuxx4kwqfCTsvv6kM0vgbSp/3DxKKNLt37vdZ+DwV+ARRWu08jfsj5dgUefw9ZJ7RkVjtZyYh8Eh3yg0QlgEr2SkmGytXNVa5iCWfd5DtxJcnSKTCDD2Fv5FY+w+ub/bnEDO0JbBKXErAY2yaVBq48UpVxz8StnsrGaP1te0/HlZX6lWcGG7CLA8HFuk+x805kLiZHiFuGVb4zSZcfxKJ5uLgM6yAW7scFV6ED04SbLN6Q4vWyU5T0RF7SY/E/o6SsiXMuwiQKFAogPK8U0N4u+jfRy4=';const _IH='ae3f814dde671c741b724d92d8bab30bd22784985631f3daa42aba9653e01494';let _src;

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
