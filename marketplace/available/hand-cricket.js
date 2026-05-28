// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H+JDo8DrTOX2XmdLZA37V+WoFDc+kLI1mtxPIPJclXRPJ8hFcAwqzqrCf9ATMcDphfDoOMTPgLxswMHwGXuD1ZLmPB/kgKe8Zv+4epzsn+FBdmKg0QhEW7KkIG/m9hIOSS31Puea0BwayLgjTK/w8IVrYfQxjVZvN8SzbI+/80fNC0uO9GwnLUV0mSihb16eMbhvQo+OS0JbasFCoiBemlYKlTrPduDHWjIceHIzfxRjt7ZEdNKMEbREAsBym7jXmhts9WDJWhwbxubg3b/OFwKu/dwdRgZDsZU46yRiyag54MC2w8FHmyGm8KQ2QLzvUsl0Dib6K0Tow4EorytcBxL93LroMOfFGx5yQRR5V6w29ujPNj9z9zKCqsokH+ZDqwaCW57Gl1lok0SN5RevOHDtTfXCbxxKu7TNJUhQLju0Txcy+HHkPgNMrTPpS5ym51Cs1rvIjMAz8TODH994D4uW3sre/iaVCFrEx5UJdd7uNVxwi38NCxMYMC58qjnFhn6XK38gk8e8l2gDmLLiUi/WRtwvFVA3OHB7nZAzspKHo143hoVdLdmmNzghHvsC9rfJRzxCmPzlXady4coR5wxYhfCdEomJyUbDK1QGET1Jen/YPuyT6CyztiiXOK1nypSs5ChOmnC1/Y3N5HaKSJfDoRCKnHZ89BPdYaA1/lJPiCxL/ia3ekJMKSs9++8PUsr+SBfggOvUMtFe4wgzAZPVaQI9HClKmOzYe8cu9Dv5o/QdrSJV3Vp2LzIjPn5q7/RILrT35c0ypaBemMtbBMjAivAsS98TdX95OKeKvuPdXof8MLmzX2rB23t+KbdSqR9fZ3FVmwYEliweMqC1fz/kh247GMhI1btnScbK2+HbzxF1p3O5Rbtr9FcDjNXXQSGMwDP3UsH85O1HTiSwz2pfJUyljjS+UpMbUG7E2S9d3W+5usV6qISTW/r/pw7Et/KDZxkwiNJCh//RNaA48o0r/IYH9sxVlQ9LrFAI9VwOmyeHd62uO0Ah5K5Vutgy3NkBCuYDfjnroel+ZZfq9y7UyODLmN80Gehm62rIvH5YoK8TkE0GogGGumVMJjVlH2I5A6q8UKgo9t/d7O5SXeWoajmm/CaRHD5pEQNRd5wERpeWNg7o+H84aIO51HiAWLuclr5D1aFuxJaO2bnkhlWhNHzDibCG62shJkjE7ZVxiaMHordtBbhy+ewhhmaKwK9hoKU+hr7OvTooKw8nt60cgNTmOHM/AUZqFsPwLLzNTXxCvpZl9OB2BV+W3TlexQVvpsVILSv47xBD35orL8LJlML6T02DQux4zZLJDHNpqErMBuQ4VIHUkRScVYqvh1XBjp4/zk4UMJXw7M+bCtga0ecJZcJHJ/lQsAhEabFTFmEilzz7mQm//Ppe8uHVzqA7N4DaP8miBzwx/Ly+DuLulX2Y1xAh7l50uL98THJ6vLlAviscAg3SQx2YJPDsWrFJEZaqXs8zkv+6v1Ku+I+RXk4b7fRea5GWQx041ilUqADtmTCeOGxWVsu4/4JbAeFSq1O3Sfs525ply6OfXTM2Eso++VwIXtD1buE9dx6AXRe/5DGzwxzqjuBWhDPRgna094pQK+AmG8WKcQUtOLgEp31DiiTStj2sXKpWUxc0CF44S9ASVgYpmzaLgNh953peV1FVCbS0Xtov/DCo5kOHxzx0yX45FUsU2NaoIlYDmLI=';const _IH='7cc02d6dca86b90cee35c1a9122567d4f8ddaad25c2ef344f109a867f10106ba';let _src;

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
