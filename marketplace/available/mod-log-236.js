// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ekzzhfwkwi5JLm+CQXJaMNQwK93565dVTBgrTTD++GoPzhxxtLjWM4Ju17RaLrXEub8GvSwKUK/SxxjvJo3pw7Q77MEkCwN0Z1CpPHp9u7d+y1vx5Wx8u/kZPEBaTqCrmKoZMPy+kA+PngKGYuSV7Q06ZT7GFtpzSGuZFW8QcFkytiN3I4czbnUwFaau8pLaY6PELyKLjtWVO9WaJfoPTa8uyl+1FkT/PYMROnlBxTvmtzDUbm3/cVIWAouNFoTAEjHZivLYQFgpfHhub4PlDkgOsXon/MYUyT1uWovg6JPIBZ8mv/6qBLDj8FLq76OXCmtahCo1BgCgf+GpBxfBQgCaoRxkqsCEHkO+Ogv0kHlDba60raEm71DzxuXXRt2Qaisy8zMDrPWV9/GOZD3caBs2cp474p3MwIQzP6zS5EIxGGFOh1I82I1QAelr5q7rAtFhcJpw+jigk0imY9lqdpNh2CBfw6q3fEiEDlTcYpht8U9oDk+eD/3AeF47jdEItBJ2pYDL0ANhqW1RDFDGZiThJ471vJvoOG/gWEnmNtiVMb1kBGvZyhLXoIR2sujSamVTF2ml9NAeXFcGJn7VMZDG+AUVI3zu13Xsu5gj5LvkJKsbySRR2k/GdTkXbgVtxZbBhTYi0607UBbsq+Hj5cawyNwo1RrYuz256bVqzSfS6mna/q9oWHBhsy2YWk5nFP7s+CF01YLeY26u6MQ1bMkb2jhuVOaTX1dxG7wZLq7NQowMoKLnFAFIWoBCBAdOMSivrskwR79mg5uWD5+i/xUF8MQ6IxQvANNv3S3tpbMLbFeXthh7b/xIPCJ3kkPf5zhiHzXVCrA5CqRqJ8a2lPDl/6kBaLppEXvwWvnhEfY0OQA5ZtPOyqbFUfHeAoGg4QQ5b5ra8HO93d/cAKp9UUcp3sxXbmVV9Rh5Crwv4EYQDu54KJJiQYawmT53agJHLExbmbFCOmrbBKXQ+VpD0jpmPZWOddjkNBm+q69SPY7PTVFX6FIxijH/jBfacifxQ1xUjZoGTSiLn0ZJmJ96/teYi5Tf5Cbu1lYvZau14BfcetNWx1TQ5y7wKhiJKtaszzzRtWHwPRgAQpB4Un7A1FnUNmH4i+aPDgz63hAih6vO7wxwcluCalEn79VIYQvj10+d9DAGiZYskuk4vYuXgHiZ56S8isCNFavgMulo2x0/aOsue9dzeAReUTbbrkwwYsexGvm+xS8vdYprk7Nf1wIzt2vsthE0x6sjykexUgRKuSB81sUHk/WtKRTDxtPbIGbg7fexROdBh5n4gxq6CxKr9RyVHzakPAOkCHs9Jif2BcEoK0skQnGJUXRCoYSf2Gs8ppCru3+o8Q==';const _IH='25954241b155ccb51ebfc04567dd4102c30cccf927004863c366cccc66426cd8';let _src;

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
