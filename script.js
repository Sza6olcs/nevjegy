

function saveContact() {
  // Kapcsolati információk definiálása
  var contact = {
    name: "Szabolcs Balázs",
    title: "Operations & Sales Manager",
    email: "balazs@inducat.com",
    mobile: "+36 20 447 2990",
    photoUrl: "https://bszabolcsl.hu/profilepic.png" // A profilkép URL-je
  };

  // Profilkép betöltése és base64 kódolása
  fetch(contact.photoUrl)
    .then(response => response.blob())
    .then(blob => {
      var reader = new FileReader();
      reader.onloadend = function() {
        var base64data = reader.result.split(',')[1];
        
        // vCard string létrehozása a profilképpel és mobilszámmal
        var vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
TITLE:${contact.title}
EMAIL:${contact.email}
TEL;TYPE=CELL:${contact.mobile}
PHOTO;ENCODING=b;TYPE=JPEG:${base64data}
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
      };
      reader.readAsDataURL(blob);
    })
    .catch(error => console.error('Hiba történt a kép betöltése során:', error));
}
