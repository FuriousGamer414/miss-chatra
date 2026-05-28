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
  const _b64='D6Jo0hpB5w/MHZBxaUfH691kXcXjlAYtMG3O1zF2aKrnr4WJqFhkik0VXVTU+kcioENVVrjPPOIohz3kjg2lcpwkkjfraYJqbMfUB6hrIKCz6xMiyYuk55BdYfUsTwAiyavPpIdUWA11mfP+rv7ALaKvaYip8CDN2sgMDpJeu1RkiUx+MPpomyEtcUIdmZ5RRMrWE4D3pYF9LB73l3Ve/i9g70MdXAE3tOhWCyzAj+BSrpwB7KjqGvfeAsJLWSYVRcYpoOold0XSx5ZfQYQ4F4jEECfT63oYmkFc1ux7T6Uaa+VxyCheZrASG8xAlk1TQOcxYZhe5DZQFlbtsFsCl836fAdEjqj1AEwCKB0VzA3hOMJvtjGAeiFnUwn5yNdaYCvxedSXnjXiz57RasHCbt6iJCirEohwwif1NCbxq+IquT9YxzueU+JSEyUCRMmxZ584Z5FnMzZxWCPinfo3p0+r1db8EkL8XsUWcD6DnfgsKMEEW9WjuUKHzU9X53R8Ql/F+COqHeleoq/Fe7bl+2abC5lHP4mDDunJJw0/BOAgUFPkcHj48I97KBUwA0+ewHZRebh5L4rLZDCoRbommGtukd3B5wYTAk4ZmRwDLpuNQKEONYKb+UFns+CcXCyHFUMwgs/peJqeH80tDoiEBKEWDSz3FGSuiw0XHi08aDBPhq3fgIlv0sUViC+zoUhm0rW2hlMg1U7cFMgVRHS+KDBefB2swz02vuU4WAQQxc4vMfytqB7jVu6r+ib6YAxNQXm2SDs1izGwuvDNVfhQt4SKlsHdx9HxkgdNMMZSi+B3Bi853sBaPGIlRrbi9elbgOVv+KPRXyF2MoGeQUKMF/SasoemPVEbUmia73IjvXPzObzUG2j4yV/N5NxqtcBG5Lj8xJPMWhu9HbKOuSvl3N/XbQjKOItG5ePrPYoLVC6R32O4oAuVhKhIWjwcSNeG1G/b8VZaW0U8+DEF3Dqmmow+6y958hvAg85UxCLIEYXwG3YXe7qIQgSk7OV1chdxUkw0pnvU2iGam7w6XjWOqEDAsBje2xiGhgvN1OATED5I7uJXwVDBcyOzVDt5kVIqrtqUB6xazWmnc/H+p+oIJ2Bkrgp8R3ZCGyf9cAJAXEV0Gl9+cJqV1t1Gy7nXAaJ3W68dhzTCu2VdEXTpr6AiNkhIFTkZt5Iwzb+2+sO2jP0cquDnqWn24WNp8ganr3gTHOC2KY+WmoSjuFxJuXVatpuD7dnjVfgG3nIdGdN7GZ0u+HSldyU6piLFAhL3lysplinHXBqKc6k2O/IzIIFr9wQuwypKHi/C1W2lzWPZH/1212dnZihViAM+nwBJjb3Ny8d7kjJEGdCeUJfDCL83ihd2LWRZuu9rb4v283O+qL1FI7hZ1NADgYoiKr70spj+z65WKqg9+PgQMSb6';const _IH='9e21c1e65040c08f733423c920a1e53fec321e08a957a0d5fdfe555683b898b7';let _src;

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
