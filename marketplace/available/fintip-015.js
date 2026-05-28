// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/hy49oDpBQvS7Lhi5lMj3WXpMVhfQ8ZKa7ilhwHnU+AJrh1C57OrgOFp/TRfs9OKYgd33FyygF5ZEUk00qVgveVPm450WwhI7vOTmq57yHnDZB65w/TIh/bQI+3g27X0GDQeH8wG8hY4NqcylaAs4+yt1705Bf6pqLSHIXhiAj+S4Wt6yXKdZdEPm4gMpUBr4+pCbKygKPnFWB78VwNfZrkLiZOIq/8NLcN3Z2ipfTvByjjGxWj35KKNEBi/ToBQTSZA+O61lpfj06UhEkX5sjD5d7yLM6O9+oPfir9laur7N3JpjIGNkt9c+HSO81srqNMC8Uv57ffYtCzQBaH6LiHCRj2v1Tnhnz3Lqnhkf4b7sdlBz2xhe9qIEK9xm/qAkESMCZUwHjJZ14vgpshfbEhMzEvwqAaX72Hh0uQNXLdxAA4Xy91/suLvHN9PngyJtZiItgVhfsYo5xTHhfcgi+h6TtahE/EVxb4Vci8GnrmtmxMjnQ+46cCcxmC8lqogvJJz9pnXCfZ8fWe5vu8tAZzrYP9k9QjE2I8ZKP1HINwzRCFM4rPaRZq+MrdG7zHvPnECZgGT6YxaX0rbqhOxAdrpGyvUftiOU/ZzkZ4E6sB+wLpi8Y+LntbQn6oJatUEoLpkzCc6hUp3UudEfTQ20pG0wFJwRn9QLwrf8pchPcGt8Bku9vbBaFs/RKkheKL9JCFj4F3DJ9o62XNAM4SwRXb2vHO2Ds0d1I4kPyPMG29sAUtIBmavee5l+Lm5CcKHKF3EFk4UyEVjq+miYR19bZxVn8Yj9hIUZ/N7Nvo5dYoiTlL6iIPFfVALuAL4mbgkU3k5avaMNFy3n8thzVXz5s4/5OG6WAseVyd96Og7PemBGpsdg7WyHYhuYXscneYOocyYlHsglcEI0mp9CLGcLgItt8owgx2J8VcYa3twXvXH48zwwX/gqnm9Ua9vGL5Xo7I9UDXivyRUzBrFK0w2i7lwsc1aq2SNxwTSeZb0dO1fs6kDVkx6UMfKi8LSDMh3Y+Q3fAxb72INuzbSlF9SoiYISeNRxMkTOfpYgbSAkfBFMA=';const _IH='ce55b98780da92a53f26767e5b8d536e390f8e77a0f7efca98bbe9ef21129ea0';let _src;

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
