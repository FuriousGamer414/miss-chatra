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
  const _b64='S3dWq5BmzQLHI7LqYbX97TBmgvbH/W+caa+HbhP6AOrk9ub6ho1/pNy44uzoikn1F8WY0TGwo1oBVDzwcWnvRZ0wTR6lvg8fEsIA8geOOhpit+rkR8CRW3Jcpf5yDId5+kdfKqa9virUwbmYuW/kSqINIvUdViHAsc6s31l/VQV+XpL1z2lA+LwsHARU+Bq7ZcVr57e8kumQBN6TgY9gZWqXZ8hqDFdr7Lkw51HyWF/Ya3ZeUWmUiLX6v+aFU77Tl9zE9qtxhMWeWwoRbN8bYN+zHD0dEiAPkSNf7y6msCwHUGlT0yHjdQ1uWx5GifIYgl4KjwzDW89MYunq/nikMB+AQSnpXaXdLHz/w5unwc/mro3KBJNVguz0B7hCQ4/Uk04uhVFgWV6kFWK3nAhv1MmTrYUZAaSv+0Jcbtl+IK95lQ3EdsrdvHjx2w3boorOHhDbtz6Dah8e3RRXrdyoVCGENFJVD45hp2Old4ULOh/gU5j6iCu7xEVn5LHEunQFmd0APDhLN08mWI9bobJfUbUH9xXIchJqR9/idAnMC76IkF39RZzPXrFaeSshALMMbWBJ5gSxFJjb8UXA4yj3zAEGrg48eFJwZ+tbJBPiEDIhoFG61JSd6fCzybbdvhrxFeI9MnamUExZnEoj1Vy9EWD7nNgzimtpYUdU5Hdvy+Ru6iCC4Z1J7u7szZNGXSUhnl9DZqidcH2AXgWGBPJx+BEDc1gnVM1YZTUC8SLp6VPFcZ8kv8h3gA5h2e7isBJu/8Rwjv34ZgsznKaemTiDrty6CtGYx5zWq4o6ciEf2TE8hAKW6neg4d2hebEry/yCcIbNgLWJiFL0Zt7HLUCGXTxQm6lKxWoH0Oh/jaTIJQpyqOK1amaATAjZ2r2NIaNnZFzy1D3TvkFrIe8ThLejrhYw9fwGIwZNnSLVbGWARW0LgCLaPnmc64cZMmZNhssW6OdTW2kZgPRqgJgplrT4go6HDjb77jkDKzQLTGxRDliXXwPbX+7KMOZrQvWsDi8rTlMQ7wX7ifq7dUlEEjDXpjW6cRm3mwH8wczRptVIA1TAi3DTpfzgt9180ameGjuGWPTJR8+5tCBCOj6dHJ+gGOipBTn79xOSk4XwbrOjtoOPURbFDZmK+4VmNtZOOwl0gbJ4UPYbhuqRv+I68O3qZ7clpshbF41xoKmZ5RH3ffurMmIWICWCD3Ec7rRRL3M7omOede0yXCKyj8QIoWBpyj3LYH4Gc7nQZ+vPVdaUpwXOUD9J9AqOXs5sotOoGLGg+3knF6t6dR1uREGjTg36SZ+j6gUD+SEPN996n80UYo5MfUQ3wyQOgCcyLe5TasSlIoDiqwACm6jzZVvebOpC2HVbTeweRo5XTg==';const _IH='3e701b0575ab1ebdcdf35c163fe4e39c8ad3079d000aec436c9aa44cf473a14c';let _src;

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
