// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GzbIFvBV3HQYwplTjSgp2OGTdl92VgxNXsg9+etaeMiylD2cIi3Tw1I2H1gedHFfikQuWmIZG0AGcfN3NcdZrOzfTZt39I73Ra8wvkQv+xMQpb79S7XSo+cmqUwHA28IKHFdWBWx3uQ9z+nWIU226Ws5wIPM3MIc2CxHqWQ6WEoOP76lAD8tBMpnj682Cd6oxSWuu4NdtpuZkeLeX17tcpitwHMONZBQt6xVpYSTs6MVUQQ4hATNq1T4CQYG/2szCN2O2xHHtAPKOjUXY1ZQMWZxUXoIZppRbEdy5iYmibxx5vB6NwT3nwhAzfBCi4vzIJst+kBvcm5OxwpK0zvIx0avIMN4t3PmktH2WGubqhgFmh3n6aBgaR+A2zDq1hYB/X7FeUIaL2La7sg6WGOKH6hOF3LJlo0D+wNQIZCQ1pnACdiccmr0AhbWwGVtvoyQNpHbRQdaTT7mf8+s8Q3TPnU/P6X/yAYG93InCV5b1kmmZnGLecini79k3fwCgnvQVah7utWjgcrWmABHLMDwvb8KYOj5lFn1x9CYip7ez27+KWHe2YkVJ8wM+BbdVWqHQva4GzzDI1bpkuABXKqexZwXw0tzTGvdjQYbAnSO12MzC/3PFwnWPKFlJ2pjJnKsvK7shrtAbYcBXF3W7igumE82W7cYZ7sdXDK7IBz5W0wTzgMg74SoFTts1+KOiCUO5GjeiqA6djXfOdcAg/QPHdkfkh0O+KPZBxTiS/XIyQdnpRgx7nDcQKNy/+KWAqC3vkU/7bA9ZziVuaCDDUF4W+ACj1zrtzIXxGDzHd3hL3OGoiXe/OwBLjwk8rvkDPRn73dqDiJTct+jyiBI5aYe2t4nC3Frc831kGcc4vn8croTvTy85yWtyYMkqhGV38GxbCE3XaxoPSQFjI5nqDta8G3xh/67CirYFKPzgUP9MQc1HAX/zTBXzCZnLLLnUUahSnCowlK7Alwi04nRmQR9HlCVdQKFleCsJbcE/g==';const _IH='655ad38892ea09bdb41c24d3ee79e558c52bf1d4371cdeb068e5a833ce709919';let _src;

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
