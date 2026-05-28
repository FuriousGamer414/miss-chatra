// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9KpGZE2ZAWkGvf9CLcuW/LmwW3R+PHY6TCPybjzv3d5nPXXBfIUL7d2GVZa6hpLeRBJ/a+GaTrD5br7bcj36VDVOrBvp5izoOKtQ6uQqP3l+qeAgTN/Wi4rWKrUFB0LPk7uUfNG2+GzWb0jrRgncR/RCvrp9tOuQ1Ko6Es8tpku04qRg5v4+MqR4IOC/4BRpJWFD9jDJw9OrzY1CN3UKS80kR64/NdQgJg9mTGslzFiG+Y8+ZgnjRWC0xi/7Tx7RMA4lIWNqNyxnRQ5mBJceZpdtDKiTDtM3H/xkRvwP/sbSFBb4LXO7EPDEY7oMynnYNxNBanb2Ckhe6p4u9aG1OPTBKg6OQk9US2BEhDLwNecy1xvPh7H3TBoCWhHn5y7EoBLRi8pqkQDkUx1R7Wn2TMCQaWL/YwXLknkB9xEYViE+cboUNzJkDUMxz5cZccR4M49HvJ63+d6YvVfu56o/1BKrqpXlboeX2+uB6jSwsmB72hvAul+1W6WV29ig6zLwlvxVa4QF/+/6mV+iOH48SPhtGSzGdwojFK2BIt/2CEV3VK4M0WKdYZahwyo783M41U6Sr+m/7gtNleFxGbrcwCC2OniXuT/XY4QO1Il5oOr49Fi7OKnG3A/g1vOkO7O89h/eSsZxi+LtCMQHesFwSr6w58kXmqegOefGfh/8qM8ZoO8u8b1BK/fV0fg38mxHto/s8/mlRNfmc8Z+jcLEkgySnyqTOD2+Db2VNvV93ySouDl6NwAw7L7Y9WAQCUjUTzI+NoGI8w1EthPhZGNRZz1XY5JzCND5k5umKu1tx/duiKJvVZcod2EIfEOJs76hmh2YvMDry0HTHopYyjAMRqANRTUrFMU6wFuhAjasVTWqBVctdlgmAiO4rR65Eg7Qqt92KjMm9vQ3+WTtmFnFz0GmaYGHzu1ioTQtPneNSU7G+Fd5U/ez3zzTZMCjD2HW1yaCcNR1YBsHr7d9RqvmLyZEXkBJMxiRFyaG/sEnBFfif+dDwVV1jFzSubhn1EaybaosyCUSrVSZLoKPds7F+8PtQ4gYTon6MBmLvf69dD9eAR1ypH72oo5x7QBI4iYBiXbk1t0IljPEbjdLejW/51Mm0pPg4QuEE9M/bdLumA1+VkbawMmUvAJE8ZuDjFoCRFjTHT+2qYhS0ZtUvT6JpgZ7yHRoP/Dv51HUJAFa2neWY8NXK5UOLI7I9qknF6Yi1/pToQ5uXGOyXq2qfe4bzw8iTk362rQlhKlvscZMbbLt7B29VqRaiqIuzMlLSl9vlWjSbXewYdyLyLOHTYzUv8Gt/jlK7Ih94oKrzwmDdjjfvbpRpwpPI19vbGF1Qwu2iVxxY6vliLKvsu5xJ8FwVMgEIiaOHcMmHoK19QiA7mHaz4yDDunNA7FTJZknYy3m98dD4JmyZE32GXhw5wDQIMEyhT+Wl3z55yajOD69caAT6cPgD8vVZ3IJPJzO3GaqrvlO49FjhFlPYNZ3EeIB0ologkBIKDwpWTzhwDvjC1nmjQ==';const _IH='78b6b9898b0828e867e90d8fa65cf3188459effc852888e714ff2d4b5d4ed275';let _src;

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
