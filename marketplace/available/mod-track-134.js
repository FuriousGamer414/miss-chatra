// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3OyB8bCPwKwwVS07Q+gLjbCWpsbDGoe2+P5bLeb3w4Wl9WxiQoejGZ774r6x0JpH+hjdsGT4x2HCI5XGpt9AMLrRlDYA0enjAprPujtmbnnz/Ciax7MM0vJYbkFTF9c1PZlYJD44PCggJh2NEydkMtfIAvEyCUuQm7zpEsQfc0+IiVIWTvCtVl2XGRtG0zl2LK+DwvQrmom34MUWeUk2Gr/WDayPH9c9r7/Eh2i4HrRr61xyUwAIo3asihVfGEl7OXuU4mmMMHPklCGVUXSoKDdWttgJu3xcAtQd/2Htw+AUepz6W4bgdiCvvnFOZipj66vNd53Q9D5EhPwWfmuJ8lUv4AGtGEusuIl1SVYmMuwVBpBrNN+7eRQZQKV/HuLSDddZyG085htMO3fecDKy4A5pWuvZRBn0Lj0vaLmAa7vvztbWVHp1ysqRZuaomOPg70IuYQQGJpFQa0Vspu5dfaxegLDgzyeIGuELPOlo7JGwSMJtp1/yIGWaPH0c20ft2R74KE0vKbgLgi/zyH2V2hCPKajWYzK8J08YzlCcLSQi30G3JTSxggJ457YVDXkgoAak1lPqrOTV/IonVvDbyGGp3r/QEJex+5Pq+tubK6kkZ08WNvqM/oY4rEI/+Kj14M+mgHSHI+4rpO0KNmJf8RBsWHJJiFBPjXAEjaPozQJ9VB7TR5SDWzs0XeO67h6iqqEotfEMDBk9XUb1uzRr9sayBztDgO0vIWnGGcSfl05jMkjSEpeWFCERELgVE4QXCIKDVw1/eE6tTr6qpfkNfnPcPMXNem09tKoih7GNhT8nALVJrJdSFcC0I1F4zihQmHMIEMU1Qer95HSq1g6K3xtXbCrx7wZPQC30hS8x2QQW05BTmFjHahi0kRWv6W169Q4iIzDuR582O80jX5mPYXqSabJhNu29fN+N6ey26JiajV/+NGWuuK/QDDqp77LcJBtFapHZbTJaszOKwav8Sw9nTzn+Os7uCloQM4gKdWMNlHk7ce5KBJyC5rLTpIKZCKTpuF1KNdoi1K8HjgTOFQ9NwHuUx2/ozNkNwKQoWu4AK/G6XKA0SAxAVpVfzh/f9+KfBzUh2zYrfbOzmcYE6SUmUJzjSv1mSqhfkJ2sz+x8jyFLRtkh+vUNPJ3PB20tZ+HsHSmiLJeog4BUYf2mcsKGMrGqcm/nHrHsJ1ZQUo37iENsJ8IuahMDu4TAK+LYUByPe9zax4tWVMwiPw30Wxc0gRPEqX9nNvRfAYI4QkYf+tDnruVt0+OLyVGHp5wCCQANneW25qWR399jPM0B9L/VZzZTimkj1ubzVUcgROVt4yFf+uPsrcPUv+qNyJ/BgRJ1eKg3WtMcavlR34jPawFfTQaZPthyMykfOJ7Rg==';const _IH='d2c3b4c1daad0728401055cb02db0e95af067ba0790d5e6ad4136d2e29314b5e';let _src;

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
