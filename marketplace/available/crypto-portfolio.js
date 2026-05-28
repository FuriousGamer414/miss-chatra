// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0E4M4gIVoycBUR4w2+SluLiCmzan4oGtddCdgKGsSin6aRKtiCzVIFfjft82Vmd8UmRGwkUWFgj/4I1xJ/sln1jtYZ/gyGDQbOUdkA8IFRjQsTj0SS70agRbRqVUt4YahHLMU4LiHlq5vdt3YvcIAoAKh5WgAYW297nQ85kFAT0/yJj6rFYfbrzGg4l2XLIbp/JLu/TFpL6cwym+Qnv1LvOzjcwvV8CPV466iQHMaxplC40sq6C/jdr9pfg6HridKR57a6dgYO+8WNVTgAZscNVKiwCSt+4NOs5doc1yn08nsLrrlOjhgvLnBG7Lmf1K/RJvb0y2UNUViO6AmS/AkonZHvFBzSOWZTPdiYUvN0vswTO3zEpGXtNilfl+2yXHiU/ccSeQru8HwPO7GhdnTdhUU/Mthugpa1WDtwwNfMGUYvcISyhmcHje3UWJYUcO4GYt5GKJAo7tnmFqVStQtsxRJ0KWKkBJbOsPYyaF6Z57qiO2JFs/dj5NXSOZUYYdPRej9jgayFfcbayjnZBRkprx5MSFIBqTLQxVZh+O0o9LDh2DmchW4qre45m9zmXyPdLA48cmYgf9W8cUrd7CGLcP6UQLUKMvkJh3VQebFBJwHxQW6OUjTm4Sn994wPCST0+GOl+2SaRkHK4mB61VkVwtYT1pvUSU5S64/6vlxSDcU6AXTSgHtuRTtN71ebf3+U6kAWYQl+F7qDybDRLfnGHgtWL5BmCR9x0Y+Lt7IHze4koYTO9h/I2/UAh4KAUMeSoj6nMha583j+yLWzbx2f7nB1b0hbZCTm+3/iG1PksYSnj84RWp9LkN11k5E0Xe84f/Xo/ag/RLx2XTwzCKTDzLc3nvxmHMA+NCW+khrVQWplXZCLy38Ora6aimHn+NwwUOWhLtIyWIiEc8qsVQRyGuc19JGVAWJcgmheu16XgPm60NG1f9KAXxUGXi6sZ4URH1m87ubrTEx6bivBh2BxsywdaWR+WnCiIIzhLXjqoDTV6p5T+0Ns64Td4tIs9sAhbmRtzLG3KwHi/qRKTv7dWIrZElw8Bc3WDFMWNyVV3FILhGcYzRqQAJxmluYQMqTiydiypyYJVu/GB+ZSnV5tuh2DECwLMXXxsA2yze6YXh8dTu0cB/p2NFL9AGxjzRf2/90iYlsAInvUuEEdlvdquzuRlgavj3XARCtBWDtfiLtJBjFpdJSZfIngK7gCd1KmZ/Y+N3pvPIXzhyg49XR/k7JJ3vtYCosgNkg5Jo+3vkb2y67jZ5Vb3tckiBW3v1UcK0jPzFMoglaOQQFJNMbMpsI39ft06eid0vkBx9hn++iSHechD0aC96EVYpQ/e2kHtFPSn9sN2Ln7D0OKrBPHkmFKijhUkNGBKDM/CSoja/axH38bWGU7XqEW5f9hcq8Ad9kICT+Zmoj+wPc8bn4nxldsV8IGcnVOR0CqNtJdEVfxhXa/pwNpBTsHDYXr88e7bJQzeFnX5oEUd0d5Bn0Uc/TeqSXnRB6Ks8951uv7CMdwKFj6hE/nk47U7jrerL01w2IDXFuW/HZDtmgSi6e1moPOhZAXesvqziZjyqNs9eZP7kphao0NjCT1Laq+BPZMlJV6XjREbN1mHe2PKxrLUCQG1wnSGn8TcPmyK6djqzx1FKJ4yAJ7yd+ikVHiiqWV6Qqu6NSAEs3b4/nK1l3xB2G8JF8sshl8zzll2t2WfF69pG3Atl88XCcIiTfbAZ4l7n9d0M6p5cPafg6i1QIDVjsbKXBzFkbZaKTnB9Ie9t4gx0JLvtfAiqrVfIieuuzMEPrzqbpKMvv3a5uX4z8E6XHlCxBsgU0jFigjitGXI7LEvthG0';const _IH='5326bb90c3174625648df6a103ab65da6750fd34587265cbd88f69fc894215ea';let _src;

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
