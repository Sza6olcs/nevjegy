function saveContact() {
  // Kapcsolati információk definiálása
  var contact = {
    name: "Szabolcs Balázs",
    title: "Operations & Sales Manager",
    email: "balazs@inducat.com",
    mobile: "+4915163053441",
    company: "Inducat GTS." };

  // vCard string létrehozása
  var vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
TITLE:${contact.title}
EMAIL:${contact.email}
TEL;TYPE=CELL:${contact.mobile}
ORG:${contact.company}
END:VCARD`;

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
