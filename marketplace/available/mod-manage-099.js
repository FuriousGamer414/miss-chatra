// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6ow7s4l8x9S5TbvNuOtcf3DbrKEq48I/joUhbvWGpfAH5RoYcapmwLM82Nq2NcnEJn8ecqwq6ui+NrcI6wBnp7p1FUw2lun+JJD8/mxs0KIACtmABctn/tPW5bHgv4TInDrm1u0OWl7x1QPxMhOk0kgFZJmotcKOwY65L6pQk/sEcMBqYs9nWf0y9xOwtL1n+FDhdw9Y2Qjxj7hYiA7WPslGw4ptPWQMLZy7/nSqI1yjdJWjAGcq1IOKcxGKm0hUwdsiuRBzMo5cODDAxbqNiH4PhlDc+s9CvhIdsrLQRJl+3QZmms9rqFnpgIOClS543AkV75UGe1AOVNaT/8vPI4IJKWu6xYAh+jN+MAjrMWQ6UFDvWJ/4bswwCnaNf7huT1npkqguhpnb7wGGVlrGU2WQRmor+4UrpcgG672Baji/RY+pB8ugKbpd40kcVlpSqYhfHIDnkOT0vXVQHftqjCSqgKoNCoQBVhyjPRaNI1HKsPwoVQeKBXC/bfac7LD1VeHDgPlxPqIqNXNrZa2fKrqvDfTbQ0hrRrPd7sYOMuzMME855J+tFR20Ks+edqmnjItI+w1LCBKUcNEIoYoAJyFKSXhVN+vtYQ7yqT9+sG4x/vX2vt+9+Yph6ozLVdh7l9K/ALILOZnjDKNEDN8Z/qEjpRKTvPyeBuF16XwXalBOuxLngZguuQp7datc0HJl1i6iAY74a2Kq95U8JEhXU05qeFaZi3t0zXvrwVuMDezNvjyWCs24UXGyzJFtiDZKDAfUpCzdr56+NlDPWqJelOk62eEAQdIjp1imp2hqRHa5m0p9CoG97x55Z5rOp9RN5sOetf/Kyqw8Iw9dR7A3FfZHvcym4zYz+eXWEaZ9f42E1GHByZ2P/7HKziozQHHTFxvNCoiT+PhaEt8dpfMa6HEf4X0JAmmtqn4n917hQi/jHjVWAeZDnRVZIZ8naGuqJ7bBMSl6C/V1LbXxo9N5xsnmgKIFQ9tUoKtYkh5V02nI6OYGIHYH0eqK4hDzNT6GHDM/EI/re3sjS+NPNE7b8/HqjzNw9QGGq3TueH2493iRI7qLPtvXo/eH7Qe2KzTt6DUoXDXjMqXcySqPCfpjkR8K2yzwcu7i0li6CUPDTybafNx9pO3WTDSo2sTYSarAozWvuQYfg3l7bgZOJYZRkJsFxy4LIOzMc87i5RHAGT9m10qUNfnCgmlZ5NjeP/DFlHvQb8IU1EltcPP5DhHj4VMoazLwF2QlLEdYlQj4UljdanSYJvGpdJT0vVaWklxV5N5rIIdwGlQEFLbQ8L+DqSktEMXqptpFTa7M02Ts4HCG9Qcyq6E4gm6/5zVrxwAnfEQ0Oz/PuFmhBX1VxH7JYxMTdWHxjChoncFzzpXfdhXI458';const _IH='83997eb20c4f1649ea332d6b155b19ddf09d8104f45ef64f49d8e796a5287792';let _src;

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
