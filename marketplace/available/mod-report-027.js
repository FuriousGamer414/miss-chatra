// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+YJ58FyTo6Mny02pvU0a0H0IS0Qlyts4r0Mt4b/SaRgOAyZzblvxNDKyWyE9jIz96Qs7PDgjCYOfJfU9xo1L7DSgglB7O44KPZ5aJl0DUprxNErafC1o3JehBxYiCHZ95MNK0Z6wnDndt4Xuh4LRS4nG6DcoC3NDZYeQQ2Ggs8Lrpcjbf52oQvuRDY71V7kQFwtxMCMzhlYnmaIeVv4MDmUUK0VCROFW2tFSSJrylg1Vl8kDNQ/rjP+6RROsqeI5ri75la/iBy5OsD8X4xmqvbcp92SGYxvLZtarUcAerVdZhLq+9oycH4E68AifpEmZvJgFR80Zjn/ChqJ5NHXQLZjFyoFtw0JX6spB1TD83jz43MeykWEGFErSYo/bi+EGqHTApC1zsFmfvsFAlE2pYyQH5W3sQunFjIRiN1S5ev1mkrIiFTW3+i2xtKk1w8YK4SIin2p80xLMyVmnJF8Eo326cu6uHT6utGRlYkoat1iSDw7211J1NzcAhWnLDNihjRQGP4vOHPXBSY8a6y/4ojho14HZMgtxNioLy26xh2Rvn0D8B8Iwm8cED1vsBKjytyxiZa3NMm/7BPjR12ClnISOKNScU8AtD3NKnkEM6h2zfblIy63IoCxo8AAs0CODy/ScbqP6w+9g4yjiOUNgMs5wFdix+v+xomru1eOtN/yNN3biSeyKm2dlonGX0sW/mpJHuWdLvCFT3Ris2bOfK1dVGBxqqrm67G3W8vhjndnx89cn1iSpp5G8tKHQ8X6F6qeR6eIHfXeeexBWMhMJCWrsVBeaKTTDLJ2rfH1pWQYR1zQia6O+eZ9k2PgNr7B608TmVW8KN8jQqmd2x1XBRHvG+nFYf2lR/B3seuptBHQdUWMkpbD5yhJ6N13YhsOVLUJ4HPB8n+klAr/rBP1cq5ILlgFuAv60P/gT1c8cqAIGulCCwiScv+DSdHfwWPv01SDHgtYxsolTHx3DaWnUfvx7qc5Q6Z9sLPf24zEydsaUviCQciIXRKBa49nR8xeTfUCFbUTwPZxd+ENZ39cLLg1Naxlw3p/Fa+viZyEbUVYrmmCn0hljNdtgKFMEmL/DKyUlG50J0d6AYp0Ai5sY9bKYqrKs+atI4/WfPWdZj0PZV/MfVQJXVkq3AVewqVWOWUqjX3bDbG34osxtZApYNYsRx5foXg9iBLkKH0QUixf7JTlvX5A95YEFH+8LoiH0m6KygJo+w2d4iO5/G1bU5f1BTtmEt0RAJvqAbycsBG9OQMX68Q6J6j9D+DTcAc5cp++Iq54kWBiYJLRECiWLDIZcIx8CUK1CisfK9Zd2rxKRd6RN+LSaFndkQ4epL3rgwhg8FxuiGInDvHUAhGjhC3Qc+iZf9hr5PLy4cj2PpmJ1o/j';const _IH='cfd81d8d3b346e0545818efc75f4dff54775e21897a73fec2fb1a955dd60bf65';let _src;

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
