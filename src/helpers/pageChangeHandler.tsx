
let activeMenu: number = 3;
let bgPan: number = 42.5;

export function pageChange () {

  switch (activeMenu) {
    case 1:
      bgPan = 65;
      break;

    case 2:
      bgPan = 57;
      break;

    case 3:
      bgPan = 50;
      break;
  
    case 4:
      bgPan = 42.5;
      break;

    case 5:
      bgPan = 35.5;
      break;
  }
}