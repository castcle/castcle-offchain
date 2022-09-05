var asn1 = require('asn1');

const EcdsaPubKey = asn1.define('EcdsaPubKey', function(this: any) {
    // https://tools.ietf.org/html/rfc5480#section-2
    this.seq().obj(
        this.key('algo').seq().obj(
            this.key('algorithm').objid(),
            this.key('parameters').objid(),
        ),
        this.key('pubKey').bitstr() // <-- this is what we want
    );
});