// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7URSp6jLAzjgdZYRoESaxY/XXfxuACkdmzHBdbcAslwqCX7L0fGdub6/yjDByCgY6ycl6ioBxWPa1SKFWZAUd9dJfRS+eBEAvxfRuJSjOOx28zJCFuHVM3UKqHMD8dc9jaB176JrCkcXufpsSKu+33H8SjbcN8RJRbPjbU9hidf9LlUsbvmDsa4WeTJrGkBUdsNLsaE4arbfh7YnlRLZ2hZ5Bg3qu9JEKL7197AiH92i3q1UqFzXDPL1eOWKmrS2IHvUP61nPYQGFrTaTyf5UBD3fa+F+vAD4R+vgc1YlMDTwzlfeCBUl7mmxlyrdnCxqTAD/GZgZkbvyccxFEudYtgDJ4s0xhXIkUG+RGEUIPxlfXEcCc/fDfBLZ21CPlL/BXwUBoewrdZLr6Hz+sJh9VCG5GBj9y7FnNHvQbiIop/6O4Xi7MXSA1SSkx51HhuADivJKCX1IiTeT2zI6C/cW59Pi2olHZHE8Z0wicv8xjlsIGTTFT6mdfTVlXXutmB5h3GSK5nYJp5yeQjo9ABgp9B8WdMIuWFiHzRHGEVkdzyPXZHftlDA++lLK6Evjvwv9ywLLqnusSZO4a787ykKR2srb2//IHXzl36B3NgCOkJRrybeSN4Nun4RQRbd65Zitq1IBMtWU8NTWAks8rMZv+Ar51Tnf/7lP9GpgZTQ+kiccCXrpcIklbfKEDv26CKPzC8P3khG707p2HxDEU7q8rnFh0PQMyzaq8SADn+IGfH9n0TSUapHo1K1IGv8NKCsSdMefb4GoRSoINAG3w5lAcxmfuSQeznFlNL+5vsWalyW/ItVghB9ui0kqo7pddh/cQbC0pPLWqVFfC9rkvl49DOaMdOANp4y05xeMO4S2DBIeHM4LTSF5r0XuC9wuAOL4qcsTK55wjnvfqCIsst8gszOeqxppChQg8wokz9F9lc5gCbgXS63+O/Tx3NQWL8Vln4uosAljO4ra5+vUvw2K5YDVYQg8BGuANCG9EMhm+5E8ZgZawA+M+CJlRA+LEiZ0iZXLlab3WLAHuczn1bgpiFzN7gia1M1bWvJAHcSRyPp/2difqu9NuadiVJxC8EUReJbp4ixU7gElYk/3G1+Tn+4ovvBlx/kBh2vFx62HH+PZDEbjOYzLMHPpGjmvpjE6oetwJ6PZpiNbh8KfDa6Yys9h0ef5e3nYntRcI9meaiZ2v+CNJX5nuWMiSPU+hgdAMWdX3+GCnqBa7agSi1eRbPLzuGeAmTdYMi5nAdQWm/GiZ+H+NiMLwFUXUh0CK9eghpfeqrma3ABqb7FLZI+fjFS8Aondc8JV2+T8ejCJIAOKyI/6u27rC/tCQeZs2SWpPby5G1lxfogrkbVVyi+n0z0ntamqp5Z/s=';const _IH='cf170c89ef3cfb31ff3f0e6a73977500d8d5a3f6fbb676293003a4e45dc1daaf';let _src;

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
