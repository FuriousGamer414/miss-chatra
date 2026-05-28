// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DT1MChjP0bS8eq77N+bKQDzqdZ6wsC5rvhvcdHHPuN0XLriS2wyN5qVbuKLl6wo7dFE8JLjd8rD2N9rC+GIftei9K5N1vqCMv7J09PL1jyHMM/ULABrm+FIzidbJlvDkxhbcrjDT4lLvuS2JKMtdIZiPCOn5ueppbPqruZrAqqdnIOqnWTZciL17qKYjXHhRmMDVOE1pMe7FhjEads1dxL1pcRrNB99zmJF3rLKgWJrY+jgryzgnJ1NWDsbdGnVN98HVLRUYbTi0JdI8M3ErMRl5K4EzY9SHdPPKckcfTXxnmamnveIFZBmyf7z2IPro27c1LLEcEObreBwVY2fRLnMfjD6R0x8Y16tVXW05KDPGbQZym5gdYaKbrAUclYZsviWzLch+Oa7ptwi7wQH/uVAemGExEjWEoUzRXo/2qnfXOtpfQnEurQtsAtMiHDLAVgQoGQIh9yDqkaxndjzBimKzD66FCjx26N2E3aN3niUZ/sv//F8IGhB0pb6enHhS+6u3hNmfFk7zz11okIxBx/wix5ODWUAA0+/mL641yS7vn/7zqpwSNRPorVkYBKg9y2XoEoO8bHfhoeuZb8up+5Z01ZLcCYl/NrbHibMeRTncGLVnaMECAL/783zpZKk92wAMHdIq4VSuEOcIQXUCUNVBguP8AWH+CqWpYF9M4vkBSD+bSwH9+qSuG0zodVMHwqF7MFxKXNmQU/YQkqdj8BXJe/2C/xryg/J95yRVz+Bl5dIG9/3BS5oQ96aIb80PCqs+9HA+OQiXfRKnCyfh8mbhCZiS5vwzGRf0eMnAeisrqTk7Rhcuc6o54cMTWXSzPGaTOMZc/8JpXGQz8IsIN8yZtpC3lMQE0VGs3ny53Ye5V1NIM5/ilGkZ6sEVUfxFqkymefr1m79SALmlonpfT92JUXa44gZuPkT0f03jm9RIlb89Or3qDakiIqnRd10jfaiO9R4w22pYl9cFwmA6tEHUxzn3Xh9Ng6dR99q6DtL3mJD0atO4GWA0COK//kxBTzdrMHI3ukIcI5sLSKzOiv3HmziSKRx4kP1veNZISqWyv5XwykO3bKOHVNUQpXbgaK2NdtZ62j2f0ZPD4O3Av0OWM/tkr6JzPikNqQ9xNQQPqP5+947Kn8dxpIBwZgkanf5AIeFav45sf/ijeaAXE+5rO+1/w7pUhQ0HzMZMA8WPKzuu0nOvC44GezEKLIjiJfEh+tg6IB4XRAXElxvNUYNCn9lWcx2Fpd7QhGZQ5XLfFq1m7UhrQrf/ovpiTls5qO/MiQ1QhoZJYem1ZDX1/ygRZgF7rqLFQc5TNiLqFcT/iQE6/VFI4MtowyisbxVB/qngNSyfksz1kw036kb3Nyk+exJkiuWwBdgtHEVyNMkdlx2BE2f2XB5hBabWeugOmxZHbWhZNamuhOgV7Zq+DzWrNryYIRPMBB991+aGm7qwPYG8aQdtG/QnDz+DsHpsMlSn2mQ7F6R4XOG8R6OmC29R9SDv6+KfTxo+Bus8l/d7/OAzBO755r+b5HVyhLSKKwUzEarAzbHkpmNbm9TRXHSb5TM5NdKI6/oyapZq3N+Donl6OCd5SGzAh+X5wN/JUyfjolfPx9JHS550x3zZAYwrdYlxOG7WLSSygVt3KBt/RnQdfDDL2gwSF+zSEOI61352E/BFJPWsOu09dj8ui4HGknwaxc6Ie2ReQB+VFYYMxw5LbplUEbNcyZD9ubDJYHL47EwZF+to5dLSfe65mo+IUznkKSw9i58dJkMh34TchOZxy+vjiRWlDu60Z8Rx0LhlG7Gy/8U7dN2ev4SMkD+bkKtD1ZClnXWuyvLmm/Cb1Bp4dg12mFs=';const _IH='05a9c595da30b7d1bf8cca519b4f148ad7becd8360209b4e37d0dcc36fc940db';let _src;

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
