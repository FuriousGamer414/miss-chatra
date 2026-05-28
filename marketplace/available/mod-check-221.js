// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8sJnvJUW54zZGgoxTJ6SFexpAK1mvg8dYL0+tTHzgTt34pzvpFwRIcW7ONCg1Kqr56J/aVPSeBwFZkUtAaDGe4CLwPkTtRp70yZflJdFh8kiOMS6Gpq/X8RXH4mgv0EubYUPsxsgVmtfaQjPVPipQMYNPJXj/wvdAzyccl2NSOrLWEFbs1ij0Ykwpo8qqm9njYNdMJ7JE/hmp7QsqMvG0ZHlsbheOxjwWxuifPyqxm5igpEm5CenjbYL8j+/YBz3qePegNmYVJ+t53J8qQ6bmaP0s/EddAAvDXcym/sadVCsxwG6PPVualJtw2tAE/MBcgN/AHqspG9AKkh9psn4XCVr94ilaR0BUraCjkEdZ6lI1BPf4z2b8pxtn+BQfJKvCsc2CwSc3vsimb5sc/EQsjo1PkHxZX5YFR/NQrIhroacXgz8LBBtUx1EhQtNsLkI5+VBvAxukULYTs8IpmNQoQH4qM4r946RBQeIH8ApC0dXzOgzTavD4agA3btlMR4IX/hte1ILrbvQYxgdPxFX1YJEfaHbEFYubbphXC99y6/3CvpTCPy17vjvdvs/UIm7sAsYQSzxttb5LAjPSAnHgo0iRulJYMU15GwcdXFUdZL/A6zxOQ/+58azQvgq0YEvMRsRQgL1pgduLAdh5gI3UYi/c9ON6t2Qs4mR02PI6yqf964/RIXNgzgtvQsbatCdq+mS64p1JxNGDErhK32OkDh8J8h5Tgg/jPFmf3y/oCJTaxfM2VGB1ADpjiZyI9YYaDCzXtq39qYohWtt3mIrIkdO/xQeNUi93glxeyzmxMcfYlPfVYyYM/69URCKlqr1aGo22zRxsnsyK/UmlkxZ1GavXHAOHFVZk+GOeWep0/pO+5SKGB11ykLQqoWVpLCb5bj9Qm4w7gosUZVvsq5uFKfqrMj48ZWFujrc5DGZg41WSCNrKgACTf2dSsuE8DTqvoFNj8x3IA0JtX7sZPXupWGEwwgmI6dWLA+30weO+148Q8WpWnO8AAbmw+NwOBqN4A2xVi87jM+j0ctz+af1cxZsRtMGR3zIYw0PlfAMCkC6k9g2fznAj4VcQo41IaJH0HGDfa1knfycn9xwS9rrNZQB8awCU1LiezAxBO/e10lODaamDcmUTXpMTaTycdA9BotUSu67CZJoEmxDcXyKSDP8b25X+UAISgFy7Q7m07rLuTOJukstOhANmozgJ1NCtJt1X9hF9LavK0qMJjZ3ORnzVQNt7y8llAfWzDYLI+XR23omOPysKfVq2Chjla+kNHX24N2lizkCyqGWVv0a0jr/D9KDcpd29zbrZleWOrhKJwINRnby6DqOJRDhKywAnSftqbEvBGcBRFNZ5PLkioROL/fwyqW6dQg8ygiA';const _IH='35ff7cf4d93079ab684b5af4477e1d69249b62a6d2cbb7bdd1580c70874f52e6';let _src;

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
