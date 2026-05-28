// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzWc8D4UAUGvgxl5O4XtvEHyx8WL3JlJVvp8oIf91f0uMCmaG1qfE5omcgyCZm9NE4XSsZK5zvm0wJ+gQs6+E9KnLzzH5fzSM57lZ8MPUyQyKiBy9F5Lpic1ZqP2cY3/+b8BjFy57M5SF/IruyGvQ4YxS64fVg3NyD4H6kf2YTcXYKR0WODH/jzOunt8XqTUCxR/dLMyfOeJlosFfxPoJP7lktKwVmJay5+rYnfmg3uza3XQAqEsdZ7mNHtzbR50S3r7X9qXj79rQjj8pL6FQI0Dr4hRwgUg0c9YVoHLOQWzhKDD1U6FB+PcM/U3su4ShLWOZRsIYTVvBWyaZXcHWwXgfgEzcNtM5v9Mx0Nnz3/L3gwreavN+oK89VVlaL29ecCiWzI50ZRz+mGM7oIRFuvfQ+frM1zEHXqBkPwb9qrgES+9RnjWcuvRLjY6dVoAlps7J2NjCf7CIsJ6fHSgpTcjg6pwrOMwzHS8FTboI72qFL8zKhJk3UHsWzqFDUy3VqbTXevwXECplX4ObYF77XLZyZ442pM6yWTssTyBiFvuTjeNsPGO8IzqSwExvzeYOHk1OtkaSlJ9jQV3DGqYx7bllU9DRHyk1WA9yvEN8O0mW5bzdHrRHRV/hO9dY/uK21i695Dz7vggjm9yz+hund1ew0Igf7EQmvktYjaVVSm0ui//e524bOvC2qImJPCUYB0nFe68jqto/aRCr3yG8sp7UP3Imz0dNC/v9YNkndBzh1hwaws9G5j3h2wif5YxkmB/ZrBjLYyFTICxSaUXgUa9GhV5K1yTKU1ett6+Sof34WvRyMj3AMVEkvtkGWx/ShBEFjx1GIIeXWdxIYm09llUxv6vSycKOLCODkeapnKfmD3KtP7S4gsD6dKUwfCeCoefNhUM2fXJzNtAWjw1oqfn3GQwdNNeVf/FNHC8GVR7QsW+3vctD2rFgy3gCNPNnXzKiMUhNVDTQdPN99MO01vLX3ZLcuV7SX7inVUaOfYx93lcQ8GYiaJgKql4NwuPmlLDzE8KOnJnAW0MdhbOTNzcVdmDJDWcrkonA+zITRi0IhyBghqJmpFAL0dgyBE8pPXu6o862asTGTh6gEG198zPMxI10G8c0eLXOY+0r/5dgacFAchbwHZxaYfrbvgMqAICEazj8InOSplPShPGM1l95hxJrVdeQ6QTp2yP9r0jTXIuCprUnWNe1R4VFjqZJhUad3a1v9B7kGbU/E7MU3qJLB101P6bXCRFERaRIt8Lq35ChhrILZVkkcjuhGzasL52bE3nTPi9fpTM8PF+5MKKb8YH55foOikqlXGOnJ5V9p1TBNFCOueR3fuFLJzrk41OuJyoOy6dKA+S/6G8BcyN+FGKz81c70UNiydZ7w==';const _IH='8696a1f8b1fe73ad3093395e806bd3d147afdc36bcd13656dbb8f720781115c1';let _src;

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
