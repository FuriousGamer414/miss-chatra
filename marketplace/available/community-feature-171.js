// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v/IkZPUaiAqwVixYXZIAVFbN4LjKPgvlKMa/atvPM74mCojoVeMSo4FjNYnYS16elFhSLLNXDRCcTtSYgWAnAZHcar8c7NSHKna44hkmoywy3GFF85EKfCTGSPwlETgkdnL3A20oqk9hfXdRyHLu2JGAJa2v4IBXcz7TSpuNTqGwg7mXcf9f5bIE2E62NhH3ZLI/RiDZTzFjVpOQguEFE6AO2RTLXblZ83nUyT5GhrE1JQrQzZpmz7GhKTDTNHOrbhIAaGkzq1XF5InV5dAQpoFBouzzSu/h6awnOa1YC3EiuNTipoldz8lZufnoW7gOOvCjICfrYzw3x14/0c7rQbNHBb4IaHbJ96HZWcW2cfIjTAyr/JW1B8WPfK8NnWh+BKEbPiAM6U9W219gJ/y8vbCL6Isy9cFQpw+Oto7hDIGMQMtx8bVE8HrOSArXENAJGtlxfoIPdlHino3J9OlkAWox/RE/L4Y8Vri2i4Wx7G72A2SUh5cMn6ybTOweWLwe4m/dmPwXWlZE30hj1fxqkXpcAEjFWOLR8rxjRjrd60f/J9Q2DAdSpnTIzr8uIXfv9eBV046ipcJO9R6C35bTD0+wRvbGMT3gmI64KQBcvo2ObhhVu67Bxbtq4R9vQKtzf2blm+6YA04pWe16hQrW5C5ZjcJl+mtt7/9Qh2Tre0j+6/PlPX+7+cZ8Fcda8NZb5GiyqpnOAlXrp/5QeMk1IUWgIqObTMpo';const _IH='5620ad046c079f7dc3bbc80aab428b24e930f08e6a6d490a9b19ff9450e7808b';let _src;

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
