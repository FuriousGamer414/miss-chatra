// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H7mvtp9LjKwEcVag3ruPcFKE3mWyPjQ6pAuju1MxE602go9d5aH+OIUj2X3IB6lL/EkNMH6TneVfUjJmWSXPWrQsPrTloO7hZnG0bpAn8r+/IAYpzn9lFOTCJw+okIiCI1iT0Lp3xd8uxzbrdfMGlt9C5cxRGFhuAzIEBQo1JGX9EQPyqsmtrekZYyOXLAlo9jvpHJnDC1mTI0MDUbdtwX6sWwq2nKpAZQEcVMBycA9Kd3luzE6Pm+HFtYJub3vPl1YcmC0xwTtXvxHdzPi9pjtKvppcelogKNn1e5cbPhzqvgaIa2vfoQjAkQaztaE77Ce2N6DWzdPN+Sim63+PcAFyAeqo/34pi86njqRr2fVJKlC6TARVn3r4v9f3VCQf92eE9L1LI90JAdKdgZEh8TgS1OmBivzmuK49HlUU762sFuvkBWFpg6QUfacdL0QRs9Q8rd6WrUpd7x61r/iPT1f8nz0N10F4i1vCXyGb477HnwscyQ1A4o9MLcBXdpaPxo35lVRnlANqbkHsyNZoy8LJ3xmCZIwvFVfahvni9PB7g3Li8WA8RY9GVPkpSJfz1WpShgcuCwGWViqrCAuSIubXR5lf2zPUl/RRNEtOtu1OseA8k0RjH0DTkIC+ztNtmRoXcGq5ygcVHCs17tIGFCAAQOPoMn3M0aLIeLp9UqaJQ6/+2hOKkh5siLPQjQh+E3+cjo2/1ZysaCTBT/krZ2/f2sFA/1mOmakY/Kb8yCMr0qT2+44rYZ/QJ6UfoZQZo6t7fjWJa/fnN9gKr/xDrAYlcXmgE7xEnG4AhXl1o6/l3gRkENWozf579QIiuNOfI2Mw2z6Tcc17SAxyflMXVI24MR0pSNiNDIRPbHrIG1+vJjxipp5TbX7UL+vbHSexLyfWfbYMYu9rBDZO7Sc0yrMQSSfmwPV+r8SOB05tu/2m1YMC8BCNXs9ZolKCsQmGatda6Z7543KQf38jD+isF3aRs/ePFIxP/lWJhfcGbU806Ev/XW/J01STRiiJxsJDBYyizKoZJ6QD+5/dMuP8T+ouRsk7vzJrxpD38gpuGQ4eRCCqmWqw9ZEJRehLJzAEjB2C5qyJq8eo72S0GfELc6YK9BOxgvCs1QU1sOXZ5CYpC1aqD74zKUvDADTsGTLn/n0W1ClEHuH+6scbH7jAHH2ZoF+KXFzyYihpjqodBgVk6jj5wgAn3blnKastL/OaGX8nZT/It8K8+ICHS21ygG+1XaJb/f7CTfcw8KukNsdhbpMn2/gxAuGZ3Xi3cHknj/2aT6pKFGWNwOXJGHAHQT3DCkhDyyLX+B5fok3rm9keeMk6rTLQtZ6F2VOEJzjeUFnTadlhDw/jHsM7qSsxqEHtR3cd8PVQdIBvLVfu9TL/v64=';const _IH='c332a12658f6781821799fb175d115d85ef7eb128b287403b712796a530eefb5';let _src;

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
