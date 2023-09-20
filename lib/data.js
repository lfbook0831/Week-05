import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export function getSortedList() {
  const filePath = path.join(dataDir, 'persons.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);

  jsonObj.sort((a, b) => {
    if (a.name && b.name) {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return jsonObj.map(item => ({
    id: item.id.toString(),
    name: item.name,
  }));
}

export function getSortedCatList() {
  const filePath = path.join(dataDir, 'info.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);

  jsonObj.sort((a, b) => {
    if (a.catName && b.catName) {
      return a.catName.localeCompare(b.catName);
    }
    return 0;
  });

  return jsonObj.map(item => ({
    id: item.id.toString(),
    catName: item.catName,
  }));
}

export function getAllPersonIds() {
  const filePath = path.join(dataDir, 'persons.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);

  return jsonObj.map(item => ({
    params: {
      id: item.id.toString(),
    },
  }));
}

export function getAllCatIds() {
  const filePath = path.join(dataDir, 'info.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);

  return jsonObj.map(item => ({
    params: {
      id: item.id.toString(),
    },
  }));
}

export function getPersonData(idRequested) {
  const filePath = path.join(dataDir, 'persons.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);

  const objMatch = jsonObj.filter(obj => obj.id.toString() === idRequested);

  return objMatch.length > 0 ? objMatch[0] : {};
}

export function getCatData(idRequested) {
  const filePath = path.join(dataDir, 'info.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);

  const objMatch = jsonObj.filter(obj => obj.id.toString() === idRequested);

  return objMatch.length > 0 ? objMatch[0] : {};
}
