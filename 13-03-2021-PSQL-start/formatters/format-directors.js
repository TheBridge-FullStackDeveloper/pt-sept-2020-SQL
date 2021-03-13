const fs = require('fs');
const path = require('path');

const directors = require('../jsons/directors.json');

function run() {
  const withFormatterNationalities = directors.map((director) => {
    let tempNationality = director.nationality;

    if (tempNationality.includes(' y ')) {
      tempNationality = tempNationality.replace(/ y /gi, ' ');
    }
    if (tempNationality.includes('/')) {
      tempNationality = tempNationality.replace(/\//gi, ' ');
    }
    if (tempNationality.includes(' e ')) {
      tempNationality = tempNationality.replace(/ e /gi, ' ');
    }
    if (tempNationality.includes('[')) {
      tempNationality = tempNationality.split('[')[0];
    }
    if (tempNationality.includes('(')) {
      tempNationality = tempNationality.split('(')[0];
    }
    if (tempNationality.includes('\n')) {
      tempNationality = tempNationality.split('\n')[0];
    }
    if (tempNationality.includes('\n')) {
      tempNationality = tempNationality.split('\n')[0];
    }

    tempNationality = tempNationality.replace(
      'Estados Unidos',
      'Estadounidense'
    );
    tempNationality = tempNationality.replace('honorario', '');
    tempNationality = tempNationality.trim().split(/, /).join(',');
    tempNationality = tempNationality.split(/\s+/).join(',');

    if (!tempNationality.includes(',')) {
      let newNationality = '';

      tempNationality.split('').forEach((letter, index) => {
        if (index > 0) {
          newNationality += /[A-Z]/.test(letter) ? `,${letter}` : letter;
        } else {
          newNationality += letter;
        }
      });

      tempNationality = newNationality;
    }

    // Remove dups
    const withoutDups = [...new Set(tempNationality.split(','))].join(',');

    return {
      ...director,
      nationality: withoutDups.toLowerCase(),
    };
  });

  const withFormattedRoles = withFormatterNationalities.map((director) => {
    let tempRoles = director.roles;

    if (tempRoles.includes(' y ')) {
      tempRoles = tempRoles.replace(/ y /gi, ',');
    }
    if (tempRoles.includes(' e ')) {
      tempRoles = tempRoles.replace(/ e /gi, ',');
    }
    tempRoles = tempRoles.trim().split(/, /).join(',');

    if (!tempRoles.includes(',')) {
      let newRoles = '';

      tempRoles.split('').forEach((letter, index) => {
        if (index > 0) {
          newRoles += /[A-Z]/.test(letter) ? `,${letter}` : letter;
        } else {
          newRoles += letter;
        }
      });

      tempRoles = newRoles;
    }

    // Remove dups
    const withoutDups = [
      ...new Set(tempRoles.split(',').map((el) => el.trim())),
    ].join(',');

    return {
      ...director,
      roles: withoutDups.toLowerCase().replace(',,', ','),
    };
  });

  // Escribimos en archivo el resultado final
  fs.writeFileSync(
    path.join(__dirname, '../jsons/directors_formatted.json'),
    JSON.stringify(withFormattedRoles)
  );
}

run();
