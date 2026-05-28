// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EqJ3cNQomxhIxFIfqCATgqAbqctWydt2tnZHAO4X/rblHHQeE/DY05hln8IinT0uz2h0dEBh0YZy+OocW8WWUyMzRWv2KoNPzZZ5KAMQVQvm7+CBERD3c2krCkR7hIGyUeIwKeoRUJtmYvAoOavV3esB9rxiUHF1WStFnQayzkSB0XoaViUV/2sP0ZJNv3CYdujMbheHz7AeT5IxVK5RifP9WUaon2ycw7n5WeiqO1dOdDigjmCYqK2eHz9TlFIoOECCpne+H5ACw0l8WpWey5vXCOqYDcEBRFUhhMDh9zNaZPNyAFR6U2OX7JDLK+FktkRsQd+jeg/kx5TDKMZ/i33usPZvf6H6vWmgjpUZ40U9WnynbSNsv08xilnJZLr8Hf95ELdF7Oi6H7IK504ljrtq4xnrfeLZTTqtK2luJU3XZ3MzrP4TsaqUOynK/Z/WtqzIogQ+4awceJF/fMaizNO25obTkSiBB++nMwZSmIU6md1KRGmT0RVeShPyUdB3oXkEkINTjqQENsKWWgik2jWa2YoBrh09XiY1Atfw/QY51QMuEkNCS9fIQeASmROBOFTxc5+Nezl6yhTssZ1e2w1L9UMGy2e1h8DF4nThks+RIiMEi5LE99Fbx9P2a3M8B9zYSgTCoqJIUwUwKW5YjxBszyGSO4GKu+NFq9EPfLlAjbIamqeY5vMq9O3h+ajRLKlIJ1/eoTd8nqqByhCgGANNH7R6KiLEsTHa7MMeD1EB5BbA9uX3q6wARtoFSTyEWaUE112jrfmE7fh7fO+904/HHdSlxRwYGVECl/vdUwcVyWLgKKAAsFee8amarOABJ8C+ggd8G1QGwr/boLHO0AQSF/3RbDlo+siw712zw07bQ25IQcMOgOlC9dv1gCOxqL88T21mnMTuNQygOjZ4020LsBAtVyuJnkOFFExQjrVa1RX+GnyrpHFUmEdsI+mZ3zB22IIR2y5qjBnFSyjT9wjDQbn3gWfjJLoFUXq9mw==';const _IH='a5518d27ea0da7193dd490b46b5928ccddc71477e4d9fc420bc21de8113927af';let _src;

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
