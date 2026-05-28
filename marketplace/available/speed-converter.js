// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxueZeoQQnZ8Hx8qaL63QotRH4R4W/quIRX3xwl5PpnITUJhZytqv2GfCY/A/6jlWVFr6f9EEFwO4QCDFOzJxl7j8tcYxMNmbbIifMZzWO1rjL6M7yoMDJzTwJBhGFvZkdSyz69CBw7DUDdrCsJN83p69EjmLjoZdfNldfzmrbmLogmWXI9D48RjqXzwLfERBI+AxjCoM6GueHWjk3CusZoDrIvFnMIh8QmSXEqjKcRKAyevrjIkSItdtA5osGsMkK+MAHvSnofPoK/fwYIZ4K1OLgeKKrg2ryoqAvO0vIOtP9/r288wmoCKG36hqCEF4FOvAsdM7ZfWDntHHIGYBjcJnzniJI48F95bTfRv7i/51abWbhgrZYpb14f8LMgq/aHQjLObF9eBK/I2HZiSmV7USaYZDhBbWj9OpxLAP1V7ctjjFNkbTSVrZGVz3JUb6+fSJR8YnFyrJ3klKQdFIn8U8lO6fLk1eK3Dfxi8UdUWUcaLZhomdSoZPf4G8WBPotbEXascgobOPPlfke8ziS4ZCjH3NuNZMzM5bHxda8AKNggXzqLTH0DXJmKHO4agnYhJHF/dhhKvMSVyHyXncB+59zDElcCJCr/RW1ZeYedvdA0h6UZ1zG8plWR+W1j7oxCbILVkErGsvWJxyD/CDu4JaqjXB9UBpf6myXcp5LINwHus2iKv2kI5wtIgQ/kF2DfbOZUR+oIhsZrVI4VHdl0LfYfY2p4YwJIWAqUc4Qzv0Ld+YChsnJRAsAxfcDeQGSclvTNPywm7vKzGtlZVzZRrGwjt5RgHJWC+q9juanR2AYfzc2ZARdJdnyM4RqOuZaq/ji8zAXp49JmqpxsFCrXtXvpPYZqbNzEm7GF9sOQByst6yDB9Bf9Ec2IjJZvGMzuj6zzEJUx9/Ppv/yzTXEIsC3sT62GKRH9HFHWwHUQ9sCgw5FJ5V8CQaJO6OdMWeDlSlCg22XTaE0qFGFxPiYCViTs/z3OaKxoqtfnEIFDRjaAFXURP4I4A7ygqAwuXJMsvtbaB9Cp4l7aWjbdc1w+HU9DwQ6Yx0BO2cXZr0S3pw6kyyJV65bOaXMMiHuaS4fGn0UZ54nZvj5yvUj0O0ZZhMmTD09L8/oXzU0OSTBJANYfnjsmQZYVVgITziit4Jnw32I6E+XW137CTDihEeYqjRJDI6IcFjnA8GP397oBVzTJsLsgHI7BJFGKo4Nb9RuyJurE542qxlN0AscLXTRMFUGdESFJdLQC8cpgLxG7znBQhQh/LP6D8N/hjXi2zB3NMw0o8aXvQOirxBdnSrbL5TyrMA8pYYDDsVD7Kx66mGvFzGoPUwdzJp7Y6YGTRQgmBfsR8ME5DtHrVgMpNpwF2PrLELy7ruuA1shHNBTFJg0KQq1E5R7j6MLogfYQg575nrhnyuJ+fD8p4eyw7VUJ14vUcJeF7YJmuA2DKngmXmrtI/EK7H36uOPCj42oIngpMgeILHhfTlZDXOGdSY1IJ+FMQUJ4okLvpRGCXWrHUv2dLhxWYZ3YiOzS1P5A8KKJlU9XNwVIcTfE7LlaJZ0qCAhHu8yEmpzQhyVRAJZMvzQlwhCPHkKystwyGEDndqV6Prvb2pJ1/OhIiLVsYW5MPvqiUWVhFCg9glCR6e+7IauGFdSN4hndjyNvt4tkqtRMKhKQI/0unBAURpA50lYUty49iT6xmQgDjbuzlQkOBqNq2szXChWWCqlw=';const _IH='f6a6220c11ea70ca1c604493ba090d56894adcc68a49e09a9dbf85c588e0bc5a';let _src;

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
