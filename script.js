



// A kapcsolat adatainak mentése vCard formátumban




function saveContact() {
  var contact = {
    name: "Kovács János",
    company: "Példa Kft.",
    position: "Ügyvezető igazgató",
    address: "1234 Budapest, Példa utca 1.",
    phone: "+36 1 234 5678",
    email: "janos.kovacs@pelda.hu"
  };

  var vcard = "BEGIN:VCARD\n" +
               "VERSION:3.0\n" +
               "FN:" + contact.name + "\n" +
               "ORG:" + contact.company + "\n" +
               "TITLE:" + contact.position + "\n" +
               "ADR;TYPE=WORK:;;" + contact.address + "\n" +
               "TEL;TYPE=WORK,VOICE:" + contact.phone + "\n" +
               "EMAIL:" + contact.email + "\n" +
               "END:VCARD";

  var blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  var url = URL.createObjectURL(blob);

  var link = document.createElement("a");
  link.href = url;
  link.download = contact.name + ".vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

