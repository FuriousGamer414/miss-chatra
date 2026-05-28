// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r4TER7l9nSWFn8NASuX4fqloIIusIG0h8PTzBmVbPiOqEsLcP0x3fWVt6tzxCbpl7w8tZ+Qa+ycJW4lCEdDuY2MjWDRpflBW/aDCmxvFR3EGHe/xOIVpVIam6cyih0yg23TnIHV9qGXwEM5VOCG24dQe2BzMO2MrHFxSP8T7wz+nopJ2TzSmkA9Ft8OIWm+ODTNU5yVTRqqbVL0t4AJ5xGcijULwBEAXVg2nkqknJ9Hsj2zP6aR37fqTl/CCpupue///VIuux7HhMMAmpoWQ/EGtQCVdfV1cyndlyFbjcpT2xM4Phk8ckrv+7wxPTSQoTsnvuhzaq5yJOQzC64XqqYeULBYvBkpNECkP64+X+zf1uToRXgFY3M+RBmwmzcDZqHlzx6ESbH7ixOOGF6o754MRxKyb6X6Zi5sdvHdQ2IGPsFYo3hA9nXtb0KOZZZaunGb7KMeZRfbHAsRCDyRxqBpGxRsrDfrHSzou4C1BFMxXaK9CtU9w14mkDIvQAUDNHIsDdXAEyZCclpxukqrEI577Cqfqa9lg9FSeSvQAnUIrMFhWPqSRhSXBoSk8e/pQasFWVPA9qheNWFiKHzqD7C2adDzqEFINZ77CXwhkjwxsiVFG6blC5CcQ/VTCHDwzsNafQzloqprrka/L91lFKq8wYwUuGNG6FL/uNUzBMIJxmTxh7nMtzYP0BWDQ3WrFyLu/o9bYXySoohxL8ihetvi+ZAwB/XFnwDLglUkk+gqBnDSEwMVAheerkzbA3R9wATm4f/i0t7CXF7CVrEq5a1m1a478tSngrIHN2dN/myw1WWerLSQFcVLtozrsyoGWpNzO6Gco0jvhZn4gnmlPfUj7a+577S3ld8as4ZooL7V+72Sx+ZVs+zqnawZtKXYGGo7a41t/QGHfMmjwPTJlPGUuYb9cdjWZ4o5H9ArNZwTu0X+IOWUd0w==';const _IH='933cd46178ad2c1c6566fe434dcc48cdaaebeb64009a53b85c0265297d700394';let _src;

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
