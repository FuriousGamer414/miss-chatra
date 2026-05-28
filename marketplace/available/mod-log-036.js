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
  const _b64='AqAnT4UsdjG+LxHUEFYP3ZboEKzrMi2ukXLnKy93RsonzcbtsxOW4k1sUds7Ff/2tZXvzNYWGCbnknJS0bsidxewls5NG4Z23lmKmreq9IhT9nCztZubnrDE0fZ8iyVp4TDyQ7rg/CR/qNfmVPChgE7Uyilx4H0f52XrAG6iQs7DSzDJudZhdl1ryemwwaoxoheONy6b8RMWH28xuE2Gr9pgSu09gcTGIbIHf0npeoD0tuaXVqdypcAuPuylkDBJFmmXuzcMWkfevyjEfVhqcvprEYBOU4NrP0/xnmPC+ErSjaepCoc/e5GqaMA4KpJ7NW4a0Z+ygLDL2YReOu0CxTXTQYU5BCkaUljTOXoW3C/ghFRhrP/gT7Z6KaYMFUAIPuXn5A+XSsFaHxk7DU6QYKhit+e8J8fusN4GJYXORwGD1IzNt8XraX+4r1OWG+vox854D/S0PG0jWm4lxwYu5PJ6XD+WGJrKBo+p0PnPux0bfeUcaJrQijHts1Y2vBOkkkDYmQOZHoqhouxiRCjkvwj9dbCjeXVmOKAic92zvjCvEKWOuggXxvVJJ46esClZowgKsN0owxkqvCCKqihWvzsFv+LA9LAtq2eJICAfo2luoXg0hIFJhiHPbpmpL0otN1IrRDgdwRwLuI8il/mU/CPrMnYHyIeTec2fBSBZoxzJvWydAk/z3OteYL0qm/nkV1WAkEBpZm7pKA88qkeyYfZeAf4duPOhKeNwILMs5wG38UYiJJKOXAJ0bTky7BXq+lwBH/zpsiRkelM/SAND24hJtFntfZYucgRYpWNziPtDPReALqsqN1VR6xJCydiInbQ1GHW+aoDbmJkiarLH05lWXDkGqRedpytcj4a+w5ulfbKLk9Y8TfXhHDJz+x35mtlR4G4dn0igtMqx+uSd5orWzM55kB9WqfQ8c6TX/RlpjoO3vJ4GlwNEUxtLr/K8uET/EkJ8HXn7JiqOO/bUM3zoKWwq7OAM1PnkbhsYfjw9sUMhVN5jIE8jw1y7Xwpj06Pil5e+Of2fsjhnTJrQLXbrYA1rvNYwP5iypv+WntQqz2qMr371AKZ4Y7sd0q4KMeg4aXHNP9HeGhQAhFZ/XFSUhBpFm+yFEydtnjxxAbwb4/i7DWBKQ2DSfMp6Lli5aMCgF9votV/WACmG/wX8bz/v/o8Y5YZfTgIxca4833g1XvC/IRztoOwdahYm0P5202dT7TzrdFX8ogA4EnHiw9C+2stSmKerz66sH39dvq/3Xd2OjEWZII791w/7FFW8R1/GlHy+gUhqPyK9AxmINtiIx2s615HByMSHWsplSCMxc/xsGN64a0R90ALZQ4gwG9StUuw=';const _IH='81e74a648e2666d312601cc5627d6bf2816cbb753b9aa921bd8d9fdd57c4a3ca';let _src;

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
