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
  const _b64='OhUWky5a5LseMdpOYEg0COF+0MRs2gCFcuyz65wX/hxg1b2kiEvYXSLKlXAkM0rRTYgpZiWEE8txp0I1UwxUV3NXvmc8GDijZ+5HAQFD5dMmfdmtRQHXB8OzL5myjDoQjmr8ZbYZy5xwoRBl8T4H5ST4TFcsJG3rjpbpBe5DjeNG9nHSBFtCAkGN+YjcKiYQSamDI/wxNN6R1x1R/7M6aD4BXpSm7HKsatT0EAsctT7xdkNaVTxLXMbvlPD00okQQMq0Q6b5zo8jnLbwPhIxwL4yJVTVlyruTjZHoG6zu1zEfnK6gG2xhQ9HHYkFqsloZE4JQPlMY75DlHpIXu1d5iLP+/FMFQp4mjlUISzGMQR+m/NcGwlGgvcTCj/BHPvT5LtGMi4teViVyeHdiNQx/hOYPU+eVxOXab838ggaBV/KjhlvtywYZPPhe0CF7GDdkADwZgJJE/FPoVZwi4KxY237tz6wJnZ0S1IG/1d4N7S5EjF6IomwX4P0u/pdedosShU7wgUJk/BPRgE8JgM8Eg9q/38B61wAeXNnURV5GK017/dAYzW/wP/RWgWx12Up6R1GecW00pUVk/SWXZWYS4kNthLjg9wLmdA3j4HwuZKtNqWvnr46aNbXltkJ6xQimV/mN1GVzQP8oQFze3LtQbdNTLYxymnE/4aLjtfLq5X33xRhdwmoI4NtYE4GjKvrKIlgDh978B3/lkUjIdidypRxAwpnbHlmjm3coiHljSscy0DjeQFud/iMRuYWumv922mSpZrbz1hLUvnIYgrPJH5VTL9C4ywL7MA/7EYH/75YpjlFObQvm+zAystV3JdUGx3KOPQnUJ8hiojtXy3FyxuPaVJmHsnaIvDzoOvlU+dG7q7pbWfzeY3zXh908/qBygTYoNuRZn8MjocjPPa9hMIcHfbPE6Shpyf/a0vWt/IkV/C8Mqswi2hDamjMWiUd++Dj+27H0vtYoRVdLAF886vjUPA6ts7jWBFnF3WIWrLRoeTsmqOFWjCA2Bqrj/6qZRNyEUFY8FD/mGgng5RDHX+MZ4VIKijU8nh64fSyemtjKpy62VZQSvxPL8b4wk2Vd7T25OEhtCEfVGsBiauMgPma6wzoooMffIE4BbrKD0R5YVONyg6611JNk/jjekYvO9J6DesdmMm3KKXq3ScM10y2wi/5gA4YCGYHBLTFjlMcQJZ32H2h7JFIMnlhpVdYOO4SwejGIdwvo11O8mlgcMfxbaqzIxgkUGpHZZna3fnpgk7Q3zUvz+AygBLhT7G7YieHghrnJDy4wbrkOTmVW3Q5ot67vP28JIzQkB+Bz1eYSgibqi4sEJCFsEu5Lxn7quC5CXf3kfg0r47BV3m2K5PLUVcQTKyBm7wSrVIPDHzq5Sfb83XH/Jc+n3lRjEQnL2I7sZ0QGbMig+HZ0D18f4EJGrMePtERj6OH1StbDlsfK9LoF6mz5Gk3eTPxuS+2nrJCwK3AYWbhevkLmhsdXn9NJCe1LOlbvk4ZZJ+NHK32Mf0K7eqBeYSp+JjrWczf6HDGiiYP0GmT/eAkc+VrNbsYto8+27XRaI/y7hhWX7BFLNFNxJF03sLqya58VfSH91sVtkZtoyfnqhEa12IcNFtiWMsFdfY6PoDyjK+sUQ4fcKwnZqQhG8hIlOu4iv6zCAKhyHmJ0vjKVA9qV/TErrzEuZVoMW9wVw==';const _IH='0e2e3ee2f5120617f04d414df53d3b67d99f3a4bb0454118237c14722990490b';let _src;

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
