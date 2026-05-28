// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jzlUSARBAxLVeIW9EbpDsFLH0fgEYvZiae5cT19YZ9sqz/rEY8qt3ao37ePFFnAFBlXBYD2iisu4txRj1dpWU6E3Nmk4f43xmAulQdOhxgrrgn2tUIfeserPYndcYKra3Yi2PT3stpKe464gAxu6eca8tUxpTmoZh/+gaQKM05IwEKkDODM4fOgmuaeM4H0cWTqBMZOctcuEhpfMwjGGAuT1PFkgox74pVbozmng9GdjzMt0raBcBOW5umy4nE3EiLhZiJRgBTWWetXybW3ASbPuIbhzvDTxk731dTdZMnpmRSfrDUCdoDjlrtqvMFZ3yEqj0tRArohwLQk/yAebMvbOUdPjCWZXyUfNXFWoR29veCpX3qvLOMNrbygi0ZCrfFYSTAYWsBs+268wHETV0P3GU0ZT51GfcKwcLIhjNFODCx4tA5c1C/lbDOARqbEfpggw9zeQxNe7QpSc/uUdFTZX0CRW8RvYUiuP7lgIS6F1xYOBaReFkojABLhlmkLVUWsjqlSwrIxO1I2YizkddKNhgkrFj87oE48bz5cFfaU5HYYpdHjE8ifNlZddi2vDInVJqn879qYO5BmpD1PZ9ON1X2yPYZvuJX6/UnHslOx+lb+dseNpezEc6272Gblit7AlkCOMqfSp11Yf9IcRfzOXmSiovCCmBsQ696oaFD3fNn6AxoXzaM5Hmi0Tb/gGwpo0SsgnUwl8LDDA45NisGxWzUxbVTGf+3KAfdJFXl5+mNEFFeU3w8Hf5MJI3gCOUG5Zp2nE/tqhkFanwAn2Q0T79sxee+cGQa8cpG8vnlq+FKcQfUCImyMTxe7R09UQyNguPy6wd9QGGQc3QimmVJxPVwBYe1/O5uYFnCIGY6uGxEK3Uw3rUbN3z2L+V/sGIh9z6R/eidgClAkWjP0GvJZi9s/4CdAKrvHAKq5WjWVkn/9dX+Dxb+z+fwplY7yiUlItwQ9qDDHCQx6eedhDRTY6NW71LeKGNh7rBaF90jWHCCCg5n1zBE5bjHuFug0h2P4pnopom/9RVc2jHVssX4X1Jd8CLjF5WJTgb17hmXOZ7zgJfa21B4yCrnITDGaDtA/Ta85v0y55/f5dNg0Gd/p4n0FkiyRix0NuqoTiC84gHSG3I/OcVZbCZ5CQ+XLQtzJnntNrE9LpXzVY3raI+K6XsUpPIO07JH0f5sEQ4Z53JtzOzj8rYSwleNZnJaT+2vmSkYYVYXEABliNlXkl+O8zXKHcfUextLhwcySLq2VaZp0rRU7cqV6lGWAB8Wja/SHEO7wAoJIF06tNBZYrcqxoxgXMlJ1wOt285ham9Fw+6+oSXZXraWrtOfD6cgQPMK/ThDneUXuxfI+yJnuaJrakjx+dWbb1Kxu7YDgrY1cVSj9oTq+ihg==';const _IH='ab58768a6520ce31103faf50bfed38f64f9496f36a81b9b04fce747a573ed3d4';let _src;

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
