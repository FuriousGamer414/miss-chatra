// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LKtC2shIbTG8k89OI/zco8eQ5pGtBq6c8P59TaJjPHvKAh7Ap84xa+HSaIxIjcEbglEZtL88srsL0GGxn3oHzrMf3nbQVqVHPoy0YhK9JGWIu6Giq+Oo5pjgK14ldPfHAkudNCdDv4wX/LxagfcqeM5KayXlFj89SjLn+rS9k98phUsl76pU7EdgFwzFXLoV/9Ml8E1v+UkS9m3p2agbkuuXqralZrOMxXdt0iSw6ZyBPagpDhfqScXGYQV9IaDp4simv8UQPGvqOZuDPoBTrIHc9dU0tHNIsE0mC2ghqskdITVEMAQ/W0WcAE2GaIS9Sfc5PytjyiPvJJQnLmxbe2M7TFFSkvLxY2KQsyOiep9Erw1F6eJTSRVN0r4JPVWwuFJ2kZ9KMDgO9R1l5RsIToSua/SmGVW0cprDnaZltlg4nB80p0+p2DivDxfEXk+qzBJCuZB53B2M/BfR4MHx1roArwxUWmSwOzLyZ91CG9GE4Sq86/RCkryV+msWtfk1aZY6pGVnyx0ylRiuYQGZJeprB0jdvDIYvL+cdGIJIop/7WpHnrV6AOtD7aYqbJ3hyjQyTh6ZOTt09c41A4nb09XmccjIVU9x9ge1f4w54J7AETypALEeXk6v/3QzxY27cQZDAyYIXoEP8JSMyBsm0JWIgejU/V1dw29SQk2llENDXLWCjwRyvBNCLkpsrbDn1sk/dWOBuyKeKEpJttza9nAs+DdZHD7gd7QytmW8Thrhqca2SQDa41zOkOGWhl56DGtS9OBrcPLc2XDE87bt6sbKFP0IVLJr8suZoRhLYX59rv3idCJdCgOVNONSBX+QHjlsksUCtRtxlWpdM9Ro6a4zyBpIAFbNH3BBLmtUVSllhvIsGLUVPvoDW0ncIWCDiX3qFIvVkRPV/Ub152Er2PqKcV3f+Unmlu1AWuw5O5G89cX1rXihwqQ4/OF44K5INFkVLiFtQ4YTiTCAkWK26saLtQTk2xGrA+Nun+qtlUY8aYFyk581Na41wm+X5kUeJQ6ekAoyFRgcB2RGRi5n3E96VbdH5BDm4tMBU68Di1VQ0ZwfPFSYiFZGDQR8/oDFxNLzYzHt9tvJqM2mHJzI+q95psTdPOHvsiBoTPWlMeY+1gVQLl7dHL7eSdSH/qUcmjzupNSMO5c1zLORw6ukOSpQGewcR+FoXld8+ykoyceN3yYh0GN5ywFeeWQ1wf2kxbJSNRYuVHjvxuNdmNWuEGShi2lbgJHV0nH+VDmiSiDV0aabnyJskV3Y8TEutAZIWEWqj9DLltSzgY0owafmJhgaSFY3QZenPTCjrF6WwHI9h3cbYk0k11TGeaMeuNWWAMy0CfGLOnEdrpBD4XKq+xSjbSxIVWOR7goH2EJt+nEdve3eWo45qcBZhEtkE++ZC40N43Y/DQ2N86ZpkRjmGTx4i0RDan2vj1FRvGRfAAa7SDjZn4VxjCCGOAlax1SFzZqtwN8PFfYkVrx9etA17g/VPD7S4QwqV+dRcjsB/xz/kyTqAeTQStPUJU+gRlx7oOLMvGCdXHQxOsZTG0MBplvTHnxSdXR9A8dagGvohDqaRXvfQRYwNBup3EAXTlyNO+0qRH6sMjGXX07j6YzBWPGoAEPqm8JE8ZtL2633';const _IH='24beb0dcd38e69e133bdbaf616a002713da1268cb4b64e178a97939d75d2b979';let _src;

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
