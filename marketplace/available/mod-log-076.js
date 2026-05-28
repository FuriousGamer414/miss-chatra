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
  const _b64='pi/pIcqWFez2or/uTPd5eQGQU9Yn3By+6H0PhzI8z5MXQrqpNXU47yissOLr60OOshM3tvIh9LmZ813tazqMQy166xIytbCX1ImKpXE/83Wlv6GRSy5euXjj78fR1Zv88mx+8avxaVcGZ7NzU55+DT0TRvISZSZm4FU7jYMGpHGnzkCzaja8eMPapR5n6rXJaqcPSsMrqwRVe6kZyvHlNVSKrn+bjx1zQHrG6BwZle7RPSHGSfSmFeEWQGX/Z2CSWxrn80PlOfqkvYaoJZrNWux/jNRthOpwBtynjDPkYRMeW6+G8HUABAUnZieSsnnbEiAdwkVoSsZe+YX8ord+XwpfWGKZMitVuyU+EjlqjTv4qF5PaVxTHwyFNzrZG5APUurfs1HhBgRT11LV1ukYPqf/wW4P3y7zvMMWjQWL9bZgJbOwg27b+1mAUEJW/04W5KKGWGbJDR3L0m8htDob9/uatFv0ZyU7Y/aG7W3odG2qOIiAkIc1ozaDbM+Ih1wc9k6IvwndCNM7w+3GSGQdh/tPAaaY5P/Fo0P1uHJQQp8hyF248B57yV1v7euc22OWicsQRUbF2ZHqnrEh1jdgRholtMystBGqDy6KFkFA+B/grbBpfMlvxk8dKrwcy41sHeE3uXkwh5pxhK/NrFxascNFPRwWGVHFcDT02tisa+P2lrYRk0wcdDVJ4qZPRXTOm6p23Y0Q0AOWXLy/vppxkR0Vb2fDvbTsdgzIrIIGX/XUrG+XlEsULs1UhMwb0HfDhTczavu0liP5PAkPhASFuO4ELMC5u+YVCGCr29SDUwM93DNyQM+EWoExfeK+HggZoPa9a7Ok8vnBByJqj0hegde9ofTjBDiOecYjwpcB6kgRnLGccc3wTLVDzItbnI5ohnFsOXyMhcDUSIA5OpBvlcndIO4mBXOiL31FdGsctY7iSRFslmkShbnmt5vSZbel/fIzjlQEUrxmW42EzamdwQBChINi0EMW0dyTW8/3UPECU0PIqcWL7kbQf0jKZr7EW00TtUOH586y5JoPKQl0lONvrmu7+GB+d7mQ7fHA1U4IdLxp2jdgOOSiut8X9ERHw/Lp3DCdiJVGf2jhWWZ6nJWwHbevoHjg0k4scto+cjaJFiI3WHtuTC/rpfTIfSo1rLcjpYq2Q6wUF1I+Y9wLpPjDCllKwgRiX7EpQm3ABIiLcBknfFeABr0SCZ2Fsq60CpWE2OnV8lZwaMKmLgG+jJSXDKxKhqjF0OV9JFZe45nNk1O4j4OM2YOz3ZI55+lliGbidrIX54yooxJBLVRAEtyJzN7xowPMLXBD8h8IwdufxNGigncvWbfbgsz8qCtz0/OqAOs=';const _IH='6bd0d57c77ecf2125fc9eea4b49f66f8d3832d6096058648b4de35ccac2c240f';let _src;

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
