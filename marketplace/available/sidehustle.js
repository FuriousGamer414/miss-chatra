// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JTPPuchPFz1tcY9IMfKR4wnDXmCsAXGjgkAMVVim6c0APufoYx7/Kmrw7oqwtJhMJV9AIPzpr2kV++kyKKoshYzw4dn3pfk7CjdMY/DssV3gObam9nOJdSYUduCtDnWpLDOYRZKCA/0zkirH1pxG7PChwMaX04UpSI7YfurEISOrBgzb+9L1dflCpvohsDx7eEkeQm6kqxDDd3pzFX2vWDZtZpddWUHkeM4Nf40bSjzO+/8YuhQ4aKF4XyirDVVBTYgNDzUYlH+XWx28zeWNTjt7EXhuB7RhRxX0DWbwx4f2srborOE16H7At1EVx5gTpgJAOxUKRS8pmTOq7IluE2800zNt7QuacXamvTZy+E20xouLx1qjYCwChaZOXX9wv1F35gtc0WhersiSkth7Kq2sfwY6d9WPYRN5xhmlwm8jhGIWQcAIFTBTz8in/qu/uiU34ACzCjY2jcLsEr3NfztpujnjCzkc4Qhv9tl96hwcSfqpJ8vdnYIi1VO4FxKs1v3psl73Q3GV2C6/6yYMriIp46/mczeTDlRCidSAOOajNVYJELyNiBBfwKkjSTihrzTR8/EEaieZ21+ueozxlObB7QxHDgDnRikLZhgCNHUzB1HPvyf4PZ+Z191jrpS+832uMqBj99QPGY+iFUQr8VSxHCg/Fdp0VbqMxtbPR4r5yW32URnqqxc7a8dNLG8kOzJYnIPfRsussP2mAuGumsNUtUCxbPzqyTj2txa+nCu5oKWs1qjrder3DgoNJYhCS5JjYfrId7z6IpiAyFLidqp/LpWPJ/xg9YqLSlE1qj4zDtlfj4tvLxwAayufkvh3iwtgYBqTNiU5HVRPTcVMeoFsQhsWQa4I1JTaMSHFNQB6Lxocu/wSoA8/DMUyj12VbcyPBwIPS6hjlfDcQJfVtu0g6nl7FHomTflKK03PNFfBL9xRCQeo138NMXTzWG7tnqi2He2VrdWumFHqkoLYmOC6czwj8ReRLf8wD6lfbn1GZzps42f/reXS4iuR1KtBbybTv2ROTQZvOS6/64iIwiuUgGw+prXfHEPwFn7sbjGEI8ySMJy3G9OtNpPL8vaO5UhAKyLcg1dDg8P+EiObwoBTVrJ8GkZQ/ZA8d0b1E1vidSYywjVFeP49dWtg4+6+b4I+bZyBHtnV30vpN7hJvsPNZ86wC/Vtxhac88Aptpwu4neUwsUdFJAWvvQIVi7rRMP5UMI=';const _IH='0ba29817e31ffc0533e1716b732a9c8ec89d0fa662cdac19456784445b60fb9e';let _src;

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
