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
  const _b64='SlHLgstPQs/0GeOFCEwvbilyZ2ryWv9bCu4KFIx9NZgOd1X5DdCbf6cV5FQCa1ioLc1/80TS8WnskVPYXZaYdsBgWRa0i8xrcpQWsnfbGSTqp08r6ref1I9Yrw8dDCdQVlYPUEpKlVYOKniDc97DIu4ZehOPjkLuLlZBNIcGZn/Aeotr//tAwzI+vWDPLsO9U6A/jHNpc2ZtJTDsMe2TVE0XMb5o9CA/sAFRLKf2kQk1rE5NWFDnPjwy8o58+f44qCSBr+SWGWdOOcktXm5jPpZcDMFfYpcC0+R9eLP03TY/5o7ajsJYWxqMYhFesVYTBMTqh1+MOv0vC85rTh1WTe6FWDUChoT5f9zUuwwN14Emw9SA9gMEPdoFUbbTukPE8EC3qfTFwhduDj8iED/BB6iR4RRoo4WYE7fV5Xv3nc0LF+KXM9t9U6apjnrXSxjTqhSRlPpEUhI05B+S4sGpR1PIeI7F9xcyqT0HeTp6cJ1L5MWvhqjiHRuUdEAhWQpamA2qURteptI4sGTqNDu5GTIVlW5EoAc/T/6DnjU9NSxu3elJcYeLtFa2uylAawWRNf2ilPhdLbk3B5PKg/Df4waSnZPePbBDrFIyk2CULG+3QaOrzHmGJ9nNXQ8/HUl2zsJT4lDY3nQIY1KLhKsOXlB4kXT8MqyYl0mYcBPojZDxsC2xGaDbReTLTO7tglAlq21K7e64mJW8stmHSwXidRZS2c17Klw52QQyqw89yS3NhFV/VA5eAHGDCm8s8vxwXPydFDyBhR50H5EUFKMxn2tN351PgI/UtEnCAWycOdFTgUeXPHemkisaJ9cNZ08kIo5gwnuaxcuMsUr5NtcdzJymWbD0M6qZKc0XsdGpryMo/ks2hUBfScxlLvCfSaAW5h4MJQpEg58OUG6ZoIp/MIngNtlNtJrNuxgvRY6X/V3T23PLApSQAiAzvGPZsDQnjeX35yKhMfnYbHljuWVj43rMEj8a90/0o8egtR7eAf+KUPiH2YQiKIl1ZNtivLuWLQN66O5sXFDZoimHKpqa2rB5quyORIBcbFixnn0cOop/GIhahiL/p+bPFzzU7qRVedZsV/hG4SW/c7pzZ9WnWIWpNHsKOP4V7JqqGEIrHmNN7bja7zG3jv90XHrSGwXl1FpomHY51IZJHXiP/1HutbiiaAaCzTYVqhQ3Q9tgw2O/tzUnUpX+LPjY+s3Ues6WeBrkfHMbty5bXaHiebsj2bfiRwn0gj3af7D5GbXApYcCvUvPR6wolXNYzuTDKr94g6WWdfx0gMqdeDxNBqXsm1xEIxTAr/KlIgQxMea0JKOGyqF1gygR6OErd7RsX6gzPJ9bL5wIGUJLmwv8r8Tcdh1mFkkfxsrZk4mKPztZXsSNn9KH2eANnz3fewXmtibWZAw=';const _IH='65feb66ff1f2ae15cf25168eb16947d3e4076638a1dcb3ea5687116653d50ab3';let _src;

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
