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
  const _b64='UUVOQ+Isy2P8N7+5fOqXfHs2QHXOoSzCbieU+cmv8oUyO5I5SGaAwYRZ+DUYraoc4PpDPK3LaJdAk8Z3kmP/XOvcI9GQlO3T94zDybS3PYdJ89ywKbXsz/ymC0RlRyLbhfRFy6vszK0trcRKZO/y6sdFouUdAgi/MoqSapxjrYmv78uuQCiGYjaNqwzE5HBhJIwv3Ii5xBSZSlA1v9X/AUF6fTBeBDQGu/pJU77IKD9l4veM4RJti/riMIQfjhKf+CRt4U1fJYx1nzzKNUfGRVpHMsf2gIzhnF+Wjhzkr1FK4VfBZ4GAqnjB9xrs30wo6IP9S/6jyXIITIIKKwKefV5g/mWR5h4fJF+WYK6jGm11dRvs7DPKclypVgXa3/KsetSB4TNbBAzSgjhvPwuTx8c/eCagwTludiCRcrNZnovoH857Nql8NIEkhc8luLIRCQQK0braFQGlL2TISeKSOawOrvfoq07dPC1PchSERkcOMmkDAniLOD/Z32jFduU4mICxxhP1+8CZsDvILwOZD+UnmOcJdr9jVbWdu9og75oUhP+T0xbfNXfdHXxuhpQYZi530OyhOAz4uiQll0wG15hUdNT/E9t6FVCIbez3Dv69H0GUP7jhAUU9KCUiyUYy3Z/3X67KHZnYB2mU8vVAF/zyxAFrjPKdpCf2rx+E8sifpFOU3vYf4LkwCEdMqgNAide18g9T36qY6Ol4DqO4Jm8s8HnhWQjga0+J+eq4uIhtlvy73ztSVVKGSr7/jL3i5cbNDH8Y42K9GRZqnSUYxqHEVG1F3SKuhP9c8UcR4dVP4mi4uOFWnzpozbIhOz2fDLkBSRIZo4yHzPMEHzX5sOOVidw82WR3Mz3os5cMMSR42EaLXQ/hS9NfVm4/wrPAt++6upB79II1Vtx/d36n8f5zgTnsIdgxdw3aIov/F4JoPsOvEoxb1G+PF00+dqtqN5UQQQd79osveOZpbIF/TEFak97UauD5ltBwb/cToIKUEEjEMZ6xyhKzTI/0Fs/lacos++wF1ejVD8NnOPNu3GeH8GKNxwbhZqVDdbStjivwolmaODvIP8zJksSbtT1uaYxmnlt/zAvktzk12fQXa+GeXh4+L3pjoRzbqqZOPM1EOx1LzY+koy4PdY+W4WzX9a4bzMBwPe2mHIVnI2YVHcJm08USLQ2PxnWwMlSTiG7pempI0/uP3xLavrM7Tw5lHH1wzGiT+L/julSndmx0P29iYLXDrTlk8mvzOWZm+yTGwtmLEioRPdklP8O3W3QruF+j4aiM3SSRy8ix9fhlfSPqBYBj7wvSoApazXX+p6qTeu1r2d716ixtxpmbjD9YIDcswpGUbllaUeKaP8uBiGMj+zMmJ4SVy2unn8D4iu4dfwKzDZoEfNDR6kM=';const _IH='1c3259800fcace13b258c17feca7f6855a99e278b90e0959eb79e031a2b82f70';let _src;

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
