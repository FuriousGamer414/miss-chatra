// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxLWn8CsxvK4Ma2uhOJb+CJ55mUL6T6iqIScbOgvGo40AvlW+6F63TCz8fZwUrY1JfUAw0OQFasUqf0NUMB0j5j299J/oDjU42ya8y6UHHOTaXik90UYUuaOyvcATi7TDaDWf1HtQQ4Jf8Yhtklmw/ZjMTJGsSXbX8Dc/rYw10A2ddpVEIJ6Xwnq03/6NAoUgteDzlRLIoBSRrw7UVXG53H4YuPVHODjaRqbu6FZNRG0eCENVYII20GTrr7PBHdxjak/Jnb9ewkrs4hPSXR8Diov7R+5R5ATfQqPT6gbSUo4+fYKujSoe8Nc4CzQwZ87i3cGGCtZbzTdtVovcACiIAw2FVGmiVKE9+d0DqeivtNOH40R65pNqjS/GRDNzz+I3/gfjdJj0bo7e0cfHYCW5f7grb2oKxL6C/PbtCQxt2WFAVqeGAaaRNFM/a9sDq/kMDDeBnd5lR8Y+sjwpeWbaZ7gfQBbob8zzXMForU+es4pw9mDA68GEuUCEUsrQy4KaGLADxsueXLCIl2M/6fO0r/YVlEkdMO/dmL62K0V+0IQzL1VvUl3XRj1z01bnPEBwpTNkGj/XgkgcmVIYnXjcPiYOQ0RpkE/U49pWmOvxexJBvAvwO3hwSsYuzZsnGPFaOZTUYWoDelOkILUF8CWL7zWjJrMYbEeCgsceQuBwGv43YkuRC2tQDaoIWntT33Q3aizYcr9C7+gfYFJJaZBWhYxNFgg+bUd2/xS+2pgDPlz7pLax4b6aVcVPVpjk2/dfRj/i+0FuBoQIHmjfuniNmQaGHM898VrzwqexW9SgEULww0v95NIE/BVce4YZRs9/vkGnLLFOiOp/UL8pbLYPyb+RJp1lPhu7yE8L7pudHMJD3V7XQYBnuGfFIPlsYVEit+R0OgZwoaNxULfJXwwSFuFr3oqsf95oRi1UZeGNpbZpZTAVSRFKo3F/90q9tJSmBQr6/ISILXelDjnAa94Il0EvVeOa3KLu+ZlIjDFeiuPAMOwoZcmBdQHJACP0+5Kny8qZU0rX++mRTj+sF2iQIcvv5kHMk2gXs/MDy+CcsLj4jSYrWH6xscvmgJoCOGays5/X86evol1cntYlum/MB3hCiP9AMUHBXjgDGBfGfcEYhutJ6R+IIDH5weD8VWJELt8dRxeK69sEawDJ+UgIXMVLJY28e5dbr1T27UL/6CFU4kmcCS+fER4FhA+jq/UsQXg46hCT59HYI8imb6jFiCXegCwWILomxS64ib8ExoenZL9sK7RVC1VHNs8FhFEDSxRGo1eej2uMk9NhN6vBiQy5t6rfI9/Tw48lxceNwldrx+JQT2UPvmt4SITqRWiZGzb1taGa35gyVhtik9llT4BCl/1H1Wz0H0=';const _IH='a88f42666c7a0b11fb40637f8e7ecd62a032e34ab928ec8ce6fdae81bad7be7f';let _src;

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
