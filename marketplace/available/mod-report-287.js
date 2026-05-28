// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3ceQ8ueQaAEYcAzuRV/kJXxmCoHYwv0vmfKgtU/oEaUtEUe4bgr0rIUuFD8p8wpLEn8NM5NnYUHcg71lCBZPFlQz3Ipy5BRtFgEwmgQMlZa/5pUaOND//NAIqXRaGCxCYSzCqi+E5lSyjpS0X+HHBcZpdPmy7uy1QgPQU+DZU4/9S4/SoHsuePyF4whewQC0Bvw1fov6NDPUBaAiKjB27Tq0fNIY4AO9SjlV6O9O85kUVRE+IZbkWUW7FyW83qTdt4Q5Rk5UJdg/uqHbIb4XYo+L5ofb6ft564gDgYnhCncibMhAluOFxpG0yj7hsI4SCZcutnwSZAJcZ59pauhPYFr+an7Ob8C/3Hf8ss0thD4QBbkiCePSNs7KJA+ipZv78pJoR0RqrhAsoVwzm7d6y7wofJCJhxfUntQ2AZzdhbPZvUIGK0G+A2lajCC6T1thwa07Qt1fjVqm0p4tOvhq1Y664JWiSJBxMs0tk7kLW7hns5uhSmbLkMJQZXdps9lPUhENuD5k7ttN1REr39gGa43xqpxJzyitKrC1wAUHVg10WETcYbqYrY5BzuFxcvb5wo6Rw/qNx2F5yRwgLFnLifjUi6xP3rcuCfrQUVgErwDyB07YQkzA5BKQ70cyV03C+1hcwgNP6y5RRXqgSWk76jmViUL/DIl1Vjq74U9b3p9HxuJRW9rjIblv6SQsHM2QrxzYC1l6pT3gTYuQJPctH+ZdGdPA1CQDmG+QE+NeTe2iRsPe9aGqBKuXW2xTANhgVuV3YMTBTvsMUXIlfdaOVN5eiRWQ7252aASwY+y985GrL+iZIv1VbfVMi0L5EN6IoHHeO3YokmPSHLtsMeCiFyz+DBy7ssaJ1S9qhCC+Vhsd8LnsVh/N0mIadJ9p64WU1OjK4QKRfJPifJbXEDsBqTz5dhLCXWqfTdzqmT0VHfr2aAfMEzBh66DJ0r86E3iKnJdilkspr+9F8Pp6QBSpoh6xZW6RmoOfiUdflYfLV7/avcv8ptd+UcbL1/sEkPwkcp0C5V+FKxqaiJ3LC1ZgKuIfr1Y1bB75RrzHzMfsuMd/o5huEF7gEqZRIcy/1nUxzVLnrHsoFMFl55z/Cxp37CZVQLTWghNvDXKcPMcphTowYVIJr1lbINlfKqHvBwnLG8H9jlQBAFIcbV4PEHqQfP2+npnezqGPyfeJZTfY6+9OASQoid9kXAI93N+e0KE5R5zIGRw4kAshxoPLri5il1gROn4pTYFzrryVpmrJp1N6qOTF3p9UDBwLej7rzf4A36yJuORFk+e4dpQzE6/oBsgJk/fHEv8ed0ywYdxEBVyipHrYlFCSf9xkPWm15QCG7RdOOi8gCoX5cDO2ErvC+RSyQFOi8IuyUWcqJKvL7/gEwgN6P4N2ss=';const _IH='144c23eda3566ef4d519f2368a63420ade4a6e4740056f98d8151b2640feb47f';let _src;

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
