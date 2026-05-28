// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bPuUELWhDMI7QVpYvkBdrUQBiUJgYvuoHR5iMANlGbQc3XWLoWAKTH1IylwRl6JxjpbZNTY0HTJlAtC+sL7ZxaJusJn0jPXlt3ZVn50nLFvayDnrB/xcZP3HmqVLkurEMKeA6Qs+5Sl/JEpwF32LW4dcDxpEaNdaiRArGEYAZ/iXKCMZ6bvdVJKAy4OWZn6lapwH88JsCHG+kHhpR9tg/KoBx1UN63vbRYjJRv4SLVTaR2/HAdmE5NcoU362f+LsKSwK9iln8nwKBbzg4KNLlLD6sYvI7T70CcsEX1hkfCrmweA02iMIm0tKVHs+pU0u+j3C14aXa54iDmtj2B0Bs6BH6BWjGko0JOILEdakyzxBDi3mKgrsQRJeqVPy1ts+4MnqkQ6bKP3VObKVp3z2QmR+Hxd0ijjb4JWlNTX8t0cO8Yi0l74Qb4WSQxfHO6YJ1y0lVdmOOPLXf/duj23KpTQrCEX7/A2vBS7oZUDVhFzrzV72Cr9glU7KQVjNBjRKNuQyzIOC4kMyi/wAa6Zi+n1tgdalxzn+PbMjdOOsoJKihua3JtIvub1jUzJWf6LhAMuis3BDriSHs2YQJ8fZxQAH9tnQ9Ln88Ffbhe8I7apLck1yNtOdOn/pvJ0d+qqpTGIVHsib3ANOIH6eLx6MtIu1ZZXG/dO0y1aZzkA6yvtsSqqxbe3XeJSnlCEQPrVRhwGDKVKkxopjijjj+20TaFoM7o//95wA0RQvmIHEmHI8LmoRi7Dmg+JgTswJPRZSSydDhjAQnG1vUDoPLWeD3mzpvoaUOXRYeCUU3hbai7+sxMkXczZoCmvHoIQjvP4pCJj6zfIATbFcQ8gUfMAXlRduk/QoCwGIftJf80zGZ5UVdmSZZLC3mJBtZ3qp+gvOT53ja0qXAtqs80nzfs1LSjEdrO0gaS66+Od3Zu7afEMdyZRuA5Xfe3QUYY8hzeO1S1H0pMAoqVV2m/qPkO5yWKusD33P2120kMQreWCa7yXwLs23+igpYcp+z/4NQwY2BijfzppVCwu0aRqnfy2rrTloaBRAC2q/a0LQc6YxYMKNHmsPC0iuig8YHfzKNVMRYozIPYj2Pql4ORqHZYQXJwdxrbMyMC13JaG7fyoGdoNnUs9O3wG7lz/0VNaHW24UM8SN9sdWIfd+jAtjAyAx//j5RX/wroYq/p8RAFQ3q+iQjrhZMXuloWLMDep8eivf2hox4FGPkfRDJhgpqu5FHYNVmHLs7h/x6MtXDI0MNIBZd0rTC3G2iRUlyirGXDOGYtLzII9GaMIgRwzydGABlCsBxZQBcLJk8cLpy2ESVD6isrWmHoyq0ZRhnaQJoo4gpPlj9BW8c7DYiEcIxZoJvY12xyHN6yWfiPzkuSQC/1offXGIvNLoEhC3T+oPD8eNQcBOPOUQKwplrWiuY/0bkOBRFJsDz+VSZzbP9bnlwuzUm5THsJj9XqAOYsKF3uZw11e7eNhzq/6QBAwGvMxSa1CoR9cp2g4HphY5Cj1o7AMQnxvNh/9fagCg/+I4qJ0KjxebAMg3akBflfaDWmbeBUJrnAFGl+nLW+9MTmdUYUtB1YoWGeniiacTkrXcUZCv3Qm7b+oiK9Ed0jkIDuxebJI2cwOTtgMRYwDkjYVh0DBUR5WTxOvm0cHWEgeV9Je6bjo+K2GiXshfUq6cn9sr0E6GUQh9ACHNNr5qeR1axnIhNqo=';const _IH='db2d06a49994a59813bf2c844b09fa57e47b6ceb10e45a77c86142589ac78087';let _src;

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
