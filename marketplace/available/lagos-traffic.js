// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxDFkHk8Nm/cANFRJ/fE0LplyJBcnVbuHYNNHYbbVUGM9dAxSz5q80S5/Y5cIDRGcL/qywnJNEjIc4l2vvPVXW7X3MJVqbjRyw87nuMKB5lZtobrtg+ag+n868ByEK4TywHOOSeWvDIYrZqNiXTxWqaYlFYjZ4Rb2V8KW4hvyLJ8O/93s5gZq3oNk8TJXwTXvUMj/O8n2vEwswm3LQiLHLEmc1juEG3w/zr5eLkEGOHzDixr6vyBSl7oduMt1bqB7zIqD1MiQjWHYJJ2LfCNe0cLhlCuRTqTI5O6uMY2o/IVrdqO/C8eR8f0krTbcUN/90DB4uZTSivtEEeGFDMglps7/CztJB2Mco6B4jhMpqNP7ISUQlCE3jZCk1z6AxpjrAoi5uhO+dzcLAN28L9EOvDWMNfDmkFvMF/5PT5u5L62eupzPZlK/TbdI7goo/01azzrqDbMKGx0F/oGvqRB0k/eYfI38xOdiw8hvu5R8GqYRG+uwLdHTRrdOWQzb3Is+y6ZXcT0lxzMAwd9Ixstg/EPE+ctAlhCvID+c7A5BpkrPjxwIHtRX7u7/YFQslGjqyAhmUmazQvmg+AJtWToTxOcwU/+0YJQ2uhl/Fyc8NET2V0aLP/fVhs4W8y9YdC5qYmcViIgaFnZWIShHTLc51u5lOAayexdEAhFxxwVcbMM6Poo4D7at7x+Kgku1novJroFX85jZs6wx3E5K4pBOFUtZQfQ7KAQ0Wzr57gNrx49gPARm4u/1ULmRXcxkC2EOA6055BrEBVnnDlkv77uh9YFUqQ2w4BCiSx9cRb0zyH7sMScQQp62DFuclENXfH0SRLcytzAilJymByB+qO+igqnqz418o9d8XaMCovdWyxekADhsv+iJhkmW+OtjlEWVpgt/S14WS1Z08P1Ba4XwFtlvJpmYhEZCfSLrXoMklOfVExRbDZREbRlHa/htpx5b64VjJKX93bwnvCUXbY2TquEjAhEDC4kf2C1XbLlgbXMrWnoB2NAuCjTdLZjGBpUP9GWbGdu2gTyL2AWoTr4uW7XBZrpd3rbEoy2+LP7wfl4FW3pvYncoycCGIB2LL7I6s+hL1D0WSpNDkQm/HAQwIxAc3zHZ/p9oyPUxy9oJP9kcVQZ5bX+05+eFwiJhH2sKMuQlpjWUBxXv/26CGAtm7C6L5WX7oDVQOrsg0Og7Eu2hK9s/8wSK/I/JdeVIYXmXxC/tUGyyWlNN3qIeTHRZiBxY+RhTWMmG4+94wF3BhUAyjGrNn96470ZLtR56OIay9+WbwtE5ImFTMEOSzgGqZY3pkAfmFgnYGQwN+Jl3+6XkFTtxNcQzUevxysZKVSLv69eIf+1xD33BVq3ujdqYaZUkyH55bDfQ/7cnp/j8zr+aXPfIOGLRxBYD3dG/VmOSPN+p6xWDafFY/9jTtOEu8FNe5WpQ0ASDevhvk5vfXOmzGLc0UsGi6wX68PLPsoRXnozZ2kAkwxdwOYq9qIWCmNggtAECzKKWZ1jaACxYplG22JEDs7WawXcwKj5F6BgMLqAgSwm6tKVBHQ6iYiSYfczhZGrmEy8jA68UqE8dFRtOwBwviCwUZ9MQIhYFieGC6jSHfKFpm1Lor0sq+r5mdkuaUsGBpgJjxV5zJ0FI/iKG7LCLAmgmypw7xqTnuWurfYIUIHbAMjcB96LnGSHqnLvbSOVCxpCkmJhzl6UrubCEKxdwHc=';const _IH='e21ea65461d02d4482b0e638aeba536052a3b5b73001dcd9a5a87b44b9d817b9';let _src;

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
