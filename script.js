



function saveContact() {
  // Kapcsolati információk definiálása
  var contact = {
      name: "Balázs Szabolcs",
      title: "Operations & Sales Manager",
      email: "szabolcs.balazs@outlook.com",
      phone: "+36 20 447 2990"
  };

  // vCard string létrehozása
  var vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:${contact.name}\nTITLE:${contact.title}\nEMAIL:${contact.email}\nTEL;TYPE=WORK,VOICE:${contact.phone}\nEND:VCARD`;

  // Blob létrehozása a vCard adatokból
  var blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });

  // Link elem létrehozása
  var link = document.createElement("a");

  // Blob URL beállítása és letöltési attribútum
  link.href = URL.createObjectURL(blob);
  link.download = `${contact.name}.vcf`;

  // Link hozzáadása a dokumentumhoz, kattintás szimulálása és eltávolítása
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Az objektum URL visszavonása
  URL.revokeObjectURL(link.href);
}

