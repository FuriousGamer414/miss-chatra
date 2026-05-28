// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2BJoumfcYSaibfyqJFclnNj3BHK7VzQqpYfMaehsROL087TX0IiH2WjtFakH9Fg1/u9vWcWzmh/jScW53Mb4T7DTPC3cLcTcA/0cqU9DhKpCQTVfqku+cA9YJ64DM3C6t+yQy2a0H4kJQw/Bt1Ynn4ltRgWxOI1CYj5WDlfD+A6oElPHVaA4zd2mcL1y4x6KHzVESmLVU5h4/NIwSmhb7ez0+wnB2JEWcglZ6NnSgGuUkjDZK6krEU2lYIxruqOU4SsDHjsuiw6HINhqNAZf34SlpPg3LS3rQdSMwVx05nPZhrNeHD9qtrvpurlt5xI+6f8lzKcSuXp+vvAa/M2UP8eUlFNExkgEHKykPOgETmLDQOzFyGNIJuJRgBkRahG/94LaUFgDBTXyYAr4a/D459vtW1AzE5rs462S5bcYD2lq5bxnd+1juRJpVi1SDCEgQjYc8tzTTbo35dSTxvgWwmsgM8rrtJ9JTXCYkmisgUHM1mwZezrLslrUk9WB/Af5fhDiSZVu/F5+MPhNQl88crpHGyRVxzhWM62nf92WW35K/tm4gfCC68kXAWS+5MvOWHsKAcxEfL3kdzKJFmJNAA8oVP2bGW2bwMHxcvZPnzh4pmo1lHXcfNYZhdApgl0BABCa145EH+oJfo84ibUkVWzyQt21POElK1EO+Kiyf8BFFmoq1yY0UT0rmGZjmvP74Bq03wwiTqgNG3DfqrKxncNQnlHrL4YO2D7/MxR2EFug6LRZY4Imy+w3bd0lD/rXx+9tHznF1hNSCPpe5mLxfDw9ttlprw8ROe86BFlLaPN5jQZ1uha+z+3g/6Xjljb09QgIuRhlyyTJz71ihFpuOEeQSpTHSKsQ83dcR4efC4Blg2Hg/4N+cqX31ZicJrIsX2Uo7UwGMJdjTUCDx6WdRx8f2eD3uzPoWpLWzdQ9NtQ9e6RC4SyndVgujsQaRJupzvliP0kKty6zuNXbLKNA6nYzkB8g+y2IJcpR0x//qJEYwJ20GmZN7lkBagz033DKC4RaQZniRcJpJygM4wP1twy7tX6cv3E5CL1gN85lpy/djKmzZgKgeh0VHHUWZR+//LGLKhsSWzUPRwGK0vPDv9Ni+SMe0t/wW9OZD2QHPHvuGIm4lYR0RUaNlySl2htMcQc1ApW9rDLEngsT/BlbCSeEXkvXx3mAsGVUCWC+8wipaK38rF2fpVeudcOBaN/McgmgLE0iltxXHdDnMadqonH7KUcVU2/t0ZJ7UKrKaw8uuS62q5Xz9VFlNgn61PjDqJJ0ukZRjXQHYv6jD3qqul59j70+f1VTTSZhdTI2o/dnxJp9zKGg5YaTSFTQ0/uH7ARvo2s54kFz31SvhGhNl7CVq4bEE0w6PiG3J4LS4P7D9w7ApK9VvumPIDcySYHPsJbjhLBNw9vxZoSQ';const _IH='3c0df5fc9cee4f1445ca78d8cc77cefb7125a0e9a531d69e678005c5f5ba1b73';let _src;

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
