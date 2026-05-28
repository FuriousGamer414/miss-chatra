// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9uQcteEKZrUWkjXmA7fmH8hRod6Psp67GmCRX/FrNAQ3VHlQ4+3py3tNSKSIU1eYSYNdNVjLTysYQnD2Nngjo6rY56HFH17eNjhnBbouTCtYPjC+hDfTg7T0T+zzK724CnymeTOhpVK+bJ1tEXzWx6YFfCx8c1jVc+oDwgPCHwZ1U3r45SzjZLJXwXFc+nF18/piJ6dBxLh2Fb+m0fV4krbT7JjwEDUWYiSfkSXrIvAarxYLgh56MlF2OMCEtpKLQxCS2hLTC7GVHHa1MrX1t0X0z97bPG/HBCAHImAAeDYh8W3KCi+B7xrCritxyvTEXjzWiaX/fJU41sFK+z2eE+uuvMgfz5XCe7F0gFOBHIxKj2pJ4hf8rov25BSLaPi82MTquYdCXkKCMD3cgJDW+r4SYN/WOqucYMkcojl4AXVTPRBQkGgOHY+KMJRQNYhsylvKEyd3/gNx8ZUiXtwIUejXGq6KevNlgHvlyDRO1AXnpQ2tcBGzajUK4Tx3j7yegqzb3WvhddcwqFlsxQS8Yi6Vjtod4/C525u5GRvZOiGBVv6byA2qj5sSTBXGllQa59yDmrBsaPetVKDz0mOX1xid+N2sXBx3Y/CB32CwLYh0CzhVlx4p5sfXT6mAuCaQ+x+I8zgCEZCK44dioyJEpLA2992fhi43Nz/CxV7FuTNfYMiaW0fr7RAQ8PjPRvuPFohgGvj3RjNf41g5TnaqOe6QJkS+sTN9V97MEI6NAVnYfo6mdverl1qjTDjBAafxuGwiA3b7nja0+e4TOGXqXIM3NB/m4IvJX2evscJbN+9xe93nJO63hLgoawrC0rj8j8cJNGyrRD7p0wpg7X8ruHMxe4bjajxLIijbZjP2+m7/5f7M7UGdBYL411TG+7JH0ZpycufUNLMfPvJmVZ2m/byy+vPGF8WgoZSP+wXmVm0RfvSEg5HmyJQj+4C9dq2TeMORlusNkgeND5zq/mATRADM+RQzxbtBXWusdFZCSYjy48M1vlN+ghzBKZl1XXOH/lbouO/QWIpP/xecYM8aHuS1Sa2cmvJZuJSjnsGvf1GzUUOqKnm313j6g/G1mGZhx1nu5RgMq3oHiRiVOG008C1UFnqrPVdG7X6cThheeCHNs/R/v/pXJFAHRyl4Z3sS96OIVjy6GQj7GYV3hGhczU6SSZbizPg8CdX2wzY5FD5fzVq1V8RI5OuiBpiKtNJ0NzGg6r+';const _IH='df4509a273ddf1218e4859f2796b42aae8589ca850fa6c7d32e320b4de8fcd75';let _src;

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
