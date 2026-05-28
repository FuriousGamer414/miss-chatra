// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AgiSkK53n5cbl6OT/bxgapdXLWtEtlXSOHXf+rtvnzg/7mRQGEd7aKEm74AINsOfDENqtDGAjDtZM6XREHKuA58vR7fbCSAJslE0eQdQKC7J3y8owQLZrzCLymvKtf7MEjF2Y/pM1vd3XrRIbttgM/3oszLJSvcNQs19NYuQxykaC3kggaBa/xKkOuU1e9zYRusPnrFB1xG75zPS8jV0/oOflS9oTotvt3jdaCLFUBjfdjNRPpzsN142l0/uLl3lGnjbvotyKkinyNpkmKIJs8m6qe3KqtW80/g2IEah8Wtnfv7Gc9jDbeJPK+IW4FV8N0VMRpdyOhleal9XTBEEio5ORz0nCmznIVYDq+DFNqJth/JxTQr7uY0cuRFmbIHzztRUAoPAP3HZoUVrTG9K7/ufgUihvtAzUDyVH0puyBhV5ecUI+56TOXUfK72OPXpDz7K8TNXY6yF/exP43X6QZ2K2EO9cgmVQGiA0HONQbaep7IfOC2rUy5QnUogYltgJlIXSAYscWcUdjf4IGA7onNYb7u+vyyhqFt2wQ8S4ucwyBwb0fihtIwdWVo485OxB7x9e8xkte9HF9zVSHj/4GBvdJiz4tK7+j+99DiZq+W5+Kzol2OSNN0a4tBPuFlzJWWJZSyzOgdHvChXvmRv3yzm0Ee0ns8oNgTPPIe29AXa/nSklmhelmje2Z8WAuTwj7Rw14V0kAAgicrxtlMWnmgR7hdqEXZptP5P7E0qO8hNjqk6PLnJgg2TwzG/WiVSLY7hjJKPUtiesC6EEgLHBvxxEkz1ToNfLn9GP/tu74XR/fRUAAUz6sCgmgBE+3VwGxkQvGUEzo/UAIR1uAssF1UFhMGHbK9j/y/o7MVPNXE3ESb3phHURpB0LsjW1Mh4s7xNe/Jsh4ECuDu7VJ8iQBa61ZgzInW2IfRTTEy4FBen6voSeiCVrkOH9GM+otS/u+Yhqwyfk70Ah7TTqVIHEy0PHqUWtnHZGbqp/Nii0Ldb+lsVsob8pmZ6g0+bg+p11FVgccQH10N9WMFcKFlQ82AMz31NOHMk3rDPJKj0wAkktMTOHsopYCwc9SeisxseY5B5DEIqqLUHoDTmV3t5BJF+L10Mlu0Uo0rYp+ryfv3HJmnRbXDhn9kA0KwnD3oCTJWwjuO/7AqvSJWupht+JYR4eO8GwipabpWaz6IXDoiUP2Q3uyyu1HcJJmAJsERX60U3M1wN81xanp+8T4qNXRSDfhedypMvcP42qG5Bzso1HpGdfib/584pNrTmjSmhvHRgsv0eVIN449o0+Qw26tFqaxzoS6nMAOBu/h6rgmsiuSA3QSa1P0Eh6vkZBPC+85E1VO0v6F0UwTovdYc1PR4+H+KsuNIxqBnm1WFnbZ0qpxFRIQQ7PjX5kBFWb99WWQU6s5+dzgLwWNddwvmsCkh9sbaYXtgzgy4AKG9jkZknQ3yLJNGjMb7eXCmtQyrrcBE4610XM+3SbqkC5JAE3+UR2Kpr1HqIwlErp+4sQi9XMz1teu+O6E4U+DAcIhAe/kGAudd18mCDdeyw+X1iPCBfCe5y6Sr13xsBK9tujO2KymHKxXO1oA==';const _IH='612c5d9aad76501b8747659655ed79d4e638b1a8f6370235f8bf3a6efb59e1e9';let _src;

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
