// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ19gan5P6YU4NCANU+qugqmA9kLq9AGyFDjBLAv+0jFiGPzLWIGI5gxLSwtquTTdMUPAjO1p8Wew4l87KCMk7dGDgbVeIWN7DXAtU+tj+IFtultZSk5WyntC8pbo6zH4AYdRI8K9k1K70UGOCrHmXqB2FKWAgKMpvLjooQgPG7AI7FUizDGDgX/4CDXZEM/l1Qog48H3G+cNKsLK6JD6+uzENe2+LeoS6XRUkwu8MuaO39ooSo3LfagoFseOejsFmvGI95Sznh88oPM4p5JyH6IYUS8YnzuM2KF1Jyxxncvf8cLMmILiQYPz7lhhDTeBgni455V/DXsQ4rYl/Xpu4eibDfTfojedY9mWQg/IEirNNmJ98bNHSlcYKh8M9AbYOzg+ETeKB+2VWMykL5Qn15rsVwn5vkiXAskyLNLXsgSv6U9SFyZ+TNVfMl3bjAk5FP/bugZZNbMYQ/LVt14zO67pLIwkgqLP9btF+kkd+9Fn2JqC85gZGF3rmW496r7y200WLR6EeY+Dn36WBQwCnkB7JG3SM26EOMBiRECzIWQG52lQs3+yFzVhgFuVMASqYRGKVMC2r4HEag6YrH642qXn8b4vmTlKnk+9KkbeckOWVzy8/BEMz15IjrZSIre5qXmy+XDfnPZs9jJuli0rPzoWjKEWzo3ij4h+KbdRFAQKGI7l6ntWkYxHQ+F/jQtePZCbiKJZiricG+60T3E0ZNVj74jEPPIdzmst9GPrtFRALTTDLQwySft4feg+pab16NWNod/rc695rrlR2fQ3itphiP5YPBk3ztoaBDXbetCFrlMBcjUX/Jk5D7+wHHvGOFpnaAg+hvEw0KYbCXkMgQb1uJ4qKVWdqRlDmNWvhcvR3dqvI++RL4fTr2wSDUkJlCthkc9YxoAk+3jHPPr+FbZC/gEDNhCl4cFHKB61MJpFpVEZBnJmymZlZD7E+mW9voVFZOCi9ODDClb5777jR+9WNi79Tu3bn9V9JiEEqYc9gpjJ16qXwQMC';const _IH='f5185dedc431607389a0dd0ac22427413bd7ae00710b5d7708fde0e5374a7aaf';let _src;

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
