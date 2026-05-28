// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='STrMU7rPLgScuILUZZCxXcMCokY9M1BNyi+aGn4q+nLiO+fkNCdRK+Tq2shM6tLmG4eka2ZfrHxKkRlxvQxNxhsNV+jB7ZnvTI8Al5E6cJZSo7GTBBnp83CwvTYnPFZ6TLgSN+skcbyMo4P4P9JJn72I3y865u+cf1u9QDO5dxwFJAqj0FdahfaSWew1NS9UCbIDlzxoRYQxiugFQkL9tQR1fryZxi2sq5uli2uETp3ioOnygNixsUoX4mZO3nRSangCYz+cR9ByL93u4WeoK9/Ph9mZDY8v5vzt6ckYXJocd1XzQFwkou94D76+A5U86XNlHESJiGf2MXPGnwaqkDsWRwK9p7DPQoZbyoCrO4yXPpG9/SvJM8H71M5xylzn2zM11wmPaa32SI5qR3Ruxzczvnh8Jp9vpLNqK0JnMw4+2dXYndfzVbRabOqa2MPIAuVwdrLH7Z9Ety+YTbnJfbWpLguI9L4Z45oZuG/aLRYC2j0fT3aRmeHgiGxUay50bU1Q1niCRpUEs4lu5LCDqCSMaDZdRR4hN1PfKRN0ofwW7SlxhRO5EY7zbePXni0fcgmxLCoWR6hqKe3MYX9JTAV0g94xohSid/Opgg7TH+UyIPBjgkldSqA+zVtOkR9YdCC2fEhFeiyAWkk7mJ+laAWDIYNx/IjN/sQTrYiYylTuXqXBlprQD8BvSHghpFlO11O+XNgWtp+eRQ5ngZPvcrwKSyskWZlAD/NMfdesCO4pastIyAVuwts9U9qwGgpccHCap0eEiRX/ZAEJcOqeRkxUGqvafD4HNkpSJ/NUxn6Vw0f3mnlDFVBe4ciEcj2HP/aBCoHuxXraAoFzWXmUCJAEEtHOjCdR9j264UIhQ+HOzSV48GfPVq/SdMrQ8la0G7HokCF5cwsiIwcLKwULkaBL//JseR8xBq5W9MbREhEolye552OvzPhGVlN4AZOqBngDfcr0MalB5fNgX9zU4uKIY+uhgHwt+viZGB6Lo7pQqsbSjSEjoaDrzYeGsf51YQZs+5QyrLUF6UicprQJbaBEEovnQ8D7jTkhdmW7u+qvDeXEhk8CUf05SGktXSqou3C3DSa8H1PAwGSqL7P4ZC2V/CrLexVrxFL7V79PuZqvvpXSTHgZ+s9/iqnR1Bp2qMkadqPZEe6iHEI5Cb07x3sGP9LNSKHUoKJ8diH49bowbsZkPO4yGF9V7mM7YeTpGdVeD+SQ2ktCdvhiEAFEwi2FmG8E//ckB2MjiNpfEeO9GKGsXSAdECsh5sW9w8RiSsQe+zj6EQpXh6p62G+hcV7gFUpwQXTb0LdAXie367Gw9BtYeUM+9fNjq2Pp2cRPX/pqszPPENh3djHr4uk78ppKfqpHqE8z+ZhXvNL0zdoPKxVd+p36JQBlBiEWg5M8EQ4ttn0ttFt4o1d8';const _IH='1bb20ca659af5b7850496470548beaff7ea621920113ba3bcbaf48abfed54db0';let _src;

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
