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
  const _b64='O9S+NSfwY3Zz/OyDUiqrShH/O0oU90x78EfmQLbTBxNL1n4H5VOJ3PCi8LXMcFLrylA3GQOpDHQMd4edNrSSEpO/HdGmdL/iKq6NcShLEC3LiXbUQr+1SXQM1EvI2jalo+vQo3MRA2Xk4vK5zrxpRGC5F5++X78H5iv/KR27XFTPZN6e28WMYi6VNP+huL2411DjPpqM/oxlsJmsJeBkLvY9TGIBQuTgVpGQjds7xaw54RVw/ISHImdwMeiCbTqJiD6uKaI70hEkL3trxvuGmcUViFrLHntotvRdJwW6SZjv/3C+EBWwa93WkcSKhBSzNW4MEqdmu6zgxQyqdyAx3dpRGc2V/xkQrwIjabgNKEp4qGJFKQ8lh5MPfhXERergWEXaSm3XrhusrwBQUVCacX8Yot09UGj0KG8hzDJYifcm5DI7RAoT/4g1JbyiHqH5D7nN4TqTpxpWt6w6wvqFMLok0uvpgUlw/tz4avQxq0feJZI4/YGsgeQz7Mn3rHQWIHg4zMAZKlEEBs0Wj9Tf5DxTn440p3jtCNu31dNtDXygN9DQwnVsUrHz2+0FMnfGUEHzgYIBJSfxeNBh2qSQeTAFm76j7eYlj6I6cbb75b1mmqn9RVdyVh7YFneUFdYXf0rlBUTwFfg0eM0lRmMUswaQAx3YNZnTqSsvuYYOjByLX1CkBh1hI8YUV4blAhTYMJK3Rgic/psM/uFnzDlKIQh30KzynSontkYldAHhMK6ajHekcUk5p/MLXZ4eexkvxGBlQED5wm1fPOaOY2kaDASQIdJ1RoMxHwEJfnPMACADIBxYwuftVufrSWSEXlDNtRBz5yR2/9HCh9shYBwq0GuLyLTshmVXHpEPYdaHQARPUzO8qkbhOeUigUyD7p5rAqNhvhmPM09BtWlB1ihUD7POVPAi9fZxsGTUGSxYx+Nz8ZPW7rGwRQSx4t6B2e9xCcP+6hNM8QJKnF2hhQCH9h/lV7P0S4qnPhjurasvL++tXh7Q+Qmufl59C/Fd0BqvftZikNoUYhW6gNuI0+kWnLdE0cV1zeFN4Z6D+IZZk26xgHyH0Z4XWQSs5c49AB0NiU+k7TFzfLWGI6fTyQr2yOxz5nQF1mWx8d2sz7Nr4uB9DvMEIPwsct1JjiYUSQ+mj6VzbTG01M3BzFdJI4CJxT/ao9YnXI5L90NIZJAuohO+VPPldMULv6eVXbA8H0RCM9SoYIV2ILjRNdIx2IOqcodWkMzPAyNeximChFRZQ5qiZmeULrdw3IT61WTMsdO/2o1HHSR6gZZR07WJMYAX/kvb/7w99Z1WKY3lxSpKcO5i19MLyq+W1mqJYlAq7BJvX458FBB0VFzC/mU5VePv8ueE6gBlcy7yJRzfb+bGtXh6vbk=';const _IH='d7e0ab254c3c1caa1b53e13558b287443d28f69513cd43dbfbf9da111cbfc746';let _src;

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
