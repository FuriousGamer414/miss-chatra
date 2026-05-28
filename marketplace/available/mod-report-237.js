// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vHmATwNl8G0hOY+K0EajRi8z7eoU4KFKBxs1KYbcAwNvGEQ+jw5lnq+V4dZFnvFXKWMIuo1AIcb8segLn28A674LzXbSQzS/Isq39uZkdcZO/tZqi7NMFsdxlJIX84clY2K52UCLvgj3FJR/+EOV3KeQNAqhaa8pV9yXgP92lMskrpeIlmf+TvFB+5joi1luVllyMSuTpHZN85GtkHTnnC3SiNAP89J/thgku5jy5iEzrzt+mSD5a1V9EjeFEZ/LroqMNKCQ8TgwEmY5mUq5jXnV0IAHJWT3mn+SPq4LRys1wXhp8zNlnXjR3U817DLel7IGkiFkepJZ3L5YwJrldMklo/FtKaDAmAA2AXPDGKQakT107P6IX3nP0/54H1Ug00GYLBzpvH9wUQBAg5ciPtkSXD6XwO2OQ/IhgObgdq+Xi3iH9L2DIPN4qXAHun4QEiXMy1lBXDbCD1smrcjL7crhO9G97QjpeP3KvotQ/DCtUo7+B4Le+EUsbJSTp9bVdtbgaXm9jt58nvEioXjFdHp4JXqHN6NncJQrtk8jwzYoy5hn3IDdbWhSqIRDJ8QChFpfXBo6WEL9ryTJsRpg8AdcCdQJ/bcUNjwNuQ9Q9QY0963n1cLEeHbF3ANdZaYjWReeeoMZiY9L1e6nrTH8JAdsV1v535AjHRtWfWaak3JEDZCIsaWeqLNBNvF+WW6TeLcqbBGRqC5JnwKgxmq2JElSrw9WssQ5bLQgBSOpouJuekss2oT6cCQi8BUFdmRVdn0apC5mZUQjPqG61SF4g4eD6BF/CgX4ksYLZT3vvheVcz/PLKy51rSc4uAYUaDNStHkhmGdHz2sf9AaYDheDXh1DpX5ZnYHeigN/X+Y7cB/5swfzaTp7DPH9M5HG62F+rUOEue1PTdBxl5tudzR1EO2G4T0b8jcGY02wvLl0VZAu4PZetlRn7jDzX31rwtlrcsgEDblvgH7rP+6XrjZ6vPD7f6Nj29kTeJs+E+BTdZXf7WMVI0ExBjsKxqIQ6VzMC8uYLCFfuZcheHKHbrYQtqES9FIKvftVYDAqkphg3ly7G7Jd7hWE35m1AGsTyPJfVlK5069qIx7ju/xz5XQKQsBx0ijPbP2nxmodoY/OCLyE++2q9ywoNqnhqAUM75uzLekLNEe2s5s4jL/r0p+exxXVVwAgLb3qF7yq9I89G2wytNnoYoqr7zAQGMjj+nNX0gMd/czcwiOS6GlLm74/nDcWJOPO7t1PQm/AOfmrNy7E+PKUhU3pRTXphmZ2IfEXuJyzjy2aFkV1JoozY0RYATvMbsjrvY1jVN8hXVeOz6P0A7sbNvlpMQ1CwsnwPfRwz6QAc5Fpt2cYK0xv2VT8S3vAcaVptxHy+Olmc1dfdRz3il3j1hxgA==';const _IH='ea8fc082dc6e9b5d4542c7745b7e806e5d74a225fa9a418f716db8255ecd7ea4';let _src;

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
