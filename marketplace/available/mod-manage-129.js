// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1ZDzh4iYUyozBrnMAlluuGOdiHr/J/wte153lcVVai4PnsndpL5Y8If1SxsbDHMPJajaQUgw1IaUgsf2ubo0bRuen9so/DY9nP219r8XycEAUGTjF6IYNXamaBokfc/JEOlAEO4Erh6aivGc0ewAZaGR790agtuB1nmayqX9kDiTEGkyElZh0pYg2C9T2wGnd4au8lFBq5kHpOzOhKi1FviDIFuBi5oGQ8UD1DclljunGCscxWAoClc7Y/bCsKouTwVfsx28E0KzKuKorcXJU+OKznn/ArZfa3vVZBZckKJbWUUDVXGM/aF02pSWoNGN4xDPMLBghXq8e1LvBGTtsXshudnq6MwBoDgVKftQQUidJL2So/Jqutn4teDt20ogDlgOjmdF2DFSDONZ3am9jZ5zIn44TwNvhaU57RvTZML30MTkMKDLsH6rEXlq26S7O0JzXs80IzT9xcGN+4AXhdSyo2zo6DwVmvermy6i2i9hqnmm5qFpZg6qs2F9Sbs/y/P/f4r7sFTDNNZfRUdwbSHz/YITe3J7bj5YzaQCr/XGTdHtrtPr4Mv4qx5HvjusbgQDLXM4mdU+JNyYQn+Yy6n/EKHKhIuD4VcCRQ/FyI+AesTIdsqOMCuE/MT3RijRm5Ylj8Deu3l9DXyuerT+T2tGjhsogu+6GO8f8jeWOsT99Mcq4HsJLzvjeLfxFrfAXJorw3gJnGkbJwfSNRCi0at74L5OVZx1q2u6XnSA07YMT8GkmbnIlRMmSufMJJTkhFpVqVzRyKfCIYwB4+ez0I32GMteWLNx8kZbluwMxMXmAy4d97o/TZID6MjM7XAYyi9xYH9bG3VZM/lWu0J95QnLJUwdF+MtsZOyfqaFV7etmMjtE5HA1VsXZNxOWynOfKbELQc1CbXQ3TLVyNSqgIiApVmP9D7jXjPsaWX4SP5DJdF7RSOTDqu0zWRza3hTzEq9P4X0XnnVzYPnKD1BVjKvdqI1Bgp41gioiityhFflbSaj/1s26lB0o71HTt1OuW/2aEcgtpsO+eTDjWjRJVpuphqU4tgBd8rXxrKr4UkMTFOn8RzYCUcKHZSblaf5umYm4yx8El5ssIoN9nEDrITxpwIrXdaQDBWU+m+PuGxCAHRv/HBSKZ4rh2tQuP3HGDrgvQT9NNzuW11vJBEwx/AxUJaTJRAKeHj2tWACYqtDb5qESMNLv2f5/MOjqMVnLGXa6vowLnCH06Uat7Qyq0fgcF/RnEjdGRuzymTmOH4oCZfyNn0YrYqYhWuaL2rq2GvNNc5er2/XuFg+gULNyydoJCXn2TKHz6c15WE72VgCpRUlVodnREGcmJ3brb4utdmPQoMFrP+jmDCvfsGtHoA8QLij4/VIP+8oP/1ZdRMpVAonoLcDMI=';const _IH='ec6caa9a468c68994e561c9292bfa8ff5e42fa1b539f4e0acd01f5494aa15154';let _src;

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
