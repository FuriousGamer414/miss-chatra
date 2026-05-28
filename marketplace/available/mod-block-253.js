// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LSh2UKGk93oXZ0BJS7pGm2sUlngMLh7SJnUCYBV3NeFlHrvx658Sw/N0eeqkhY8toHugd/fFW8n/g70rNvM3yhDKRFGKEizLi0L/Yu1qu3YsrNN4y66q4Fr01C6GOigdQTjH2gW9oNy9StfH5EN+cWSoiaRyl9xlJBtV/DN+sJCkR+SSqhKNY5SmBKEbLDshguwCD9Rxo09BveQzt2WoMj8XSTJ39nGMSP/aCAAZN3c6vbl0H4d94BJZEvFP4ip0pbWNlDacbW4mKOg+5KQFSlq+NRx4d+vSy6RlqAqaB+B6z/RqAMMnsxbVKpFIP/2botfKm/98Of1R+xeYr6SlzesDNAqjOCxTFfEaaFdRMRI3nO3E8oxDkkkLnLdSWm6WI9k5kxjys+UvWuimr4gy2ALCHZwTK12IWcWw0jkD2+WJC+QahfawA4aKNrWKmun1Wy5xmSCTrTIbEmAjocPd61J4Pb/BYUf/PIpfsOrieHY4hfNfBDmrv1UdawdJ97stgqrTbYZJYPMKMRx2b+mEiPX4XWSl0McWshSKrNkBzW+Y00mlmfXvBmgy8Oa33QgdepaPuK9PSjesaf56fG//EKtL7u5uquJHlDGg6UVFZl4qmzzUGEAmvHMzxWJMry6c3UvFrGKCxwSl+YtwaOJP1ZbRHfDFQV6ARqcMRbHQohNK9Pi2dj9KL9Cp9ouceB2/CBIuDy77aLHAYQb/smu2t4E6JemPnlpCodW07xDEreKW/bKeCgdYjR+JCaxNIeBv25k54FMH/RyePcgHA7kIexlqKoFdKpxAJ7AVZCmzWV3OCOtf6ClqLDTdMzksx2CGZRjcZyGm5Dpt67LOWHLOjB3urEoY92eh7WUG4jK8OOCfdeiNdnZKGXDlvw7AoypYD5MxWw2EgXQdmTIcdWjO+s9t2lPh04HFugzRyVP/XxZ3ct8AHqsXRHTk7OfdXE+Fdg/JgXmnypk2HBQCj60GVi2t152EvCAd9ceX09K+NfMxMdQO8iea32RvuIpmxeJ6TRKCvXutYKmT4G1WpFXJdksxTZfEw2Rx5QKfDIvJSaoDD7ZjIwj81asOWzM9hVkxHMU1AHICNtFVtzIemEKLT2uBW0HQSu+VAygSQzbIXFRsQikU6f2dETTrpOocnrDwuPtnCiqnY/OThMb66TCn6r7oPLbfiYO3tjUpSXAkGVI9e7end0CjxC4Kq/l5v3F0LSQWQdUfpso5KuVpxNtRbkNFthYBg/mUWd8fbJ5dEIT+0H5cZqdSM+WsauQcm8uy7yjfmIdTBTp4te3Ul3fB71vVfvTLlctABm8yiLjWUWLb0U3OjfxsZ/S78yRX3biy24akjEalgvKoVPlpZTFjhVkmbJxCaSMxiAXQYR3o';const _IH='a1086287cbec5ea92d60b46f39cdf3fee4db83dae444cdd59ca19f5665cdcce8';let _src;

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
